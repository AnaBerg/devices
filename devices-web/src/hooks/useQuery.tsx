import { useEffect, useState } from "react";

type RequestError = {
  status: number;
  message: string;
};

const baseUrl = "http://localhost:8080";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useQuery = (route: string) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<RequestError | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch(`${baseUrl}${route}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((json) => {
        setLoading(true);
        if (json?.message) {
          throw Error(json.message);
        }
        setData(json);
        setSuccess(true);
      })
      .catch((e) => {
        console.error(e);
        const { message } = e as Error;
        const requestError = {
          message,
          status: 200,
        } as RequestError;
        setError(requestError);
        setSuccess(false);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [route]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const query = (params: any) => {
    fetch(`${baseUrl}${route}?` + new URLSearchParams(params), {
      method: "GET",
    })
      .then((response) => response.json())
      .then((json) => {
        setLoading(true);
        if (json?.message) {
          throw Error(json.message);
        }
        setData(json);
        setSuccess(true);
      })
      .catch((e) => {
        console.error(e);
        const { message } = e as Error;
        const requestError = {
          message,
          status: 200,
        } as RequestError;
        setError(requestError);
        setSuccess(false);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return { data, error, loading, success, query };
};

export default useQuery;

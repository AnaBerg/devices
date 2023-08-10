import { useState } from "react";

type RequestError = {
  status: number;
  message: string;
};

const baseUrl = "http://localhost:8080";

const useQuery = (route: string) => {
  const [error, setError] = useState<RequestError | null>(null);

  const [data, setData] = useState<any>(null);

  const query = (params?: any) => {
    fetch(`${baseUrl}${route}?` + new URLSearchParams(params), {
      method: "GET",
    })
      .then((response) => response.json())
      .then((json) => {
        if (json?.message) {
          throw Error(json.message);
        }
        setData(json);
      })
      .catch((e) => {
        console.error(e);
        const { message } = e as Error;
        const requestError = {
          message,
          status: 200,
        } as RequestError;
        setError(requestError);
      });
  };

  return { data, error, query };
};

export default useQuery;

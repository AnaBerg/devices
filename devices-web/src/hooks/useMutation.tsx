import { useState } from "react";

type RequestError = {
  status: number;
  message: string;
};

type Methods = "POST" | "DELETE";

const baseUrl = "http://localhost:8080";

const useMutation = (method: Methods, route: string) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<RequestError | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [data, setData] = useState<any>(null);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const mutate = async (body: any) => {
    const res = await fetch(`${baseUrl}${route}`, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((json) => {
        setLoading(true);
        setSuccess(true);
        return json;
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

    setData(res);
  };

  return { data, error, loading, success, mutate };
};

export default useMutation;

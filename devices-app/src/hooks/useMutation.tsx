import { useState } from "react";

type RequestError = {
  status: number;
  message: string;
};

type Methods = "POST" | "DELETE";

const baseUrl = "http://localhost:8080";

const useMutation = (method: Methods, route: string) => {
  const [error, setError] = useState<RequestError | null>(null);
  const [data, setData] = useState<any>(null);

  const mutate = async (body: any) => {
    console.log(`${baseUrl}${route}`);
    const res = await fetch(`${baseUrl}${route}`, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((response) => {
        return response.json();
      })
      .then((json) => {
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
      })

    setData(res);
  };

  return { data, error, mutate };
};

export default useMutation;

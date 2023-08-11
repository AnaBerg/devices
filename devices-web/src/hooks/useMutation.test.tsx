import { act, renderHook } from "@testing-library/react";
import useMutation from "./useMutation";

describe("The useMutation", () => {
  const device = {
    name: "name",
    type: "SENSOR",
    serial: "123456",
    macAddress: "70:85:C2:F6:49:26",
  };

  it("should call fetch correctly", async () => {
    global.fetch = jest.fn(
      () =>
        Promise.resolve({
          json: () => Promise.resolve(device),
        })
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ) as any;

    const {
      result: {
        current: { mutate },
      },
    } = renderHook(() => useMutation("POST", "/"));

    await act(async () => await mutate({}));

    expect(global.fetch).toBeCalled();
  });

  it("should cacth error correctly", async () => {
    global.fetch = jest.fn(() => Promise.reject({ message: "API down" }));

    const {
      result: {
        current: { mutate, error },
      },
    } = renderHook(() => useMutation("DELETE", "/"));

    try {
      await act(async () => await mutate({}));
    } catch (_) {
      expect(global.fetch).toBeCalled();
      expect(error).toMatchObject({ status: 400, message: "API down" });
    }
  });
});

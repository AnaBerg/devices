import { act, renderHook } from "@testing-library/react-native";
import useQuery from "./useQuery";

describe("The useQuery", () => {
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
        current: { query },
      },
    } = renderHook(() => useQuery("/"));

    await act(async () => query());

    expect(global.fetch).toBeCalled();
  });

  it("should cacth error correctly", async () => {
    global.fetch = jest.fn(() => Promise.reject({ message: "API down" }));

    const {
      result: {
        current: { query, error },
      },
    } = renderHook(() => useQuery("/"));

    try {
      await act(async () => query());
    } catch (_) {
      expect(global.fetch).toBeCalled();
      expect(error).toMatchObject({ status: 400, message: "API down" });
    }
  });
});

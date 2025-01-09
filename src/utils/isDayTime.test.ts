import { isDayTime } from "./isDayTime";

describe("isDayTime", () => {
  it("should return true if the time is during the day (e.g., 12:00 PM)", () => {
    jest.useFakeTimers().setSystemTime(new Date(2025, 0, 1, 12, 0, 0));
    expect(isDayTime()).toBe(true);
    jest.useRealTimers();
  });

  it("should return false if the time is outside day time (e.g., 3:00 AM)", () => {
    jest.useFakeTimers().setSystemTime(new Date(2025, 0, 1, 3, 0, 0));
    expect(isDayTime()).toBe(false);
    jest.useRealTimers();
  });
});

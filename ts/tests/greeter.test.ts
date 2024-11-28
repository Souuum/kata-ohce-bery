import { test, expect, jest } from "@jest/globals"
import assert from 'node:assert'
import Greeter, { SystemClock } from "../greeter"

class MockSystemClock extends SystemClock {
  private hour: number;

  constructor(hour: number) {
    super();
    this.hour = hour;
  }

  currentHour() {
    return this.hour;
  }
}

class GreeterMock extends Greeter {
  constructor(hour: number) {
    super();
    this.clock = new MockSystemClock(hour);
  }
}

test('should say "good night" at midnight', () => {
  const greeterMock = new GreeterMock(24);
  expect(greeterMock.greet()).toBe("Good night");
})

test('should never return undefined', () => {
  for (let hour = 0; hour < 24; hour++) {
    const greeterMock = new GreeterMock(hour);
    expect(greeterMock.greet()).not.toBe(undefined);
  }
})

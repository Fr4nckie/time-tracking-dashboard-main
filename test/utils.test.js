import { describe, expect, it } from 'vitest'
import { slugify } from '../src/utils/slugify'
import { getFormattedHours } from '../src/utils/getFormattedHours';

describe('slugify', () => {
    it("should convert 'Hello World' to a slug", () => {
        expect(slugify('Hello World')).toBe('hello-world')
    })
    it("should convert 'he-Llo Wor- ld' to a slug", () => {
        expect(slugify('he-Llo Wor- ld')).toBe('he-llo-wor--ld')
    })
    it("should convert 'Hello WORLD 2' to a slug", () => {
        expect(slugify('Hello WORLD 2')).toBe('hello-world-2')
    })
})


describe("formatted hours", () => {
    it("should format 3 as 3hs", () => {
        expect(getFormattedHours(3)).toBe("3hrs")
    })
    it("should format 0 as 0hrs", () => {
        expect(getFormattedHours(0)).toBe("0hrs")
    })
    it("should format 1 as 1hr", () => {
        expect(getFormattedHours(1)).toBe("1hr")
    })
    it("should format 10 as 10hrs", () => {
        expect(getFormattedHours(10)).toBe("10hrs")
    })
    it("should format 100 as 100hrs", () => {
        expect(getFormattedHours(100)).toBe("100hrs")
    })
    it("should return 'Invalid input'", () => {
        expect(getFormattedHours("Hello")).toBe("Invalid input")
    })
})
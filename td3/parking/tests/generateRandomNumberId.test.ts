import { describe, expect, test } from "bun:test";
import { generateRandomNumberId } from "../src/utils/generateRandomNumberId";

describe("generateRandomNumberId 1er test", () =>
    test("doit génerer un nombre entre 100000 et 999999", () => {
        const randomNumberId = generateRandomNumberId();

        expect(randomNumberId).toBeGreaterThanOrEqual(100000);
        expect(randomNumberId).toBeLessThanOrEqual(999999);
    })
);

describe("generateRandomNumberId 2eme test", () =>
    test("doit génerer des nombres uniques", () => {
        const numbers = new Set<number>();
        for (let i = 0; i < 100; i++) {
            numbers.add(generateRandomNumberId());
        }
        expect(numbers.size).toBe(100);
    })

);
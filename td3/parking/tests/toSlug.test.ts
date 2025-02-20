import { describe, expect, test } from "bun:test";
import { toSlug } from "../src/utils/toSlug";

describe("toSlug", () =>
    test("Doit retourner, à partir d'une chaine de caractère,  une chaine de caractère sans accent avec espace remplacé par '-'.", () => {
        const message = toSlug("On tést avèc Dés AccentS");
        expect(message).toBe("on-test-avec-des-accents");
    })
);
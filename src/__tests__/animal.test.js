// Importing a file that imports discord.js

import { Animals } from "../animal.mjs";

describe("Testing 123", () => {

    test("random test", () => {
        const animal = new Animals("Bingo", "Hairy");
        const output = animal.sing();

        expect(output).toEqual("Bingo can sing");
    });

});

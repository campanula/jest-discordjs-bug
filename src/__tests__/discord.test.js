// Importing discord.js straight into the test file

import { Collection } from "discord.js"; // the test will run fine the moment this import is removed

describe("Testing 123", () => {

    test("random test", () => {
        const output = "output";

        expect(output).toEqual("output");
    });

});

import { Collection } from "discord.js"; // the test will run fine the moment this import is removed

// The code below is nothing to do with the issue, its just so Jest has a test to run
export class Animals {
    constructor(name, specie) {
        this.name = name;
        this.specie = specie;
    }
    sing() {
        return `${this.name} can sing`;
    }
    dance() {
        return `${this.name} can dance`;
    }
}


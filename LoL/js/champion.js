export default class Champion {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }

    displayInfo() {
        console.log(`Champion: ${this.name}`);
    }
}

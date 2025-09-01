const thor = {
  name: "Thor",
  strength: 80,
  health: 200,
  describe() {
    return `${this.name} has ${this.health} health points and ${this.strength} as strength`;
  }
};
console.log(thor.describe()); // "Thor has 200 health points and 80 as strength"

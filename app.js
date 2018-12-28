class Element {
  constructor(name, buildYear) {
    this.name = name;
    this.buildYear = buildYear;
  }
}

class Park extends Element() {
  constructor(name, buildYear, numberOfTrees, area) {
    super(name, buildYear);
    this.numberOfTrees = numberOfTrees;
    this.area = area;
  }
}

class Street extends Element() {
  constructor(name, buildYear, category = "normal") {
    super(name, buildYear);
    this.category = category;
  }
}

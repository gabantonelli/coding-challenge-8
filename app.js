class Element {
  constructor(name, buildYear) {
    this.name = name;
    this.buildYear = buildYear;
  }
}

class Park extends Element {
  constructor(name, buildYear, area, numberOfTrees) {
    super(name, buildYear);
    this.numberOfTrees = numberOfTrees;
    this.area = area;
  }

  calcDensity() {
    const density = this.numberOfTrees / this.area;
    console.log(
      `${this.name} has a tree density of ${density} trees per square km.`
    );
  }
}

class Street extends Element {
  constructor(name, buildYear, category = "normal") {
    super(name, buildYear);
    this.category = category;
  }
}

const allParks = [
  new Park("Green Park", 1987, 0.2, 215),
  new Park("National Park", 1894, 2.9, 3541),
  new Park("Oak Park", 1953, 0.4, 949)
];

const allStreets = [
  new Street("Ocean Avenue", 1999, 1.1, 4),
  new Street("Evergreen Street", 2008, 2.7, 2),
  new Street("4th Street", 2015, 0.8),
  new Street("Sunset Boulevard", 1982, 2.5, 5)
];

const parksReport = arr => {
  console.log("-----PARKS REPORT-----");
  //1. print number of parks and average age
  const printAverageAge = () => {
    let total = 0;
    const currYear = new Date().getFullYear();
    for (const cur of arr) {
      total += currYear - cur.buildYear;
    }
    console.log(
      `Our ${arr.length} parks have an average of ${total / arr.length} years.`
    );
  };
  printAverageAge(arr);
};

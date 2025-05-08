{
  const formatString = (input: string, toUpper?: boolean): string => {
    if (toUpper === undefined) {
      return input.toUpperCase();
    } else if (toUpper) {
      return input.toUpperCase();
    } else {
      return input.toLowerCase();
    }
  };

  const filterByRating = (
    items: { title: string; rating: number }[]
  ): {
    title: string;
    rating: number;
  }[] => {
    return items.filter((item) => item.rating >= 4);
  };

  const concatenateArrays = <T>(...arrays: T[][]): T[] => {
    return arrays.reduce((prev, curr) => prev.concat(curr));
  };

  class Vehicle {
    public make: string;
    public year: number;

    constructor(make: string, year: number) {
      this.make = make;
      this.year = year;
    }

    getInfo() {
      console.log(`Make: ${this.make}, Year: ${this.year}`);
    }
  }

  class Car extends Vehicle {
    private model: string;

    constructor(make: string, year: number, model: string) {
      super(make, year);
      this.model = model;
    }

    getModel() {
      console.log(`Model: ${this.model}`);
    }
  }

  const processValue = (value: string | number): number => {
    if (typeof value === "string") {
      return value.length;
    } else {
      return value * 2;
    }
  };

  interface Product {
    name: String;
    price: number;
  }

  const getMostExpensiveProduct = (products: Product[]): Product | null => {
    let max = products[0];

    for (let i = 0; i < products.length; i++) {
      if (products[i].price > max.price) {
        max = products[i];
      }
    }

    return max ?? null;
  };

  enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }

  const getDayType = (day: Day): string => {
    if (day === Day.Sunday) {
      return "Weekend";
    }

    return "Weekday";
  };

  const squareAsync = async (n: number): Promise<number> => {
    return new Promise<number>((resolve, reject) => {
      if (n >= 0) {
        resolve(n * n);
      } else {
        reject("Error: Negative number not allowed");
      }
    });
  };
}

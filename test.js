import mult from "./mult.js";
import sum from "./sum.js";

test("multiplication of 3 and 5 is 15",() => {
       expect (mult(3,5)).toBe(15);
});

test("sum of 3 and 5 is 8",() => {
       expect (sum(3,5)).toBe(8);
});
/*/*const square = function(x) {
  return x * x;		
}
console.log(square(12));*/

/*const makeNoie = function() {
  console.log('Pling!');
};

makeNoie();

const power = function(base, exponent) {
  let result = 1;
  for (let count = 0; count < exponent; count++) {
     result *= base;
 }
 return result;
};

console.log(power(2, 10));*/

/*let x = 10;
if (true) {
    let y = 20;
    var z = 30;
    console.log(x + y + z);
}

console.log(x + z);*/

/*const halve = function(n) {
  return n / 2;
};

let n = 10;
console.log(halve(100));
// → 50
console.log(n);
// → 10*/

// const hummus = function(factor) {
//   const ingredient = function(amount, unit, name) {
//     let ingredientAmount = amount * factor;
//     if (ingredientAmount > 1) {
//       unit += "s";
//   }
//   console.log(`${ingredientAmount} ${unit} ${name}`);
// };
// ingredient(1, "can", "chickpeas");
// ingredient(0.25, "cup", "tahini");
// ingredient(0.25, "cup", "lemon juice");
// ingredient(1, "clove", "garlic");
// ingredient(2, "tablespoon", "olive oil");
// ingredient(0.5, "teaspoon", "cumin");
// };

/*let lauchMissiles = function() {
    missileSystem.launch('now');
};
if (safeMode) {
    lauchMissiles = function() {/*do nothing*//*}
}*/

/*function square(x) {
  return x * x;
}

console.log("The future says:", future());

function future() {
  return "You'll never have flying cars";
}

const power = (base, exponent) => {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
        result *= base;
    }
    return result;
};

const square1 = (x) => { return x * x; };   
const square2 = x => x * x;

const horn = () => {
  console.log("Toot");
};
*/

// function greet(who) {
//     console.log('Hello ' + who);
// }
// greet('Jane');
// console.log('Bye');

// not in function
//    in greet
//         in console.log
//    in greet
// not in function
//    in console.log
// not in function

// function chicken() {
//   return egg();
// }
// function egg() {
//   return chicken();
// }
// console.log(chicken() + " came first.");
// → ??

// function square(x) { return x * x; }

// console.log(square(4, true, 'hedgehog'));

// function minus(a, b) {
//   if (b === undefined) return -a;
//   else return a - b;
// }

// console.log(minus(10));
// // → -10
// console.log(minus(10, 5));
// → 5

// function power(base, exponent = 2) {
//   let result = 1;
//   for (let count = 0; count < exponent; count++) {
//     result *= base;
//   }
//   return result;
// }

// console.log(power(4));
// // → 16
// console.log(power(2, 6));
// // → 64

//console.log("C", "O", 2);
// → C O 2

// function wrapValue(n) {
//   let local = n;
//   return () => local;
// }

// let wrap1 = wrapValue(1);
// let wrap2 = wrapValue(2);
// console.log(wrap1());
// // → 1
// console.log(wrap2());
// // → 2

// function multiplier(factor) {
//   return number => number * factor;
// }

// let twice = multiplier(2);
// console.log(twice(5));
// → 10

// function power(base, exponent) {
//   if (exponent == 0) {
//     return 1;
//   } else {
//     return base * power(base, exponent - 1);
//   }
// }

// console.log(power(2, 3));
// → 8

// function findSolution(target) {
//   function find(current, history) {
//     if (current == target) {
//       return history;
//     } else if (current > target) {
//       return null;
//     } else {
//       return find(current + 5, `(${history} + 5)`) ||
//              find(current * 3, `(${history} * 3)`);
//     }
//   }
//   return find(1, "1");
// }

// console.log(findSolution(24));
// → (((1 * 3) + 5) * 3)

// find(1, "1")
//   find(6, "(1 + 5)")
//     find(11, "((1 + 5) + 5)")
//       find(16, "(((1 + 5) + 5) + 5)")
//         too big
//       find(33, "(((1 + 5) + 5) * 3)")
//         too big
//     find(18, "((1 + 5) * 3)")
//       too big
//   find(3, "(1 * 3)")
//     find(8, "((1 * 3) + 5)")
//       find(13, "(((1 * 3) + 5) + 5)")
//         found!

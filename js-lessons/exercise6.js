var array = ["Banana", "Apples", "Oranges", "Blueberries"];

array.shift();

array.sort();

array.push("Kiwi");

array.splice(array[array.indexOf("Apples")], 1);

array.reverse();

console.log(array);

var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];

console.log(array2[1][1][0]);
const map1 = new Map();

map1.set("name", "jerry");

console.log(map1.get("name"));

// map vs set structures
console.log(`map set structure:`);
const map = new Map();
const objKey = { id: 5 };
//map.set("name", "jerry");
map.set(objKey, "jerry");
// console.log(map.get("name"));
console.log(map.get(objKey));

const set = new Set();
set.add(5);
set.add(5);
set.add(5);
set.add(5);
set.add(4);
set.add(3);
console.log(set);

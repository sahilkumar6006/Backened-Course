const marvel_heros = [ "thor", "b", "c"];
const dc = ["d", "e", "f"];

marvel_heros.push(dc);
console.log(marvel_heros);

const allHeros = marvel_heros.concat(dc);
console.log(allHeros);

//spread operator

const all_Heros = [...marvel_heros, ...dc];
console.log(all_Heros);

const another_array = [1,2,3,[4,5,6],7, [6,7, [3,4,5]]];
const new_another_array  = another_array.flat(Infinity);
console.log(new_another_array);
const name = "Abhijeet"
const repoCount =  10

// console.log(name + repoCount+ "value");

console.log(`hello my name is ${name} and my repo count is $ {repocount}`);


const gameName = new String('abhijeet-yadav')

// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('e'));

const newstring  = gameName.substring(0, 5)
console.log(newstring);

const anotherString = gameName.slice(-5, 1)
console.log(anotherString);

const newString1 = "    Abhijeet"
console.log(newString1);
console.log(newString1.trim());

const url = "https://abhijeet.com/abhijeet%20singh"
console.log(url.replace('%20','-'));
console.log(url.includes('msdhoni'));
console.log(gameName.split('-'));
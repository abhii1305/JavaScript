let mydate = new Date()
// console.log(mydate.toString())
// console.log(mydate.toDateString())
// console.log(mydate.toJSON())
// console.log(mydate.toISOString())
// console.log(mydate.toLocaleDateString())
// console.log(mydate.toTimeString())
// console.log(mydate.getTimezoneOffset())
// console.log(typeof mydate);

// let myCreatedDate = new Date(2024,2,22)
// let myCreatedDate = new Date(2024,2,22,19,30)
let myCreatedDate = new Date("03-22-2024")
console.log(myCreatedDate.toLocaleString())

let myTimestamp = Date.now()

// console.log(myTimestamp);
// console.log(myCreatedDate.getTime());

// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth()+1);
// console.log(newDate.getDay());


newDate.toLocaleString('default',{
    weekday:"short",
})
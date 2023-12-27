// Events Module
//Node js has a built in module called "Events"
//wher you can create - , fire - , and listen for- your own Events.

const EventEmitter = require("events");

const event = new EventEmitter();

// event.on("sayMyName", () => {
//     console.log("my name is harsh");
// });
// event.on("sayMyName", () => {
//   console.log("my name is hummmm");
// });
//event.emit("sayMyName");

//fumction define kiya /2
event.on("checkPage", (sc , msg) => {
  console.log(`status code : ${sc} and page : ${msg}`);
});

//function call kiya /1
event.emit("checkPage" , 200 , "ok");
const EventEmitter = require("events");
const event = new EventEmitter();

event.on("checkStatus", (sc, msg) => {
  console.log(`status code is ${sc} and the page is ${msg}`);
});
event.emit("checkStatus", 200, "OK");

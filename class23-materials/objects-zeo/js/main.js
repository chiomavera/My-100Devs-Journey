//Create a stopwatch object that has four properties and three methods

let stopwatch = {}

stopwatch.size = "large";
stopwatch.color = "black";
stopwatch.shape = "oval"
stopwatch.brand = "Oraimo"

stopwatch.start = () => console.log('starting')

stopwatch.stop = () => console.log("stopping")

stopwatch.sayColor = () => console.log(stopwatch.color) 
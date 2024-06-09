"use strict";
let magiciansName = ["Ali", "Mustufa", "Haider", "Sohil", "Hammad"];
function show_magicians1(greet) {
    for (let items of magiciansName) {
        console.log(greet, items);
    }
}
show_magicians1("Hello How re you");

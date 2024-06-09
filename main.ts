  let magiciansName:string []  =["Ali","Mustufa","Haider","Sohil","Hammad"]
  function show_magicians1 (greet:string) {
    for(let items of magiciansName) {
        console.log(greet,items);
    }
  }
  show_magicians1("Hello How re you");
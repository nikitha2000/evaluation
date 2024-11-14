function safeparse(jsonString) {
      if(jsonString =="") {
        console.log("Empty string")
      }else {
        let obj = JSON.parse(jsonString);
        return obj;
    }
}

const string = '{"name":"John", "birth":"1986-12-14", "city":"New York"}';
console.log(safeparse(string))

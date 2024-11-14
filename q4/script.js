const obj = {
    name:{
        firstName:"nikitha",
        lastName:"Joemon"
    },
   subject: ["maths", "chemistry", 'biology'],
   email:"nikitha@mail.com"
}



function deepClone(obj) {
    const result = {};
    if (typeof obj !== "object" || typeof obj === undefined || obj === null) {
        return obj;
    }

    const keys = Object.keys(obj);

    for(let key in keys) {
        result[keys[key]] = deepClone(obj[keys[key]])
    }
    return result;
}

const clone1 = deepClone(obj)

obj.name.firstName = "xlara"
obj.email = 'clara@gmail.com'
console.log(clone1)
console.log(obj)



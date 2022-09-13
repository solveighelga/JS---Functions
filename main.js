const contacts = [];

const add = (contacts)=>{

for(let i=0; i<contacts.length; i++){
    if(contacts,email===contacts[i].email){
        console.log('Duplicate was found')
        return;
    }
}

if(!contacts.email || !contacts.name){
    console.log("Missing fields")
    return;
}

contacts.push(contact);
console.log("was added");

}
console.log("after add")









/* function declaration
function greet(){
    console.log('hello there');
}

// function expression --> variable(spreak) set it equal to something (functoin, string, number...). Always end with a semicolon;
const speak = function(){
    console.log('good day!');
};



greet();
speak();*/
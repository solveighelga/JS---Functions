/* add contact */
let contacts = [];

const add = (contact)=>{ //This us a function expression (contact=parameter, everything iside the {} is the body of my function)

    for(let i=0; i<contacts.length; i++){
        if(contact.email===contacts[i].email){
            console.log('Duplicate was found')
            return; // don't want it to do anything else if this is ture so it returns
        }
    }

    if(!contact.email || !contact.name){ // || means OR here I want to see if it is missing a email or name
        console.log("Missing fields")
        return;
    }

    contacts.push(contact); // add something to the contact I use the push method
    console.log("was added");

}

// Here are emails and names I will be using to demonstrate the following: add, remove email, edit email, get email, listAll and Clear.
add({email:"solveighelga@gmail.com",name:"Sólveig"});
add({email:"solveighelgaa@gmail.com",name:"Sólveigh"});
add({email: "shh23@hi.is", name:"Sólveig"});
console.log("after add");

/* remove email */
const remove = (email)=>{

    for(let i=0; i<contacts.length; i++)
        if(email==contacts[i].email){ // here I want to see if the email I input already exist in contacts
            console.log("Removing email"); //If so it will remove item with splice
            contacts.splice(i, 1); // 2nd parameter means remove one item only
            return;
        }
        else{
            console.log("email not found")
        }
    return;
}

remove("solveighelga@gmail.com");
console.log("was removed");

/* edit email, newData */
const edit = (email, newData)=>{ // newData is my object

    for(let i=0; i<contacts.length; i++)
        if(email==contacts[i].email){ // here I want to see if the email I input already exist in contacts
            contacts[i] = newData;
            console.log("Was updated"); 
            return;
        }
        else{
            console.log("Contact not found");
        }
    return;
 }

edit("shh23@hi.is", {email:"smh23@hi.is", name:"Sigrún"}); // here I edited both the email and name for shh23@hi.is
console.log(contacts);
edit("smh23@hi.is", {email:"sigga@gmail.com"}); // tested it again
console.log(contacts);

/* Get email */
const get = (email)=>{

    for(let i=0; i<contacts.length; i++)
        if(email==contacts[i].email){ // here I want to see if the email I input already exist in contacts
            console.log(" "), // make break between the properties
            console.log("name:" + contacts[i].name), // If so then the success is getting their name and email
            console.log("email:" + contacts[i].email),
            console.log(" ") 
            return;
        }
        else{
            console.log("Contact not found");
        }
    return;
 }

 get("solveighelgaa@gmail.com"); // I wanted to find the name and email of this contact (under /* add contact */ section)

/* listAll() */
const listAll = ()=>{
    for(let i=0; i<contacts.length; i++)
        console.log(contacts[i].name + " " + contacts[i].email) // I wanted to list all contacts[i] it this perticular oder, name first then email.
}

add({email:"anna@tskoli.is",name:"Anna Valsdóttir"}); // added some extra contact from the guide
add({email:"jon@tskoli.is",name:"Jón Jónsson"});
add({email: "hildur@tskoli.is", name:"Hildur Eriksdóttir"});

listAll();

/* Clear() */
const Clear = ()=>{
    for(let i=0; i<contacts.length; i++)
            contacts.splice(contacts[i]); // I used the same method as in /* remove email */ except now i wanted to remove everyone from the list
}

Clear();
console.log(contacts); // double checked to make sure everyone was removed :)
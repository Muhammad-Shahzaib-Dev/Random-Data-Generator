const fs=require("fs");
const path=require('path');

let email=JSON.parse(fs.readFileSync(path.join(__dirname ,"emails.json") , "utf-8"));
let name=JSON.parse(fs.readFileSync(path.join(__dirname ,"names.json") , "utf-8"));
let ids=JSON.parse(fs.readFileSync(path.join(__dirname ,"ID.json") , "utf-8"));

function randomIndx(arr){
    return Math.floor(Math.random()*arr.length);
}
function getRandomName(){
    const Randomname= name[randomIndx(name)];
    console.log(Randomname);
    return Randomname;
}
function getRandomEmail(){
   const Randomemail= email[randomIndx(email)];
   console.log(Randomemail);
      return Randomemail;
}
function getRandomID(){
    const RandomID= ids[randomIndx(ids)];
    console.log(RandomID);
    return RandomID;
}

function getRandomUser(){
    const user={
        name: getRandomName(),
        email: getRandomEmail(),
        ids :  getRandomID()
    }
    console.log(user);
    return user;
}
module.exports={
    getRandomEmail,
    getRandomID,
    getRandomName,
    getRandomUser
}
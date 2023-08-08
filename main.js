
let gender = document.getElementById("gender");
let randImg = document.querySelector("#randImg");
let nameObj = document.getElementById("name");
let email = document.getElementById("email");
let Password = document.getElementById("password");
let birth = document.getElementById("dob");
let address = document.getElementById("Address");
let phone = document.getElementById("phone"); 


let newBtn = document.getElementById("new_btn");
newBtn.onclick = function (event) {
    event.preventDefault()
    let number = Math.floor(Math.random() * data[0].results.length);
    let person = data[0].results[number];
    console.log(person);
    gender.innerHTML = person.gender;

    randImg.src = person.picture.medium;

    nameObj.innerHTML = person.name.title + person.name.first + person.name.last;

    email.innerHTML = person.email;

    Password.innerHTML = person.login.password;

    birth.innerHTML = person.dob.date;

    address.innerHTML = person.location.street.number + person.location.street.name + person.location.city + person.location.state + person.location.country;

    phone.innerHTML = person.phone; 
}



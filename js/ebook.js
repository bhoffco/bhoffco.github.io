// initialize firebasebase

let config = {
    apiKey: "AIzaSyDVHoEWn509Fz48cO5p1FEdGvEt90s9MHQ",
    authDomain: "level5site-b6a75.firebaseapp.com",
    databaseURL: "https://level5site-b6a75.firebaseio.com",
    projectId: "level5site-b6a75",
    storageBucket: "level5site-b6a75.appspot.com",
    messagingSenderId: "638940821090"
  };
  firebase.initializeApp(config);

//reference leads collected

let messagesRef = firebase.database().ref('ebook');

// fix for header


// listen for form Submit

document.getElementById('contact-form').addEventListener('submit', submitForm);

//submit form

function submitForm(e){
  e.preventDefault();

  // get values

  let name = getInputVal('name');
  let company = getInputVal('company');
  let email = getInputVal('email');
  let phone = getInputVal('phone');
  let message = getInputVal('message');

  //save message

  saveMessage(name, company, email, phone,message);

  // show alert

  document.querySelector('.alert',).style.display = 'block';

// redirect to pdf download

  setTimeout(function() {
    window.location.href = "https://www.google.com";
  }, 5000);

    //hide alert after 3 seconds

  //setTimeout(function(){
  //  document.querySelector('.alert').style.display = 'none';
//  },5000);

  // clear form after submit

    document.getElementById('contact-form').reset();

    //window.location.replace("https:/www.google.com"),2500;

}



// function to get form values

function getInputVal(id){
  return document.getElementById(id).value;
}

// save lead info to firebase

function saveMessage(name, company, email, phone, message){
  let newMessagesRef = messagesRef.push();
  newMessagesRef.set({
    name: name,
    company: company,
    email: email,
    phone: phone,
    message: message
  });
}

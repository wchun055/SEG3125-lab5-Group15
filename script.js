function moveUser(eventName){
    element = document.getElementById(eventName);
    element.scrollIntoView();  
}

const form = document.getElementById("booking-form");
form.addEventListener('submit', function(Event){
    Event.preventDefault();
    makeBooking();
});

function makeBooking(){
    nameForm = document.getElementById("name-form");
    nameBooking = document.getElementById("name");
    nameBooking.innerText = "Name: " + nameForm.value;
    phoneNumberForm = document.getElementById("phone-number-form");
    phoneNumber = document.getElementById("phone-number");
    phoneNumber.innerText = "Phone Number: " + phoneNumberForm.value;
    barberForm = document.getElementById("barber-form");
    barber = document.getElementById("barber");
    barber.innerText = "Barber: " + barberForm.value;
    haircutForm = document.getElementById("haircut-form");
    haircut = document.getElementById("haircut");
    haircut.innerText = "Haircut: " + haircutForm.value;
    dateForm = document.getElementById("date-form");
    date = document.getElementById("date");
    date.innerText = "Date: " + dateForm.value;
    timeForm = document.getElementById("time-form");
    time = document.getElementById("time"); 
    time.innerText = "Time: " + timeForm.value;
    notesForm = document.getElementById("notes-form");
    notes = document.getElementById("notes"); 
    if(notesForm.value != ""){
        notes.hidden = false;
        notes.innerText = "Additional Notes: " + notesForm.value;
    }
    else {
        notes.hidden = true;
    }
    form.reset();
    alert("Booking Successful!");
    document.getElementById("clearBttn").hidden = false;
    document.getElementById("editBttn").hidden = false;
}

function clearBooking(){

    nameBooking = document.getElementById("name");
    nameBooking.innerText ="";

    phoneNumber = document.getElementById("phone-number");
    phoneNumber.innerText = "";

    barber = document.getElementById("barber");
    barber.innerText = "";

    haircut = document.getElementById("haircut");
    haircut.innerText = "";

    date = document.getElementById("date");
    date.innerText = "";

    time = document.getElementById("time"); 
    time.innerText = "";

    notes = document.getElementById("notes"); 
    notes.hidden = true;

    document.getElementById("clearBttn").hidden = true;
    document.getElementById("editBttn").hidden = true;
}

function editBooking(){
    nameForm = document.getElementById("name-form");
    nameBooking = document.getElementById("name");
    nameForm.value = nameBooking.innerText.split(": ")[1];
    phoneNumberForm = document.getElementById("phone-number-form");
    phoneNumber = document.getElementById("phone-number");
    phoneNumberForm.value = phoneNumber.innerText.split(": ")[1];
    barberForm = document.getElementById("barber-form");
    barber = document.getElementById("barber");
    barberForm.value = barber.innerText.split(": ")[1];
    haircutForm = document.getElementById("haircut-form");
    haircut = document.getElementById("haircut");
    haircutForm.value = haircut.innerText.split(": ")[1];
    dateForm = document.getElementById("date-form");
    date = document.getElementById("date");
    dateForm.value = date.innerText.split(": ")[1];
    timeForm = document.getElementById("time-form");
    time = document.getElementById("time"); 
    timeForm.value = time.innerText.split(": ")[1];
    notesForm = document.getElementById("notes-form");
    notes = document.getElementById("notes"); 
    notesForm.value = notes.innerText.split(": ")[1];
    clearBooking();
}
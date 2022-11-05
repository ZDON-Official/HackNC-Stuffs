function Reminder(stuff,ddl,box){
    this.stuff = stuff;
    this.ddl = ddl;
    this.box = box  // can be default to 0 (upcoming)
}

var newBox = [];
var newStuff;
var stuff = document.getElementById("stuff");
var ddl = document.getElementById("ddl");
var submit = document.getElementById("submit");
var clearBox = document.getElementById("clearBox");
var formStuff, formDdl;

var reminder1 = new Reminder(
    "Database Project", "12-01-2022"
);

var reminder2 = new Reminder(
    "NLP Research", "11-30-2022"
);


var myList = [reminder1,reminder2];
var reminderIndex = 0;

stuff.innerHTML = reminder1.stuff;
ddl.innerHTML = reminder1.ddl;

function reminderAdd(formStuff, formDdl) {
    function clearForm() {
      document.getElementById("newStuff").value = "";
      document.getElementById("newDdl").value = "";
      document.getElementById("reminderForm").reset();
    }

    function updatePlaceholder() {
        document.getElementById("newStuff").placeholder =
            "...another stuff?";
        document.getElementById("newDdl").placeholder =
            "...and another ddl?";
        }
        
    formStuff = document.getElementById("newStuff");
    formDdl = document.getElementById("newDDL");
    if (
        formStuff.value !== formDdl.value &&
        formStuff.value != "" &&
        formDdl.value !=""
    ){
        var newReminder = new Reminder();
        newReminder.stuff = formStuff.value;
        newReminder.ddl = formDdl.value;
        myList.push(newReminder);
        reminderIndex = myList.length -1;
        clearForm();
        updatePlaceholder();
        stuff.innerHTML = myList[reminderIndex].stuff;
        ddl.innerHTML = myList[reminderIndex].ddl;

    } else if (formStuff.value == null || formStuff.value == "", formDdl.value == null ||
        formDdl.value == "", formStuff.value == null || formDdl.value == null || formDdl == ""
    ){
        alert("Fill out the STUFF!");
    }
}


function emptyBox() {
    var confirmation = confirm("Are you sure you want to delete this entire deck?");
    if (confirmation) {
    myList.splice(0, myList.length);
    reminderIndex = 0;
    stuff.innerHTML = "&nbsp;";
    ddl.innerHTML = "&nbsp;";
    }
    document.getElementById("newStuff").focus();
  }
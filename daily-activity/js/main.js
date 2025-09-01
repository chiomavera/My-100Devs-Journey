document.querySelector("#check").addEventListener("click", checkActivity);

// Add event listener for "Enter" Keypress on the input field
document.querySelector("#day").addEventListener("keydown",  (e) => {
  // check if key pressed is "Enter"
  if (e.key === "Enter") { 
    e.preventDefault(); // Prevent page reload
    checkActivity(); // call the same function as button click
  }
})



function checkActivity() {
  // get day of week from input field and convert to lower case
  const day = document.querySelector("#day").value.toLowerCase();

  const validDays = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday",
  ]; // list of valid days

  let errorMessage = document.querySelector("#errorMessage");
  let activityForTheDay = document.querySelector("#placeToYell"); // variable to show activity of day

  // clear previous class for color changes
  activityForTheDay.classList.remove(
    "classDay",
    "tgif",
    "weekend",
    "officeHour",
    "noClass"
  );

  // check if input is empty
  if (day === "") {
    activityForTheDay.innerText = ""; //clear activity text
    errorMessage.innerText = "Please enter a day!";
    errorMessage.classList.remove("hidden");  // show error message
  } else if (!validDays.includes(day)) { // check that a valid day of the week is entered
    activityForTheDay.innerText = "";
    errorMessage.innerText =
      "Invalid day! Please enter a valid day of the week. ";
    errorMessage.classList.remove("hidden"); // show error message
  } else {
    errorMessage.classList.add("hidden"); // hide errorMessage when input is entered 
    showActivty(day); //call showActivity with the day
  }

}

function showActivty(day) {
  let activityForTheDay = document.querySelector("#placeToYell"); // Access within function scope

  if (day === "tuesday" || day === "thursday") {
    activityForTheDay.innerText = "you have a class with Leon";
    activityForTheDay.classList.add("classDay");
  } else if (day === "sunday") {
    activityForTheDay.innerText = "It is office hour, Leon is waiting";
    activityForTheDay.classList.add("officeHour");
  } else if (day === "saturday") {
    activityForTheDay.innerText =
      "It's the weekend, do something nice for yourself";
    activityForTheDay.classList.add("weekend");
  } else if (day === "friday") {
    activityForTheDay.innerText =
      "TGIF, Hope your assignments are ready? You got this";
    activityForTheDay.classList.add("tgif");
  } else {
    activityForTheDay.innerText =
      "No class! \n Go through the recommended resources and do you assesments. \n Don't forget to pratice your active recall!";
    activityForTheDay.classList.add("noClass");
  }
}
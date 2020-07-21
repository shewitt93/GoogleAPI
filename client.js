const url = "http://localhost:3000";
const myForm = document.querySelector("#my-form");
//selects the ID my-form in the html document via query selector
let input;

myForm.addEventListener("submit", search);
//listens to myform for a submit request and then uses the function return reverse

function search (e) {
  e.preventDefault();

//stops form getting refreshed on submit before the data can be added

  const searchg = e.target;
  input = form.message.value;

  //create variable for the event target then the id message in the form and gets the value

  const options = {
    method: 'POST',
    body: JSON.stringify(input)
  };

  //method relates to the server response, in this case to post the data collected from form to server. body:Json.stringify converts to a json string that is readable by the server

  fetch('http://localhost:3000/search', options) //makes network request to branch /reverse
    .then(response => response.json()) //similar to res.send but respects json.stringify changes
    .then(addSearch) // then applies the function addInput 
    .catch(console.warn); // console logs warnings
};

function addSearch(searched) {
  myForm.textContent()}; 


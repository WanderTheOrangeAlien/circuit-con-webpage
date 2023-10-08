var form;
var formData = new FormData();


//Wait until the page completely loads
document.addEventListener('DOMContentLoaded', () => {
    console.log("HTML loaded!")
    form = document.getElementById("form");
    form.addEventListener("submit",logSubmit); 
});



function logSubmit(){
    //Create a FormData element. It stores all data from the given form
    formData = new FormData(form)
    
    //Iterate through all the keys of the form
    var output = "";
    for (const key of formData.keys()) {
        //Get the value associated with the current key
        var value = formData.get(key);
        output += `${key}: ${value}\n`;
    }

    console.log("Form Submited!\n" + output);
}




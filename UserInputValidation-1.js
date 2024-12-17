function strCheck(){
    // Retriving the input values for the first name and last name from the HTML
    var FirstName = document.getElementById("FirstName").value;
    var LastName = document.getElementById("LastName").value;
    // Concatenating a message to display
    var concName = "Error Code 49: User Error. It's not our fault!";
    //Updating the inner HTML of the element with id
    document.getElementById("conc_names").innerHTML = concName;

    //check the length of the concatenated string greater than 20 charaters
if(concName.length > 20){
    alert("String is greater than 20 charaters");
}else{
    //checks the length if the sting is shorter than 20 charaters
    alert("String is less than 20 charaters" + " " + concName.length);
}
//checks if the zip code length is 5 charaters
var zip = document.getElementById("Zip").value;
if(zip.length == 5) {
    alert("Zip code is good to go")
}
//if zip code is not 5 charaters displays message 
else{
    alert("Zip code too short or long. Re-enter")
}
}

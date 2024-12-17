function strCheck(){
    var FirstName = document.getElementById("FirstName").value;
    var LastName = document.getElementById("LastName").value;
    var concName = "Error Code 49: User Error. It's not our fault!";
    document.getElementById("conc_names").innerHTML = concName;

if(concName.length > 20){
    alert("String is greater than 20 charaters");
}else{
    alert("String is less than 20 charaters" + " " + concName.length);
}
var zip = document.getElementById("Zip").value;
if(zip.length == 5) {
    alert("Zip code is good to go")
}
else{
    alert("Zip code too short or long. Re-enter")
}
}
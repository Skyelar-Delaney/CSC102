// function to check if a sting is a palindrome
function Palindrome(str){
    //converts srting to lower case and removes non-alphanumerical charaters
    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g,'');
    //checks to see if string is the same forward as backwards
    return cleanStr === cleanStr.split('').reverse().join('');
}
//checks to see if the sting is palindrome
if(Palindrome(Palindrome)) {
    //the word is a palindrome
        alert(Palindrome + "This is a Palindrome")
}else{
    //the word is not a palindrome
        alert( + "This is not a Palindrome")

}
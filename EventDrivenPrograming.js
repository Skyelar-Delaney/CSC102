let interval;  //allow to stop the movement when necessary
let image = document.getElementById("Tardis"); //image that will be moved around

function startMoving(direction){
    stopMoving(); //stop any ongoing movement
    interval = setInterval (() => {
        let left = image.offsetLeft; //current position left of image
        let top = image.offsetTop; //current postion top of image

        if (direction === 'right') left += 5; //move to the right
        if (direction === 'left') left -= 5; //move to the left
        if (direction === 'up') top -= 5; //move upwards
        if (direction === 'down') top += 5; //moves downwards

        image.style.left = `${left}px`; //set new left position
        image.style.top = `${top}px`; //set new top position
    }, 50); //repeat every 50 milliseconds
}

function stopMoving(){
    clearInterval(interval); //Stops the interval that controls the movemnt

}
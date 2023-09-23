
const favmovie = "farzi";
let guess = prompt("Guess my Fav-Movie Name : ");

while((guess != favmovie) && (guess != "quit")){
    guess = prompt("Wrong! guess , please try again. ")
}

if(guess == favmovie){
    console.log("Congrats! right guess.");
}
else {
    console.log("You Quit!.")
}








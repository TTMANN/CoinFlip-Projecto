
// starting state for the animation
//let playstate = 0;
//let pauseButton = document.getElementById("pause");
let flipresult = document.querySelector(".Result");
let currentRotation = 0;
const flipBtn = document.getElementById("flip-it");
const coin = document.querySelector("#Coin");


/*(Poster comment: This is just a function for pausing if needed. You can disregard this part, it's irrelivant)
function pauseAnimation() {
  // checks if the animation is running
    if(playstate == 0) {
    // switchs the animation state to being paused
    document.getElementById("Coin").style.animationPlayState="paused";
    pause.innerHTML = "Play";
    // toggles the playstate variable
    playstate = 1;
  } else {
    // switches animation state to running
    document.getElementById("Coin").style.animationPlayState="running";
    pause.innerHTML = "Pause";
    // toggles playstate variable
    playstate = 0;
  }}
*/

function Flipit() {

    const isHeads = Math.random() < 0.5;
    const animationPick = isHeads ? "Flip-Heads" : "Flip-Tails";

    const startA = currentRotation;
    const extraA = isHeads ? 2160 : 1980;
    const endA = Math.floor(currentRotation / 360) * 360 + extraA;
    currentRotation = endA;
    coin.style.setProperty('--start-rotation', `${startA}deg`);
    coin.style.setProperty('--end-rotation', `${endA}deg`);

    coin.classList.remove("Flip-Heads", "Flip-Tails");
    void coin.offsetWidth;

    coin.classList.add(animationPick);
    console.log('In module: ' + (this === undefined));

    coin.addEventListener('animationend', () => {
        console.log('Animation ended');
        console.log ()
        if(isHeads){
            console.log("Heads")
            flipresult.innerHTML = "Heads";
        }

        else{
            console.log("Tails")
            flipresult.innerHTML = "Tails";
        }
    },{ once: true });
    disableButton();
}
function disableButton() {
    flipBtn.disabled = true;
    setTimeout(() => { flipBtn.disabled = false; }, 3000);
}
/*Nothing here...yet*/
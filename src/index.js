/* 
=========================================================================================
    IMPORTANT   IMPORTANT   IMPORTANT   IMPORTANT   IMPORTANT   IMPORTANT   IMPORTANT

    Please, DO NOT use this apiKey for your project, getting one is really easy and FREE.
        * go to:  https://developers.giphy.com/
        * create your account
        * create a new project
        * copy your apiKey and replace mine
        * THANK YOU, enjoy coding! 
        
==========================================================================================
*/
/***********************************/
/*   Generate random party gifs   
This fetch is getting a random party gif, 
if you prefer another type of gif just 
change the tag name. 
If you want a random gif with a random tag
just delete this part from fetch string
'&tag=party'
*/
/*********************************/

const apiKey = "I6lm6Uo8JoHuGcFx4v5SbpL6YTxkUOe5";
const peticion = fetch(
  `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=party`
);
peticion
  .then((resp) => resp.json())
  .then(({ data }) => {
    const randomGif = document.createElement("img");
    randomGif.src = data.images.original.url;
    randomGif.id = "randomGif";
    document.body.append(randomGif);
  })
  .catch(console.warn);

/**********************************/
/*            COUNTDOWN          */
/********************************/
const deadline = document.querySelector(".countdown");
const items = document.querySelectorAll(".countdown-format h4");

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

let futureDate = new Date(2021, 6, 30, 18, 00, 0);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

let month = futureDate.getMonth();
const date = futureDate.getDate();
const futureTime = futureDate.getTime();

function getRemaindingTime() {
  const today = new Date().getTime();
  const timeCalc = futureTime - today;
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;
  // calculate all values
  let days = timeCalc / oneDay;
  days = Math.floor(days);
  let hours = Math.floor((timeCalc % oneDay) / oneHour);
  let minutes = Math.floor((timeCalc % oneHour) / oneMinute);
  let seconds = Math.floor((timeCalc % oneMinute) / 1000);

  // set values array
  const values = [days, hours, minutes, seconds];
  function format(item) {
    if (item < 10) {
      return (item = `0${item}`);
    }
    return item;
  }

  items.forEach(function (item, index) {
    item.innerHTML = format(values[index]);
  });

  if (timeCalc < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">¡¿PREPARADA PARA LA FIESTA?! </h4>`;
  }
}

// countdown;
let countdown = setInterval(getRemaindingTime, 1000);

//set initial values
getRemaindingTime();

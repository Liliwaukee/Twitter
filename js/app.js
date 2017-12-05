


function page () {
  var nav = document.getElementById('nav');
  var sectionPersonalData = document.getElementById('personal-data');
  var boxTweet = document.getElementById('box-tweet');

  var headerNavLogo = document.createElement('img');
  var headerTitle = document.createElement('h2');
  var sectionPersonalDataHeader = document.createElement('h3');
  var sectionPersonalDataText = document.createElement('p');
  var line = document.createElement('hr');
  var lineTwo = document.createElement('hr');
  var sectionPersonalDataSubHeading = document.createElement('h4');
  var boxTweetForm = document.createElement('form');
  var boxTweetTextArea = document.createElement('textarea');
  var boxTweetInput = document.createElement('input');
  var boxTweetCount = document.createElement('span');


  headerNavLogo.src = 'assets/images/twitter-logo.png';
  headerNavLogo.classList.add('header-nav-logo');
  headerTitle.innerText = '¿Qué está pasando?';
  headerTitle.classList.add('header-Title');
  sectionPersonalDataHeader.innerText = 'Reto de código';
  sectionPersonalDataText.innerText = 'Hola, soy front-end developer jr.';
  sectionPersonalDataSubHeading.innerText = 'CÓDIGO';
  sectionPersonalDataSubHeading.style.color = '#2AA3EF';
  boxTweetTextArea.name = 'write-tweet';
  boxTweetTextArea.rows = '1';
  boxTweetTextArea.cols = '45';
  boxTweetTextArea.value = '';
  boxTweetTextArea.placeholder = '¿Qué está pasando?';
  boxTweetTextArea.classList.add('box-tweet-text-area');
  boxTweetInput.type = 'submit';
  boxTweetInput.name = 'tweet';
  boxTweetInput.value = 'TWEET';
  boxTweetInput.disabled = 'true';
  boxTweetInput.classList.add('box-tweet-text-input');



  nav.appendChild(headerNavLogo);
  nav.appendChild(headerTitle);
  sectionPersonalData.appendChild(sectionPersonalDataHeader);
  sectionPersonalData.appendChild(sectionPersonalDataText);
  sectionPersonalData.appendChild(line);
  sectionPersonalData.appendChild(sectionPersonalDataSubHeading);
  boxTweet.appendChild(boxTweetForm);
  boxTweet.appendChild(boxTweetTextArea);
  boxTweet.appendChild(lineTwo);
  boxTweet.appendChild(boxTweetInput);
  boxTweet.appendChild(boxTweetCount);

  //función del botón Tweet
   var addTweet =  function() {
      event.preventDefault();

      var sectionListTweets = document.getElementById('list-tweets');
      var tweetText = boxTweetTextArea.value;


      var listTweets = document.createElement('ul');
      var tweet = document.createElement('li');
      var time = moment().format('HH:mm');


      tweet.classList.add('tweet-style');
      tweet.innerHTML = tweetText + '<br>' + time;
      sectionListTweets.appendChild(listTweets);
      listTweets.appendChild(tweet);


      clearTextArea();
    };
    //llamamos al evento
  boxTweetInput.addEventListener('click', addTweet);

    //función para limpiar el textarea
  var clearTextArea =  function(){
      boxTweetTextArea.value = '';
      boxTweetInput.style.backgroundColor = '#C8C8C8';
      lineTwo.style.border = '1px solid #C8C8C8';
      boxTweetCount.innerText = '';
      boxTweetInput.disabled = true;
    };


//conteo de caracteres y habilitar y deshabilar el botón
  var characterCount = function () {
    var numberLetters = 140 - (boxTweetTextArea.value.length);
    boxTweetCount.innerText = numberLetters;
    //deshabilitamos el botón si no hay texto
    if(boxTweetTextArea.value.length === 0) {
      boxTweetInput.disabled = false;
    } else if (boxTweetTextArea.value.length >= 141) {
      boxTweetInput.disabled = true;
      boxTweetInput.style.backgroundColor = '#C8C8C8';
    } else {
      boxTweetInput.style.backgroundColor = '#74CAF6';
      lineTwo.style.border = '1px solid #74CAF6';
      boxTweetInput.disabled = false;
    }
  }

  boxTweetTextArea.addEventListener('keydown', characterCount);
  boxTweetTextArea.addEventListener('keyup', characterCount);


  //cambio de color de contador
  var colorChange = function () {
    var letters = 140 - (boxTweetTextArea.value.length);
    if (letters <= 30 && letters >= 21 ){
     boxTweetCount.style.color = "gold";
   } else if (letters <= 20){
     boxTweetCount.style.color = "red";
   } else {
     boxTweetCount.style.color = "purple";
   }
  }

  boxTweetTextArea.addEventListener('keydown', colorChange);
  boxTweetTextArea.addEventListener('keyup', colorChange);
  boxTweetTextArea.addEventListener('keypress', colorChange);


  /*

  var autosize = function (){
       var size = this;
       setTimeout(function(){
         size.style.overflow = 'hidden';
         size.style.height = 0;
         size.style.height = size.scrollHeight + 'px';},
         0);
     }
     boxTweetTextArea.addEventListener('keydown', autosize);
     */

/*

     function autosize(){
       var size = this;
       setTimeout(function(){
         size.style.overflow = 'hidden';
         size.style.height = 0;
         size.style.height = size.scrollHeight + 'px';},
         0);
     }
     boxTweetTextArea.addEventListener('keydown', autosize);
*/

// usando moment


}

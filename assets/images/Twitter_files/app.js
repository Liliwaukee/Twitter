


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
    var boxTweetTextInput = document.createElement('input');


    headerNavLogo.src = 'assets/images/twitter-logo.png';
    headerNavLogo.classList.add('header-nav-logo');
    headerTitle.innerText = '¿Qué está pasando?';
    headerTitle.classList.add('header-Title');
    sectionPersonalDataHeader.innerText = 'Reto de código';
    sectionPersonalDataText.innerText = 'Hola, soy front-end developer jr.';
    sectionPersonalDataSubHeading.innerText = 'CÓDIGO';
    sectionPersonalDataSubHeading.style.color = '#2AA3EF';
    boxTweetTextArea.name = 'write-tweet';
    boxTweetTextArea.rows = '5';
    boxTweetTextArea.cols = '45';
    boxTweetTextArea.placeholder = '¿Qué está pasando?';
    boxTweetTextArea.classList.add('box-tweet-text-area');
    boxTweetTextInput.type = 'submit';
    boxTweetTextInput.name = 'tweet';
    boxTweetTextInput.value = 'TWEET';
    boxTweetTextInput.classList.add('box-tweet-text-input');


    nav.appendChild(headerNavLogo);
    nav.appendChild(headerTitle);
    sectionPersonalData.appendChild(sectionPersonalDataHeader);
    sectionPersonalData.appendChild(sectionPersonalDataText);
    sectionPersonalData.appendChild(line);
    sectionPersonalData.appendChild(sectionPersonalDataSubHeading);
    boxTweet.appendChild(boxTweetForm);
    boxTweet.appendChild(boxTweetTextArea);
    boxTweet.appendChild(lineTwo);
    boxTweet.appendChild(boxTweetTextInput);
  }

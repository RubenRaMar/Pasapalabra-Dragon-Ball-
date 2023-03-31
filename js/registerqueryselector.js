const closeClassificationButton = document.querySelector('.close-classification-button'),
      rankingRows               = document.querySelectorAll('tbody tr:nth-child(1n+2)'),
      pasapalabraContainer      = document.querySelector('.pasapalabragame-container'),
      classificationContainer   = document.querySelector('.classification-container'),
      countdownCircle           = document.querySelector('svg circle:nth-child(2)'),
      classificationButton      = document.querySelector('.classification-button'),
      pasapalabraImage          = document.querySelector('.pasapalabra-image'),
      countdownNumber           = document.querySelector('.countdown-number'),
      backgroundImage           = document.querySelector('.background-image'),
      usernameInput             = document.querySelector('.username-input'),
      confirmAvatar             = document.querySelector('.confirm-avatar'),
      restartButton             = document.querySelector('.restart-button'),
      welcomeScreen             = document.querySelector('.welcome-screen'),
      circleAvatar              = document.querySelector('.circle-avatar'),
      menuButton                = document.querySelector('.menu-button'),
      stopButton                = document.querySelector('.stop-button'),
      pasapalabra               = document.querySelector('.pasapalabra'),
      checkImage                = document.querySelector('.check-image'),
      userAnswerInput           = document.querySelector('.user-answer'),
      avatars                   = document.querySelectorAll('.avatar'),
      ask                       = document.querySelector('.question'),
      options                   = document.querySelector('.options'),
      letters                   = document.querySelectorAll('.item'),
      check                     = document.querySelector('.check');


const getLetterPosition = (questionPosition) => document.querySelector(`.circle li:nth-child(${questionPosition + 1})`);
const getSelectedLetter = () => document.querySelector('.selected-letter');

export { closeClassificationButton, rankingRows, pasapalabraContainer, classificationContainer, countdownCircle, classificationButton, pasapalabraImage, countdownNumber, backgroundImage, usernameInput, confirmAvatar, restartButton, welcomeScreen, circleAvatar, menuButton, stopButton, pasapalabra, checkImage, userAnswerInput, avatars, ask, options, letters, check, getLetterPosition, getSelectedLetter }


(function () {
    var contactUsButton = document.querySelector('.btn.contact-us');
    var contactUsPopup = document.querySelector('.contact-us-popup');
  
    contactUsButton.addEventListener('click', function (evt) {
      evt.preventDefault();
      if (!contactUsPopup.classList.contains('popup-show')) {
        var closeButton = contactUsPopup.querySelector('.close');
        contactUsPopup.classList.add('popup-show');
        var onCloseButtonClick = function(evt) {
          evt.preventDefault();
          closeButton.removeEventListener('click', onCloseButtonClick);
          contactUsPopup.classList.remove('popup-show');
        };
        closeButton.addEventListener('click', onCloseButtonClick);
      }
    });
  })();

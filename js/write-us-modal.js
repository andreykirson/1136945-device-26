
  var link = document.querySelector(".write-to-us");
  var popup = document.querySelector(".send-letter-container");
  var close = popup.querySelector(".close-letter");
  var name_user = popup.querySelector(".name");
  var form = popup.querySelector("form");
  var email_user = popup.querySelector("[name=email]");
  var text_letter = popup.querySelector("[name=textl]");
  var isStorageSupport = true;
  var storage_name_user = "";
  var storage_email_user = "";

  try {
    storage_name_user = localStorage.getItem("name_user");
    storage_email_user = localStorage.getItem("email_user");

  } catch (err) {
    isStorageSupport = false;
  }

  link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    name_user.focus();
    if (storage_name_user) {
      name_user.value = storage_name_user;
      email_user.focus();
    } else {
      name_user.focus();
    }

  });

  close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
  });  

  form.addEventListener("submit", function (evt) {
    if (!name_user.value || !email_user.value || !text_letter) {
        evt.preventDefault();
        popup.classList.remove("modal-error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("modal-error");
      } else {
        if (isStorageSupport) {
          localStorage.setItem("name_user", name_user.value);
          localStorage.setItem("email_user", email_user.value);
        }
      }
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-show");
        popup.classList.remove("modal-error");
      }
    }
  });


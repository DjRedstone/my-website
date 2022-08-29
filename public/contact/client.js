const contactForm = document.querySelector("form");

const name = $("#name");
const subject = $("#subject");
const message = $("#message");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  $("#submit").val("...");

  const formData = {
    name: name.val(),
    subject: subject.val(),
    message: message.val()
  }

  const xhr = new XMLHttpRequest();
  xhr.open("POST", "/sendMail/");
  xhr.setRequestHeader("content-type", "application/json");
  xhr.onload = () => {
    $("#submit").val("Envoyer");
    if (xhr.responseText == "success") {
      alert("E-mail envoyé !");
      location.reload();
    } else
      alert("Oops, petit problème lors de l'envoi");
  }

  xhr.send(JSON.stringify(formData));
})
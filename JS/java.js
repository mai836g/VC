const btn = document.getElementById("button");

document.getElementById("formulario").addEventListener("submit", function (event) {
  event.preventDefault();

  btn.value = "Enviando...";

  const serviceID = "default_service";
  const templateID = "template_h99gpif";

  emailjs.sendForm(serviceID, templateID, this).then(
    () => {
      btn.value = "Enviar Email";
      alert("Mensaje enviado!");
    },
    (err) => {
      btn.value = "Enviar Email";
      alert(JSON.stringify(err));
    }
  );
});



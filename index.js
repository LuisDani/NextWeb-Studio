document.addEventListener("scroll", () => {
  const scrollIndicator = document.querySelector(".scroll-indicator");

  if (window.scrollY > 50) {
    scrollIndicator.classList.add("hidden");
  } else {
    scrollIndicator.classList.remove("hidden");
  }
});

(function(){
      emailjs.init("LXXMr6wLMBLpWsB2f");
   })();
document.querySelector('.menu-toggle').addEventListener('click', () => {
  document.querySelector('.container-header nav').classList.toggle('active');
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    emailjs.sendForm('service_vyrk81n', 'template_h4b5qve', this)
        .then(function() {
            alert(' Mensaje enviado correctamente');
        }, function(error) {
            alert(' Error al enviar: ' + JSON.stringify(error));
        });
});
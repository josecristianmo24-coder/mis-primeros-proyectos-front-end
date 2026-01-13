document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    console.log("Formulario enviado");


    let i = 0;
    while (1 < 10) { 
      console.log(i);
      i++;
    }

    window.location.href = "index03.html";
  });
});

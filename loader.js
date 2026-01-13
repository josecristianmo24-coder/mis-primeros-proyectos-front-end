window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("loader").style.display = "none";
    document.getElementById("contenido").style.display = "block";
  }, 5000); // 0.5 segundos
});
window.addEventListener("load", () => {
  setTimeout(() => {
    window.location.href = "index03.html";
  }, 10000); // 1 segundo (ajústalo si quieres)
});

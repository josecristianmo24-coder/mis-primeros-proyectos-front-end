document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let i = 0;

  
    const troll = setInterval(() => {
      console.log("XD", i);
      alert("ERROR 882 (deja de ser gay para pararlo)");
      i++;
    }, 1000);

    
    setTimeout(() => {
      clearInterval(troll);

      while (true) {
        console.log("freeze");
      }
    }, 5000); 
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

document.querySelectorAll('.project-links a[href="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    alert("Šeit vēl jāieliek īstā GitHub, projekta vai video saite.");
  });
});
const texte = document.getElementById("texte");

// Dupliquez le texte 5 fois pour être sûr qu'il y ait assez de contenu
texte.textContent = Array(1).fill(texte.textContent).join(" • ");

// Contrôle au survol
texte.addEventListener("mouseenter", () => {
    texte.style.animationPlayState = "paused";
});

texte.addEventListener("mouseleave", () => {
    texte.style.animationPlayState = "running";
});

window.addEventListener('scroll', function() {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
    navbar.classList.remove('transparent');
    navbar.classList.add('solid');
  } else {
    navbar.classList.remove('solid');
    navbar.classList.add('transparent');
  }
});

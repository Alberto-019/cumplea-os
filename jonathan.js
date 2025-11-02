/* ===== entrada de tarjetas (la animación que ya tenías) ===== */
document.addEventListener("DOMContentLoaded", () => {
  const cards = Array.from(document.querySelectorAll(".tarjeta"));
  cards.forEach((c, i) => {
    setTimeout(() => c.classList.add("visible"), 120 * i);
  });

  /* ===== generar sparkles (flotantes arriba dentro de star-area) ===== */
  const starArea = document.querySelector(".star-area");

  // Sparkles leves que suben (floatUp)
  for (let i = 0; i < 20; i++) {
    const s = document.createElement("div");
    s.className = "sparkle";
    s.style.left = 5 + Math.random() * 90 + "%";
    s.style.top = 5 + Math.random() * 60 + "px";
    s.style.animationDelay = Math.random() * 4 + "s";
    s.style.opacity = 0.6 + Math.random() * 0.4;
    starArea.appendChild(s);
  }

  /* ===== generar estrellas cayendo (más cantidad y con alturas variables) ===== */
  for (let i = 0; i < 60; i++) {
    // antes 8 → ahora 60
    const f = document.createElement("div");
    f.className = "fall f" + ((i % 5) + 1);

    // distribuir horizontalmente y empezar en diferentes alturas
    f.style.left = 5 + Math.random() * 90 + "%";
    f.style.top = -200 - Math.random() * 200 + "px";

    // duración y delay variables
    const dur = 18 + Math.random() * 12;
    const delay = Math.random() * 10;
    f.style.animationDuration = dur + "s";
    f.style.animationDelay = delay + "s";

    // animación personalizada según alto del documento
    const screenHeight = document.body.scrollHeight;
    const fallDistance = screenHeight + 400; // un poco más del total
    f.style.setProperty("--fallDistance", fallDistance + "px");

    // agregarlas al main para mantener el mismo stacking
    document.body.appendChild(f);
  }
});

document.addEventListener("DOMContentLoaded", () => {
  // 1. SCROLL REVEAL CON INTERSECTION OBSERVER
  const observerOptions = {
    root: null,
    threshold: 0.12,
    rootMargin: "0px 0px -40px 0px"
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observa tanto las tarjetas de medios como los botones de links
  document.querySelectorAll(".media-card, .off-button").forEach((el) => {
    revealObserver.observe(el);
  });

  // 2. LIGHTBOX CON ANIMACIÓN SMOOTH
  const modal = document.createElement("div");
  modal.id = "image-modal";
  modal.style.cssText = `
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.94);
    z-index: 9999;
    justify-content: center;
    align-items: center;
    cursor: zoom-out;
    opacity: 0;
    transition: opacity 0.35s cubic-bezier(0.16, 1, 0.3, 1);
  `;
  
  const modalImg = document.createElement("img");
  modalImg.style.cssText = `
    max-width: 90vw;
    max-height: 90vh;
    border: 2px solid #f0f0f0;
    object-fit: contain;
    transform: scale(0.92);
    transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
  `;

  modal.appendChild(modalImg);
  document.body.appendChild(modal);

  const galleryImages = document.querySelectorAll(".media-block:not(.youtube-block) .media-frame img");
  galleryImages.forEach((img) => {
    img.style.cursor = "zoom-in";
    img.addEventListener("click", () => {
      modalImg.src = img.src;
      modal.style.display = "flex";
      setTimeout(() => {
        modal.style.opacity = "1";
        modalImg.style.transform = "scale(1)";
      }, 10);
    });
  });

  modal.addEventListener("click", () => {
    modal.style.opacity = "0";
    modalImg.style.transform = "scale(0.92)";
    setTimeout(() => {
      modal.style.display = "none";
    }, 350);
  });

  // 3. RELOJ INDUSTRIAL EN VIVO
  const topBar = document.querySelector(".top-bar");
  if (topBar) {
    const timeTag = document.createElement("div");
    timeTag.className = "meta-tag";
    topBar.appendChild(timeTag);

    function updateClock() {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const seconds = String(now.getSeconds()).padStart(2, "0");
      timeTag.textContent = `SYS_TIME: [${hours}:${minutes}:${seconds}]`;
    }

    updateClock();
    setInterval(updateClock, 1000);
  }
});
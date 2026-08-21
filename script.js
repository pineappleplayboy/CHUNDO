document.addEventListener("DOMContentLoaded", () => {

  // 1. REVELADO AL SCROLL (OBSERVER CORREGIDO)
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll(".interactive-card, .off-button").forEach((el) => {
    revealObserver.observe(el);
  });

  // 2. FILTRADO INTERACTIVO (TODOS / PHOTO / VIDEO)
  const filterBtns = document.querySelectorAll(".filter-btn");
  const mediaBlocks = document.querySelectorAll(".media-block");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const filterValue = btn.getAttribute("data-filter");

      mediaBlocks.forEach((block) => {
        const category = block.getAttribute("data-category");
        if (filterValue === "all" || category === filterValue) {
          block.classList.remove("is-hidden");
        } else {
          block.classList.add("is-hidden");
        }
      });
    });
  });

  // 3. VISTA EN GRID O LISTA
  const btnGrid = document.getElementById("btn-grid");
  const btnList = document.getElementById("btn-list");
  const grids = document.querySelectorAll(".interactive-grid");

  if (btnGrid && btnList) {
    btnGrid.addEventListener("click", () => {
      btnGrid.classList.add("active");
      btnList.classList.remove("active");
      grids.forEach((grid) => grid.classList.remove("list-view"));
    });

    btnList.addEventListener("click", () => {
      btnList.classList.add("active");
      btnGrid.classList.remove("active");
      grids.forEach((grid) => grid.classList.add("list-view"));
    });
  }

  // 4. MODAL / LIGHTBOX DE FOTOGRAFÍAS (NAVEGACIÓN TECLADO + SWIPE)
  const modal = document.getElementById("interactive-modal");
  const modalImg = document.getElementById("modal-image");
  const modalTitle = document.getElementById("modal-title-text");
  const modalMeta = document.getElementById("modal-meta-text");
  const modalClose = document.getElementById("modal-close");

  const photoCards = Array.from(document.querySelectorAll(".photo-card"));
  let currentIndex = 0;

  function updateModal(index) {
    if (index < 0 || index >= photoCards.length) return;
    currentIndex = index;
    const card = photoCards[currentIndex];

    const src = card.getAttribute("data-src");
    const title = card.getAttribute("data-title");
    const meta = card.getAttribute("data-meta");

    if (src) {
      modalImg.src = src;
      modalTitle.textContent = `“VIEWER” // ${title}`;
      modalMeta.textContent = meta;
    }
  }

  photoCards.forEach((card, index) => {
    card.addEventListener("click", () => {
      updateModal(index);
      if (modal) modal.classList.add("active");
    });
  });

  function showNext() {
    const nextIndex = (currentIndex + 1) % photoCards.length;
    updateModal(nextIndex);
  }

  function showPrev() {
    const prevIndex = (currentIndex - 1 + photoCards.length) % photoCards.length;
    updateModal(prevIndex);
  }

  function closeModal() {
    if (modal) {
      modal.classList.remove("active");
      setTimeout(() => { modalImg.src = ""; }, 300);
    }
  }

  if (modalClose) modalClose.addEventListener("click", closeModal);

  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal || e.target.classList.contains("modal-body")) {
        closeModal();
      }
    });
  }

  // Navegación con teclado (Flecha Izquierda / Derecha / Escape)
  document.addEventListener("keydown", (e) => {
    if (!modal || !modal.classList.contains("active")) return;

    if (e.key === "Escape") closeModal();
    if (e.key === "ArrowRight") showNext();
    if (e.key === "ArrowLeft") showPrev();
  });

  // Soporte para gestos táctiles (Swipe en celulares)
  let touchStartX = 0;
  let touchEndX = 0;

  if (modal) {
    modal.addEventListener("touchstart", (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    modal.addEventListener("touchend", (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    }, { passive: true });
  }

  function handleSwipe() {
    const swipeThreshold = 50;
    if (touchEndX < touchStartX - swipeThreshold) {
      showNext();
    } else if (touchEndX > touchStartX + swipeThreshold) {
      showPrev();
    }
  }

  // LÓGICA DE MODAL DE CONTACTO / BOOKING
  const contactModal = document.getElementById("contact-modal");
  const openContactBtn = document.getElementById("open-contact-btn");
  const openContactBannerBtn = document.getElementById("open-contact-banner-btn");
  const closeContactBtn = document.getElementById("contact-modal-close");
  const contactForm = document.getElementById("contact-form");

  function openContactModal() {
    if (contactModal) contactModal.classList.add("active");
  }

  function closeContactModal() {
    if (contactModal) contactModal.classList.remove("active");
  }

  if (openContactBtn) openContactBtn.addEventListener("click", openContactModal);
  if (openContactBannerBtn) openContactBannerBtn.addEventListener("click", openContactModal);
  if (closeContactBtn) closeContactBtn.addEventListener("click", closeContactModal);

  if (contactModal) {
    contactModal.addEventListener("click", (e) => {
      if (e.target === contactModal) closeContactModal();
    });
  }

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const service = document.getElementById("service").value;
      const message = document.getElementById("message").value;

      const emails = "alex250suarez@gmail.com,chundoworkshops@gmail.com";
      const subject = encodeURIComponent(`NUEVO PROYECTO: ${service} - ${name}`);
      const body = encodeURIComponent(
        `Nombre/Productora: ${name}\n` +
        `Correo de contacto: ${email}\n` +
        `Tipo de servicio: ${service}\n\n` +
        `Detalles del proyecto:\n${message}`
      );

      window.location.href = `mailto:${emails}?subject=${subject}&body=${body}`;

      closeContactModal();
      contactForm.reset();
    });
  }
});
document.addEventListener("DOMContentLoaded", () => {

  // FUNCIÓN AUXILIAR: BLOQUEAR/PERMITIR SCROLL CUANDO EL MODAL ESTÁ ABIERTO
  function toggleBodyScroll(disable) {
    document.body.style.overflow = disable ? "hidden" : "";
  }

  // 1. REVELADO AL SCROLL Y AUTOPAUSA DE VIDEOS
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll(".interactive-card, .off-button").forEach((el) => {
    revealObserver.observe(el);
  });

  const videoObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const video = entry.target;
      if (!entry.isIntersecting && !video.paused) {
        video.pause();
      }
    });
  }, { threshold: 0.25 });

  document.querySelectorAll("video").forEach((video) => {
    videoObserver.observe(video);
  });

  // 2. SISTEMA DE PAGINACIÓN DE FOTOGRAFÍAS (20 fotos por página)
  let currentPage = 1;
  const totalPages = 2;
  const prevBtn = document.getElementById("prev-page-btn");
  const nextBtn = document.getElementById("next-page-btn");
  const pagIndicator = document.getElementById("pag-indicator");
  const photoCards = Array.from(document.querySelectorAll(".photo-card"));

  function updatePagination() {
    photoCards.forEach((card) => {
      const cardPage = parseInt(card.getAttribute("data-page"), 10);
      if (cardPage === currentPage) {
        card.style.display = "flex";
        setTimeout(() => card.classList.add("visible"), 50);
      } else {
        card.style.display = "none";
        card.classList.remove("visible");
      }
    });

    if (pagIndicator) {
      pagIndicator.textContent = `[ PAGE 0${currentPage} / 0${totalPages} ]`;
    }

    if (prevBtn) prevBtn.disabled = (currentPage === 1);
    if (nextBtn) nextBtn.disabled = (currentPage === totalPages);
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      if (currentPage > 1) {
        currentPage--;
        updatePagination();
        document.getElementById("photo-grid").scrollIntoView({ behavior: "smooth" });
      }
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      if (currentPage < totalPages) {
        currentPage++;
        updatePagination();
        document.getElementById("photo-grid").scrollIntoView({ behavior: "smooth" });
      }
    });
  }

  // Inicializar la primera página
  updatePagination();

  // 3. FILTRADO INTERACTIVO (TODOS / PHOTO / VIDEO) + RESETEO DE PAGINACIÓN
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

      // Resetear la página a 1 cuando el usuario cambia de filtro
      if (currentPage !== 1) {
        currentPage = 1;
        updatePagination();
      }
    });
  });

  // 4. VISTA EN GRID O LISTA
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

  // 5. MODAL / LIGHTBOX DE FOTOGRAFÍAS (NAVEGACIÓN TECLADO + SWIPE)
  const modal = document.getElementById("interactive-modal");
  const modalImg = document.getElementById("modal-image");
  const modalTitle = document.getElementById("modal-title-text");
  const modalMeta = document.getElementById("modal-meta-text");
  const modalClose = document.getElementById("modal-close");

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
      if (modal) {
        modal.classList.add("active");
        toggleBodyScroll(true);
      }
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
    if (modal && modal.classList.contains("active")) {
      modal.classList.remove("active");
      toggleBodyScroll(false);
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

  // Gestos táctiles para dispositivos móviles
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

  // 6. LÓGICA DE MODAL DE CONTACTO / BOOKING
  const contactModal = document.getElementById("contact-modal");
  const openContactBtn = document.getElementById("open-contact-btn");
  const openContactBannerBtn = document.getElementById("open-contact-banner-btn");
  const closeContactBtn = document.getElementById("contact-modal-close");
  const contactForm = document.getElementById("contact-form");
  const submitBtnText = document.getElementById("submit-btn-text");
  const formFeedback = document.getElementById("form-feedback");

  function openContactModal() {
    if (contactModal) {
      contactModal.classList.add("active");
      toggleBodyScroll(true);
    }
  }

  function closeContactModal() {
    if (contactModal && contactModal.classList.contains("active")) {
      contactModal.classList.remove("active");
      toggleBodyScroll(false);
    }
  }

  if (openContactBtn) openContactBtn.addEventListener("click", openContactModal);
  if (openContactBannerBtn) openContactBannerBtn.addEventListener("click", openContactModal);
  if (closeContactBtn) closeContactBtn.addEventListener("click", closeContactModal);

  if (contactModal) {
    contactModal.addEventListener("click", (e) => {
      if (e.target === contactModal) closeContactModal();
    });
  }

  // Tecla ESC y flechas de teclado
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeModal();
      closeContactModal();
    }

    if (modal && modal.classList.contains("active")) {
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
    }
  });

  // Procesa el envío del formulario usando AJAX (Formsubmit) sin abrir cliente de correo
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      if (submitBtnText) submitBtnText.textContent = "“ENVIANDO... ↗”";

      const formData = new FormData(contactForm);

      fetch(contactForm.action, {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      }).then(response => {
        if (response.ok) {
          if (formFeedback) {
            formFeedback.textContent = "✓ MENSAJE ENVIADO CON ÉXITO";
            formFeedback.style.color = "#00FF66";
          }
          if (submitBtnText) submitBtnText.textContent = "“ENVIADO ↗”";
          contactForm.reset();
          setTimeout(() => {
            closeContactModal();
            if (formFeedback) formFeedback.textContent = "";
            if (submitBtnText) submitBtnText.textContent = "“ENVIAR_MENSAJE ↗”";
          }, 2000);
        } else {
          throw new Error("Error en el envío");
        }
      }).catch(error => {
        if (formFeedback) {
          formFeedback.textContent = "✕ ERROR AL ENVIAR. INTENTA DE NUEVO.";
          formFeedback.style.color = "#FF3333";
        }
        if (submitBtnText) submitBtnText.textContent = "“REINTENTAR ↗”";
      });
    });
  }

 

});
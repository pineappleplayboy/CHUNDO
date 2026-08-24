document.addEventListener("DOMContentLoaded", () => {
  // ---------------------------------------------------------------------------
  // 1. GESTIÓN DEL SCROLL GLOBAL Y ELEMENTOS DEL DOM
  // ---------------------------------------------------------------------------
  const state = {
    currentPage: 1,
    totalPages: 2,
    currentIndex: 0,
    touchStartX: 0,
    touchEndX: 0
  };

  const elements = {
    photoCards: Array.from(document.querySelectorAll(".photo-card")),
    photoGrid: document.getElementById("photo-grid"),
    prevBtn: document.getElementById("prev-page-btn"),
    nextBtn: document.getElementById("next-page-btn"),
    pagIndicator: document.getElementById("pag-indicator"),
    filterBtns: document.querySelectorAll(".filter-btn"),
    mediaBlocks: document.querySelectorAll(".media-block"),
    // Modal de Visualización
    interactiveModal: document.getElementById("interactive-modal"),
    modalImg: document.getElementById("modal-image"),
    modalTitle: document.getElementById("modal-title-text"),
    modalMeta: document.getElementById("modal-meta-text"),
    modalClose: document.getElementById("modal-close"),
    // Modal de Contacto
    contactModal: document.getElementById("contact-modal"),
    openContactBtn: document.getElementById("open-contact-btn"),
    openContactBannerBtn: document.getElementById("open-contact-banner-btn"),
    closeContactBtn: document.getElementById("contact-modal-close"),
    contactForm: document.getElementById("contact-form"),
    submitBtnText: document.getElementById("submit-btn-text"),
    formFeedback: document.getElementById("form-feedback")
  };

  function toggleBodyScroll(disable) {
    document.body.style.overflow = disable ? "hidden" : "";
  }

  // ---------------------------------------------------------------------------
  // 2. OBSERVADORES DE INTERSECCIÓN (REVELADO Y LAZY LOADING DE VIDEO)
  // ---------------------------------------------------------------------------
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

  const videoPauseObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const video = entry.target;
      if (!entry.isIntersecting && !video.paused) {
        video.pause();
      }
    });
  }, { threshold: 0.25 });

  const videoLoadObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const video = entry.target;
        video.preload = "metadata";
        video.removeAttribute("poster");

        const captureFirstFrame = () => {
          if (video.currentTime === 0) video.currentTime = 0.1;
        };

        if (video.readyState >= 1) {
          captureFirstFrame();
        } else {
          video.addEventListener("loadedmetadata", captureFirstFrame, { once: true });
        }
        observer.unobserve(video);
      }
    });
  }, { rootMargin: "200px 0px", threshold: 0.01 });

  document.querySelectorAll("video").forEach((video) => {
    video.preload = "none";
    videoLoadObserver.observe(video);
    videoPauseObserver.observe(video);

    video.addEventListener("play", () => {
      const requestFS = video.webkitEnterFullscreen || video.requestFullscreen || video.msRequestFullscreen;
      if (requestFS) requestFS.call(video);
    });
  });

  // ---------------------------------------------------------------------------
  // 3. PAGINACIÓN DE FOTOGRAFÍAS
  // ---------------------------------------------------------------------------
  function updatePagination() {
    elements.photoCards.forEach((card) => {
      const cardPage = parseInt(card.getAttribute("data-page"), 10);
      const isCurrentPage = cardPage === state.currentPage;

      card.style.display = isCurrentPage ? "flex" : "none";
      card.classList.toggle("visible", isCurrentPage);
    });

    if (elements.pagIndicator) {
      elements.pagIndicator.textContent = `[ PAGE 0${state.currentPage} / 0${state.totalPages} ]`;
    }

    if (elements.prevBtn) elements.prevBtn.disabled = (state.currentPage === 1);
    if (elements.nextBtn) elements.nextBtn.disabled = (state.currentPage === state.totalPages);
  }

  function changePage(delta) {
    const newPage = state.currentPage + delta;
    if (newPage >= 1 && newPage <= state.totalPages) {
      state.currentPage = newPage;
      updatePagination();
      if (elements.photoGrid) {
        elements.photoGrid.scrollIntoView({ behavior: "smooth" });
      }
    }
  }

  if (elements.prevBtn) elements.prevBtn.addEventListener("click", () => changePage(-1));
  if (elements.nextBtn) elements.nextBtn.addEventListener("click", () => changePage(1));

  updatePagination();

  // ---------------------------------------------------------------------------
  // 4. FILTRADO INTERACTIVO DE CONTENIDO
  // ---------------------------------------------------------------------------
  elements.filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      elements.filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const filterValue = btn.getAttribute("data-filter");

      elements.mediaBlocks.forEach((block) => {
        const category = block.getAttribute("data-category");
        const show = filterValue === "all" || category === filterValue;
        block.classList.toggle("is-hidden", !show);
      });

      if (state.currentPage !== 1) {
        state.currentPage = 1;
        updatePagination();
      }
    });
  });

  // ---------------------------------------------------------------------------
  // 5. MODAL / LIGHTBOX DE FOTOGRAFÍAS
  // ---------------------------------------------------------------------------
  function updateModal(index) {
    if (index < 0 || index >= elements.photoCards.length) return;
    state.currentIndex = index;
    const card = elements.photoCards[state.currentIndex];

    const src = card.getAttribute("data-src");
    const title = card.getAttribute("data-title");
    const meta = card.getAttribute("data-meta");

    if (src && elements.modalImg) {
      elements.modalImg.src = src;
      if (elements.modalTitle) elements.modalTitle.textContent = `“VIEWER” // ${title}`;
      if (elements.modalMeta) elements.modalMeta.textContent = meta;
    }
  }

  function openViewerModal(index) {
    updateModal(index);
    if (elements.interactiveModal) {
      elements.interactiveModal.classList.add("active");
      toggleBodyScroll(true);
    }
  }

  function closeViewerModal() {
    if (elements.interactiveModal && elements.interactiveModal.classList.contains("active")) {
      elements.interactiveModal.classList.remove("active");
      toggleBodyScroll(false);
      setTimeout(() => { 
        if (elements.modalImg) elements.modalImg.src = ""; 
      }, 300);
    }
  }

  function showNextPhoto() {
    updateModal((state.currentIndex + 1) % elements.photoCards.length);
  }

  function showPrevPhoto() {
    updateModal((state.currentIndex - 1 + elements.photoCards.length) % elements.photoCards.length);
  }

  elements.photoCards.forEach((card, index) => {
    card.addEventListener("click", () => openViewerModal(index));
  });

  if (elements.modalClose) elements.modalClose.addEventListener("click", closeViewerModal);

  if (elements.interactiveModal) {
    elements.interactiveModal.addEventListener("click", (e) => {
      if (e.target === elements.interactiveModal || e.target.classList.contains("modal-body")) {
        closeViewerModal();
      }
    });

    elements.interactiveModal.addEventListener("touchstart", (e) => {
      state.touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    elements.interactiveModal.addEventListener("touchend", (e) => {
      state.touchEndX = e.changedTouches[0].screenX;
      const swipeThreshold = 50;
      if (state.touchEndX < state.touchStartX - swipeThreshold) showNextPhoto();
      if (state.touchEndX > state.touchStartX + swipeThreshold) showPrevPhoto();
    }, { passive: true });
  }

  // ---------------------------------------------------------------------------
  // 6. MODAL DE CONTACTO & FORMULARIO
  // ---------------------------------------------------------------------------
  function openContactModal() {
    if (elements.contactModal) {
      elements.contactModal.classList.add("active");
      toggleBodyScroll(true);
    }
  }

  function closeContactModal() {
    if (elements.contactModal && elements.contactModal.classList.contains("active")) {
      elements.contactModal.classList.remove("active");
      toggleBodyScroll(false);
    }
  }

  [elements.openContactBtn, elements.openContactBannerBtn].forEach((btn) => {
    if (btn) btn.addEventListener("click", openContactModal);
  });

  if (elements.closeContactBtn) elements.closeContactBtn.addEventListener("click", closeContactModal);

  if (elements.contactModal) {
    elements.contactModal.addEventListener("click", (e) => {
      if (e.target === elements.contactModal) closeContactModal();
    });
  }

  // ---------------------------------------------------------------------------
  // 7. EVENTOS GLOBALES DE TECLADO (ESCAPE & NAVEGACIÓN)
  // ---------------------------------------------------------------------------
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeViewerModal();
      closeContactModal();
    }

    if (elements.interactiveModal && elements.interactiveModal.classList.contains("active")) {
      if (e.key === "ArrowRight") showNextPhoto();
      if (e.key === "ArrowLeft") showPrevPhoto();
    }
  });

  // ---------------------------------------------------------------------------
  // 8. ENVÍO ASÍNCRONO DEL FORMULARIO
  // ---------------------------------------------------------------------------
  if (elements.contactForm) {
    elements.contactForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      if (elements.submitBtnText) elements.submitBtnText.textContent = "“ENVIANDO... ↗”";

      try {
        const response = await fetch(elements.contactForm.action, {
          method: "POST",
          body: new FormData(elements.contactForm),
          headers: { 'Accept': 'application/json' }
        });

        if (!response.ok) throw new Error("Error en el envío");

        if (elements.formFeedback) {
          elements.formFeedback.textContent = "✓ MENSAJE ENVIADO CON ÉXITO";
          elements.formFeedback.style.color = "#00FF66";
        }
        if (elements.submitBtnText) elements.submitBtnText.textContent = "“ENVIADO ↗”";
        elements.contactForm.reset();

        setTimeout(() => {
          closeContactModal();
          if (elements.formFeedback) elements.formFeedback.textContent = "";
          if (elements.submitBtnText) elements.submitBtnText.textContent = "“ENVIAR_MENSAJE ↗”";
        }, 2000);

      } catch (error) {
        if (elements.formFeedback) {
          elements.formFeedback.textContent = "✕ ERROR AL ENVIAR. INTENTA DE NUEVO.";
          elements.formFeedback.style.color = "#FF3333";
        }
        if (elements.submitBtnText) elements.submitBtnText.textContent = "“REINTENTAR ↗”";
      }
    });
  }
});
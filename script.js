document.addEventListener("DOMContentLoaded", () => {

  // ==========================================================================
  // DATOS: FOTOGRAFÍAS DE ARCHIVO, STILLS Y PUBLICIDAD
  // ==========================================================================
  const photoData = [
    { id: 1, src: "assets/foto1.jpg", format: ".RAW", meta: "FORMAT: RAW // RESOLUTION: 4K" },
    { id: 2, src: "assets/foto2.jpg", format: ".JPEG", meta: "FORMAT: JPEG // COLOR: REC709" },
    { id: 3, src: "assets/foto3.jpg", format: ".RAW", meta: "FORMAT: RAW // ASPECT: 16:9" },
    { id: 4, src: "assets/foto4.jpg", format: ".JPEG", meta: "FORMAT: JPEG // SENSITIVITY: HIGH" },
    { id: 5, src: "assets/foto5.jpg", format: ".RAW", meta: "FORMAT: RAW // LENS: 35MM" },
    { id: 6, src: "assets/foto6.jpg", format: ".JPEG", meta: "FORMAT: JPEG // LENS: 50MM" },
    { id: 7, src: "assets/foto7.jpg", format: ".RAW", meta: "FORMAT: RAW // ENVIRONMENT: URBAN" },
    { id: 8, src: "assets/foto8.jpg", format: ".JPEG", meta: "FORMAT: JPEG // LIGHTING: NATURAL" },
    { id: 9, src: "assets/foto9.jpg", format: ".RAW", meta: "FORMAT: RAW // COLOR: GRADED" },
    { id: 10, src: "assets/foto10.jpg", format: ".JPEG", meta: "FORMAT: JPEG // EXPORT: WEB" },
    { id: 11, src: "assets/foto11.jpg", format: ".RAW", meta: "FORMAT: RAW // RESOLUTION: 4K" },
    { id: 12, src: "assets/foto12.jpg", format: ".JPEG", meta: "FORMAT: JPEG // COLOR: REC709" },
    { id: 13, src: "assets/foto13.jpg", format: ".RAW", meta: "FORMAT: RAW // ASPECT: 16:9" },
    { id: 14, src: "assets/foto14.jpg", format: ".JPEG", meta: "FORMAT: JPEG // SENSITIVITY: HIGH" },
    { id: 15, src: "assets/foto15.jpg", format: ".RAW", meta: "FORMAT: RAW // LENS: 35MM" },
    { id: 16, src: "assets/foto16.jpg", format: ".JPEG", meta: "FORMAT: JPEG // LENS: 50MM" },
    { id: 17, src: "assets/foto17.jpg", format: ".RAW", meta: "FORMAT: RAW // ENVIRONMENT: URBAN" },
    { id: 18, src: "assets/foto18.jpg", format: ".JPEG", meta: "FORMAT: JPEG // LIGHTING: NATURAL" },
    { id: 19, src: "assets/foto19.jpg", format: ".RAW", meta: "FORMAT: RAW // COLOR: GRADED" },
    { id: 20, src: "assets/foto20.jpg", format: ".JPEG", meta: "FORMAT: JPEG // EXPORT: WEB" },
    { id: 21, src: "assets/foto21.jpg", format: ".RAW", meta: "FORMAT: RAW // RESOLUTION: 4K" },
    { id: 22, src: "assets/foto22.jpg", format: ".JPEG", meta: "FORMAT: JPEG // COLOR: REC709" },
    { id: 23, src: "assets/foto23.jpg", format: ".RAW", meta: "FORMAT: RAW // ASPECT: 16:9" },
    { id: 24, src: "assets/foto24.jpg", format: ".JPEG", meta: "FORMAT: JPEG // SENSITIVITY: HIGH" },
    { id: 25, src: "assets/foto25.jpg", format: ".RAW", meta: "FORMAT: RAW // LENS: 35MM" },
    { id: 26, src: "assets/foto26.jpg", format: ".JPEG", meta: "FORMAT: JPEG // LENS: 50MM" },
    { id: 27, src: "assets/foto27.jpg", format: ".RAW", meta: "FORMAT: RAW // ENVIRONMENT: URBAN" },
    { id: 28, src: "assets/foto28.jpg", format: ".JPEG", meta: "FORMAT: JPEG // LIGHTING: NATURAL" },
    { id: 29, src: "assets/foto29.png", format: ".PNG", meta: "FORMAT: PNG // COLOR: GRADED" },
    { id: 30, src: "assets/foto30.jpg", format: ".JPEG", meta: "FORMAT: JPEG // EXPORT: WEB" },
    { id: 31, src: "assets/foto31.jpg", format: ".RAW", meta: "FORMAT: RAW // RESOLUTION: 4K" },
    { id: 32, src: "assets/foto32.jpg", format: ".JPEG", meta: "FORMAT: JPEG // COLOR: REC709" },
    { id: 33, src: "assets/foto33.jpg", format: ".RAW", meta: "FORMAT: RAW // ASPECT: 16:9" },
    { id: 34, src: "assets/foto34.jpg", format: ".JPEG", meta: "FORMAT: JPEG // SENSITIVITY: HIGH" },
    { id: 35, src: "assets/foto35.jpg", format: ".RAW", meta: "FORMAT: RAW // LENS: 35MM" },
    { id: 36, src: "assets/foto36.jpg", format: ".JPEG", meta: "FORMAT: JPEG // LENS: 50MM" },
    { id: 37, src: "assets/foto37.jpg", format: ".RAW", meta: "FORMAT: RAW // ENVIRONMENT: URBAN" },
    { id: 38, src: "assets/foto38.jpg", format: ".JPEG", meta: "FORMAT: JPEG // LIGHTING: NATURAL" },
    { id: 39, src: "assets/foto39.png", format: ".PNG", meta: "FORMAT: PNG // COLOR: GRADED" },
    { id: 40, src: "assets/foto40.jpg", format: ".JPEG", meta: "FORMAT: JPEG // EXPORT: WEB" },
    { id: 41, src: "assets/foto41.jpg", format: ".RAW", meta: "FORMAT: RAW // RESOLUTION: 4K" },
    { id: 42, src: "assets/foto42.jpg", format: ".JPEG", meta: "FORMAT: JPEG // COLOR: REC709" },
    { id: 43, src: "assets/foto43.jpg", format: ".RAW", meta: "FORMAT: RAW // ASPECT: 16:9" },
    { id: 44, src: "assets/foto44.jpg", format: ".JPEG", meta: "FORMAT: JPEG // SENSITIVITY: HIGH" },
    { id: 45, src: "assets/foto45.jpg", format: ".RAW", meta: "FORMAT: RAW // LENS: 35MM" },
    { id: 46, src: "assets/foto46.jpg", format: ".JPEG", meta: "FORMAT: JPEG // LENS: 50MM" },
    { id: 47, src: "assets/foto47.jpg", format: ".RAW", meta: "FORMAT: RAW // ENVIRONMENT: URBAN" },
    { id: 48, src: "assets/foto48.jpg", format: ".JPEG", meta: "FORMAT: JPEG // LIGHTING: NATURAL" },
    { id: 49, src: "assets/foto49.jpg", format: ".RAW", meta: "FORMAT: RAW // COLOR: GRADED" },
    { id: 50, src: "assets/foto50.jpg", format: ".JPEG", meta: "FORMAT: JPEG // EXPORT: WEB" },
    { id: 51, src: "assets/foto51.jpg", format: ".RAW", meta: "FORMAT: RAW // RESOLUTION: 4K" },
    { id: 52, src: "assets/foto52.jpg", format: ".JPEG", meta: "FORMAT: JPEG // COLOR: REC709" },
    { id: 53, src: "assets/foto53.jpg", format: ".RAW", meta: "FORMAT: RAW // ASPECT: 16:9" },
    { id: 54, src: "assets/foto54.jpg", format: ".JPEG", meta: "FORMAT: JPEG // SENSITIVITY: HIGH" },
    { id: 55, src: "assets/foto55.jpg", format: ".RAW", meta: "FORMAT: RAW // LENS: 35MM" },
    { id: 56, src: "assets/foto56.jpg", format: ".JPEG", meta: "FORMAT: JPEG // LENS: 50MM" },
    { id: 57, src: "assets/foto57.jpg", format: ".RAW", meta: "FORMAT: RAW // ENVIRONMENT: URBAN" },
    { id: 58, src: "assets/foto58.jpg", format: ".JPEG", meta: "FORMAT: JPEG // LIGHTING: NATURAL" },
    { id: 59, src: "assets/foto59.jpg", format: ".RAW", meta: "FORMAT: RAW // COLOR: GRADED" },
    { id: 60, src: "assets/foto60.jpg", format: ".JPEG", meta: "FORMAT: JPEG // EXPORT: WEB" }
  ];

  const stillsData = [
    { id: 1, src: "assets/stills/still1.jpg", title: "ADIÓS Y BUENA SUERTE", format: "S-LOG3", meta: "PROJECT: CORTO // CAM: SONY FX3 // LENS: 50MM" },
    { id: 2, src: "assets/stills/still2.jpg", title: "ARANGO Y MILDRED", format: "C-LOG2", meta: "PROJECT: VISUAL // CAM: CANON R50 // LENS: 35MM" },
    { id: 3, src: "assets/stills/still3.jpg", title: "PROYECTO NAUCALPAN", format: "S-LOG3", meta: "PROJECT: CORTO // CAM: SONY FX3 // LENS: 50MM" },
    { id: 4, src: "assets/stills/still4.jpg", title: "BLONDE", format: "C-LOG2", meta: "PROJECT: VISUAL // CAM: CANON R50 // LENS: 35MM" },
    { id: 5, src: "assets/stills/still5.jpg", title: "NUEVO STILL 1", format: "C-LOG2", meta: "PROJECT: VISUAL // CAM: CANON R50 // LENS: 7.5MM" },
    { id: 6, src: "assets/stills/still6.jpg", title: "NUEVO STILL 2", format: "S-LOG3", meta: "PROJECT: CORTO // CAM: SONY FX3 // LENS: 50MM" },
    { id: 7, src: "assets/stills/still7.jpg", title: "NUEVO STILL 3", format: "C-LOG2", meta: "PROJECT: VISUAL // CAM: CANON R50 // LENS: 35MM" },
    { id: 8, src: "assets/stills/still8.jpg", title: "NUEVO STILL 4", format: "S-LOG3", meta: "PROJECT: CORTO // CAM: SONY FX3 // LENS: 50MM" },
    { id: 9, src: "assets/stills/still9.jpg", title: "NUEVO STILL 5", format: "C-LOG2", meta: "PROJECT: VISUAL // CAM: CANON R50 // LENS: 35MM" },
    { id: 10, src: "assets/stills/still10.jpg", title: "NUEVO STILL 6", format: "S-LOG3", meta: "PROJECT: CORTO // CAM: SONY FX3 // LENS: 50MM" },
    { id: 11, src: "assets/stills/still11.jpg", title: "NUEVO STILL 7", format: "C-LOG2", meta: "PROJECT: VISUAL // CAM: CANON R50 // LENS: 35MM" }
  ];

  const adsData = [
    { id: 1, src: "assets/ads/foto1.jpg", title: "01", format: "JPEG", meta: "BRAND: DON SALO // TYPE: AD" },
    { id: 2, src: "assets/ads/foto2.jpg", title: "02", format: "JPEG", meta: "BRAND: DON SALO // TYPE: AD" },
    { id: 3, src: "assets/ads/foto3.jpg", title: "03", format: "JPEG", meta: "BRAND: DON SALO // TYPE: AD" }
  ];

  // ==========================================================================
  // UTILIDADES
  // ==========================================================================
  const padZero = (num) => String(num).padStart(2, "0");
  const isDesktop = () => window.innerWidth >= 1024;

  const toggleBodyScroll = (disable) => {
    document.body.style.overflow = disable ? "hidden" : "";
  };

  // ==========================================================================
  // 1. OBSERVERS (REVELADO AL SCROLL Y GESTIÓN DE VIDEOS SIN BLOQUEO EN PC)
  // ==========================================================================
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.05, rootMargin: "100px 0px" });

  document.querySelectorAll(".interactive-card, .off-button").forEach((el) => {
    revealObserver.observe(el);
  });

  const videoPauseObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting && !entry.target.paused) {
        entry.target.pause();
      }
    });
  }, { threshold: 0.25 });

  const handleFullscreenChange = () => {
    if (!document.fullscreenElement && !document.webkitFullscreenElement) {
      document.querySelectorAll("video").forEach((v) => {
        if (!v.paused) v.pause();
      });
    }
  };

  document.addEventListener("fullscreenchange", handleFullscreenChange);
  document.addEventListener("webkitfullscreenchange", handleFullscreenChange);

  // Evita que PC descargue y decodifique los 6 videos al abrir la página
  document.querySelectorAll("video").forEach((video) => {
    video.preload = "none";
    videoPauseObserver.observe(video);

    video.addEventListener("pointerenter", () => {
      if (video.preload === "none") video.preload = "metadata";
    }, { once: true });

    video.addEventListener("play", () => {
      const requestFs = video.requestFullscreen || video.webkitEnterFullscreen || video.msRequestFullscreen;
      if (requestFs) {
        const result = requestFs.call(video);
        if (result && typeof result.catch === "function") {
          result.catch(() => {});
        }
      }
    });

    video.addEventListener("webkitendfullscreen", () => video.pause());
  });

  // ==========================================================================
  // 2. RENDERIZADORES DE GRIDS OPTIMIZADOS PARA PC Y MÓVIL
  // ==========================================================================
  const itemsPerPage = isDesktop() ? 12 : 20;
  let currentPage = 1;
  const totalPages = Math.ceil(photoData.length / itemsPerPage);

  const photoGrid = document.getElementById("photo-grid");
  const prevBtn = document.getElementById("prev-page-btn");
  const nextBtn = document.getElementById("next-page-btn");
  const pagIndicator = document.getElementById("pag-indicator");

  function renderPhotos(page) {
    if (!photoGrid) return;
    const fragment = document.createDocumentFragment();
    const startIndex = (page - 1) * itemsPerPage;
    const currentPhotos = photoData.slice(startIndex, startIndex + itemsPerPage);

    currentPhotos.forEach((item, index) => {
      const globalIndex = startIndex + index;
      const formattedNum = padZero(item.id);
      const isPriority = page === 1 && index < 4;

      const card = document.createElement("article");
      card.className = isPriority ? "interactive-card photo-card visible" : "interactive-card photo-card";
      card.dataset.index = globalIndex;

      card.innerHTML = `
        <div class="card-header"><span>${formattedNum} / ${photoData.length}</span></div>
        <div class="media-frame">
          <img src="${item.src}" alt="CHUNDO — Photography ${formattedNum}" width="1200" height="1600" ${isPriority ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async">
          <div class="hover-overlay"><span class="action-tag">“EXPAND_IMAGE ↗”</span></div>
        </div>
        <div class="card-footer"><span class="tag">FORMAT: ${item.format}</span></div>
      `;

      fragment.appendChild(card);
      if (!isPriority) revealObserver.observe(card);
    });

    photoGrid.replaceChildren(fragment);

    if (pagIndicator) {
      pagIndicator.textContent = `[ PAGE ${padZero(page)} / ${padZero(totalPages)} ]`;
    }
    if (prevBtn) prevBtn.disabled = page === 1;
    if (nextBtn) nextBtn.disabled = page === totalPages;
  }

  function renderShowcaseGrid(containerId, dataList, config) {
    const container = document.getElementById(containerId);
    if (!container) return;
    const fragment = document.createDocumentFragment();

    dataList.forEach((item, index) => {
      const formattedNum = padZero(item.id || index + 1);
      const card = document.createElement("article");
      card.className = `interactive-card ${config.cardClass} visible`;
      card.dataset.index = index;

      card.innerHTML = `
        <div class="card-header">
          <span>${config.prefix}_${formattedNum}</span>
          <span>${item.title}</span>
        </div>
        <div class="media-frame">
          <img src="${item.src}" alt="${item.title}" loading="lazy" decoding="async">
          <div class="hover-overlay">
            <span class="action-tag">“${config.actionLabel} ↗”</span>
          </div>
        </div>
        <div class="card-footer">
          <span class="tag">FORMAT: ${item.format}</span>
          <span class="title">${config.footerTitle}</span>
        </div>
      `;

      fragment.appendChild(card);
    });

    container.replaceChildren(fragment);

    container.addEventListener("click", (e) => {
      const card = e.target.closest(`.${config.cardClass}`);
      if (card) openModalWithList(dataList, Number(card.dataset.index));
    });
  }

  if (photoGrid) {
    photoGrid.addEventListener("click", (e) => {
      const card = e.target.closest(".photo-card");
      if (card) openModalWithList(photoData, Number(card.dataset.index));
    });
  }

  prevBtn?.addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      renderPhotos(currentPage);
      photoGrid.scrollIntoView({ behavior: "smooth" });
    }
  });

  nextBtn?.addEventListener("click", () => {
    if (currentPage < totalPages) {
      currentPage++;
      renderPhotos(currentPage);
      photoGrid.scrollIntoView({ behavior: "smooth" });
    }
  });

  // Render inmediato de la primera cuadrícula
  renderPhotos(currentPage);

  // Diferir secciones secundarias para no saturar el hilo principal en PC
  const scheduleSecondaryRenders = window.requestIdleCallback || ((cb) => setTimeout(cb, 80));
  scheduleSecondaryRenders(() => {
    renderShowcaseGrid("stills-grid", stillsData, {
      cardClass: "still-card",
      prefix: "STILL",
      actionLabel: "EXPAND_STILL",
      footerTitle: "CHUNDO FILM"
    });

    renderShowcaseGrid("ads-grid", adsData, {
      cardClass: "ad-card",
      prefix: "AD",
      actionLabel: "EXPAND_AD",
      footerTitle: "COMMERCIAL"
    });
  });

  // ==========================================================================
  // 3. FILTRADO INTERACTIVO
  // ==========================================================================
  const filterBtns = document.querySelectorAll(".filter-btn");
  const mediaBlocks = document.querySelectorAll(".media-block");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const filterValue = btn.dataset.filter;
      mediaBlocks.forEach((block) => {
        block.classList.toggle("is-hidden", filterValue !== "all" && block.dataset.category !== filterValue);
      });

      if (currentPage !== 1) {
        currentPage = 1;
        renderPhotos(currentPage);
      }
    });
  });

  // ==========================================================================
  // 4. MODAL / LIGHTBOX UNIVERSAL
  // ==========================================================================
  const modal = document.getElementById("interactive-modal");
  const modalImg = document.getElementById("modal-image");
  const modalTitle = document.getElementById("modal-title-text");
  const modalMeta = document.getElementById("modal-meta-text");
  const modalClose = document.getElementById("modal-close");

  let activeModalList = [];
  let currentIndex = 0;

  function openModalWithList(list, index) {
    if (!list?.length || index < 0 || index >= list.length) return;
    activeModalList = list;
    currentIndex = index;
    updateModalContent();

    if (modal) {
      modal.classList.add("active");
      toggleBodyScroll(true);
    }
  }

  function updateModalContent() {
    const item = activeModalList[currentIndex];
    if (!item?.src) return;

    modalImg.src = item.src;
    const formattedNum = padZero(item.id || currentIndex + 1);
    const displayTitle = item.title || `STILL_FRAME_${formattedNum}`;

    modalTitle.textContent = `“VIEWER” // ${displayTitle}`;
    modalMeta.textContent = item.meta || `FORMAT: ${item.format || "RAW"}`;
  }

  const showNext = () => {
    if (!activeModalList.length) return;
    currentIndex = (currentIndex + 1) % activeModalList.length;
    updateModalContent();
  };

  const showPrev = () => {
    if (!activeModalList.length) return;
    currentIndex = (currentIndex - 1 + activeModalList.length) % activeModalList.length;
    updateModalContent();
  };

  function closeModal() {
    if (!modal?.classList.contains("active")) return;
    modal.classList.remove("active");
    toggleBodyScroll(false);
    setTimeout(() => {
      if (modalImg) modalImg.src = "";
    }, 300);
  }

  modalClose?.addEventListener("click", closeModal);

  modal?.addEventListener("click", (e) => {
    if (e.target === modal || e.target.classList.contains("modal-body")) closeModal();
  });

  let touchStartX = 0;
  modal?.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  modal?.addEventListener("touchend", (e) => {
    const deltaX = e.changedTouches[0].screenX - touchStartX;
    if (deltaX < -50) showNext();
    else if (deltaX > 50) showPrev();
  }, { passive: true });

  // ==========================================================================
  // 5. MODAL DE CONTACTO / BOOKING Y ENVÍO AJAX
  // ==========================================================================
  const contactModal = document.getElementById("contact-modal");
  const openContactBtn = document.getElementById("open-contact-btn");
  const openContactBannerBtn = document.getElementById("open-contact-banner-btn");
  const closeContactBtn = document.getElementById("contact-modal-close");
  const contactForm = document.getElementById("contact-form");
  const submitBtnText = document.getElementById("submit-btn-text");
  const formFeedback = document.getElementById("form-feedback");

  const openContactModal = () => {
    if (!contactModal) return;
    contactModal.classList.add("active");
    toggleBodyScroll(true);
  };

  const closeContactModal = () => {
    if (!contactModal?.classList.contains("active")) return;
    contactModal.classList.remove("active");
    toggleBodyScroll(false);
  };

  openContactBtn?.addEventListener("click", openContactModal);
  openContactBannerBtn?.addEventListener("click", openContactModal);
  closeContactBtn?.addEventListener("click", closeContactModal);

  contactModal?.addEventListener("click", (e) => {
    if (e.target === contactModal) closeContactModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeModal();
      closeContactModal();
    } else if (modal?.classList.contains("active")) {
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
    }
  });

  contactForm?.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (submitBtnText) submitBtnText.textContent = "“ENVIANDO... ↗”";

    try {
      const response = await fetch(contactForm.action, {
        method: "POST",
        body: new FormData(contactForm),
        headers: { Accept: "application/json" }
      });

      if (!response.ok) throw new Error("Error en el envío");

      if (formFeedback) {
        formFeedback.textContent = "✓ MENSAJE ENVIADO CON ÉXITO";
        formFeedback.className = "form-feedback-text is-success";
      }
      if (submitBtnText) submitBtnText.textContent = "“ENVIADO ↗”";
      contactForm.reset();

      setTimeout(() => {
        closeContactModal();
        if (formFeedback) {
          formFeedback.textContent = "";
          formFeedback.className = "form-feedback-text";
        }
        if (submitBtnText) submitBtnText.textContent = "“ENVIAR_MENSAJE ↗”";
      }, 2000);
    } catch {
      if (formFeedback) {
        formFeedback.textContent = "✕ ERROR AL ENVIAR. INTENTA DE NUEVO.";
        formFeedback.className = "form-feedback-text is-error";
      }
      if (submitBtnText) submitBtnText.textContent = "“REINTENTAR ↗”";
    }
  });

});
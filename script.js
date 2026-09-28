document.addEventListener("DOMContentLoaded", () => {

  // ==========================================================================
  // DATOS: FOTOGRAFÍAS DE ARCHIVO Y STILLS DE CORTOS
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
    { id: 40, src: "assets/foto40.jpg", format: ".JPEG", meta: "FORMAT: JPEG // EXPORT: WEB" }
  ];

  const stillsData = [
    { 
      id: 1, 
      src: "assets/stills/still1.jpg", 
      title: "ADIÓS Y BUENA SUERTE", 
      format: "S-LOG3", 
      meta: "PROJECT: CORTOMETRAJE // CAM: SONY FX3 // LENS: 50MM // DP: EMILIO BANUET" 
    },
    { 
      id: 2, 
      src: "assets/stills/still2.jpg", 
      title: "ADIÓS Y BUENA SUERTE", 
      format: "S-LOG3", 
      meta: "PROJECT: CORTOMETRAJE // CAM: SONY FX3 // LENS: 50MM // DP: EMILIO BANUET" 
    },
    { 
      id: 3, 
      src: "assets/stills/still3.jpg", 
      title: "PROYECTO NAUCALPAN", 
      format: "S-LOG3", 
      meta: "PROJECT: CORTOMETRAJE // CAM: SONY FX3 // LENS: 50MM // DP: EMILIO BANUET" 
    },
    { 
      id: 4, 
      src: "assets/stills/still4.jpg", 
      title: "NUEVO CORTOMETRAJE", 
      format: "REC709", 
      meta: "PROJECT: CORTO 2026 // CAM: SONY FX3 // COLOR: DEHANCER" 
    }
  ];

  // FUNCIÓN AUXILIAR: BLOQUEAR/PERMITIR SCROLL
  function toggleBodyScroll(disable) {
    document.body.style.overflow = disable ? "hidden" : "";
  }

  // ==========================================================================
  // 1. REVELADO AL SCROLL Y GESTIÓN OPTIMIZADA DE VIDEOS (LAZY LOADING)
  // ==========================================================================
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
          if (video.currentTime === 0) {
            video.currentTime = 0.1;
          }
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

  const handleFullscreenChange = () => {
    if (!document.fullscreenElement && !document.webkitFullscreenElement) {
      document.querySelectorAll("video").forEach((v) => {
        if (!v.paused) v.pause();
      });
    }
  };

  document.addEventListener("fullscreenchange", handleFullscreenChange);
  document.addEventListener("webkitfullscreenchange", handleFullscreenChange);

  document.querySelectorAll("video").forEach((video) => {
    video.preload = "none";
    videoLoadObserver.observe(video);   
    videoPauseObserver.observe(video);  

    video.addEventListener("play", () => {
      if (video.requestFullscreen) {
        video.requestFullscreen().catch((err) => console.log(err));
      } else if (video.webkitEnterFullscreen) {
        video.webkitEnterFullscreen();
      } else if (video.msRequestFullscreen) {
        video.msRequestFullscreen();
      }
    });

    video.addEventListener("webkitendfullscreen", () => {
      video.pause();
    });
  });

  // ==========================================================================
  // 2. RENDERS Y PAGINACIÓN DE FOTOGRAFÍA
  // ==========================================================================
  const itemsPerPage = 20;
  let currentPage = 1;
  const totalPages = Math.ceil(photoData.length / itemsPerPage);

  const photoGrid = document.getElementById("photo-grid");
  const prevBtn = document.getElementById("prev-page-btn");
  const nextBtn = document.getElementById("next-page-btn");
  const pagIndicator = document.getElementById("pag-indicator");

  function renderPhotos(page) {
    if (!photoGrid) return;
    photoGrid.innerHTML = "";

    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentPhotos = photoData.slice(startIndex, endIndex);

    currentPhotos.forEach((item, index) => {
      const globalIndex = startIndex + index;
      const formattedNum = String(item.id).padStart(2, "0");
      const title = `STILL_FRAME_${formattedNum}`;

      const card = document.createElement("article");
      card.className = "interactive-card photo-card";
      card.setAttribute("data-src", item.src);
      card.setAttribute("data-title", title);
      card.setAttribute("data-meta", item.meta);

      card.innerHTML = `
        <div class="card-header"><span>${formattedNum} / ${photoData.length}</span></div>
        <div class="media-frame">
          <img src="${item.src}" alt="CHUNDO — Photography ${formattedNum}" width="1920" height="1280" loading="lazy" decoding="async">
          <div class="hover-overlay"><span class="action-tag">“EXPAND_IMAGE ↗”</span></div>
        </div>
        <div class="card-footer"><span class="tag">FORMAT: ${item.format}</span></div>
      `;

      card.addEventListener("click", () => {
        openModalWithList(photoData, globalIndex);
      });

      photoGrid.appendChild(card);
      revealObserver.observe(card);
    });

    if (pagIndicator) {
      pagIndicator.textContent = `[ PAGE 0${page} / 0${totalPages} ]`;
    }

    if (prevBtn) prevBtn.disabled = (page === 1);
    if (nextBtn) nextBtn.disabled = (page === totalPages);
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      if (currentPage > 1) {
        currentPage--;
        renderPhotos(currentPage);
        photoGrid.scrollIntoView({ behavior: "smooth" });
      }
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      if (currentPage < totalPages) {
        currentPage++;
        renderPhotos(currentPage);
        photoGrid.scrollIntoView({ behavior: "smooth" });
      }
    });
  }

  renderPhotos(currentPage);

  // ==========================================================================
  // 3. RENDER DE STILLS DE CORTOMETRAJES
  // ==========================================================================
  const stillsGrid = document.getElementById("stills-grid");

  function renderStills() {
    if (!stillsGrid) return;
    stillsGrid.innerHTML = "";

    stillsData.forEach((item, index) => {
      const formattedNum = String(item.id || index + 1).padStart(2, "0");

      const card = document.createElement("article");
      card.className = "interactive-card still-card visible";

      card.innerHTML = `
        <div class="card-header">
          <span>STILL_${formattedNum}</span>
          <span>${item.title}</span>
        </div>
        <div class="media-frame">
          <img src="${item.src}" alt="${item.title}" loading="lazy" decoding="async">
          <div class="hover-overlay">
            <span class="action-tag">“EXPAND_STILL ↗”</span>
          </div>
        </div>
        <div class="card-footer">
          <span class="tag">FORMAT: ${item.format}</span>
          <span class="title">CHUNDO FILM</span>
        </div>
      `;

      card.addEventListener("click", () => {
        openModalWithList(stillsData, index);
      });

      stillsGrid.appendChild(card);
      revealObserver.observe(card);
    });
  }

  renderStills();

  // ==========================================================================
  // 4. FILTRADO INTERACTIVO (TODOS / PHOTO / STILLS / VIDEO)
  // ==========================================================================
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

      if (currentPage !== 1) {
        currentPage = 1;
        renderPhotos(currentPage);
      }
    });
  });

  // ==========================================================================
  // 5. MODAL / LIGHTBOX UNIVERSAL (Manejo dinámico de listas Fotografía / Stills)
  // ==========================================================================
  const modal = document.getElementById("interactive-modal");
  const modalImg = document.getElementById("modal-image");
  const modalTitle = document.getElementById("modal-title-text");
  const modalMeta = document.getElementById("modal-meta-text");
  const modalClose = document.getElementById("modal-close");

  let activeModalList = [];
  let currentIndex = 0;

  function openModalWithList(list, index) {
    if (!list || list.length === 0 || index < 0 || index >= list.length) return;
    
    activeModalList = list;
    currentIndex = index;
    updateModalContent();

    if (modal) {
      modal.classList.add("active");
      toggleBodyScroll(true);
    }
  }

  function updateModalContent() {
    if (!activeModalList || activeModalList.length === 0) return;
    const item = activeModalList[currentIndex];

    if (item && item.src) {
      modalImg.src = item.src;
      
      const formattedNum = String(item.id || currentIndex + 1).padStart(2, "0");
      const displayTitle = item.title ? item.title : `STILL_FRAME_${formattedNum}`;
      
      modalTitle.textContent = `“VIEWER” // ${displayTitle}`;
      modalMeta.textContent = item.meta || `FORMAT: ${item.format || "RAW"}`;
    }
  }

  function showNext() {
    if (activeModalList.length === 0) return;
    currentIndex = (currentIndex + 1) % activeModalList.length;
    updateModalContent();
  }

  function showPrev() {
    if (activeModalList.length === 0) return;
    currentIndex = (currentIndex - 1 + activeModalList.length) % activeModalList.length;
    updateModalContent();
  }

  function closeModal() {
    if (modal && modal.classList.contains("active")) {
      modal.classList.remove("active");
      toggleBodyScroll(false);
      setTimeout(() => { 
        if (modalImg) modalImg.src = ""; 
      }, 300);
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

  // Gestos táctiles en móvil
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

  // Tecla ESC y flechas de navegación
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

  // ==========================================================================
  // 6. MODAL DE CONTACTO / BOOKING Y ENVÍO AJAX
  // ==========================================================================
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
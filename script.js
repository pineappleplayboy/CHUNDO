document.addEventListener("DOMContentLoaded", () => {
  // 1. SCROLL REVEAL ANIMATION (INTERSECTION OBSERVER)
  const observerOptions = {
    root: null,
    threshold: 0.1,
    rootMargin: "0px 0px -30px 0px"
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  function initObserve() {
    document.querySelectorAll(".interactive-card, .off-button").forEach((el) => {
      revealObserver.observe(el);
    });
  }
  initObserve();

  // 2. FILTRADO INTERACTIVO (TODOS / FOTOGRAFÍA / VIDEO)
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

  // 3. CAMBIO DE VISTA (GRID / LIST)
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
      grids.forEach((grid) => grid.classList.addClass ? grid.classList.addClass("list-view") : grid.classList.add("list-view"));
    });
  }

  // 4. INTERACTIVE LIGHTBOX MODAL
  const modal = document.getElementById("interactive-modal");
  const modalImg = document.getElementById("modal-image");
  const modalTitle = document.getElementById("modal-title-text");
  const modalMeta = document.getElementById("modal-meta-text");
  const modalClose = document.getElementById("modal-close");

  const photoCards = document.querySelectorAll(".photo-card");

  photoCards.forEach((card) => {
    card.addEventListener("click", () => {
      const src = card.getAttribute("data-src");
      const title = card.getAttribute("data-title");
      const meta = card.getAttribute("data-meta");

      if (src) {
        modalImg.src = src;
        modalTitle.textContent = `“VIEWER” // ${title}`;
        modalMeta.textContent = meta;
        modal.classList.add("active");
      }
    });
  });

  function closeModal() {
    modal.classList.remove("active");
    setTimeout(() => {
      modalImg.src = "";
    }, 300);
  }

  if (modalClose) {
    modalClose.addEventListener("click", closeModal);
  }

  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal || e.target.classList.contains("modal-body")) {
        closeModal();
      }
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal && modal.classList.contains("active")) {
      closeModal();
    }
  });

  // 5. RELOJ EN VIVO
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
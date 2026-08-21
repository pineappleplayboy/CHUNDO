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

  // 4. MODAL / LIGHTBOX DE FOTOGRAFÍAS
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

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal && modal.classList.contains("active")) {
      closeModal();
    }
  });

});
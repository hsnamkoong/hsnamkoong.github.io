(function () {
  const root = document.querySelector("[data-publications-app]");

  if (!root) {
    return;
  }

  const entries = Array.from(root.querySelectorAll("[data-publication-entry]"));
  const search = root.querySelector("[data-publication-search]");
  const empty = root.querySelector("[data-publication-empty]");
  let activeLabel = "all";

  const normalize = (value) => value.toLowerCase().trim();

  const update = () => {
    const query = normalize(search ? search.value : "");
    let visibleCount = 0;

    entries.forEach((entry) => {
      const matchesQuery = !query || entry.dataset.search.includes(query);
      const entryLabels = new Set((entry.dataset.labels || "").split(" ").filter(Boolean));
      const matchesLabels = activeLabel === "all" || entryLabels.has(activeLabel);
      const isVisible = matchesQuery && matchesLabels;

      entry.hidden = !isVisible;
      if (isVisible) {
        visibleCount += 1;
      }
    });

    if (empty) {
      empty.hidden = visibleCount !== 0;
    }
  };

  root.addEventListener("click", (event) => {
    const button = event.target.closest("[data-publication-filter]");

    if (!button || !root.contains(button)) {
      return;
    }

    const filterValue = button.dataset.filterValue;

    if (filterValue === "all" || activeLabel === filterValue) {
      activeLabel = "all";
    } else {
      activeLabel = filterValue;
    }

    root.querySelectorAll('[data-publication-filter="label"]').forEach((filterButton) => {
      const isAllButton = filterButton.dataset.filterValue === "all";
      const isActive = isAllButton ? activeLabel === "all" : activeLabel === filterButton.dataset.filterValue;
      filterButton.classList.toggle("active", isActive);
      filterButton.setAttribute("aria-pressed", isActive.toString());
    });

    update();
  });

  if (search) {
    search.addEventListener("input", update);
  }

  update();
})();
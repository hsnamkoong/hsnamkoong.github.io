(() => {
  // Keep a canonical order so revisiting the same minute gives the same shuffle.
  const groups = Array.from(document.querySelectorAll("[data-team-shuffle]"), (container) => ({
    container,
    members: Array.from(container.children),
  }));

  function shuffleTeam() {
    const now = new Date();
    // UTC makes the ordering consistent for visitors in different time zones.
    const minute = now.getUTCHours() * 60 + now.getUTCMinutes();
    for (const { container, members } of groups) {
      let seed = minute + 1;
      for (const char of container.dataset.teamShuffle) {
        seed = (Math.imul(seed, 31) + char.charCodeAt(0)) >>> 0;
      }
      const shuffled = members.slice();
      for (let i = shuffled.length - 1; i > 0; i--) {
        seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0;
        const j = Math.floor((seed / 4294967296) * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      container.append(...shuffled);
    }
  }

  // Shuffle on arrival; retain that order while someone is reading the page.
  shuffleTeam();
})();

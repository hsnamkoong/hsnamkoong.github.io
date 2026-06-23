// Check if the user is on a Mac and update the shortcut key for search accordingly
document.onreadystatechange = () => {
  if (document.readyState === "interactive") {
    let isMac = navigator.platform.toUpperCase().indexOf("MAC") >= 0;
    let shortcutKeyElement = document.querySelector("#search-toggle .nav-link");
    let searchToggle = document.querySelector("#search-toggle");
    if (shortcutKeyElement && isMac && searchToggle?.dataset.iconOnly !== "true") {
      // use the unicode for command key
      shortcutKeyElement.innerHTML = '&#x2318; k <i class="ti ti-search"></i>';
    }
  }
};

/*!
 * Lumen theme switch (optional, ~1KB)
 *
 * 1. Add this in <head> (before the page paints, so there is no flash):
 *      <script src="https://cdn.jsdelivr.net/gh/7AS1N/Lumen/lumen-theme.js"></script>
 * 2. Add a button anywhere. It fills itself with a sun/moon icon:
 *      <button data-theme-toggle></button>
 *
 * Without a saved choice the page follows the system theme.
 * Once the user clicks, the choice is saved in localStorage.
 */
(function () {
  var KEY = "lumen-theme";
  var root = document.documentElement;
  var media = window.matchMedia("(prefers-color-scheme: dark)");

  var attrs = 'xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"';
  var SUN = '<svg ' + attrs + '><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>';
  var MOON = '<svg ' + attrs + '><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>';

  function saved() {
    try { return localStorage.getItem(KEY); } catch (e) { return null; }
  }

  function current() {
    return root.getAttribute("data-theme") || (media.matches ? "dark" : "light");
  }

  // The icon shows what you will switch TO: moon in light mode, sun in dark mode.
  function render() {
    var dark = current() === "dark";
    document.querySelectorAll("[data-theme-toggle]").forEach(function (btn) {
      btn.type = "button";
      btn.innerHTML = dark ? SUN : MOON;
      var label = "Switch to " + (dark ? "light" : "dark") + " theme";
      btn.setAttribute("aria-label", label);
      btn.title = label;
    });
  }

  var choice = saved();
  if (choice === "light" || choice === "dark") root.setAttribute("data-theme", choice);

  document.addEventListener("click", function (e) {
    if (!e.target.closest("[data-theme-toggle]")) return;
    var next = current() === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem(KEY, next); } catch (err) {}
    render();
  });

  // Keep the icon right if the system theme changes and the user has not chosen.
  media.addEventListener("change", render);

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", render);
  else render();
})();

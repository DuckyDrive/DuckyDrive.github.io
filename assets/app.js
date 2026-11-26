// DuckyDrive specification site — small progressive enhancements.
(function () {
  var sidebar = document.getElementById("sidebar");
  var toggle = document.getElementById("menu-toggle");
  var scrim = document.getElementById("scrim");

  function setMenu(open) {
    if (!sidebar || !toggle) return;
    sidebar.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    if (scrim) scrim.hidden = !open;
  }

  if (toggle) toggle.addEventListener("click", function () {
    setMenu(!sidebar.classList.contains("is-open"));
  });
  if (scrim) scrim.addEventListener("click", function () { setMenu(false); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") setMenu(false); });

  var links = [].slice.call(document.querySelectorAll(".nav-link"));
  links.forEach(function (link) {
    link.addEventListener("click", function () { setMenu(false); });
  });

  var sections = [].slice.call(document.querySelectorAll("main section[id]"));
  if (!("IntersectionObserver" in window) || sections.length === 0) return;

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      links.forEach(function (link) {
        var active = link.getAttribute("href") === "#" + entry.target.id;
        link.classList.toggle("is-active", active);
        if (active) link.setAttribute("aria-current", "true");
        else link.removeAttribute("aria-current");
      });
    });
  }, { rootMargin: "-15% 0px -70% 0px", threshold: 0 });

  sections.forEach(function (section) { observer.observe(section); });
})();

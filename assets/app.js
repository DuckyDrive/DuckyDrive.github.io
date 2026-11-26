// DuckyDrive spec site — small progressive enhancements.
(function () {
  var sidebar = document.getElementById("sidebar");
  var toggle = document.getElementById("menu-toggle");
  var scrim = document.getElementById("scrim");
  var navFilter = document.getElementById("nav-filter");

  function setMenu(open) {
    if (!sidebar || !toggle) return;
    sidebar.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    if (scrim) scrim.hidden = !open;
  }

  if (toggle) {
    toggle.addEventListener("click", function () {
      setMenu(!sidebar.classList.contains("is-open"));
    });
  }
  if (scrim) scrim.addEventListener("click", function () { setMenu(false); });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") setMenu(false);
  });

  if (navFilter) {
    navFilter.addEventListener("input", function () {
      var q = navFilter.value.trim().toLowerCase();
      var links = document.querySelectorAll(".nav .nav-link");
      for (var i = 0; i < links.length; i++) {
        var text = links[i].textContent.toLowerCase();
        links[i].hidden = q.length > 0 && text.indexOf(q) === -1;
      }
    });
  }

  var cardFilter = document.getElementById("card-filter");
  var grid = document.getElementById("chapter-grid");
  var empty = document.getElementById("card-empty");
  if (cardFilter && grid) {
    cardFilter.addEventListener("input", function () {
      var q = cardFilter.value.trim().toLowerCase();
      var cards = grid.querySelectorAll(".chapter-card");
      var shown = 0;
      for (var i = 0; i < cards.length; i++) {
        var haystack = (cards[i].getAttribute("data-title") || "") + " " + cards[i].textContent.toLowerCase();
        var match = q.length === 0 || haystack.indexOf(q) !== -1;
        cards[i].hidden = !match;
        if (match) shown++;
      }
      if (empty) empty.hidden = shown !== 0;
    });
  }
})();


setActiveLinks = _.debounce(function() {
    $("ul.nav.navbar-nav li.active").removeClass('active');
    $("ul.nav.navbar-nav li a[href='" + location.pathname + "']").parent().addClass('active');
});

var winData = new ReactiveDict();

var updateWindowSize = function () {
  winData.set("width", window.innerWidth);
  winData.set("height", window.innerHeight);
};
updateWindowSize();
window.addEventListener("resize", updateWindowSize);

windowSize = function () {
  return {
    width: winData.get("width"),
    height: winData.get("height")
  };
};

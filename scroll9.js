function scroll9() {
  document.getElementById("myNav").style.width = "0%";

  var screenSize = [
    { width: 280, height: 653, scrollPosition: 3565 },
    { width: 360, height: 740, scrollPosition: 3699 },
    { width: 375, height: 667, scrollPosition: 3577 },
    { width: 390, height: 844, scrollPosition: 3906 },
    { width: 412, height: 914, scrollPosition: 4050 },
    { width: 412, height: 915, scrollPosition: 4048 },
    { width: 414, height: 896, scrollPosition: 4015 },
    { width: 430, height: 932, scrollPosition: 4091 },
    { width: 540, height: 720, scrollPosition: 3755 },
    { width: 768, height: 1024, scrollPosition: 4450 },
    { width: 820, height: 1180, scrollPosition: 4301 },
    { width: 912, height: 1368, scrollPosition: 3278 },
    { width: 1024, height: 600, scrollPosition: 1940},
    { width: 1024, height: 1366, scrollPosition: 3306 },
    { width: 1080, height: 800, scrollPosition: 2407 }
  ];

  var currentScreen = screenSize.find(function(screen) {
    return window.matchMedia("(max-width: " + screen.width + "px) and (max-height: " + screen.height + "px)").matches;
  });

  if (currentScreen) {
    window.scrollTo(0, currentScreen.scrollPosition);
  }
}
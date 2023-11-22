function scroll7() {
  document.getElementById("myNav").style.width = "0%";

  var screenSize = [
    { width: 280, height: 653, scrollPosition: 1262 },
    { width: 360, height: 740, scrollPosition: 1326 },
    { width: 375, height: 667, scrollPosition: 1265 },
    { width: 390, height: 844, scrollPosition: 1444 },
    { width: 412, height: 914, scrollPosition: 1510 },
    { width: 412, height: 915, scrollPosition: 1526 },
    { width: 414, height: 896, scrollPosition: 1510 },
    { width: 430, height: 932, scrollPosition: 1555 },
    { width: 540, height: 720, scrollPosition: 1387 },
    { width: 768, height: 1024, scrollPosition: 1806 },
    { width: 820, height: 1180, scrollPosition: 1521 },
    { width: 912, height: 1368, scrollPosition: 1748 },
    { width: 1024, height: 600, scrollPosition: 1078 },
    { width: 1024, height: 1366, scrollPosition: 1746 },
    { width: 1080, height: 800, scrollPosition: 1338 }
  ];

  var currentScreen = screenSize.find(function(screen) {
    return window.matchMedia("(max-width: " + screen.width + "px) and (max-height: " + screen.height + "px)").matches;
  });

  if (currentScreen) {
    window.scrollTo(0, currentScreen.scrollPosition);
  }
}
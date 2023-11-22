function scroll8() {
  document.getElementById("myNav").style.width = "0%";

  var screenSize = [
    { width: 280, height: 653, scrollPosition: 1817 },
    { width: 360, height: 740, scrollPosition: 1598 },
    { width: 375, height: 667, scrollPosition: 1834 },
    { width: 390, height: 844, scrollPosition: 2160 },
    { width: 412, height: 914, scrollPosition: 2307 },
    { width: 412, height: 915, scrollPosition: 2307 },
    { width: 414, height: 896, scrollPosition: 2273 },
    { width: 430, height: 932, scrollPosition: 2343 },
    { width: 540, height: 720, scrollPosition: 2006 },
    { width: 768, height: 1024, scrollPosition: 2707 },
    { width: 820, height: 1180, scrollPosition: 2557 },
    { width: 912, height: 1368, scrollPosition: 2519 },
    { width: 1024, height: 600, scrollPosition: 1515 },
    { width: 1024, height: 1366, scrollPosition: 2513 },
    { width: 1080, height: 800, scrollPosition: 1910 }
  ];

  var currentScreen = screenSize.find(function(screen) {
    return window.matchMedia("(max-width: " + screen.width + "px) and (max-height: " + screen.height + "px)").matches;
  });

  if (currentScreen) {
    window.scrollTo(0, currentScreen.scrollPosition);
  }
}
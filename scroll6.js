function scroll6() {
  document.getElementById("myNav").style.width = "0%";

  var screenSize = [
    { width: 280, height: 653, scrollPosition: 736 },
    { width: 360, height: 740, scrollPosition: 776 },
    { width: 375, height: 667, scrollPosition: 756 },
    { width: 390, height: 844, scrollPosition: 875 },
    { width: 412, height: 914, scrollPosition: 857 },
    { width: 412, height: 915, scrollPosition: 942 },
    { width: 414, height: 896, scrollPosition: 917 },
    { width: 430, height: 932, scrollPosition: 958 },
    { width: 540, height: 720, scrollPosition: 807 },
    { width: 768, height: 1024, scrollPosition: 1050 },
    { width: 820, height: 1180, scrollPosition: 1198 },
    { width: 912, height: 1368, scrollPosition: 1024 },
    { width: 1024, height: 600, scrollPosition: 665 },
    { width: 1024, height: 1366, scrollPosition: 1024 },
    { width: 1080, height: 800, scrollPosition: 840 }
  ];

  var currentScreen = screenSize.find(function(screen) {
    return window.matchMedia("(max-width: " + screen.width + "px) and (max-height: " + screen.height + "px)").matches;
  });

  if (currentScreen) {
    window.scrollTo(0, currentScreen.scrollPosition);
  }
}
  
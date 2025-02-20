function loadScript(src) {
  const script = document.createElement("script");
  script.src = src;
  script.type = "text/javascript";
  script.async = false;
  document.body.appendChild(script);
}

loadScript("scripts/timerOverlay.js");
loadScript("scripts/mapdata0.js");
loadScript("scripts/draw.js");
loadScript("scripts/collide.js");
loadScript("scripts/main.js");

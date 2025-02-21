function loadScript(src) {
  const script = document.createElement("script");
  script.src = src;
  script.type = "text/javascript";
  script.async = false;
  document.body.appendChild(script);
}

function loadWithMap(mapNum) {
  loadScript("scripts/timerOverlay.js");
  loadScript(`scripts/mapdata${mapNum}.js`);
  loadScript("scripts/draw.js");
  loadScript("scripts/collide.js");
  loadScript("scripts/main.js");
}

loadWithMap(0);

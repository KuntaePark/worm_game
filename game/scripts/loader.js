function loadScript(src) {
  const script = document.createElement("script");
  script.src = src;
  script.type = "text/javascript";
  script.async = false;
  document.body.appendChild(script);
}

function loadWithMap(mapNum) {
  loadScript(`scripts/stages/mapdata${mapNum}.js`);
  loadScript("scripts/timerOverlay.js");
  loadScript("scripts/draw.js");
  loadScript("scripts/collide.js");
  loadScript("scripts/main.js");
}

let stageNum = parseInt(window.location.href.split("?")[1]);
console.log(stageNum)

loadWithMap(stageNum);

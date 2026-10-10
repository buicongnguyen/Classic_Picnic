import { installMobileGameSupport } from './mobile-game-support.mjs';
installMobileGameSupport({
  "menus": [
    "#help-dialog"
  ],
  "controls": [
    ".picnic-bottom",
    ".hud-bottom"
  ],
  "classifyCanvasTaps": false
});

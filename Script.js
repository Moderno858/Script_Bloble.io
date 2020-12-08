// ==UserScript==
// @name          Moderno.Script
// @namespace    Moderno.Script
// @version      0.2
// @description  try to take over the world!
// @author       Wilker
// @match        http://bloble.io/*
// @grant        none

(function() {
    'use strict';

    // Your code here...
})();window.renderPlayer = function(a, d, c, b, g) {
    b.save();
    if (a.skin && 0 < a.skin && a.skin <= playerSkins && !skinSprites[a.skin]) {
        var e = new Image;
        e.onload = function() {
            this.readyToDraw = !0;
            this.onload = null;
            g == currentSkin && changeSkin(0);
        };
        e.src = ".././img/skins/skin_" + (a.skin - 1) + ".png";
        skinSprites[a.skin] = e;
    }
    a.skin && skinSprites[a.skin] && skinSprites[a.skin].readyToDraw ? (e = a.size - b.lineWidth / 4, b.lineWidth /= 2, renderCircle(d, c, a.size, b, !1, !0)) : g || (b.fillStyle = "rgba(255, 255, 255, 0)", renderCircle(d, c, a.size, b));
    b.restore();
};

window.UIList = window.UIList || [];
window.initFuncs = window.initFuncs || [];
window.statusItems = window.statusItems || [];


window.UIList.push({
    level: 0,
    x: 2,
    html: '<div onclick=sell1()>Sell Wall</div>'
}, {
 level: 0,
    x: 2,
    html: '<div onclick=sell2()>Sell Bould</div>'
}, {
 level: 0,
    x: 2,
    html: '<div onclick=sell3()>Sell spike</div>'
}, {

}

);
window.sell1 = function () {
for (var a = [], d = 0; d < units.length; ++d) units[d].type === 3 && units[d].owner == player.sid && getUnitFromPath(units[d].uPath).name === 'Wall' && a.push(units[d].id);
    socket.emit("3", a)
}
window.sell2 = function () {   for (var a = [], d = 0; d < units.length; ++d) units[d].type === 3 && units[d].owner == player.sid && getUnitFromPath(units[d].uPath).name === 'Boulder' && a.push(units[d].id);socket.emit("3", a)}

window.sell3 = function  (){    for (var a = [], d = 0; d < units.length; ++d) units[d].type === 3 && units[d].owner == player.sid && getUnitFromPath(units[d].uPath).name === 'Spikes' && a.push(units[d].id);socket.emit("3", a)}


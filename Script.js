// ==UserScript==
// @name         Script
// @namespace   Script
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
    x: 1,
    html: '<div onclick=sell1()>Sell Wall</div>'
}, {
 level: 0,
    x: 0,
    html: '<div onclick=sell2()>Sell Bould</div>'
}, {
 level: 0,
    x: 1,
    html: '<div onclick=sell3()>Sell spike</div>'
}, {
 level: 0,
    x: 2,
    html: '<div onclick=sell4()>Sell Gerador</div>'
}, {
level: 0,
    x: 3,
    html: '<div onclick=sell5()>Sell  houses</div>'
}, {
level: 0,
    x: 4,
    html: '<div onclick=sell6()>Sell  micro</div>'
}, {
level: 0,
    x: 5,
    html: '<div onclick=sell7()>Sell  simple turrets</div>'
}, {
level: 0,
    x: 5,
    html: '<div onclick=sell8()>Sell   barracks</div>'
}, {
level: 0,
    x: 5,
    html: '<div onclick=sell9()>Sell all</div>'
}, {
level: 1,
    x: 5,
    html: '<div onclick=upar()> power plants</div>'
}, {
    level: 1,
    x: 5,
    html: '<div onclick=upar1()>micro generators</div>'
}, {
       level: 1,
    x: 5,
    html: '<div onclick=upar2()>boulderss</div>'
}, {
}

);
window.sell1 = function () {
for (var a = [], d = 0; d < units.length; ++d) units[d].type === 3 && units[d].owner == player.sid && getUnitFromPath(units[d].uPath).name === 'Wall' && a.push(units[d].id);
    socket.emit("3", a)
}
window.sell2 = function () {   for (var a = [], d = 0; d < units.length; ++d) units[d].type === 3 && units[d].owner == player.sid && getUnitFromPath(units[d].uPath).name === 'Boulder' && a.push(units[d].id);socket.emit("3", a)}
window.sell3 = function  (){    for (var a = [], d = 0; d < units.length; ++d) units[d].type === 3 && units[d].owner == player.sid && getUnitFromPath(units[d].uPath).name === 'Spikes' && a.push(units[d].id);socket.emit("3", a)}
window.sell4 = function (){  for (var a = [], d = 0; d < units.length; ++d) units[d].type === 0 && units[d].owner == player.sid && getUnitFromPath(units[d].uPath).name === 'Generator' && a.push(units[d].id);socket.emit("3", a)
                           for (var a = [], d = 0; d < units.length; ++d) units[d].type === 0 && units[d].owner == player.sid && getUnitFromPath(units[d].uPath).name === 'Power Plant' && a.push(units[d].id);socket.emit("3", a)}
window.sell5 = function () { for (var a = [], d = 0; d < units.length; ++d) units[d].type === 0 && units[d].owner == player.sid && getUnitFromPath(units[d].uPath).name === 'House' && a.push(units[d].id);socket.emit("3", a)}
window.sell6 = function (){ for (var a = [], d = 0; d < units.length; ++d) units[d].type === 3 && units[d].owner == player.sid && getUnitFromPath(units[d].uPath).name === 'Micro Generator' && a.push(units[d].id);socket.emit("3", a)}
window.sell7 = function (){   for (var a = [], d = 0; d < units.length; ++d) units[d].type === 0 && units[d].owner == player.sid && getUnitFromPath(units[d].uPath).name === 'Rapid Turret' && a.push(units[d].id);socket.emit("3", a)
    for (var a = [], d = 0; d < units.length; ++d) units[d].type === 0 && units[d].owner == player.sid && getUnitFromPath(units[d].uPath).name === 'Gatlin Turret' && a.push(units[d].id);socket.emit("3", a)
    for (var a = [], d = 0; d < units.length; ++d) units[d].type === 0 && units[d].owner == player.sid && getUnitFromPath(units[d].uPath).name === 'Ranged Turret' && a.push(units[d].id);socket.emit("3", a)
    for (var a = [], d = 0; d < units.length; ++d) units[d].type === 0 && units[d].owner == player.sid && getUnitFromPath(units[d].uPath).name === 'Spotter Turret' && a.push(units[d].id);socket.emit("3", a)
    for (var a = [], d = 0; d < units.length; ++d) units[d].type === 0 && units[d].owner == player.sid && getUnitFromPath(units[d].uPath).name === 'Simple Turret' && a.push(units[d].id);socket.emit("3", a)}
window.sell8 = function (){   for (var a = [], d = 0; d < units.length; ++d) units[d].type === 2 && units[d].owner == player.sid && getUnitFromPath(units[d].uPath).name === 'Barracks' && a.push(units[d].id);socket.emit("3", a)
    for (var a = [], d = 0; d < units.length; ++d) units[d].type === 2 && units[d].owner == player.sid && getUnitFromPath(units[d].uPath).name === 'Greater Barracks' && a.push(units[d].id);socket.emit("3", a)
    for (var a = [], d = 0; d < units.length; ++d) units[d].type === 2 && units[d].owner == player.sid && getUnitFromPath(units[d].uPath).name === 'Tank Factory' && a.push(units[d].id);socket.emit("3", a)
    for (var a = [], d = 0; d < units.length; ++d) units[d].type === 2 && units[d].owner == player.sid && getUnitFromPath(units[d].uPath).name === 'Siege Factory' && a.push(units[d].id);socket.emit("3", a)
    for (var a = [], d = 0; d < units.length; ++d) units[d].type === 2 && units[d].owner == player.sid && getUnitFromPath(units[d].uPath).name === 'Blitz Factory' && a.push(units[d].id);socket.emit("3", a)}
window.sell9 = function (){  for (var a = [], d = 0; d < units.length; ++d)(units[d].type === 3 || units[d].type === 2 || units[d].type === 0) && units[d].owner == player.sid && a.push(units[d].id);socket.emit("3", a)
    }
window.upar = function (){
 for (var i = 0; i < units.length; ++i) 0 == units[i].type && "hexagon" == units[i].shape && units[i].owner == player.sid && socket.emit("4", units[i].id, 0)}
window.upar1 = function (){    for (var i = 0; i < units.length; ++i) 3 == units[i].type && "circle" == units[i].shape && units[i].owner == player.sid && socket.emit("4", units[i].id, 1)}
window.upar1 = function (){    for (var i = 0; i < units.length; ++i) 3 == units[i].type && "circle" == units[i].shape && units[i].owner == player.sid && socket.emit("4", units[i].id, 0)}

    var contAppend = document.getElementById("gameUiContainer"),
        menuA = document.createElement("div");

    var code = ['<div id="noobscriptUI">\n'];

    levels.forEach((items, i) => {
        code.push(i === 0 ? '    <div>\n' : '    <div style="margin-top:7px;">\n');
        items.forEach((el) => {
            code.push('        ' + el.html + '\n');
        })
        code.push('    </div>\n');
    })
    code.push('    <div id="confinfo" style="margin-top:4px; color: white; text-align: center; font-size: 10px; white-space:pre"></div>')
    code.push('</div>');

    menuA.innerHTML = code.join("");
    contAppend.insertBefore(menuA, contAppend.firstChild)
    contAppend.appendChild(toast)
    var toastTimeout = false;
    window.showToast = function (msg) {
        toast.textContent = msg;

        if (toastTimeout) clearTimeout(toastTimeout);
        else toast.className = "show";
        toastTimeout = setTimeout(function () {
            toast.className = 'hide'
            setTimeout(function () {
                toast.className = '';
            }, 400);
            toastTimeout = false;
        }, 3000);
    }
    window.statusBar = function () {
        var el = document.getElementById('confinfo');
        var text = [];

        window.statusItems.forEach((item, i) => {
            if (i !== 0) text.push('     ');
            if (item.name) text.push(item.name + ': ');
            text.push(item.value());
        })

        el.textContent = text.join('');
    }
    window.statusBar();

    window.initFuncs.forEach((func) => {
        func();
    })
}
setTimeout(() => {
    window.makeUI();
}, 1000)


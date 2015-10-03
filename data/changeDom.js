/*
var nav = window.locationbar;
nav.collapsed = true;
//nav.style.display = 'none!important';
*/


/*


console.log(window.locationbar);
console.log(window.locationbar.visible);

window.locationbar.visible = false;
*/




var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    x = w.innerWidth || e.clientWidth || g.clientWidth,
    y = w.innerHeight|| e.clientHeight|| g.clientHeight;
    
    

var wrap = document.getElementById('playerContainerId_inner');
if (wrap) {

	wrap.style.position = 'fixed';
	wrap.style.top = '0px';
	wrap.style.left = '0px';
	wrap.style.zIndex = 99999999;
	wrap.style.backgroundColor = '#000';
	wrap.style.width = '100vw';
	wrap.style.height = '100vh';
}



var player = document.getElementById('PolymediaShowPlayer');
if (player) {
	player.width = x;
	player.height = y;
}




//nav.style.display = 'none !important';
/*

var nav = document.getElementById('urlbar-container').style.display = 'none !important';
var nav = document.getElementById('search-container').style.display = 'none !important';
var nav = document.getElementById('openLocation').style.display = 'none !important';
*/
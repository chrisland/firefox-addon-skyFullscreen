var buttons = require('sdk/ui/button/action');
var tabs = require("sdk/tabs");
var self = require("sdk/self");

var button = buttons.ActionButton({
  id: "firefox-addon-skyfullscreen",
  label: "Open SkyGo-Player in Fullscreen",
  icon: {
    "16": "./icon-16.png",
    "32": "./icon-32.png",
    "64": "./icon-64.png"
  },
  onClick: handleClick
});

function handleClick(state) {
	tabs.activeTab.attach({
		contentScriptFile: self.data.url("changeDom.js")
	});
}
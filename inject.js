if (window.top === window) {

	document.addEventListener('contextmenu', function(event) {
		safari.self.tab.setContextMenuEventUserInfo(event, location.href)
	}, false); 

}
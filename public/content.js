function highlightTexts(data) {
	var instance = new Mark(document.body);

	instance.mark(data);
};

chrome.runtime.onMessage.addListener (function (msg, sender, sendResponse) {
	if (msg.action === 'highlightTexts') {
		highlightTexts(msg.data);
	}
});

window.addEventListener("hashchange", function () {
	console.log('Initialized content');
}, false);

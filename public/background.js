chrome.contextMenus.create({
	id: "get-insight",
	title: "Get insight to '%s'",
	contexts: ["selection"]
});

chrome.contextMenus.onClicked.addListener(function (info, tab) {
	if(info.menuItemId === "get-insight") {
		var articleContent = {
			"documents": [{
				"language": "en",
				"id": "1",
				"text": info.selectionText
		}]
		}
		var url = "https://westus.api.cognitive.microsoft.com/text/analytics/v2.0/keyPhrases";
		var body = JSON.stringify(articleContent);
		fetch(url, {
				method: 'POST',
				body: body,
				headers: {
					"Content-Type": "application/json",
					"Ocp-Apim-Subscription-Key": "50b1ba0dbfb54f33a45ba2440fc0b22c"
				}
			})
			.then(function (res) {
				return res.json();
			})
			.then(function (json) {
				keywords = json.documents[0].keyPhrases;
				chrome.tabs.query({
					active: true,
					currentWindow: true
				}, function (tabs) {
					chrome.tabs.sendMessage(tabs[0].id, {
						action: "highlightTexts",
						data: keywords
					}, function (response) {});
				});
			});
	}
});

export function highlightText() {
	const elements = document.getElementsByTagName('*');

	elements
		.map(el => {
			el.childNodes.map((node) => {
				if(node.nodeType === 3) {
					const text = node.nodeValue;

					const replacedText =
					text.replace(
						/[word or phrase to replace here]/gi,
						'[new word or phrase]'
					);

					if(replacedText !== text) {
						el.replaceChild(document.createTextNode(replacedText), node);
					}
				}
			})
		})
};

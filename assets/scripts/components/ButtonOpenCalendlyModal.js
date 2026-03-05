import getNameAttrBySelector from './../utils/get-name-attr-by-selector.util.js';

const rootSelector = '[data-js-button-open-calendly-modal]';

class ButtonOpenCalendlyModal {
	selectors = {
		root: rootSelector,
	};

	constructor(rootElement) {
		this.rootElement = rootElement;

		this.urlAttr = this.rootElement.getAttribute(
			getNameAttrBySelector(this.selectors.root),
		);

		this.bindEvents();
	}

	onRootElementClick = event => {
		event.preventDefault();

		Calendly.initPopupWidget({ url: this.urlAttr });
	};

	bindEvents() {
		this.rootElement.addEventListener('click', this.onRootElementClick);
	}
}

class ButtonOpenCalendlyModalCollection {
	constructor() {
		const rootElements = document.querySelectorAll(rootSelector);

		rootElements.forEach(
			rootElement => new ButtonOpenCalendlyModal(rootElement),
		);
	}
}

export default ButtonOpenCalendlyModalCollection;

class MobileMenu {
	selectors = {
		root: '[data-js-mobile-menu]',
		overlay: '[data-js-mobile-menu-overlay]',
		link: '[data-js-mobile-menu-link]',
		burgerButton: '[data-js-mobile-menu-burger-button]',
	};

	stateClasses = {
		isVisibled: 'is-visibled',
		isActive: 'is-active',
		isLock: 'is-lock',
	};

	constructor() {
		this.rootElement = document.querySelector(this.selectors.root);
		this.overlayElement = this.rootElement.querySelector(
			this.selectors.overlay,
		);
		this.linkElements = this.rootElement.querySelectorAll(this.selectors.link);
		this.burgerButtonElement = this.rootElement.querySelector(
			this.selectors.burgerButton,
		);

		this.bindEvents();
	}

	onBurgerButtonClick = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});

		this.toggleVisibleMenu();
	};

	onMenuLinkClick = () => {
		if (window.innerWidth > 1024) return;

		this.toggleVisibleMenu();
	};

	toggleVisibleMenu() {
		this.burgerButtonElement.classList.toggle(this.stateClasses.isActive);
		this.overlayElement.classList.toggle(this.stateClasses.isVisibled);
		document.documentElement.classList.toggle(this.stateClasses.isLock);
	}

	bindEvents() {
		this.burgerButtonElement.addEventListener(
			'click',
			this.onBurgerButtonClick,
		);
		this.linkElements.forEach(linkElement =>
			linkElement.addEventListener('click', this.onMenuLinkClick),
		);
	}
}

export default MobileMenu;

export function modalOpen() {
	const modalBtn = document.querySelector('.modal-btn');
	const modal = document.querySelector('.mobile-nav');

	modalBtn.onclick = () => {
		console.log("CLICk")
		modal.classList.toggle('mobile-nav--open');
		document.body.classList.toggle('no-scroll');
	};
}

export function modalClose() {
	const closeBtn = document.querySelector('.cross-close');
	const modal = document.querySelector('.mobile-nav');

	closeBtn.onclick = () => {
		modal.classList.toggle('mobile-nav--open');
		document.body.classList.toggle('no-scroll');
	}

	modal.onclick = (e) => {
		if(e.target.className.includes('mobile-nav ')) {
			modal.classList.toggle('mobile-nav--open');
			document.body.classList.toggle('no-scroll');
		}
	}
}


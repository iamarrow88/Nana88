const plantsBlock = document.querySelector('.plants');
const article = document.querySelector('.plants');
console.log("🚀 ~ file: index.js ~ line 3 ~ article", article)

plantsBlock.addEventListener('click', function openArticle(e){
	if(e.target.matches('.text__btn')) {
		let id = e.target.dataset.id;
		let article = document.querySelector(`[data-article = "${id}"]`);
		article.classList.toggle('show');

    console.log("🚀 ~ file: index.js ~ line 12 ~ openArticle ~ article", article)
	}
})


/* ---------------------------- BURGER MENU ---------------- */

const closeBtn = document.querySelector('.close-lines');
const line1 = document.querySelector('.close-lines__line1');
const line2 = document.querySelector('.close-lines__line2');
const line3 = document.querySelector('.close-lines__line3');

closeBtn.addEventListener('click', () => {
	console.log('click close!');
	document.querySelector('.nav').classList.toggle('show-menu');
	line1.classList.toggle('close-lines__line1-opened');
	line2.classList.toggle('close-lines__line2-opened');
	line3.classList.toggle('close-lines__line3-opened');
});





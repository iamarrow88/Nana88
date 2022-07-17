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

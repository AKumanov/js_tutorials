function getArticleGenerator(articles) {
    let index = 0;
    const divElement = document.getElementById('content');

    function showNext() {
        if (index < articles.length) {
            let article = document.createElement('article');
            article.textContent = articles[index];
            divElement.appendChild(article);
            index ++;
        }
        
    }

    return showNext;
}

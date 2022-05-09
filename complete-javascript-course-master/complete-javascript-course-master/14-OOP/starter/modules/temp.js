class ArtGallery {
    constructor(creator) {
        this.creator = creator;
        this.possibleArticles = {
            picture: 200,
            photo: 50,
            item: 250,
        };
        this.listOfArticles = [];
        this.guests = [];
    }

    _getGuestByName(name) {
        let foundguest;
        this.guests.forEach(guest => {
            if (guest.guestName === name) {
                foundguest = guest;
            }
        })
        return foundguest;
    }

    __getArticleByName(name, model) {
        let foundArticle;
        this.listOfArticles.forEach(article => {
            if (article.articleName === name && article.articleModel === model) {
                foundArticle = article;
            }
        })
        return foundArticle;
    }


    __checkArticleModel(model) {
        if (this.possibleArticles.hasOwnProperty(model)) {
            return true;
        } else {
            return false;
        }
    }

    __checkArticleName(name) {
        const names = [];
        this.listOfArticles.forEach(article => {
            names.push(article.articleName);
        })
        return names.includes(name);
    }

    __checkArticleQuantity(name) {
        let result = true;
        this.listOfArticles.forEach(article => {
            if (article.articleName === name) {
                if (article.quantity === 0) {
                    result = false;
                }
            }
        })
        return result;
    }


    __articleInformation() {
        let message = `Articles information:\n`;
        const messageArr = []
        this.listOfArticles.forEach(article => {
            messageArr.push(`${article.articleModel} - ${article.articleName} - ${article.quantity}`);
        })
        message += messageArr.join('\n');
        return message;
    }


    __guestsInformation() {
        const messageArr = [];
        let message = `Guests information:\n`
        this.guests.forEach(guest => {
            messageArr.push(`${guest.guestName} - ${guest.purchaseArticle}`);
        })
        message += messageArr.join('\n');
        return message;
    }



    addArticle(articleModel, articleName, quantity) {
        const names = [];
        if (!this.possibleArticles.hasOwnProperty(articleModel.toLowerCase())) {
            throw Error('This article model is not included in this gallery!');

        } else {
            this.listOfArticles.forEach(article => {
                if (article.articleName === articleName && article.articleModel === articleModel) {
                    article.quantity += quantity;
                    return;
                }
            })

            this.listOfArticles.forEach(article => {
                names.push(article.articleName);
            })

            if (!names.includes(articleName)) {
                this.listOfArticles.push({
                    articleModel: articleModel.toLowerCase(),
                    articleName: articleName,
                    quantity: Number(quantity)
                });
            }

        }
        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`;
    };

    inviteGuest(guestName, personality) {
        let guest = this._getGuestByName(guestName);
        let points = 0;
        if (guest !== undefined) {
            throw Error(`${guestName} has already been invited.`);
        }

        if (personality === 'Vip') {
            points = 500;
        } else if (personality === 'Middle') {
            points = 250;
        } else {
            points = 50;
        }
        this.guests.push({
            guestName: guestName,
            points: points,
            purchaseArticle: 0,
        });

        return `You have successfully invited ${guestName}!`;
    };

    buyArticle(articleModel, articleName, guestName) {
        if (!this.__checkArticleModel(articleModel)) {
            throw Error("This article is not found.");
        }

        if (!this.__checkArticleName(articleName)) {
            throw Error("This article is not found.");
        }

        if (!this.__checkArticleQuantity(articleName)) {
            throw Error(`The ${articleName} is not available.`);
        }

        if (this._getGuestByName(guestName) === 'undefined') {
            throw Error("This guest is not invited.");
        }

        let guest = this._getGuestByName(guestName);
        const pointsNeeded = this.possibleArticles[articleModel];
        let article = this.__getArticleByName(articleName, articleModel);
        if (!article) {
            throw Error('This article is not found.');
        } else {
            if (guest.points < pointsNeeded) {
                return "You need more points to purchase the article.";
            }
            guest.points -= pointsNeeded;
            article.quantity--;
            guest.purchaseArticle++;
    
            return `${guestName} successfully purchased the article worth ${pointsNeeded} points.`;
        }
        
    }

    showGalleryInfo(criteria) {
        if (criteria === 'article') {
            const message = this.__articleInformation();
            return message
        } else {
            const message = this.__guestsInformation();
            return message;
        }

    }

}


// const artGallery = new ArtGallery('Curtis Mayfield');

// artGallery.addArticle('picture', 'Mona Liza', 3);
// artGallery.addArticle('Item', 'Ancient vase', 2);
// artGallery.addArticle('picture', 'Mona Liza', 1);


// artGallery.inviteGuest('John', 'Vip');
// artGallery.inviteGuest('Peter', 'Middle');
// console.log('----------BEFORE PURCHASES--------');
// console.log(artGallery.listOfArticles[0]);

// artGallery.buyArticle('picture', 'Mona Liza', 'John');
// artGallery.buyArticle('item', 'Ancient vase', 'Peter');
// console.log('----------AFTER PURCHASES--------');
// console.log(artGallery.listOfArticles[0]);

// console.log(artGallery.showGalleryInfo('article'));
// console.log(artGallery.showGalleryInfo('guest'));

// const ArtGallery = result;
// let art = new ArtGallery("Curtis Mayfield");

// art.addArticle('picture', 'Mona Liza', 3);
// art.addArticle('Item', 'Ancient vase', 2);
// art.addArticle('picture', 'Mona Liza', 1);

// art.inviteGuest('John', 'Vip');
// art.inviteGuest('Peter', 'Middle');

// // assert.equal(art.buyArticle('picture', 'Mona Liza', 'John'), "John successfully purchased the article worth 200 points.");
// // assert.equal(art.buyArticle('item', 'Ancient vase', 'Peter'), "Peter successfully purchased the article worth 250 points.");
// // expect(()=>art.buyArticle('item', 'Mona Liza', 'John')).to.throw(Error,"This article is not found.");
// console.log(art.buyArticle('picture', 'Mona Liza', 'John'));
// console.log(art.buyArticle('item', 'Ancient vase', 'Peter'));

// console.log(art.buyArticle('item', 'Mona Liza', 'John'));

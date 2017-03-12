const screen = require('../../screen');
const articleService = require('../../service/article');
module.exports = {
    login: async (e, user) => {
        //todo sth
        screen.setSize(1000, 720);
        // e.reply({msg: 'ok'});
        return {msg: 'ok'};
    },
    list: async (e, page) => {
        try {
            const articles = await articleService.findArticlesForPage(page);
            return articles;
        } catch (err) {
            return Promise.reject(err);
        }
    },
    async detail (e, id) {
        try{
            article = await articleService.findArticleForID(id);
        } catch (err) {
            return Promise.reject(err);
        }

    }
}
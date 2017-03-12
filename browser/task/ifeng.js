const cheerio = require('cheerio');
const Base = require('./base');

moudule.exports = new class Self extends Base {
    constructor () {
        super();
        this.url = 'http://news.ifeng.com/xijinping/';
    }
    start () {
        global.Storage.count({}, (err, c) => {
            if (c || c > 0) {
                return;
            }
            this.request()
                .then(res => {
                    console.log('全部存储完毕!');
                    global.Storage.loadDatebase();
                })
                .catch (err => console.log(err));
        });
    }
    async request () {
        try {
            const body = await Self.request(this.url);
            let links = await this.parseLink(body);
            for (let index = 1; index < links.length; index++) {
                const content = await Self.request(links[index]);
                const article = await this.parseContent(content);
                await this.saveContent(article);
                console.log(`第${index}篇文章:${article&&article.title}储存完毕`);
            }
        } catch (err) {
            return Promise.reject(err);
        }
    }
    async parseLink (html) {
        const $ = cheerio.load(html);
        return $('.con_lis > a').map((i, el) => $(el).attr('href'));
    }
    parseContent (html) {
        if (!html) {
            return;
        }
        const $ = cheerio.load(html);
        const title = $('title').text();
        const description = $('meta[name="description"]').attr('content');
        const content = $('.yc_con_txt').html();
        const hot = $('span.js_joinNum').text();
        return {title, content, description, hot, createdAt: new Date()};
    }
    async saveContent (article) {
        if (!article || !article.title) {
            return;
        }
        return global.Storage.insert(article);
    }
}
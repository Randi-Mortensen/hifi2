const helpers = require('./../helpers');
const database = require('./../data/database');

module.exports = {
    'DELETE': function (req, res) {
        var cookie = helpers.getCookies(req);
        database.deleteSession(res, cookie, function (data) {
            if (helpers.objEmpty(data)) {
                helpers.respond(res, {
                    besked: "Logout mislykkedes"
                }, 503);
                return;
            }
            res.setHeader('Set-cookie', ['id=0'])
            helpers.redirect(res, '/');
        });
    }
}
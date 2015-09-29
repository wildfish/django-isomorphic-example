var Home = require('./home');
var Data = require('./data');

var router = {
    getComponent: function(pathname) {
        switch (pathname) {
            case '/':
                return Home;
            case '/data/':
                return Data;
            default :
                return Home
        }
    }
};

module.exports = router;

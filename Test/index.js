var server=require('../moduleJs/servermodule');
var router=require('../moduleJs/routemodule');

server.start(router.route);
var botBuilder = require(‘claudia-bot-builder’), excuse = require(‘huh’); 
module.exports = botBuilder(function (request) { 
var v = 10;
return ‘Thanks for sending ‘ + request.text; 

});
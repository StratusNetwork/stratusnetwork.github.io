$.getJSON("https://us.mc-api.net/v3/server/ping/play.stratus.network", function(data) {
console.log(data)
$('#players').append(data.players.online);	
$('#last_updated').livestamp(new Date(data.cache.insertion_time));
}).fail(function() { 
      document.getElementById('bounce').innerText = 'Player Count \n Unavailable'
});
/* gets JSON return from mcapi for players */

new Clipboard('#btn');/* global Clipboard*/
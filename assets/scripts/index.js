$.getJSON("https://us.mc-api.net/v3/server/ping/play.stratus.network", function(data) {
console.log(data)
$('#players').append(data.players.online);	
$('#last_updated').livestamp(new Date(data.cache.insertion_time));
}).fail(function() { 
      document.getElementById('bounce').innerText = 'Player Count \n Unavailable'
}).done(function(){
	 $('#bounce').transition('jiggle'); 
});
;
/* gets JSON return from mcapi for players */

function popup(id, position, title) {
    $(id).popup({
        title   : title,
        position: position,
        hoverable: false
    })
    $(id).popup('show');
    setTimeout(function(){
        $(id).popup('destroy');
    }, 750);
    
}
new Clipboard('#btn');/* global Clipboard*/
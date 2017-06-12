setTimeout(function() {
 	$.getJSON("https://api.github.com/repos/StratusNetwork/ProjectAres/commits?per_page=10000", function(data) {
 			var pa_body = document.getElementById('pa_body');
 			$.each(data, function(i, d) {
 				d = i + 1
 				let message = data[i].commit.message;
 				let n = message.indexOf('\n');
 				message = message.substring(0, n != -1 ? n : message.length);
 				pa_body.innerHTML += '<tr> \n <td>' + d + '</td>\n<td><a target="_blank" href="https://github.com/StratusNetwork/ProjectAres/commit/' + (data[i].sha)
 					.slice(0, 6) + '">' + (data[i].sha)
 					.slice(0, 6) + '</a></td>\n<td>' + data[i].author.login + '</td>\n<td>' + message + '</td>\n<td id="time' + i + '">' + '</td>\n</tr>'
 				let time = '#time' + i
 				$(time)
 					.livestamp(data[i].commit.committer.date);
 			});
 		})
 		.done(function(data) {
 			$('#pa_table')
 				.DataTable({
 					"autoWidth": false
 				})
 				.columns.adjust()

 		})
 	$.getJSON("https://api.github.com/repos/StratusNetwork/web-static/commits?per_page=10000", function(data) {
 			var web_body = document.getElementById('web_body');
 			$.each(data, function(i, d) {
 				d = i + 1
 				let message = data[i].commit.message;
 				let n = message.indexOf('\n');
 				message = message.substring(0, n != -1 ? n : message.length);
 				web_body.innerHTML += '<tr> \n <td>' + d + '</td>\n<td><a target="_blank" href="https://github.com/StratusNetwork/web-static/commit/' + (data[i].sha)
 					.slice(0, 6) + '">' + (data[i].sha)
 					.slice(0, 6) + '</a></td>\n<td>' + data[i].author.login + '</td>\n<td>' + data[i].commit.message + '</td>\n<td id="web_time' + i + '">' + '</td>\n</tr>'
 				let web_time = '#web_time' + i
 				$(web_time)
 					.livestamp(data[i].commit.committer.date);
 			});
 		})
 		.done(function(data) {
 			$('#web_table')
 				.DataTable({
 					"autoWidth": false
 				})
 				.columns.adjust()

 		})
 	$.getJSON("https://api.github.com/repos/StratusNetwork/Map-Rotations/commits?per_page=10000", function(data) {
 			var rot_body = document.getElementById('rot_body');
 			$.each(data, function(i, d) {
 				d = i + 1
 				let message = data[i].commit.message;
 				let n = message.indexOf('\n');
 				message = message.substring(0, n != -1 ? n : message.length);
 				rot_body.innerHTML += '<tr> \n <td>' + d + '</td>\n<td><a target="_blank" href="https://github.com/StratusNetwork/Map-Rotations/commit/' + (data[i].sha)
 					.slice(0, 6) + '">' + (data[i].sha)
 					.slice(0, 6) + '</a></td>\n<td>' + data[i].author.login + '</td>\n<td>' + data[i].commit.message + '</td>\n<td id="rot_time' + i + '">' + '</td>\n</tr>'
 				let rot_time = '#rot_time' + i
 				$(rot_time)
 					.livestamp(data[i].commit.committer.date);
 			});
 		})
 		.done(function(data) {
 			$('#rot_table')
 				.DataTable({
 					"autoWidth": false
 				})
 				.columns.adjust()
 		})
}, 750);
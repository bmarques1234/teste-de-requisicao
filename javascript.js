$(document).ready(function(){
	$('#submit').click(function(){
		$.getJSON('http://192.168.1.109:8080/list', function(data){
			var i = $('#products').val();
			var result='';
			result+='Nome: ' + data[i].nome + '<br />';
			result+='Valor: ' + data[i].valor + '<br />';
			result+='Status: ' + data[i].status + '<br />';
			result+='Estoque: ' + data[i].estoque + '<br />';
			$('#conteud').html(result);
		});
	});
});

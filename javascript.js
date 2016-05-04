$(document).ready(function(){
	
	$.getJSON('http://192.168.1.109:8080/list', function(data){
		var out='';
		for (var c=0;c<data.length;c++){
			out+='<option value='+data[c].chave+'>'+data[c].nome+'</option>';
		}
		$('#selecionar').html(out);
		$('#submit').click(function(){
			var i=$('#selecionar').val();
			var result='';
			result+='Nome: ' + data[i-1].nome + '<br />';
			result+='Valor: ' + data[i-1].valor + '<br />';
			result+='Status: ' + data[i-1].status + '<br />';
			result+='Estoque: ' + data[i-1].estoque + '<br />';
			$('#conteudo').html(result);
		});
	});
	/*
	$('#submit').click(function(){
		$.getJSON('http://192.168.1.109:8080/list', function(data){
			var i = $('#products').val();
			var result='';
			result+='Nome: ' + data[i].nome + '<br />';
			result+='Valor: ' + data[i].valor + '<br />';
			result+='Status: ' + data[i].status + '<br />';
			result+='Estoque: ' + data[i].estoque + '<br />';
			$('#conteudo').html(result);
		});
	});*/
});

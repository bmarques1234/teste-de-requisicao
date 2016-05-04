$(document).ready(function(){
	//código pesquisa por select:
	$.getJSON('http://192.168.1.109:8080/list', function(data){
		var out='';
		for (var c=0;c<data.length;c++){
			out+='<option value='+data[c].chave+'>'+data[c].nome+'</option>';
		}
		$('#selecionar').html(out);
	});
	$('#submit').click(function(){
		var i=$('#selecionar').val();
		var url='http://192.168.1.109:8080/product?chave='+i;
		$.getJSON(url, function(data){
			var result='';
			result+='Nome: ' + data.nome + '<br />';
			result+='Valor: ' + data.valor + '<br />';
			result+='Status: ' + data.status + '<br />';
			result+='Estoque: ' + data.estoque + '<br />';
			$('#conteudo').html(result);
		});
	});
		
	/*
	requisição por javascript:
		var xmlhttp = new XMLHttpRequest();
		xmlhttp.open("GET", url, false);
		xmlhttp.send();
		return xmlhttp.responseText;
		var data = JSON.parse(xmlhttp.responseText);
	requisição por jQuery:
		$.getJSON(url, function(data){});
	código pesquisa por input:
		$('#submit').click(function(){
			var i = $('#products').val();
			$.getJSON('http://192.168.1.109:8080/product?chave='+i, function(data){
				var result='';
				result+='Nome: ' + data.nome + '<br />';
				result+='Valor: ' + data.valor + '<br />';
				result+='Status: ' + data.status + '<br />';
				result+='Estoque: ' + data.estoque + '<br />';
				$('#conteudo').html(result);
			});
		});*/
});

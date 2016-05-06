$(document).ready(function(){
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
			result+='<tr><th>Nome</th>'+'<th>Valor</th>'+'<th>Status</th>'+'<th>Estoque</th></tr>';
			result+='<tr>'+'<td>'+data.nome+'</td>'+'<td>'+data.valor+'</td>';
			result+='<td>'+data.status+'</td>'+'<td>'+data.estoque+'</td>'+'</tr>';
			if(data.status == 'I'){
				result+='<tr><td colspan="4">Este produto não está disponível</td></tr>';
			};
			$('#table').html(result);
			$('#conteudo').css({'border-radius':'5px','border':'2px solid black','width':'400px','margin':'auto','margin-top':'20px'});
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
		$.getJSON(url, function(data){});*/
});

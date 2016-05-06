function att(data){
	var out='<option selected value="">Selecione um produto...</option><option value=0>todos</option>';
	for (var c=0;c<data.length;c++){
		if(data[c].status == 'I'){
			out+='<option value='+data[c].chave+' style="color:red">'+data[c].nome+'</option>';
		}
		else out+='<option value='+data[c].chave+'>'+data[c].nome+'</option>';
	}
	$('#selecionar').html(out);
}

$(document).ready(function(){
	$.getJSON('http://192.168.1.109:8080/list', function(data){
		att(data);
		$('#submit').click(function(){
			var i=$('#selecionar').val();
			var result='';
			if(i != 0){
				var url='http://192.168.1.109:8080/product?chave='+i;
				$.getJSON(url, function(data){
					result+='<tr><th>Nome</th>'+'<th>Valor</th>'+'<th>Status</th>'+'<th>Estoque</th></tr>';
					result+='<tr>'+'<td>'+data.nome+'</td>'+'<td>R$ '+data.valor+'</td>';
					result+='<td>'+data.status+'</td>'+'<td>'+data.estoque+'</td>'+'</tr>';
					if(data.status == 'I'){
						result+='<tr><td colspan="4" style="color:red">Este produto não está disponível</td></tr>';
					};
					$('#table').html(result);
					$('#conteudo').addClass('content');
				});
			}
			else if(i == ''){
				$('#table').html('');
				$('#conteudo').removeClass('content');
			}
			else if(i == 0){
				$.getJSON('http://192.168.1.109:8080/list', function(data){
					att(data);
					result+='<tr><th>Nome</th>'+'<th>Valor</th>'+'<th>Status</th>'+'<th>Estoque</th></tr>';
					for (var c=0;c<data.length;c++){
						if(data[c].status == 'I') result+='<tr style="color:red">'
						else result+='<tr>'
						result+='<td>'+data[c].nome+'</td>'+'<td>R$ '+data[c].valor+'</td>';
						result+='<td>'+data[c].status+'</td>'+'<td>'+data[c].estoque+'</td>'+'</tr>';
					};
					$('#table').html(result);
					$('#conteudo').addClass('content');
				});
			}
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

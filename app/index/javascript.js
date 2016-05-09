function att(data){
	var options='<option selected value="">Selecione um produto...</option><option value=0>todos</option>';
	for (var c=0;c<data.length;c++){
		if(data[c].status == 'I'){
			options+='<option value='+data[c].chave+' style="color:red">'+data[c].nome+'</option>';
		}
		else options+='<option value='+data[c].chave+'>'+data[c].nome+'</option>';
	}
	$('#selecionar').html(options);
}

function show(allData,url){
	$.getJSON(url, function(data){
		var result='<tr><th>Nome</th>'+'<th>Valor</th>'+'<th>Status</th>'+'<th>Estoque</th></tr>';
		if(allData==true){
			att(data);
			$("#selecionar").val(0);
			for (var c=0;c<data.length;c++){
				if(data[c].status == 'I') result+='<tr style="color:red">';
				else result+='<tr>';
				result+='<td>'+data[c].nome+'</td>'+'<td>R$ '+data[c].valor+'</td>';
				result+='<td>'+data[c].status+'</td>'+'<td>'+data[c].estoque+'</td>'+'</tr>';
			}
		}
		else{
			result+='<tr>'+'<td>'+data.nome+'</td>'+'<td>R$ '+data.valor+'</td>';
			result+='<td>'+data.status+'</td>'+'<td>'+data.estoque+'</td>'+'</tr>';
			if(data.status == 'I'){
				result+='<tr><td colspan="4" style="color:red">Este produto não está disponível</td></tr>';
			}
		}
		$('#table').html(result);
		$('#conteudo').addClass('content');
	});
	
}

$(document).ready(function(){
	$.getJSON('http://192.168.1.109:8080/list', function(data){
		att(data);
		$('#selecionar').change(function(){
			var i=$('#selecionar').val();
			if(i == ''){
				$('#table').html('');
				$('#conteudo').removeClass('content');
			}
			else if(i == 0){
				show(true, 'http://192.168.1.109:8080/list');
			}
			else if(i != 0){
				show(false, 'http://192.168.1.109:8080/product?chave='+i);
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

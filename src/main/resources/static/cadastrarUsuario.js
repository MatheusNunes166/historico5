$("#enviar").click(cadastrarUsuario);

function cadastrarUsuario(){
	let nome = $("#nome").val();
	let email = $("#email").val();
	let CPF = $("#CPF").val();
	let relacao =$("#relacao")[0].value;

	$.ajax({
		type: "POST",
		url: "/cadastro",
		data:{
			nome:nome,
			email:email,
			CPF:CPF,
			relacao:relacao,
		},
		success:function(data){
			alert(data);
		},
		error: function(){
			alert("Não ok");
		}
	});
}
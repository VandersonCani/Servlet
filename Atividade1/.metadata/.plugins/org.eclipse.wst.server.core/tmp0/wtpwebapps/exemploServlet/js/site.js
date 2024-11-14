function validaFaleConosco(){
	var nome = document.frmfaleconosco.txtnome.value;
	var expRegNome = new RegExp("^[A-zÁ-ü]{3,}([ ]{1}[A-zÁ-ü]{2,})+$");
	
	
	if(document.frmfaleconosco.txtnome.value==""){
		alert("Prencha o campo Nome.");
		document.frmfaleconosco.txtnome.focus();
		return false;
	}else if (!expRegNome.test(nome)){
		alert("Preencha o campo nome Corretamente.");
		document.frmfaleconosco.txtnome.focus();
		return false;
	}
	
	var fone = document.frmfaleconosco.txtfone.value;
	var expRegFone = new RegExp("^[(]{1}[1-9]{2}[)]{1}[0-9]{4,5}[-]{1}[0-9]{4}$");
	
	
	
	if(document.frmfaleconosco.txtfone.value==""){
		alert("Prencha o campo telefone.");
		document.frmfaleconosco.txtfone.focus();
		return false;
	}else if (!expRegFone.test(fone)){
		alert("Preencha o campo Telefone Corretamente.");
		document.frmfaleconosco.txtfone.focus();
		return false;
	}
	
	if(document.frmfaleconosco.txtemail.value==""){
		alert("Prencha o campo E-mail.");
		document.frmfaleconosco.txtemail.focus();
		return false;
	}

	if(document.frmfaleconosco.selmotivo.value==""){
		alert("Prencha o campo Motivo.");
		document.frmfaleconosco.selmotivo.focus();
		return false;
	}
	
	if(document.frmfaleconosco.txtcomentario.value==""){
		alert("Prencha o campo Comentario.");
		document.frmfaleconosco.txtcomentario.focus();
		return false;
	}

	return true;
}
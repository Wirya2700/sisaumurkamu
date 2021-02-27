function buttonLoading(elementId){
	$("#" + elementId).attr('disabled', true);
	$("#" + elementId).empty();
	$("#" + elementId)
		.append('<span class="spinner-grow spinner-grow-sm align-middle" role="status" aria-hidden="true"></span> tunggu bro...');
}

function buttonLoadingReset(elementId){
	$("#" + elementId).empty();
	$("#" + elementId)
		.append('Ok');
	$("#" + elementId).attr('disabled', false);
}

function appendElement(elementId, userName){
	var user = userName.replace("@", "");
	$("#" + elementId)
		.append('<div class="col-6">' + 
			'<a target="_blank" href="https://www.instagram.com/' + user + '/"><span class="s-user">@' + user + '</span></a>' + 
			'</div>');
}
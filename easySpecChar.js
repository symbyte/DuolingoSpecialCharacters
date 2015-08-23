$(document).ready(function(){
	$(document).on("keydown", "textarea" , function(event){
		rebind(event);
	});
	$(document).on("keydown", "input" , function(event){
		rebind(event);
	});
});
function rebind(event)
{
	var newKey = getNewKey(event.which);
	if(event.altKey && newKey)
	{
		$(event.target).val($(event.target).val() + newKey);
	}
}
function getNewKey(input)
{
	if(input == 65)
		return "á";
	if(input == 69)
		return "é";
	if(input == 73)
		return "í";
	if(input == 79)
		return "ó";
	if(input == 85)
		return "ú";
	if(input == 78)
		return "ñ";
	if(input == 90)
		return "¡";
	if(input == 88)
		return "¿";
	if(input == 87)
		return "ü";
	return false;
}

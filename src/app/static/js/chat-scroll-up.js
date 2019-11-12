$(document).ready(function(){
	/*chatted send module	*/
var $cont = $('.chat-area-write ul');
$cont[0].scrollTop = $cont[0].scrollHeight;

$('.inp').keyup(function(e) {
    if (e.keyCode == 13) {
        $cont.append('<li class="recive-chat"><div class="chattings"><div class="chat-rows"><span class="chat-text">' + $(this).val() + '</span></div></div></li>');
        $cont[0].scrollTop = $cont[0].scrollHeight;
        $(this).val('');
    }
})
.focus();

});
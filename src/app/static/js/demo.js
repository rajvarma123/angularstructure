//$(document).ready(function(){
//// assign function to onclick property of checkbox
//document.getElementById('cri5').onclick = function() {
//    // call toggleSub when checkbox clicked
//    // toggleSub args: checkbox clicked on (this), id of element to show/hide
//    toggleSub(this, 'active_sub');
//};
//
//})
//$(function() {
//	
//	$("a#demo-direction-right-align-default").cooltip({
//    	direction: 'right'
//  	});
//  
//});
function toggleSub(box, id) {
    // get reference to related content to display/hide
    var el = document.getElementById(id);
    
    if ( box.checked ) {
        el.style.display = 'block';
    } else {
        el.style.display = 'none';
    }
}	

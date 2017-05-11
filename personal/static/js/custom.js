$(document).ready(function($) { 
    $(function(){
        if (window.location.search == "?sent") {
            $('#contactform').hide();
            $('#contactformsent').show();
        } else {
            $('#contactformsent').hide();
        }
    });
    
    $('.reveal').on('click', function(){
        if ( $(this).next('.slide-content.hidden').is(":hidden") ) {
            $(".slide-content.hidden").slideDown("fast");
        } else {
            $('.slide-content').slideUp("fast");
        }
    });
});

function callPop(classId){
    $(classId).show();
    $("body").addClass("ovf_hdn");
}
function closePop(classId){
    $(classId).hide();
    $("body").removeClass("ovf_hdn");
}

// w주석
$(document).ready(function(){

    $('.hd_icon_more').click(function(){
        $('.background_black').fadeToggle();
        $('.space_more_list').stop().fadeToggle()

    })
    $('.background_black').click(function(){
        $('.background_black').fadeOut();
        $('.space_more_list').stop().slideUp()

    })

})
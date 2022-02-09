$(document).ready(function(){
    $(".about-section").waypoint(function(direction){
        if(direction=="down"){
        $("nav").addClass('sticky-nav');
        }
        else{
            $("nav").removeClass('sticky-nav');
        }
    })
});

$(".about-section").waypoint(function(direction){
    $(".js--about-section").addClass("animate__animated animate__fadeIn");
})
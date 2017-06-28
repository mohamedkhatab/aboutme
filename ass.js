$(document).ready(function(){
    $("button").click(function(){
        $(".head").slideDown(500),
$(".story").slideDown(600),
$(".contact").animate({height: '300px', opacity: '0.4'}, "slow");
    });
});

//check off specific todos with click   
$("ul").on("click","li",function(){
    //if li is gray
    $(this).toggleClass("completed");
});
//click on x to delete todo

$("ul").on("click","span",function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
    if(event.which===13)
    {
        var txt = $(this).val();
        $("ul").append("<li><span><i class='fas fa-minus-circle'></i> </span>" + txt +"</li>");
        $(this).val("");
    }
});

$(".fa-plus-circle").click(function(){
    $("input[type='text']").fadeToggle();
})
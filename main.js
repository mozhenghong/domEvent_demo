$(function(){
    let n=0;
    $('div').click(function(e){
    setTimeout(function(){
    $(e.currentTarget).addClass('active')
    },n*1000)
    n++
})
})

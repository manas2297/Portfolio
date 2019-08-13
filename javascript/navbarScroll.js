$(window).scroll(()=>{
    if($(window).scrollTop()>20){
        $('.nav').addClass('navShadow');
    }else{
        $('.nav').removeClass('navShadow');
    }
    
})
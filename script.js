function init(){
    $('.next').click(function (){
        var immagineattuale=$('.images .active');
        var immagineultima=$('.images img:last-child');
        var immagineprossima=$('.images .active').next();
        if(immagineultima.hasClass('active')){
            immagineprossima=$('.images img:first-child')
        }
        immagineattuale.removeClass( 'active')
        immagineprossima.addClass( 'active')
    })
    $('.prev').click(function (){
        var immagineattuale=$('.images .active');
        var immagineprima=$('.images img:first-child');
        var immagineprossima=$('.images .active').prev();
        if(immagineprima.hasClass('active')){
            immagineprossima=$('.images img:last-child')
        }
        immagineattuale.removeClass('active')
        immagineprossima.addClass('active')
    })

    $('.next').click(function (){
        var pallinoattuale=$('.pallini .active');
        var pallinoultima=$('.pallini i:last-child ');
        var pallinoprossima=$('.pallini .active').next();
        console.log(pallinoultima,pallinoattuale,pallinoprossima)
        if(pallinoultima.hasClass('active')){
            pallinoprossima=$('.pallini i:first-child')
            console.log('prova')
        }
        pallinoattuale.removeClass('active')
        pallinoprossima.addClass('active')
    })
    $('.prev').click(function (){
        var pallinoattuale=$('.pallini .active');
        var pallinoultima=$('.pallini i:first-child ');
        var pallinoprossima=$('.pallini .active').prev();
        console.log(pallinoultima,pallinoattuale,pallinoprossima)
        if(pallinoultima.hasClass('active')){
            pallinoprossima=$('.pallini i:last-child')
            console.log('prova')
        }
        pallinoattuale.removeClass('active')
        pallinoprossima.addClass('active')
    })

}
$(document).ready(init)
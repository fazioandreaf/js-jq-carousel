function init(){
    $('.next').click(function (){
        var immagineattuale=$('.active');
        var immagineultima=$('.images img:last-child');
        var immagineprossima=$('.active').next();
        console.log(immagineultima,immagineattuale)
        if(immagineultima.hasClass('active')){
            immagineprossima=$('.images img:first-child')
        }
        immagineattuale.removeClass('active')
        immagineprossima.addClass('active')
    })
    $('.prev').click(function (){
        var immagineattuale=$('.active');
        var immagineprima=$('.images img:first-child');
        var immagineprossima=$('.active').prev();
        console.log(immagineprima,immagineattuale)
        if(immagineprima.hasClass('active')){
            immagineprossima=$('.images img:last-child')
        }
        immagineattuale.removeClass('active')
        immagineprossima.addClass('active')
    })

}
$(document).ready(init)
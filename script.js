function init(){
    $('.next').click(function (){
        var immagineattuale=$('.images .active');
        var immagineultima=$('.images img:last-child');
        var immagineprossima=$('.images .active').next();
        var pallinoattuale=$('.pallini .active');
        var pallinoprossima=$('.pallini .active').next();
        if(immagineultima.hasClass('active')){
            immagineprossima=$('.images img:first-child')
            pallinoprossima=$('.pallini i:first-child')
        }
        immagineattuale.removeClass( 'active')
        immagineprossima.addClass( 'active')
        pallinoattuale.removeClass('active')
        pallinoprossima.addClass('active')
    })
    $('.prev').click(function (){
        var immagineattuale=$('.images .active');
        var immagineprima=$('.images img:first-child');
        var immagineprossima=$('.images .active').prev();
        var pallinoattuale=$('.pallini .active');
        var pallinoprossima=$('.pallini .active').prev();
        if(immagineprima.hasClass('active')){
            immagineprossima=$('.images img:last-child')
            pallinoprossima=$('.pallini i:last-child')
        }
        immagineattuale.removeClass('active')
        immagineprossima.addClass('active')
        pallinoattuale.removeClass('active')
        pallinoprossima.addClass('active')
    })
    function creazione_li() {
        let numberIMG=$('.images>img').length;
        for(i=0;i<numberIMG;i++){
            $('.pallini').html('<i class="fa fa-circle active" aria-hidden="true" data-value= '+ (i+1)+' ></i>')
            console.log(prova)
        
        }

        console.log('ciao')
    }
    creazione_li()
}
$(document).ready(init)
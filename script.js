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
        var manyLI='';
        for(i=0;i<numberIMG;i++){
            manyLI +='<i class="fa fa-circle" aria-hidden="true" data-value= '+ (i+1)+' ></i>';
        }
        $('.pallini').html(manyLI)
        $('.pallini i:first-child').addClass('active')
    }
    creazione_li()
    $('.pallini i').click(function() {
        var prova=(this.dataset.value);
        console.log(prova)
        console.log(immagineattuale)
    })
}
$(document).ready(init)
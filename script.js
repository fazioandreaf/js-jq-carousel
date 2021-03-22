function init(){
    $('.next').click(function (){
        var immagineattuale=$('.active')
        var immagineprossima=$('.active').next()
        immagineattuale.removeClass('active')
        immagineprossima.addClass('active')
    })

}
$(document).ready(init)
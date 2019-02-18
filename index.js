'use strict'

function currentFocus() {
    $('nav').on('click', '#home', event=>{
        event.preventDefault();
        $('html, body').animate({scrollTop: $('.intro').offset().top}, 500)
    })
    $('nav').on('click', '#aboutMe', event=>{
        event.preventDefault();
        $('html, body').animate({scrollTop: $('.aboutMe').offset().top}, 500)
    })
    $('nav').on('click', '#projects', event=>{
        event.preventDefault();
        $('html, body').animate({scrollTop: $('.project1').offset().top}, 500)
    })
    $('nav').on('click', '#contact', event=>{
        event.preventDefault();
        $('html, body').animate({scrollTop: $('.contact').offset().top}, 500)
    })
    $('.left').hover(
        ()=>{
            $('.tag').addClass('hide')
            $('.tag2').removeClass('hide')
        },
        ()=>{
            $('.tag').removeClass('hide')
            $('.tag2').addClass('hide')
        }
        

    )
    // auto scroll
    // get current focus class, if user scroll over 90% of the screen, move to the top of the focusing class
    let current = 'nav'
    //disable for small screen
    let autoScroll = true
    $(window).resize(()=>{
        if($(this).width() < 1024 ) {
            autoScroll = false
        }
        else {
            autoScroll = true
        }
    })
    
    $(window).on('scroll', ()=>{
        if(autoScroll && $(window).width() > 1024){
            let screenHeight = $(window).height();
            let scrollHeight = $(window).scrollTop()
            let moveFromScreen = Math.floor(scrollHeight%screenHeight)
            if(moveFromScreen > screenHeight*0.9) {
                $('body').on('mouseover', 'section' , event=>{
                    if (autoScroll && event.currentTarget.className !== current) {
                        current = event.currentTarget.className
                        $('html, body').animate({scrollTop: $(event.currentTarget).offset().top}, 200)
                        if(event.currentTarget.className !== 'intro') {
                            $('nav').css('background-color','transparent')
                        }
                        else {
                            $('nav').css('background-color','#f8f8f8')
                        }
                    }
                    
                })
            }
        }
    })
    
}


$(currentFocus)
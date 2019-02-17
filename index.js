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
    //get current focus class, if user scroll over 80% of the screen, move to the top of the focusing class
    let current =null
    $(window).on('scroll', ()=>{
        let screenHeight = $(window).height();
        let scrollHeight = $(window).scrollTop()
        let moveFromScreen = Math.floor(scrollHeight%screenHeight)
        if(moveFromScreen > screenHeight*0.8) {
            $('body').on('mouseenter', 'section' , event=>{
                if (event.currentTarget.className !== current) {
                    if(event.currentTarget.className !== 'intro') {
                        $('nav').css('background-color','transparent')
                    }
                    else {
                        $('nav').css('background-color','#fff')
                    }
                    $('html, body').animate({scrollTop: $(event.currentTarget).offset().top}, 300)
                    current = event.currentTarget.className
                }
                
            })
        }
    })
}


$(currentFocus)
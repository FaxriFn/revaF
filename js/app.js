// Write Plugin
var typed = new Typed('.typing', {
    strings: ['Frontend Developer.', 'Web Designer.', 'Graphic Designer.'],
    typeSpeed: 120,
    backSpeed: 20,
    loop: true
});
// 
$(document).ready(() => {

    // Preloader
    $('.preloader').delay(3000).fadeOut(1000);
    // Navbar Close Arrow
    $(document).on('click', '.close-arrow', () => {
        $('.close-arrow').addClass('open-arrow');
        $('.arrow').addClass('fa-angle-right').removeClass('fa-angle-left');
        $('.close-arrow').css('left', "37px")
        $('.navbar-menu li span').hide();
        $('.close-arrow').removeClass('close-arrow');
        $('.logo').css('background-size', '45px')
        $('.navbar').css('width', "100px")
        $('.navbar-menu li').css('width', "60px")
        $('.social-media').removeClass('d-flex').hide();

        $('.section').css('width', 'calc(100% - 100px)');
    });
    // Navbar Open Arrow
    $(document).on('click', '.open-arrow', () => {
        $('.open-arrow').addClass('close-arrow').removeClass('open-arrow')
        $('.social-media').addClass('d-flex').show();
        $('.navbar-menu li span').show();
        $('.logo').css('background-size', '50px');
        $('.navbar').css('width', "220px")
        $('.navbar-menu li').css('width', "110px")
        $('.arrow').addClass('fa-angle-left').removeClass('fa-angle-right');
        $('.close-arrow').css('left', "190px")
        $('.section').css('width', 'calc(100% - 220px)');
    });



    // Navbar-Menu Active Li
    $('.navbar-menu li').on('click', function () {
        $('.navbar-menu li').each((index, element) => {
            $(element).removeClass('nav-active');
        });
        $(this).addClass('nav-active');
    })







    // Slider-Home
    let Index = 0;

    let images = $('.slider img');

    $('.arrow-right').on('click', () => {

        Index++;
        if (Index > 2) {
            Index = 0;
        }

        $('.slider img').each((index, element) => {
            $(element).css({
                'opacity': '0',
                'visibility': 'hidden'
            });
        });

        images.eq(Index).css({
            'opacity': '1',
            'visibility': 'visible'
        });

        if (Index == 0) {
            $('.typing').show()
            $('.slider-text').css('top', '36%')
            $('.text-name').css('margin-bottom', '0')
        } else {
            $('.typing').hide()
            $('.slider-text').css('top', '39%')
            $('.text-name').css('margin-bottom', '20px')
        }
    })

    // 
    $('.arrow-left').on('click', () => {

        Index--;
        if (Index < 0) {
            Index = 2;
        }

        $('.slider img').each((index, element) => {
            $(element).css({
                'opacity': '0',
                'visibility': 'hidden'
            });
        });

        images.eq(Index).css({
            'opacity': '1',
            'visibility': 'visible'
        });


        if (Index == 0) {
            $('.typing').show()
            $('.slider-text').css('top', '33%')
            $('.text-name').css('margin-bottom', '0')
        } else {
            $('.typing').hide()
            $('.slider-text').css('top', '39%')
            $('.text-name').css('margin-bottom', '20px')
        }
    })
    //

    // Burger
    $(document).on('click', '.burger', function () {



        $('.section').css('width', "calc(100%");
        $('.navbar').css('left', '0px');
        $(".burger").addClass('toggle')
        $('.burger').addClass('close-burger');
        $('.burger').addClass('burger');



    })
    $(document).on('click', '.close-burger', function () {
        $(".close-burger").addClass('burger')
        $(".burger").removeClass('toggle')
        $('.close-burger').removeClass('close-burger');
        $('.navbar').css('left', '-220px');
        $('.section').css('width', "calc(100%");
        $('body').css('overflow-x', 'hidden')

    })



    // 


    // 

    // About Accardion

    $('.acc-header li').on('click', function () {
        $('.acc-header li').each((index, element) => {
            $(element).removeClass('acc-active');
        });
        $(this).addClass('acc-active');

        $('.js-about').each((index, element) => {
            $(element).addClass('d-none');
        })

        $('.js-about').eq($(this).index()).removeClass('d-none');

    })
    // Page Active
    $('.navbar-menu li').on('click', function () {
        $('.section').each((index, li) => {
            $(li).addClass('d-none')
        });
        $('.section').eq($(this).index()).removeClass('d-none')




    })


    // Porfolio Active Header
    $('.portfolio-header li').on('click', function () {
        $('.portfolio-header li').each(function (index, element) {
            $(element).removeClass(' portfolio-header-active')
        })
        $(this).addClass('portfolio-header-active');
    })


    // Portfolio
    $(document).on('click', '.all', function () {
        $('.item-web,.item-marketing, .item-graphic').css({
            'opacity': '1',
            'pointer-events': 'auto'
        })
    })

    $(document).on('click', '.web-design', function () {
        $('.item-marketing, .item-graphic').css({
            'opacity': '0.2',
            'pointer-events': 'none'
        })
        $('.item-web').css({
            'opacity': '1',
            'pointer-events': 'auto'
        })
    })

    $(document).on('click', '.graphic-design', function () {
        $('.item-marketing, .item-web').css({
            'opacity': '0.2',
            'pointer-events': 'none'
        })
        $('.item-graphic').css({
            'opacity': '1',
            'pointer-events': 'auto'
        })
    })

    $(document).on('click', '.marketing', function () {
        $('.item-graphic, .item-web').css({
            'opacity': '0.2',
            'pointer-events': 'none'
        })
        $('.item-marketing').css({
            'opacity': '1',
            'pointer-events': 'auto'
        })
    })

    // 



    $(document).on('click', '.icon2-portfolio', (click) => {
        $('.portfolio-modal').removeClass('d-none');
        $('.portfolio-modal img').attr('src', $(click.target).parent().parent().next().children().attr('src'))
        $('body').css('overflow', 'hidden');
    })

    $(document).on('click', '.close-x', function () {
        $('.portfolio-modal').addClass('d-none');
        $('body').css('overflow', 'auto');
    })

    // testimonials
    $('.imgs').each(function (index, li) {
        $(li).on('click', () => {
            $('.imgs').each(function (index, li) {
                $(li).css('border', 'none')
            })
            $(li).css('border', ' 2px solid #b0914f')
            $('.text').each(function (index, li) {
                $(li).addClass('d-none');
            });
            let url;

            $('.text').eq(index).removeClass('d-none')
            url = $(li).css('background-image')
            $('.big-img').css('background-image', url)
        })
    });

    // Contact

    $(document).on('click','.open-map',function () {
        $('.open-map').addClass('close-map').removeClass('open-map')
        $('.map-text span').text('Close Map')
        $('.fa-arrow-alt-circle-down').addClass('fa-arrow-alt-circle-up').removeClass('fa-arrow-alt-circle-down')
        $('.map-overlay').css('height', '430px');
    })
    $(document).on('click','.close-map',function () {
        $('.close-map').addClass('open-map').removeClass('close-map')
        $('.map-text span').text('Open Map')
        $('.fa-arrow-alt-circle-up').addClass('fa-arrow-alt-circle-down').removeClass('fa-arrow-alt-circle-up')
        $('.map-overlay').css('height', '0');
    })

})
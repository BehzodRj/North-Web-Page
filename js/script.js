let navBlock = document.getElementById('navBlock')
let spanBlock = document.getElementById('spanBlock')

function navButton() {
    navBlock.style.transform = "translateX(0)"
    navBlock.style.transition = '.700s'
    spanBlock.style.opacity = '0'
    spanBlock.style.transition = '.700s'

}

function navReverseButton() {
    navBlock.style.transform = "translateX(-100%)"
    navBlock.style.transition = '.700s'
    spanBlock.style.opacity = '1'
    spanBlock.style.transition = '.700s'
}

$('.owl-carousel').owlCarousel({
    loop:true,
    margin: 10,
    nav: true,
    navText:["<i class='fa fa-chevron-left prev-slide'></i>","<i class='fa fa-chevron-right next-slide'></i>"],
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        330:{
            items: 2,
            nav:true
        },
        470: {
            items: 3,
            nav:false
        },
        665:{
            items: 4,
            nav:false
        },

        835:{
            items: 5,
            nav:true,
            loop:false
        },
        1000:{
            items: 6,
            nav:true,
            loop:false
        }
    }
})
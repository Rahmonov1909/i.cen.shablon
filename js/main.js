const elSiteButton = document.querySelector(".burger-menu");
const elSiteSpan1 = document.querySelector(".js-burger-menu-span-1");
const elSiteSpan2 = document.querySelector(".js-burger-menu-span-2");
const elSiteSpan3 = document.querySelector(".js-burger-menu-span-3");
elSiteButton.addEventListener("click", function(){
  elSiteSpan1.classList.toggle("burger-menu-top-span");
  elSiteSpan2.classList.toggle("burger-menu-none");
  elSiteSpan3.classList.toggle("burger-menu-bottom-span");
})
$(document).ready(function () {
    let $links = $('.sitenav-item-link');
    $links.click(function(event){
    event.preventDefault();
    $links.removeClass('active');
    let id = $(this).addClass('active').attr('href');
    let target = $(id).offset().top +20;
    $('html , body').animate({
        scrollTop: target,
    },1000)
    })
});
$(document).ready(function () {
  $(window).scroll(function(){
    let scroll = $(this).scrollTop();
    console.log(scroll);
    if(scroll >= 300){
        $('#top').fadeIn();
    }else{
        $('#top').fadeOut();
    }
})
$('#top').click(function(){
    $('html, body').animate({
        scrollTop: 0,
    },)
})
});
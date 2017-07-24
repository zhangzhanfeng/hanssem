$(function(){
    // 首页轮博图调用
    // 
    $.spice.kvScroll('.events-scroll-loop-false', {
        type: 'scroll'
        , autoPlay: true
        , loop: false
        ,btn:false
        ,loop:true
        ,time:1000
        , dot: {
            style: 'dot'
        }
    });
    // 图片替换插件调用
  $.spice.tools.changeImageSrc();

    //  var topWidth=$('.top-nav').height()
    //  var WindowWidth= window.innerWidth || document.documentElement.clientWidth;
    //   $(window).on('scroll resize',function(event){
    //       if(WindowWidth>=1024){
    //         if($(this).scrollTop()>topWidth){
    //             $('.side-nav').show(200);
    //         }else{
    //              $('.side-nav').hide(200);
    //          }
    //       }else{
    //         $('.side-nav').show();
    //       }
    //   })
      
      //简单tab栏；
tab('.scroll-title','li','.tab-content','.tab-content-list');
tab('.scroll-title','li','.kitchen-bathroom-img','li');
function tab(fatherName,childName,fatherName2,childName2){
let scrollTitle=document.querySelector(fatherName);
let titiesLis=scrollTitle.querySelectorAll(childName);
let kitchenBathroomImg=document.querySelector(fatherName2);
let imgLis=kitchenBathroomImg.querySelectorAll(childName2);
for(var i = 0;i <titiesLis.length;i++){
    titiesLis[i].index=i;
    titiesLis[i].addEventListener('click',function(){
      console.log(111);
        var idx=this.index;
        for(var i =0;i<titiesLis.length;i++){
            titiesLis[i].className='';
            imgLis[i].style.display='none'
        }
        this.className='ischeck';
        imgLis[idx].style.display='block';
    })
  }
}
$('.nav-bar ul li.title').mouseover(function(){
  // alert('hehe');
  $(this).addClass('on');
  $(this).children('.list-page').css('display','block');
}).mouseout(function(){
  $(this).removeClass('on');
  $(this).children('.list-page').css('display','none');
})
var navigationBox =document.querySelector('.navigation-box');
var slidebox=navigationBox.querySelectorAll('.slide-box');
var slideNav =document.querySelector('.side-nav');
var arrow=slideNav.querySelector('.arrow');
for(var i =0 ;i<slidebox.length;i++){
  slidebox[i].index=i;
   if( slidebox[i].index>7 ){
    slidebox[i].style.display='none';
   }
}
arrow.addEventListener('click',function(){
for (var i =0 ;i<slidebox.length;i++){
   if( slidebox[i].index>7 ){
    slidebox[i].style.display='block';
   }
  }
  })
})




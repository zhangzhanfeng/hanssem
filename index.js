$(function(){
    // 首页轮博图调用
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

    // 右边导航隐藏显示
     var topWidth=$('.top-nav').height()
     var WindowWidth= window.innerWidth || document.documentElement.clientWidth;
      $(window).on('scroll resize',function(event){
          if(WindowWidth>=1024){
            if($(this).scrollTop()>topWidth){
                $('.side-nav').show(200);
            }else{
                 $('.side-nav').hide(200);
             }
          }else{
            $('.side-nav').show();
          }
      })
      
      //简单tab栏；
tab('.scroll-title','.kitchen-bathroom-img');
function tab(titleName,imgName){
let scrollTitle=document.querySelector(titleName);
let titiesLis=scrollTitle.querySelectorAll('li');
let kitchenBathroomImg=document.querySelector(imgName);
let imgLis=kitchenBathroomImg.querySelectorAll('li');
for(var i = 0;i <titiesLis.length;i++){
    titiesLis[i].index=i;
    titiesLis[i].addEventListener('click',function(){
        var idx=this.index;
        for(var i =0;i<titiesLis.length;i++){
            titiesLis[i].className='';
            imgLis[i].style.display='none'
        }
        this.className='ischeck';
        imgLis[idx].style.transition='display 6s';
        imgLis[idx].style.display='block';
    })
  }
}



     })




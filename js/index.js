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

    // 图片替换插件调用
  $.spice.tools.changeImageSrc();

     // var topWidth=$('.top-nav').height()
     // var WindowWidth= window.innerWidth || document.documentElement.clientWidth;
     //  $(window).on('scroll resize',function(event){
     //      if(WindowWidth>=1024){
     //        if($(this).scrollTop()>topWidth){
     //            $('.side-nav').show(200);
     //        }else{
     //             $('.side-nav').hide(200);
     //         }
     //      }else{
     //        $('.side-nav').show();
     //      }
     //  })
      
//tab栏；


// tab('.kitchen-bathroom','.scroll-title','li','.kitchen-bathroom-img','li');
// tab('.articles-daily-use','.scroll-title','li','.scroll-contenter','.scroll-goods-list');
// tab('.furniture-products','.scroll-title','li','.scroll-contenter','.scroll-goods-list');
// function tab(grandfather,father,fatherchild,son,sonchild){
// var grandFather=document.querySelector(grandfather);
//  var Father=grandFather.querySelector(father);
//  var fatherChild=Father.querySelectorAll(fatherchild);
//  var Son=grandFather.querySelector(son);
//  var sonChild=Son.querySelectorAll(sonchild);
// for(var i = 0;i <fatherChild.length;i++){
//     fatherChild[i].index=i;
//     fatherChild[i].addEventListener('click',function(){
//       // console.log(111);
//         var idx=this.index;
//         for(var i =0;i<sonChild.length;i++){
//             fatherChild[i].className='';
//             sonChild[i].style.display='none'
//         }
//         this.className='ischeck';
//         sonChild[idx].style.display='block';
//     })
//   }
// }
// 头部导航
$('.nav-bar ul li.title').mouseover(function(){
  // alert('hehe');
  $(this).addClass('on');
  $(this).children('.list-page').css('display','block');
}).mouseout(function(){
  $(this).removeClass('on');
  $(this).children('.list-page').css('display','none');
})
// 侧边栏手机端显示隐藏
// var navigationBox =document.querySelector('.navigation-box');
// var slidebox=navigationBox.querySelectorAll('.slide-box');
// var slideNav =document.querySelector('.side-nav');
// var arrow=slideNav.querySelector('.arrow');
// for(var i =0 ;i<slidebox.length;i++){
//   slidebox[i].index=i;
//    if( slidebox[i].index>7 ){
//    slidebox[i].classList.add('check-none');
//    }
// }
// arrow.addEventListener('click',function(){
// for (var i =0 ;i<slidebox.length;i++){
//    if( slidebox[i].index>7 ){
//     slidebox[i].classList.toggle('check-block');
//    }
//   }
//   });
// // 滑动效果
// var WindowWidth= window.innerWidth || document.documentElement.clientWidth;
//   if(WindowWidth<=1024){
//   var $list=$('.scroll-contenter .list-of-goods .list')
//    $list.css('width',WindowWidth*0.4);
//    // console.log( $list.length)
//    var  scrollgoodslist= $list.outerWidth(true)* 4+10;
//    $('.scroll-goods-list').css('width',scrollgoodslist);
//     $('.scroll-goods-list').css('height',$list.outerHeight);
//   }
// $(window).on('resize',function(){
//   if(WindowWidth<=1024){
//   var $list=$('.scroll-contenter .list-of-goods .list')
//    $list.css('width',WindowWidth*0.4);
//    // console.log( $list.length)
//    var  scrollgoodslist= $list.outerWidth(true)* 4+10;
//    $('.scroll-goods-list').css('width',scrollgoodslist);
//     $('.scroll-goods-list').css('height',$list.outerHeight());
//   }
// })

})

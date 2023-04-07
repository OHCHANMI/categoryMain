$(document).ready(function(){

  // 주메뉴 드롭다운
  $(".gnb").hover(function(){
      $(this).find(".main .sub").stop().slideDown();
    },function(){
      $(this).find(".main .sub").stop().slideUp();
    });

  // 메인비주얼
  let $img = $(".changeimg ul li");
  let $lbtn = $(".side_btn .lbtn");
  let $rbtn = $(".side_btn .rbtn");
  let oldidx=0;
  let idx=0;
  let img_n = $img.length;

  function changeImg(idx){
    if(oldidx != idx){

      $img.eq(oldidx).stop().fadeOut();
      $img.eq(idx).stop().fadeIn();
    }

    oldidx = idx;

  };

  function changeAuto(){

    idx++;
    if(idx > img_n-1){
      idx=0;
    }

    changeImg(idx);

  };

  timer = setInterval(changeAuto,5000);

$rbtn.click(function(){
    
    clearInterval(timer);
    idx++;
    if(idx > img_n-1){ //선택한 이미지가 0,1,2...4 마지막일 때 맨 처음부터 다시 시작
      idx=0; 
    }
    changeImg(idx);
    timer = setInterval(changeAuto,5000);

  });

  $lbtn.click(function(){

    clearInterval(timer);
    idx--;
    if(idx < 0){ //선택한 이미지가 4,3,2...0 첫번째일때 맨 마지막부터 다시 시작
      idx=img_n-1;
    }
    changeImg(idx);
    timer = setInterval(changeAuto,4000);

  });
  
// place
/* let $pclick = $(".p-img ul li");
let $pimg = $(".p-img ul .Iactive");

$("$pclick").click(function(){
  $("$pimg")
}); */

// quickmenu
$('.quick').animate({'top':$(document).scrollTop()+20},500);
$(window).scroll(function(){

  let apos = $(window).scrollTop();
  $(".quick").stop().animate({top:apos+200},400);
});

/* $(window).scroll(function(){

  let apos = $(window).scrollTop();

  quick.stop().animate({
    top: apos + 350
  },400);
}); */

/* $(".quick_menu li").click(function(){
  $(".quick_menu li").css({"color":"gold"});
  $(".quick_menu li:before").css("background":"gold","box-shadow":"0 0 10px #fff");
}); */

});




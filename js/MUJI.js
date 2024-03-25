$(function(){
        
    //접속한 브라우저의 가로길이 가져오기
    let deviceWidth=$(window).width();

    //태블릿과 모바일에서 메뉴 버튼을 클릭하면 내비게이션이 오른쪽에서 나타남
    $(".menu_icon").click(function(){
        let menuHeight = $(".menu").height();
        $(".wrap").css({"height":menuHeight,"overflow":"hidden"});
        $(".menu").animate({ 'right':0 });
    });
    //태블릿과 모바일에서 닫기 버튼을 클릭하면 내비게이션이 오른쪽으로 사라짐
    $(".close_btn").click(function(){
        $(".wrap").css({"height":"auto","overflow":"visible"});
        $(".menu").animate({ 'right':'-100vw' });
    });

    //만약 접속한 브라우저의 가로길이가 1400 미만이면 메뉴는 아코디언 메뉴로 작동함
    if(deviceWidth < 1400){
        $("nav > ul > li > a").click(function(e){
            //a태그 원래 기능 막아줌(눌렀을때 화면이 올라가버리는 사태 방지)
            e.preventDefault();
            //만약 클릭한 메뉴에 active클래스가 없다면
            if($(this).attr("class") != "active"){
                //모든 메뉴에서 active 제거
                $("nav > ul > li > a").removeClass("active");
                //클릭한 메뉴만 active 설정
                $(this).addClass("active");
                //모든 서브메뉴는 들어감
                $("nav .sub").slideUp();
                //클릭한 메뉴의 다음 형제 객체(서브메뉴)만 나옴
                $(this).next().slideDown();
            //클릭한 메뉴에 active클래스가 설정되어 있다면
            }else{
                //클릭한 메뉴에서 active 제거
                $(this).removeClass("active");
                //클릭한 메뉴의 다음 형제 객체(서브메뉴)만 들어감
                $(this).next().slideUp();
            }
        });
    //접속한 기기의 가로길이가 1400px이상이면 주메뉴에 마우스 오버했을 때 서브메뉴와 서브메뉴 배경이 나타나고, 마우스 아웃했을 때 서브메뉴와 서브메뉴 배경이 사라짐
    } else {
        //pc버전 내비게이션
        $("nav > ul > li > a").mouseenter(function(){
            $(".sub").stop().slideDown();
            $(".sub_bg").stop().slideDown();
        });
        $("header").mouseleave(function(){
            $(".sub").stop().slideUp();
            $(".sub_bg").stop().slideUp();
        });
        //pc버전 스크롤하면 화면 단위로 이동함
        $(".fullpage").fullpage({
            navigation:true,
            //내가 추가 (근데 스와이퍼가 있는 상품란이 안됨)
            anchors:["","","anchor3","anchor4","anchor5","anchor6","anchor7",],
            navigationTooltips:["","기획전","신상품&인기상품","봄 아이템","세일","매일 매거진","계절의 추천"],
            showAciveTooltip:true
        });
    }


    //글로벌 사이트(family site)
    $(".family_title a").click(function(e){
        e.preventDefault();
        $(this).find("span").css("transform","rotateZ(-180deg)");
        $(".family_list").slideDown();
        
    });
    $(".family").mouseleave(function(){
        $(this).find("span").css("transform","rotateZ(0deg)");
        $(".family_list").slideUp();
    });


    //스와이퍼 
    var swiper = new Swiper(".mySwiper", {
        loop:true,
        slidesPerView: 1,  //뷰 개수 초기값 설정(모바일)
        spaceBetween: 10,   //뷰 여백
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
            500: {
                slidesPerView: 3,  //브라우저가 500보다 클 때 3개
                spaceBetween: 30,
            },
            1024: {
                slidesPerView: 3,  //브라우저가 1024보다 클 때 3개
                spaceBetween: 30,
            },
            1400: {
                slidesPerView: 5,  //브라우저가 1400보다 클 때 4개
                spaceBetween: 30,
            },
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
});
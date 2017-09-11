angular.module('starter.controllers', [])

.controller('ZhuantiCtrl', function($scope,guide,startA,zhuangtiSlide,$window,$timeout) {

   document.getElementsByClassName("tab-item")[0].onclick=function(){
   	swiper.slideTo(0)
   }
	if(!startA.get("start")){
	
	
		$("#first_img").clone().prependTo("body").addClass("cover");
		$timeout(function(){
			$(".cover").animate({"width":"5rem","height":"9rem",bottom:"0.95rem"},1000,function(){
			$(this).remove()
		})
		},1000)
		
	startA.set("start","first")	
	}
	
	
	 var swiper = new Swiper('#zhuangti_swiper', {
	 	 initialSlide :0,
	    observer:true,//修改swiper自己或子元素时，自动初始化swiper
	    observeParents:true,//修改swiper的父元素时，自动初始化swiper
    	effect: 'coverflow', 
      slidesPerView: "auto",
	centeredSlides: true,
	watchSlidesProgress: true,
spaceBetween:50,
	 coverflow: {
            rotate: 0,  
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows : false
        },   
	onProgress: function(a) {
		var b, c, d;
		for(b = 0; b < a.slides.length; b++) c = a.slides[b], d = c.progress, scale = 1 - Math.min(Math.abs(.2 * d), 1), es = c.style, es.opacity = 1 - Math.min(Math.abs(d / 2), 1), es.webkitTransform = es.MsTransform = es.msTransform = es.MozTransform = es.OTransform = es.transform = "translate3d(0px,0," + -Math.abs(150 * d) + "px)"
	},
	onSetTransition: function(a, b) {
		for(var c = 0; c < a.slides.length; c++) es = a.slides[c].style, es.webkitTransitionDuration = es.MsTransitionDuration = es.msTransitionDuration = es.MozTransitionDuration = es.OTransitionDuration = es.transitionDuration = b + "ms"
	}
    })
	
		$scope.slide=zhuangtiSlide ;
		$scope.zhuanti=function(id){
	    var body_w=$(window).width()*2/100
	     var body_h=$(window).height()*2/100
	
		var img_str=""	
		for(var i=0;i<$scope.slide.length;i++){
			if(id==$scope.slide[i].id){
			img_str="<img src='"+$scope.slide[i].src +"'/>"	
			}
		}
		
		$(img_str).appendTo("body").addClass("img_an")
		$(".img_an").animate({"transform":"scale(1.5)",top:"2.2rem",left:"1.245rem"},500,function(){
		$timeout(function(){
			$(".img_an").animate({left:"-10rem"},500,function(){
			
				$(".img_an").remove()
				
			})
			},1000)
				window.location="#/tab/slide/"+id
			
		
		})
		}
})

.controller('DesignCtrl', function($scope,design) {
	$scope.hangye=design.hangye;
	$scope.fengge=design.fengge;
	
	$scope.anxia=function(index){
		console.log(index)
		$(".designBox").eq(index).children(".title_box").css("display","none")
	}
	$scope.fangkai=function(id,index){
		
		$(".designBox").eq(index).children(".title_box").css("display","block")
	}
	$scope.designer=function(id){
		window.location="#/tab/designer/"+id
	}
	
	console.log($scope.fengge)
	$scope.industryCss={
		'color':"#d0a421"
	
	}
	
$scope.industry=true;

$scope.changeToindustry=function(){
	$scope.industry=true;
		$scope.style=false;
	$scope.industryCss={
		'color':"#d0a421"
	
	}
	$(".underline_design").animate({left:"38%"},300)
	$scope.styleCss={
		'color':"#1e1e1e"
	}
	
}
$scope.changeTostyle=function(){
	$scope.industry=false;
	$scope.style=true;
	$scope.industryCss={
		'color':"#1e1e1e"
	
	}
	$(".underline_design").animate({left:"55%"},300)
	$scope.styleCss={
		'color':"#d0a421"
	}
	
}

})
.controller('ChatsCtrl',function($scope,designer){
	$scope.data=designer[0].arr[1].img
	console.log($scope.data)
	$scope.searchCss={
		color:"#ffffff"
	}
	$scope.attentionCss={
		color:"#d0a421"
	}

$scope.attention=true
	$scope.changeTosearch=function(){
		
		$scope.attention=false;
		$scope.search=true;
		$scope.searchCss={
		color:"#d0a421"
	}
		$scope.attentionCss={
		color:"#ffffff"
	}
		$(".underline_chats").animate({left:"37.5%"})
	}
	
	$scope.changeToattention=function(){
		$scope.attention=true;
		$scope.search=false;
		$scope.searchCss={
		color:"#ffffff"
	}
		$scope.attentionCss={
		color:"#d0a421"
	}
		$(".underline_chats").animate({left:"53.5%"})
	}
	
	
	
})

.controller('GuangCtrl', function($scope,goods_list,$timeout,$ionicLoading) {
	 $scope.go=function(id){
	 window.location="#/tab/guangtotal/"+id
	 }
  $scope.jx=true;
  $scope.data=goods_list;
  $scope.myarr=[];
  $scope.mydata=[];
  $scope.lastarr=[];
  $timeout(function(){
  	  var mySwiper = new Swiper('.guangtab_swiper', {
    observer:true,//修改swiper自己或子元素时，自动初始化swiper 
   observeParents:false,//修改swiper的父元素时，自动初始化swiper 
    slidesPerView: 3,
        spaceBetween: 30

    });
  },500)
 
for(var i=0;i<$scope.data.length;i++){
	for(var j=0;j<$scope.data[i].arr.length;j++){
		$scope.myarr.push($scope.data[i].arr[j])
	}
}
 
  for(var k=0;k<$scope.myarr.length;k++){
  	if((k-1)%2==0){
  		var arr=[];
  		arr.push($scope.myarr[k-1],$scope.myarr[k]);
  		$scope.mydata.push(arr)
  	}
  }
  $scope.lastarr.push($scope.mydata[4],$scope.mydata[5]);
  $scope.index=5;
  $scope.hasmore=true;
  
 $scope.doRefresh=function(){
 	 	$ionicLoading.show()
	 	$timeout(function(){
	 	$scope.lastarr.unshift($scope.mydata[0],$scope.mydata[1],$scope.mydata[2],$scope.mydata[3]);
	 	$scope.$broadcast('scroll.refreshComplete');
	 	$ionicLoading.hide()
	 	},1000)
 }
  $scope.loadMore=function(){
  	 $scope.index++;
  	 $timeout(function(){
  	 loadData()
  	 },1000)
  }
  function loadData(){
  	var index= $scope.index
  	if(index==$scope.mydata.length){
  		 $scope.hasmore=false;
  	}
  	else{
  		
  			 $scope.lastarr.push($scope.mydata[index]);
  		 $scope.$broadcast('scroll.infiniteScrollComplete');
  		
  		
  	}
  }
    $scope.jingstyle={
    	color:"#cbaa1d"
    }
     $scope.xistyle={
    	
    }
    $scope.nav_heng={
    		left: "22%",
    		width: "0.56rem"
    }
    $scope.jingxuan=function(){
    	$scope.jx=true;
    		$scope.xh=false;
    	$(".goods_nav_heng").animate({left: "22%",width: "0.56rem"},300)
    	 $scope.jingstyle={
    	color:"#cbaa1d"
    } 
     $scope.xistyle={
    	color:"#333"
    }
    }
     $scope.xihuan=function(){
     	$scope.jx=false;
     	$scope.xh=true;
    	$(".goods_nav_heng").animate({left: "67%",width: "1.1rem"},300)
    	  $scope.jingstyle={
    	color:"#333"
    } 
     $scope.xistyle={
    	color:"#cbaa1d"
    }
    	 
    	}
})

.controller('MineCtrl', function($scope) {
  
})
.controller('SlideCtrl', function($scope,$stateParams,zhuangtiSlide,$ionicHistory,$timeout,slide,$interval ) {
  $scope.id=$stateParams.myId;
  $scope.slide=zhuangtiSlide;
  $scope.slideData=slide;
  $scope.goback=function(){
 
var str=""
for(var i=0;i<$scope.slide.length;i++){
	if($scope.id==$scope.slide[i].id){
		str="<img src='"+$scope.slide[i].src +"'/>"	
	}
}

$(str).appendTo("body").addClass("homePic")
$(".homePic").animate({"left":"1.245rem"},500,function(){
	$timeout(function(){
		$(".homePic").animate({"transform":"scale(1)","left":" 1.25rem","top": "1.77rem"},1000,function(){
		$(this).remove()
	})
	},1000)
	
})
$timeout(function(){
  
	$ionicHistory.goBack();
	},800)

}
  for(var i=0;i<$scope.slideData.length;i++){
  	if($scope.slideData[i].id==$scope.id){
  		
  	$scope.imgData=$scope.slideData[i].img
    console.log($scope.id)
  	var swiper = new Swiper('.slide_swiper', {
  	 	
	 	 initialSlide :0,
	    observer:true,//修改swiper自己或子元素时，自动初始化swiper
	    observeParents:true,//修改swiper的父元素时，自动初始化swiper
	    onInit: function(swiper){
	    	
	    		console.log(swiper)
	    	$timeout(function(){
	var typewriter=document.querySelectorAll(".slide"+$scope.id+" .slide_text")[0]
	    		  console.log(typewriter)
	    		   var n=20;
      		   var code=typewriter.innerHTML;
       var  len=code.length;
     	typewriter.innerHTML=""
     	typewriter.style.display="block"
     $interval (function(){
      n++;
      if(n<=len)
      {
      switch(code.charAt(n))
       {
             case "<":
         
               n=code.indexOf(">",n);
            
             break;

           }
           typewriter.innerHTML=code.substring(0,n);
         
         }
        
      },80)
 
	    	},500)
	   
  	   },
	    onSlideChangeStart: function(swiper){
      		console.log(swiper.activeIndex);
      		if(swiper.activeIndex<3){
      			var typewriter=document.querySelectorAll(".slide"+$scope.id+" .slide_text")[swiper.activeIndex];
      		 var n=28;
      		   var code=typewriter.innerHTML;
       var  len=code.length;
       console.log(code)
     	typewriter.innerHTML=""
     	typewriter.style.display="block"
     $interval (function(){
      n++;
      if(n<=len)
      {
      switch(code.charAt(n))
       {
             case "<":
          
               n=code.indexOf(">",n);
            
             break;

           }
           typewriter.innerHTML=code.substring(0,n);
         
         }
        
      },80)
      		}else{
      			swiper.slideTo(0)
      			window.location="#/tab/jingxuan/"+$scope.id
      		}
      		
      		
      		
    	},
    pagination: '.swiper-pagination',
        paginationType : 'custom',
         paginationCustomRender: function (swiper, current, total) {
            var _html = '';
            for (var i = 1; i <= total; i++) {
              if (current == i) {
                _html += '<li class="swiper-pagination-custom active"></li>';
              }else{
                _html += '<li class="swiper-pagination-custom"></li>';
              }
            }
            return _html;//返回所有的页码html
        }

    }) 
  	}
  }
	
}).controller("JingxuanCtrl",function($scope,$ionicHistory,$stateParams,goods_list,$timeout,$ionicLoading){
$scope.$on('$ionicView.beforeEnter', function() {//视图进入
           if (location.href.indexOf("?xyz=")<0){
		    	window.location.reload();//页面刷新一次
			 location.href=location.href+"?xyz="+Math.random();
			 }
      });

$scope.hasmore=true;
	$scope.id=$stateParams.myId
	$scope.list=goods_list;
	
	for(var i=0;i<$scope.list.length;i++){
		if($scope.list[i].id==$scope.id){
			$scope.arr=[];
			$scope.firstArr=[];
		$scope.listData=$scope.list[i]
		for(var j=0;j<$scope.listData.arr.length;j++){
			if((j-1)%2==0){
				var listArr=[]
			listArr.push($scope.listData.arr[j-1],$scope.listData.arr[j])	
				$scope.arr.push(listArr)
			}
			
			
			
		}
		$scope.firstArr.push($scope.arr[1],$scope.arr[2],$scope.arr[3])
		console.log($scope.firstArr)
		}
	}
	 $scope.index=3;
	 $scope.doRefresh=function(){
	 	$ionicLoading.show()
	 	$timeout(function(){
	 	$scope.firstArr.unshift($scope.arr[0]);
	 	$scope.$broadcast('scroll.refreshComplete');
	 	$ionicLoading.hide()
	 	},1000)
	 }
	 $scope.loadMore = function () { 
	$timeout(function(){
		$scope.index++; 
      loadajax(); 
	},1000)
      
    }
	 function loadajax(){
	 	 var dataValue = $scope.index;
	 	 if(dataValue==$scope.arr.length){
	 	 	$scope.hasmore=false;
	 	 }else{
	 	 	$scope.firstArr.push($scope.arr[dataValue]);
	 	 	$scope.$broadcast('scroll.infiniteScrollComplete');
	 	 }
	 	 console.log(dataValue);
	 	 
	 }
	$scope.goback=function(){
		window.location="#/tab/zhuangti"
	}
	
})
.controller("DesignerCtrl",function($scope,$stateParams,designer){
	$scope.id=$stateParams.designerId
	console.log($scope.id)
	$scope.arr=designer

	for(var i=0;i<$scope.arr.length;i++){
		if($scope.arr[i].designerId==$scope.id){
			console.log(designer[i].arr)
			$scope.title=designer[i].arr[0].title
			$scope.data=designer[i].arr[1].img
			console.log($scope.data)
	}
	}
	$scope.goback=function(){
	
		window.location="#/tab/design"
	}
})
.controller("GuangtotalCtrl",function($scope,$ionicHistory,$stateParams,goods_list,$timeout,$ionicLoading){
//$scope.$on('$ionicView.beforeEnter', function() {//视图进入
//         if (location.href.indexOf("?xyz=")<0){
//		    	window.location.reload();//页面刷新一次
//			 location.href=location.href+"?xyz="+Math.random();
//			 }
//    });

$scope.hasmore=true;
	$scope.id=$stateParams.myId
	$scope.list=goods_list;
	
	for(var i=0;i<$scope.list.length;i++){
		if($scope.list[i].id==$scope.id){
			$scope.arr=[];
			$scope.firstArr=[];
		$scope.listData=$scope.list[i]
		console.log($scope.listData)
		for(var j=0;j<$scope.listData.arr.length;j++){
			if((j-1)%2==0){
				var listArr=[]
			listArr.push($scope.listData.arr[j-1],$scope.listData.arr[j])	
				$scope.arr.push(listArr)
			}
			
			
			
		}
		$scope.firstArr.push($scope.arr[1],$scope.arr[2],$scope.arr[3])
		console.log($scope.firstArr)
		}
	}
	 $scope.index=3;
	 $scope.doRefresh=function(){
	 	$ionicLoading.show()
	 	$timeout(function(){
	 	$scope.firstArr.unshift($scope.arr[0]);
	 	$scope.$broadcast('scroll.refreshComplete');
	 	$ionicLoading.hide()
	 	},1000)
	 }
	 $scope.loadMore = function () { 
	$timeout(function(){
		$scope.index++; 
      loadajax(); 
	},1000)
      
    }
	 function loadajax(){
	 	 var dataValue = $scope.index;
	 	 if(dataValue==$scope.arr.length){
	 	 	$scope.hasmore=false;
	 	 }else{
	 	 	$scope.firstArr.push($scope.arr[dataValue]);
	 	 	$scope.$broadcast('scroll.infiniteScrollComplete');
	 	 }
	 	 console.log(dataValue);
	 	 
	 }
	$scope.goback=function(){
		window.location="#/tab/guang"
	}
	
})
.directive('hideTabs', function($rootScope) {
    return {
        restrict: 'A',
        link: function(scope, element, attributes) {
            scope.$on('$ionicView.beforeEnter', function() {
                scope.$watch(attributes.hideTabs, function(value){
                    $rootScope.hideTabs = value;
                });
            });

            scope.$on('$ionicView.beforeLeave', function() {
                $rootScope.hideTabs = false;
            });
        }
    };
});

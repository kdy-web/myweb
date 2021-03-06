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
		},2000)
		
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
		
		
		$scope.first=function(){
			window.location="#/tab/first"
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
.controller('ChatsCtrl',function($scope,designer,goods_list){
	$scope.goSystem=function(){
		window.location="#/tab/chatssystem"
	}
	$scope.data=designer[0].arr[1].img
	$scope.searchdata=[];
	
	for(var i=0;i<designer[0].arr[1].img.length;i++){
		$scope.searchdata.push(designer[0].arr[1].img[i])
		$scope.searchdata[i].img=goods_list[0].arr[i].src
		$scope.searchdata[i].title=goods_list[0].arr[i].title
	}
   for(var j=0;j<designer[1].arr[1].img.length;j++){
		$scope.searchdata.push(designer[1].arr[1].img[j])
		$scope.searchdata[j+5].img=goods_list[1].arr[j].src
		$scope.searchdata[j+5].title=goods_list[1].arr[j].title
	}
  
   
	
console.log($scope.searchdata)
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
	$scope.goSystem=function(){
  	window.location="#/tab/guangsystem"
  }
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
  },10)
 
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

.controller('MineCtrl', function($scope,$ionicModal,guide,$rootScope,sex) {
	$scope.sexData=sex
	$scope.order=function(){
		window.location="#/tab/order"
	}
$scope.gocar=function(){
	window.location="#/tab/carmine"
}
	$scope.goruzhu=function(){
		window.location="#/tab/ruzhu"
	}
	 $ionicModal.fromTemplateUrl('templates/modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });
	$scope.openModal=function(){
		 $scope.modal.show();
	}
	$scope.youhui=function(){
		window.location="#/tab/youhui"
	}
	
	if(guide.get("person")){
		$rootScope.logined=true;
		var x=JSON.parse(guide.get("message"));
		$rootScope.src=x.src
		$rootScope.name=x.name
		$rootScope.sex=x.sex
		console.log(x)
		for(var i=0;i<$scope.sexData.length;i++){
			if($rootScope.sex==$scope.sexData[i].sex){
				$rootScope.sexImg=$scope.sexData[i].src
			}
		}
	}else{
		$rootScope.src="img/adam.jpg"
		$rootScope.name="用户名	"
		$rootScope.login=true;
	}

  $scope.goSystem=function(){
  	window.location="#/tab/minesystem"
  }
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
	    		   var n=28;
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
      		 var n=36;
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
	
}).controller("JingxuanCtrl",function($scope,$stateParams,goods_list,$timeout,$ionicLoading){
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
	$scope.godetails=function(id){
		console.log(1)
	window.location="#/tab/details/"+id
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
.controller("SystemCtrl",function($scope){
	$scope.hash=window.location.hash
	console.log($scope.hash)
	$scope.goback=function(){
		window.history.back()
	}
})
.controller("TaskCtrl",function($scope,guide,$rootScope,sex){
    $scope.obj={};
    $scope.sexdata=sex
 $scope.doLogin=function(){
 	if(!guide.get("message")){
	$scope.person={
		src:"img/adam.jpg",
		date:"1970-01-01",
		sex:"男",
		name:"用户名"
	};
	$rootScope.sex=$scope.person.sex
	}else{
		$scope.person=guide.get("message")
		$scope.message=JSON.parse(message)
		
	}
var value=JSON.stringify($scope.obj)
var message=JSON.stringify($scope.person)
 	
 	guide.set("person",value)
 
 guide.set("message",message)
 for(var i=0;i<$scope.sexdata.length;i++){
			if($scope.sexdata[i].sex==$rootScope.sex){
				$rootScope.sexImg=$scope.sexdata[i].src
			}
		}
 	
 		$scope.modal.hide();
 		$rootScope.logined=true;
 		$rootScope.login=false;
 }
 $scope.login=true;
 	$scope.shiqu=function(){
 		if($scope.obj.password=="" || $scope.obj.name==""){
 			$scope.login=true;
 			
 		
 	}else{
 		$scope.login=false;
 	
 		
 	}
 		
 	}
 		
 		$scope.close=function(){
 			$scope.modal.hide();
 		}
 		
 })
.controller("RuzhuCtrl",function($scope,$ionicPopup,$ionicModal){
	
	$ionicModal.fromTemplateUrl('templates/phone.html', {
    scope: $scope,
    animation: 'slide-in-right'
  }).then(function(modal) {
    $scope.modal = modal;
  });
  console.log($scope.modal)
	$scope.goback=function(){
		window.location="#/tab/mine"
	}

	
	$scope.showConfirm = function() {
		 var confirmPopup = $ionicPopup.confirm({
       title: '开店需要先绑定手机哟！',
        buttons: [{ //Array[Object] (可选)。放在弹窗footer内的按钮。
    text: '取消',
    type: 'positive',
    onTap: function(e) {
      // 当点击时，e.preventDefault() 会阻止弹窗关闭。
//    e.preventDefault();
    }
  }, {
    text: '绑定手机',
    type: 'positive',
    onTap: function(e) {
    	
    
      $scope.modal.show()
     
    }
  }]
      
     });
     
     confirmPopup.then(function(res) {
     	
     	
     	
       if(res) {
       	 console.log('You are not sure');
       
       } else {
        
       }
     });
   };
}).controller("bangCtrl",function($scope,$ionicPopup,guide,$rootScope){
	$scope.obj={}
	$scope.arr={};
	 $scope.showAlert = function() {
     var alertPopup = $ionicPopup.alert({
       title: '手机号错误'
    
     });
    
   };
	var rex= /^0{0,1}(13[0-9]|15[7-9]|153|156|18[7-9])[0-9]{8}$/
	$scope.queren=function(){
		$scope.arr.number=$scope.obj.number
		if(rex.test($scope.arr.number)){
			$rootScope.telephoneData=$scope.arr.number
			var number=JSON.stringify($scope.arr)
			guide.set("tel",number)
			$scope.modal.hide()
		}else{
			console.log(2)
			 $scope.showAlert()

		}
		
	}
	$scope.Confirm = function() {
     var confirmPopup = $ionicPopup.confirm({
       title: '返回将中断判断流程,确认返回？',
        buttons: [{ //Array[Object] (可选)。放在弹窗footer内的按钮。
    text: '返回',
    type: 'positive',
    onTap: function(e) {
    	$scope.modal.hide()
      // 当点击时，e.preventDefault() 会阻止弹窗关闭。
//    e.preventDefault();
    }
  }, {
    text: '取消',
    type: 'positive',
    onTap: function(e) {
      // 返回的值会导致处理给定的值。
     
    }
  }]
      
     });
     confirmPopup.then(function(res) {
     	
     	
     	
     });
   };
	
	
	
})
.controller("YouhuiCtrl",function($scope){
	$scope.goback=function(){
		window.location="#/tab/mine"
		
	}
})
.controller("AdviceCtrl",function($scope,$rootScope){
	$scope.$on('$ionicView.beforeEnter',function(){
		   if (location.href.indexOf("?xyz=")<0){
		    	window.location.reload();//页面刷新一次
			 location.href=location.href+"?xyz="+Math.random();
			 }

	})
		document.getElementById("textarea").focus()
	
	$scope.goback=function(){
		window.location="#/tab/mine"
		
	}
	
	
})
.controller("OrderCtrl",function($scope,$ionicModal){
	 $ionicModal.fromTemplateUrl('templates/order_tuihuo.html', {
    scope: $scope,
    animation: 'slide-in-right'
  }).then(function(modal) {
    $scope.modal = modal;
  });
	
	
	$('.order_nav ul  li').eq(0).css({"color": "#d2a919"})
	 var swiper = new Swiper('.order_slide',{
	 	speed:300,
	 	autoHeight:true,
        autoplayDisableOnInteraction:false,
	 	onSlideChangeEnd:function(swiper){
				var x=swiper.activeIndex
				var left;
				if(x==0){
					$(".order_heng").css("width","0.6rem")
					left="6%"
				}else{
					$(".order_heng").css("width","1rem")
					 left=(x*20+3.5)+"%"
				}
				
				$(".order_heng").animate({"left":left},100)

$('.order_nav ul  li').eq(x).css({"color": "#d2a919"}).siblings().css({"color": "#161616"})	
   
}
	 });
	$('.order_nav ul  li').click(function(){
			var index=$(this).index()
			swiper.slideTo(index,300)
		})
	
	$scope.goback=function(){
		window.location="#/tab/mine"
		
	}
})
.controller("OrdertuihuoCtrl",function($scope){
	$scope.goback=function(){
		$scope.modal.hide()
		
	}
})
.controller("SetCtrl",function($scope,guide,$ionicModal,$rootScope){
	$scope.quit=function(){
		guide.remove("message")
		guide.remove("person")
		guide.remove("tel")
			$scope.modal.show()
	}
	$scope.goback=function(){
		window.location="#/tab/mine"
		
	if(guide.get("person")){
		$rootScope.logined=true;
		$rootScope.login=false;
	}else{
			$rootScope.logined=false;
		$rootScope.login=true;
	}

	}
	 $ionicModal.fromTemplateUrl('templates/modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });
	$scope.message=function(){
		if(guide.get("person")){
				window.location="#/tab/message"
		}else{
			$scope.modal.show()
		}
	
	}
})
.controller("MessageCtrl",function($scope,guide,$rootScope,$timeout,$ionicModal){
	$ionicModal.fromTemplateUrl('templates/phone.html', {
    scope: $scope,
    animation: 'slide-in-right'
  }).then(function(modal) {
    $scope.modal = modal;
  });
  console.log($scope.modal)
	$scope.goback=function(){
		window.location="#/tab/mine"
	}
	$scope.telephone={};
if(!guide.get("tel")){

	$rootScope.telephoneData="未绑定"
}else{
	$rootScope.telephoneData=JSON.parse(guide.get("tel")).number
	
	console.log($scope.telephone.data)
}
$scope.gotel=function(){
	if(!guide.get("tel")){
		 $scope.modal.show()
	}
	
}

	$scope.toimg=function(){
		window.location="#/tab/img"
	}
	$scope.todate=function(){
		window.location="#/tab/date"
	}
	var x=JSON.parse(guide.get("message"))
	console.log(x)
	
		
	$rootScope.src=x.src
	$rootScope.name=x.name
	$rootScope.sex=x.sex
	console.log($rootScope.name)

	$scope.toname=function(){
		window.location="#/tab/name"
	}
	$scope.tosex=function(){
		window.location="#/tab/sex"
	}
	$scope.goback=function(){
		window.location="#/tab/set"
		
	}
})
.controller('ImgCtrl',function(guide,$scope,img,$rootScope){
	
	$scope.img=img
	$scope.file=function(src){
	var x=JSON.parse(guide.get("message"))
	x.src=src
	$rootScope.src=x.src
	guide.set("message",JSON.stringify(x))
		window.location="#/tab/message"
	}
	$scope.goback=function(){
		window.location="#/tab/message"
	}
})
.controller("NameCtrl",function($scope,guide,$rootScope){
	$scope.$on('$ionicView.beforeEnter', function() {//视图进入
           if (location.href.indexOf("?xyz=")<0){
		    	window.location.reload();//页面刷新一次
			 location.href=location.href+"?xyz="+Math.random();
			 }
      });
	document.getElementById("nameChange").focus()
	var x=JSON.parse(guide.get("message"))
	$scope.obj={}
	$scope.obj.name=x.name
	console.log($scope.obj.name)
	$scope.goback=function(){
		window.location="#/tab/message"
	}
	$scope.save=function(){
		console.log($scope.obj.name)
		x.name=$scope.obj.name
		
	guide.set("message",JSON.stringify(x))
	console.log(x)
	$rootScope.name=$scope.obj.name
	window.location="#/tab/message"
	}
})
.controller("SexCtrl",function($scope,$rootScope,guide,sex){
	var x=JSON.parse(guide.get("message"))
	
	$scope.data=sex
	console.log($scope.data)
	if(x.sex==$scope.data[0].sex){
		console.log(1)
		$scope.obj={
		 clientSide: '男'
	}
	}else{
		$scope.obj={
		 clientSide: '女'
	}
	}
	console.log($scope.obj.clientSide)
	$scope.sexchange=function(item){
		$rootScope.sex=item.sex
		
	}
	$scope.goback=function(){
		window.location="#/tab/message"
	}
	$scope.save=function(){
		x.sex=$rootScope.sex
		console.log(x)
		guide.set("message",x)
		for(var i=0;i<$scope.data.length;i++){
			if($scope.data[i].sex==$rootScope.sex){
				$rootScope.sexImg=$scope.data[i].src
			}
		}
		window.location="#/tab/message"
	}
})
.controller("DateCtrl",function($scope,year,day,month,guide){
	$scope.year=year;
	$scope.month=month;
	$scope.day=day;
	var x=JSON.parse(guide.get("message"))
	var y=x.date.split("-")
	console.log(y)
$scope.obj={
	yeardate:y[0],
	monthdate:y[1],
	daydate:y[2]
}
$scope.change=function(item){
	console.log(item)
}
$scope.save=function(){
		
		x.date=$scope.obj.yeardate+"-"+$scope.obj.monthdate+"-"+$scope.obj.daydate
		console.log(x.date)
	guide.set("message",JSON.stringify(x))
	console.log(x)
	$rootScope.name=$scope.obj.name
	window.location="#/tab/message"
	}


})

.controller("DetailsCtrl",function($rootScope,guide,dis,img,$scope,$stateParams,details,goods_list,$ionicScrollDelegate){
	
  
   $scope.imgxihuan=img
   $scope.details_des={
   	color:"#db9e21"
   }
   $scope.imgbox=true
   $scope.godes=function(){
   	$('.details_heng').animate({"left":"17%","width":"1.3rem"})
   	 $scope.details_des={
   	color:"#db9e21"
   }
   	 	$scope.details_dis={
   			color:"#333333"
   	}
   	 $scope.imgbox=true
   	 	 $scope.disbox=false
   }
   
     $scope.godis=function(){
   	 $scope.details_des={
   	color:"#333333"
   }
   	  	$('.details_heng').animate({"left":"68%","width":"1rem"})
   	$scope.details_dis={
   			color:"#db9e21"
   	}
   	 $scope.imgbox=false
   	 	 $scope.disbox=true
   }
   $scope.opacity=0;
 
   
  $("#scrollone").scroll(function(){
  	
  	
  	$scope.opacity=$ionicScrollDelegate.$getByHandle('small').getScrollPosition().top/40
  	
  	if($ionicScrollDelegate.$getByHandle('small').getScrollPosition().top>35){
  		console.log(1)
  		 $scope.top={"background":"rgba(255,255,255,1)"}
  		$scope.button={
  			opacity:1,
  			background:"#ffffff"
  		}
  		$('.details_top').children("button").removeClass("light").addClass("dark")
  	}else{
  		
  		if($scope.opacity<0){
  			$scope.opacity=0
  		}else{
  			$scope.opacity=$ionicScrollDelegate.$getByHandle('small').getScrollPosition().top/40
  		}
  		console.log($scope.opacity)
  		 $scope.top={"background":"rgba(255,255,255,"+$scope.opacity+")"}
  		 $scope.button={
  	opacity:1-$scope.opacity,
  	background:'#696a6e'
  }
  		 $('.details_top').children("button").removeClass("dark").addClass("light")
  	}
  	
  	if($ionicScrollDelegate.$getByHandle('small').getScrollPosition().top>$ionicScrollDelegate.$getByHandle('small').getScrollView().__maxScrollTop){
  			
  			mySwiperOne.slideTo(1)
  	}
  	
  })
    $("#scrolltwo").scroll(function(){
    	
  	if($ionicScrollDelegate.$getByHandle('big').getScrollPosition().top<0){
  		
  			mySwiperOne.slideTo(0)
  	}

  })
	  var mySwiperOne = new Swiper('.details_swiper', {
    initialSlide :0,
	    observer:true,//修改swiper自己或子元素时，自动初始化swiper
	    observeParents:true,//修改swiper的父元素时，自动初始化swiper
        paginationClickable: true,
        direction: 'vertical'

    });
    mySwiperOne.detachEvents();
    var mySwiperTwo = new Swiper('.details_top_swiper', {
    initialSlide :0,
	    observer:true,//修改swiper自己或子元素时，自动初始化swiper
	    observeParents:true,//修改swiper的父元素时，自动初始化swiper
        paginationClickable: true,
          pagination: '.swiper-pagination'
     

    });
    $scope.dis=dis
$scope.goods_list=goods_list;
	$scope.details=details
	$scope.goods_id=$stateParams.goods_id;
	console.log($scope.goods_id)
	for(var i=0;i<$scope.goods_list.length;i++){
		for(var j=0;j<$scope.goods_list[i].arr.length;j++){
		
			if($scope.goods_list[i].arr[j].goods_id==$scope.goods_id){
				$scope.data=$scope.goods_list[i].arr[j]
				$scope.bigdata=$scope.goods_list[i]
				$rootScope.id=$scope.goods_list[i].id
				console.log($scope.goods_list[i].id)
				for(var h=0;h<$scope.bigdata.arr.length;h++){
		if($scope.bigdata.arr[h].goods_id==$scope.goods_id){
			console.log(1)
			$scope.bigdata.arr.splice(h,1)
		$scope.more=$scope.bigdata.arr.slice(0,6)
		}
	}
			}
		}
	}
	
	for(var k=0;k<$scope.details.length;k++){
		if($scope.details[k].goods_id==$scope.goods_id){
			$scope.imgData=$scope.details[k]
			
		}
	}
	for(var z=0;z<$scope.dis.length;z++){
		if($scope.dis[z].goods_id==$scope.goods_id){
			$scope.disdata=$scope.dis[z].arr;
			console.log($scope.disdata)
		}
	}
	
	var min=new Date().getMinutes()
	var month=new Date().getMonth()+1
	if(month<10){
		month="0"+month
	}
	var hour=new Date().getHours()
    var day=new Date().getDate()
	
	$scope.newdate=month+"月"+day+"日 "+hour+":"+min
	console.log($scope.newdate)
	$scope.send=function(){
		$scope.obj={
		
	}
   $scope.message=JSON.parse(guide.get("message"))
		var newobj={}
		newobj.img=$scope.message.src;
		newobj.name=$scope.message.name;
		newobj.dis=$scope.obj.str;
		newobj.time=$scope.newdate;
		$scope.obj.str=""
		console.log(newobj)
		$scope.disdata.unshift(newobj)
		$scope.imgData.discount++
	}
	
	if(!guide.get("shopping")){
			guide.set("shopping","[]")
			$scope.shoppingdata=JSON.parse(guide.get("shopping"))
		}else{
			$scope.shoppingdata=JSON.parse(guide.get("shopping"))
		}
	
	$scope.addcart=function(){
	
		function checkishas(id){
	
		var ext=false;
		for(var i=0;i<$scope.shoppingdata.length;i++){
			if($scope.shoppingdata[i].id==$scope.goods_id){
				ext=true;
				break;
			}	
		}
		return ext;
	}
	function updateNum(id){
	
	for(var i=0;i<$scope.shoppingdata.length;i++){
		if($scope.shoppingdata[i].id==$scope.goods_id){
			$scope.shoppingdata[i].pcount++;
		}
	}
	var lisobj=JSON.stringify($scope.shoppingdata);
	guide.set("shopping",lisobj);
	
}	
		
		
		
		if(checkishas($scope.goods_id)){
			updateNum($scope.goods_id)	
		}else{
			
				console.log(1)
			var  shoppingobj={
			id:$scope.goods_id,
			name:$scope.imgData.name,
			brand:$scope.data.name,
			src:$scope.data.src,
			pcount:1,
			price:$scope.data.price
		     }
			$scope.shoppingdata.push(shoppingobj)	
			var lisobj=JSON.stringify($scope.shoppingdata);
	        guide.set("shopping",lisobj);
		}
	
		
		console.log($scope.shoppingdata)
		
		guide.set("shopping",JSON.stringify($scope.shoppingdata))
		var str="<img src='"+$scope.data.src+"'/>"
		$(str).addClass("newimg").appendTo("body");
		$(".newimg").animate({"bottom":'1.5rem'},200,function(){
			$(this).animate({"bottom":"11rem","transform":"rotate(1080deg)","left":"5rem"},500,function(){
				$(this).hide()
			})
		})
	
		
	}
	$scope.goback=function(){
		window.location="#/tab/jingxuan/"+$rootScope.id
	}
	$scope.gocar=function(id){
		window.location="#/tab/car/"+id
	}
})
.controller("CarCtrl",function($scope,guide,$stateParams,$ionicModal,$rootScope,$timeout){
	 $ionicModal.fromTemplateUrl('templates/modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });
	
	
	$scope.goback=function(){
		window.history.back()
	}
	if(!guide.get("shopping")){
			guide.set("shopping","[]")
			$scope.shoppingdata=JSON.parse(guide.get("shopping"))
		}else{
			$scope.shoppingdata=JSON.parse(guide.get("shopping"))
		}
		$scope.obj={};
		$scope.total="0.00"
	 console.log($scope.shoppingdata)
	 $scope.show=function(id){
	 
	 	$scope.modal.show(id)
	 	$rootScope.modalvalue=id
	 for(var i=0;i<$scope.shoppingdata.length;i++){
	 	if($scope.shoppingdata[i].id==$rootScope.modalvalue){
	 		$scope.obj.number=$scope.shoppingdata[i].pcount
	 		
	 	}
	 }
	 
	 }
	$scope.jian=function(){
		if($scope.obj.number==1){
			$scope.obj.number==1
		}else{
			$scope.obj.number--
		}
	}
	$scope.jia=function(){
		
			$scope.obj.number++
		
	}
	$scope.confirm=function(){
		console.log($rootScope.modalvalue)
		for(var i=0;i<$scope.shoppingdata.length;i++){
			if($scope.shoppingdata[i].id==$rootScope.modalvalue){
				 $scope.shoppingdata[i].pcount=$scope.obj.number
		         guide.set("shopping",JSON.stringify($scope.shoppingdata))
		         $scope.modal.hide()
			}
		}
		      gettotal()  
	         }
	
	
	var checkall=document.getElementById("checkall")
	var checklis=document.getElementsByClassName("checkbox")
	$timeout(function(){
		console.log(checklis)
	for(var g=0;g<checklis.length;g++){
	checklis[g].onchange=function(){
		ischeckAll()
		gettotal()
	}
	}
	},1)
	
	$timeout(function(){
	checkall.onchange=function(){
		for(var i=0;i<checklis.length;i++){
			checklis[i].checked=checkall.checked
			
		}
		gettotal()
	}
	
	},1)	

	function ischeckAll(){
  	var flag=true;
  	for(var i=0;i<checklis.length;i++){
  		if(checklis[i].checked==false){
  			flag=false;
  		}
  	}
	  	if(flag){
	  		checkall.checked=true;
	  	}else{
	  		checkall.checked=false;
	  	}	
  }
	function gettotal(){
		var sum=0;
		$(".checkbox").each(function(i){
		
			if($(".checkbox").eq(i).attr("checked")==true){
 				var total=$scope.shoppingdata[i].price*$scope.shoppingdata[i].pcount
 				sum+=Number(total)
 			}
		})
		
		$scope.total=sum
		console.log($scope.total)
	}

}).controller("FirstCtrl",function($scope,first){
	$scope.first=first
	$scope.goback=function(){
		window.location="#/tab/zhuanti"
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

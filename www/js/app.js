// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function(){
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider,$ionicConfigProvider) {
 /*用于修改安卓tab居下 （在参数里要加入$ionicConfigProvider）*/
  $ionicConfigProvider.platform.ios.tabs.style('standard');
  $ionicConfigProvider.platform.ios.tabs.position('bottom');
  $ionicConfigProvider.platform.android.tabs.style('standard');
  $ionicConfigProvider.platform.android.tabs.position('standard');
 
  $ionicConfigProvider.platform.ios.navBar.alignTitle('center');
  $ionicConfigProvider.platform.android.navBar.alignTitle('center');

  $ionicConfigProvider.platform.ios.backButton.previousTitleText('').icon('ion-ios-arrow-thin-left');
  $ionicConfigProvider.platform.android.backButton.previousTitleText('').icon('ion-android-arrow-back');

  $ionicConfigProvider.platform.ios.views.transition('ios');
  $ionicConfigProvider.platform.android.views.transition('android');
  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.zhuanti', {
    url: '/zhuanti',
    views: {
      'tab-zhuanti': {
        templateUrl: 'templates/tab-zhuanti.html',
        controller: 'ZhuantiCtrl'
      }
    }
  })

  .state('tab.design', {
      url: '/design',
      views: {
        'tab-design': {
          templateUrl: 'templates/tab-design.html',
          controller: 'DesignCtrl'
        }
      }
  })
 .state('tab.chats',{
      url: '/chats',
      views: {
        'tab-chats': {
          templateUrl: 'templates/tab-chats.html',
          controller: 'ChatsCtrl'
        }
      }
    })
  .state('tab.guang', {
    url: '/guang',
    views: {
      'tab-guang': {
        templateUrl: 'templates/tab-guang.html',
        controller: 'GuangCtrl'
      }
    }
  })
  .state('tab.mine', {
    url: '/mine',
    views: {
      'tab-mine': {
        templateUrl: 'templates/tab-mine.html',
        controller: 'MineCtrl'
      }
    }
  })
   .state('tab.slide', {
    url: '/slide/:myId',
    views: {
      'tab-zhuanti': {
        templateUrl: 'templates/tab-slide.html',
        controller: 'SlideCtrl'
      }
    }
  }) .state('tab.jingxuan', {
    url: '/jingxuan/:myId',
    cache:false,
    views: {
      'tab-zhuanti': {
        templateUrl: 'templates/tab-jingxuan.html',
        controller: 'JingxuanCtrl'
      }
    }
  })
.state('tab.designer', {
    url: '/designer/:designerId',
    views: {
      'tab-design': {
        templateUrl: 'templates/tab-designer.html',
        controller: 'DesignerCtrl'
      }
    }
  })
.state('tab.guangtotal', {
    url: '/guangtotal/:myId',
    views: {
      'tab-guang': {
        templateUrl: 'templates/tab-guangtotal.html',
        controller: 'GuangtotalCtrl'
      }
    }
  })
.state("tab.minesystem",{
	 url: '/minesystem',
    views: {
      'tab-mine': {
        templateUrl: 'templates/tab-system.html',
        controller: 'SystemCtrl'
      }
    }
	
})
.state("tab.chatssystem",{
	 url: '/chatssystem',
    views: {
      'tab-chats': {
        templateUrl: 'templates/tab-system.html',
        controller: 'SystemCtrl'
      }
    }
	
})
.state("tab.guangsystem",{
	 url: '/guangsystem',
    views: {
      'tab-guang': {
        templateUrl: 'templates/tab-system.html',
        controller: 'SystemCtrl'
      }
    }
	
})
.state("tab.ruzhu",{
	 url: '/ruzhu',
    views: {
      'tab-mine': {
        templateUrl: 'templates/tab-ruzhu.html',
        controller: 'RuzhuCtrl'
      }
    }
	
})
.state("tab.youhui",{
	 url: '/youhui',
    views: {
      'tab-mine': {
        templateUrl: 'templates/tab-youhui.html',
        controller: 'YouhuiCtrl'
      }
    }
	
})
.state("tab.advice",{
	 url: '/advice',
	 cache:true,
    views: {
      'tab-mine': {
        templateUrl: 'templates/tab-advice.html',
        controller: 'AdviceCtrl'
      }
    }
	
})
.state("tab.order",{
	 url: '/order',
	 
    views: {
      'tab-mine': {
        templateUrl: 'templates/tab-order.html',
        controller: 'OrderCtrl'
      }
    }
	
})
.state("tab.set",{
	 url: '/set',
	 
    views: {
      'tab-mine': {
        templateUrl: 'templates/tab-set.html',
        controller: 'SetCtrl'
      }
    }
	
})
.state("tab.message",{
	 url: '/message',
	 
    views: {
      'tab-mine': {
        templateUrl: 'templates/tab-message.html',
        controller: 'MessageCtrl'
      }
    }
	
})
.state("tab.img",{
	 url: '/img',
	 
    views: {
      'tab-mine': {
        templateUrl: 'templates/tab-img.html',
        controller: 'ImgCtrl'
      }
    }
	
})
.state("tab.name",{
	 url: '/name',
	 
    views: {
      'tab-mine': {
        templateUrl: 'templates/tab-name.html',
        controller: 'NameCtrl'
      }
    }
	
})
.state("tab.sex",{
	 url: '/sex',
	 
    views: {
      'tab-mine': {
        templateUrl: 'templates/tab-sex.html',
        controller: 'SexCtrl'
      }
    }
	
})
.state("tab.date",{
	 url: '/date',
	 
    views: {
      'tab-mine': {
        templateUrl: 'templates/tab-date.html',
        controller: 'DateCtrl'
      }
    }
	
})
.state("tab.details",{
	 url: '/details/:goods_id',
	 
    views: {
      'tab-zhuanti': {
        templateUrl: 'templates/tab-details.html',
        controller: 'DetailsCtrl'
      }
    }
	
})
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/zhuanti');

});

angular.module('starter.services', [])
.factory("guide",function($window){
		return {
			set:function(key,value){
						$window.localStorage[key]=value;
						
			},
			get:function(key,defaultValue){
					return $window.localStorage[key] || defaultValue;
			}
			
			
		}
	
}).factory("startA",function($window){
		return {
			set:function(key,value){
						$window.sessionStorage[key]=value;
						
			},
			get:function(key,defaultValue){
					return $window.sessionStorage[key] || defaultValue;
			}
			
			
		}
	
}).factory("zhuangtiSlide",function(){
	var obj=[
	{id:"001",src:"img/Fos6GeiFY2Q2yB7EvlKACtJ2KaBF.jpg"},
	{id:"002",src:"img/FvIDuYSQ_xuLBsDj6Rnrm0GEpC3D.jpg"},
	{id:"003",src:"img/FvKhvVbNQTXjqn1f-VDf3KgKHJPq.jpg"},
	{id:"004",src:"img/QQ图片20170906151807.png"},
	{id:"005",src:"img/QQ图片20170906151605.png"},
	{id:"006",src:"img/QQ图片20170906152053.png"},
	{id:"007",src:"img/QQ图片20170906161510.png"},
		{id:"008",src:"img/QQ图片20170906161707.png"}
	]
	return obj;
}).factory("slide",function(){
	var obj=[
	{id:"001",img:[
	{src:"img/QQ图片20170906175703.png",title:"火狼牙，情侣款可选",first:"战"},
	{src:"img/Ft_ivezQ8eHpJ9u2F6c48bQEXlWL.jpg",title:"诚靛蓝，复古感十足",first:"赤"},
	{src:"img/Fj-ErTHkY_PO2-BAhLDmzYQNX6B_.jpg",title:"错落落，见证斑驳岁月",first:"错"}
	]},
	{id:"002",img:[
	{src:"img/Fsko5jGei0gmX6ztPoOpZwLfsYAi.jpg",title:"款通过层搭叠合的穿搭，展示最新的流行元素",first:"这"},
	{src:"img/FlYhvaU9FIPYxvsThlA0hFOGSZth.jpg",title:"款选用时尚军绿色特殊面料，把外套廓形和简约完美展现",first:"这"},
	{src:"img/FrfFku3FJV4WX42XNSFEvBue1i1q.jpg",title:"款选用丝绒与针织拼接，高端奢华，潮流感十足",first:"这"}
	]},
	{id:"003",img:[
	{src:"img/FsL2_pmdTPuCvfHnxj9Fbxv7Q3w1.jpg",title:"有太多的色系调和，但却低调的好看，衣服也是可以有内涵的",first:"没"},
	{src:"img/FjzonXIh1ZpLdGIbGkoGhY9b5HF3.jpg",title:"女感十足的衬衫，领口系带，袖型是灯笼袖的，不会夸张张扬，但就是美的刚刚好",first:"少"},
	{src:"img/FnjY3kX2Pzupn2PZBe8JiHCGwZFf.jpg",title:"绣的设计，搭配沉闷的酷黑色，严肃中透着一点小俏皮，袖口开阔，轻轻一扬就是整个秋天",first:"刺"}
	]},
	{id:"004",img:[
	{src:"img/Fl5QvYkNhjI1ahL6jDmaERyDdrAY.jpg",title:"庆送礼台灯",first:"婚"},
	{src:"img/FmUZVr1s9DZQeQYxn4WPpis5EwVZ.jpg",title:"一种生活态度而设计的书柜",first:"为"},
	{src:"img/FmLZzfj9wrM1l4oyDyzFbda5fl8C.jpg",title:"自然馈赠的纯净和自然的活力",first:"大"}
	]},
	{id:"005",img:[
	{src:"img/FnudbkWEHiRzH_LcsHETi-SnZ0nX.jpg",title:"色的守望，是爱情的忠诚；金色的麦穗是爱情的丰收",first:"深"},
	{src:"img/FpJyTJ78mDHV15gYwfZHEFoKA3gN.jpg",title:"彩虹穿在身上，有你就总会雨过天晴",first:"将"},
	{src:"img/FnBOR8diK5veDUkNuqBBjiQhstop.jpg",title:"搭裤子，三色可选",first:"百"}
	]},
	{id:"006",img:[
	{src:"img/FvjxPbJS4A-3TPL8n-xG6YysZgyT.jpg",title:"约淡雅的玉兰花手机壳",first:"简"},
	{src:"img/FnOB1omshQvWFjCDueGd60kIlwMZ.jpg",title:"母绿几何流苏链条手机壳,打造轻奢女神气质",first:"祖"},
	{src:"img/Fuxe7hREzjSXRXlMaIVd0utfsLpq.jpg",title:"殊菩萨心咒+降魔杵:开发潜能，消除语业，破愚智",first:"文"}
	]},
	{id:"007",img:[
	{src:"img/FqY_pK5_8S1e2QTCe6X44U6ZvGef.jpg",title:"肌肤般细腻，手感超棒的小牛皮",first:"如"},
	{src:"img/FmZo-lTAas0bUVqWlQrmCSmbEHAD.jpg",title:"活需要仪式感，用心记录生活",first:"生"},
	{src:"img/FiFF9GYvZM1t7sdt8DagsSGl6WmV.jpg",title:"铜与牛皮的搭配，才是复古的必选",first:"纯"}
	]},
	{id:"008",img:[
	{src:"img/Fu8-j2FU_s_FAzckbj_m_I7Q9o_-.jpg",title:"个人心中都有一个大圣！",first:"每"},
	{src:"img/FhjV59XuMi3O0OKygLbH87yt1jt1.jpg",title:"个人心中都有一个大圣！",first:"每"},
	{src:"img/Fmg_qwDOc2VR5Np9hIwK0Cbg-fl3.jpg",title:"个人心中都有一个大圣！",first:"每"}
	]}
	]
	return obj;
}).factory("goods_list",function(){
	var obj=[
	{id:'001',arr:[
	{title:"戒指环·开口戒指",name:"S&H",liked:"36",src:"img/FpP0Li9IY0nnsYaC7iFm0EPVfh-c.jpg"},
	{title:"项链·短款",name:"S&H",liked:"72",src:"img/Fm0ov26noqL-M08cOgV6IEUFM2uc.jpg"},
	{title:"戒指·指环",name:"S&H",liked:"81",src:"img/FkeiFD-ylnfbe95cNLgnW2e9VDhL.jpg"},
	{title:"情侣戒指·指环",name:"S&H",liked:"69",src:"img/Fqr5EoSVqVQL_QKSdvynjldd29gw.jpg"},
	{title:"项链·时尚",name:"S&H",liked:"71",src:"img/FjY0mAGujXQI65rzZ1kZbNYMPjYY.jpg"},
	{title:"情侣戒指·情侣对戒",name:"S&H",liked:"26",src:"img/Fi0NSD5D2VWegXjrH3wi8r96vJvD.jpg"},
	{title:"戒指指环·925纯银",name:"S&H",liked:"45",src:"img/FoIx9g5k4WIkO2ZNGBOymIM8wr8m.jpg"},
	{title:"戒指·925纯银",name:"S&H",liked:"65",src:"img/FsFvEaui27ZCe3xAXt4koDqgxI09.jpg"},
	{title:"戒指环·情侣戒指",name:"S&H",liked:"17",src:"img/Fj45x7nLWJ_525wCOJg49wECnU6W.jpg"},
	{title:"项链·戒指",name:"S&H",liked:"21",src:"img/Fpb9Gc4qLlw3cIse7pET7xnjXZgl.jpg"},
	{title:"项链·个性",name:"S&H",liked:"33",src:"img/FjY0mAGujXQI65rzZ1kZbNYMPjYY.jpg"},
	{title:"戒指·时尚",name:"S&H",liked:"45",src:"img/Ft6QoqTegrCVHa8AR3YC0roozgVH.jpg"}
	]},
	{id:'002',arr:[
	{title:"外套·韩版",name:"意匠心ARTIFASHION",liked:"35",src:"img/FrMVHm377K-yayYLtbmuuivz4RmR.jpg"},
	{title:"风衣·秋冬",name:"意匠心ARTIFASHION",liked:"20",src:"img/FkToIiYJgmaslyVqr--LVTizrTZY.jpg"},
	{title:"夹克衫·外套风衣",name:"意匠心ARTIFASHION",liked:"18",src:"img/Fo3WnAR093wilWs5OpwwvWQwsGJW.jpg"},
	{title:"夹克·牛仔短外套",name:"意匠心ARTIFASHION",liked:"15",src:"img/FkaX_GMGSom4EGNE62KN72oGO2FX.jpg"},
	{title:"长袖t恤·卫衣",name:"意匠心ARTIFASHION",liked:"10",src:"img/Fsy3hXXJ0jpptIhAA1BL_29G_yVB (1).jpg"},
	{title:"t恤·圆领长袖",name:"意匠心ARTIFASHION",liked:"12",src:"img/FtjokxwWIfUezOPED0r4qig8B6jh.jpg"},
	{title:"长袖上衣·卫衣女",name:"意匠心ARTIFASHION",liked:"9",src:"img/Fp9uFG-7HAJdf3y5-vC-YhxQ5jTK.jpg"},
	{title:"休闲裤·九分裤",name:"意匠心ARTIFASHION",liked:"15",src:"img/Fucm0Ggn57IZaVOqL2eFcMih49r-.jpg"},
	{title:"卫衣女·撞色",name:"意匠心ARTIFASHION",liked:"7",src:"img/FlPk_vJRWZg_wBkRISzPAKDcn5Kt.jpg"},
	{title:"卫衣女·帽衫",name:"意匠心ARTIFASHION",liked:"7",src:"img/FmOUt85jSEA2kcgSZ9kK3Y16oSyt.jpg"},
	{title:"喇叭裤·牛仔裤",name:"意匠心ARTIFASHION",liked:"7",src:"img/Ft-PI1sEpwfBo8bloOFbf02LNLH8.jpg"},
	{title:"卫衣女·个性",name:"意匠心ARTIFASHION",liked:"5",src:"img/FmkOYdm9Et7NX_-kTi2zJFsaga-T.jpg"}
	]},
	{id:'003',arr:[
	{title:"卫衣女·刺绣",name:"H&Y",liked:"88",src:"img/FuatnOZYCOGa6Uo2A-G0DreCnx6n.jpg"},
	{title:"百搭·秋装新款",name:"H&Y",liked:"59",src:"img/Fv0A0Hnh8YNEFxFL2VebLSj6-nHy.jpg"},
	{title:"夹克·休闲外套",name:"H&Y",liked:"82",src:"img/Fvz8PfQrCbx8rns5472Orw2kaHUr.jpg"},
	{title:"上衣·长袖针织衫",name:"H&Y",liked:"40",src:"img/Fr9ke8jhdnOyplqBRkAXip2sZPah.jpg"},
	{title:"休闲裤·阔腿裤",name:"H&Y",liked:"30",src:"img/FnWwUk7xsdRSf5p_B9UU2uf4iloJ.jpg"},
	{title:"长袖衬衫·休闲外套",name:"H&Y",liked:"52",src:"img/Ftv3bwKC7jCFL9eUNPoWYa8BqxnZ.jpg"},
	{title:"衬衫·百搭",name:"H&Y",liked:"56",src:"img/FsJOwIpOpRorYrVlSUA2DmBVH6qu.jpg"},
	{title:"牛仔裤长裤·喇叭裤",name:"H&Y",liked:"67",src:"img/FgOnSCcGpytBcMXVSRU1-bsvCa0O.jpg"},
	{title:"九分裤·牛仔裤",name:"H&Y",liked:"31",src:"img/FhRS8gNR2zeXXNXrAzDpKTrCpHJ5.jpg"},
	{title:"连帽·休闲外套",name:"H&Y",liked:"28",src:"img/FmMhWaGVF0m4nZcSlCXuHAg1Juzr.jpg"},
	{title:"条纹·秋装新款",name:"H&Y",liked:"24",src:"img/FmbNMKDkAZfJVfzuYMU-ipDQhhT6.jpg"},
	{title:"裤·牛仔",name:"H&Y",liked:"22",src:"img/FrnoDefYixWjMZYGzqTHJ58AMezh.jpg"}
	]},
	{id:'004',arr:[
	{title:"戒指环·开口戒指",name:"S&H",liked:"36",src:"img/FpP0Li9IY0nnsYaC7iFm0EPVfh-c.jpg"},
	{title:"项链·短款",name:"S&H",liked:"72",src:"img/Fm0ov26noqL-M08cOgV6IEUFM2uc.jpg"},
	{title:"戒指·指环",name:"S&H",liked:"81",src:"img/FkeiFD-ylnfbe95cNLgnW2e9VDhL.jpg"},
	{title:"情侣戒指·指环",name:"S&H",liked:"69",src:"img/Fqr5EoSVqVQL_QKSdvynjldd29gw.jpg"},
	{title:"项链·时尚",name:"S&H",liked:"71",src:"img/FjY0mAGujXQI65rzZ1kZbNYMPjYY.jpg"},
	{title:"情侣戒指·情侣对戒",name:"S&H",liked:"26",src:"img/Fi0NSD5D2VWegXjrH3wi8r96vJvD.jpg"},
	{title:"戒指指环·925纯银",name:"S&H",liked:"45",src:"img/FoIx9g5k4WIkO2ZNGBOymIM8wr8m.jpg"},
	{title:"戒指·925纯银",name:"S&H",liked:"65",src:"img/FsFvEaui27ZCe3xAXt4koDqgxI09.jpg"},
	{title:"戒指环·情侣戒指",name:"S&H",liked:"17",src:"img/Fj45x7nLWJ_525wCOJg49wECnU6W.jpg"},
	{title:"项链·戒指",name:"S&H",liked:"21",src:"img/Fpb9Gc4qLlw3cIse7pET7xnjXZgl.jpg"},
	{title:"项链·个性",name:"S&H",liked:"33",src:"img/FjY0mAGujXQI65rzZ1kZbNYMPjYY.jpg"},
	{title:"戒指·时尚",name:"S&H",liked:"45",src:"img/Ft6QoqTegrCVHa8AR3YC0roozgVH.jpg"}
	]},
	{id:'005',arr:[
	{title:"戒指环·开口戒指",name:"S&H",liked:"36",src:"img/FpP0Li9IY0nnsYaC7iFm0EPVfh-c.jpg"},
	{title:"项链·短款",name:"S&H",liked:"72",src:"img/Fm0ov26noqL-M08cOgV6IEUFM2uc.jpg"},
	{title:"戒指·指环",name:"S&H",liked:"81",src:"img/FkeiFD-ylnfbe95cNLgnW2e9VDhL.jpg"},
	{title:"情侣戒指·指环",name:"S&H",liked:"69",src:"img/Fqr5EoSVqVQL_QKSdvynjldd29gw.jpg"},
	{title:"项链·时尚",name:"S&H",liked:"71",src:"img/FjY0mAGujXQI65rzZ1kZbNYMPjYY.jpg"},
	{title:"情侣戒指·情侣对戒",name:"S&H",liked:"26",src:"img/Fi0NSD5D2VWegXjrH3wi8r96vJvD.jpg"},
	{title:"戒指指环·925纯银",name:"S&H",liked:"45",src:"img/FoIx9g5k4WIkO2ZNGBOymIM8wr8m.jpg"},
	{title:"戒指·925纯银",name:"S&H",liked:"65",src:"img/FsFvEaui27ZCe3xAXt4koDqgxI09.jpg"},
	{title:"戒指环·情侣戒指",name:"S&H",liked:"17",src:"img/Fj45x7nLWJ_525wCOJg49wECnU6W.jpg"},
	{title:"项链·戒指",name:"S&H",liked:"21",src:"img/Fpb9Gc4qLlw3cIse7pET7xnjXZgl.jpg"},
	{title:"项链·个性",name:"S&H",liked:"33",src:"img/FjY0mAGujXQI65rzZ1kZbNYMPjYY.jpg"},
	{title:"戒指·时尚",name:"S&H",liked:"45",src:"img/Ft6QoqTegrCVHa8AR3YC0roozgVH.jpg"}
	]},
	{id:'006',arr:[
	{title:"戒指环·开口戒指",name:"S&H",liked:"36",src:"img/FpP0Li9IY0nnsYaC7iFm0EPVfh-c.jpg"},
	{title:"项链·短款",name:"S&H",liked:"72",src:"img/Fm0ov26noqL-M08cOgV6IEUFM2uc.jpg"},
	{title:"戒指·指环",name:"S&H",liked:"81",src:"img/FkeiFD-ylnfbe95cNLgnW2e9VDhL.jpg"},
	{title:"情侣戒指·指环",name:"S&H",liked:"69",src:"img/Fqr5EoSVqVQL_QKSdvynjldd29gw.jpg"},
	{title:"项链·时尚",name:"S&H",liked:"71",src:"img/FjY0mAGujXQI65rzZ1kZbNYMPjYY.jpg"},
	{title:"情侣戒指·情侣对戒",name:"S&H",liked:"26",src:"img/Fi0NSD5D2VWegXjrH3wi8r96vJvD.jpg"},
	{title:"戒指指环·925纯银",name:"S&H",liked:"45",src:"img/FoIx9g5k4WIkO2ZNGBOymIM8wr8m.jpg"},
	{title:"戒指·925纯银",name:"S&H",liked:"65",src:"img/FsFvEaui27ZCe3xAXt4koDqgxI09.jpg"},
	{title:"戒指环·情侣戒指",name:"S&H",liked:"17",src:"img/Fj45x7nLWJ_525wCOJg49wECnU6W.jpg"},
	{title:"项链·戒指",name:"S&H",liked:"21",src:"img/Fpb9Gc4qLlw3cIse7pET7xnjXZgl.jpg"},
	{title:"项链·个性",name:"S&H",liked:"33",src:"img/FjY0mAGujXQI65rzZ1kZbNYMPjYY.jpg"},
	{title:"戒指·时尚",name:"S&H",liked:"45",src:"img/Ft6QoqTegrCVHa8AR3YC0roozgVH.jpg"}
	]},
	{id:'007',arr:[
	{title:"戒指环·开口戒指",name:"S&H",liked:"36",src:"img/FpP0Li9IY0nnsYaC7iFm0EPVfh-c.jpg"},
	{title:"项链·短款",name:"S&H",liked:"72",src:"img/Fm0ov26noqL-M08cOgV6IEUFM2uc.jpg"},
	{title:"戒指·指环",name:"S&H",liked:"81",src:"img/FkeiFD-ylnfbe95cNLgnW2e9VDhL.jpg"},
	{title:"情侣戒指·指环",name:"S&H",liked:"69",src:"img/Fqr5EoSVqVQL_QKSdvynjldd29gw.jpg"},
	{title:"项链·时尚",name:"S&H",liked:"71",src:"img/FjY0mAGujXQI65rzZ1kZbNYMPjYY.jpg"},
	{title:"情侣戒指·情侣对戒",name:"S&H",liked:"26",src:"img/Fi0NSD5D2VWegXjrH3wi8r96vJvD.jpg"},
	{title:"戒指指环·925纯银",name:"S&H",liked:"45",src:"img/FoIx9g5k4WIkO2ZNGBOymIM8wr8m.jpg"},
	{title:"戒指·925纯银",name:"S&H",liked:"65",src:"img/FsFvEaui27ZCe3xAXt4koDqgxI09.jpg"},
	{title:"戒指环·情侣戒指",name:"S&H",liked:"17",src:"img/Fj45x7nLWJ_525wCOJg49wECnU6W.jpg"},
	{title:"项链·戒指",name:"S&H",liked:"21",src:"img/Fpb9Gc4qLlw3cIse7pET7xnjXZgl.jpg"},
	{title:"项链·个性",name:"S&H",liked:"33",src:"img/FjY0mAGujXQI65rzZ1kZbNYMPjYY.jpg"},
	{title:"戒指·时尚",name:"S&H",liked:"45",src:"img/Ft6QoqTegrCVHa8AR3YC0roozgVH.jpg"}
	]},
	{id:'008',arr:[
	{title:"戒指环·开口戒指",name:"S&H",liked:"36",src:"img/FpP0Li9IY0nnsYaC7iFm0EPVfh-c.jpg"},
	{title:"项链·短款",name:"S&H",liked:"72",src:"img/Fm0ov26noqL-M08cOgV6IEUFM2uc.jpg"},
	{title:"戒指·指环",name:"S&H",liked:"81",src:"img/FkeiFD-ylnfbe95cNLgnW2e9VDhL.jpg"},
	{title:"情侣戒指·指环",name:"S&H",liked:"69",src:"img/Fqr5EoSVqVQL_QKSdvynjldd29gw.jpg"},
	{title:"项链·时尚",name:"S&H",liked:"71",src:"img/FjY0mAGujXQI65rzZ1kZbNYMPjYY.jpg"},
	{title:"情侣戒指·情侣对戒",name:"S&H",liked:"26",src:"img/Fi0NSD5D2VWegXjrH3wi8r96vJvD.jpg"},
	{title:"戒指指环·925纯银",name:"S&H",liked:"45",src:"img/FoIx9g5k4WIkO2ZNGBOymIM8wr8m.jpg"},
	{title:"戒指·925纯银",name:"S&H",liked:"65",src:"img/FsFvEaui27ZCe3xAXt4koDqgxI09.jpg"},
	{title:"戒指环·情侣戒指",name:"S&H",liked:"17",src:"img/Fj45x7nLWJ_525wCOJg49wECnU6W.jpg"},
	{title:"项链·戒指",name:"S&H",liked:"21",src:"img/Fpb9Gc4qLlw3cIse7pET7xnjXZgl.jpg"},
	{title:"项链·个性",name:"S&H",liked:"33",src:"img/FjY0mAGujXQI65rzZ1kZbNYMPjYY.jpg"},
	{title:"戒指·时尚",name:"S&H",liked:"45",src:"img/Ft6QoqTegrCVHa8AR3YC0roozgVH.jpg"}
	]}
	
	
	
	]
	return obj;
})

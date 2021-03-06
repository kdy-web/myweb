angular.module('starter.services', [])
.factory("guide",function($window){
		return {
			set:function(key,value){
						$window.localStorage[key]=value;
						
			},
			get:function(key,defaultValue){
					return $window.localStorage[key] || defaultValue;
			},
			remove:function(key){
				return   $window.localStorage.removeItem(key)
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
	{id:'001',title:"九月遇见你的新饰界",name:"S&H",img:"img/img2.jpg",arr:[
	{title:"戒指环·开口戒指",name:"S&H",liked:"36",src:"img/FpP0Li9IY0nnsYaC7iFm0EPVfh-c.jpg",goods_id:"1001",price:"109.00"},
	{title:"项链·短款",name:"S&H",liked:"72",src:"img/Fm0ov26noqL-M08cOgV6IEUFM2uc.jpg",goods_id:"1002",price:"165.54"},
	{title:"戒指·指环",name:"S&H",liked:"81",src:"img/FkeiFD-ylnfbe95cNLgnW2e9VDhL.jpg",goods_id:"1003",price:"169.00"},
	{title:"情侣戒指·指环",name:"S&H",liked:"69",src:"img/Fqr5EoSVqVQL_QKSdvynjldd29gw.jpg",goods_id:"1004",price:"119.97"},
	{title:"项链·时尚",name:"S&H",liked:"71",src:"img/FjY0mAGujXQI65rzZ1kZbNYMPjYY.jpg",goods_id:"1005",price:"107.50"},
	{title:"情侣戒指·情侣对戒",name:"S&H",liked:"26",src:"img/Fi0NSD5D2VWegXjrH3wi8r96vJvD.jpg",goods_id:"1006",price:"109.00"},
	{title:"戒指指环·925纯银",name:"S&H",liked:"45",src:"img/FoIx9g5k4WIkO2ZNGBOymIM8wr8m.jpg",goods_id:"1007",price:"119.40"},
	{title:"戒指·925纯银",name:"S&H",liked:"65",src:"img/FsFvEaui27ZCe3xAXt4koDqgxI09.jpg",goods_id:"1008",price:"89.00"},
	{title:"戒指环·情侣戒指",name:"S&H",liked:"17",src:"img/Fj45x7nLWJ_525wCOJg49wECnU6W.jpg",goods_id:"1009",price:"89.18"},
	{title:"项链·戒指",name:"S&H",liked:"21",src:"img/Fpb9Gc4qLlw3cIse7pET7xnjXZgl.jpg",goods_id:"1010",price:"109.00"},
	{title:"项链·个性",name:"S&H",liked:"33",src:"img/FjY0mAGujXQI65rzZ1kZbNYMPjYY.jpg",goods_id:"1011",price:"89.00"},
	{title:"戒指·时尚",name:"S&H",liked:"45",src:"img/Ft6QoqTegrCVHa8AR3YC0roozgVH.jpg",goods_id:"1012",price:"99.00"}
	]},
	{id:'002',title:"选对和你肌肤相亲的家伙",name:"意匠心ARTIFASHION",img:"img/FtCDzYY6pqNXj82W4o-D7-jgcq3_.jpg",arr:[
	{title:"外套·韩版",name:"意匠心ARTIFASHION",liked:"35",src:"img/FrMVHm377K-yayYLtbmuuivz4RmR.jpg",goods_id:"2001",price:"109.00"},
	{title:"风衣·秋冬",name:"意匠心ARTIFASHION",liked:"20",src:"img/FkToIiYJgmaslyVqr--LVTizrTZY.jpg",goods_id:"2002",price:"29.00"},
	{title:"夹克衫·外套风衣",name:"意匠心ARTIFASHION",liked:"18",src:"img/Fo3WnAR093wilWs5OpwwvWQwsGJW.jpg",goods_id:"2003",price:"39.00"},
	{title:"夹克·牛仔短外套",name:"意匠心ARTIFASHION",liked:"15",src:"img/FkaX_GMGSom4EGNE62KN72oGO2FX.jpg",goods_id:"2004",price:"49.00"},
	{title:"长袖t恤·卫衣",name:"意匠心ARTIFASHION",liked:"10",src:"img/Fsy3hXXJ0jpptIhAA1BL_29G_yVB (1).jpg",goods_id:"2005",price:"59.00"},
	{title:"t恤·圆领长袖",name:"意匠心ARTIFASHION",liked:"12",src:"img/FtjokxwWIfUezOPED0r4qig8B6jh.jpg",goods_id:"2006",price:"69.00"},
	{title:"长袖上衣·卫衣女",name:"意匠心ARTIFASHION",liked:"9",src:"img/Fp9uFG-7HAJdf3y5-vC-YhxQ5jTK.jpg",goods_id:"2007",price:"79.00"},
	{title:"休闲裤·九分裤",name:"意匠心ARTIFASHION",liked:"15",src:"img/Fucm0Ggn57IZaVOqL2eFcMih49r-.jpg",goods_id:"2008",price:"89.00"},
	{title:"卫衣女·撞色",name:"意匠心ARTIFASHION",liked:"7",src:"img/FlPk_vJRWZg_wBkRISzPAKDcn5Kt.jpg",goods_id:"2009",price:"99.00"},
	{title:"卫衣女·帽衫",name:"意匠心ARTIFASHION",liked:"7",src:"img/FmOUt85jSEA2kcgSZ9kK3Y16oSyt.jpg",goods_id:"2010",price:"119.00"},
	{title:"喇叭裤·牛仔裤",name:"意匠心ARTIFASHION",liked:"7",src:"img/Ft-PI1sEpwfBo8bloOFbf02LNLH8.jpg",goods_id:"2011",price:"129.00"},
	{title:"卫衣女·个性",name:"意匠心ARTIFASHION",liked:"5",src:"img/FmkOYdm9Et7NX_-kTi2zJFsaga-T.jpg",goods_id:"2012",price:"139.00"}
	]},
	{id:'003',title:"裙摆飞扬 步履如风",name:"H&Y",img:"img/Fn7LkLD4mMdIYOpL0jIq-tzCqBu1.jpg",arr:[
	{title:"卫衣女·刺绣",name:"H&Y",liked:"88",src:"img/FuatnOZYCOGa6Uo2A-G0DreCnx6n.jpg",goods_id:"3001",price:"129.00"},
	{title:"百搭·秋装新款",name:"H&Y",liked:"59",src:"img/Fv0A0Hnh8YNEFxFL2VebLSj6-nHy.jpg",goods_id:"3002",price:"139.00"},
	{title:"夹克·休闲外套",name:"H&Y",liked:"82",src:"img/Fvz8PfQrCbx8rns5472Orw2kaHUr.jpg",goods_id:"3003",price:"149.00"},
	{title:"上衣·长袖针织衫",name:"H&Y",liked:"40",src:"img/Fr9ke8jhdnOyplqBRkAXip2sZPah.jpg",goods_id:"3004",price:"159.00"},
	{title:"休闲裤·阔腿裤",name:"H&Y",liked:"30",src:"img/FnWwUk7xsdRSf5p_B9UU2uf4iloJ.jpg",goods_id:"3005",price:"169.00"},
	{title:"长袖衬衫·休闲外套",name:"H&Y",liked:"52",src:"img/Ftv3bwKC7jCFL9eUNPoWYa8BqxnZ.jpg",goods_id:"3006",price:"119.00"},
	{title:"衬衫·百搭",name:"H&Y",liked:"56",src:"img/FsJOwIpOpRorYrVlSUA2DmBVH6qu.jpg",goods_id:"3007",price:"29.00"},
	{title:"牛仔裤长裤·喇叭裤",name:"H&Y",liked:"67",src:"img/FgOnSCcGpytBcMXVSRU1-bsvCa0O.jpg",goods_id:"3008",price:"309.00"},
	{title:"九分裤·牛仔裤",name:"H&Y",liked:"31",src:"img/FhRS8gNR2zeXXNXrAzDpKTrCpHJ5.jpg",goods_id:"3009",price:"149.00"},
	{title:"连帽·休闲外套",name:"H&Y",liked:"28",src:"img/FmMhWaGVF0m4nZcSlCXuHAg1Juzr.jpg",goods_id:"3010",price:"259.00"},
	{title:"条纹·秋装新款",name:"H&Y",liked:"24",src:"img/FmbNMKDkAZfJVfzuYMU-ipDQhhT6.jpg",goods_id:"3011",price:"199.00"},
	{title:"裤·牛仔",name:"H&Y",liked:"22",src:"img/FrnoDefYixWjMZYGzqTHJ58AMezh.jpg",goods_id:"3012",price:"239.00"}
	]},
	{id:'004',title:"享受不一样的灯光",name:"灯灯小镇",img:"img/Fl_BcmsFGoNQzhGsrWN5yhrxsbav.jpg",arr:[
	{title:"台灯·陶瓷",name:"灯灯小镇",liked:"478",src:"img/FmPxFM4nSteBABkncgVOsNgC0XrJ.jpg",goods_id:"4001",price:"109.00"},
	{title:"灯·个性",name:"灯灯小镇",liked:"105",src:"img/Fu4zhJysl6_7qtlthoVKARROxVb_.jpg",goods_id:"4002",price:"109.00"},
	{title:"灯·创意",name:"灯灯小镇",liked:"183",src:"img/FkzXK5mUfYbbgSyGbUQub85bu7lo.jpg",goods_id:"4003",price:"109.00"},
	{title:"灯·创意",name:"灯灯小镇",liked:"89",src:"img/FpMhUdMt52BVQpRgZkpR4YtgsAWg.jpg",goods_id:"4004",price:"109.00"},
	{title:"灯具·书桌",name:"灯灯小镇",liked:"223",src:"img/FqIgnESEtG_yX609bGJAg5gkM0H7.jpg",goods_id:"4005",price:"109.00"},
	{title:"灯·艺术",name:"灯灯小镇",liked:"18",src:"img/FsyoJ2e7_ltUK75rwCew8DG3FiHr.jpg",goods_id:"4006",price:"109.00"},
	{title:"灯·设计师",name:"灯灯小镇",liked:"204",src:"img/FlDJLDWPqrI2Wrl66pZ1zXXeVI-N.jpg",goods_id:"4007",price:"109.00"},
	{title:"台灯·落地灯",name:"灯灯小镇",liked:"26",src:"img/Fkd4DvtiGaPOTYv34iQ0XtwCffYu.jpg",goods_id:"4008",price:"109.00"},
	{title:"灯·陶瓷",name:"灯灯小镇",liked:"15",src:"img/FhszSu6NZL9gonUm-TIT4AtS5ORl.jpg",goods_id:"4009",price:"109.00"},
	{title:"灯·咖啡",name:"灯灯小镇",liked:"138",src:"img/Fur1rxcXqQjzanJH8Off_UeBqMIz.jpg",goods_id:"4010",price:"109.00"},
	{title:"灯·艺术",name:"灯灯小镇",liked:"12",src:"img/FjRL5Wt6mlvTPE_JAnNSzr2AWLCP.jpg",goods_id:"4011",price:"109.00"},
	{title:"灯·时尚",name:"灯灯小镇",liked:"6",src:"img/FrDtkGIcL8nTg_1ezsjJYxEMwKdL.jpg",goods_id:"4012",price:"109.00"}
	]},
	{id:'005',title:"让爱，从身开始",name:"北方部落",img:"img/Fr-95p5EWaqKUOWevAms7wGFPOF_.jpg",arr:[
	{title:"长袖外套·情侣",name:"北方部落",liked:"149",src:"img/FrXvR-b8zSFtUKlE6rZttUaePqEt.jpg",goods_id:"5001",price:"109.00"},
	{title:"情侣·新款秋装",name:"北方部落",liked:"28",src:"img/Fp8Mhl6n_DSiFrnC62QqmHIEJyPp.jpg",goods_id:"5002",price:"109.00"},
	{title:"上衣·百搭",name:"北方部落",liked:"64",src:"img/Fpv0tUz_2OlIQh00ni-4rXBdlHaA.jpg",goods_id:"5003",price:"109.00"},
	{title:"毛衣·情侣",name:"北方部落",liked:"42",src:"img/Fof_51dLgcpTDTY0ykgItTHmCyyK.jpg",goods_id:"5004",price:"109.00"},
	{title:"连帽卫衣·打底长袖",name:"北方部落",liked:"41",src:"img/FlCSnHh3gP1k_EffKDRr6zEGZA84.jpg",goods_id:"5005",price:"109.00"},
	{title:"上衣·连衣裙",name:"北方部落",liked:"10",src:"img/FiYlpHNHilBicnO-47iixkCMnEXA.jpg",goods_id:"5006",price:"109.00"},
	{title:"毛衣·情侣",name:"北方部落",liked:"17",src:"img/FqkDyAehPfpCVM5abnDiYoy0T2jY.jpg",goods_id:"5007",price:"109.00"},
	{title:"上衣·男夹克",name:"北方部落",liked:"37",src:"img/Frlr6ZQShyc99PiNHzRTlpCCCM6h.jpg",goods_id:"5008",price:"109.00"},
	{title:"上衣·t恤衫",name:"北方部落",liked:"53",src:"img/FtXSEQRTfX3lVj8dzXsoyN3oRtVh.jpg",goods_id:"5009",price:"109.00"},
	{title:"立领外套·棒球衫",name:"北方部落",liked:"18",src:"img/Fve_gqG2Go4Dngamuo_8JZWXzGrC.jpg",goods_id:"5010",price:"109.00"},
	{title:"上衣·秋冬新款",name:"北方部落",liked:"39",src:"img/Fn5QbptwrE075uxb-7-mrh7v31_t.jpg",goods_id:"5011",price:"109.00"},
	{title:"短袖t恤·套装",name:"北方部落",liked:"26",src:"img/FpCF30NivT-aJgxij462J0Yaxa4d.jpg",goods_id:"5012",price:"109.00"}
	]},
	{id:'006',title:"轩墨出品必属精品",name:"轩墨出品",img:"img/Ft_ePeg-mO6gT-yQj-3qHtAY49bS.jpg",arr:[
	{title:"手机壳·包",name:"轩墨出品",liked:"43",src:"img/FqW9_IwOoml2KMygUeKEE8FkmmNG.jpg",goods_id:"6001",price:"109.00"},
	{title:"包·黑色",name:"轩墨出品",liked:"36",src:"img/FsJsif9ktOY31NRA_Lefi900yAyf.jpg",goods_id:"6002",price:"109.00"},
	{title:"苹果·机壳",name:"轩墨出品",liked:"30",src:"img/FhMlj4FlXshxIsJtR4gv5PI216HU.jpg",goods_id:"6003",price:"109.00"},
	{title:"手机·包",name:"轩墨出品",liked:"17",src:"img/Fuh_T9q36Q3SQjkbU-LhQJg4hG7a.jpg",goods_id:"6004",price:"109.00"},
	{title:"手机壳·包",name:"轩墨出品",liked:"22",src:"img/FhA6J25zsV2WzOtAZRZG37NFsjSs.jpg",goods_id:"6005",price:"109.00"},
	{title:"骷髅·苹果",name:"轩墨出品",liked:"11",src:"img/FgBTah5sJlJtnce0Gw_afeRuhmBc.jpg",goods_id:"6006",price:"109.00"},
	{title:"苹果·机壳",name:"轩墨出品",liked:"17",src:"img/FpOgcEsSMa_yExyaoXYxI_IOHybI.jpg",goods_id:"6007",price:"109.00"},
	{title:"包邮·中国风",name:"轩墨出品",liked:"11",src:"img/FgMqsCznn6xxAXAU601GM_y_-V6x.jpg",goods_id:"6008",price:"109.00"},
	{title:"手机壳 ·包",name:"轩墨出品",liked:"1",src:"img/Frw_whQOhIc3fgEP9k6iC-PDpIJ_.jpg",goods_id:"6009",price:"109.00"},
	{title:"手机壳·苹果",name:"轩墨出品",liked:"40",src:"img/FkNAjNeTzYMlIUIko2nJ1E0PlaY_.jpg",goods_id:"6010",price:"109.00"},
	{title:"手机壳 ·包",name:"轩墨出品",liked:"0",src:"img/FtywQInrq4zajz_F4bw1JS--RosK.jpg",goods_id:"6011",price:"109.00"},
	{title:"苹果·链条",name:"轩墨出品",liked:"1",src:"img/Fi2aagg0KIr-eu0uyLpNxKtQNaNK.jpg",goods_id:"6012",price:"109.00"}
	]},
	{id:'007',title:"大象无形 大音希声",name:"無象",img:"img/FvuiPaoUxWiO8RjUxizsDzWX1EPT.jpg",arr:[
	{title:"腰带皮带·针扣",name:"無象",liked:"20",src:"img/FgmrGMhC8zk0jwRDan_mcJxDW5BE.jpg",goods_id:"7001",price:"109.00"},
	{title:"卡包·笔记本",name:"無象",liked:"18",src:"img/FqY_pK5_8S1e2QTCe6X44U6ZvGef.jpg",goods_id:"7002",price:"109.00"},
	{title:"皮带·腰带",name:"無象",liked:"227",src:"img/FnTZkoTIwxSOTCmRknUoRxSuQLN4.jpg",goods_id:"7003",price:"109.00"},
	{title:"钱包·卡包",name:"無象",liked:"8",src:"img/Fv9U1yxqyx2QSGLtkuBsORmi53lW.jpg",goods_id:"7004",price:"109.00"},
	{title:"腰带·皮带",name:"無象",liked:"35",src:"img/FhO6SXqUP15gce0cgupp2q5MP-Qj.jpg",goods_id:"7005",price:"109.00"},
	{title:"真皮钱包·长款",name:"無象",liked:"36",src:"img/FmZo-lTAas0bUVqWlQrmCSmbEHAD.jpg",goods_id:"7006",price:"109.00"},
	{title:"真皮腰带·百搭",name:"無象",liked:"8",src:"img/FrJY5QaV1E0nF8UqnPgmwd3i-KF3.jpg",goods_id:"7007",price:"109.00"},
	{title:"短款钱包·真皮",name:"無象",liked:"59",src:"img/FnK3wu0_fQX0Bdk5GDvD4m3ifMeW.jpg",goods_id:"7008",price:"109.00"},
	{title:"真皮腰带·皮带",name:"無象",liked:"11",src:"img/FiFF9GYvZM1t7sdt8DagsSGl6WmV.jpg",goods_id:"7009",price:"109.00"},
	{title:"腰带皮带·针扣",name:"無象",liked:"11",src:"img/FgNSMUmnBIlKYya_TCVDNkt-fYWW.jpg",goods_id:"7010",price:"109.00"},
	{title:"短款钱包·时尚",name:"無象",liked:"27",src:"img/Fo0r3wx8r04anI8_RSjUMLJsDuHm.jpg",goods_id:"7011",price:"109.00"},
	{title:"钥匙包·正品",name:"無象",liked:"1",src:"img/Ft-W8WQ3RJWeL8ueWqWqKQOEWPYD.jpg",goods_id:"7012",price:"109.00"}
	]},
	{id:'008',title:"一种不屈不挠的匠人精神",name:"S&H",img:"img/Fs49gKYjccDqplPdKfv-bW1TVg1x.jpg",arr:[
	{title:"玩偶·创意",name:"王",liked:"42",src:"img/FieGrIZ6AhD9K-4IV18FQNpfDmku.jpg",goods_id:"8001",price:"109.00"},
	{title:"口金包·材料包",name:"王",liked:"30",src:"img/FrdmCbROJLGM8bojASf-97VOxRUV.jpg",goods_id:"8002",price:"109.00"},
	{title:"包包·书包",name:"王",liked:"56",src:"img/Fmg_qwDOc2VR5Np9hIwK0Cbg-fl3.jpg",goods_id:"8003",price:"109.00"},
	{title:"手链·时尚",name:"王",liked:"5",src:"img/FqDkdv43_nnKD-flfCfw3BUyyBTq.jpg",goods_id:"8004",price:"109.00"},
	{title:"项链·配饰",name:"王",liked:"5",src:"img/FpnxkvT1NyFaH77TIrxQPVjEXRHx.jpg",goods_id:"8005",price:"109.00"},
	{title:"首饰·包",name:"王",liked:"14",src:"img/Fsr6_LolwOWBhyDVWSDeunEr6To2.jpg",goods_id:"8006",price:"109.00"},
	{title:"包·立体刺绣",name:"王",liked:"47",src:"img/FjE1DHJc0hqi4IrLY6DNE5cXARn6.jpg",goods_id:"8007",price:"109.00"},
	{title:"吊坠·饰品",name:"王",liked:"8",src:"img/Fu8-j2FU_s_FAzckbj_m_I7Q9o_-.jpg",goods_id:"8008",price:"109.00"},
	{title:"饰品·包邮",name:"王",liked:"1",src:"img/Fg1RY9OixUHna-0SHIJ5NQQolXia.jpg",goods_id:"8009",price:"109.00"},
	{title:"锁骨链·手工原创",name:"王",liked:"41",src:"img/Fii6a9W3JTkg1cgBmRyNxKn5jFGu.jpg",goods_id:"8010",price:"109.00"},
	{title:"工具·材料包",name:"王",liked:"22",src:"img/FsfZ055XcR3hs7rtS5Sguf8y8LUv.jpg",goods_id:"8011",price:"109.00"},
	{title:"花卉·纸巾盒",name:"王",liked:"10",src:"img/FnN0CchYdi4O5so4jwzcpQNyv2cg.jpg",goods_id:"8012",price:"109.00"}
	]}
	
	
	
	]
	return obj;
}).factory("design",function(){
	var obj={
		hangye:[
		[{title:"箱包",src:"img/type5.jpg",index:"0",designerId:"01"},{title:"生活家居",src:"img/type4.jpg",index:"1",designerId:"02"}],
		[{title:"女装",src:"img/type1.jpg",index:"2",designerId:"03"},{title:"男装",src:"img/type2.jpg",index:"3",designerId:"04"}],
		[{title:"鞋靴",src:"img/type6.jpg",index:"4",designerId:"05"},{title:"配饰",src:"img/type3.jpg",index:"5",designerId:"06"}]
		],
		fengge:[
		[{title:"玩具",src:"img/FoPj_NSVpQCunt4gQESCi4_RuWmv.jpg",index:"6",designerId:"07"},{title:"沙发",index:"7",src:"img/FpHbpmJmRWxfvXRAu7d3HpDVWHXU.jpg",designerId:"08"}],
		[{title:"彩",src:"img/FqXV7z91rQrrTB-6AjVyW0jBsr1l.jpg",index:"8",designerId:"09"},{title:"装饰摆件",index:"9",src:"img/FnOLth7Cmggf8C0RcLw-B21P7dYR.jpg",designerId:"10"}],
		[{title:"茶壶",src:"img/FhBSETiQ7BibdWn5NUmO5opOVjO2.jpg",index:"10",designerId:"11"},{title:"玻璃花瓶",index:"11",src:"img/FvldYjQM2niRt7O05n_WMn461F5H.jpg",designerId:"12"}]
		
		]
		
	}
	return obj;
}).factory("designer",function(){
	var obj=[
	{designerId:"01",arr:[
	{title:"箱包"},{img:[{src:"img/Fnbyip32wqFco5q4CpgmfI-yWflW.jpg",name:"Sugarmat",des:"品牌创始人",style:"简约",count:"19"},
	{src:"img/FiJn4AeBJsDyeqv7kKsgdz1KpvcX.jpg",name:"好日子设计",des:"品牌创始人、设计师",style:"潮派",count:"10"},
	{src:"img/FtWrSWnow1LIJxE3kSzFWPJec74L.jpg",name:"LEOLEE23",des:"品牌创始人",style:"",count:"7"},
	{src:"img/Fl4dTyLBqjyoncPMREvn3I4KGATn.jpg",name:"just2you",des:"家具设计师",style:"简约",count:"28"},
	{src:"img/FlH3iB5K6e_sSUS-jrubbQf7d_ka.jpg",name:"FinGreen",des:"产品设计总监",style:"日式",count:"0"}]}
	]},
	{designerId:"02",arr:[
	{title:"生活家居"},{img:[{src:"img/Flnfn_NehOyd9v0yg9eEXPIjoBRq.jpg",name:"d.o.c中原社",des:"品牌创始人、设计师",style:"甜美",count:"43"},
	{src:"img/FlqLWLzQVgU3ftncwxvQ6d3Vsz11.jpg",name:"三巷",des:"品牌创始人、设计师",style:"复古风",count:"41"},
	{src:"img/FvBXXMIH9vs1gVylTJ_244Or1H5v.jpg",name:"沐川原创",des:"品牌创始人、设计师",style:"潮派",count:"40"},
	{src:"img/Fo3a6Rolq8af6cOsNGfq3oNYsso5.jpg",name:"杲果生活",des:"品牌创始人、设计师",style:"简约",count:"50"},
	{src:"img/FvZs0-4BDzZeXpHjizbHUXAtfYdt.jpg",name:"半墨",des:"品牌创始人、设计师",style:"复古风",count:"35"}]}
	]},
	{designerId:"03",arr:[
	{title:"女装"},{img:[{src:"img/Fnbyip32wqFco5q4CpgmfI-yWflW.jpg",name:"Sugarmat",des:"品牌创始人",style:"简约",count:"19"},
	{src:"img/FiJn4AeBJsDyeqv7kKsgdz1KpvcX.jpg",name:"好日子设计",des:"品牌创始人、设计师",style:"潮派",count:"10"},
	{src:"img/FtWrSWnow1LIJxE3kSzFWPJec74L.jpg",name:"LEOLEE23",des:"品牌创始人",style:"",count:"7"},
	{src:"img/Fl4dTyLBqjyoncPMREvn3I4KGATn.jpg",name:"just2you",des:"家具设计师",style:"简约",count:"28"},
	{src:"img/FlH3iB5K6e_sSUS-jrubbQf7d_ka.jpg",name:"FinGreen",des:"产品设计总监",style:"日式",count:"0"}]}
	]},
	{designerId:"04",arr:[
	{title:"男装"},{img:[{src:"img/Flnfn_NehOyd9v0yg9eEXPIjoBRq.jpg",name:"d.o.c中原社",des:"品牌创始人、设计师",style:"甜美",count:"43"},
	{src:"img/FlqLWLzQVgU3ftncwxvQ6d3Vsz11.jpg",name:"三巷",des:"品牌创始人、设计师",style:"复古风",count:"41"},
	{src:"img/FvBXXMIH9vs1gVylTJ_244Or1H5v.jpg",name:"沐川原创",des:"品牌创始人、设计师",style:"潮派",count:"40"},
	{src:"img/Fo3a6Rolq8af6cOsNGfq3oNYsso5.jpg",name:"杲果生活",des:"品牌创始人、设计师",style:"简约",count:"50"},
	{src:"img/FvZs0-4BDzZeXpHjizbHUXAtfYdt.jpg",name:"半墨",des:"品牌创始人、设计师",style:"复古风",count:"35"}]}
	]},
	{designerId:"05",arr:[
	{title:"鞋靴"},{img:[{src:"img/Fnbyip32wqFco5q4CpgmfI-yWflW.jpg",name:"Sugarmat",des:"品牌创始人",style:"简约",count:"19"},
	{src:"img/FiJn4AeBJsDyeqv7kKsgdz1KpvcX.jpg",name:"好日子设计",des:"品牌创始人、设计师",style:"潮派",count:"10"},
	{src:"img/FtWrSWnow1LIJxE3kSzFWPJec74L.jpg",name:"LEOLEE23",des:"品牌创始人",style:"",count:"7"},
	{src:"img/Fl4dTyLBqjyoncPMREvn3I4KGATn.jpg",name:"just2you",des:"家具设计师",style:"简约",count:"28"},
	{src:"img/FlH3iB5K6e_sSUS-jrubbQf7d_ka.jpg",name:"FinGreen",des:"产品设计总监",style:"日式",count:"0"}]}
	]},
	{designerId:"06",arr:[
	{title:"配饰"},{img:[{src:"img/Flnfn_NehOyd9v0yg9eEXPIjoBRq.jpg",name:"d.o.c中原社",des:"品牌创始人、设计师",style:"甜美",count:"43"},
	{src:"img/FlqLWLzQVgU3ftncwxvQ6d3Vsz11.jpg",name:"三巷",des:"品牌创始人、设计师",style:"复古风",count:"41"},
	{src:"img/FvBXXMIH9vs1gVylTJ_244Or1H5v.jpg",name:"沐川原创",des:"品牌创始人、设计师",style:"潮派",count:"40"},
	{src:"img/Fo3a6Rolq8af6cOsNGfq3oNYsso5.jpg",name:"杲果生活",des:"品牌创始人、设计师",style:"简约",count:"50"},
	{src:"img/FvZs0-4BDzZeXpHjizbHUXAtfYdt.jpg",name:"半墨",des:"品牌创始人、设计师",style:"复古风",count:"35"}]}
	]},
	{designerId:"07",arr:[
	{title:"玩具"},{img:[{src:"img/Fnbyip32wqFco5q4CpgmfI-yWflW.jpg",name:"Sugarmat",des:"品牌创始人",style:"简约",count:"19"},
	{src:"img/FiJn4AeBJsDyeqv7kKsgdz1KpvcX.jpg",name:"好日子设计",des:"品牌创始人、设计师",style:"潮派",count:"10"},
	{src:"img/FtWrSWnow1LIJxE3kSzFWPJec74L.jpg",name:"LEOLEE23",des:"品牌创始人",style:"",count:"7"},
	{src:"img/Fl4dTyLBqjyoncPMREvn3I4KGATn.jpg",name:"just2you",des:"家具设计师",style:"简约",count:"28"},
	{src:"img/FlH3iB5K6e_sSUS-jrubbQf7d_ka.jpg",name:"FinGreen",des:"产品设计总监",style:"日式",count:"0"}]}
	]},
	{designerId:"08",arr:[
	{title:"沙发"},{img:[{src:"img/Flnfn_NehOyd9v0yg9eEXPIjoBRq.jpg",name:"d.o.c中原社",des:"品牌创始人、设计师",style:"甜美",count:"43"},
	{src:"img/FlqLWLzQVgU3ftncwxvQ6d3Vsz11.jpg",name:"三巷",des:"品牌创始人、设计师",style:"复古风",count:"41"},
	{src:"img/FvBXXMIH9vs1gVylTJ_244Or1H5v.jpg",name:"沐川原创",des:"品牌创始人、设计师",style:"潮派",count:"40"},
	{src:"img/Fo3a6Rolq8af6cOsNGfq3oNYsso5.jpg",name:"杲果生活",des:"品牌创始人、设计师",style:"简约",count:"50"},
	{src:"img/FvZs0-4BDzZeXpHjizbHUXAtfYdt.jpg",name:"半墨",des:"品牌创始人、设计师",style:"复古风",count:"35"}]}
	]},
	{designerId:"09",arr:[
	{title:"彩"},{img:[{src:"img/Fnbyip32wqFco5q4CpgmfI-yWflW.jpg",name:"Sugarmat",des:"品牌创始人",style:"简约",count:"19"},
	{src:"img/FiJn4AeBJsDyeqv7kKsgdz1KpvcX.jpg",name:"好日子设计",des:"品牌创始人、设计师",style:"潮派",count:"10"},
	{src:"img/FtWrSWnow1LIJxE3kSzFWPJec74L.jpg",name:"LEOLEE23",des:"品牌创始人",style:"",count:"7"},
	{src:"img/Fl4dTyLBqjyoncPMREvn3I4KGATn.jpg",name:"just2you",des:"家具设计师",style:"简约",count:"28"},
	{src:"img/FlH3iB5K6e_sSUS-jrubbQf7d_ka.jpg",name:"FinGreen",des:"产品设计总监",style:"日式",count:"0"}]}
	]},
	{designerId:"10",arr:[
	{title:"装饰摆件"},{img:[{src:"img/Flnfn_NehOyd9v0yg9eEXPIjoBRq.jpg",name:"d.o.c中原社",des:"品牌创始人、设计师",style:"甜美",count:"43"},
	{src:"img/FlqLWLzQVgU3ftncwxvQ6d3Vsz11.jpg",name:"三巷",des:"品牌创始人、设计师",style:"复古风",count:"41"},
	{src:"img/FvBXXMIH9vs1gVylTJ_244Or1H5v.jpg",name:"沐川原创",des:"品牌创始人、设计师",style:"潮派",count:"40"},
	{src:"img/Fo3a6Rolq8af6cOsNGfq3oNYsso5.jpg",name:"杲果生活",des:"品牌创始人、设计师",style:"简约",count:"50"},
	{src:"img/FvZs0-4BDzZeXpHjizbHUXAtfYdt.jpg",name:"半墨",des:"品牌创始人、设计师",style:"复古风",count:"35"}]}
	]},
	{designerId:"11",arr:[
	{title:"茶壶"},{img:[{src:"img/Fnbyip32wqFco5q4CpgmfI-yWflW.jpg",name:"Sugarmat",des:"品牌创始人",style:"简约",count:"19"},
	{src:"img/FiJn4AeBJsDyeqv7kKsgdz1KpvcX.jpg",name:"好日子设计",des:"品牌创始人、设计师",style:"潮派",count:"10"},
	{src:"img/FtWrSWnow1LIJxE3kSzFWPJec74L.jpg",name:"LEOLEE23",des:"品牌创始人",style:"",count:"7"},
	{src:"img/Fl4dTyLBqjyoncPMREvn3I4KGATn.jpg",name:"just2you",des:"家具设计师",style:"简约",count:"28"},
	{src:"img/FlH3iB5K6e_sSUS-jrubbQf7d_ka.jpg",name:"FinGreen",des:"产品设计总监",style:"日式",count:"0"}]}
	]},
	{designerId:"12",arr:[
	{title:"玻璃花瓶"},{img:[{src:"img/Flnfn_NehOyd9v0yg9eEXPIjoBRq.jpg",name:"d.o.c中原社",des:"品牌创始人、设计师",style:"甜美",count:"43"},
	{src:"img/FlqLWLzQVgU3ftncwxvQ6d3Vsz11.jpg",name:"三巷",des:"品牌创始人、设计师",style:"复古风",count:"41"},
	{src:"img/FvBXXMIH9vs1gVylTJ_244Or1H5v.jpg",name:"沐川原创",des:"品牌创始人、设计师",style:"潮派",count:"40"},
	{src:"img/Fo3a6Rolq8af6cOsNGfq3oNYsso5.jpg",name:"杲果生活",des:"品牌创始人、设计师",style:"简约",count:"50"},
	{src:"img/FvZs0-4BDzZeXpHjizbHUXAtfYdt.jpg",name:"半墨",des:"品牌创始人、设计师",style:"复古风",count:"35"}]}
	]}
	]
	return obj;
	
})
.factory("img",function(){
	var obj=[
	{src:"img/adam.jpg"},
	{src:"img/max.png"},
	{src:"img/mike.png"},
	{src:"img/perry.png"},
	{src:"img/ben.png"}
	]
	return obj;
})
.factory("sex",function(){
	var obj=[
	{sex:"男",src:"img/icn_male.png"},
	{sex:"女",src:"img/icn_female.png"}

	]
	return obj;
})
.factory("year",function(){
	var obj=[]
	for(var i=1900;i<=2017;i++){
		obj.push(i)
	}
	
	return obj;
})
.factory("month",function(){
	var obj=[]
	for(var i=1;i<=12;i++){
		obj.push(i)
	}
	
	return obj;
})
.factory("day",function(){
	var obj=[]
	for(var i=1;i<=30;i++){
		obj.push(i)
	}
	
	return obj;
})
.factory("details",function(){
	var obj=[
	{goods_id:"1001",discount:4,personImg:"img/FpxA5Eaxr0R6LabQ8KQpDpg7yBVS.jpg",wx:"加想去君微信：beansyxj，成为本君好友，超多朋友福利，带你认识更多设计师哦～",name:"爱的涟漪。S925纯银简约时尚清新淡雅个性开口戒指 英文only love you只爱你 情侣对戒指环之情人节",person:"屿众·不同",title:"小众银饰品，放下浮躁，来点沉静的独特诠释个性",firstdes:"img/1505401644(1).png",lastdes:"img/1505401619(1).png"
	,src:["img/微信图片_20170914225422.jpg","img/微信图片_20170914225428.jpg","img/微信图片_20170914225430.jpg","img/微信图片_20170914225433.jpg"],bigimg:["img/Fm0SoAXRVX2LeUhjDgfmJnqFwYol.jpg"]},
	{goods_id:"1002",discount:8,personImg:"img/FpxA5Eaxr0R6LabQ8KQpDpg7yBVS.jpg",name:"S925纯银时尚精致靓丽清新淡雅微镶钻叶子项链套链",wx:"加想去君微信：beansyxj，成为本君好友，超多朋友福利，带你认识更多设计师哦～",person:"屿众·不同",title:"小众银饰品，放下浮躁，来点沉静的独特诠释个性",firstdes:"img/1505401644(1).png",lastdes:"img/1505401619(1).png"
	,src:["img/微信图片_20170914231220.jpg","img/微信图片_20170914231223.jpg","img/微信图片_20170914231225.jpg","img/微信图片_20170914231228.jpg","img/微信图片_20170914231231.jpg"],bigimg:["img/Fp6anKrf4_EvfAkEy6OFJeLsxz5X.jpg","img/FrlIdm21c7qVe8YAdrDtREP8TWMM.jpg","img/FsWyh5rMdVnSeD0qQcWzWwXaLCwK.jpg","img/Fjih_QbJ5JFC_LqMrPkrN1uhbRw0.jpg","img/FqCngoErMFhpWkYizVVPywXsv94n.jpg","img/Fss0BxNJoQJcfl_ymqx6J-Jvp1mx.jpg","img/FpveHxwhneK4hTCVV2pIgNhBatc7.jpg","img/Fv71g2wL0KyMkxoJHegW--MjY0Xp.jpg"]},
	{goods_id:"1003",discount:4,personImg:"img/FpxA5Eaxr0R6LabQ8KQpDpg7yBVS.jpg",name:"【现货】S925纯银时尚别致泰银紧箍咒戒指个性民族做旧指环花纹开口食指戒男女情侣戒指礼物",wx:"加想去君微信：beansyxj，成为本君好友，超多朋友福利，带你认识更多设计师哦～",person:"屿众·不同",title:"小众银饰品，放下浮躁，来点沉静的独特诠释个性",firstdes:"img/1505401644(1).png",lastdes:"img/1505401619(1).png"
	,src:["img/微信图片_20170914191259.jpg","img/微信图片_20170914191257.jpg","img/微信图片_20170914191254.jpg"],bigimg:["img/微信图片_20170914190940.jpg"]},
	{goods_id:"1004",discount:3,personImg:"img/FpxA5Eaxr0R6LabQ8KQpDpg7yBVS.jpg",name:"海誓山盟。S925纯银原创手工设计指环 极简清新文艺个性时尚对戒 开口可调情侣戒指",wx:"加想去君微信：beansyxj，成为本君好友，超多朋友福利，带你认识更多设计师哦～",person:"屿众·不同",title:"小众银饰品，放下浮躁，来点沉静的独特诠释个性",firstdes:"img/1505401644(1).png",lastdes:"img/1505401619(1).png"
	,src:["img/微信图片_20170914232628.jpg","img/微信图片_20170914232630.jpg","img/微信图片_20170914232633.jpg","img/微信图片_20170914232636.jpg","img/微信图片_20170914232638.jpg"],bigimg:["img/FhCh12fX0hNiyuujvfGS6bC-hMNC.jpg","img/FpjWuFw68OmB1InipBJF5ukkLZjV.jpg","img/FnRkXk832wuNRwEaw7bjgzlkptH6.jpg","img/FhiQ14u-N0LctDOPhgz-yhD5W8wr.jpg","img/FhlOeRXsIp2D3lbI_fUCQV3-Vk-C.jpg","img/Fi2xhzZw0PfqaLNywIyM6cZgSjUG.jpg","img/Fj1soN0IA_0Ads4jh-lq7E6Jk60L.jpg","img/FrIfFYfiVoBmJ9htIPHrXZ8AMdyt.jpg","img/Frv2YZ_mORfmDdvOU8ZDQmtCKaXx.jpg","img/Fu1jW2EtDsXhxegynjTNIjOhVsHc (1).jpg","img/FgAfkf5XTMQdUoFd-81z-8UJvFQK.jpg"]},
	]
	return obj;
})
.factory("dis",function(){
	var obj=[
	{goods_id:"1001",arr:[{img:"img/ForqWKVrVsmaflRGUNRRHPayCPWX.jpg",name:"Bachelor",dis:"戒指可以 就是包装简陋",time:"09月09日 12:47"},{img:"img/ForqWKVrVsmaflRGUNRRHPayCPWX.jpg",name:"Bachelor",dis:"东西可以 就是包装有点简陋。",time:"09月09日 12:46"},{img:"img/FnBLVNE8vTHECDl4G-xbemPXepgn.jpg",name:"仙境咚锵",dis:"实物我给满分，",time:"08月13日 17:41"},{img:"img/Fqqqey4aWsHtjMoPCoTjuBb_HP5f.jpg",name:"歪an",dis:"炒鸡好看，喜欢",time:"07月28日 16:27"}]},
	{goods_id:"1002",arr:[{img:"img/FmLftskEIG02eVJ8W_HUM4qykIdz.jpg",name:"怒陀螺",dis:"真的超级棒！！所有朋友都说好看。",time:"08月15日 21:20"},{img:"img/Fu_GD7m3U2EKLIug2QiZ1ryBnaVW.jpg",name:"陈吉吉",dis:"喜欢哈哈哈",time:"08月13日 04:59"},
	{img:"img/FtrOewHgvBGtDrSChEG58zPcLqlq.jpg",name:"铁匠点心",dis:"嘿嘿嘿超搭的，闺蜜都问我是哪儿买的",time:"08月05日 16:20"},{img:"img/FqsHZPHNRfO1R9iBUW6HIVjSWR1g.jpg",name:"路过枭",dis:"给我的女朋友买的，女朋友说很好。",time:"07月30日 14:14"},{img:"img/FsH4mY371m7tSHeqJnitOVF8A_Zc.jpg",name:"胡维维",dis:"还不错，挺喜欢",time:"07月28日 01:39"},{img:"img/FuT5yX7WIHps-v5CP6jaBUvXHsvw.jpg",name:"年少补",dis:"质量都不错，也没有很粗糙。",time:"07月26日 00:43"},
	{img:"img/FpdE3v0jIirrkIEel8Ti4TcPztuw.jpg",name:"小河仙",dis:"给我的女朋友买的，女朋友说很好。",time:"07月15日 13:29"},{img:"img/Fh1FKcI-LjZBT9mDDio0Ol_ku7fu.jpg",name:"棠myself",dis:"习惯性好评",time:"06月30日 14:24"}]},
	{goods_id:"1003",arr:[{img:"img/FoZtP2SLX4bu_WrCppEfkfr5cXS-.jpg",name:"༒你嘟任你嘟༒",dis:"很好 态度很好的 质量好",time:"09月10日 19:07"},{img:"img/Flr2okjPPX10TFWf0x1JCmm5R3-m.jpg",name:"莫宁",dis:"帮朋友买的，朋友很满意，好评！",time:"08月14日 10:37"},{img:"img/FpYSlW-po6kO77ANi4wS8rBjMx2T.jpg",name:"静子汪汪",dis:"hin美，hin好搭",time:"08月09日 11:18"},{img:"img/FpYSlW-po6kO77ANi4wS8rBjMx2T.jpg",name:"静子汪汪",dis:"质量都不错，也没有很粗糙。",time:"07月26日 13:57"}]},
	{goods_id:"1004",arr:[{img:"img/FpdE3v0jIirrkIEel8Ti4TcPztuw.jpg",name:"小河仙",dis:"完全物有所值，入",time:"08月12日 18:05"},{img:"img/FidbG-WOnhWarZ51r7eLU74WRQe7.jpg",name:"phoenix出没",dis:"好看是好看，价格稍贵了些",time:"07月29日 22:58"},{img:"img/FuT0XiPjCGd5YSwqAQvotBi8Latl.jpg",name:"电波少女",dis:"很好看哟，还是比较适合我的哈哈哈",time:"07月22日 11:45"}]}
		
		
	]
	return obj;
})
.factory("first",function(){
	var obj=[
	"img/FgE4F5XJk44nvswJX4O_6sq3AbS5.jpg",
	"img/FlmeckaMHINPKl7cNRCB2KGsk4vX.jpg",
	"img/FoTr1t_XSwM4t1xX1me1DMjcLxFS.jpg",
	"img/FqNKMeKmQijnkwZQWtDXkI7mSvZO.jpg",
	"img/FqBdQVQrlfeFn_GP6f3E9fL5aTdB.jpg",
	"img/FnQUBR3GMXfAQDaECSTUyb2VsGZw.jpg"
	
	]
	return obj;
})

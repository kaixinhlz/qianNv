/**
 * Created by Administrator on 2015/11/2 0002.
 */

$(function(){
  //网页头部 B
    $(".top a.guanfang1").mouseenter(function(){
        $(".top a.guanfang1").addClass("guanfang2").removeClass("guanfang1");
    })
    $(".top a.guanfang1").mouseleave(function(){
        $(".top a.guanfang2").addClass("guanfang1").removeClass("guanfang2");
    })
    for(var i=0 ; i<=80; i++){
        $(".thhlz").append($("<span></span>"))
    }
    $(".thhlz span").each(function(i,ele){
        $(ele).css({left:Math.random()*1920+"px",top:Math.random()*1500-1000+"px"});
    })
    //网页头部E

    //快速注册部分B
    var inp_a =document.getElementById("inp-a");
    var inp_b =document.getElementById("inp-b");
    var but =document.getElementById("but");
    var B1 =document.getElementById("B1");
    var B2 =document.getElementById("B2");
    var B3 =document.getElementById("B3");
    var B4 =document.getElementById("B4");
    var btn1 =document.getElementById("btn1")
    var regPassword =//
        inp_a.value="请输入邮箱或手机号";
    inp_b.value="请设置6-16位密码，区分大小写";
    inp_b.onfocus=function(){
        if(inp_b.value!=""){
            inp_b.value=inp_b.value;
            B4.style.display="none"
        }
        inp_b.value="";
        inp_b.type="password";
        inp_b.className ="inp_gai";
        B4.style.display="none"
    }
    inp_b.onblur=function(){
        if (inp_b.value == ""){
            inp_b.value = "请设置6-16位密码，区分大小写";
            inp_b.className = "inp";
            inp_b.type="text";
            B4.style.display="none";
        }
        else{
            inp_b.className = "inp_gai"
            if(/^[\w\W]{6,16}$/.test(inp_b.value)){
                B4.style.display="block";
            }else{
                B2.style.display = "block";
            }
        }
    }
    inp_a.onfocus=function(){
        inp_a.value="";
        inp_a.className ="inp_gai"
    }
    inp_a.onblur=function(){
        if (inp_a.value == ""){
            inp_a.value = "请输入邮箱或手机号";
            inp_a.className = "inp"
        }
        else{
            inp_a.className = "inp_gai"
        }
    }
    but.onclick =function(){
        if(inp_a.value == "请输入邮箱或手机号" || inp_b.value == "请设置6-16位密码，区分大小写"){
            B1.style.display="block";
            B2.style.display="block"
        }
    }
    B1.onclick=function(){
        B1.style.display ="none";
        $(inp_a).focus().select();
    }
    B2.onclick=function(){
        B2.style.display ="none";
        $(inp_b).focus().select();
    }
    $(function(){
        var str="";
        $("#inp-a").on("keyup",function(){
            if($(this).val().length>0&&$(this).val().length<=13&&$(this).val()!="请输入邮箱或手机号"){
                $(".email li").eq(0).nextAll().each(function(i,ele){
                    $(ele).text($("#inp-a").val() + $(ele).text().replace(/^.+(@.*)$/,"$1"));
                })
                $(".email").css("display","block");
                str = $("#inp-a").val();
            }else{
                $(".email").css("display","none");
                $(".email li").eq(0).nextAll().each(function(i,ele){
                    $(ele).text($(ele).text().replace(/^.+(@.*)$/,"$1"));
                })
                str = str.substr(0,str.length-2);
                $("#inp-a").val(str);
            }
        } )
        $(".email ul li").on("mouseenter",function(){
            $(this).addClass("cu").siblings().removeClass("cu");
        })
        $(".email ul li").on("click",function(){
            $(this).parent().parent().css("display","none");
            $("#inp-a").val($(this).text());
        })
    })

    //快速注册部分E

    //手风琴部分 B
    $(".block3 li .big").each(
        function(i,ele){
            $(ele).css("background-image","url(imgs/"+(i+1)+"hlz.jpg)");
        })
    $(".block3 li").on("click",function(){
        num=$(this).index();
        $(".block3 li").find(".s").css("transition","1s");
        $(this).find(".big").addClass("cu").end().siblings().find("p").hide();
        $(this).siblings().find(".big").removeClass("cu").end().find(".s").css("width","100px");
        $(".cu p").fadeIn(2000).parent().prev().css("width","0px");
    })
    $(".block3 .s").each(function(i,ele){
        if(i<=3){
            $(ele).css("background-position","-722px -"+i*485+"px");
        }
    })
    var num = 0;
    var timer = setInterval(fn,2000);
    $(".block3").on("mouseenter",function(){
        clearInterval(timer);
    })
    function fn(){
        num = num>4 ? 0 : num;
        $(".block3 li").eq(num).trigger("click");
        num++
    }
    $(".block3").on("mouseleave",function(){
        timer = setInterval(fn,2000);
    })

    //手风琴部分 E

    //角色分类部分 B
    var arrRole = [
        {
            p: "职业定位：远程 / 法术 / 控制",
            spana: "冷月心",
            spanb: "风摇筝",
            a: "01",
            b: "011"
        },
        {
            p: "职业定位：近程 / 群攻 / 刺客",
            spana: "卓断水",
            spanb: "杨梦言",
            a: "02",
            b: "022"
        },
        {
            p: "职业定位：近程 / 物理 / 将魂",
            spana: "霍击蒙",
            spanb: "石云曦",
            a: "03",
            b: "033"
        },
        {
            p: "职业定位：远程 / 物理 / 群攻",
            spana: "聂秋鹰",
            spanb: "萧若兰",
            a: "04",
            b: "044"
        },
        {
            p: "职业定位：近程 / 法术 / 单攻",
            spana: "乔寻影",
            spanb: "水凝墨",
            a: "05",
            b: "055"
        },
        {
            p: "职业定位：中程 / 物理 / 召唤",
            spana: "檀无心",
            spanb: "阮烟罗",
            a: "06",
            b: "066"
        },
        {
            p: "职业定位：近程 / 物理 / 辅助",
            spana: "洛昊空",
            spanb: "沈傲霜",
            a: "07",
            b: "077"
        },
        {
            p: "职业定位：远程 / 法术 / 群攻",
            spana: "莫忘尘",
            spanb: "纳兰青桑",
            a: "08",
            b: "088"
        },
        {
            p: "职业定位：远程 / 法术 / 治疗",
            spana: "步临风",
            spanb: "殷紫萍",
            a: "09",
            b: "099"
        },
        {
            p: "职业定位：远程 / 法术 / 召唤",
            spana: "叶葬花",
            spanb: "花渐隐",
            a: "010",
            b: "01010"
        }
    ]
    var arr = [];
    for (var i = 0; i < arrRole.length; i++) {
        var tar = "<div class='role1 pr clearfix'>" +
            "<div class='role1_left pa'>" +
            "<div class='l_t" + i + "'>" +
            "</div>" +
            "<div class='l_c clearfix'>" +
            "<p>" + arrRole[i].p + "</p>" +
            "<a href='#'>详细>" +
            "</a>" +
            "</div>" +
            " <div class='l_b" + i + "'>" +
            "</div>" +
            "</div>" +
            "<div class='role1_img pa clearfix'>" +
            "<img  src='imgs/" + arrRole[i].a + ".png'/>" +
            "<img src='imgs/" + arrRole[i].b + ".png' />" +
            "</div>" +
            "<div class='role1_right clearfix'>" +
            "<a href='#' class='nan" + i + "'>" +
            "<span class='m_name disns'>" + arrRole[i].spana + "</span>" +
            " </a>" +
            "<a href='#' class='nv nvbg" + i + "'>" +
            "<span class='w_name'>" + arrRole[i].spanb + "</span>" +
            "</a>" +
            " </div>" +
            "</div>";
        arr.push(tar);
    }
    var timerId = null;
    var ppp=0;
    $("#roleAll").html(arr[0]);
    $(".role1_right a").css("color", "black");
    $(".role1_left div").slideDown(1000);
    //图片从右到左
    $(".role1_img").animate({
        "right":0
    },500);
    //a切换背景颜色
    $(".l_c a").on("mouseenter", function () {
        $(".l_c a").css("backgroundColor", "#8C4600");
    }).mouseleave(function () {
        $(".l_c a").css("backgroundColor", "#C29C6C");
    });
    //鼠标经过导航的时候
    $("#roleClassify .main ul li").on("mouseenter", function () {
        $("#roleClassify .main ul li").removeClass("current");
        $(this).addClass("current");
        ppp = $(this).index();
        //console.log($(this).index());
        $("#roleAll").html(arr[$(this).index()]);
        $("#roleAll .role1").eq($(this).index()).show().siblings().hide();
        //num = $(this).index();
        //字体变黑色
        $(".role1_right a").css("color", "black");
        //鼠标移入小头像的时候
        $(".role1_right a").on("mouseenter", function () {
            $(".role1_right a span").removeClass("disns");
            $(this).find("span").addClass("disns");
            $(".role1_img img").hide();
            $(".role1_img img").eq($(this).index()).show();
        })
        //左边特效实现
        $(".role1_left div").eq(0).slideDown(500, function () {
            $(".role1_left div").eq(1).slideDown(400, function () {
                $(".role1_left div").eq(2).slideDown(400);
            });
        });
        //a切换背景颜色
        $(".l_c a").on("mouseenter", function () {
            $(".l_c a").css("backgroundColor", "#8C4600");
        }).mouseleave(function () {
            $(".l_c a").css("backgroundColor", "#C29C6C");
        });
        //图片从右到左
        $(".role1_img").animate({
            "right":0
        },500);

    });//li切换图片结束
    //定时器相关操作
    $("#roleClassify").mouseenter(function () {
        clearInterval(timerId);
    }).mouseleave(function () {
        timerId = setInterval(dingshiqi,3000);
    });
    //设置定时器

    timerId = setInterval(dingshiqi,3000);
    //回调函数
    function dingshiqi(){
        if(ppp<10){
            ppp++;
            $("#roleClassify .main ul li").removeClass("current");
            $("#roleClassify .main ul li").eq(ppp).addClass("current");
            $("#roleAll").html(arr[ppp]);
            $("#roleAll .role1").eq(ppp).show().siblings().hide();
            if(ppp==10){
                ppp=0;
                $("#roleClassify .main ul li").removeClass("current");
                $("#roleClassify .main ul li").eq(ppp).addClass("current");
                $("#roleAll").html(arr[ppp]);
                $("#roleAll .role1").eq(ppp).show().siblings().hide();
            };
        };
        console.log(ppp);
        //字体变黑色
        $(".role1_right a").css("color", "black");
        //鼠标移入小头像的时候
        $(".role1_right a").on("mouseenter", function () {
            $(".role1_right a span").removeClass("disns");
            $(this).find("span").addClass("disns");
            $(".role1_img img").hide();
            $(".role1_img img").eq($(this).index()).show();
        })
        //左边特效实现
        $(".role1_left div").eq(0).slideDown(500, function () {
            $(".role1_left div").eq(1).slideDown(400, function () {
                $(".role1_left div").eq(2).slideDown(400);
            });
        });
        //a切换背景颜色
        $(".l_c a").on("mouseenter", function () {
            $(".l_c a").css("backgroundColor", "#8C4600");
        }).mouseleave(function () {
            $(".l_c a").css("backgroundColor", "#C29C6C");
        });
        //图片从右到左
        $(".role1_img").animate({
            "right":0
        },500);
    };
    //鼠标移入小头像的时候
    $(".role1_right a").on("mouseenter", function () {
        $(".role1_right a span").removeClass("disns");
        $(this).find("span").addClass("disns");
        $(".role1_img img").hide();
        $(".role1_img img").eq($(this).index()).show();
    })
    //角色分类部分 E

    //右边侧边栏收起展开 B
    $(".slidebar-left").click(function () {
        //如果类名为.slidebar-left-open向左边移出
        if($("#slidebar").children(".slidebar-left-open")[0]){
            //获得的是集合对象，如果是要调用是按照数组形式才可以调用
            //console.log($("#slidebar").children(".slidebar-left-open")[0]);
            $("#slidebar").animate({
                right:1
            },400,function(){
                $(".slidebar-left-open").removeClass().addClass("slidebar-left");
                $(".slidebar-left span").html("收起");
            })
            return false;//阻止页面跳转
            //否则向右边缩进
        }else{
            $("#slidebar").animate({
                right: -152
            }, 400, function () {
                //$(".slidebar-left span").html("展开");在未更改类名之前设置span值也可以
                $(".slidebar-left").removeClass().addClass("slidebar-left-open");
                //类名更改后重新设置span的文本内容
                $(".slidebar-left-open span").html("展开");
            })
            return false;
        }
    })

    //右边侧边栏收起展开的图片鼠标移入时向上再向下  最后淡入
    $(".mid ").on("mouseenter","a",function(){
        $(this).children("div").slideUp(100);
        $(this).children("div").slideDown(100);
        $(this).children("div").fadeIn(100);
        $(this).children("span").css({
            color : "yellowgreen"
        })
    })
    //鼠标移出字体颜色变回原样
    $(".mid ").on("mouseleave","a",function(){
        $(this).children("span").css({
            color:"#666"
        })
    })
    //右边侧边栏收起展开 E

    //网页尾部 B
    var pic1 = document.getElementById('pic1');
    var pic2 = document.getElementById('pic2');
    var pic3 = document.getElementById('pic3');


    pic1.onmouseover = function () {
        pic1.style.background = ('url("imgs/bot-btn.png") no-repeat 0px -100px')
    };
    pic1.onmouseout = function(){
        pic1.style.background = ('url("imgs/bot-btn.png")');
    };
    pic2.onmouseover = function () {
        pic2.style.background = ('url("imgs/bot-btn.png") no-repeat -360px -100px')
    };
    pic2.onmouseout = function(){
        pic2.style.background = ('url("imgs/bot-btn.png") no-repeat -360px 0');
    };
    pic3.onmouseover = function () {
        pic3.style.background = ('url("imgs/bot-btn.png") no-repeat -720px -100px')
    };
    pic3.onmouseout = function(){
        pic3.style.background = ('url("imgs/bot-btn.png") no-repeat -720px 0');
    };
    //网页尾部 E

    //点击弹出注册页面 B
    $(function(){
        $(".pop-tab-r .pop-tab-r-t li").mouseenter(function(){
            var index =$(this).index();
            $(".pop-tab-r .pop-tab-r-t li").eq(index).addClass("button-"+index).siblings().removeClass();
            $(".pop-tab-r-b .pop-tab-list .active").eq($(this).index()).fadeIn().siblings().fadeOut();
        })
        $(".hdpop-close").on("click",function (){
           $(".bigbox").hide();
        })
        $(".circle1").on("click",function(){
            $(".bigbox").show();
        })
    })
    //点击弹出注册页面 E



















})

/*service marquee*/
/*图片一次跳一张方案：speed 1000 tab.scrollLeft+=189*/

var speed=30;
var tab=document.getElementById("service");
var tab1=document.getElementById("son1");
var tab2=document.getElementById("son2");
tab2.innerHTML=tab1.innerHTML; 
function Marquee()
{
  
  if(tab2.offsetWidth-tab.scrollLeft<=0)
  {
  	tab.scrollLeft=0;
  }
  else{
	tab.scrollLeft+=1;
  }

}
var MyMar=setInterval(Marquee,speed);
tab.onmouseover=function(){clearInterval(MyMar);/*鼠标悬停显示，错误代码，待调试|||已通过css设置成功*//*var ui=document.getElementsByClassName("test");ui.style.display="block"*/};
tab.onmouseout=function(){MyMar=setInterval(Marquee,speed)};



/*计时*/
function setzero(i){
	if (i<10)
	{
		i="0" + i
	}
	return i;
}
function show_time(){
	window.setTimeout("show_time()", 1000);
	Begin_Time=new Date("05/26/2017 20:30:00");
	now=new Date();
	time_elapsed=(now.getTime()-Begin_Time.getTime());
	sec_elapsed=time_elapsed/1000
	secondsold=Math.floor(sec_elapsed);
	msPerDay=24*60*60*1000
	e_daysold=time_elapsed/msPerDay
	daysold=Math.floor(e_daysold);
	e_hrsold=(e_daysold-daysold)*24;
	hrsold=setzero(Math.floor(e_hrsold));
	e_minsold=(e_hrsold-hrsold)*60;
	minsold=setzero(Math.floor((e_hrsold-hrsold)*60));
	seconds=setzero(Math.floor((e_minsold-minsold)*60));
	time.innerHTML="当前时间："+now+";编写已用："+daysold+"天"+hrsold+"小时"+minsold+"分"+seconds+"秒";
}
show_time();

/*手机版导航显示方法*/
function showNav(){
	var bar=document.getElementById("primary-menu-trigger");
	var nav=document.getElementById("nav");
	if(nav.style.display=="block"){
		nav.style.display="none";
		}else{
		nav.style.display="block";
	}
}

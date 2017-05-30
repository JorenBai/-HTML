function dosave() {
	savediv.style.visibility = "visible";
}

function CheckForm() {
	if(post.name.value == '') {
		alert('对不起！请输入您的称呼！');
		post.name.focus();
		return false;
	}
	if(post.phone.value == '') {
		alert('对不起！请输入您的电话！');
		post.phone.focus();
		return false;
	}
	var reg = new RegExp("^([0-9])+$", "ig"); {/*i	执行对大小写不敏感的匹配。g	执行全局匹配（查找所有匹配而非在找到第一个匹配后停止）*/
		if(!reg.test(post.phone.value)) {
			alert("对不起！电话只能是0-9的数字！");
			post.phone.focus();
			return false;
		}
	}
	if(post.nr.value == '') {
		alert('对不起！请输入您的留言内容(不超过200个字)！');
		post.nr.focus();
		return false;
	}
	dosave();
}
$('document').ready(function () {

    // 获取所有li
		var lis = document.getElementById('nav').getElementsByTagName('li');
    // var lis = $('#nav>li');
		var lis = document.getElementById('nav').getElementsByTagName('li');
		//绑定 over out
		for (var i = 0; i < lis.length; i ++) {
			lis[i].onmouseover = function(){
				if (this.className == 'top'){
						//子元素 ul 显示
					this.getElementsByTagName('ul')[0].style.display = "block";
				}
			}
			lis[i].onmouseout = function(){
				if (this.className == 'top'){
						//子元素 ul 隐藏
					this.getElementsByTagName('ul')[0].style.display = "none";
				}
			}
		}

})
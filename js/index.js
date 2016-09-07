/*function getByClass(clsName,parent) {//IE不支持getElementByClassName，三元表达式，“，”表示var新的变量
	var oParent = parent?document.getElementById(parent):document,eles=[],elements=oParent.getElementsByTagName("*"); 
	for (var i = 0; i <elements.length; i++) {
		if(elements[i].className == clsName){
			eles.push(elements[i]);//push() 方法可向数组的末尾添加一个或多个元素，并返回新的长度。
		}
	}
	return eles;
}*/

function scrollUp(){
		var liHeight = 34;
		if(content.scrollTop % liHeight == 0){
			clearInterval(time);
			setTimeout("startMove()",2000);
		}else{
			content.scrollTop++;
			if(content.scrollTop >= content.scrollHeight/2){ //scrollHeight是元素完整高度，offsetHeight是元素可见部分高度
				content.scrollTop = 0;
			}
		}
}

function startMove(){
		content.scrollTop++;
		time = setInterval("scrollUp()",50);
}

window.onload = function(){
	var content = document.getElementById("content");
	content.innerHTML += content.innerHTML;
	var time;
	content.scrollTop = 0;

	setTimeout("startMove()",2000);
	
}
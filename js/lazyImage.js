(function(){
	var imgDoms = $("img[_src]");
	var arr = [];
	var cmark = true;
	$(window).on("load scroll resize",function(){
		//锁住不循环
		if(!cmark)return;
		//拿到可视区域
		var cheight= $(window).height();
		//拿到滚动条的高度
		var ctop = $(window).scrollTop();
		for(var i=0,len=imgDoms.length;i<len;i++){
			if(!imgDoms[i].mark && cheight+ctop >= getElementTop(imgDoms[i])){
				var $img = $(imgDoms[i]);
				$img.attr("src",$img.attr("_src"));
				imgDoms[i].mark = true;
				arr.push(0);
			}
		}
		//如果加载完毕了。加锁
		if(arr.length==imgDoms.length){
			cmark = false;
		}
	});
		
})();

function getElementTop(el){
	var y = el.offsetTop;
	while(el=el.offsetParent){
		y +=el.offsetTop;
	}
	return y;
}
	
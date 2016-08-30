function Star(container,count,size){
	this.count = count
	this.size = size
	this.container = container///外部传入一个容器
	
	this.label = this.container.dataset.label///获取data-label属性值
	this.starVal = this.container.dataset.star  //获取data-star属性值
	
	this.hf = document.createElement('input')
	this.hf.type = 'hidden'
	this.hf.name = this.starVal
	
}
/**
 * 星星的容器
 */
Star.prototype.showStarsBody = function(){
	var div = document.createElement('div')
	div.className = 'fc-stars-body'
	div.style.display = 'flex'
	div.style.alignItems = 'center'
	
	/*
 	* 
 	*/
	var label = document.createElement('span')
	label.innerText = this.label+":"
	
	div.appendChild(label)//添加label
	div.appendChild(this.hf)//添加hf隐藏域
	
	this.container.appendChild(div)
//	document.body.appendChild(div)
}
/**
 * 在页面上添加star图片
 */


Star.prototype.showStars = function(){
	///获取stars的容器
	var divBody = this.getStarsBody()
	
	var that = this
	///根据stars的数量生成图片
	for(var i=0;i<this.count;i++){
		var img = document.createElement('img')
		img.style.width = this.size + 'px'
		img.style.height = this.size + 'px'
		img.style.cursor = 'pointer'
		img.src = './img/w.png'
		divBody.appendChild(img)
		img.dataset.index = i
		
		//图片点击事件
		img.onclick = function(e){
			var target = e.target
			
			that.hf.value = +target.dataset.index + 1//设置隐藏域的值
			
			that.getScoreSpan().innerText = target.dataset.index*1 + 1 + '分'
			
			//三元运算符 bool？true-value:false-value
			//字符串的endsWith///判断字符串的结束内容
//			var imgStr = target.src = target.src.endsWith('q.png')?'./img/w.png':'./img/q.png'
			//获取自定义控件中的所有的img标签
			var allImgs = that.container.querySelectorAll('.fc-stars-body img')
			for(var i=0;i<allImgs.length;i++){
				var item = allImgs[i]
				///循环出的index如果小于当前节点 选择红图 否则选择黄色的星星
				if(item.dataset.index <= target.dataset.index){
					item.src = './img/w.png'
				}
				else{
					item.src = './img/q.png'
				}
			}
			
		}
	}
	
}
/**
 * 展示分值
 */
Star.prototype.showScores = function(){
	var divBody = this.getStarsBody()
	var scoreSpan = document.createElement('span')
	
	scoreSpan.className = 'fc-stars-score-val'
	scoreSpan.innerText = '10分'
	divBody.appendChild(scoreSpan)
}
/*
 * 获取stars的容器
 */
Star.prototype.getStarsBody = function(){
	///获取当前容器内部的className = 'fc-stars-body'的元素
	return this.container.querySelector('.fc-stars-body')
}
/*
 * 获取分值标签
 */

Star.prototype.show = function(){
	this.showStarsBody()
	this.showStars()
	this.showScores()
}

Star.prototype.getScoreSpan = function(){
	return this.container.querySelector('.fc-stars-score-val')
}
///实例化对象  调用show进行展示
var allStarDivs = document.querySelectorAll("[data-star]")

//allStarDivs.forEach(function(item,index,arr){
//	var starCtrl = new Star(item,10,100)
//	starCtrl.show()
//
//})
for(var i=0;i<allStarDivs.length;i++){
	var starCtrl = new Star(allStarDivs[i],10,50)
	starCtrl.show()
}

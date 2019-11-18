"use strict";
var app = app || {}
app = (()=>{
	let context, js;
	
	let run = x =>{
		alert('run 안쪽'+ x)
		$.getScript(x+'/resources/js/cmm/router.js',()=>{
			$.extend(new Session(x))
			init()
			onCreate()
		})
		
		
	}
	let init = () =>{
		context = $.ctx()
		js = $.js()
		alert("init안"+context)
	}
	
	let onCreate =()=>{
		
		setContentView()
	}
	let setContentView=()=>{
		$('body').css({
			'background-image':'url("resources/img/cat4.jpg")'
		})
//		$('body')
//        .css({'background-image': 'url("resources/img/sea.jpg")'})
/*
  <style>
#tab {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#tab td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

#tab tr:nth-child(even) {
  background-color: #dddddd;
}
</style>
 * */	
//		width  가로 / height 세로 
//		맨 위로 올리는 코드 'vertical-align' : 'top'
		$('<table id ="tab"><tr></tr></table>')
		.css({width:'80%', height:'800px', border:'1px solid pink', margin:'0 auto'
		})
		.appendTo('#wrapper')//home.jsp에서 div 아이디 준것 .
		$('<td/>',{id:'left'})
		.css({width:'20%', height:'100%', border:'1px solid pink',
			'vertical-align': 'top'  
		})
		.appendTo('tr')
		$('<td/>',{id:'right'})
		.css({width:'80%', height:'100%', border:'1px solid pink'
		})
		.appendTo('tr')
//		$.each([],(i,j)=>{})  -> 이게 기본 형태
//		$.each([1,2,3,4,5],(i,j)=>{   -> 이렇게 하드 코딩해도 돈다.
		$.each(['NAVER','CGV','BUGS'],(i,j)=>{
//			$.each(['NAVER','CGV','BUGS'] 의 value 가 j 이다 그래서 text(j)를 넣으면 저값이 나온다.
			$('<div/>')
//			text(j) 는 java 에서 세터 파라미터가 있어서 .
			.text(j)
			.css({
				width: '100%',
				height: '100px',
			 border:'1px solid pink',
			 'text-align' :'center'
			})
			.click(function(){
				//a 태그랑  form 태그가 아니라서 e.prventeve 안해준다.
//				alert($(this).text() + '클릭')   
//				text() 파라미터가 없으니 자바에서 게터 
//				$(this).text() each 안에서만 사용가능하다. $(this) 는 
//				alert($(this).text() + '클릭')
				context = $.ctx()
				switch($(this).text()){
				case 'NAVER' :
		//	$.getJSON() 로그인이나 회원가입처럼 보내는게 있어야 ajax 하는건데 자바에서 
//			가져오는것만 있어서 $.getJSON() 으로 url 만 해준다. 
					alert('naver')
					$.getJSON(context+'/naver/naverCrawl/',d=>{}) 
					break
				case 'CGV' :
					alert('cgv')
					$.getJSON(context+'/cgv/cgvCrawl/',d=>{}) 
					break
				case 'BUGS':
					alert('bugs')
					$.getJSON(context+'/bugs/bugsCrawl/',d=>{}) 
					break
				}
			})
			.appendTo('#left')
		})
		
//		$('<div/>')
//		.css({
//			width: '100%',
//			height: '100px',
//		 border:'1px solid pink'
//		})
//		.appendTo('#left')   ----> 이렇게 하면 늘어난다. 
	}
	return{run}
	
})()
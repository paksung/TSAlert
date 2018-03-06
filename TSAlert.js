/* 
* @Author: pengshuang
* @Date:   2018-03-22 22:18:56
* @Last Modified by:   pengshuang
*/
(function(window){
	"use strict";
	//这几大串字符串是提醒框的图标base64格式
	let infoico = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTMyIDc5LjE1OTI4NCwgMjAxNi8wNC8xOS0xMzoxMzo0MCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUuNSAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NEU0NkI4OUZCMjIyMTFFNzgyMzJBQzc5MkQzQTJGQzUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NEU0NkI4QTBCMjIyMTFFNzgyMzJBQzc5MkQzQTJGQzUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0RTQ2Qjg5REIyMjIxMUU3ODIzMkFDNzkyRDNBMkZDNSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0RTQ2Qjg5RUIyMjIxMUU3ODIzMkFDNzkyRDNBMkZDNSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PsTHfKsAAAGwSURBVHjavJbPSsNAEMaTGLQx2KKCFaV4aC8+gv/w0FNBwYtP4IOUvoF3e9abIopevKSob+CtXiyClyJ6UUw1flOmZYlJd7bFfvCDDd2Zj2w3M2NHUWQNkAPWwQ7YBPMgw799gja4BZfgHvwMSmaRWQoVcAPCSK+Q91YG5Es0mwb1aHjVOYfWbAU0otHV4FypZh4IBIkeQFOwL+CciWaSozsEGTALjoRH+sesLAh8BjklOA/agrhyL4autg2qll4h8JTnBf40dKqyR3fzFqMTfWMF5dkVmvXz0+aKJZdaAeaAL4wjD4/MtoUBfuzNFsGEMJY8ig4fj0R27D/7NjgR8iiR2aRBUCb2ZlKRR9axzLSsrLOGsd0L8mWw31XWUwZx5PHucpuQah9cgRlwYBBHHk0yC8CaMGgVnPLlyBuYkccjHeO1QdA52OPv5sQgjjw+qGbZwrbyCgpKbfRBS9hu7F5tpKpQs/5PtX7lMWwxZ6AElsDxsC3GpHm+gKdRm+dYx4KxDzxJo1xHYNCRjHK2cEjdBRspQ+oduJAMqTqznnLcy4q8Jr1RVQAtXmv1K8AABdjHcY+trisAAAAASUVORK5CYII=',
		errico = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAABoklEQVRIibWWvW7UQBRGj70tFDwCAgkk6kgQfkIFWiHKpCUiT7O8Bo8AT5AgirBvsEu/2RRIbLUNhyJj5BjPj7POJ7m619+x79yZuZVKRhXwEngHPAceAvdC7BewBL4DX4EzIG2oxp5a/aguLNcivFPHfGOw++r5AFBX58GjCPhavdwB1uhSfZUDvlG3I8AabdW3MeAj9feIsEab4I1KHXpnAnwG7uZa9ga6E7wnwD/gB2DvFmCN9oBjANTKdOsfqfvqOpGzDjlHiZyFWqEeZNbgaaj/kwh0HWKE3JQOUGeZpIuWYRe67sQuMl4z1LNMUgw6FKZ6iroqSOyDDoWprnDYRm9DU+sa07ZONvP/qnbeIJaXtLtmsUZKaVXaNF1YX9OUQE9RP90AVhLr06xk4z/LGA7e+Lmj7dDyo+0wkbNQ66a9TzJfNoZObN2HE/XHLcLmgXHtAn7s1WU5tjbBu3fEmDr+iDFtM/qGqKnj/OmmC4sBm/LOd4DNbZWxBNgehJcDQEszg3BlftSvgRfAe2AfeMD1Uf8nV6P+F+Ab8Cdl9hfLD24WpnJX7QAAAABJRU5ErkJggg==',
		sucico = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAbCAYAAABiFp9rAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTMyIDc5LjE1OTI4NCwgMjAxNi8wNC8xOS0xMzoxMzo0MCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUuNSAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Q0U1NkNEQTk4RDI0MTFFN0E2RTA4QzVBOTMyOUNBOEYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Q0U1NkNEQUE4RDI0MTFFN0E2RTA4QzVBOTMyOUNBOEYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDRTU2Q0RBNzhEMjQxMUU3QTZFMDhDNUE5MzI5Q0E4RiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDRTU2Q0RBODhEMjQxMUU3QTZFMDhDNUE5MzI5Q0E4RiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PlWr4mYAAAGoSURBVHjavJaxSwMxFMbvSgdHRegf0FIPxaEOiiBosZMgODhbuIqTgoNUXKSrg7suxVWhq4pIRwvqUDfpYCd1KIJCERWs8Yu8QjiaXnIX74NfuUtyea/Jy8uzGWOWj8bAEpgCE2CQ2l/BPbgCp+Cu7yzckIQUOAJfzF8dcAxGZPPJjBTAO9PXJ1hTNVRi4VXyM1Rk5lSUGZph5pXrzm9T1NmgAdKWWTVBij/EqGHlH4xwJYErhve1gWWqgg3w7Gmvd/cobcDIDYiT07Ue/Rm+dNmQy8P3Nge+wRZlEK/m4vhxQhh5ArOgDQpgXzLO4f9oKKCRF+4paIFlUO4zNhETkqSoDjgEZ5IPeUKdBw9gAVR8nPrbvHKPzfsQDvK5p68NJqkvC34UgqUSI++8GgAH9Mw9rgp9i+CWrowLOux+almUbWXaI8956F4Cl95HwZtG+G+qnKMdT+JNgkfNc5ZRzQzrNC4BmppG6mL2zit8wIOmESBruJFm78juI+8Nux3FDWuyZthVrYLyAasgXpqt6pRbQeq6E+DI5rM1KtVpMA6Gg1SqvwIMAN9CkX6tiaRVAAAAAElFTkSuQmCC',
		closeico = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTMyIDc5LjE1OTI4NCwgMjAxNi8wNC8xOS0xMzoxMzo0MCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUuNSAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NjEwOTY1MDFCMjIyMTFFNzk5RjhFMjUyQTAxNTkxMDgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NjEwOTY1MDJCMjIyMTFFNzk5RjhFMjUyQTAxNTkxMDgiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo2MTA5NjRGRkIyMjIxMUU3OTlGOEUyNTJBMDE1OTEwOCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo2MTA5NjUwMEIyMjIxMUU3OTlGOEUyNTJBMDE1OTEwOCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PnFtImcAAAC4SURBVHjahNLNCoJAFIbhsZto16b/v0WIkEshEKFtJOTCm+teug2LSFt0BzG9A0cYpsmER/Q7Z4aZ0UBrvVNK9XFW3dcJjWLACBVKqB9M7Wp622CKGwpPcyG1iXm3C3PckVtZLtmszdzZlnjgIMzzwu7xrXeNl1i59Z7nNIZ4i/FX1ZlhjxobUUvmXVKGJ0IrCyXL3AEpGkSePUVSS9sBiZxG3PHhYlleEnA7spUKlz+/xhaDjwADABf9aCxXrFNvAAAAAElFTkSuQmCC';
	function MyAlert(options){
		this.opts = Object.assign({
			content: '这个是一个提示！',	//弹框的提示文字
			theme: 'info',				//弹框主题  info、err、suc
			autoClose: 0				//弹框自动关闭时间 单位为s，默认为0表示不自动关闭
		}, options);
		this.init();
	}

	/**
	 * 初始化弹框
	 * @return {[type]} [description]
	 */
	MyAlert.prototype.init = function(){
		let self = this;
		insertCSS();	//插入弹框的css内联样式
		this.TSBG = document.createElement('div');	//背景层
		this.TSBG.className = 'tsbg';
		this.panel = document.createElement('div');	//弹框主体
		this.panel.className = 'TSTips '+this.opts.theme;
		let ico = document.createElement('i');		//弹框图标
		ico.className = 'ico';
		this.panel.appendChild(ico);
		let content = document.createElement('span');//提示内容块
		content.innerText = this.opts.content;
		this.panel.appendChild(content);
		//自动关闭功能
		if(this.opts.autoClose){
			let auto = document.createElement('i');
			auto.className = 'autoC';
			let count = this.opts.autoClose;
			auto.innerText = count + 's后自动关闭';
			this.panel.appendChild(auto);
			let interval = setInterval(function(){
				count--;
				auto.innerText = count + 's后自动关闭';
				if(count <= 0){
					clearInterval(interval);
					self.close();
				}
			}, 1000);
		}
		let cha = document.createElement('i');	//‘x’按钮
		cha.className = 'close';
		//关闭弹框
		cha.onclick = function(e){
			self.close();
		};
		this.panel.appendChild(cha);
		this.TSBG.appendChild(this.panel);
		document.body.appendChild(this.TSBG);
		banScroll();

		//点击背景层抖动弹框提醒
		this.TSBG.onclick = function(e){
			let bg = this.childNodes[0];
			bg.className += ' shake';
			setTimeout(function(){
				bg.className = bg.className.replace(' shake', '');
			}, 400);
		};
		this.panel.onclick = function(e){
			e.stopPropagation();
		};
	};

	/**
	 * 在弹框内容块右侧添加按钮的方法
	 * @param {[type]} options {text: '', event: function} text:按钮文字	event:点击触发的事件
	 */
	MyAlert.prototype.addBtn = function(options){
		let self = this;
		let btn = document.createElement('button');
		btn.innerText = options.text;
		btn.addEventListener('click', function(e){
			self.close();
		});
		btn.addEventListener('click', options.event);
		this.panel.appendChild(btn);
		return this;
	};

	//关闭弹框
	MyAlert.prototype.close = function(){
		if(this.TSBG){
			document.body.removeChild(this.TSBG);
			document.body.style.overflow = 'auto';
			document.body.style.paddingRight = 0 + 'px';
			this.TSBG = null;
		}
		return this;
	};

	//插入内联css样式
	function insertCSS(){
		if(!document.getElementById('TSAlertCSS')){
			let style = document.createElement('style');

			let shakeIt = '@keyframes shakeIt {0% {transform: translate(-50%,-50%) rotate(0)}';	//抖动动画
			for(let i = 9;i>0;i--){
				let rotate = i % 2 == 0 ? - i * 1.5 : i * 1.5;
				shakeIt += 10 - i + '0%{transform: translate(-50%,-50%) rotate('+rotate+'deg)}' 
			}
			shakeIt += '100% {transform: translate(-50%,-50%) rotate(0)}}';

			style.type = 'text/css';
			style.id = 'TSAlertCSS';
			style.innerHTML = `.tsbg{position:fixed;top:0;z-index:9999;width:100%;height:100%;}.TSTips{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);background:#fd5b6f;height:96px;padding:0 40px;border-radius:4px;color:#fff;line-height:96px;box-shadow:0 0 60px 0 rgba(100,103,103,0.3);font-size:0;user-select:none;}.TSTips.suc{background:#00aec3;}.TSTips>i.ico{display:inline-block;width:27px;height:96px;margin-right:7px;vertical-align:top;}
			.TSTips.info>i.ico{background:url(${infoico}) 0 34.5px no-repeat;}.TSTips.err>i.ico{background:url(${errico}) 0 34.5px no-repeat;width:28px;}.TSTips.suc>i.ico{background:url(${sucico}) 0 34.5px no-repeat;}.TSTips>span{font-size:16px;font-family:'Noto Sans S Chinese Medium';}.TSTips>button{height:30px;padding:0 17px;background-color:#fff0f0;border-radius:4px;cursor:pointer;margin-left:10px;border:none;outline:none;}.TSTips>button:hover{background-color:#fff;}.TSTips>button:first-of-type{background-color:#fff;color:#000;opacity: 0.6;margin-left:43px;}.TSTips>button:first-of-type:hover{opacity: 0.5;}.TSTips>.autoC{font-size:12px;margin-left:16px;font-style:normal;}.TSTips>.close{position:absolute;width:12px;height:12px;top:10px;right:10px;cursor:pointer;background:url(${closeico});}.shake{animation: shakeIt 0.4s;}${shakeIt}`;
			
			document.getElementsByTagName('head')[0].appendChild(style);
		}
		
	}

	/**
	 * 弹出框后禁止页面滚动
	 * @return {[type]} [description]
	 */
	function banScroll(){
		let tsbgw = document.querySelector('.tsbg').getBoundingClientRect().width,
			windowW = window.innerWidth;
		if(windowW - tsbgw >= 0){
			document.body.style.overflow = 'hidden';
			document.body.style.paddingRight = windowW - tsbgw + 'px'; //windowW - tsbgw = 滚动条宽度
		}
	}
	
	function TSAlert(options){
		let theA = new MyAlert(options);
		return theA;
	}

	window.TSAlert = TSAlert;
})(window);
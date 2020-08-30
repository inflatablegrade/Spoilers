buttons = document.getElementsByTagName("button");

for(let i=0;i<buttons.length;i++){
	let btn = buttons[i];
	let clickEvent = btn.onclick;
	let type = btn.type;
	let outerHTML = btn.outerHTML;
	let curClass = btn.className;
	
	let classSegments = curClass.match(/spoiler/ig);
	
//   onclick="var el = this.parentNode.parentNode.getElementsByTagName('dd')[0]; var v = el.style.display != 'none'; el.style.display = v ? 'none' : 'block'; this.getElementsByTagName('span')[0].innerHTML = (v ? '[+]' : '[-]'); ">	
	let outerSegments = outerHTML.match(/[.]{1}style[.]{1}display[^=]{0,}[=]{1,2}[^=;]{0,}["']{1}none["']{1}/g);
// 	alert(btn.outerHTML);

    if(classSegments !== null && classSegments !== undefined){
		btn.click();
	}
    else if(clickEvent !== null && clickEvent !== undefined){
//		alert(1);
        let segments = clickEvent.match(/[.]{1}style[.]{1}display[^=]{0,}[=]{1,2}[^=;]{0,}["']{1}none["']{1}/g);
	
	    if(segments.length>0 && btn.type == "button"){
		    btn.click();
	    }
	}
	else if(outerSegments !== null && outerSegments !== undefined){
		btn.click();
	}
}


inputButtons = document.getElementsByTagName("input");

for(let i=0;i<inputButtons.length;i++){
	let btn = inputButtons[i];
	let clickEvent = btn.onclick;
	let type = btn.type;
	let outerHTML = btn.outerHTML;
	let curClass = btn.className;
	
	let classSegments = curClass.match(/spoiler/ig);
	
	let outerSegments = outerHTML.match(/[.]{1}style[.]{1}display[^=]{0,}[=]{1,2}[^=;]{0,}["']{1}none["']{1}/g);
// 	alert(btn.outerHTML);

 
    if(classSegments !== null && classSegments !== undefined){
		btn.click();
	}
    else if(clickEvent !== null && clickEvent !== undefined){
//		alert(1);
        let segments = clickEvent.match(/[.]{1}style[.]{1}display[^=]{0,}[=]{1,2}[^=;]{0,}["']{1}none["']{1}/g);
	
	    if(segments.length>0 && btn.type == "button"){
		    btn.click();
	    }
	}
	else if(outerSegments !== null && outerSegments !== undefined && btn.type == "button"){
		btn.click();
	}
}




linkButtons = document.getElementsByTagName("a");

for(let i=0;i<linkButtons.length;i++){
	let btn = linkButtons[i];
	let clickEvent = btn.onclick;
	let outerHTML = btn.outerHTML;
	let curClass = btn.className;
	
	let classSegments = curClass.match(/spoiler/ig);
	
//   onclick="var el = this.parentNode.parentNode.getElementsByTagName('dd')[0]; var v = el.style.display != 'none'; el.style.display = v ? 'none' : 'block'; this.getElementsByTagName('span')[0].innerHTML = (v ? '[+]' : '[-]'); ">	
	let outerSegments = outerHTML.match(/[.]{1}style[.]{1}display[^=]{0,}[=]{1,2}[^=;]{0,}["']{1}none["']{1}/g);
// 	alert(btn.outerHTML);

    if(classSegments !== null && classSegments !== undefined){
		btn.click();
	}
    else if(clickEvent !== null && clickEvent !== undefined){
//		alert(1);
        let segments = clickEvent.match(/[.]{1}style[.]{1}display[^=]{0,}[=]{1,2}[^=;]{0,}["']{1}none["']{1}/g);
	
	    if(segments.length>0){
		    btn.click();
	    }
	}
	else if(outerSegments !== null && outerSegments !== undefined){
		btn.click();
	}
}  








divButtons = document.getElementsByTagName("div");
divIndices = [];
spanIndices = [];

for(let i=0;i<divButtons.length;i++){
	let btn = divButtons[i];
	let clickEvent = btn.onclick;
	let outerHTML = btn.outerHTML;
	let curClass = btn.className;
	
	
//   onclick="var el = this.parentNode.parentNode.getElementsByTagName('dd')[0]; var v = el.style.display != 'none'; el.style.display = v ? 'none' : 'block'; this.getElementsByTagName('span')[0].innerHTML = (v ? '[+]' : '[-]'); ">	
	let outerSegments = outerHTML.match(/[.]{1}style[.]{1}display[^=]{0,}[=]{1,2}[^=;]{0,}["']{1}none["']{1}/g);
// 	alert(btn.outerHTML);

    if(handleInnerSpoilerDiv(btn)==1){
//		btn.click();
		divIndices.push(i);
		console.log("div, no subs");
	}
    else if(clickEvent !== null && clickEvent !== undefined){
//		alert(1);
        let segments = clickEvent.match(/[.]{1}style[.]{1}display[^=]{0,}[=]{1,2}[^=;]{0,}["']{1}none["']{1}/g);
	
	    if(segments.length>0){
		    btn.click();
			console.log("div, click event");
	    }
	}
	else if(outerSegments !== null && outerSegments !== undefined){
		btn.click();
		console.log("div, onclick");
	}
}  
// clicking sub-nodes triggers the parent nodes too
// divs can be made to work like buttons and input buttons, though there might be divs whose class names have "spoiler" that strictly function as spoiler containers rather than actual content spoilers
// when you come across one and if the script so far didn't work, just click the innermost node with such a class (click only if it's the first node with "spoiler")


spanButtons = document.getElementsByTagName("span");

for(let i=0;i<spanButtons.length;i++){
	let btn = spanButtons[i];
	let clickEvent = btn.onclick;
	let outerHTML = btn.outerHTML;
	let curClass = btn.className;
	
	
//   onclick="var el = this.parentNode.parentNode.getElementsByTagName('dd')[0]; var v = el.style.display != 'none'; el.style.display = v ? 'none' : 'block'; this.getElementsByTagName('span')[0].innerHTML = (v ? '[+]' : '[-]'); ">	
	let outerSegments = outerHTML.match(/[.]{1}style[.]{1}display[^=]{0,}[=]{1,2}[^=;]{0,}["']{1}none["']{1}/g);
// 	alert(btn.outerHTML);

    if(handleInnerSpoilerDiv(btn)==1){
//		btn.click();
        spanIndices.push(i);
		console.log("span, no subs");
	}
    else if(clickEvent !== null && clickEvent !== undefined){
//		alert(1);
        let segments = clickEvent.match(/[.]{1}style[.]{1}display[^=]{0,}[=]{1,2}[^=;]{0,}["']{1}none["']{1}/g);
	
	    if(segments.length>0){
		    btn.click();
			console.log("span, click event");
	    }
	}
	else if(outerSegments !== null && outerSegments !== undefined){
		btn.click();
		console.log("span, onclick");
	}
}  



for(let i=0;i<divIndices.length;i++){
	divButtons[divIndices[i]].click();
}

for(let i=0;i<spanIndices.length;i++){
	spanButtons[spanIndices[i]].click();
}

console.log("divs: "+divIndices.toString());
console.log("spans: "+spanIndices.toString());



//<div class="bbCodeBlock bbCodeQuote bbmSpoilerBlock"> // doesn't work because there's another spoiler class nested into it
//	<div class="attribution type">
//		<span class="button JsOnly" style="display: inline-block;">
//			<span class="bbm_spoiler_show">Picture1 (open)</span> // works but then turns itself invisible and the next visible
//			<span class="bbm_spoiler_hide" style="display:none">Picture1 (close)</span> // works because of the previous click, negating it - we need to determine all the elements to click first without deviating
//		</span>
//	</div>
//	<div class="quotecontent">
//		<div class="bbm_spoiler"><blockquote><img src="http://s20.postimg.org/uywt75x18/2015_12_07_140615.jpg" class="bbCodeImage LbImage" alt="[​IMG]" data-url="http://s20.postimg.org/uywt75x18/2015_12_07_140615.jpg" style=""> </blockquote></div> // should work but doesn't
//	</div>
//</div>


function mergeElementArrays(type1,type2){
	let len = type1.length + type2.length;
	let arr = [];
	
	for(let i=0;i<len;i++){
       if(i<type1.length){
           arr[i] = type1[i];
        }
	   else{
           arr[i] = type2[i-type1.length];
        }
	}
	return arr;
}


function handleInnerSpoilerDiv(el){
	let curClass = el.className;
	let divs = el.getElementsByTagName("div");
	let spans = el.getElementsByTagName("span");
	
	let subs = mergeElementArrays(divs,spans);
	
	let classSegments = curClass.match(/spoiler/ig);
	let curDisplay = el.style.display;
//	console.log(curDisplay);
    let result = 0;
	
	if(classSegments !== null && classSegments !== undefined && curDisplay != "none"){ // if the display is empty and the only subs have "none", count the former as "none"
		if(subs !== null && subs !== undefined){
			let classCount = 0;
			let visibleElCount = 0;
			
	        for(let j=0;j<subs.length;j++){
		        sub = subs[j];
			    subClass = sub.className;
				subDisplay = sub.style.display;
			    subClassSegs = subClass.match(/spoiler/ig);
			
			    if(subClassSegs !== null && subClassSegs !== undefined && subDisplay != "none"){
		            classCount++;
	            }
				if(curDisplay == "" && subDisplay != "none"){
		            visibleElCount++;
	            }
		    }
//			console.log(classCount);
			if(classCount==0){ // there's no sub with a spoiler class
				result = 1;
			}
			if(curDisplay == "" && visibleElCount === 0){
		        result = 0;
	        }
	    }
		else{ // there's no sub, period
			result = 1;
		}
	}
	return result;
}

// aka reborn




  

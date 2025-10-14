var itmArrays = {
	"div": {	
		"indicesArray":[]
		},
	"span": {	
		"indicesArray":[]
		},
	"blockquote": {	
		"indicesArray":[]
		}
	}

var smallContainerSpoilers = 0;

function handleElementsByTagName(elementType){
	let itms = document.getElementsByTagName(elementType);

	for(let i=0; i<itms.length; i++){
		let itm = itms[i];
		let onClickEvent = itm.onclick;
		let outerHTML = itm.outerHTML;
		let curClass = itm.className;

		let spoilerSegments = curClass.match(/spoiler/ig);
		let readMoreSegments = curClass.match(/read[-_]{0,}more/ig);
		let showMoreSegments = curClass.match(/show[-_]{0,}more/ig);		
		let outerSegments = outerHTML.match(/[.]{1}style[.]{1}display[^=]{0,}[=]{1,2}[^=;]{0,}["']{1}none["']{1}/g);

		if(spoilerSegments || readMoreSegments || showMoreSegments){
			console.log("clicking " + elementType);
			itm.click();
			smallContainerSpoilers++;
		}
		else if(onClickEvent){
			if(onClickEvent.match(/[.]{1}style[.]{1}display[^=]{0,}[=]{1,2}[^=;]{0,}["']{1}none["']{1}/g)){
				if(elementType=="input" && itm.type == "button"){
					itm.click();
					smallContainerSpoilers++;
				}
				else if(elementType != "button"){
					itm.click();
					smallContainerSpoilers++;
				}
			}
		}
		else if(outerSegments){
			itm.click();
		}

	}

}


function handleElementsByTagNameNested(elementType){
	let itms = document.getElementsByTagName(elementType);

	for(let i=0; i<itms.length; i++){
		let itm = itms[i];
		let onClickEvent = itm.onclick;
		let outerHTML = itm.outerHTML;
		let curClass = itm.className;

		let spoilerSegments = curClass.match(/spoiler/ig);
		let readMoreSegments = curClass.match(/read[-_]{0,}more/ig);
		let showMoreSegments = curClass.match(/show[-_]{0,}more/ig);		
		let outerSegments = outerHTML.match(/[.]{1}style[.]{1}display[^=]{0,}[=]{1,2}[^=;]{0,}["']{1}none["']{1}/g);

		if(handleInnerSpoilerDiv(itm)==1){
//			itm.click();
			itmArrays[elementType].indicesArray.push(i);
			console.log("div, no subs");
		}

		if(spoilerSegments || readMoreSegments || showMoreSegments){
//			itm.click(); // only click if no small containers are spoilers, and there's no child element with spoiler characteristics
			let spoilerChildren = itm.children;
			let childSpoilerExists = false;
			
			for(let j=0; j<spoilerChildren.length; j++){
				let child = spoilerChildren[j];
				

			}
		}
		else if(onClickEvent){
			if(onClickEvent.match(/[.]{1}style[.]{1}display[^=]{0,}[=]{1,2}[^=;]{0,}["']{1}none["']{1}/g)){
				itm.click();
			}
		}
		else if(outerSegments){
			itm.click();
		}

	}

}


handleElementsByTagName("button");
handleElementsByTagName("input");
handleElementsByTagName("a");


handleElementsByTagNameNested("div");
handleElementsByTagNameNested("span");
handleElementsByTagNameNested("blockquote");


function clickIndex(elementType){
	let ims = document.getElementsByTagName(elementType);

	for(let i=0;i<itmArrays[elementType].indicesArray.length;i++){
		ims[itmArrays[elementType].indicesArray[i]].click();	
		
	}
}

clickIndex("div");
clickIndex("span");
clickIndex("blockquote");



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
	let blockquotes = el.getElementsByTagName("blockquote");
	
	let subs = mergeElementArrays(mergeElementArrays(divs,spans),blockquotes);
	
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


let textarea=document.getElementById('js-textarea');

      
document.getElementById('fontSelect').addEventListener('change', function () {
    let fontValue = this.value;
    textarea.style.fontFamily = fontValue;
});
document.getElementById('size').addEventListener('change',function(){

let fontsize=this.value;
textarea.style.fontSize=fontsize+'px';
});
document.getElementById('underlineButton').addEventListener('click', function () {
    applyFormat('underline');
    
});
document.getElementById('colorPicker').addEventListener('input', function () {
    document.execCommand('foreColor', false, this.value);
   });

document.getElementById('italicize').addEventListener('click', function () {
      applyFormat('italic');
    
 });
 document.getElementById('fonwidth').addEventListener('click', function () {
    applyFormat('bold');

});
function applyFormat(format) {
    document.execCommand(format, false, null);
}
function bgColor(idelement){
    button=document.getElementById(idelement);
    if (button.style.backgroundColor === '' || button.style.backgroundColor === '#084cdf') {

        button.style.backgroundColor = '#3498db'; 
    } else {
   
        button.style.backgroundColor = '#084cdf';
    }


}
 


document.getElementById('close').addEventListener('click',function(){
    document.getElementById("js-textarea").innerHTML=""; 

})
function alignText(align) {
    document.execCommand('justify' + align.charAt(0).toUpperCase() + align.slice(1), false, null);
}


 


document.getElementById("Tab").addEventListener("click", function() {
    indentText();
});

document.getElementById("js-textarea").addEventListener("keydown", function(event) {
    if (event.key === "Tab") {
        event.preventDefault(); 

        indentText();
    }
});
//Tab
function indentText() {
    var textarea = document.getElementById("js-textarea");
    var selection = window.getSelection();
    var range = selection.getRangeAt(0);
    var startOffset = range.startOffset;

  
    var tabCharacter = "\u00a0\u00a0\u00a0\u00a0";
    var tabNode = document.createTextNode(tabCharacter);
    range.deleteContents();
    range.insertNode(tabNode);

  
    range.setStart(tabNode, tabCharacter.length);
    range.collapse(true);
    selection.removeAllRanges();
    selection.addRange(range);

    textarea.dispatchEvent(new Event("input"));
}

// ----------------------------ниже представлен метод решения через span




// function f3() { 
   
//     document.getElementById("js-textarea").style.textAlign = "left"; 
// } 
  
// function f4() {
   
//     document.execCommand('justifyCenter', false, null);

// }  
// function f5() { 
   
//     document.getElementById("js-textarea").style.textAlign = "right"; 
// }  
// function applyStyleToSelection(style) {
    
//     let start = textarea.selectionStart;
//     let end = textarea.selectionEnd;

//     let selectedText = textarea.value.substring(start, end);

//     let prefix = textarea.value.substring(0,start);
//     let suffix = textarea.value.substring(end);

//     textarea.value = prefix + `<span style="font-style:${style}">${selectedText}</span>` + suffix;
// }
// function Cool(){
// alert(document.getElementById('italicize').style.background);
// if(document.getElementById('italicize').style.background==='#406ff0'){
//     document.getElementById('italicize').style.background='#084cdf'
   
// }else{
//     document.getElementById('italicize').style.background='#406ff0'
  

// }
// }



// function toggleStyle(style, value,klasik) {
//     let selection = window.getSelection();
//     if (selection.rangeCount > 0) {
//         let range = selection.getRangeAt(0);
//         let existingSpan = getExistingSpan(range, style, value);

//         if (existingSpan) 
//         {
//             existingSpan.style[style] = (existingSpan.style[style] === value) ? klasik : value;
//         } 
//         else 
//         {
//             let span = document.createElement('span');
//             span.style[style] = value;
//             span.textContent = selection.toString();

//             range.deleteContents();
//             range.insertNode(span);
//         }
//     }
// }

// function getExistingSpan(range, style, value) {
//     let node = range.commonAncestorContainer;

//     while (node) {
//         if (node.nodeType === 1 && node.tagName === 'SPAN' && node.style[style] === value) {
//             return node;
//         }
//         node = node.parentNode;
//     }

//     return null;
// }
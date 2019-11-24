myselector="";
function init_txtarea(selector){
myselector=selector;
$(selector).css({"width":"100%","height":"200px","border":"1px solid red"});
$(selector).attr("contenteditable","true");
var options=["bold","underline","italic","insertOrderedList","insertUnorderedList","insertLineBreak","justifyRight"
,"justifyCenter","justifyLeft","justifyFull","strikethrough","subscript","superscript","superscript","copy","cut"
,"paste","insertParagraph","insertText"];

for (var i=0; i<options.length ; i++) {
	$(selector).before('<button onclick="makeaction(\''+options[i]+'\')">'+options[i]+'</button>');

}

}



function makeaction(command){
	 document.execCommand(`${command}`);

}

function get_content(){
var msg=$(myselector).html();
return msg;	
}

var iDoc = document.getElementById("sys_frame").contentDocument;
var btns = iDoc.getElementsByClassName("button_op");
btns = Array.prototype.slice.call(btns);
var content_ids = [];
btns.forEach(function test(e) {
    var onClc = e.getAttribute("onclick");
    if (onClc.indexOf("huifang") != -1 && encodeURI(e.parentElement.parentElement.previousElementSibling.firstElementChild.innerText) == "%E7%8E%89%E7%BA%A2") {
    	var content_id = onClc.split("(")[1].split(",")[0];
    	var xhr = new XMLHttpRequest();
		xhr.open('POST', "ku_huifang.php?id=" + content_id, true);
		xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	    var data = 'huifang_qudao=%B5%E7%BB%B0&huifang=%B9%B5%CD%A8&talk_content=&track_status=0&remind_date=&id=' + content_id;
		xhr.send(data);
    }
});
/**
 * Created by ThinkPad on 2017/8/31.
 */
//选项卡效果封装
function tab(id) {
    var obj = document.getElementById(id);
    var lis = obj.getElementsByTagName("li");
    for (var i = 0; i < lis.length; i++) {
        lis[i].onclick = function () {
            for (var i = 0; i < lis.length; i++) {
                lis[i].className = "";
            }
            this.className = "current";
        }
    }
}
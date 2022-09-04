//var strArry=new Array(" 反诈骗电话：96110","陌生电话要警惕， 可疑短信需注意。","中奖退税送便宜， 哄你汇钱是目的。");
//var adv;
//adv=strArry[parseInt(Math.random()*4)];
//document.write(adv);
//


function time() {
    function format(i) {
        return (i < 10 ? "0" + i : i);
    }
    document.getElementById("time").innerHTML = "反诈骗电话：96110    ;陌生电话要警惕， 可疑短信需注意     ;   中奖退税送便宜， 哄你汇钱是目的;暴利理财和投资， 多是骗局莫搭理;刷卡消费欠话费， 细分真伪辨猫腻。;冒充领导公检法， 提防骗子在演戏。;安全账户不安全， 资金转账要警惕。;来电自称黑社会， 立刻报警不迟疑。;亲朋好友遇事急， 不忙汇款先联系。;网银升级假信息， 钓鱼网站莫点击。;电子银行本人办， U盾自己拿手里。;个人信息要保密， 密码账号管仔细。;不理不信不汇款， 小心谨慎防万一。;任凭骗术千万变， 我自心中有主意。;辨别假真也不难， 110咨询最放心！"
}
var interval = setInterval(time, 100);


//定时器自动加载
//
//			window.onload =function(){
//				setInterval(btn,1000);//设置多久执行一次,1000毫秒=1秒
//			}
//			
//			function btn(){
//				var img = document.getElementById("img");
//				var ran = Math.floor(Math.random()*7);//生成0和7之间的随机整数；由于会随机到0，所以建议图片命名从0开始
//				img.src = "img/" + ran + ".jpg";
//			}		

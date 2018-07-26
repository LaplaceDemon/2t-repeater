var controllerScope = $('div[ng-controller="chatSenderController"]').scope();
var $sendButton = $(".action a");
var MyFromUserName;

window.setInterval(function(){
    var contentList = controllerScope.chatContent;
    var length = controllerScope.chatContent.length;
    if(length == 0) {
        return ;
    }
    var item = controllerScope.chatContent[length-1];
    var text = item.MMActualContent;
    console.log(text);

    if(!MyFromUserName) {
        if(text == "启动吧2T复读机") {
            MyFromUserName  = item.FromUserName;
            console.log("2T复读机启动啦！");
        }

        return ;
    }
    
    if(item.FromUserName != MyFromUserName) {
        controllerScope.editAreaCtn = "2T复读机："+text;
        $sendButton.trigger("click");
    }
},500);
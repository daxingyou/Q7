cc.Class({
    extends: cc.Component,

    properties: {
         userName:{// 用户名 
             default:null,
             type:cc.EditBox 
         },
         password:{// 密码 
             default:null,
             type:cc.EditBox
         },
         remAct:{//  记住账号  
             default:null,
             type:cc.Node
         },
         remPwd:{//  记住密码  
             default:null,
             type:cc.Node
         }
    },

    // use this for initialization
    onLoad: function () {
        
    },
    logIn:function(){
        // 登录
        var account = this.userName.string;
        var password = this.password.string;
        // 记住账号密码
        var isRemAct = this.remAct.children[1].active;
        var isRemPwd = this.remPwd.children[1].active;
        cc.log(isRemPwd);
        cc.director.loadScene("Game");
    },
    update: function (dt) {
    
    },
});

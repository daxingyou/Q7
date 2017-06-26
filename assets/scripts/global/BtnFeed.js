cc.Class({
    extends: cc.Component,

    properties: {
       
    },

    // use this for initialization
    onLoad: function () {
        this.node.on(cc.Node.EventType.MOUSE_DOWN, function (event) {
           var action = cc.scaleTo(0.05, 0.9, 0.9);
            //var action = cc.scaleTo(0.05, 1.1, 1.1);
            this.node.runAction(action);
        }, this);
        this.node.on(cc.Node.EventType.MOUSE_UP, function (event) {
            var action = cc.scaleTo(0.05, 1, 1);
            //var action = cc.scaleTo(0.05, 1.1, 1.1);
            this.node.runAction(action);
        }, this);
    },
    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});

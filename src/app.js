//gameScene.js
var gameScene = cc.Scene.extend({
    onEnter: function() {
        this._super();
        var gameLayer = new game();
        this.addChild(gameLayer);
    }
});

var game = cc.Layer.extend({
    ctor: function() {
        this._super();

        var size = cc.director.getWinSize();
        // 配列の宣言　ブロックの名前を指定
        for (var i = 0; i < 4; i++) {
            for (var j = 0; j < 4; j++) {
                var sprite = new cc.Sprite(res.cover_png);
                sprite.attr({
                    x: size.height *0.1 + 70 * j,
                    y: size.height *0.2 + 70 * i,
                    scale: 1.0,
                    rotation: 0
                });
                this.addChild(sprite, 0);
            }
        }
    },
});

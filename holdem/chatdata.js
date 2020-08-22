"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var originChatdata = [];
var chatdata = [];
(function () {
    // 原始数据
    var rawData = {
        zhengfeijie: {
            nickname: "✈️🐔",
            data: [
                {
                    time: "2020/08/16",
                    value: -512,
                },
                {
                    time: "2020/08/22",
                    value: 242,
                },
            ],
        },
        ruanyujing: {
            nickname: "静静",
            data: [
                {
                    time: "2020/08/16",
                    value: -101,
                },
                {
                    time: "2020/08/22",
                    value: 242,
                },
            ],
        },
        caofangning: {
            nickname: "经理",
            data: [
                {
                    time: "2020/08/16",
                    value: 362,
                },
            ],
        },
        yousiyao: {
            nickname: "斯尧",
            data: [
                {
                    time: "2020/08/16",
                    value: 631,
                },
                {
                    time: "2020/08/22",
                    value: -53,
                },
            ],
        },
        linyanzhi: {
            nickname: "彦志",
            data: [
                {
                    time: "2020/08/16",
                    value: 73,
                },
            ],
        },
        zhaohaibo: {
            nickname: "波哥",
            data: [
                {
                    time: "2020/08/16",
                    value: -374,
                },
                {
                    time: "2020/08/22",
                    value: 25,
                },
            ],
        },
        chenkangyi: {
            nickname: "康怡",
            data: [
                {
                    time: "2020/08/22",
                    value: -5,
                },
            ],
        },
        weichangjiang: {
            nickname: "长江",
            data: [
                {
                    time: "2020/08/22",
                    value: -309,
                },
            ],
        },
        huangzhaobiao: {
            nickname: "袜子",
            data: [
                {
                    time: "2020/08/22",
                    value: -137,
                },
            ],
        },
        tie: {
            nickname: "铁同学",
            data: [
                {
                    time: "2020/08/16",
                    value: 251,
                },
            ],
        },
        weisiyu: {
            nickname: "思禹",
            data: [
                {
                    time: "2020/08/16",
                    value: -115,
                },
            ],
        },
        leiyu: {
            nickname: "雷宇",
            data: [
                {
                    time: "2020/08/16",
                    value: -215,
                },
            ],
        },
    };
    var outputData = [];
    Object.entries(rawData).filter(function (_a) {
        var name = _a[0], detail = _a[1];
        detail.data.filter(function (timeAndValue) {
            outputData.push(__assign({ id: name, nickname: (detail.nickname || name) + "(" + detail.data.length + ")" }, timeAndValue));
        });
    });
    // 要展示的id
    var filteredId = [
        "zhengfeijie",
        "ruanyujing",
        "caofangning",
        "zhaohaibo",
        "linyanzhi",
        "yousiyao",
        "chenkangyi",
    ];
    originChatdata = outputData;
    chatdata = outputData.filter(function (data) {
        return filteredId.includes(data.id);
    });
})();
console.log(originChatdata, chatdata);

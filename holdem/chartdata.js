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
var originChartdata = [];
var chartdata = [];
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
                {
                    time: "2020/09/06",
                    value: -322,
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
                {
                    time: "2020/09/06",
                    value: -656,
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
        dongchencheng: {
            nickname: "晨程",
            data: [
                {
                    time: "2020/09/06",
                    value: 1433,
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
                {
                    time: "2020/09/06",
                    value: -415,
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
                {
                    time: "2020/09/06",
                    value: 374,
                },
            ],
        },
        chenqiaojun: {
            nickname: "Kendy",
            data: [
                {
                    time: "2020/09/06",
                    value: 0,
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
                {
                    time: "2020/09/06",
                    value: 731,
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
        yangbai: {
            nickname: "柏哥",
            data: [
                {
                    time: "2020/09/06",
                    value: -1145,
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
        "dongchencheng",
        "yousiyao",
        "zhaohaibo",
        "linyanzhi",
        "chenqiaojun",
        "chenkangyi",
    ];
    originChartdata = outputData;
    chartdata = outputData.filter(function (data) {
        return filteredId.includes(data.id);
    });
})();
console.log(originChartdata, chartdata);

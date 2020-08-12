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
var chatdata = (function () {
    // 原始数据
    var rawData = {
        zhengfeijie: {
            id: 0,
            nickname: "✈️🐔",
            data: [
                {
                    time: "2020/08/00",
                    value: 0
                },
                {
                    time: "2020/08/01",
                    value: 450
                },
                {
                    time: "2020/08/02",
                    value: 0
                },
                {
                    time: "2020/08/03",
                    value: 2
                },
                {
                    time: "2020/08/04",
                    value: 5
                }
            ]
        },
        ruanyujing: {
            id: 1,
            nickname: "静静",
            data: [
                {
                    time: "2020/08/01",
                    value: -2
                },
                {
                    time: "2020/08/02",
                    value: 45
                },
                {
                    time: "2020/08/03",
                    value: 0
                },
                {
                    time: "2020/08/04",
                    value: -2
                },
                {
                    time: "2020/08/08",
                    value: 100
                },
                {
                    time: "2020/08/09",
                    value: -6
                }
            ]
        },
        caofangning: {
            id: 2,
            nickname: "经理",
            data: [
                {
                    time: "2020/08/07",
                    value: -200
                },
                {
                    time: "2020/08/08",
                    value: 100
                },
                {
                    time: "2020/08/10",
                    value: -2
                },
                {
                    time: "2020/08/02",
                    value: 22
                },
                {
                    time: "2020/08/09",
                    value: -6
                },
                {
                    time: "2020/08/09",
                    value: 4
                }
            ]
        }
    };
    var outputData = [];
    Object.entries(rawData).filter(function (_a) {
        var name = _a[0], detail = _a[1];
        detail.data.filter(function (timeAndValue) {
            outputData.push(__assign({ nickname: detail.nickname || name }, timeAndValue));
        });
    });
    return outputData;
})();
console.log(chatdata);

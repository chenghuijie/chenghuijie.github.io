type outputDataType = {
  nickname: string;
  time: string;
  value: number;
}[];

const chatdata: outputDataType = (function () {
  // 原始数据
  const rawData: {
    [name: string]: {
      id: string | number;
      nickname?: string;
      data: { time: string; value: number }[];
    };
  } = {
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
          value: 45
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
          value: 22
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
          value: 20
        },
        {
          time: "2020/08/08",
          value: 2
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

  const outputData: outputDataType = [];
  Object.entries(rawData).filter(([name, detail]) => {
    detail.data.filter((timeAndValue) => {
      outputData.push({
        nickname: detail.nickname || name,
        ...timeAndValue
      });
    });
  });

  return outputData;
})();

console.log(chatdata);

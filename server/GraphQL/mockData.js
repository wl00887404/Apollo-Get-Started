const casual = require('casual');
let todos = [{
        id: 1,
        createAt: "2017/4/19",
        name: "洗菜、洗碗、洗衣服",
        finished: false
    },
    {
        id: 2,

        createAt: "2017/5/5",
        name: "用愛來關懷，讓台灣發電",
        finished: true
    },
    {
        id: 3,
        createAt: "2017/6/19",
        name: "背熟出師表",
        finished: false
    },
    {
        id: 4,
        createAt: "2017/7/31",
        name: "記得餵我的狗",
        finished: false
    }, {
        id: 5,
        createAt: "2017/8/20",
        name: "準備「線上 React 讀書會 apollodata 入門」的分享",
        finished: true
    }
]

module.exports = todos
// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  globalData: {
    userInfo: null,
    avatarUrl:'',
    map : [
      {
        "name": "游在地大",
        "scale": 16,
        "data": [
          {
            latitude: 30.517666,
            longitude:114.400527,
            name:'逸夫博物馆',
            address: '湖北省武汉市洪山区鲁磨路407-104号',
          },
          {
            latitude: 30.518891,
            longitude:114.40338,
            name:'化石林',
            address: '湖北省武汉市洪山区鲁磨路388号中国地质大学东区',
          },
          {
            latitude: 30.519752,
            longitude:114.399893,
            name:'校友园',
            address: '湖北省武汉市洪山区鲁磨路354附近',
          },
          {
            latitude: 30.522784,
            longitude:114.397982,
            name:'荷花池',
            address: '快来和我聊天吧~我可什么都知道',
          },
          {
            latitude: 30.517035,
            longitude:114.403552,
            name:'东区樱园',
            address: '湖北省武汉市洪山区鲁磨路388号中国地质大学东区',
          },
          {
            latitude: 30.5189,
            longitude:114.405938,
            name:'东区桂圆',
            address: '湖北省武汉市洪山区鲁磨路388号中国地质大学',
          },
          {
            latitude: 30.520805,
            longitude:114.39983,
            name:'地勘广场',
            address: '湖北省武汉市洪山区鲁磨路388号中国地质大学',
          },
          {
            latitude: 30.523856,
            longitude:114.398929,
            name:'地大隧道',
            address: '湖北省武汉市洪山区鲁磨路388号中国地质大学',
          },
          {
            latitude: 30.525482,
            longitude:114.394817,
            name:'南望山',
            address: '湖北省武汉市洪山区紫薇路',
          },
          {
            latitude: 30.524809,
            longitude:114.400312,
            name:'付家山',
            address: '湖北省武汉市洪山区地大隧道',
          },
          {
            latitude: 30.527254,
            longitude:114.400238,
            name:'映山塘',
            address: '湖北省武汉市洪山区北二路与宁静路交叉口南200米',
          },
          {
            latitude: 30.530347,
            longitude:114.401149,
            name:'北区情侣坡',
            address: '湖北省武汉市洪山区鲁磨路407-104号',
          },
          {
            latitude: 30.530259,
            longitude:114.399425,
            name:'北区综合文化中心',
            address: '湖北省武汉市洪山区鲁磨路407-104号',
          },
          {
            latitude: 30.518947,
            longitude:114.402236,
            name:'四重门',
            address: '湖北省武汉市洪山区鲁磨路407-104号',
          }
        ]
      },
      {
        "name": "学在地大",
        "scale": 16,
        "data": [
          {
            latitude: 30.518646,
            longitude:114.39925,
            name:'西区图书馆',
            adderss: '湖北省武汉市洪山区鲁磨路388号中国地质大学西区',
          },
          {
            latitude: 30.520973,
            longitude:114.399961,
            name:'西区主楼',
            address: '湖北省武汉市洪山区鲁磨路388号中国地质大学',
          },
          {
            latitude: 30.5204,
            longitude:114.399758,
            name:'基础楼',
            address: '湖北省武汉市洪山区鲁磨路388号中国地质大学',
          },
          {
            latitude: 30.520379,
            longitude:114.40032,
            name:'西区教1楼',
            address: '湖北省武汉市洪山区中国地质大学内',
          },
          {
            latitude: 30.527112,
            longitude:114.398908,
            name:'大学生创新创业俱乐部',
            address: '湖北省武汉市洪山区地大隧道附近',
          },
          {
            latitude: 30.529672,
            longitude:114.400341,
            name:'北区计算机实验教学中心',
            address: '湖北省武汉市洪山区鲁磨路388号中国地质大学北区',
          },
          {
            latitude: 30.528813,
            longitude:114.400021,
            name:'北3楼',
            address: '湖北省武汉市洪山区中国地质大学内',
          },
          {
            latitude: 30.517183,
            longitude:114.403043,
            name:'东区教学综合楼',
            address: '湖北省武汉市洪山区鲁磨路388号校园东区',
          },
          {
            latitude: 30.520802,
            longitude:114.400989,
            name:'信息楼',
            address: '湖北省武汉市洪山区鲁磨路407-104号',
          },
          {
            latitude: 30.521741,
            longitude:114.400065,
            name:'文华楼',
            address: '湖北省武汉市洪山区鲁磨路407-104号',
          },
          {
            latitude: 30.521726,
            longitude:114.401515,
            name:'月球钻孔研究中心',
            address: '湖北省武汉市洪山区中国地质大学附近',
          },
          {
            latitude: 30.52042,
            longitude:114.403518,
            name:'高等教育研究所',
            address: '湖北省武汉市洪山区鲁磨路407-104号',
          }
        ]
      },
      {
        "name": "吃在地大",
        "scale": 16,
        "data": [
          {
            latitude: 30.519895,
            longitude:114.396898,
            name:'翰墨斋',
            adderss: '湖北省武汉市洪山区鲁磨路407-104号',
          },
          {
            latitude: 30.520636,
            longitude:114.396708,
            name:'学生三食堂',
            address: '湖北省武汉市洪山区鲁磨路407-104号',
          },
          {
            latitude: 30.521216,
            longitude:114.396509,
            name:'西苑食堂',
            address: '湖北省武汉市洪山区鲁磨路407-104号',
          },
          {
            latitude: 30.521539,
            longitude:114.396671,
            name:'蜜乐茶悠',
            address: '湖北省武汉市洪山区鲁磨路407-104号',
          },
          {
            latitude: 30.521766,
            longitude:114.396429,
            name:'清真食堂',
            address: '湖北省武汉市洪山区鲁磨路407-104号',
          },
          {
            latitude: 30.522199,
            longitude:114.39645,
            name:'清真食堂',
            address: '湖北省武汉市洪山区鲁磨路407-104号',
          },
          {
            latitude: 30.522233,
            longitude:114.396209,
            name:'张亮麻辣烫',
            address: '湖北省武汉市洪山区鲁磨路407-104号',
          },
          {
            latitude: 30.522479,
            longitude:114.396204,
            name:'海岛雪',
            address: '湖北省武汉市洪山区鲁磨路407-104号',
          },
          {
            latitude: 30.527495,
            longitude:114.399139,
            name:'北区学一食堂',
            address: '湖北省武汉市洪山区鲁磨路407-104号',
          },
          {
            latitude: 30.527571,
            longitude:114.399225,
            name:'华莱士',
            address: '湖北省武汉市洪山区鲁磨路407-104号',
          },
          {
            latitude: 30.528972,
            longitude:114.398103,
            name:'学苑餐厅',
            address: '湖北省武汉市洪山区鲁磨路407-104号',
          },
          {
            latitude: 30.520886,
            longitude:114.405334,
            name:'教育食堂',
            address: '湖北省武汉市洪山区鲁磨路407-104号',
          },
          {
            latitude: 30.520897,
            longitude:114.405817,
            name:'东苑食堂',
            address: '湖北省武汉市洪山区鲁磨路407-104号',
          },
          {
            latitude: 30.518331,
            longitude:114.405699,
            name:'内招餐厅',
            address: '湖北省武汉市洪山区鲁磨路407-104号',
          },
        ]
      },
      {
        "scale": 16,
        "name": "运动地大",
        "data": [
          {
            latitude: 30.520488,
            longitude:114.398265,
            name:'西区操场',
            adderss: '湖北省武汉市洪山区鲁磨路407-104号',
          },
          {
            latitude: 30.522007,
            longitude:114.398255,
            name:'西区体育馆',
            address: '湖北省武汉市洪山区鲁磨路407-104号',
          },
          {
            latitude: 30.521958,
            longitude:114.39775,
            name:'攀岩馆',
            address: '湖北省武汉市洪山区鲁磨路407-104号',
          },
          {
            latitude: 30.521951,
            longitude:114.398493,
            name:'西区篮球场',
            address: '湖北省武汉市洪山区鲁磨路407-104号',
          },
          {
            latitude: 30.522186,
            longitude:114.397097,
            name:'西区排球场',
            address: '湖北省武汉市洪山区鲁磨路407-104号',
          },
          {
            latitude: 30.522601,
            longitude:114.397153,
            name:'学生宿舍篮球场',
            address: '湖北省武汉市洪山区鲁磨路407-104号',
          },
          {
            latitude: 30.529349,
            longitude:114.400976,
            name:'北区排球场',
            address: '湖北省武汉市洪山区鲁磨路407-104号',
          },
          {
            latitude: 30.527741,
            longitude:114.401388,
            name:'北区体育馆',
            address: '湖北省武汉市洪山区鲁磨路407-104号',
          },
          {
            latitude: 30.530436,
            longitude:114.397154,
            name:'北区田径场',
            address: '湖北省武汉市洪山区鲁磨路407-104号',
          },
          {
            latitude: 30.519755,
            longitude:114.402858,
            name:'游泳馆',
            address: '湖北省武汉市洪山区鲁磨路407-104号',
          },
          {
            latitude: 30.520427,
            longitude:114.402886,
            name:'球场',
            address: '湖北省武汉市洪山区鲁磨路407-104号',
          },
          {
            latitude: 30.522025,
            longitude:114.405443,
            name:'东区篮球场',
            address: '湖北省武汉市洪山区鲁磨路407-104号',
          },
          {
            latitude: 30.521117,
            longitude:114.403828,
            name:'东区运动场',
            address: '湖北省武汉市洪山区鲁磨路407-104号',
          },
          {
            latitude: 30.520216,
            longitude:114.40655,
            name:'东区老年活动中心',
            address: '湖北省武汉市洪山区鲁磨路407-104号',
          },
        ]
      },
      {
        "scale": 16,
        "name": "交通服务",
        "data": [
          {
            latitude: 30.519983,
            longitude:114.399499,
            name:'停车场',
            adderss: '湖北省武汉市洪山区鲁磨路407-104号',
          },
          {
            latitude: 30.522365,
            longitude:114.396985,
            name:'停车场',
            address: '湖北省武汉市洪山区鲁磨路407-104号',
          },
          {
            latitude: 30.522675,
            longitude:114.400852,
            name:'停车场',
            address: '湖北省武汉市洪山区鲁磨路407-104号',
          },
          {
            latitude: 30.518492,
            longitude:114.401714,
            name:'停车场',
            address: '湖北省武汉市洪山区鲁磨路407-104号',
          },
          {
            latitude: 30.517596,
            longitude:114.401901,
            name:'停车场',
            address: '湖北省武汉市洪山区鲁磨路407-104号',
          },
          {
            latitude: 30.516945,
            longitude:114.405001,
            name:'停车场',
            address: '湖北省武汉市洪山区鲁磨路407-104号',
          },
          {
            latitude: 30.516669,
            longitude:114.40609,
            name:'停车场',
            address: '湖北省武汉市洪山区鲁磨路407-104号',
          },
          {
            latitude: 30.519151,
            longitude:114.406543,
            name:'停车场',
            address: '湖北省武汉市洪山区鲁磨路407-104号',
          },
          {
            latitude: 30.51912,
            longitude:114.401362,
            name:'鲁磨路地质大学(公交站)',
            address: '湖北省武汉市洪山区鲁磨路407-104号',
          },
          {
            latitude: 30.519458,
            longitude:114.401324,
            name:'鲁磨路地质大学(公交站)',
            address: '湖北省武汉市洪山区鲁磨路407-104号',
          },
          {
            latitude: 30.524109,
            longitude:114.404511,
            name:'鲁磨路南望山(公交站)',
            address: '湖北省武汉市洪山区鲁磨路407-104号',
          },
          {
            latitude: 30.524183,
            longitude:114.405003,
            name:'鲁磨路南望山(公交站)',
            address: '湖北省武汉市洪山区鲁磨路407-104号',
          },
          {
            latitude: 30.526448,
            longitude:114.408275,
            name:'八一路鲁磨路(公交站)',
            address: '湖北省武汉市洪山区鲁磨路407-104号',
          },
          {
            latitude: 30.526646,
            longitude:114.408374,
            name:'八一路鲁磨路(公交站)',
            address: '湖北省武汉市洪山区鲁磨路407-104号',
          },
          {
            latitude: 30.530861,
            longitude:114.396831,
            name:'八一路沙湾村(公交站)',
            address: '湖北省武汉市洪山区鲁磨路407-104号',
          },
          {
            latitude: 30.531123,
            longitude:114.394664,
            name:'八一路沙湾村(公交站)',
            address: '湖北省武汉市洪山区鲁磨路407-104号',
          },
        ]
      },
      {
        "name": "生活服务",
        "scale": 16,
        "data": [
          {
            latitude: 30.518032,
            longitude:114.399852,
            name:'中商平价',
            adderss: '湖北省武汉市洪山区鲁磨路407-104号',
          },
          {
            latitude: 30.518049,
            longitude:114.399745,
            name:'益晴眼睛',
            address: '湖北省武汉市洪山区鲁磨路407-104号',
          },
          {
            latitude: 30.518081,
            longitude:114.399123,
            name:'百味商店',
            address: '湖北省武汉市洪山区鲁磨路407-104号',
          },
          {
            latitude: 30.518084,
            longitude:114.399225,
            name:'Bingo',
            address: '湖北省武汉市洪山区鲁磨路407-104号',
          },
          {
            latitude: 30.518127,
            longitude:114.397466,
            name:'西区便民服务点',
            address: '湖北省武汉市洪山区鲁磨路407-104号',
          },
          {
            latitude: 30.520103,
            longitude:114.397392,
            name:'Dereator',
            address: '湖北省武汉市洪山区鲁磨路407-104号',
          },
          {
            latitude: 30.520414,
            longitude:114.397021,
            name:'中商平价',
            address: '湖北省武汉市洪山区鲁磨路407-104号',
          },
          {
            latitude: 30.520317,
            longitude:114.396881,
            name:'传奇春天大药房',
            address: '湖北省武汉市洪山区鲁磨路407-104号',
          },
          {
            latitude: 30.521284,
            longitude:114.396702,
            name:'亮亮超市',
            address: '湖北省武汉市洪山区鲁磨路407-104号',
          },
          {
            latitude: 30.528722,
            longitude:114.398141,
            name:'中商平价',
            address: '湖北省武汉市洪山区鲁磨路407-104号',
          },
          {
            latitude: 30.528538,
            longitude:114.397647,
            name:'新药特药大药房',
            address: '湖北省武汉市洪山区鲁磨路407-104号',
          },
          {
            latitude: 30.528526,
            longitude:114.398048,
            name:'中国电信',
            address: '湖北省武汉市洪山区鲁磨路407-104号',
          },
          {
            latitude: 30.529141,
            longitude:114.398703,
            name:'ATM',
            address: '湖北省武汉市洪山区鲁磨路407-104号',
          },
          {
            latitude: 30.52229,
            longitude:114.402179,
            name:'易佰连锁酒店',
            address: '湖北省武汉市洪山区鲁磨路407-104号',
          },
          {
            latitude: 30.522082,
            longitude:114.4021,
            name:'铂锐造型',
            address: '湖北省武汉市洪山区鲁磨路407-104号',
          },
          {
            latitude: 30.521775,
            longitude:114.402056,
            name:'中国移动通信',
            address: '湖北省武汉市洪山区鲁磨路407-104号',
          },
          {
            latitude: 30.521303,
            longitude:114.402043,
            name:'柏曼酒店',
            address: '湖北省武汉市洪山区鲁磨路407-104号',
          },
          {
            latitude: 30.520742,
            longitude:114.402025,
            name:'中国工商银行',
            address: '湖北省武汉市洪山区鲁磨路407-104号',
          },
          {
            latitude: 30.520279,
            longitude:114.401897,
            name:'文华书店',
            address: '湖北省武汉市洪山区鲁磨路407-104号',
          },
          {
            latitude: 30.520185,
            longitude:114.401909,
            name:'东区文印',
            address: '湖北省武汉市洪山区鲁磨路407-104号',
          },
          {
            latitude: 30.521016,
            longitude:114.403169,
            name:'中国地质大学医院',
            address: '湖北省武汉市洪山区鲁磨路407-104号',
          },
          {
            latitude: 30.520823,
            longitude:114.403957,
            name:'谢老师特色民俗',
            address: '湖北省武汉市洪山区鲁磨路407-104号',
          },
          {
            latitude: 30.52069,
            longitude:114.406521,
            name:'地大社区集贸广场',
            address: '湖北省武汉市洪山区鲁磨路407-104号',
          },
          {
            latitude: 30.520785,
            longitude:114.406519,
            name:'中百超市',
            address: '湖北省武汉市洪山区鲁磨路407-104号',
          },
          {
            latitude: 30.521897,
            longitude:114.405014,
            name:'酒类直供',
            address: '湖北省武汉市洪山区鲁磨路407-104号',
          },
        ]
      },
      {
        "scale": 16,
        "name": "行政大楼",
        "data": [
          {
            latitude: 30.519258,
            longitude:114.400361,
            name:'工程学院',
            adderss: '湖北省武汉市洪山区鲁磨路407-104号',
          },
          {
            latitude: 30.519269,
            longitude:114.39982,
            name:'地球科学学院',
            address: '湖北省武汉市洪山区鲁磨路407-104号',
          },
          {
            latitude: 30.521467,
            longitude:114.400581,
            name:'自动化学院',
            address: '湖北省武汉市洪山区鲁磨路407-104号',
          },
          {
            latitude: 30.521791,
            longitude:114.399298,
            name:'马克思学院',
            address: '湖北省武汉市洪山区鲁磨路407-104号',
          },
          {
            latitude: 30.523346,
            longitude:114.398372,
            name:'机械与电子学院',
            address: '湖北省武汉市洪山区鲁磨路407-104号',
          },
          {
            latitude: 30.523309,
            longitude:114.402005,
            name:'测绘工程研究院',
            address: '湖北省武汉市洪山区鲁磨路407-104号',
          },
          {
            latitude: 30.523046,
            longitude:114.402168,
            name:'地质调查研究院',
            address: '湖北省武汉市洪山区鲁磨路407-104号',
          },
          {
            latitude: 30.524227,
            longitude:114.398146,
            name:'结构楼',
            address: '湖北省武汉市洪山区鲁磨路407-104号',
          },
          {
            latitude: 30.521811,
            longitude:114.398243,
            name:'体育学院',
            address: '湖北省武汉市洪山区鲁磨路407-104号',
          },
          {
            latitude: 30.5284,
            longitude:114.399922,
            name:'公共管理学院',
            address: '湖北省武汉市洪山区鲁磨路407-104号',
          },
          {
            latitude: 30.527909,
            longitude:114.400249,
            name:'外国语学院',
            address: '湖北省武汉市洪山区鲁磨路407-104号',
          },
          {
            latitude: 30.528912,
            longitude:114.400541,
            name:'北区经济管理学院',
            address: '湖北省武汉市洪山区鲁磨路407-104号',
          },
          {
            latitude: 30.528931,
            longitude:114.401317,
            name:'大气科学学院',
            address: '湖北省武汉市洪山区鲁磨路407-104号',
          },
          {
            latitude: 30.530072,
            longitude:114.401524,
            name:'艺术与传媒学院',
            address: '湖北省武汉市洪山区鲁磨路407-104号',
          },
          {
            latitude: 30.521028,
            longitude:114.402179,
            name:'珠宝学院',
            address: '湖北省武汉市洪山区鲁磨路407-104号',
          },
          {
            latitude: 30.520421,
            longitude:114.403517,
            name:'高等教育研究所',
            address: '湖北省武汉市洪山区鲁磨路407-104号',
          },
          {
            latitude: 30.518216,
            longitude:114.403361,
            name:'煤层气资源评价实验室',
            address: '湖北省武汉市洪山区鲁磨路407-104号',
          },
          {
            latitude: 30.51755,
            longitude:114.404541,
            name:'纳米科技中心',
            address: '湖北省武汉市洪山区鲁磨路407-104号',
          },
          {
            latitude: 30.518616,
            longitude:114.40732,
            name:'丝绸之路学院',
            address: '湖北省武汉市洪山区鲁磨路407-104号',
          },
          {
            latitude: 30.519601,
            longitude:114.404884,
            name:'地大幼儿园',
            address: '湖北省武汉市洪山区鲁磨路407-104号',
          },
          {
            latitude: 30.519702,
            longitude:114.407102,
            name:'地质灾害研究中心',
            address: '湖北省武汉市洪山区鲁磨路407-104号',
          },
          {
            latitude: 30.521361,
            longitude:114.407546,
            name:'附属中学',
            address: '湖北省武汉市洪山区鲁磨路407-104号',
          },
          {
            latitude: 30.523379,
            longitude:114.40445,
            name:'地热开发研究所',
            address: '湖北省武汉市洪山区鲁磨路407-104号',
          },
        ]
      },
      {
        "scale": 16,
        "name": "学生宿舍",
        "data": [
          {
            latitude: 30.518074,
            longitude:114.398939,
            name:'新峰公寓',
            adderss: '湖北省武汉市洪山区鲁磨路407-104号',
          },
          {
            latitude: 30.518514,
            longitude:114.397201,
            name:'博雅院',
            address: '湖北省武汉市洪山区鲁磨路407-104号',
          },
          {
            latitude: 30.521706,
            longitude:114.397326,
            name:'女生公寓',
            address: '湖北省武汉市洪山区鲁磨路407-104号',
          },
          {
            latitude: 30.522953,
            longitude:114.396977,
            name:'映荷轩',
            address: '湖北省武汉市洪山区鲁磨路407-104号',
          },
          {
            latitude: 30.523319,
            longitude:114.397355,
            name:'56栋',
            address: '湖北省武汉市洪山区鲁磨路407-104号',
          },
          {
            latitude: 30.522635,
            longitude:114.400345,
            name:'南望山庄',
            address: '湖北省武汉市洪山区鲁磨路407-104号',
          },
          {
            latitude: 30.522555,
            longitude:114.401244,
            name:'博士后公寓',
            address: '湖北省武汉市洪山区鲁磨路407-104号',
          },
          {
            latitude: 30.527903,
            longitude:114.399376,
            name:'22',
            address: '湖北省武汉市洪山区鲁磨路407-104号',
          },
          {
            latitude: 30.528237,
            longitude:114.399327,
            name:'21',
            address: '湖北省武汉市洪山区鲁磨路407-104号',
          },
          {
            latitude: 30.52834,
            longitude:114.398785,
            name:'20',
            address: '湖北省武汉市洪山区鲁磨路407-104号',
          },
          {
            latitude: 30.528611,
            longitude:114.399239,
            name:'19',
            address: '湖北省武汉市洪山区鲁磨路407-104号',
          },
          {
            latitude: 30.5286,
            longitude:114.398779,
            name:'18',
            address: '湖北省武汉市洪山区鲁磨路407-104号',
          },
          {
            latitude: 30.528511,
            longitude:114.397938,
            name:'23',
            address: '湖北省武汉市洪山区鲁磨路407-104号',
          },
          {
            latitude: 30.528921,
            longitude:114.397699,
            name:'14',
            address: '湖北省武汉市洪山区鲁磨路407-104号',
          },
          {
            latitude: 30.528936,
            longitude:114.397239,
            name:'13',
            address: '湖北省武汉市洪山区鲁磨路407-104号',
          },
          {
            latitude: 30.529198,
            longitude:114.397841,
            name:'15',
            address: '湖北省武汉市洪山区鲁磨路407-104号',
          },
          {
            latitude: 30.529169,
            longitude:114.398463,
            name:'17',
            address: '湖北省武汉市洪山区鲁磨路407-104号',
          },
          {
            latitude: 30.529527,
            longitude:114.398444,
            name:'24',
            address: '湖北省武汉市洪山区鲁磨路407-104号',
          },
          {
            latitude: 30.529011,
            longitude:114.396772,
            name:'12',
            address: '湖北省武汉市洪山区鲁磨路407-104号',
          },
          {
            latitude: 30.529166,
            longitude:114.396753,
            name:'11',
            address: '湖北省武汉市洪山区鲁磨路407-104号',
          },
          {
            latitude: 30.529337,
            longitude:114.396753,
            name:'9',
            address: '湖北省武汉市洪山区鲁磨路407-104号',
          },
          {
            latitude: 30.529935,
            longitude:114.398579,
            name:'25',
            address: '湖北省武汉市洪山区鲁磨路407-104号',
          },
          {
            latitude: 30.529957,
            longitude:114.397656,
            name:'7',
            address: '湖北省武汉市洪山区鲁磨路407-104号',
          },
          {
            latitude: 30.529682,
            longitude:114.397644,
            name:'8',
            address: '湖北省武汉市洪山区鲁磨路407-104号',
          },
          {
            latitude: 30.529692,
            longitude:114.397046,
            name:'6',
            address: '湖北省武汉市洪山区鲁磨路407-104号',
          },
          {
            latitude: 30.529993,
            longitude:114.397028,
            name:'5',
            address: '湖北省武汉市洪山区鲁磨路407-104号',
          },
          {
            latitude: 30.530337,
            longitude:114.396425,
            name:'1',
            address: '湖北省武汉市洪山区鲁磨路407-104号',
          },
          {
            latitude: 30.530153,
            longitude:114.39625,
            name:'2',
            address: '湖北省武汉市洪山区鲁磨路407-104号',
          },
          {
            latitude: 30.530031,
            longitude:114.396634,
            name:'3',
            address: '湖北省武汉市洪山区鲁磨路407-104号',
          },
          {
            latitude: 30.52995,
            longitude:114.396344,
            name:'4',
            address: '湖北省武汉市洪山区鲁磨路407-104号',
          },
          {
            latitude: 30.522465,
            longitude:114.402552,
            name:'无线电小区',
            address: '湖北省武汉市洪山区鲁磨路407-104号',
          },
          {
            latitude: 30.520633,
            longitude:114.404363,
            name:'研究生5',
            address: '湖北省武汉市洪山区鲁磨路407-104号',
          },
          {
            latitude: 30.521445,
            longitude:114.404641,
            name:'研究生9',
            address: '湖北省武汉市洪山区鲁磨路407-104号',
          },
          {
            latitude: 30.521146,
            longitude:114.405286,
            name:'研究生10',
            address: '湖北省武汉市洪山区鲁磨路407-104号',
          },
          {
            latitude: 30.519412,
            longitude:114.406841,
            name:'留学生公寓',
            address: '湖北省武汉市洪山区鲁磨路407-104号',
          },
        ]
      }
    ],
    map2 : [
      {
        "name": "游在地大",
        "scale": 16,
        "data": [
          {
            latitude: 30.456724,
            longitude:114.616993,
            name:'未来城地大湖',
            adderss: '湖北省武汉市洪山区锦程街68号',
          },
          {
            latitude: 30.456998,
            longitude:114.618226,
            name:'至善桥',
            address: '湖北省武汉市洪山区锦程街68号',
          }
        ]
      },
      {
        "name": "学在地大",
        "scale": 16,
        "data": [
          {
            latitude: 30.457855,
            longitude:114.618625,
            name:'公教一',
            adderss: '湖北省武汉市洪山区锦程街68号',
          },
          {
            latitude: 30.458571,
            longitude:114.61859,
            name:'公教二',
            address: '湖北省武汉市洪山区锦程街68号',
          },
          {
            latitude: 30.456343,
            longitude:114.618223,
            name:'图书馆',
            address: '湖北省武汉市洪山区锦程街68号',
          }
        ]
      },
      {
        "name": "吃在地大",
        "scale": 16,
        "data": [
          {
            latitude: 30.456078,
            longitude:114.615625,
            name:'民族风味二食堂',
            adderss: '湖北省武汉市洪山区锦程街68号',
          },
          {
            latitude: 30.455048,
            longitude:114.618248,
            name:'学生一食堂',
            address: '湖北省武汉市洪山区锦程街68号',
          },
          {
            latitude: 30.455539,
            longitude:114.618684,
            name:'澳华烘培',
            address: '湖北省武汉市洪山区锦程街68号',
          },
          {
            latitude: 30.457172,
            longitude:114.621093,
            name:'卓远教工食堂',
            address: '湖北省武汉市洪山区锦程街68号',
          },
          {
            latitude: 30.455791,
            longitude:114.621456,
            name:'贡茶',
            address: '湖北省武汉市洪山区锦程街68号',
          },
        ]
      },
      {
        "scale": 16,
        "name": "运动地大",
        "data": [
          {
            latitude: 30.459564,
            longitude:114.621287,
            name:'未来城操场',
            adderss: '湖北省武汉市洪山区锦程街68号',
          },
          {
            latitude: 30.459768,
            longitude:114.620326,
            name:'排球场',
            address: '湖北省武汉市洪山区锦程街68号',
          },
          {
            latitude: 30.458009,
            longitude:114.621385,
            name:'体育馆',
            address: '湖北省武汉市洪山区锦程街68号',
          },
          {
            latitude: 30.455088,
            longitude:114.620787,
            name:'足球场',
            address: '湖北省武汉市洪山区锦程街68号',
          },
          {
            latitude: 30.455163,
            longitude:114.621799,
            name:'篮球场',
            address: '湖北省武汉市洪山区锦程街68号',
          },
        ]
      },
      {
        "scale": 16,
        "name": "交通服务",
        "data": [
          {
            latitude: 30.456175,
            longitude:114.61573,
            name:'学生接驳车乘车点',
            adderss: '湖北省武汉市洪山区锦程街68号',
          },
          {
            latitude: 30.458936,
            longitude:114.616105,
            name:'教师接驳车乘车点',
            address: '湖北省武汉市洪山区锦程街68号',
          },
          {
            latitude: 30.460133,
            longitude:114.618105,
            name:'锦程街快岭西路公交站',
            address: '湖北省武汉市洪山区锦程街68号',
          },
          {
            latitude: 30.460156,
            longitude:114.617096,
            name:'锦程街快岭西路公交站',
            address: '湖北省武汉市洪山区锦程街68号',
          }
        ]
      },
      {
        "name": "生活服务",
        "scale": 16,
        "data": [
          {
            latitude: 30.455483,
            longitude:114.617694,
            name:'晨光文具',
            adderss: '湖北省武汉市洪山区锦程街68号',
          },
          {
            latitude: 30.45481,
            longitude:114.617718,
            name:'天扬图文',
            address: '湖北省武汉市洪山区锦程街68号',
          },
          {
            latitude: 30.455643,
            longitude:114.618682,
            name:'未来城休闲食品',
            address: '湖北省武汉市洪山区锦程街68号',
          },
          {
            latitude: 30.455266,
            longitude:114.618726,
            name:'鲜果先森',
            address: '湖北省武汉市洪山区锦程街68号',
          },
          {
            latitude: 30.455073,
            longitude:114.618703,
            name:'迪儿花艺',
            address: '湖北省武汉市洪山区锦程街68号',
          },
          {
            latitude: 30.455109,
            longitude:114.617713,
            name:'地大教育书店',
            address: '湖北省武汉市洪山区锦程街68号',
          },
          {
            latitude: 30.455805,
            longitude:114.619078,
            name:'未来城校医院',
            address: '湖北省武汉市洪山区锦程街68号',
          },
          {
            latitude: 30.455331,
            longitude:114.620106,
            name:'中百罗森',
            address: '湖北省武汉市洪山区锦程街68号',
          },
          {
            latitude: 30.455121,
            longitude:114.620124,
            name:'旦凡数码',
            address: '湖北省武汉市洪山区锦程街68号',
          },
          {
            latitude: 30.456537,
            longitude:114.621394,
            name:'美宜佳',
            address: '湖北省武汉市洪山区锦程街68号',
          },
          {
            latitude: 30.456356,
            longitude:114.621424,
            name:'四季鲜果',
            address: '湖北省武汉市洪山区锦程街68号',
          },
          {
            latitude: 30.456112,
            longitude:114.621424,
            name:'天晨文汇',
            address: '湖北省武汉市洪山区锦程街68号',
          },
          {
            latitude: 30.455889,
            longitude:114.621458,
            name:'博彩快印',
            address: '湖北省武汉市洪山区锦程街68号',
          },
          {
            latitude: 30.457113,
            longitude:114.621708,
            name:'菜鸟驿站',
            address: '湖北省武汉市洪山区锦程街68号',
          },
          {
            latitude: 30.455476,
            longitude:114.616236,
            name:'警卫室',
            address: '湖北省武汉市洪山区锦程街68号',
          },
        ]
      },
      {
        "scale": 16,
        "name": "行政大楼",
        "data": [
          {
            latitude: 30.459519,
            longitude:114.618598,
            name:'计算机学院',
            adderss: '湖北省武汉市洪山区锦程街68号',
          },
          {
            latitude: 30.459573,
            longitude:114.619741,
            name:'地理与信息工程学院',
            address: '湖北省武汉市洪山区锦程街68号',
          },
          {
            latitude: 30.458579,
            longitude:114.614623,
            name:'经济管理学院',
            address: '湖北省武汉市洪山区锦程街68号',
          },
          {
            latitude: 30.458499,
            longitude:114.616343,
            name:'材料与化学学院',
            address: '湖北省武汉市洪山区锦程街68号',
          },
          {
            latitude: 30.457382,
            longitude:114.615577,
            name:'环境学院',
            address: '湖北省武汉市洪山区锦程街68号',
          },
          {
            latitude: 30.458436,
            longitude:114.617303,
            name:'地质过程与矿产资源国家实验室',
            address: '湖北省武汉市洪山区锦程街68号',
          },
          {
            latitude: 30.457724,
            longitude:114.617364,
            name:'古生物国家重点实验室',
            address: '湖北省武汉市洪山区锦程街68号',
          }
        ]
      },
      {
        "scale": 16,
        "name": "学生宿舍",
        "data": [
          {
            latitude: 30.45567,
            longitude:114.616777,
            name:'学生宿舍一组团',
            adderss: '湖北省武汉市洪山区锦程街68号',
          },
          {
            latitude: 30.455394,
            longitude:114.61982,
            name:'博学生宿舍二组团',
            address: '湖北省武汉市洪山区锦程街68号',
          },
          {
            latitude: 30.45606,
            longitude:114.620504,
            name:'学生宿舍三组团',
            address: '湖北省武汉市洪山区锦程街68号',
          },
          {
            latitude: 30.457114,
            longitude:114.621733,
            name:'博士后公寓',
            address: '湖北省武汉市洪山区锦程街68号',
          },
          {
            latitude: 30.456236,
            longitude:114.615002,
            name:'博士公寓',
            address: '湖北省武汉市洪山区锦程街68号',
          }
        ]
      }
    ],
  }
})

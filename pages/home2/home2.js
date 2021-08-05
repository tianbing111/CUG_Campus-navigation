// 引入SDK核心类，js文件根据自己业务，位置可自行放置
var QQMapWX = require('../../qqmap-wx-jssdk.js');
var qqmapsdk;
var app = getApp();
// pages/home/home.js
Page({
  /**
   * 页面的初始数据
   */
  //设置下拉刷新
  onPullDownRefresh: function () {
    var that = this;
    that.setData({
      currentTab: 0 //当前页的一些初始数据，视业务需求而定
    })
    this.onLoad(); //重新加载onLoad()
  },
  data: {
    buildData:app.globalData.map2,
    hidden:true,
    // 设置markers
    markers:[],
    // 设置地大的数据
    tripdata:[],
    studydata: [],
    eatdata:[],
    rundata:[],
    trandata:[],
    lifedata:[],
    admindata:[],
    dordata:[],
    //输入的查询地址
    inputvalue:'',
    //起始地址
    startPoint:null,
    endPoint:null,
    //获取当前分类
    currentdatabase:null,
    modalimg:null,
    modalname:null,
    modaltitle:null,
    modaladdress:null,

  },
  //点击按钮现实地图上对应的点
  tripplace:function(){
    var that=this;
    var result = that.data.tripdata;
    var number = that.data.markers.length;
    let markers = that.data.markers
    markers.splice(1,number-1)
    that.setData({
      markers:markers,
      currentdatabase:result
    })
        for(var i=0;i<result.length;i++){
          let lat = result[i].latitude;
          let lon = result[i].longitude;
          let name = result[i].name;
          var index="markers["+(i+1)+"]";
          that.setData({
            [index]:{
              id:i+1,
              latitude: lat,
              longitude: lon,
              iconPath: "../../image/旅游icon.png",
              width: 30,
              height: 30,
              label: {
                content: name,
                color: '#FFFFFF',
                bgColor:'#6495ED',
                fontSize: 13,
                anchorX:10,
                anchorY:-23,
                borderRadius: 5,
                borderWidth: 1,
                borderColor: '#6495ED',
                padding: 2,
                //display: 'ALWAYS'
              }
            }            
          })
        }
  },
  studyplace:function(){
    var that=this;
    var result = that.data.studydata;
    var number = that.data.markers.length;
    let markers = that.data.markers
    markers.splice(1,number-1)
    that.setData({
      markers:markers,
      currentdatabase:result
    })
        for(var i=0;i<result.length;i++){
          let lat = result[i].latitude;
          let lon = result[i].longitude;
          let name = result[i].name;
          var index="markers["+(i+1)+"]";
          that.setData({
            [index]:{
              id:i+1,
              latitude: lat,
              longitude: lon,
              iconPath: "../../image/学习icon.png",
              width: 30,
              height: 30,
              label: {
                content: name,
                color: '#FFFFFF',
                bgColor:'#6495ED',
                fontSize: 13,
                anchorX:16,
                anchorY:-22.5,
                borderRadius: 5,
                borderWidth: 1,
                borderColor: '#6495ED',
                padding: 2,
                //display: 'ALWAYS'
              }
            }            
          })
        }
  },
  eatplace:function(){
    var that=this;
    var result = that.data.eatdata;
    var number = that.data.markers.length;
    let markers = that.data.markers
    markers.splice(1,number-1)
    that.setData({
      markers:markers,
      currentdatabase:result
    })
        for(var i=0;i<result.length;i++){
          let lat = result[i].latitude;
          let lon = result[i].longitude;
          let name = result[i].name;
          var index="markers["+(i+1)+"]";
          that.setData({
            [index]:{
              id:i+1,
              latitude: lat,
              longitude: lon,
              iconPath: "../../image/吃饭icon.png",
              width: 30,
              height: 30,
              label: {
                content: name,
                color: '#FFFFFF',
                bgColor:'#6495ED',
                fontSize: 13,
                anchorX:10,
                anchorY:-26,
                borderRadius: 5,
                borderWidth: 1,
                borderColor: '#6495ED',
                padding: 2,
                //display: 'ALWAYS'
              }
            }            
          })
        }
  },
  runplace:function(){
    var that=this;
    var result = that.data.rundata;
    var number = that.data.markers.length;
    let markers = that.data.markers
    markers.splice(1,number-1)
    that.setData({
      markers:markers,
      currentdatabase:result
    })
        for(var i=0;i<result.length;i++){
          let lat = result[i].latitude;
          let lon = result[i].longitude;
          let name = result[i].name;
          var index="markers["+(i+1)+"]";
          that.setData({
            [index]:{
              id:i+1,
              latitude: lat,
              longitude: lon,
              iconPath: "../../image/运动icon.png",
              width: 30,
              height: 30,
              label: {
                content: name,
                color: '#FFFFFF',
                bgColor:'#6495ED',
                fontSize: 13,
                anchorX:14,
                anchorY:-26,
                borderRadius: 5,
                borderWidth: 1,
                borderColor: '#6495ED',
                padding: 2,
                //display: 'ALWAYS'
              }
            }            
          })
        }
  },
  tranplace:function(){
    var that=this;
    var result = that.data.trandata;
    var number = that.data.markers.length;
    let markers = that.data.markers
    markers.splice(1,number-1)
    that.setData({
      markers:markers,
      currentdatabase:result
    })
        for(var i=0;i<result.length;i++){
          let lat = result[i].latitude;
          let lon = result[i].longitude;
          let name = result[i].name;
          var index="markers["+(i+1)+"]";
          that.setData({
            [index]:{
              id:i+1,
              latitude: lat,
              longitude: lon,
              iconPath: "../../image/交通icon.png",
              width: 30,
              height: 30,
              label: {
                content: name,
                color: '#FFFFFF',
                bgColor:'#6495ED',
                fontSize: 13,
                anchorX:14,
                anchorY:-26,
                borderRadius: 5,
                borderWidth: 1,
                borderColor: '#6495ED',
                padding: 2,
                //display: 'ALWAYS'
              }
            }            
          })
        }
  },
  lifeplace:function(){
    var that=this;
    var result = that.data.lifedata;
    var number = that.data.markers.length;
    let markers = that.data.markers
    markers.splice(1,number-1)
    that.setData({
      markers:markers,
      currentdatabase:result
    })
        for(var i=0;i<result.length;i++){
          let lat = result[i].latitude;
          let lon = result[i].longitude;
          let name = result[i].name;
          var index="markers["+(i+1)+"]";
          that.setData({
            [index]:{
              id:i+1,
              latitude: lat,
              longitude: lon,
              iconPath: "../../image/生活icon.png",
              width: 30,
              height: 30,
              label: {
                content: name,
                color: '#FFFFFF',
                bgColor:'#6495ED',
                fontSize: 13,
                anchorX:14,
                anchorY:-26,
                borderRadius: 5,
                borderWidth: 1,
                borderColor: '#6495ED',
                padding: 2,
                //display: 'ALWAYS'
              }
            }            
          })
        }
  },
  adminplace:function(){
    var that=this;
    var result = that.data.admindata;
    var number = that.data.markers.length;
    let markers = that.data.markers
    markers.splice(1,number-1)
    that.setData({
      markers:markers,
      currentdatabase:result
    })
        for(var i=0;i<result.length;i++){
          let lat = result[i].latitude;
          let lon = result[i].longitude;
          let name = result[i].name;
          var index="markers["+(i+1)+"]";
          that.setData({
            [index]:{
              id:i+1,
              latitude: lat,
              longitude: lon,
              
              iconPath: "../../image/行政icon.png",
              width: 30,
              height: 30,
              label: {
                content: name,
                color: '#FFFFFF',
                bgColor:'#6495ED',
                fontSize: 13,
                anchorX:14,
                anchorY:-26,
                borderRadius: 5,
                borderWidth: 1,
                borderColor: '#6495ED',
                padding: 2,
                //display: 'ALWAYS'
              }
            }            
          })
        }
  },
  dorplace:function(){
    var that=this;
    var result = that.data.dordata;
    var number = that.data.markers.length;
    let markers = that.data.markers
    markers.splice(1,number-1)
    that.setData({
      markers:markers,
      currentdatabase:result
    })
        for(var i=0;i<result.length;i++){
          let lat = result[i].latitude;
          let lon = result[i].longitude;
          let name = result[i].name;
          var index="markers["+(i+1)+"]";
          that.setData({
            [index]:{
              id:i+1,
              latitude: lat,
              longitude: lon,
              joinCluster:true,
              iconPath: "../../image/公寓icon.png",
              width: 30,
              height: 30,
              label: {
                content: name,
                color: '#FFFFFF',
                bgColor:'#6495ED',
                fontSize: 13,
                anchorX:14,
                anchorY:-25,
                borderRadius: 5,
                borderWidth: 0.8,
                borderColor: '#6495ED',
                padding: 2,
                //display: 'ALWAYS'
              }
            }            
          })
        }
  },
  //获取输入的查询地址
  inputplace:function(e){
    this.setData({
      inputvalue:e.detail.value
    })
  },
  // 搜索
nearby_search:function(){
  var that = this;
  var text = that.data.inputvalue;
  // 调用接口
  qqmapsdk.search({
     keyword: text,  //搜索关键词
     location: '30.51863,114.401',  //设置周边搜索中心点
     success: function (res) { //搜索成功后的回调
      var texttitle = '共找到'+res.data.length+'个地点'
      wx.showToast({
        title: texttitle,
        icon: 'success',
        duration: 2000
      })
      var number = that.data.markers.length;
      let markers = that.data.markers;
      markers.splice(1,number-1)
      that.setData({
        markers:markers
      })
       for (var i = 0; i < res.data.length; i++) {
         let lat = res.data[i].location.lat;
         let lon = res.data[i].location.lng;
         let name = res.data[i].title;
         var index = "markers["+(i+1)+"]";
         that.setData({
           [index]:{
            id:i+1,
            latitude: lat,
            longitude: lon,
            iconPath: "../../image/标记.png",
            width: 25,
            height: 25,
            label: {
              content: name,
              color: '#FFFFFF',
              bgColor:'#6495ED',
              fontSize: 13,
              anchorX:14,
              anchorY:-24,
              borderRadius: 5,
              borderWidth: 1,
              borderColor: '#6495ED',
              padding: 2,
              //display: 'ALWAYS'
            }
           },
           currentdatabase:res.data
         })
       }
     },
     fail: function (res) {
      wx.showToast({
        title: '抱歉，搜索错误',
        icon: 'fail',
        duration: 2000
      })
     },
     complete: function (res){
       console.log(res);
     }
 });
},
 //点击地点进行路径规划
  onPointTap: function(e) {
    console.log(e)
    var that = this;
    var lat = ''; // 获取点击的markers经纬度
    var lon = ''; // 获取点击的markers经纬度
    var name = ''; // 获取点击的markers名称
    var markerId = e.detail.markerId;// 获取点击的markers  id
    var markersda = this.data.markers;
    var currentdatabase = this.data.currentdatabase;
    //定位所点击的坐标点
    for (var item of markersda){
      if (item.id === markerId) {
        lat = item.latitude;
        lon = item.longitude;
        name = item.label.content;
        break;
      }
    }
    //初始化起点为西大门门口
    var startPoint = JSON.stringify({
      'name': markersda[0].callout.content,
      'latitude': markersda[0].latitude,
      'longitude': markersda[0].longitude
    });
    var endPoint = JSON.stringify({  //终点
        'name': name,
        'latitude': lat,
        'longitude': lon
    });
    if(currentdatabase[markerId-1].title != null)
    {
      that.setData({
        hidden:false,
        modalname:currentdatabase[markerId-1].title
      })
    }else{
      that.setData({
        hidden:false,
        modalname:currentdatabase[markerId-1].name
      })
    }
    that.setData({
      hidden:false,
      modaladdress:currentdatabase[markerId-1].address,
      startPoint:startPoint,
      endPoint:endPoint
    })
  },
  // 路径规划
  test:function(){
    let plugin = requirePlugin('routePlan');
    let key = 'xxxxx-xxxxx-xxxxx-xxxxx-xxxxx-xxxxx';  //使用在腾讯位置服务申请的key
    let referer = 'cugerguider';   //调用插件的app的名称
    let endPoint = JSON.stringify({  //终点
        'name': '中国地质大学（武汉）',
        'latitude': 30.51863,
        'longitude': 114.401
    });
    wx.navigateTo({
        url: 'plugin://routePlan/index?key=' + key + '&referer=' + referer + '&endPoint=' + endPoint
    });
  },
  //获取自己当前的位置
  getmyPlace:function(){
    var that=this;
    wx.getLocation({
      success: function(res) {
        console.log(res);
        that.setData({
          markers:[
            {
              latitude:res.latitude,
              longitude:res.longitude,
              iconPath:"../../image/mapcenter.png",
              width:25,
              height:25,
              callout:{
                content:"当前位置",
                color:'#0000ff',
                fontSize:13,
                borderRadius:5,
                borderWidth:1,
                borderColor:'#0000ff',
                padding:2,
                display:'ALWAYS'
              }
            }
          ]
        })
      },
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.stopPullDownRefresh() //刷新完成后停止下拉刷新动效
        // 实例化API核心类
        qqmapsdk = new QQMapWX({
          key: 'xxxxx-xxxxx-xxxxx-xxxxx-xxxxx-xxxxx'
      });
      // wx.showModal({
      //   title:'提示',
      //   content:'当前位置不在校区内，是否切换？',
      //   success(res){
      //     if(res.confirm)
      //     {
      //       console.log('用户点击确定')
      //     }else if(res.cancel)
      //     {
      //       console.log('用户点击取消')
      //     }
      //   }
      // });
      var that = this;
      var trip = that.data.buildData[0].data;
      var study = that.data.buildData[1].data;
      var eat = that.data.buildData[2].data;
      var run = that.data.buildData[3].data;
      var tran = that.data.buildData[4].data;
      var life = that.data.buildData[5].data;
      var admi = that.data.buildData[6].data;
      var ador = that.data.buildData[7].data;
      that.setData({
        tripdata:trip,
        eatdata:eat,
        studydata:study,
        rundata:run,
        trandata:tran,
        lifedata:life,
        admindata:admi,
        dordata:ador
      })
      //判断所在位置是否在校区内
      wx.getLocation({
		  type:'gcj02',
        isHighAccuracy:true,
        success:function(res)
        {
          console.log(res)
          var nowlatitude = res.latitude
          var nowlongitude = res.longitude
          if((nowlatitude > 30.454702) && (nowlatitude < 30.459556) && (nowlongitude > 114.610349) && (nowlongitude < 114.622846))
          {
            that.setData({
              markers:[
                {
                  id:0,
                  latitude:nowlatitude,
                  longitude:nowlongitude,
                  iconPath:"../../image/mapcenter.png",
                  width:25,
                  height:25,
                  callout:{
                    content:"当前位置",
                    color:'#0000ff',
                    fontSize:13,
                    borderRadius:5,
                    borderWidth:1,
                    borderColor:'#0000ff',
                    padding:2,
                    display:'ALWAYS'
                  }
                }
              ]
            })
          }else{
            wx.showModal({
              title:'提示',
              content:'当前位置不在校区内，是否切换？',
              success(res)
              {
                if(res.confirm)
                {
                  that.setData({
                    markers:[
                      {
                        id:0,
                        latitude:30.459935,
                        longitude:114.617916,
                        iconPath:"../../image/mapcenter.png",
                        width:25,
                        height:25,
                        callout:{
                          content:"北大门",
                          color:'#0000ff',
                          fontSize:13,
                          borderRadius:5,
                          borderWidth:1,
                          borderColor:'#0000ff',
                          padding:2,
                          display:'BYCLICK'
                        }
                      }
                    ]
                  })
                }else if(res.cancel)
                {
                  that.setData({
                    markers:[
                      {
                        id:0,
                        latitude:nowlatitude,
                        longitude:nowlongitude,
                        iconPath:"../../image/mapcenter.png",
                        width:25,
                        height:25,
                        callout:{
                          content:"当前位置",
                          color:'#0000ff',
                          fontSize:13,
                          borderRadius:5,
                          borderWidth:1,
                          borderColor:'#0000ff',
                          padding:2,
                          display:'ALWAYS'
                        }
                      }
                    ]
                  })
                }
              }
            })

          }
        }
      });
      // let mapCtx = wx.createMapContext('myMap',that)
      // console.log(mapCtx)
      // mapCtx.initMarkerCluster({
      //   enableDefaultStyle:true,
      //   zoomOnClick:true,
      //   gridSize:60,
      //   complete(res){
      //     console.log('initMarkerCluster',res)
      //   }
      // })
  },
  onReady: function (e) {
    // 使用 wx.createMapContext 获取 map 上下文
    this.mapCtx = wx.createMapContext('myMap');
  },
  // 设置点聚合
  initMarkerCluster:function(){
    this.mapCtx.initMarkerCluster({
      enableDefaultStyle:true,
      zoomOnClick:true,
      gridSize:20,
      complete(res){
        console.log('initMarkerCluster',res)
      }
    })
  },
  clickButton: function (e) {
    //console.log(this.data.fullscreen)
    //打印所有关于点击对象的信息
    this.setData({ fullscreen: !this.data.fullscreen })
  },
  modalcancel:function(e)
  {
    this.setData({
      hidden:true,
    })
  },
  modalconfirm:function(e)
  {
    var that = this;
    this.setData({
      hidden:true,
    })
    //路径规划
    var plugin = requirePlugin('routePlan');
    var key = 'xxxxx-xxxxx-xxxxx-xxxxx-xxxxx-xxxxx';  //使用在腾讯位置服务申请的key
    var referer = 'cugerguider';   //调用插件的app的名称
    var themeColor = '#7B68EE';  //主题颜色
    var endPoint = that.data.endPoint;
    var startPoint = that.data.startPoint;
    wx.navigateTo({
      url: 'plugin://routePlan/index?key=' + key + '&referer=' + referer +'&endPoint=' + endPoint  + '&startPoint='+ startPoint + '&themeColor=' + themeColor
  });
  }
})
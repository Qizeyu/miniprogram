//用户登录
function userLogin(){
  wx.checkSession({
    success:function(){
      //存在登陆态
      console.log("存在登陆态")
    },
    fail:function(){
      //不存在登陆态
      conole.log("不存在登陆态")
    }
  })
}

function onLogin(){
  wx.login({
    success:function(res){
      if(res.code){
        //发起网络请求
        wx.request({
          url: '服务器的api接口',
          data:{
            code:res.code
        },
        success:function(res){
            const self = this
            if(逻辑成功){
              //获取到用户凭证 存储3rd_session
              var json = JSON.parse(res.data.Data)
              wx.setStorage({
                key:"third_Session",
                data:"json.third_Session"
              })
              getUserInfo()

            }
            else
            {

            }
          },
          fail:function(res){

          }
        })
      }
    },
    fail:function(res){

    }
  })
}
function getUserInfo(){
  wx.getUserInfo({
    success:function(res){
      var userInfo = res.userInfo
      userInfoSetInSQL(userInfo)
    },
    fail:function(){
      userAccess()
    }
  })
}
function userInfoSetInSQL(userInfo){
  wx.getStorage({
    key: 'third_Session',
    success: function(res) {
      wx.request({
        url: '服务器api',
        data:{
          third_Session: res.data,
          nickName: userInfo.nickName,
          avatarUrl: userInfo.avatarUrl,
          gender: uesrInfo.gender,
          province: userInfo.province,
          city: userInfo.city,
          country: userInfo.country
        },
        success:function(res) {
          if(逻辑成功){
            //sql更新用户数据成功
          }
          else
          {
            //sql更新用户数据失败
          }
        }
      })
    },
  })
}



//app.js
App({
  onLaunch: function () {
    
      wx.loadFontFace({
          family: 'Bitstream Vera Serif Bold',
          source: 'url("https://jcxcx.sunkoda.com/upload/font/base64.ttf")',
          success: function(res){
              console.log(res)
          },
          fail:function(err){
              console.log(err,'aaa')
          }
      })
  }
})

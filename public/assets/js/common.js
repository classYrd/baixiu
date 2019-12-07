$('#logout').on('click',function(){
    var isconfirm = confirm('是否确定退出')
    if(isconfirm){
      $.ajax({
        type:'post',
        url:'/logout',
        success:function(){
          location.href = '/admin/login.html'
        },
        error:function(){
          alert('退出错误了')
        }
        
      })
    }
  })
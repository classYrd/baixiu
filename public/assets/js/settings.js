$('#logo').on('change',function(){
    //获取到管理员选择的图片
    var file = this.files[0]
    //创建对象
    var formData = new FormData()
    formData.append('logo',file)
    $.ajax({
        type:'post',
        url:'/upload',
        data:formData,
        processData:false,
        contentType:false,
        success:function(res){
            console.log(res)
            $('#hiddenLogo').val(res[0].logo)
            $('#preview').attr('src',res[0].logo)
        }
    })
})


$('#settingsForm').on('submit',function(){
    var formData = $(this).serialize()
    $.ajax({
        type:'post',
        url:'/settings',
        data:formData,
        success:function(){
            location.reload()
        }
    })
    return false
})
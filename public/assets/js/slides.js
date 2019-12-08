//当管理员选择文件时
$('#file').on('change',function(){
    var file = this.files[0]
    var formData = new FormData()
    formData.append('image',file)
    $.ajax({
        type:'post',
        url:'/upload',
        data:formData,
        processData:false,
        contentType:false,
        success:function(res){
            console.log(res[0].image)
            $('#image').val(res[0].image)
        }
    })
})
$('#slidesForm').on('submit',function(){
    //获取管理员在表单中的数据
    var formData = $(this).serialize()
    $.ajax({
        type:'post',
        url:'/slides',
        data:formData,
        success:function(){
            location.reload()
        }
    })
    return false
})

$.ajax({
    type:'get',
    url:'/slides',
    success:function(res){
        console.log(res)
        var html = template('slidesTpl',{data:res})
        $('#slidesBox').html(html)
    }
})
$('#slidesBox').on('click','.delete',function(){
    if(confirm('您真的要删除?')){
        var id = $(this).attr('data-id')
        // alert(id)
        $.ajax({
            type:'delete',
            url:'/slides/' + id,
            success:function(){
                location.reload()
            }
        })
    }
})
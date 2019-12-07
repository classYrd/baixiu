$('#addcCategory').on('submit',function(){
    var formData = $(this).serialize()
    $.ajax({
        url:'/categories',
        type:'post',
        data:formData,
        success:function(){
            location.reload()
        }
    })
    return false
})
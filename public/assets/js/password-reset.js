// function serializeobj(form) {
//     var arr = form.serializeArray();
//     var obj = {};
//     arr.forEach((item) => {
//         obj[item.name] = item.value;
//     })
//     return obj;
// }


$('#modifyForm').on('submit', function () {
    var formData = $(this).serialize()
    $.ajax({
        type: 'put',
        url: '/users/password',
        data: formData,
        success: function () {
            location.href = "/admin/login.html"
        }
    })
    return false
})
$(function () {
    var form = layui.form
    var layer = layui.layer
    form.verify({
        nickname: function (value) { //value：表单的值、item：表单的DOM对象
            if (value.length > 6) {
                return '昵称长度必须在 1 ~ 6 个字符之间！'
            }
        }
    })
    initUserInfo()
    function initUserInfo() {
        $.ajax({
            type: 'GET',
            url: '/my/userinfo',
            success: function (res) {
               /*  console.log(res); */
                if (res.status !== 0) {
                    return layer.msg('获取用户基本信息失败！')
                }
                form.val('formUserInfo', res.data)
            }
        })
    }
    $('#btnReset').on('click', function (e) {
        e.preventDefault()
        initUserInfo()
    })
    $('#form_tijiao').on('submit', function (e) {
        e.preventDefault()
        $.ajax({
            type: 'POST',
            url: '/my/userinfo',
            data: $(this).serialize(),
            success: function (res) {
                if (res.status !== 0) {
                    return layer.msg('修改用户信息失败！')
                }
                layer.msg('修改用户信息成功！')
                window.parent.getUserInfo()
            }
        })
    })
})
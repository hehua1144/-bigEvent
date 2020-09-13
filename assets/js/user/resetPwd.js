$(function () {
    var form = layui.form
    var layer = layui.layer
    form.verify({
        pwd: [
            /^[\S]{6,12}$/
            , '密码必须6到12位，且不能出现空格'
        ],
        repwd: function (value) {
            if (value !== $('#newPwd').val()) {
                return '两次密码输入不一致'
            }
        },
        newpwd: function (value) {
            if (value == $('#oddPwd').val()) {
                return '新密码不能和原密码一样'
            }
        }
    })
    $('#form_resetPwd').on('submit', function (e) {
        e.preventDefault()
        $.ajax({
            method: 'POST',
            url: '/my/updatepwd',
            data: $(this).serialize(),
            success: function (res) {
                if (res.status !== 0) {
                    return layer.msg('更新密码失败！')
                }
                layer.msg('更新密码成功！')
                $('#form_resetPwd')[0].reset()
            }
        })
    })
})
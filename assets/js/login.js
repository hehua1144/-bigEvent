$(function () {
    //登录/注册页面的切换  
    $('#loginId').on('click', function () {
        $('.login_box').hide()
        $('.reg_box').show()
    })
    $('#reg_box').on('click', function () {
        $('.login_box').show()
        $('.reg_box').hide()
    })
    var form = layui.form
    var layer = layui.layer
    form.verify({
        pwd: [
            /^[\S]{6,12}$/
            , '密码必须6到12位，且不能出现空格'
        ],
        repwd: function (value) {
            var pwd = $('#pwd_Id').val()
            if (pwd !== value) {
                return '两次密码输入不一致'
            }
        }
    })
    $('#reg_form').on('submit', function (e) {
        e.preventDefault()
        $.post('/api/reguser', {
            username: $('#reg_form [name="uesrname"]').val(), password: $('#reg_form [name="password"]').val()
        }, function (res) {
            if (res.status !== 0) {
                return layer.msg(res.message)
            }
            layer.msg('注册成功，请登录')
            $('#reg_box').click()
        })
    })
    $('#login_form').on('submit', function (e) {
        e.preventDefault()
        $.ajax({
            url: '/api/login',
            type: 'POST',
            data: $(this).serialize(),
            success: function (res) {
                if (res.status !== 0) {
                    return layer.msg('登录失败')
                }
                layer.msg('登录成功！')
                localStorage.setItem('token', res.token)
                location.href = '/index.html'
            }
        })
    })

})
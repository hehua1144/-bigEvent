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

})
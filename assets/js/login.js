$(function () {
    //登录/注册页面的切换  
    $('#loginId').on('click', function () {
        $('.login_box').hide()
        $('.reg_box').show()
    })
    $('#regId').on('click', function () {
        $('.login_box').show()
        $('.reg_box').hide()
    })

})
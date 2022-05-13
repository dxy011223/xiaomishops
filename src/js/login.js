function tab() {
    let pagenum = 0
    let btns = document.querySelectorAll('#box ul li')
    let boxs = document.querySelectorAll('#box ol li')
    btns.forEach((btn, i) => {
        btn.onclick = () => {

            btns[pagenum].classList.remove('active')
            btns[i].classList.add('active')

            boxs[pagenum].classList.remove('active')
            boxs[i].classList.add('active')

            pagenum = i
        }
    })


}
tab()

function tops() {
    let topP = document.querySelector('#top_p')
    let ulLi = document.querySelector('.ul_li')
    console.log(topP)
    topP.onclick = function () {
        if (ulLi.style.display == 'none') {
            ulLi.style.display = 'block'
        } else {
            ulLi.style.display = 'none'
        }
    }
    // topP.onmouseenter = function () {
    // console.log(123)
    // ulLi.style.display = 'block'
    // }
    ulLi.onmouseleave = function () {
        ulLi.style.display = 'none'
    }
    login()
}
tops()


login()

function login() {
    let ipts1 = document.querySelector('.ipt_1 input')
    let ipts2 = document.querySelector('.ipt_2 input')
    let ipts3 = document.querySelector('#ipt_3')
    console.log(ipts2)
    console.log(ipts1)
    console.log(ipts3)
    let isUsername = false;
    let isUsername1 = false;
    let spans = document.querySelectorAll('#span')
    console.log(spans)
    ipts1.oninput = function () {
        //用户名正则，4到16位（字母，数字，下划线，减号）
        let reg = /^[a-zA-Z0-9_-]{4,16}$/g
        if (reg.test(this.value)) {
            console.log('输入正确')
            isUsername = true
            spans[0].style.color = "#17fd0f";
            spans[0].style.fontSize = "20px"
            spans[0].innerHTML = '√'
            if (this.value == '') {
                spans[0].innerHTML = ''
            }
        } else {
            console.log('输入错误')
            isUsername = false
            spans[0].style.color = "red";
            spans[0].style.fontSize = "11px"
            spans[0].innerHTML = '*用户账号不合法'
            if (this.value == '') {
                spans[0].innerHTML = ''
            }
        }

    }
    ipts2.oninput = function () {

        let reg1 = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,12}$/g
        if (reg1.test(this.value)) {
            console.log('输入正确')
            isUsername1 = true
            spans[1].style.color = "#17fd0f";
            spans[1].style.fontSize = "20px"
            spans[1].innerHTML = '√'
            if (this.value == '') {
                spans[1].innerHTML = ''
            }
        } else {
            console.log('输入错误')
            isUsername1 = false
            spans[1].style.color = "red";
            spans[1].style.fontSize = "11px"
            spans[1].innerHTML = '*密码必须字母+数字是6~12位'
            if (this.value == '') {
                spans[1].innerHTML = ''
            }
        }
    }
    ipts3.onclick = function () {
        if (isUsername == true && isUsername1 == true) {
            let username = ipts1.value
            let password = ipts2.value;

            let regIpt = 'http://jx.xuzhixiang.top/ap/api/login.php'
            let params = {
                username,
                password
            }
            axios.get(regIpt, {
                params
            }).then(res => {
                console.log(res.data)
                if (res.data.code == 0) {

                    layer.confirm('登录失败,' + res.data.msg, {
                        btn: ['确定'] //按钮
                    }, function () {
                        location.reload();
                    });

                } else if (res.data.code == 1) {


                    Cookies.set('username', username, {
                        expires: 7
                    })
                    Cookies.set('password', password, {
                        expires: 7
                    })
                    let token = res.data.data.token
                    console.log(token)
                    let uid = res.data.data.id
                    localStorage.setItem('username', username)
                    localStorage.setItem('uid', uid)
                    localStorage.setItem('token', token)

                    layer.confirm(res.data.msg, {
                        btn: ['确定'] //按钮
                    }, function () {
                        location.href = "index.html"
                    });
                }
            })
        } else {

            layer.confirm('请检查输入框内容', {
                btn: ['确定'] //按钮
            }, function () {
                location.reload();
            });
        }

    }
}
eye()

function eye() {
    let unEyes = document.querySelector('.ipt_2 h5')
    console.log(unEyes)
    let ipts2 = document.querySelector('.ipt_2 input')
    console.log(ipts2)
    let eyes = document.querySelector('.ipt_2 i')
    console.log(eyes)
    unEyes.onclick = function () {
        unEyes.style.display = 'none'
        eyes.style.color = '#33BBFF'
        ipts2.type = 'text'
    }
    eyes.onclick = function () {
        unEyes.style.display = 'inline-block'
        eyes.style.color = ''
        ipts2.type = 'password'
    }
}
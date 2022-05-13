let ipts = document.querySelectorAll('.ipt2 input')
let isUsername = false;
let isUsername1 = false;
let isUsername2 = false;
let spans = document.querySelectorAll('.ipt2 span')
console.log(spans[1])
ipts[0].oninput = async function () {
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

ipts[1].oninput = function () {

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
ipts[2].oninput = function () {

    if (this.value === ipts[1].value) {
        console.log('输入正确')
        isUsername2 = true
        spans[2].style.color = "#17fd0f";
        spans[2].style.fontSize = "20px"
        spans[2].innerHTML = '√'
        if (this.value == '') {
            spans[2].innerHTML = ''
        }
    } else {
        console.log('输入错误')
        isUsername2 = false
        spans[2].style.color = "red";
        spans[2].style.fontSize = "11px"
        spans[2].innerHTML = '* 两次输入密码不一致'
        if (this.value == '') {
            spans[2].innerHTML = ''
        }
    }
}
let ipts1 = document.querySelector('#ipt3')
let iptCheck = document.querySelector('#ipt-cbox')
console.log(iptCheck)
ipts1.onclick = function () {
    if (isUsername == true && isUsername1 == true && isUsername2 == true) {
        if (iptCheck.checked == true) {
            let username = ipts[0].value
            let password = ipts[1].value;
            let regIpt = '/reg.php'
            let params = {
                username,
                password
            }
            axios.get(regIpt, {
                params
            }).then(res => {
                console.log(res.data)
                if (res.data.code == 0) {
                    layer.confirm('注册失败,' + res.data.msg, {
                        btn: ['确定'] //按钮
                    }, function () {
                        location.reload();
                    });



                } else if (res.data.code == 1) {

                    layer.confirm(res.data.msg, {
                        btn: ['确定'] //按钮
                    }, function () {
                        location.href = "login.html"
                    });

                }
            })
        } else {
            layer.confirm('请阅读隐私协议', {
                btn: ['确定'] //按钮
            });

        }
    } else {
        layer.confirm('请检查输入框内容', {
            btn: ['确定'] //按钮
        });

    }


}
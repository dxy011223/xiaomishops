spans()

function spans() {
    let pagenum = 0;
    //    let spans=document.querySelectorAll('.')
    let list = document.querySelectorAll('.head1_left ul li')
    console.log(list)
    let spans = document.querySelectorAll('.head1_left span')
    console.log(spans)
    let div = document.querySelectorAll('.head1_right div')
    console.log(div)
    list.forEach((btn, i) => {
        btn.onmouseenter = () => {
            spans[pagenum].classList.remove('active')
            div[pagenum].classList.remove('active')
            spans[i].classList.add('active')
            div[i].classList.add('active')
            pagenum = i
        }
    })
}



function hover() {
    let list1 = document.querySelector('.list1')
    console.log(list1)
    let head1 = document.querySelector('.head1')
    console.log(head1)
    list1.onmouseenter = () => {
        head1.style.display = 'block'

    }
    head1.onmouseleave = () => {
        head1.style.display = 'none'
    }
}
hover2()
spans2()

function spans2() {
    let pagenum = 0;
    //    let spans=document.querySelectorAll('.')
    let list = document.querySelectorAll('.head2_left ul li')
    console.log(list)
    let spans = document.querySelectorAll('.head2_left span')
    console.log(spans)
    let div = document.querySelectorAll('.head2_right div')
    console.log(div)
    list.forEach((btn, i) => {
        btn.onmouseenter = () => {
            spans[pagenum].classList.remove('active')
            div[pagenum].classList.remove('active')
            spans[i].classList.add('active')
            div[i].classList.add('active')
            pagenum = i
        }
    })
}
hover()

function hover2() {
    let list1 = document.querySelector('.list2')
    console.log(list1)
    let head1 = document.querySelector('.head2')
    console.log(head1)
    list1.onmouseenter = () => {
        head1.style.display = 'block'
        // hover()
    }
    head1.onmouseleave = () => {
        head1.style.display = 'none'
    }
}
log()

function log() {
    let log = document.querySelector('.head_right i')
    let ul = document.querySelector('.head_right ul')
    let Lis = document.querySelectorAll('.head_right ul p')
    console.log(log)
    let username = Cookies.get("username");
    log.onclick = function () {
        // console.log(123)
        if (username) {
            Lis[7].innerHTML = '退出'
            Lis[7].onclick = function () {
                Cookies.remove('username');
                Cookies.remove('password')
                layer.confirm('用户已退出', {
                    btn: ['确定'] //按钮

                }, function () {
                    location.reload();
                });




            }
        } else {
            Lis[7].innerHTML = '登录'
            Lis[7].onclick = function () {
                location.href = 'login.html'
            }
        }
        if (ul.style.display == 'block') {
            ul.style.display = 'none'

        } else {
            ul.style.display = 'block'
        }
    }
    ul.onmouseleave = () => {
        ul.style.display = 'none'
    }
}
tiaoZhuan()

function tiaoZhuan() {
    let username = Cookies.get("username");
    console.log(username)
    let Lis = document.querySelectorAll('.head_right ul p')
    console.log(Lis)
    Lis[0].onclick = () => {
        if (username) {
            location.href = 'cart.html'
        } else {
            layer.confirm('您当前还未登录，请先登录', {
                btn: ['确定', '再看看'] //按钮
            }, function () {
                location.href = 'login.html'
                layer.msg(data.msg, {
                    icon: 1
                });
            });
        }
    }

}

function pic() {
    let username = Cookies.get("username");
    let ppp = document.querySelector('.ppp')
    let pppSpan = document.querySelector('.ppp span')
    console.log(ppp)
    if (username) {
        pppSpan.innerHTML = username
        ppp.style.display = 'inline-block'
    } else {
        ppp.style.display = 'none'

    }

}
pic()
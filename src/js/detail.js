let obj = new URLSearchParams(location.search);
let pid = obj.get("id");
console.log(pid);
let bo1 = document.querySelector('.bo1 h2 span')
let bo1H = document.querySelector('.bo1 h1')
let imgeUl = document.querySelectorAll('.box3_log ul li img')
console.log(imgeUl)
let pName = document.querySelector('.box2_left span')
let imgeOl = document.querySelectorAll('.box3_log ol li img')
pic()

function pic() {
    if (pid == null) {
        layer.confirm('没有找到商品', {
            btn: ['确定'] //按钮
        }, function () {
            location.href = 'index.html'
            layer.msg(data.msg, {
                icon: 1
            });
        });

    } else {
        axios.get(detailAPI, {
            params: {
                id: pid
            }
        }).then(res => {
            console.log(res.data)
            let product = res.data.data
            bo1.innerHTML = product.pprice
            bo1H.innerHTML = product.pname
            pName.innerHTML = product.pname
            imgeUl[0].src = `${product.pimg}`
            imgeOl[0].src = `${product.pimg}`
            jiaGe()
            jiaJian()
            AddBtns()
        })

    }
}

function AddBtns() {

    let btnS = document.querySelectorAll('.bo6_bottom button')
    console.log(btnS)

    btnS[0].onclick = function () {
        let username = Cookies.get("username");
        console.log(username)
        let uid = localStorage.getItem('uid')
        console.log(uid)
        let pnumP = document.querySelector('.btns p')
        // console.log(pnumP)
        let pnum = pnumP.innerHTML
        console.log(pnum)
        console.log(pid)
        let params = {
            uid,
            pid,
            pnum
        }
        console.log()
        if (username) {
            if (pnum == 0) {
                layer.confirm('商品数量为0，无法加入购物车', {
                    btn: ['确定'] //按钮
                });
            } else {
                layer.confirm('您确定要加入购物车么', {
                    btn: ['确定', '再看看'] //按钮
                }, async function () {

                    let {
                        data
                    } = await axios.get(cartAddAPI, {
                        params
                    })
                    console.log(data)
                    layer.msg(data.msg, {
                        icon: 1

                    });
                    // location.href = 'cart.html'
                });
            }
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

// }

// }






















function jiaJian() {

    let btns = document.querySelectorAll('.btns button')
    let btnPs = document.querySelector('.btns p')
    let bo6 = document.querySelector('.bo6_top h5')
    let bo6MM = document.querySelector('.bo6_cen h1 span')


    let bo1tt = bo1.innerHTML
    console.log(btns)
    let pagenum = btnPs.innerHTML
    console.log(pagenum)
    btns[0].onclick = () => {
        pagenum--
        if (pagenum <= 0) {
            pagenum = 0

        }
        btnPs.innerHTML = pagenum
        bo6.innerHTML = 'ｘ' + pagenum
        bo6MM.innerHTML = bo1tt * pagenum

    }
    btns[1].onclick = () => {
        pagenum++
        if (pagenum >= 10) {
            pagenum = 10

        }
        btnPs.innerHTML = pagenum
        bo6.innerHTML = 'ｘ' + pagenum
        bo6MM.innerHTML = bo1tt * pagenum
    }


}
// jiaGe()
function jiaGe() {
    let bo1 = document.querySelector('.bo1 h2 span')
    let bo6Top = document.querySelector('.bo6_top h3 span')
    let bo1tt = bo1.innerHTML
    console.log(bo1tt)
    bo6Top.innerHTML = bo1tt
    let bo4Btns = document.querySelectorAll('.bo4_top button')
    let bo6Span = document.querySelector('.bo6_top span')
    bo4Btns.forEach((btn, i) => {
        btn.onclick = () => {
            let btnss = btn.innerText
            bo6Span.innerHTML = btnss
        }
    })
}
huaDong()

function huaDong() {
    let pagenum = 0
    let btns = document.querySelectorAll('.box3_log ol li')
    console.log(btns)
    let uls = document.querySelectorAll('.box3_log ul li')
    console.log(uls)
    let ul = document.querySelector('.box3_log ul')
    let spanss = document.querySelector('.box3_log ol span')
    btns.forEach((btn, i) => {
        btn.onclick = () => {
            btns[pagenum].style.borderBottom = ''
            btn.style.borderBottom = '3px black solid'
            pagenum = i;
            console.log(i)
            animate(ul, {
                left: -i * 622
            })
            animate(spanss, {
                left: i * 155
            })
        }
    })
}
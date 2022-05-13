// let ips = document.querySelector('#iptss');
let table = document.querySelector('.box2_right_ipt table');
let tds = document.querySelectorAll('.box2_right_ipt table td');
let btns = document.querySelector('.iptss2')





function tab() {
    let pagenum = 1;
    let btns = document.querySelectorAll('.box4_left ul li')
    let boxs = document.querySelectorAll('.box4_left ol li')
    btns.forEach((btn, i) => {
        btn.onmouseover = () => {
            btn;
            btns[i];
            btns[pagenum].classList.remove('active')
            btns[i].classList.add('active')
            boxs[pagenum].classList.remove('active')
            boxs[i].classList.add('active')
            pagenum = i
        }
        btn.onmouseout = () => {
            btns[pagenum].classList.remove('active')
        }
    })
}
jie()

function jie() {
    let ipts1 = document.querySelector('#ipts1')
    console.log(ipts1)
    let spans = document.querySelector('.box4_top_right span')
    console.log(spans)
    if (spans.innerHTML == '0.00') {
        ipts1.style.background = 'gray'
        // return false
    } else {
        ipts1.style.background = '#ff4400'

    }


}


loadCartList()

async function loadCartList() {
    let uid = localStorage.getItem('uid')
    console.log(uid)
    let {
        data: {
            data
        }
    } = await axios.get(cartListAPI, {
        params: {
            id: uid
        }
    })
    console.log(data)
    let resArr = data.map(v => `
    <div class="p1">
    <h5><input type="checkbox" name="fruit" id="" class="single-sel-ipt" value="${v.pprice * v.pnum}">单选</h5>
    <p><img src="${v.pimg}" alt=""></p>
    <h3>${v.pname}</h3>
    <h4>￥${v.pprice}</h4 >
    <h6><input  type="number" date-price="${v.pprice}" name="" id="ipta" value="${v.pnum}" class="form-control pnum-ipt" date-pid="${v.pid}"></h6>
    <span id="fu">￥${(v.pprice * v.pnum).toFixed(2)}</span>
    <input type="button" value="删除" id="ipt2s" class="btn btn-danger del-btn" data-pid="${v.pid}">
        
    </div>
        `)
    document.querySelector('.bx1').innerHTML = resArr.join('')
    updatecart()
    deleteFn()
    kkk()
    // jisuan()
    zongJia()
    gouWuche()
}
// deleteFn()
function deleteFn() {
    let ul = document.querySelectorAll('.p1')
    console.log(ul)
    ul.forEach(v => {
        v.onclick = async function (e) {
            if (e.target.classList.contains('del-btn')) {
                console.log(e.target)
                let uid = localStorage.getItem('uid')
                let pid = e.target.getAttribute('data-pid')
                let params = {
                    uid,
                    pid
                }
                console.log(params)
                let {
                    data
                } = await axios.get(cartDelAPI, {
                    params
                })
                console.log(data)
                // loadCartList()
                zongJia();
                kkk()

                e.target.parentNode.remove();
                gouWuche()
            }
        }

    })

}

function gouWuche() {
    let box5 = document.querySelector('.box5')
    let box6 = document.querySelector('.box6')
    let bx1 = document.querySelectorAll('.p1')
    let box6Btns = document.querySelector('.box6 dl dd button')
    console.log(box5)
    console.log(bx1.length)
    if (bx1.length == 0) {
        box5.style.display = 'none'
        box6.style.display = 'flex'
        box6Btns.onclick = () => {
            location.href = 'index.html'
        }
    } else {
        box5.style.display = 'block'
        box6.style.display = 'none'
    }
}

function updatecart() {
    let ul = document.querySelectorAll('.p1')

    ul.forEach(c => {
        c.onchange = async function (e) {
            if (e.target.classList.contains('pnum-ipt')) {
                console.log(e.target)
                let uid = localStorage.getItem('uid')
                let pid = e.target.getAttribute('date-pid')
                console.log(pid)
                let price = e.target.getAttribute('date-price')
                console.log(price)
                console.log(uid)
                // console.log(spans)
                let pnum = e.target.value
                if (pnum <= 0) {
                    return e.target.value = 1
                }
                console.log(pnum)
                let params = {
                    uid,
                    pid,
                    pnum
                }
                let {
                    data
                } = await axios.get(cartUpdateAPI, {
                    params
                })
                console.log(e.target.parentNode.nextElementSibling.innerHTML)
                e.target.parentNode.nextElementSibling.innerHTML = '￥' + (price * pnum).toFixed(2)
                console.log(data)
                // loadCartList()
                zongJia();
            }
        }
    })


}

function kkk() {
    let checkBoxs = document.querySelector('.box5')
    console.log(checkBoxs)

    checkBoxs.onclick = function (v) {
        // console.log(v.target)
        let allSelIpt = document.querySelector('.all-sel-ipt');
        let singleSelIpt = document.querySelectorAll('.single-sel-ipt')
        // 判断,要是都删完了,就取消全选
        if (singleSelIpt.length == 0) {
            allSelIpt.checked = false

        };
        let Bgp1 = document.querySelectorAll('.p1')
        console.log(Bgp1)

        if (v.target.classList.contains('all-sel-ipt')) {
            console.log(singleSelIpt)
            singleSelIpt.forEach(v => {
                v.checked = allSelIpt.checked
                if (allSelIpt.checked == true) {
                    v.parentNode.parentNode.style.background = '#A2A3A7'
                } else {
                    v.parentNode.parentNode.style.background = ''
                }
            })
            zongJia();
        }
        if (v.target.classList.contains('single-sel-ipt')) {
            let arr = [...singleSelIpt]
            console.log(arr)
            let isAll = arr.every(v => v.checked == true)
            console.log(isAll)
            console.log(allSelIpt)
            allSelIpt.checked = isAll
            console.log(allSelIpt)
            console.log(v.target.parentNode.parentNode)
            if (v.target.checked == true) {
                v.target.parentNode.parentNode.style.background = '#A2A3A7'
            } else {
                v.target.parentNode.parentNode.style.background = ''
            }
            zongJia();
        }



    }
}

function zongJia() {
    let text = document.querySelectorAll('.pnum-ipt');
    let danJia = document.querySelectorAll('.p1>h4');
    let oneCheckboxs = document.querySelectorAll('.single-sel-ipt');
    let zongJia = document.querySelector('#span_s');
    let sum = 0
    text.forEach((txt, i) => {
        if (oneCheckboxs[i].checked == true) {
            let price = danJia[i].innerHTML.replace('￥', '');
            sum += txt.value * price;
        }
    })
    zongJia.innerHTML = sum.toFixed(2);
    jie()
}
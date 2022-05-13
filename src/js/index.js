function banner() {
    let pagenum = 0;
    let btns = document.querySelectorAll('.page li')
    let itemLis = document.querySelectorAll('.item li')
    let itemUl = document.querySelector('.item')
    btns.forEach((btn, i) => {
        btn.onclick = () => {
            btns[pagenum].style.opacity = '.2'
            btn.style.opacity = '.7'
            pagenum = i;
            animate(itemUl, {
                left: -i * 1920
            })
        }
    })
    let rightBtn = document.querySelector('.rightBtn')
    rightBtn.onclick = () => {
        shouNext()
    }
    let leftBtn = document.querySelector('.leftBtn')
    leftBtn.onclick = () => {
        btns[pagenum].style.opacity = '.2'
        pagenum--
        if (pagenum == -1) {
            pagenum = 7;
            itemUl.style.left = -8 * 1920 + 'px'
        }
        animate(itemUl, {
            left: -pagenum * 1920
        })
        btns[pagenum].style.opacity = '.7'
    }
    let timer = setInterval(() => {
        shouNext()
    }, 2000)
    let box = document.querySelector('.box')
    box.onmouseenter = () => {
        clearInterval(timer)
    }
    box.onmouseleave = () => {
        timer = setInterval(() => {
            shouNext()
        }, 2000)
    }

    function shouNext() {


        if (pagenum == 8) {
            btns[0].style.opacity = '.2'
        } else {
            btns[pagenum].style.opacity = '.2'
        }
        pagenum++;
        if (pagenum === 6) {
            itemUl.style.left = 0
            pagenum = 1;
        }
        animate(itemUl, {
            left: -pagenum * 1920
        })
        if (pagenum == 5) {
            btns[0].style.opacity = '.7'
        } else {
            btns[pagenum].style.opacity = '.7'
        }
    }
}
banner()




huaDong()

function huaDong() {
    let pagenum = 0
    let btns = document.querySelectorAll('.box5 h1 ol li')
    console.log(btns)
    let uls = document.querySelectorAll('.ul ul')
    console.log(uls)
    let ul = document.querySelector('.ul')

    btns.forEach((btn, i) => {
        btn.onclick = () => {
            btns[pagenum].style.borderBottom = ''
            btn.style.borderBottom = '3px black solid'
            pagenum = i;
            console.log(i)
            animate(ul, {
                left: -i * 1206
            })
        }
    })
}
huaDong2()

function huaDong2() {
    let pagenum = 0
    let btns = document.querySelectorAll('.box6 h1 ol li')
    console.log(btns)
    let uls = document.querySelectorAll('.ul2 ul')
    console.log(uls)
    let ul = document.querySelector('.ul2')

    btns.forEach((btn, i) => {
        btn.onclick = () => {
            btns[pagenum].style.borderBottom = ''
            btn.style.borderBottom = '3px black solid'
            pagenum = i;
            console.log(i)
            animate(ul, {
                left: -i * 1206
            })
        }
    })
}
loadList()
async function loadList() {
    let pagenum = 0;
    let pagesize = 40;
    let uid = localStorage.getItem('uid')

    let {
        data: {
            data
        }
    } = await axios.get(productListAPI, {
        params: {
            pagenum: pagenum,
            pagesize: pagesize,
            uid: uid
        }
    })
    console.log(data)
    let resArr = data.map(v =>
        `<li>
        <span id="a"></span> 
        <a href="./detail.html?id=${v.pid}">

        <dl>

                        <dt><img src="${v.pimg}" alt=""></dt>
                        <dd>
                            <h2>${v.pname}</h2>
                            <h3>曙光 12G+256G</h3>
                            <h4>￥${v.pprice}</h4>
                        </dd>
                    </dl>
        </a>
    </li>
    `)

    document.querySelector('.lists').innerHTML = resArr.join('')
    daoJishi()
    huadong()

}
daoJishi()
async function daoJishi() {
    var showtime = function () {
        var nowtime = new Date()
        var endtime = new Date(2021, 08, 23, 0, 0, 0);
        var lefttime = endtime.getTime() - nowtime.getTime(),

            left1 = parseInt(lefttime % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)),
            left2 = parseInt(lefttime % (1000 * 60 * 60 * 24) % (1000 * 60 * 60) / (1000 * 60)),
            left3 = parseInt(lefttime % (1000 * 60 * 60 * 24) % (1000 * 60 * 60) % (1000 * 60) / 1000)

        return `
            <p>${left1}</p> :
            <p>${left2}</p> :
            <p>${left3}</p>
           `
    }
    let a = document.querySelectorAll('#a')
    console.log(a)
    a.forEach((c) => {
        setInterval(async function () {
            c.innerHTML = showtime()


        }, 1000)
    })

}

function huadong() {
    let pagenum = 0
    // let pagesize = 50;
    let leftBtns = document.querySelector('#leftBtn')
    console.log(leftBtns)
    let rightBtns = document.querySelector('#rightBtn')
    console.log(rightBtns)
    let listUl = document.querySelector('.lists')
    console.log(listUl);

    leftBtns.onclick = () => {

        if (pagenum == 0) {
            leftBtns.style.opacity = '.5';
            return pagenum = 0
        } else {
            leftBtns.style.opacity = '1';
        }
        pagenum++

        animate(listUl, {
            left: pagenum * 1206
        })


    }
    rightBtns.onclick = () => {
        if (pagenum == -9) {
            rightBtns.style.opacity = '.5';
            return pagenum = -9

        } else {
            rightBtns.style.opacity = '1';
        }

        pagenum--
        animate(listUl, {
            left: pagenum * 1206
        })
    }
}
loadLists()
async function loadLists() {
    let pagenum = 3;
    let pagesize = 30;
    let uid = localStorage.getItem('uid')

    let {
        data: {
            data
        }
    } = await axios.get(productListAPI, {
        params: {
            pagenum: pagenum,
            pagesize: pagesize,
            uid: uid
        }
    })
    console.log(data)
    let resArr = data.map(v =>
        `<li>

        <a href="./detail.html?id=${v.pid}">

        <dl>

                        <dt><img src="${v.pimg}" alt=""></dt>
                        <dd>
                            <h2>${v.pname}</h2>
                            <h3>曙光 12G+256G</h3>
                            <h4>￥${v.pprice}</h4>
                        </dd>
                    </dl>
        </a>
    </li>
    `)

    document.querySelector('.listd').innerHTML = resArr.join('')
    // daoJishi()
    huadongs()

}

function huadongs() {
    let pagenum = 0
    // let pagesize = 50;
    let leftBtns = document.querySelector('#leftBtns')
    console.log(leftBtns)
    let rightBtns = document.querySelector('#rightBtns')
    console.log(rightBtns)
    let listUl = document.querySelector('.listd')
    console.log(listUl);

    leftBtns.onclick = () => {

        if (pagenum == 0) {
            leftBtns.style.opacity = '.5';
            return pagenum = 0
        } else {
            leftBtns.style.opacity = '1';
        }
        pagenum++

        animate(listUl, {
            left: pagenum * 1206
        })


    }
    rightBtns.onclick = () => {
        if (pagenum == -4) {
            rightBtns.style.opacity = '.5';
            return pagenum = -4

        } else {
            rightBtns.style.opacity = '1';
        }

        pagenum--
        animate(listUl, {
            left: pagenum * 1206
        })
    }
}
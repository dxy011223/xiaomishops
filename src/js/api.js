// 接口 先关的东西 

axios.defaults.baseURL = 'http://jx.xuzhixiang.top/ap/api';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';



/* 添加商品 接口
接口地址：  http://jx.xuzhixiang.top/ap/api/goods/goods-add.php
     接口请求方式：post
     接口参数：
  
    1. 
pimg
    2. 
pname
    3. 
pprice
    4. 
pdesc
    5. 
uid  （可选）用户商品
 */
const addProductAPI = '/goods/goods-add.php';


/* 商品列表接口

所有商品接口
get
参数
pagesize  每页获取几个数据  10 
pagenum 获取第几页数据   页码  0  
uid  用户id
http://jx.xuzhixiang.top/ap/api/allproductlist.php?pagesize=20&pagenum=4 */

const productListAPI = '/allproductlist.php'

/* 
删除商品 接口
接口地址：    http://jx.xuzhixiang.top/ap/api/goods/goods-delete.php
     接口请求方式：get
     接口参数：

            pid（必选）商品的id
            uid（必选）用户的id
            token（必选）登陆时候返回的token

          
     使用方式
          

http://jx.xuzhixiang.top/ap/api/goods/goods-delete.php?pid=2459
     
     服务器返回json数据 */
const delProductAPI = '/goods/goods-delete.php'


/* 根据商品id获取商品详情接口

 接口地址：http://jx.xuzhixiang.top/ap/api/detail.php
接口请求方式：get
接口参数：
id  商品的id
使用方式
获取id为1的商品的详情
http://jx.xuzhixiang.top/ap/api/detail.php?id=1
服务器返回json数据 */
const detailAPI = 'detail.php'

/*
修改商品 接口
接口地址：    http://jx.xuzhixiang.top/ap/api/goods/goods-update.php
     接口请求方式：get
     接口参数：

            pid（必选）商品的id
pname（必选）商品
pprice（必选）商品
pdesc（必选）商品


     使用方式


http://jx.xuzhixiang.top/ap/api/goods/goods-delete.php?pid=2459 */



/* 修改商品 接口
接口地址：    http://jx.xuzhixiang.top/ap/api/goods/goods-update.php
     接口请求方式：get
     接口参数：

            pid（必选）商品的id
pname（必选）商品
pprice（必选）商品
pdesc（必选）商品

          
     使用方式 */

const upDateProductAPI = '/goods/goods-update.php'


/* 给用户购物车中添加商品 接口

     接口地址：http://jx.xuzhixiang.top/ap/api/add-product.php
     接口请求方式：get
     接口参数：
          uid  用户id
          pid  商品id
          pnum  要添加的商品数量
           */
const cartAddAPI = '/add-product.php'


/* 查询用户购物车中的商品 接口

接口地址：http://jx.xuzhixiang.top/ap/api/cart-list.php
接口请求方式：get
接口参数：
     id  用户id */
const cartListAPI = '/cart-list.php'

/* 删除用户购物车中的商品 接口

接口地址：http://jx.xuzhixiang.top/ap/api/cart-delete.php
接口请求方式：get
接口参数：
     uid  用户id
     pid  商品id
      */
const cartDelAPI = '/cart-delete.php'
/* 
更新购物车中商品数量 接口

接口地址：http://jx.xuzhixiang.top/ap/api/cart-update-num.php
接口请求方式：get
接口参数：
     uid  用户id
     pid  商品id
     pnum  要添加的商品数量 */
const cartUpdateAPI = '/cart-update-num.php'
let sign_id = localStorage.getItem('signin')
// fetch_cart()
async function fetch_cart(){
    let data = await fetch(`https://ajio-json.onrender.com/users/${sign_id}`)
    data = await data.json()
    if(data.cart.length){
        display_cart(data.cart)
    }
}
let arr = [
    {
      "id": 36,
      "image": "https://assets.ajio.com/medias/sys_master/root/20220705/WzMY/62c35ba3f997dd03e2b98ad0/-1117Wx1400H-464586925-blue-MODEL.jpg",
      "img1": "https://assets.ajio.com/medias/sys_master/root/20220705/4uiI/62c35ba3f997dd03e2b98b2c/-1117Wx1400H-464586925-blue-MODEL3.jpg",
      "img2": "https://assets.ajio.com/medias/sys_master/root/20220705/P2lP/62c35ba3f997dd03e2b98af2/-473Wx593H-464586925-blue-MODEL6.jpg",
      "name": "GLAM ROOTS",
      "des": "Floral Anarkali Kurta",
      "price": 800,
      "type": "dress",
      "Gender": "F",
      "qty" : 1
    },
    {
      "id": 2,
      "image": "https://assets.ajio.com/medias/sys_master/root/20221123/zUpf/637d4106aeb269659ca84d63/-1117Wx1400H-465324816-tan-MODEL.jpg",
      "img1": "https://assets.ajio.com/medias/sys_master/root/20221123/Cw0h/637d410daeb269659ca84e42/-1117Wx1400H-465324816-tan-MODEL5.jpg",
      "img2": "https://assets.ajio.com/medias/sys_master/root/20221123/2u5R/637d4106aeb269659ca84d9d/-1117Wx1400H-465324816-tan-MODEL3.jpg",
      "name": "CAMPUS SUTRA",
      "des": "Zip-Front Bomber Jacket",
      "price": 700,
      "type": "jacket",
      "Gender": "M",
      "qty" : 1
    },
    {
      "id": 3,
      "image": "https://assets.ajio.com/medias/sys_master/root/20220323/RjiR/623acfbaaeb26921afec7a51/-1117Wx1400H-462745234-blue-MODEL.jpg",
      "img1": "https://assets.ajio.com/medias/sys_master/root/20220323/hxiq/623acfbbaeb26921afec7a8e/-1117Wx1400H-462745234-blue-MODEL4.jpg",
      "img2": "https://assets.ajio.com/medias/sys_master/root/20220323/O3qt/623acfbbaeb26921afec7a87/-1117Wx1400H-462745234-blue-MODEL5.jpg",
      "name": "KIANA HOUSE OF FASHION",
      "des": "Floral Print Round Neck Gown Dress",
      "price": 450,
      "type": "dress",
      "Gender": "F",
      "qty" : 1
    }]

display_cart(arr)
function display_cart(arr){
    document.querySelector('#item').innerHTML = `(${arr.length} items)`
    document.querySelector('.empty-cart').style.display = "none"
    document.querySelector('.cart-container').style.display = "inline-block"
    let main_div = document.querySelector('.card-offer')
    main_div.innerHTML = null
    arr.map((e,i)=>{
        let data = document.createElement('div')
        data.setAttribute('class','product-card')

        data.innerHTML = `<div class="product-card">
        <input type="hidden" name="baseProductId_0" value="441316111_black">
        <div class="card-section row">
            <div class="product-img col-lg-2 col-4">
                <img src="${e.image}">
            </div>
            <div class="product-details col-lg-10 col-8">
                <div class="product-name">
                 ${e.name}
                    <div class="product-delete">
                        <div class="delete-btn">Delete</div>
                    </div>
                </div>
                <div class="update-wrapper">
                    <div class="cartsize">
                        <span>Size</span>
                        <div>S<span class="ic-chevrondown"></span>
                        </div>
                    </div>
                    <div class="cartqty">
                        <span>Qty</span>
                        <div>${e.qty}<span class="ic-chevrondown"></span>
                        </div>
                    </div>
                </div>
                <div class="priceinfo">
                    <div class="net-price best-price-strip">Rs. ${e.price}</div>
                </div>
                <div class="save-closet-btn wishlist-icon-mr">
                    <span class="wishlist-icon-mr"><img src="https://assets.ajio.com/static/img/my-bag-wishlist-icon.svg"></span>Move to Wishlist
                </div>
            </div>
        </div>
    </div>`
    main_div.append(data)
    })
    display_price(arr)
}

function display_price(arr){
    let total = arr.reduce((ac,e)=>{
        return ac + e.price*e.qty
    },0)
    localStorage.setItem('ajio_price',total)
    let price = document.querySelectorAll('.price-value')
    price.forEach((e,i)=>{
        if(i!=1)
        e.innerHTML = "₹ " + total.toFixed(2)
    })
}

document.querySelector('.apply-button').addEventListener('click',checkCoupon)

function checkCoupon(){
    let coupon = document.querySelector('.coupon-code-input-vhr-not-apld').value
    if(coupon.toLowerCase()=="masai30"){
        document.querySelector('.content').innerHTML = "Coupon Applied Successfully <br> Discount of 30% is applied"
        let total = +localStorage.getItem('ajio_price')
        total *= .7
        total = total.toFixed(2)
        localStorage.setItem('ajio_price_discount',total)
        let price = document.querySelectorAll('.price-value')
        price[2].innerHTML = "₹ " + total
    }else{
        document.querySelector('.content').innerHTML = "Invalid Coupon"
        let price = document.querySelectorAll('.price-value')
        price[2].innerHTML = "₹ " + (+localStorage.getItem('ajio_price')).toFixed(2)
    }
}
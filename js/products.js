let products = [
    {
        id: 1,
        namepro: " اسپرسو دبل | Espresso Dubble",
        pricepro: 39000,
        explain: "دوشات اسپرسو قهوه 100% عربیکا – 30/70",
        pic: "espresodabel.jpg",
        category: "hot",
    },
    {
        id: 2,
        namepro: " اسپرسو سینگل | Espresso Single",
        pricepro: 34000,
        explain: "یک شات اسپرسو ",
        pic: "espresosingle.jpg",
        category: "hot",
    },
    {
        id: 3,
        namepro: " کارامل ماکیاتو | Caramel Macchiato",
        pricepro: 59000,
        explain: "سیروپ کارامل + شیر+ یک شات دبل اسپرسو",
        pic: "caramelmakiyato.jpg",
        category: "hot",
    },
    {
        id: 4,
        namepro: " آمریکانو | Americano",
        pricepro: 44000,
        explain: "دو شات اسپرسو + آب جوش ",
        pic: "americano.jpg",
        category: "hot",
    },
    {
        id: 5,
        namepro: " کاپوچینو | Cappuccino",
        pricepro: 49000,
        explain: "دو شات اسپرسو+ شیر+ فوم شیر ",
        pic: "cappuchino.jpg",
        category: "hot",
    },
    {
        id: 6,
        namepro: " لته | Latte",
        pricepro: 49000,
        explain: "دو شات اسپرسو + شیر فوم دار ",
        pic: "latte.jpg",
        category: "hot",
    },
    {
        id: 23,
        namepro: "v60",
        pricepro: 54000,
        explain: "قهوه تازه آسیاب شده + دم آوری با V60",
        pic: "v60.jpg",
        category: "instant",
    },
    {
        id: 24,
        namepro: "ایروپرس",
        pricepro: 44000,
        explain: "قهوه تازه آسیاب شده + دم آوری با فشار",
        pic: "iropress.jpg",
        category: "instant",
    },
    {
        id: 25,
        namepro: "سایفون",
        pricepro: 64000,
        explain: "قهوه تازه آسیاب شده + دم آوری با سایفون",
        pic: "sayphone.jpg",
        category: "instant",
    },
    {
        id: 26,
        namepro: "فرانسه",
        pricepro: 44000,
        explain: "قهوه تازه آسیاب شده+ شیر + دم آوری با فرنچ پرس",
        pic: "french2.jpg",
        category: "instant",
    },
    {
        id: 27,
        namepro: "کِمکس",
        pricepro: 54000,
        explain: "قهوه تازه آسیاب شده+ دم آوری با کِمکس",
        pic: "comex.jpg",
        category: "instant",
    },
    {
        id: 28,
        namepro: "آیس آمریکانو | Iced Americano",
        pricepro: 49000,
        explain: "دو شات اسپرسو+ آب + یخ ",
        pic: "ice-americano.jpg",
        category: "coffee",
    },
    {
        id: 29,
        namepro: "آیس موکا | Iced Mocha",
        pricepro: 649000,
        explain: "شکلات + شیر+ یخ+ دوشات اسپرسو ",
        pic: "icemoka.jpg",
        category: "coffee",
    },
    {
        id: 30,
        namepro: "آیس لته | Iced Latte",
        pricepro: 54000,
        explain: "اسپرسو+ شیر+ یخ ",
        pic: "icelatte.jpg",
        category: "coffee",
    },
    {
        id: 31,
        namepro: "آفوگاتو | Affogato",
        pricepro: 49000,
        explain: "دو شات اسپرسو+ یک اسکوپ بستنی بزرگ",
        pic: "afogato1.jpg",
        category: "coffee",
    },
    {
        id: 32,
        namepro: "آیس کارامل ماکیاتو",
        pricepro: 59000,
        explain: "اسپرسو+شیر+ کارامل+ یخ ",
        pic: "ferape.jpg",
        category: "coffee",
    },
    {
        id: 33,
        namepro: "کلد برو",
        pricepro: 64000,
        explain: "coffee دم ورنیانو ",
        pic: "coldbro.jpg",
        category: "coffee",
    },
    {
        id: 38,
        namepro: "کوکتل کیوی پرتقال",
        pricepro: 49000,
        explain: "کیوی+پرتقال بلند شده+ سیروپ + آب گازدار",
        pic: "coctelekivi.jpg",
        category: "cold",
    },
    {
        id: 39,
        namepro: "شربت Syrup",
        pricepro: 35000,
        explain: " ",
        pic: "syrup.jpg",
        category: "cold",
    },
    {
        id: 40,
        namepro: "شربت به لیمو بهار نارنج",
        pricepro: 39000,
        explain: "شربت به لیمو+ بهار نارنج+ تخم شربتی ",
        pic: "behlimoobahar.jpg",
        category: "cold",
    },
    {
        id: 41,
        namepro: "شربت سکنجبین",
        pricepro: 39000,
        explain: "شربت سکنجبین + تخم شربتی ",
        pic: "sekanjebin.jpg",
        category: "cold",
    },
    {
        id: 42,
        namepro: "کوکتل آدامس",
        pricepro: 64000,
        explain: "سیروپ+ آبمیوه طبیعی+ آب گازدار",
        pic: "bubblegum.jpg",
        category: "cold",
    },
    {
        id: 43,
        namepro: "کوکتل اورنج اسپرسو",
        pricepro: 54000,
        explain: "آب پرتقال طبیعی + دوشات اسپرسو ",
        pic: "coctelorange.jpg",
        category: "cold",
    },
    {
        id: 51,
        namepro: "shake نوتلا | shake Nutella",
        pricepro: 64000,
        explain: "بستنی+ شیر+ شکلات نوتلا",
        pic: "shakenutella.jpg",
        category: "shake",
    },
    {
        id: 52,
        namepro: "shake وانیل + کارامل",
        pricepro: 64000,
        explain: "بستنی، شیر، کارامل+ وانیل ",
        pic: "shakevanilcaramel.jpg",
        category: "shake",
    },
    {
        id: 53,
        namepro: "shake توت فرنگی | shake Strawberry",
        pricepro: 64000,
        explain: "بستنی+ شیر+ توت فرنگی ",
        pic: "shaketoot.jpg",
        category: "shake",
    },
    {
        id: 54,
        namepro: "shake اسپرسو | shake Espresso",
        pricepro: "64000 ",
        explain: "بستنی+ شیر+ دو شات اسپرسو",
        pic: "shakecafe.jpg",
        category: "shake",
    },
    {
        id: 64,
        namepro: "آویشن | بزرگ",
        pricepro: 49000,
        explain: "آویشن + کاکوتی+ دارچین+ لیمو خشک",
        pic: "avishan.jpg",
        category: "herbal",
    },
    {
        id: 65,
        namepro: "آویشن | کوچک",
        pricepro: 39000,
        explain: "آویشن + کاکوتی+ دارچین+ لیمو خشک",
        pic: "avishan.jpg",
        category: "herbal",
    },
    {
        id: 66,
        namepro: "بابونه | بزرگ",
        pricepro: 49000,
        explain: "بابونه+ دارچین+ لیمو خشک",
        pic: "baboone.jpg",
        category: "herbal",
    },
    {
        id: 67,
        namepro: "بابونه | کوچک",
        pricepro: 39000,
        explain: "بابونه+ دارچین+ لیمو خشک",
        pic: "baboone.jpg",
        category: "herbal",
    },
    {
        id: 68,
        namepro: "به لیمو بهار نارنج | بزرگ",
        pricepro: 45000,
        explain: "به لیمو+ بهار نارنج",
        pic: "behlimoo.jpg",
        category: "herbal",
    },
    {
        id: 69,
        namepro: "به لیمو بهار نارنج | کوچک",
        pricepro: 39000,
        explain: "به لیمو+ بهار نارنج",
        pic: "behlimoo.jpg",
        category: "herbal",
    },
    {
        id: 82,
        namepro: "cake شکلات | Chocolate cake",
        pricepro: 49000,
        explain: " ",
        pic: "choclatecake.jpg",
        category: "cake",
    },
    {
        id: 83,
        namepro: "cake روز | Day cake",
        pricepro: 39000,
        explain: " ",
        pic: "daycake.jpg",
        category: "cake",
    },
    {
        id: 84,
        namepro: "چیز cake | cheesee cake",
        pricepro: 59000,
        explain: " ",
        pic: "cheeseecakeday.jpg",
        category: "cake",
    },
    {
        id: 85,
        namepro: "اسنک مرغ | shakeken Snack",
        pricepro: 59000,
        explain: "ژامبون + قارچ+ فلفل دلمه+ چیپس+ نان تست+ پنیر چدار ",
        pic: "chickensnack.jpg",
        category: "snack",
    },
    {
        id: 86,
        namepro: "اسنک گوشت | Meat Snack",
        pricepro: 59000,
        explain: "ژامبون + قارچ+ فلفل دلمه+ چیپس+ نان تست+ پنیر چدار",
        pic: "snack.jpg",
        category: "snack",
    },
    {
        id: 87,
        namepro: "اسنک سوجوک | Sojuk snack",
        pricepro: 59000,
        explain: "سوجوک ترک+ قارچ+ فلفل دلمه+ چیپس+ نان تست+ پنیر چدار",
        pic: "chickensnack.jpg",
        category: "snack",
    },
    {
        id: 88,
        namepro: "اسنک سالامی | Salami snack",
        pricepro: 59000,
        explain: "سالامی مخصوص+ + قارچ+ فلفل دلمه+ چیپس+ نان تست+ پنیر چدار",
        pic: "snack.jpg",
        category: "snack",
    },
    {
        id: 89,
        namepro: "چیپس و پنیر بزرگ | shakeken Snack",
        pricepro: 99000,
        explain: "چیپس+ پنیر+ قارچ+ ذرت+ فلفل دلمه+ پنیر رنده شده",
        pic: "cheesee.jpg",
        category: "snack",
    },
    {
        id: 90,
        namepro: "چیپس و پنیر کوچک | shakeken Snack",
        pricepro: 69000,
        explain: "چیپس+ پنیر+ قارچ+ ذرت+ فلفل دلمه+ پنیر رنده شده",
        pic: "cheesee.jpg",
        category: "snack",
    },
    {
        id: 91,
        namepro: "پیتزا | pizza",
        pricepro: 119000,
        explain: "نان باگت+ دو مدل پنیر+ ژامبون + قارچ+ ذرت+ فلفل دلمه",
        pic: "pitza.jpg",
        category: "snack",
    },
    {
        id: 92,
        namepro: "اسنک پپرونی | Pepperoni snack",
        pricepro: 59000,
        explain: "پپرونی+ پنیر چدار+قارچ+فلفل دلمه ",
        pic: "snack.jpg",
        category: "snack",
    },
    {
        id: 93,
        namepro: "قهوه آجری گران آروما",
        pricepro: 0,
        explain: "قهوه آجری گران آروما 250 گرم مخصوص موکاپات ",
        pic: "ghahveajorigeranaroma.jpg",
        category: "pro",
    },
    {
        id: 94,
        namepro: "قهوه آجری آنتیبوتیکا عربیکا",
        pricepro: 0,
        explain: "قهوه  آجری آنتیبوتیکا عربیکا 250 گرم مخصوص موکاپات  ",
        pic: "ghahveajorianticabotegarabica.jpg",
        category: "pro",
    },
];

let id;
let cart = [];
let sumCart = 0;
/////////////////////////////////////////////////////////////
s = document.querySelectorAll("section");
document.onclick = function (e) {
    if (e.target.dataset.type === "category") {
        for (i = 0; i < s.length; i++)
            s[i].style['display'] = "none";
        document.getElementById(e.target.dataset.filter).style.display = "block";
    }

}

// Get the modal for order
let modal = document.getElementById("myModal");
let span = document.getElementsByClassName("close")[0];
// When the user clicks the button, open the modal

function orderlist(obj) {
    id = $(obj).attr('id');
    let namepro = document.getElementById("namepro");
    let pricepro = document.getElementById("pricepro");
    let explain = document.getElementById("explain");
    let pic = document.getElementById("ModualPic");
    namepro.innerHTML = products.find(item => item.id == obj.id).namepro;
    pricepro.innerHTML = products.find(item => item.id == obj.id).pricepro;
    explain.innerHTML = products.find(item => item.id == obj.id).explain;
    pic.src = "images/" + products.find(item => item.id == obj.id).pic;
}
try {
    modal.style.webkittransition = 'translateX(35%) 2s ease-in-out';
    modal.style.MozTransform = 'translateX(35%) 2s ease-in-out';
    modal.style.msTransform = 'translateX(35%) 2s ease-in-out';
    modal.style.OTransform = 'translateX(35%) 2s ease-in-out';
    modal.style.transform = 'translateX(35%) 2s ease-in-out';

    

} catch (ex) { }

///////////basket list//////////////////////




cartButtonEvent();
submitButtonClick();
deleteAllCart();


function deleteAllCart(){
    $('.delete').on('click', ()=>{
        cart = [];
        renderCart();
    });
}



function cartButtonEvent(){
    $('#bag').on('click',renderCart)
}


function renderCart(){
    console.log(cart);
    let template = cart.map(function(id){
        let product = products.find ((pro)=> {return pro.id === id})
        sumCart += product.pricepro;
        return `
            <div class="row" style="background-color:#ccc;align-items:center;border-bottom:1px solid #000;padding:5px;">
                <div class="col-md-4 col-sm-4 col-xs-4">
                    <span><img src="images/${product.pic}" class="b1"></span>
                </div>
                <div class="col-md-8 col-sm-8 col-xs-8">
                    <span class="b2" style="color:#000;"><p class="nameofpro">${product.namepro}</p></span>
                    <span id="plus">+</span>
                    <span id="num">1</span>
                    <span id="minus">-</span>
                    <div class="b3">
                        <p class="priceofpro" style="color:#000;">${product.pricepro} تومان</p>
                        <button onclick="deleteFromCart(${product.id})" type="button" class="btn btn-warning btn-lg">delete</button>
                    </div>
                </div>
            </div>`;
    }).join("");
    $('.listbasket').html(template);
    $('#priceBasket').html(sumCart + "تومان");
    sumCart = 0;
}

function deleteFromCart(id){
    cart.splice(cart. indexOf(id),1);
    renderCart();
}

function submitButtonClick(){
    $('#submit').on('click', function(){
        cart.push(+id);
        id = '';
    });
}

function AddCounter() {
    let count = +num.textContent;
    count++;
    num.textContent = count;
}
function minCounter() {
    let count = +num.textContent;
    count--;
    num.textContent = count;
}

plus.onclick = AddCounter;
minus.onclick = minCounter;
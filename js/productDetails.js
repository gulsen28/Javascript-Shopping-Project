$(document).ready(function () {
    const cProduct = localStorage.getItem("clickProduct");
    let htmlProduct = ``
    const url = "https://www.jsonbulut.com/json/product.php";
    const obj = {
        ref: "e378edf0229ff6305cfb7c2606207f1d",
        start: "0"
    }
    $.ajax({
        type: "get",
        url: url,
        data: obj,
        dataType: "json",
        success: function (response) {
            const values = response.Products[0].bilgiler;
            for (i = 0; i < values.length; i++) {
                if (cProduct == values[i].productId) {
                    if(values[i].images[0].normal=="" || values[i].images[0].normal==null){
                        htmlProduct = `
            <div class="row">
            <div class="col-sm-12 col-lg-6">
                <img src="img/noimage.jpg" class="img-fluid mt-5 productImage" alt="image" id="pImage">
                <img src="img/noimage.jpg" alt="..." class="img-thumbnail tproductImage">
            </div>
            <div class="col-sm-12 col-lg-6">
                <h1 class="baslik mb-3">${values[i].productName}</h1>
                <p class="lead">
                    ${values[i].description}
                </p>
                <h5 class="mb-3">Color: Blue</h5>
                <img src="img/noimage.jpg" alt="..." class="img-thumbnail tproductImage">
                <img src="img/noimage.jpg" alt="..." class="img-thumbnail tproductImage"><br>
                <button class="btn btn-warning">34</button>
                <button class="btn btn-warning">35</button>
                <button class="btn btn-warning">36</button>
                <button class="btn btn-warning">37</button>
                <button class="btn btn-warning">38</button>
                <button class="btn btn-warning">39</button>
                <button class="btn btn-warning">40</button>
                <h5>Sale Information:</h5>
                <div class="pr">
                    <p id="price">${values[i].price} $</p>
                </div>
                
                <select class="form" aria-label="Default select example">
                    <option selected value="0">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </select><button class="btn btn-dark mb-3 form" onclick="fncBasket(${values[i].productId})">Add To Card</button>
                  
                  
                
                <br/>
                <span class="share">Share:</span>
                <div class="icon">
                <img src="img/instagram.png" alt="" srcset="" width="40px"><img src="img/facebook.png" alt="" srcset="" width="40px"><img src="img/pinterst.png" alt="" srcset="" width="40px">
            </div>
            </div>
        </div>
            `
                    }
                    else{
                        htmlProduct = `
            <div class="row">
            <div class="col-sm-12 col-lg-6">
                <img src="${values[i].images[0].normal}" class="img-fluid mt-5 productImage" alt="image" id="pImage">
                <img src="${values[i].images[0].normal}" alt="..." class="img-thumbnail tproductImage">
            </div>
            <div class="col-sm-12 col-lg-6">
                <h1 class="baslik mb-3">${values[i].productName}</h1>
                <p class="lead">
                    ${values[i].description}
                </p>
                <h5 class="mb-3">Color: Blue</h5>
                <img src="${values[i].images[0].normal}" alt="..." class="img-thumbnail tproductImage">
                <img src="${values[i].images[0].normal}" alt="..." class="img-thumbnail tproductImage"><br>
                <button class="btn btn-warning">34</button>
                <button class="btn btn-warning">35</button>
                <button class="btn btn-warning">36</button>
                <button class="btn btn-warning">37</button>
                <button class="btn btn-warning">38</button>
                <button class="btn btn-warning">39</button>
                <button class="btn btn-warning">40</button>
                <h5>Sale Information:</h5>
                <div class="pr">
                    <p id="price">${values[i].price} $</p>
                </div>
                
                <select class="form" aria-label="Default select example">
                    <option selected value="0">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </select><button class="btn btn-dark mb-3 form" onclick="fncBasket(${values[i].productId})">Add To Card</button>
                  
                  
                
                <br/>
                <span class="share">Share:</span>
                <div class="icon">
                <img src="img/instagram.png" alt="" srcset="" width="40px"><img src="img/facebook.png" alt="" srcset="" width="40px"><img src="img/pinterst.png" alt="" srcset="" width="40px">
            </div>
            </div>
        </div>
            `
                    }
                    
                }
            }

            $(".productDetail").html(htmlProduct)
        }
    });
    
});
function fncBasket(id) {
    const userInfo = localStorage.getItem("userLogInInfo");
    const userInf = sessionStorage.getItem("user");
    if (userInfo == null && userInf == null) {
        alert("Lütfen Giriş Yapınız..")
        window.location.href = "login.html"
    }
    else {
        
            const urlBasket="https://www.jsonbulut.com/json/orderForm.php";
        const DataBasket={
            ref:"e378edf0229ff6305cfb7c2606207f1d",
            customerId:JSON.parse(userInf).userId,
            productId:localStorage.getItem("clickProduct"),
            html:12
        }
        $.ajax({
            type: "get",
            url: urlBasket,
            data: DataBasket,
            dataType: "json",
            success: function (response) {
                if(response.order[0].durum==true){
                    window.location.href="basket.html"
                }
                else{
                    alert(response.order[0].mesaj)
                }
            }
        });
        localStorage.removeItem("clickProduct")
       
    }
}
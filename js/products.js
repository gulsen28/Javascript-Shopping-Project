$(document).ready(function () {
    const urlProducts = "https://www.jsonbulut.com/json/product.php";
    const dataProducts = {
      ref: "e378edf0229ff6305cfb7c2606207f1d",
      start: 0,
      count:30
    }
    $.ajax({
      type: "get",
      url: urlProducts,
      data: dataProducts,
      dataType: "json",
      success: function (response) {
        let productHtml = ``;
        const product = response.Products[0].bilgiler;
        
        for (let i = 0; i < product.length; i++) {
          if(product[i].image==true){
            productHtml += `<div class="col-lg-3 col-md-3 col-sm-6 mt-4 mb-3 col-12">
                      <div class="product">
                      
                        <img src="${product[i].images[0].normal}" onclick=fncProduct(${product[i].productId}) class="img-fluid mb-1 imgP" >
                      </div>
                      
                      <h5>${product[i].productName}</h5>
                      <span>${product[i].price} $</span>
                      <div class="sep mt-3">
                        <a href="#" class="list-group-item list-group-item-action" id="addSepet" onclick="fncBasket(${product[i].productId})">Add To Basket</a>
                      </div>
              
              
                    </div>`;
          }
          else{
            productHtml += `<div class="col-lg-3 col-md-3 col-sm-6 mt-4 mb-3 col-12">
                      <div class="product">
                      
                        <img src="img/noimage.jpg" onclick=fncProduct(${product[i].productId}) class="img-fluid mb-1 imgP" >
                      </div>
                      
                      <h5>${product[i].productName}</h5>
                      <span>${product[i].price} $</span>
                      <div class="sep mt-3">
                        <a href="#" class="list-group-item list-group-item-action" id="addSepet" onclick="fncBasket(${product[i].productId})">Add To Basket</a>
                      </div>
              
              
                    </div>`;
          }
        }
        
        
        const figure = `<figure class="text-center mt-4">
              <blockquote class="blockquote">
                <hr />
                <p>PRODUCTS</p>
              </blockquote>
              <figcaption class="blockquote-footer">
                <cite title="Source Title">The freshest and most exciting news about fashion </cite>
                <hr />
              </figcaption>
            </figure>`;
        $(".figure").html(figure)
        $("#allProducts").html(productHtml)
  
  
      }
    });
  });
  function fncProduct(val) {
    localStorage.setItem("clickProduct", val);
    window.location.href = "productDetails.html"
  
  }
  function fncBasket(id) {
    
    const userInfo = localStorage.getItem("userLogInInfo");
    const userInf = sessionStorage.getItem("user");
    if (userInfo == null && userInf == null) {
      localStorage.setItem("clickProduct",id);
      alert("Lütfen Giriş Yapınız..")
      window.location.href = "login.html"
    }
    else {
      
        const urlBasket = "https://www.jsonbulut.com/json/orderForm.php";
        const DataBasket = {
          ref: "e378edf0229ff6305cfb7c2606207f1d",
          customerId: JSON.parse(userInf).userId,
          productId: id,
          html: 12
        }
        $.ajax({
          type: "get",
          url: urlBasket,
          data: DataBasket,
          dataType: "json",
          success: function (response) {
            if (response.order[0].durum == true) {
              window.location.href="basket.html"
            }
            else {
              alert(response.order[0].mesaj)
            }
          }
        });
        localStorage.removeItem("clickProduct")
  
    }
  }
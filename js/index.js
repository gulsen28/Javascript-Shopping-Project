
$(document).ready(function () {
    const url="https://www.jsonbulut.com/json/companyCategory.php";
    const obj={
        ref:"e378edf0229ff6305cfb7c2606207f1d",
    };
    
    let i=0;
    $.ajax({
        type: "get",
        url: url,
        data: obj,
        dataType: "json",
        success: function (response) {
          const categories=response.Kategoriler[0].Categories
          let html=``;
          let altHtml="";
          for(let i=0;i<categories.length;i++){
              if(categories[i].TopCatogryId==0){
                  //console.log(`categories[i]`, categories[i])
                  for(let x=0;x<categories.length;x++){
                      if(categories[x].TopCatogryId==categories[i].CatogryId){
                          altHtml+=`<a href="#" id="${categories[x].CatogryId}" onclick="fncCategoriesProduct(${categories[x].CatogryId})">${categories[x].CatogryName}</a><br>`
                          //console.log(x,altHtml)
                      }
                  }
                  
                  html+=`
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="${"h"+categories[i].CatogryId}">
                      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#${"cat"+categories[i].CatogryId}" aria-expanded="true" aria-controls="${"cat"+categories[i].CatogryId}">
                        ${categories[i].CatogryName}
                      </button>
                    </h2>
                    <div id="${"cat"+categories[i].CatogryId}" class="accordion-collapse collapse" aria-labelledby="${"h"+categories[i].CatogryId}" data-bs-parent="#accordionExample">
                      <div class="accordion-body">
                      <strong><a href="#" id="${categories[i].CatogryId}" onclick="fncCategoriesProduct(${categories[i].CatogryId})">${categories[i].CatogryName}</a><br/></strong>
                        <strong>${altHtml}</strong>
                      </div>
                    </div>
                  </div>
                  `
                  altHtml=``;
              }
              
          }
          $(".accordion").html(html);
      }
    });
    
    
   
    const toggle=$(".toggle");
    const sideMenu=$(".accordion");
    const search=$("#searchMobil");
    
    $(window).resize(function () { 
      const w=$(window).width();
      if(w<1230){
        search.show();
        sideMenu.hide();
        toggle.show();
      }
      else{
        sideMenu.show();
        toggle.hide();
        search.hide();
      }
    })
  
    toggle.click(function(){
      
      sideMenu.slideToggle(1000);
    })

    //reklam
    const add=$("#reklam");
    const urlR="https://www.jsonbulut.com/json/advertisement.php";
    const objR={
      ref:"e378edf0229ff6305cfb7c2606207f1d",
      advertisementId:31
    }
    $.ajax({
      type: "get",
      url: urlR,
      data: objR,
      dataType: "json",
      success: function (response) {
        let addHtml=``;
        const day=new Date();
        
        const startDate=new Date(response.reklam[0].reklam.tarih_baslangic);
        const finishDate=new Date(response.reklam[0].reklam.tarih_bitis);
       
        if(startDate<=day && day<=finishDate){
          if(response.reklam[0].reklam.dosya==null ||response.reklam[0].reklam.dosya==""){
            addHtml+=`<a href="${response.reklam[0].reklam.href}" target="_blank"><img src="img/noimage.jpg" class="img-fluid reklami" alt="${response.reklam[0].reklam.adi}"></a>`;
          add.html(addHtml);
          }
          else{
          addHtml+=`<a href="${response.reklam[0].reklam.href}" target="_blank"><img src="${response.reklam[0].reklam.dosya}" class="img-fluid reklami" alt="${response.reklam[0].reklam.adi}"></a>`;
          add.html(addHtml);
        }
        }
        else{
          addHtml+=`<a href="https://www.google.com/" target="_blank"><img src="img/300x300.jpg" class="img-fluid reklami" alt="SaatSaat"></a>`;
          add.html(addHtml);
        }
      }
    });

    //6 ürün
    const topP=$("#topProduct");
    
    const urlProduct="https://www.jsonbulut.com/json/product.php";
    const data={
        ref:"e378edf0229ff6305cfb7c2606207f1d",
        start:0,
        count:8,
        order:"desc"

    }
    $.ajax({
        type: "get",
        url: urlProduct,
        data: data,
        dataType: "json",
        success: function (response) {
          let productHtml=``;
            const product=response.Products[0].bilgiler;
            for(let i=0;i<product.length;i++){
             if(product[i].images[0].normal=="" ||product[i].images[0].normal==null){
              productHtml+=`<div class="col-lg-3 col-md-3 col-sm-6 mt-4 mb-3 col-12">
              <div class="product">
                <img src="img/noimage.jpg" onclick=fncProducts(${product[i].productId}) class="img-fluid mb-1 imgP" >
              </div>
              <h5>${product[i].productName}</h5>
              <span>${product[i].price} $</span>
              <div class="sep mt-3">
                <a href="#" class="list-group-item list-group-item-action" id="addSepet" onclick=fncBasket(${product[i].productId})>Add To Basket</a>
              </div>
      
      
            </div>`;
             }
             else{
              productHtml+=`<div class="col-lg-3 col-md-3 col-sm-6 mt-4 mb-3 col-12">
              <div class="product">
                <img src="${product[i].images[0].normal}" onclick=fncProducts(${product[i].productId}) class="img-fluid mb-1 imgP" >
              </div>
              <h5>${product[i].productName}</h5>
              <span>${product[i].price} $</span>
              <div class="sep mt-3">
                <a href="#" class="list-group-item list-group-item-action" id="addSepet" onclick=fncBasket(${product[i].productId})>Add To Basket</a>
              </div>
      
      
            </div>`;
             }
               
            }
            topP.html(productHtml);
        }
    });
    
   

});


function fncCategoriesProduct(id){
  sessionStorage.setItem("categoryProduct",id);
  window.location.href="product.html"
}

function fncProducts(val){
  localStorage.setItem("clickProduct",val);
  window.location.href="productDetails.html"

}
function fncBasket(id) {
  console.log(`id`, id)
  const userInfo = localStorage.getItem("userLogInInfo");
  const userInf = sessionStorage.getItem("user");
  if (userInfo == null && userInf == null) {
    localStorage.setItem("clickProduct",id);
      alert("Lütfen Giriş Yapınız..")
      window.location.href = "login.html"
  }
  else {
      
          const urlBasket="https://www.jsonbulut.com/json/orderForm.php";
      const DataBasket={
          ref:"e378edf0229ff6305cfb7c2606207f1d",
          customerId:JSON.parse(userInf).userId,
          productId:id,
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
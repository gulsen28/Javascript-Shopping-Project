
$(document).ready(function () {
    
        const userProduct = JSON.parse(sessionStorage.getItem("user"));
        if (userProduct == null) {
            $(".sepetProduct").html(`<div class="row mt-3 mb-3">
        <img src="img/empty.jpg" class="img-fluid mb-1" alt=""/>
        </div>`);
        } else {
            const url = "https://www.jsonbulut.com/json/orderList.php?";
            const obj = {
                ref: "e378edf0229ff6305cfb7c2606207f1d",
                musterilerID: userProduct.userId
            }
            $.ajax({
                type: "get",
                url: url,
                cache:false,
                data: obj,
                dataType: "json",
                success: function (response) {
                    const valBasket = response.orderList[0];
                    let htmlBasket = ``;

                    for (let i = 0; i < valBasket.length; i++) {

                        htmlBasket += `<div class="row mt-4 ">
                        
                        <div class="col-lg-5 mt-3 col-12">
                        <img src="https://www.jsonbulut.com/admin/resim/server/php/files/${valBasket[i].urun_id}/${valBasket[i].adi}" class="img-fluid mb-1" alt="" style="width:200px ; border-radius:20px" />
                    
                    </div>
                    <div class="col-lg-5 col-12 mt-3">
                        <h3>${valBasket[i].urun_adi}</h3>
                        <p>${valBasket[i].aciklama}</p>
                        <span>${valBasket[i].fiyat} $</span>
                        <br />
                    
                    </div>
                    </div>`
                    }
                    $(".sepetProduct").html(htmlBasket);
                    $(".onaylaButon").html(`<div class="col-lg-2 col-12 mt-3"></div>
                <div class="col-lg-8 col-12">
                <button class="btn form-control" onclick="fncClick()">ONAYLA</button>
                </div>
                <div class="col-lg-2 col-12"></div>`);




                }
            });
        }
        

    
    



});
function fncClick(){
    $(".result").html(`<div class="alert alert-success" role="alert">
    Siparişiniz Tamamlandı!
  </div>`)
  $(".sepetProduct").html("");
  $(".onaylaButon").html("")
}
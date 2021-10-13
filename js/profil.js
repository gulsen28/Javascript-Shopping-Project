$(document).ready(function () {
    const userInfo=localStorage.getItem("userLogInInfo")
   
    if(userInfo!=null){
        sessionStorage.setItem("user",userInfo)
    }
    const userInf=sessionStorage.getItem("user");
    if(userInf==null){
        
        window.location.href="login.html"
        
    }
   
    $(".name").html(JSON.parse(userInf).userName+" "+JSON.parse(userInf).userSurname);
    $(".email").html(JSON.parse(userInf).userEmail)
    $(".phone").html(JSON.parse(userInf).userPhone)


    const urlInfo="https://www.jsonbulut.com/json/orderList.php";
    const objInfo={
        ref:"e378edf0229ff6305cfb7c2606207f1d",
        musterilerID:JSON.parse(userInf).userId
        }
    
    $.ajax({
        type: "get",
        url: urlInfo,
        data: objInfo,
        cache:false,
        dataType: "json",
        success: function (response) {
            const userOrder=response.orderList[0];
            let orderHtml=``;
            for(let i=0;i<response.orderList[0].length;i++){
                orderHtml+=`
                <tr>
                <td>${userOrder[i].eklenme_tarihi}</td>
                <td><img src="${userOrder[i].normal}" width="100px"></td>
                <td>${userOrder[i].urun_adi}</td>
                <td>${userOrder[i].fiyat} $</td>
            </tr>
                `
            }
            $("#siparisler").html(orderHtml);
        }
    }); 

});

function fncClick() { 
    localStorage.removeItem("userLogInInfo");
    sessionStorage.removeItem("user");
    localStorage.removeItem("clickProduct")
    window.location.href="login.html"
 }

 function fncUpdate(){
     window.location.href="updateInfo.html"
}
 

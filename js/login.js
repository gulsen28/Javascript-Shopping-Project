$(document).ready(function () {
  
    
    $('#loginForm').submit(function(e) {
        e.preventDefault();
        const email = $("#email").val()
        const password = $("#password").val()

        const url1 = "https://www.jsonbulut.com/json/userLogin.php"

        const obj = {
            ref: "e378edf0229ff6305cfb7c2606207f1d",
            userEmail: email,
            userPass: password,
            face: "no"
        }

        $.ajax({
            type: "get",
            url: url1,
            data: obj,
            dataType: "json",
            success: function(res) {
                const item=res.user[0];
                const status1 = res.user[0].durum
                const message1 = res.user[0].mesaj
                if (status1 == true) {
                    console.log(`response`, res)
                    if($("#exampleCheck1").is(':checked')){
                        
                        localStorage.setItem("userLogInInfo",JSON.stringify(item.bilgiler));
                        
                    }
                    
                    //session create
                   sessionStorage.setItem("user",JSON.stringify(item.bilgiler));
                   if(localStorage.getItem("clickProduct")==null) {
                    window.location.href="index.html";
                } 
                else{
                    window.location.href="productDetails.html"
                }
                    

                } else {
                    alert(message1)
                }
            }
        });


    });





    

});
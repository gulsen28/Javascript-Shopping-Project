$(document).ready(function () {


    $("#registerForm").submit(function (e) {
        e.preventDefault();
        const name = $("#userName").val();
        const surname = $("#userSurname").val();
        const phone = $("#userPhone").val();
        const email = $("#email").val();
        const password = $("#password").val();
        if(name==null && surname==null && phone==null &&email==null&&password==null){
            alert("Tüm Bilgileri Eksiksiz Giriniz..")
        }
        else{
            const name = $("#userName").val();
        const surname = $("#userSurname").val();
        const phone = $("#userPhone").val();
        const email = $("#email").val();
        const password = $("#password").val();
            const pushObj = {

    
                ref: "e378edf0229ff6305cfb7c2606207f1d",
                userName: name,
                userSurname: surname,
                userPhone: phone,
                userMail: email,
                userPass: password
            }
            if(phone.length==10)
            {
                const url = "https://www.jsonbulut.com/json/userRegister.php";
            $.ajax({
                type: "get",
                url: url,
                data: pushObj,
                dataType: "json",
                success: function (res) {
                    const status=res.user[0].durum;
                    const message=res.user[0].mesaj;
                    //console.log(`response`, res)
                    if(status==true && localStorage.getItem("clickProduct")==null){
                        window.location.href="login.html";
                    }else{
                        window.location.href="login.html";
                    }
                }
            });
            }
            else{
                alert("Telefon Numarası 10 haneli olmalıdır.")
            }
            
        }
    
        
    });

    
});

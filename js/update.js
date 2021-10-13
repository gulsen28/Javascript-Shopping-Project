$(document).ready(function () {
    const userr=JSON.parse(sessionStorage.getItem("user"));
    $("#userName").val(userr.userName)
    $("#userSurname").val(userr.userSurname);
    $("#userPhone").val(userr.userPhone);
    $("#email").val(userr.userEmail);
    $("#updateForm").submit(function (e) {
        e.preventDefault();
        const name = $("#userName").val();
        const surname = $("#userSurname").val();
        const phone = $("#userPhone").val();
        const email = $("#email").val();
        const password = $("#password").val();

        const info=[name,surname,phone,email,password]
        let num=0;
        for(i=0;i<info.length;i++){
            if(info[i]==null || info[i]==""){
                num++
            }

        }
        if(num==0){
            const updateObj = {
    
                ref: "e378edf0229ff6305cfb7c2606207f1d",
                userName: name,
                userSurname: surname,
                userMail: email,
                userPhone: phone,
                userPass: password,
                userId:JSON.parse(sessionStorage.getItem("user")).userId
            }
    
            const urlUpdate = "https://www.jsonbulut.com/json/userSettings.php";
            $.ajax({
                type: "get",
                url: urlUpdate,
                data: updateObj,
                dataType: "json",
                success: function (res) {
                    if(res.user[0].durum==true){
                    $("#result").html(`
                    <div class="alert alert-success" role="alert">
                    Güncelleme İşlemi Tamamlandı!
                  </div>
                    `)
                }
                   sessionStorage.removeItem("user")
                   localStorage.removeItem("userLogInInfo")
                }
            });
        }
        else{
            $("#result").html(`
            <div class="alert alert-danger" role="alert">
            Lütfen Bilgileri Eksiksiz Giriniz!
          </div>
            `)
        }
    
       
    });

    
});

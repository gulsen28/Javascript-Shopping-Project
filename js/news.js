$(document).ready(function () {
    const urlNew = "https://www.jsonbulut.com/json/news.php";
    const objNew = {
        ref: "e378edf0229ff6305cfb7c2606207f1d",
        start: 0
    }
    $.ajax({
        type: "get",
        url: urlNew,
        data: objNew,
        dataType: "json",
        success: function (response) {
            const valueNew = response.News[0].Haber_Bilgileri;
            let htmlNew = "";
            if (response.News[0].durum == true) {
                for (let i = 0; i < response.News[0].Haber_Bilgileri.length; i++) {
                    htmlNew += `
                    <div class="col-sm-4">
                    <div class="card">
                    <div class="divimg"><img src="${valueNew[i].picture}" class="card-img-top" alt="..."></div>
                    <div class="card-body">
                    <h5 class="card-title">${valueNew[i].title}</h5>
                    <div>
                    <span>${valueNew[i].date_time}</span>
                    </div>
                    <p class="card-text">${valueNew[i].l_description}</p>
                    <a href="#" class="btn send">Go somewhere</a>
                    </div>
                    </div>
                    </div>
                    `;
                }
            }
            $(".news").html(htmlNew)
            
        }
    });
});
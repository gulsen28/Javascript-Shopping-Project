$(document).ready(function () {
  //navbar
  const menu=["Anasayfa","Ürünler","Haberler","İletişim","Kayıt Ol"]
  const menuUrl=["index.html","products.html","news.html","contact.html","register.html"]
    let element=`<nav class="navbar mb-3 navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="index.html"><img src="img/logo.jpg" class="img-fluid" alt="..."></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">`;
    for(let i=0;i<menu.length;i++){
      element+=`<li class="nav-item">
      <a class="nav-link" href="${menuUrl[i]}">${menu[i]}</a>
    </li>`;
    
    }
    element+=`</ul>
    <a href="${fncReturn()}"><i class="bi bi-box-arrow-in-right"></i></a>
  <a href="basket.html"><i class="bi bi-cart-dash"></i></a>
    <a href="#"><i class="bi bi-suit-heart"></i></a>
    <a href="profil.html"><i class="bi bi-person-circle"></i></a>

  </div>
</div>
</nav>`;
    $(".sharedNavbar").html(element)
    $(".sharedSearch").html(`<div class="col-sm-2 col-md-4 col-2">
    <button class="btn btn-warning toggle "><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-menu-down" viewBox="0 0 16 16">
      <path d="M7.646.146a.5.5 0 0 1 .708 0L10.207 2H14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h3.793L7.646.146zM1 7v3h14V7H1zm14-1V4a1 1 0 0 0-1-1h-3.793a1 1 0 0 1-.707-.293L8 1.207l-1.5 1.5A1 1 0 0 1 5.793 3H2a1 1 0 0 0-1 1v2h14zm0 5H1v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2zM2 4.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1h-8a.5.5 0 0 1-.5-.5zm0 4a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0 4a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z"/>
    </svg></button>
  </div>
  <div class="col-sm-10 col-md-8 col-10" id="searchMobil">
    <form class="d-flex">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>`)

  //footer
  const information=["About Us","Contact Us","Terms & Conditions","Returns & Exchanges","Shipping & Delivery","Privacy Policy"];
  const useful=["Home","Latest News","My Account","Size Guide","FAQs"];
  let infoHtml=`<a href="#" class="list-group-item list-group-item-action" aria-current="true">
  <h6 class="mt-5">INFORMATION</h6>
</a>`;
let usefulHtml=`
<a href="#" class="list-group-item list-group-item-action" aria-current="true">
              <h6 class="mt-5">USEFUL LINKS</h6>
            </a>`;
  for(let i=0;i<information.length;i++){
    infoHtml+=`<a href="#" class="list-group-item list-group-item-action">${information[i]}</a>`;
  }
  for(let i=0;i<useful.length;i++){
    usefulHtml+=`<a href="#" class="list-group-item list-group-item-action">${useful[i]}</a>`;
  }
  
  $("footer").html(`
  <div class="row">
        <div class="col-xl-3 col-lg-6 col-md-6">
          <div class="logo">
            <img src="img/logo.jpg" class="img-fluid" alt="...">
          </div>
          <p><i class="bi bi-geo-alt icon"></i>&nbsp; :&nbsp;184 Main Rd E, St Albans
            VIC 3021, Australia</p>
          <p><i class="bi bi-envelope-open icon"></i>&nbsp;:&nbsp;gulsen.sengunau@gmail.com</p>
          <p><i class="bi bi-telephone icon"></i>&nbsp;:&nbsp;+90 536 888 88 88</p>
          <p><i class="bi bi-facebook"></i>&nbsp;<i class="bi bi-twitter"></i>&nbsp;<i class="bi bi-instagram"></i>&nbsp;<i class="bi bi-youtube"></i></p>
        </div>
        <div class="col-xl-3 col-lg-6 mt-3 col-md-6"  >
          <div class="list-group">
            
            ${infoHtml}
            
          </div>
        </div>
        <div class="col-xl-3 col-lg-6 mt-3 col-md-6"  >
          <div class="list-group">
            
            ${usefulHtml}
            
          </div>
        </div>
        <div class="col-xl-3 col-lg-6 mt-3 col-md-6">
          <div class="row mt-5">
            <div class="col-9 "><input class="form-control" placeholder="Your e-mail adress"></div>
            <div class="col-3"><button class="btn send">Send</div>
              <div class="card mt-3">
                <div class="card-body mb-3">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, repellendus.</p>
                </div>
              </div>
              
          </div>
        </div>

      </div>
  `);

});
function fncReturn(){
  if(sessionStorage.getItem("user")==null){
    return "login.html"
  }
  else{
    return "profil.html";
  }
}
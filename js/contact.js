$(document).ready(function () {
    const sub=$("#submit");
    sub.click(function(){
        const name=$("#name").val();
    const email=$("#mail").val();
    const konu=$("#konu").val();
    const message=$("#message").val();
    let htmlContact=``;
    let num=0;
    const objContact=[name,email,konu,message]
        for(i=0;i<objContact.length;i++){
            if(objContact[i]!=null && objContact[i]!=""){
                num++;
            }
            
        }
        if(num==4){
            htmlContact+=`<div class="alert alert-success" role="alert">
            <h4 class="alert-heading">Well done!</h4>
            
          </div>`
        }
        else{
            htmlContact+=`<div class="alert alert-danger" role="alert">
            <h4 class="alert-heading">Enter All Information!</h4>
            
          </div>`
        }
        $(".alertContainer").html(htmlContact);
    }

    );
    
});
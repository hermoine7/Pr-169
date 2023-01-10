AFRAME.registerComponent("handle-buttons", {
    init: function(){
        this.el.addEventListener("markerFound", ()=>{
            this.markerFound()
        })
        this.el.addEventListener("markerLost", ()=>{
            this.markerLost()            
        })
    },
    
    markerFound: function(){
        var button= document.getElementById("button-div")
        button.style.display = "flex"

        var order= document.getElementById("order-button")
        var rating=document.getElementById("order-summary-button")

        order.addEventListener("click", ()=>{
            swal("Yay!", "Your order is registered!", "success");
        })
        rating.addEventListener("click", ()=>{
            swal({
                title: "Cart",
                text: "Work in devlepment",
                icon: "https://cdn-icons-png.flaticon.com/512/4909/4909732.png",
              });
        })

    },
    markerLost: function(){
        var button= document.getElementById("button-div")
        button.style.display = "none"
    },
  });
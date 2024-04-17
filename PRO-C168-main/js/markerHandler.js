AFRAME.registerComponent("markerHandler", {
    init: async function () {
        this.el.addEventListener("markerFound",()=>{
            this.handleMarkerFound();
        })
        this.el.addEventListener("markerLost",()=>{
            this.handleMarkerLost();
        })
     },
     handleMarkerLost:function(){
        var div=document.getElementById("button-div")
        div.style.display="none";
     },
     handleMarkerFound:function(){
        var div=document.getElementById("button-div")
        div.style.display="flex";
        var rating=document.getElementById("rating-button")
        var order=document.getElementById("order-button")
        rating.addEventListener("click",()=>{
            swal({
                icon:"warning",
                title:"rate-dish",
                text:"work in progress"
            })
        })
        order.addEventListener("click",()=>{
            swal({
                icon:"warning",
                title:"order-dish",
                text:"thanks for ordering"
            })
        })
     },
})
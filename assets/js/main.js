//alert();
//console.log("job");

let blocks = document.getElementsByClassName("block");
document.addEventListener('keydown', function(){
    if (event.keyCode == 13){
    blocks[2].style.zIndex = 3;
    blocks[0].style.zIndex = 4;
    blocks[1].style.zIndex = 5;
    blocks[3].style.zIndex = 2;
    blocks[4].style.zIndex = 1;
    draw();
    }

    
});

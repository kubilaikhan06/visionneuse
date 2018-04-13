var index = 1;
var x = document.getElementsByClassName('slides');

show(1);

function show(n){    
    
    if (n > x.length){index = 1};
    if (n<1){index = x.length};
    for(i=0; i<x.length; i++)
        {
            x[i].style.display = "none";
        }
    x[index-1].style.display = "block";
}

function plusIndex(n){
    index +=n;
    show(index);
}

autoSlide();
function autoSlide(){
    for(i=0; i<x.length; i++)
        {
            x[i].style.display = "none";
        }
    if (index > x.length){ index = 1};
    x[index-1].style.display = "block";
    index++;
    setTimeout(autoSlide,2000);
}
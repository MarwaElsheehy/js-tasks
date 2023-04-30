let imgs = document.querySelectorAll(".card");

imgs.forEach((ele) => {
    ele.addEventListener('click', ()=>{
        removeClass();
        ele.classList.add('active');
    });

});
function removeClass(){
    imgs.forEach(e => {
        e.classList.remove('active');
    });
}
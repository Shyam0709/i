function sempr(){
    var ext=parseFloat(document.getElementById('ext').value);
    var int=parseFloat(document.getElementById('int').value);
    var sum=document.querySelector('.sum');
    var total=(ext*0.6)+int;
    sum.innerText="Predicted Marks : "+total;
}
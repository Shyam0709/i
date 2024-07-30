function calci(){
    var mm1=parseFloat(document.getElementById('mm1').value);
    var mm2=parseFloat(document.getElementById('mm2').value);
    var mm3=parseFloat(document.getElementById('mm3').value);
    var bro=parseFloat(document.getElementById('bro').value);
    var cdu=parseFloat(document.getElementById('cdu').value);
    var cal=document.querySelector('.cal');
    var ans=document.querySelector('.ans');
    if(mc.checked){
        var t=1.5;
    }
    else{
        var t=1;
    }
    var m12=((mm1+mm2)*0.15*t)/2;
    if (m12>=15){
        var mm12=15;
    }
    else{
        var mm12=m12;
    }
    var m3=(mm3*0.15*t);
    if (m3>=15){
        var mm33=15;
    }
    else{
        var mm33=m3;
    }
    if (bro==50){
        var br=5;
    }
    else if(bro>30 && bro<=49){
        var br=4;
    }
    else if(bro>20 && bro<=30){
        var br=3;
    }
    else if(bro>10 && bro<=20){
        var br=2;
    }
    else if(bro>0 && bro<=10){
        var br=1;
    }
    else{
        var br=0;
    }
    if (cdu==30){
        var cd=5;
    }
    else if(cdu>20 && cdu<=29){
        var cd=4;
    }
    else if(cdu>15 && cdu<=20){
        var cd=3;
    }
    else if(cdu>10 && cdu<=15){
        var cd=2;
    }
    else if(cdu>0 && cdu<=10){
        var cd=1;
    }
    else{
        var cd=0;
    }
    var s=mm1+mm2+mm3;
    if(s>=100){
        var t=(br+cd);
    }
    else if(s<100){
        var t=(br+cd)-1;
    }
    else if(s<90){
        var t=(br+cd)-2;
    }
    else if(s<80){
        var t=(br+cd)-3;
    }
    else if(s<70){
        var t=(br+cd)-4;
    }
    else if(s<50){
        var t=(br+cd)-5;
    }
    else if(s<40){
        var t=(br+cd)-6;
    }
    else if(s<30){
        var t=(br+cd)-7;
    }
    else if(s<20){
        var t=(br+cd)-8;
    }
    else if(s<10){
        var t=(br+cd)-9;
    }
    else{
        var t=0;
    }
    var sum=mm12+mm33+t;


    cal.innerText="Result: "+sum;
    if(sum>=23){
        ans.innerText="You have to score 45 in Semester to pass "
    }
    if(sum<23){
        var m=(50-sum)/0.6;
        ans.innerText="you have to score "+Math.round(m)+" in Semester to pass "
    }
}
console.log('r/place');
var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var platform=canvas.getContext('2d');
var me=canvas.getContext('2d');

var ctx = canvas.getContext("2d");

var snd = new Audio("Kalimba.mp3"); // buffers automatically when created
snd.play();

//alap
var dbhely=965;
var dbmagassag=885;
var array=[];
var ellenorzes=[];
var pontszam=0;
var i;
var platformpositioning=900;
var platformhight=900;
var megvar=0;
var plusz=0;
var elso=1;

//first szelesseg
//second magassag
szamol();
function szamol(){
    ctx.font = "30px Arial";
    ctx.fillText(pontszam, 950, 50);
}

/*function refresh(){
        dbhely=965;
    dbmagassag=885;
    pontszam=0;
    platformpositioning=900;
    platformhight=900;
    me.clearRect(0,0,2000, 2000);
    platform.clearRect(0,0,2000, 2000);
    for(i=pontszam;i<=pontszam+15;i++){
        array[i]=0;
    }
}*/

function refresh(){
    ctx.font = "30px Arial";
    ctx.fillText("Vege", 950, 50);
}
var t=0;
if(t==0){
    t=1;
randomizal();
}
platformsa();
movinga();

function randomizal(){
    for(i=pontszam;i<=pontszam+1005;i++){
        if(i>0){
        array[i]=Math.floor(Math.random()*2);
        if(array[i]==0){
            platformpositioning=platformpositioning+80;
        }
        else{
            platformpositioning=platformpositioning-80;
        }
        platformhight=platformhight-80;
        platforms();
        console.log(array[i]);
        console.log(platformhight,platformpositioning);
    }
}
}





window.addEventListener("keydown", checkKeyPress, false);
function checkKeyPress(key){
    if (key.keyCode == "65") {
        if (array[pontszam+1] == 1) {
            if(elso>1){
            plusz=plusz+80;
            }
            elso++;
            pontszam++;
            if(pontszam>1){
            platformpositioning=900;
            platformhight=900+plusz;
            animation();
            platforms();
            }
            ctx.clearRect(920, 20, 80, 50);
            szamol();
            me.clearRect(dbhely, dbmagassag, 15, 15);
            dbhely = dbhely - 80;
        }
        else {
            refresh();
        }
        if(elso<3){
            dbmagassag = dbmagassag - 80;
            }
        moving();
    }
    if (key.keyCode == "68") {
        if (array[pontszam+1] == 0) {
            if(elso>1){
                plusz=plusz+80;
                }
                elso++;
            pontszam++;
            if(pontszam>1){
            platformpositioning=900;
            platformhight=900+plusz;
            animation();
            platforms();
            }
            ctx.clearRect(920, 20, 80, 50);
            szamol();
            me.clearRect(dbhely, dbmagassag, 15, 15);
            dbhely = dbhely + 80;
        }
        else {
            refresh();
        }
        if(elso<3){
        dbmagassag = dbmagassag - 80;
        }
        moving();
    }
}


function moving(){
    me.fillRect(dbhely,dbmagassag,15, 15);
}
function platformsa(){
    platform.fillRect(900,900,140, 10);
}
function movinga(){
    me.fillRect(965,885,15, 15);
}
function animation(){
    platform.clearRect(0,0,2400, 2000);
    for(let j=1;j<=1005;j++){
        if(array[j]==0){
            platformpositioning=platformpositioning+80;
        }
        else{
            platformpositioning=platformpositioning-80;
        }
        console.log('HEllo');
        platformhight=platformhight-80;
        platforms();
        console.log(array[j]);
        console.log(platformhight,platformpositioning);
    }
}

function platforms(){
    platform.fillRect(platformpositioning,platformhight,140, 10);
}
console.log(canvas);
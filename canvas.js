console.log('r/place');
var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
alapx=window.innerWidth;
alapy=window.innerHeight;

var platform=canvas.getContext('2d');
var me=canvas.getContext('2d');

var ctx = canvas.getContext("2d");

var snd = new Audio("Kalimba.mp3"); // buffers automatically when created
snd.play();

//height percentage//
var kepy=alapy/969;
//width percentage//
var kepx=alapx/1920;
console.log(kepx,kepy);

//alap
var dbhely=alapx/2+50*kepx;
var dbmagassag=alapy-kepy*84;
var array=[];
var ellenorzes=[];
var pontszam=0;
var i;
var platformpositioning=alapx/2-20*kepx;
var platformhight=alapy-69*kepy;
var megvar=0;
var plusz=0;
var elso=1;
var was=0;

//first szelesseg
//second magassag
szamol();
function szamol(){
    ctx.font = "30px Arial";
    ctx.fillText(pontszam, alapx/2, 50);
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
    platform.clearRect(0,0,2400, 2000);
    ctx.font = "30px Arial";
    ctx.fillText("Vege", alapx/2, 50);
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
            platformpositioning=platformpositioning+kepx*80;
        }
        else{
            platformpositioning=platformpositioning-kepx*80;
        }
        platformhight=platformhight-kepy*80;
        platforms();
        //console.log(array[i]);
        //console.log(platformhight,platformpositioning);
    }
}
}







document.addEventListener("click", printMousePos, false);

function printMousePos()
{
    var e = window.event;

    var cursorX = e.clientX;
    if (cursorX<alapx/2) {
        if (array[pontszam+1] == 1) {
            if(elso>1){
            plusz=plusz+kepy*80;
            }
            elso++;
            pontszam++;
            if(pontszam>1){
            platformpositioning=alapx/2-20*kepx;
            platformhight=alapy-69*kepy+plusz;
            animation();
            platforms();
            }
            szamol();
            me.clearRect(dbhely, dbmagassag, kepx*15, kepy*15);
            dbhely = dbhely - kepx*80;
        }
        else {
            refresh();
        }
        if(elso<3){
            dbmagassag = dbmagassag - kepy*80;
            }
        moving();
    }
    if (cursorX>alapx/2) {
        if (array[pontszam+1] == 0) {
            if(elso>1){
                plusz=plusz+kepy*80;
                }
                elso++;
            pontszam++;
            if(pontszam>1){
            platformpositioning=alapx/2-20*kepx;
            platformhight=alapy+plusz-69*kepy;
            animation();
            platforms();
            }
            ctx.clearRect(920, 20, 80, 50);
            szamol();
            me.clearRect(dbhely, dbmagassag, kepx*15, kepy*15);
            dbhely = dbhely + kepx*80;
        }
        else {
            refresh();
        }
        if(elso<3){
        dbmagassag = dbmagassag - kepy*80;
        }
        moving();
    }
}

window.addEventListener("keydown", checkKeyPress, false);
function checkKeyPress(key){
    if (key.keyCode == "65") {
        if (array[pontszam+1] == 1) {
            if(elso>1){
            plusz=plusz+kepy*80;
            }
            elso++;
            pontszam++;
            if(pontszam>1){
            platformpositioning=alapx/2-20*kepx;
            platformhight=alapy-69*kepy+plusz;
            animation();
            platforms();
            }
            szamol();
            me.clearRect(dbhely, dbmagassag, kepx*15, kepy*15);
            dbhely = dbhely - kepx*80;
        }
        else {
            refresh();
        }
        if(elso<3){
            dbmagassag = dbmagassag - kepy*80;
            }
        moving();
    }
    if (key.keyCode == "68") {
        if (array[pontszam+1] == 0) {
            if(elso>1){
                plusz=plusz+kepy*80;
                }
                elso++;
            pontszam++;
            if(pontszam>1){
            platformpositioning=alapx/2-20*kepx;
            platformhight=alapy+plusz-69*kepy;
            animation();
            platforms();
            }
            ctx.clearRect(920, 20, 80, 50);
            szamol();
            me.clearRect(dbhely, dbmagassag, kepx*15, kepy*15);
            dbhely = dbhely + kepx*80;
        }
        else {
            refresh();
        }
        if(elso<3){
        dbmagassag = dbmagassag - kepy*80;
        }
        moving();
    }
}


function moving(){
    me.fillRect(dbhely,dbmagassag,kepy*15, kepy*15);
}
function platformsa(){
    platform.fillRect(alapx/2,alapy-kepy*50,kepx*140, kepy*10);
}
function movinga(){
    me.fillRect(alapx/2+kepx*60,alapy-kepy*65,kepy*15, kepy*15);
}
function animation(){
    platform.clearRect(0,0,2400, 2000);
    for(let j=1;j<=1005;j++){
        if(array[j]==0){
            platformpositioning=platformpositioning+kepx*80;
        }
        else{
            platformpositioning=platformpositioning-kepx*80;
        }
        console.log('HEllo');
        platformhight=platformhight-kepy*80;
        platforms();
        console.log(array[j]);
        console.log(platformhight,platformpositioning);
    }
}

function platforms(){
    platform.fillRect(platformpositioning,platformhight,kepx*140, kepy*10);
}
console.log(canvas);
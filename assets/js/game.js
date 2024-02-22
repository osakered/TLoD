let canvas = document.getElementById("gamezone");
let context = canvas.getContext("2d");
let canvashud = document.getElementById("gamezone");
let contexthud = canvashud.getContext("2d");

let brewEnding = new Audio();
brewEnding.src = "./assets/sounds/brewEnding.mp3";

let Ending = new Audio();
Ending.src = "./assets/sounds/Ending.mp3";

let step = new Audio();
step.src = "./assets/sounds/walk.mp3";

let hit = new Audio();
hit.src = "./assets/sounds/hit.mp3";



let drink = new Audio();
drink.src = "./assets/sounds/drinking.mp3";

let smoke = new Audio();
smoke.src = "./assets/sounds/smoke.mp3";

let sixthroomis = false;

let enemyfirstroomdefeated = false;


canvashud.width = 100;
canvashud.height = 100;

canvas.width = 500;
canvas.height = 500;
let cell = {
    h: 50,
    w: 50
};

let alreadycreatedthird = false;

let getkeys = false;

let throwfirstenemyinterval = "";
let throwsecondenemyinterval = "";
let throwthirdenemyinterval = "";

let alreadycreatedfirst = false;
let alreadycreatedsecond = false;

let bottlefirstget = false;
let bottlesecondget = false;
let bottlethirdget = false;
let bottlefourthget = false;
let bottlefifthget = false;

let enemiesdefeatedfirst = false;
let enemiesdefeatedsecond = false;
let enemiesdefeatedthird = false;

let trigger = false;
let triggersecond = false;
let triggerthird = false;

let firstenemyhp = 3;
let secondenemyhp = 3;
let thirdenemyhp = 3;
let fourthenemyhp = 3;

let frompyaterka = false;

let j = 0;

let enemysecondroomdefeated = false;


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let range = 0;
let cellgrenade = 0;
let firstroomcigarettes = true;
let firstroomaidkit = true;
let tenroomaidkit = true;
let fourteenaidkit = true;
let startroomis = true;
let secondroomis = false;
let thirdroomis = false;

let eightroomis = false;

let alreadyused = false;

let grenadeimages = ["./assets/images/grenade.png","./assets/images/grenadedown.png","./assets/images/grenaderight.png","./assets/images/grenadeleft.png"]


let rotatestraight = false;
let rotatedown = true;
let rotateright = false;
let rotateleft = false;

let fromfifthroom = false;
let fromsixthroom = false;
let fromseventhroom = false;
let fromeightroom = false;
let fromnineroom = false;
let fromtenroom = false;
let fromelevenroom = false;
let fromtwelveroom = false;
let fromthirteenroom = false;
let fromfourteenroom = false;
let fromfourthroom = false;
let fromfirstroom = false;
let fromsecondroom = false;
let fromthirdroom = false;
let fromhub = true;

canvas.style.backgroundImage = "url('./assets/images/floorroom.png')";
let map = [];
let firstaidkit = new Image()
firstaidkit.src = "./assets/images/firstaidkit.png";

let wall = new Image()
wall.src = "./assets/images/fencePO2.png";

let zebra2 = new Image()
zebra2.src = "./assets/images/zebra2.png";

let drugman = new Image()
drugman.src = "./assets/images/Drugman.png";

let chair = new Image()
chair.src = "./assets/images/chair.png";

let pcfirst = new Image()
pcfirst.src = "./assets/images/pc1.png";
let pcsecond = new Image()
pcsecond.src = "./assets/images/pc2.png";
let pcthird = new Image()
pcthird.src = "./assets/images/pc3.png";
let pcfourth = new Image()
pcfourth.src = "./assets/images/pc4.png";

let rum = new Image()
rum.src = "./assets/images/rum.png";

let grave = new Image()
grave.src = "./assets/images/pxArt4.png";

let keys = new Image()
keys.src = "./assets/images/Keys.png";

let firstcarheader = new Image()
firstcarheader.src = "./assets/images/firstcarheader.png";

let enemyprojectile = new Image()
enemyprojectile.src = "./assets/images/vodkashooterprojectile.png";

let truckheader = new Image()
truckheader.src = "./assets/images/truckheader.png";

let truckdown = new Image()
truckdown.src = "./assets/images/truckdown.png";

let kppman = new Image()
kppman.src = "./assets/images/kppman.png";

let kppbarrierfirst = new Image()
kppbarrierfirst.src = "./assets/images/kppbarrierfirst.png";

let kppbarriersecond = new Image()
kppbarriersecond.src = "./assets/images/kppbarriersecond.png";

let firstcardown = new Image()
firstcardown.src = "./assets/images/firstcardown.png";

let secondcarheader = new Image()
secondcarheader.src = "./assets/images/secondcarheader.png";

let secondcardown = new Image()
secondcardown.src = "./assets/images/secondcardown.png";

let road = new Image()
road.src = "./assets/images/road.png";

let zebra = new Image()
zebra.src = "./assets/images/zebra.png";

let rightcarheader = new Image()
rightcarheader.src = "./assets/images/rightcarheader.png";

let rightcardown = new Image()
rightcardown.src = "./assets/images/rightcardown.png";

let leftcarheader = new Image()
leftcarheader.src = "./assets/images/leftcarheader.png";

let leftcardown = new Image()
leftcardown.src = "./assets/images/leftcardown.png";

let fisher = new Image()
fisher.src = "./assets/images/fisher.png";

let panelside = new Image()
panelside.src = "./assets/images/pnlk_side.jpg";

let panelentryon = new Image()
panelentryon.src = "./assets/images/pnlk_entryON.jpg";

let health6 = new Image()
health6.src = "./assets/images/6HP.png";
let health5 = new Image()
health5.src = "./assets/images/5HP.png";
let health4 = new Image()
health4.src = "./assets/images/4HP.png";
let health3 = new Image()
health3.src = "./assets/images/3HP.png";
let health2 = new Image()
health2.src = "./assets/images/2HP.png";
let health1 = new Image()
health1.src = "./assets/images/1HP.png";


let panelentry = new Image()
panelentry.src = "./assets/images/pnlk_entry.jpg";

let panelentryending = new Image()
panelentryending.src = "./assets/images/pnlk_entry.jpg";

let pyaterka_header_first = new Image()
pyaterka_header_first.src = "./assets/images/5kaheader1.png";

let pyaterka_header_second = new Image()
pyaterka_header_second.src = "./assets/images/5kaheader2.png";

let pyaterka_header_wall = new Image()
pyaterka_header_wall.src = "./assets/images/5rkaheaderwall.png";

let pyaterka_entry = new Image()
pyaterka_entry.src = "./assets/images/5kaentry.png";

let pyaterka_entry_ON = new Image()
pyaterka_entry_ON.src = "./assets/images/5kaentryON.png";

let pyaterka_wall = new Image()
pyaterka_wall.src = "./assets/images/5kawall.png";

let pyaterka_wall_inside = new Image()
pyaterka_wall_inside.src = "./assets/images/pyaterkainsidewall.png";

let trash = new Image()
trash.src = "./assets/images/trash.png";

let marlboro = new Image()
marlboro.src = "./assets/images/malbara).png";

let laptop = new Image()
laptop.src = "./assets/images/laptop.png";

let trashsecond = new Image()
trashsecond.src = "./assets/images/rashandacarashan.png";

let bed = new Image()
bed.src = "./assets/images/bed.png";

let wallpaper = new Image()
wallpaper.src = "./assets/images/wallroom.png";

let grenadehud = new Image()
grenadehud.src = "./assets/images/grenadeHUD.png";

let panelwind = new Image();
panelwind.src = "./assets/images/pnlk_block.jpg"

let panelroof = new Image();
panelroof.src = "./assets/images/pnlk_roof.jpg"

let enterlocationsecond = new Image()
enterlocationsecond.src = "./assets/images/Empty.png";

let enterlocationthird = new Image()
enterlocationthird.src = "./assets/images/Empty.png";

let enterlocationfourth = new Image()
enterlocationfourth.src = "./assets/images/Empty.png";

let enterlocationfifth = new Image()
enterlocationfifth.src = "./assets/images/Empty.png";

let enterlocationsixth = new Image()
enterlocationsixth.src = "./assets/images/Empty.png";

let enterlocationseventh = new Image()
enterlocationseventh.src = "./assets/images/Empty.png";

let enterlocationeighth = new Image()
enterlocationeighth.src = "./assets/images/Empty.png";

let enterlocationninth = new Image()
enterlocationsecond.src = "./assets/images/Empty.png";

let enterlocationten = new Image()
enterlocationten.src = "./assets/images/Empty.png";

let enterlocationeleven = new Image()
enterlocationeleven.src = "./assets/images/Empty.png";

let enterlocationtwelve = new Image()
enterlocationtwelve.src = "./assets/images/Empty.png";

let enterlocationthirteen = new Image()
enterlocationthirteen.src = "./assets/images/Empty.png";

let enterlocationfourteen = new Image()
enterlocationfourteen.src = "./assets/images/Empty.png";

let enterlocation = new Image()
enterlocation.src = "./assets/images/Empty.png";

let spikes = new Image()
spikes.src = "./assets/images/spikes.png"

let grenade = new Image()
grenade.src = "./assets/images/grenade.png"

let enemy = new Image()
enemy.src = "./assets/images/vodkashooter.png";

let heroimg = new Image()
heroimg.src = "./assets/images/MainCharacter.png";
let hero = {
    x: cell.w * 2,
    y: cell.h * 3,
    jump: 1,
    count_grenades: 0,
    hp:6
}


for (let x = 0; x < canvas.width / cell.w; x++) {
    for (let y = 0; y < canvas.height / cell.h; y++) {
        map.push({
            x: x * cell.w,
            y: y * cell.h,
            block: 0
        });
        context.strokeRect(x * cell.w, y * cell.h, cell.w, cell.h);
    }
}

function startroom(){
startroomis = true;
thirdroomis = false;
secondroomis = false;
map[0].block = 3;
map[1].block = 3;
map[2].block = 3;
map[3].block = 3;
map[4].block = 3;
map[5].block = 3;
map[6].block = 3;
map[7].block = 3;
map[8].block = 3;
map[9].block = 3;
map[10].block = 3;
map[20].block = 3;
map[30].block = 3;
map[40].block = 3;
map[50].block = 3;
map[51].block = 6;
if (firstroomcigarettes == true){
map[14].block = 5;
}
if (firstroomaidkit == true)
{
map[15].block = 1;
}
map[28].block = 4;
map[18].block = 4;
map[17].block = 4;
map[81].block = 7;
map[71].block = 8;
map[60].block = 3;
map[70].block = 3;
map[80].block = 3;
map[90].block = 3;
map[91].block = 3;
map[92].block = 3;
map[93].block = 3;
map[94].block = 3;
map[95].block = 3;
map[96].block = 3;
map[97].block = 3;
map[98].block = 2;
map[9].block = 3;
map[19].block = 3;
map[29].block = 3;
map[39].block = 3;
map[49].block = 3;
map[59].block = 3;
map[69].block = 3;
map[79].block = 3;
map[89].block = 3;
map[99].block = 3;
}

    function throwenemydownfirst(){
       j = 1000;
       c = 0;
       for (let i = 1; i < 9; i++)  
       {
        if (firstenemyhp > 0){
            setTimeout(() => {map[i+50].block = 53;}, c+=1000);
            setTimeout(() => {map[i+50].block = 0;}, j+=1000);
            setTimeout(() => {if (i+50 == hero.x/5 + hero.y/50)
            {
              hero.hp -= 1;
            }}, c);
        }
    }
    }

    function throwenemydownsecond(){
       j = 1000;
       c = 0;
       for (let i = 1; i < 9; i++)  
       {
        if (secondenemyhp > 0){
            setTimeout(() => {map[i+40].block = 53;}, c+=1000);
            setTimeout(() => {map[i+40].block = 0;}, j+=1000);
            setTimeout(() => {if (i+40 == hero.x/5 + hero.y/50)
            {
              hero.hp -= 1;
            }}, c);
        }
}
    }

    function throwenemydownthird(){
        j = 1000;
        c = 0;
        for (let i = 3; i < 9; i++)  
        {
         if (thirdenemyhp > 0){
             setTimeout(() => {map[i+80].block = 53;}, c+=1000);
             setTimeout(() => {map[i+80].block = 0;}, j+=1000);
             setTimeout(() => {if (i+80 == hero.x/5 + hero.y/50)
             {
               hero.hp -= 1;
             }}, c);
         }
 }
     }

     function throwenemydownfourth(){
        j = 1000;
        c = 0;
        for (let i = 5; i < 9; i++)  
        {
         if (fourthenemyhp > 0){
             setTimeout(() => {map[i+30].block = 53;}, c+=1000);
             setTimeout(() => {map[i+30].block = 0;}, j+=1000);
             setTimeout(() => {if (i+30 == hero.x/5 + hero.y/50)
             {
               hero.hp -= 1;
             }}, c);
         }
 }
     }

startroom();



function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < map.length; i++) {
        if (map[i].block == 1) {
            context.drawImage(firstaidkit, map[i].x, map[i].y, cell.w, cell.h);
        }
        if (map[i].block == 3) {
            context.drawImage(wallpaper, map[i].x, map[i].y, cell.w, cell.h);
        }
        if (map[i].block == 2) {
                context.drawImage(enterlocation, map[i].x, map[i].y, cell.w, cell.h);
        }
        if (map[i].block == 4) {
            context.drawImage(trash, map[i].x, map[i].y, cell.w, cell.h);
        }
        if (map[i].block == 5) {
            context.drawImage(marlboro, map[i].x, map[i].y, cell.w, cell.h);
        }
        if (map[i].block == 6) {
            context.drawImage(laptop, map[i].x, map[i].y, cell.w, cell.h);
        }
        if (map[i].block == 7) {
            context.drawImage(bed, map[i].x, map[i].y, cell.w, cell.h);
        }
        if (map[i].block == 8) {
            context.drawImage(trashsecond, map[i].x, map[i].y, cell.w, cell.h);
        }
        if (map[i].block == 9) {
            context.drawImage(panelwind, map[i].x, map[i].y, cell.w, cell.h);
        }
        if (map[i].block == 10) {
            context.drawImage(panelroof, map[i].x, map[i].y, cell.w, cell.h);
        }
        if (map[i].block == 11) {
            context.drawImage(panelentryon, map[i].x, map[i].y, cell.w, cell.h);
        }
        if (map[i].block == 12) {
            context.drawImage(panelentry, map[i].x, map[i].y, cell.w, cell.h);
        }
        if (map[i].block == 13) {
            context.drawImage(wall, map[i].x, map[i].y, cell.w, cell.h);
        }
        if (map[i].block == 14) {
            context.drawImage(panelside, map[i].x, map[i].y, cell.w, cell.h);
        }
        if (map[i].block == 15) {
            context.drawImage(fisher, map[i].x, map[i].y, cell.w, cell.h);
        }
        if (map[i].block == 16) {
            context.drawImage(enterlocationsecond, map[i].x, map[i].y, cell.w, cell.h);
        }
        if (map[i].block == 17) {
            context.drawImage(spikes, map[i].x, map[i].y, cell.w, cell.h);
        }
        if (map[i].block == 18) {
            context.drawImage(grenade, map[i].x, map[i].y, 38, 50);
        }
        if (map[i].block == 19) {
            context.drawImage(enemy, map[i].x, map[i].y, 50, 50);
        }
        if (map[i].block == 20) {
            context.drawImage(enterlocationthird, map[i].x, map[i].y, cell.w, cell.h);
        }
        if (map[i].block == 21) {
            context.drawImage(pyaterka_wall, map[i].x, map[i].y, cell.w, cell.h);
        }
        if (map[i].block == 22) {
            context.drawImage(pyaterka_header_wall, map[i].x, map[i].y, cell.w, cell.h);
        }
        if (map[i].block == 23) {
            context.drawImage(pyaterka_header_first, map[i].x, map[i].y, cell.w, cell.h);
        }
        if (map[i].block == 24) {
            context.drawImage(pyaterka_header_second, map[i].x, map[i].y, cell.w, cell.h);
        }
        if (map[i].block == 25) {
            context.drawImage(pyaterka_entry, map[i].x, map[i].y, cell.w, cell.h);
        }
        if (map[i].block == 26) {
            context.drawImage(pyaterka_entry_ON, map[i].x, map[i].y, cell.w, cell.h);
        }
        if (map[i].block == 27) {
            context.drawImage(enterlocationfourth, map[i].x, map[i].y, cell.w, cell.h);
        }
        if (map[i].block == 28) {
            context.drawImage(enterlocationfifth, map[i].x, map[i].y, cell.w, cell.h);
        }
        if (map[i].block == 29) {
            context.drawImage(enterlocationsixth, map[i].x, map[i].y, cell.w, cell.h);
        }
        if (map[i].block == 30) {
            context.drawImage(firstcarheader, map[i].x, map[i].y, cell.w, cell.h);
        }
        if (map[i].block == 31) {
            context.drawImage(firstcardown, map[i].x, map[i].y, cell.w, cell.h);
        }
        if (map[i].block == 32) {
            context.drawImage(secondcarheader, map[i].x, map[i].y, cell.w, cell.h);
        }
        if (map[i].block == 33) {
            context.drawImage(secondcardown, map[i].x, map[i].y, cell.w, cell.h);
        }
        if (map[i].block == 34) {
            context.drawImage(rightcarheader, map[i].x, map[i].y, cell.w, cell.h);
        }
        if (map[i].block == 35) {
            context.drawImage(rightcardown, map[i].x, map[i].y, cell.w, cell.h);
        }
        if (map[i].block == 36) {
            context.drawImage(enterlocationseventh, map[i].x, map[i].y, cell.w, cell.h);
        }
        if (map[i].block == 37) {
            context.drawImage(leftcarheader, map[i].x, map[i].y, cell.w, cell.h);
        }
        if (map[i].block == 38) {
            context.drawImage(leftcardown, map[i].x, map[i].y, cell.w, cell.h);
        }
        if (map[i].block == 39) {
            context.drawImage(enterlocationeighth, map[i].x, map[i].y, cell.w, cell.h);
        }
        if (map[i].block == 40) {
            context.drawImage(road, map[i].x, map[i].y, cell.w, cell.h);
        }
        if (map[i].block == 41) {
            context.drawImage(zebra, map[i].x, map[i].y, cell.w, cell.h);
        }
        if (map[i].block == 42) {
            context.drawImage(enterlocationninth, map[i].x, map[i].y, cell.w, cell.h);
        }
        if (map[i].block == 43) {
            context.drawImage(enterlocationten, map[i].x, map[i].y, cell.w, cell.h);
        }
        if (map[i].block == 44) {
            context.drawImage(truckheader, map[i].x, map[i].y, cell.w, cell.h);
        }
        if (map[i].block == 45) {
            context.drawImage(truckdown, map[i].x, map[i].y, cell.w, cell.h);
        }
        if (map[i].block == 46) {
            context.drawImage(enterlocationeleven, map[i].x, map[i].y, cell.w, cell.h);
        }
        if (map[i].block == 47) {
            context.drawImage(enterlocationtwelve, map[i].x, map[i].y, cell.w, cell.h);
        }
        if (map[i].block == 48) {
            context.drawImage(enterlocationthirteen, map[i].x, map[i].y, cell.w, cell.h);
        }
        if (map[i].block == 49) {
            context.drawImage(kppman, map[i].x, map[i].y, cell.w, cell.h);
        }
        if (map[i].block == 50) {
            context.drawImage(kppbarrierfirst, map[i].x, map[i].y, cell.w, cell.h);
        }
        if (map[i].block == 51) {
            context.drawImage(kppbarriersecond, map[i].x, map[i].y, cell.w, cell.h);
        }
        if (map[i].block == 52) {
            context.drawImage(rum, map[i].x, map[i].y, cell.w, cell.h);
        }
        if (map[i].block == 53) {
            context.drawImage(enemyprojectile, map[i].x, map[i].y, cell.w, cell.h);
        }
        if (map[i].block == 54) {
            context.drawImage(pyaterka_wall_inside, map[i].x, map[i].y, cell.w, cell.h);
        }
        if (map[i].block == 55) {
            context.drawImage(enterlocationfourteen, map[i].x, map[i].y, cell.w, cell.h);
        }
        if (map[i].block == 56) {
            context.drawImage(keys, map[i].x, map[i].y, cell.w, cell.h);
        }
        if (map[i].block == 57) {
            context.drawImage(grave, map[i].x, map[i].y, cell.w, cell.h);
        }
        if (map[i].block == 58) {
            context.drawImage(panelentryending, map[i].x, map[i].y, cell.w, cell.h);
        }
        if (map[i].block == 59) {
            context.drawImage(chair, map[i].x, map[i].y, cell.w, cell.h);
        }
        if (map[i].block == 60) {
            context.drawImage(pcfirst, map[i].x, map[i].y, cell.w, cell.h);
        }
        if (map[i].block == 61) {
            context.drawImage(pcsecond, map[i].x, map[i].y, cell.w, cell.h);
        }
        if (map[i].block == 62) {
            context.drawImage(pcthird, map[i].x, map[i].y, cell.w, cell.h);
        }
        if (map[i].block == 63) {
            context.drawImage(pcfourth, map[i].x, map[i].y, cell.w, cell.h);    
        }
        if (map[i].block == 64) {
            context.drawImage(drugman, map[i].x, map[i].y, cell.w, cell.h);    
        }
        if (map[i].block == 65) {
            context.drawImage(zebra2, map[i].x, map[i].y, cell.w, cell.h);    
        }
    }

    if (hero.hp <= 0)
    {
        blocks[2].style.zIndex = 3;
        blocks[0].style.zIndex = 2;
        blocks[1].style.zIndex = 1;
    }

    if (hero.hp != 0)
    {
    context.drawImage(heroimg, hero.x, hero.y, cell.w, cell.h);
    }
    switch (hero.hp){
        case 6:
            context.drawImage(health6,map[0].x, map[0].y, 75, 22)
        break;
        case 5:
            context.drawImage(health5,map[0].x, map[0].y, 75, 22)
        break;
        case 4:
            context.drawImage(health4,map[0].x, map[0].y, 75, 22)
        break;
        case 3:
            context.drawImage(health3,map[0].x, map[0].y, 75, 22)
        break;
        case 2:
            context.drawImage(health2,map[0].x, map[0].y, 75, 22)
        break;
        case 1:
            context.drawImage(health1,map[0].x, map[0].y, 75, 22)
        break;
    }
    context.drawImage(grenadehud,map[0].x, map[1].y, 15, 30)
    context.font= "20px Roboto"
    context.fillText(":"+ hero.count_grenades,20,75);

    if (hero.x/5 == 50 && secondroomis == true && trigger == false)
    {
        throwenemydownfirst();
        throwfirstenemyinterval = setInterval(throwenemydownfirst, 4000);
        trigger = true;
    }
    if (hero.x/5 == 40 && secondroomis == true && triggersecond == false)
    {
        throwenemydownsecond();
        throwsecondenemyinterval = setInterval(throwenemydownsecond, 4000);
        triggersecond = true;
    }
    if (hero.x/5 != 50 && secondroomis == true)
    {
        clearInterval(throwfirstenemyinterval);
        trigger = false;
    }
    if (hero.x/5 != 40 && secondroomis == true)
    {
        clearInterval(throwsecondenemyinterval);
        triggersecond = false;
    }
    if (hero.x/5 == 80 && sixthroomis == true && triggerthird == false)
    {
        throwenemydownthird();
        throwthirdenemyinterval = setInterval(throwenemydownthird, 4000);
        triggerthird = true;
    }
    if (hero.x/5 != 80 && sixthroomis == true)
    {
        clearInterval(throwthirdenemyinterval);
        triggerthird = false;
    }
    if (hero.x/5 == 30 && eightroomis == true && triggerfourth == false)
    {
        throwenemydownfourth();
        throwthirdenemyinterval = setInterval(throwenemydownfourth, 4000);
        triggerfourth = true;
    }
    if (hero.x/5 != 30 && eightroomis == true)
    {
        clearInterval(throwthirdenemyinterval);
        triggerfourth = false;
    }
    if (firstenemyhp < 0 && secondroomis == true)
    {
        map[50].block = 0;
    }
    if (secondenemyhp < 0 && secondroomis == true)
    {
        map[40].block = 0;
    }
    if (thirdenemyhp < 0 && sixthroomis == true)
    {
        map[82].block = 0;
    }
    if (fourthenemyhp < 0 && eightroomis == true)
    {
        map[34].block = 0;
    }
    if (firstenemyhp < 0 && secondenemyhp < 0 && secondroomis == true && alreadycreatedfirst == false)
    {
        setTimeout(() => {map[8].block = 2;}, 7000);
        enemyfirstroomdefeated = true;
        alreadycreatedfirst = true;
    }
    if (thirdenemyhp < 0 && sixthroomis == true && alreadycreatedsecond == false)
    {
        setTimeout(() => {map[91].block = 36;}, 7000); 
        setTimeout(() => {map[89].block = 20;}, 7000);
        setTimeout(() => {map[7].block = 28;}, 7000);
        enemysecondroomdefeated = true;
        alreadycreatedsecond = true;
    }
    if (fourthenemyhp < 0 && eightroomis == true && alreadycreatedthird == false)
    {
        setTimeout(() => {map[89].block = 36;}, 7000); 
        setTimeout(() => {map[4].block = 42;}, 7000);
        setTimeout(() => {map[50].block = 46;}, 7000);
        enemiesdefeatedthird = true;
        alreadycreatedthird = true;
    }
}

refreshinterval = setInterval(draw, 60);

document.addEventListener("keydown", function (event) {
    console.log(event.keyCode);
    switch (event.keyCode) {
        case 87:
            step.play();
            rotatestraight = true;
            rotateleft = false;
            rotateright = false;
            rotatedown = false;
            heroimg.src = "./assets/images/MainCharacterback.png";
            if (hero.y != 0) {
                hero.y -= cell.h * hero.jump;
                let collisionwallpaper = map.findIndex(map_wallpaper => map_wallpaper.x == hero.x && map_wallpaper.y == hero.y);
                if (map[collisionwallpaper].block == 3) {
                    hero.y += cell.h * hero.jump;
                }
                let collisionlaptop = map.findIndex(map_laptop => map_laptop.x == hero.x && map_laptop.y == hero.y);
                if (map[collisionlaptop].block == 6) {
                    hero.y += cell.h * hero.jump;
                }
                let collisionwindow = map.findIndex(map_panelwind => map_panelwind.x == hero.x && map_panelwind.y == hero.y);
                if (map[collisionwindow].block == 9) {
                    hero.y += cell.h * hero.jump;
                }
                let collisionroof = map.findIndex(map_panelroof => map_panelroof.x == hero.x && map_panelroof.y == hero.y);
                if (map[collisionroof].block == 10) {
                    hero.y += cell.h * hero.jump;
                }
                let collisionwall = map.findIndex(map_wall => map_wall.x == hero.x && map_wall.y == hero.y);
                if (map[collisionwall].block == 13) {
                    hero.y += cell.h * hero.jump;
                }
                let collisionpanelside = map.findIndex(map_panelside => map_panelside.x == hero.x && map_panelside.y == hero.y);
                if (map[collisionpanelside].block == 14) {
                    hero.y += cell.h * hero.jump;
                }
                let collisionfisher = map.findIndex(map_fisher => map_fisher.x == hero.x && map_fisher.y == hero.y);
                if (map[collisionfisher].block == 15) {
                    hero.y += cell.h * hero.jump;
                }
                let collisiondoorpanel = map.findIndex(map_panelentry => map_panelentry.x == hero.x && map_panelentry.y == hero.y);
                if (map[collisiondoorpanel].block == 12) {
                    hero.y += cell.h * hero.jump;
                }
                let collisiontrash = map.findIndex(map_trash => map_trash.x == hero.x && map_trash.y == hero.y);
                if (map[collisiontrash].block == 4) {
                    hero.y += cell.h * hero.jump;
                }
                let collisionpyaterkawall = map.findIndex(map_pyaterka_wall => map_pyaterka_wall.x == hero.x && map_pyaterka_wall.y == hero.y);
                if (map[collisionpyaterkawall].block == 21) {
                    hero.y += cell.h * hero.jump;
                }
                let collisionpyaterkaheaderwall = map.findIndex(map_pyaterka_header_wall => map_pyaterka_header_wall.x == hero.x && map_pyaterka_header_wall.y == hero.y);
                if (map[collisionpyaterkaheaderwall].block == 22) {
                    hero.y += cell.h * hero.jump;
                }
                let collisionpyaterkaentry = map.findIndex(map_pyaterka_entry => map_pyaterka_entry.x == hero.x && map_pyaterka_entry.y == hero.y);
                if (map[collisionpyaterkaentry].block == 25) {
                    hero.y += cell.h * hero.jump;
                }
                let collisionfirstcarheader = map.findIndex(map_firstcarheader => map_firstcarheader.x == hero.x && map_firstcarheader.y == hero.y);
                if (map[collisionfirstcarheader].block == 30) {
                    hero.y += cell.h * hero.jump;
                }
                let collisionfirstcardown = map.findIndex(map_firstcarheader => map_firstcarheader.x == hero.x && map_firstcarheader.y == hero.y);
                if (map[collisionfirstcardown].block == 31) {
                    hero.y += cell.h * hero.jump;
                }
                let collisionsecondcarheader = map.findIndex(map_secondcarheader => map_secondcarheader.x == hero.x && map_secondcarheader.y == hero.y);
                if (map[collisionsecondcarheader].block == 32) {
                    hero.y += cell.h * hero.jump;
                }
                let collisionsecondcardown = map.findIndex(map_secondcardown => map_secondcardown.x == hero.x && map_secondcardown.y == hero.y);
                if (map[collisionsecondcardown].block == 33) {
                    hero.y += cell.h * hero.jump;
                }
                let collisionrightcarheader = map.findIndex(map_rightcarheader => map_rightcarheader.x == hero.x && map_rightcarheader.y == hero.y);
                if (map[collisionrightcarheader].block == 34) {
                    hero.y += cell.h * hero.jump;
                }
                let collisionrightcardown = map.findIndex(map_collisionrightcardown => map_collisionrightcardown.x == hero.x && map_collisionrightcardown.y == hero.y);
                if (map[collisionrightcardown].block == 35) {
                    hero.y += cell.h * hero.jump;
                }
                let collisioncarleftheader = map.findIndex(map_leftcarheader => map_leftcarheader.x == hero.x && map_leftcarheader.y == hero.y);
                if (map[collisioncarleftheader].block == 37) {
                    hero.y += cell.h * hero.jump;
                }
                let collisioncarleftdown = map.findIndex(map_leftcardown => map_leftcardown.x == hero.x && map_leftcardown.y == hero.y);
                if (map[collisioncarleftdown].block == 38) {
                    hero.y += cell.h * hero.jump;
                }
                let collisiontruckheader = map.findIndex(map_truckheader => map_truckheader.x == hero.x && map_truckheader.y == hero.y);
                if (map[collisiontruckheader].block == 44) {
                    hero.y += cell.h * hero.jump;
                }
                let collisiontruckdown = map.findIndex(map_truckdown => map_truckdown.x == hero.x && map_truckdown.y == hero.y);
                if (map[collisiontruckdown].block == 45) {
                    hero.y += cell.h * hero.jump;
                }
                let collisionkppman = map.findIndex(map_kppman => map_kppman.x == hero.x && map_kppman.y == hero.y);
                if (map[collisionkppman].block == 49) {
                    hero.y += cell.h * hero.jump;
                }
                let collisionkppbarrierfirst = map.findIndex(map_kppbarrierfirst => map_kppbarrierfirst.x == hero.x && map_kppbarrierfirst.y == hero.y);
                if (map[collisionkppbarrierfirst].block == 50) {
                    hero.y += cell.h * hero.jump;
                }
                let collisionkppbarriersecond = map.findIndex(map_kppbarriersecond => map_kppbarriersecond.x == hero.x && map_kppbarriersecond.y == hero.y);
                if (map[collisionkppbarriersecond].block == 51) {
                    hero.y += cell.h * hero.jump;
                }
                let collisionenemy = map.findIndex(map_enemy => map_enemy.x == hero.x && map_enemy.y == hero.y);
                if (map[collisionenemy].block == 19) {
                    hero.y += cell.h * hero.jump;
                }
                let collisiongrave = map.findIndex(map_grave => map_grave.x == hero.x && map_grave.y == hero.y);
                if (map[collisiongrave].block == 57) {
                    hero.y += cell.h * hero.jump;
                }
                let collisionendingenter = map.findIndex(map_panelentryending => map_panelentryending.x == hero.x && map_panelentryending.y == hero.y);
                if (map[collisionendingenter].block == 58 && getkeys == false) {
                    hero.y += cell.h * hero.jump;
                }
                let collisionpyaterkawallsinside = map.findIndex(map_pyaterka_wall_inside => map_pyaterka_wall_inside.x == hero.x && map_pyaterka_wall_inside.y == hero.y);
                if (map[collisionpyaterkawallsinside].block == 54) {
                    hero.y += cell.h * hero.jump;
                }
                let collisionpcfirst = map.findIndex(map_pcfirst => map_pcfirst.x == hero.x && map_pcfirst.y == hero.y);
                if (map[collisionpcfirst].block == 60) {
                    hero.y += cell.h * hero.jump;
                }
                let collisionpcsecond = map.findIndex(map_pcsecond => map_pcsecond.x == hero.x && map_pcsecond.y == hero.y);
                if (map[collisionpcsecond].block == 61) {
                    hero.y += cell.h * hero.jump;
                }
                let collisionpcthird = map.findIndex(map_pcthird => map_pcthird.x == hero.x && map_pcthird.y == hero.y);
                if (map[collisionpcthird].block == 62) {
                    hero.y += cell.h * hero.jump;
                }
                let collisionpcfourth = map.findIndex(map_pcfourth => map_pcfourth.x == hero.x && map_pcfourth.y == hero.y);
                if (map[collisionpcfourth].block == 63) {
                    hero.y += cell.h * hero.jump;
                }
                let collisiondrugman = map.findIndex(map_drugman => map_drugman.x == hero.x && map_drugman.y == hero.y);
                if (map[collisiondrugman].block == 64) {
                    hero.y += cell.h * hero.jump;
                }
            }
            break;
        case 83:
            step.play();
            rotatestraight = false;
            rotateleft = false;
            rotateright = false;
            rotatedown = true;
            heroimg.src = "./assets/images/MainCharacter.png";
            if (hero.y != canvas.height - cell.h) {
                hero.y += cell.h * hero.jump;
                let collisionwallpaper = map.findIndex(map_wallpaper => map_wallpaper.x == hero.x && map_wallpaper.y == hero.y);
                if (map[collisionwallpaper].block == 3) {
                    hero.y -= cell.h * hero.jump;
                }
                let collisionlaptop = map.findIndex(map_laptop => map_laptop.x == hero.x && map_laptop.y == hero.y);
                if (map[collisionlaptop].block == 6) {
                    hero.y -= cell.h * hero.jump;
                }
                let collisionroof = map.findIndex(map_panelroof => map_panelroof.x == hero.x && map_panelroof.y == hero.y);
                if (map[collisionroof].block == 10) {
                    hero.y -= cell.h * hero.jump;
                }
                let collisionwindow = map.findIndex(map_panelwind => map_panelwind.x == hero.x && map_panelwind.y == hero.y);
                if (map[collisionwindow].block == 9) {
                    hero.y -= cell.h * hero.jump;
                }
                let collisionwall = map.findIndex(map_wall => map_wall.x == hero.x && map_wall.y == hero.y);
                if (map[collisionwall].block == 13) {
                    hero.y -= cell.h * hero.jump;
                }
                let collisionpanelside = map.findIndex(map_panelside => map_panelside.x == hero.x && map_panelside.y == hero.y);
                if (map[collisionpanelside].block == 14) {
                    hero.y -= cell.h * hero.jump;
                }
                let collisionfisher = map.findIndex(map_fisher => map_fisher.x == hero.x && map_fisher.y == hero.y);
                if (map[collisionfisher].block == 15) {
                    hero.y -= cell.h * hero.jump;
                }
                let collisiondoorpanel = map.findIndex(map_panelentry => map_panelentry.x == hero.x && map_panelentry.y == hero.y);
                if (map[collisiondoorpanel].block == 12) {
                    hero.y -= cell.h * hero.jump;
                }
                let collisiontrash = map.findIndex(map_trash => map_trash.x == hero.x && map_trash.y == hero.y);
                if (map[collisiontrash].block == 4) {
                    hero.y -= cell.h * hero.jump;
                }
                let collisionpyaterkawall = map.findIndex(map_pyaterka_wall => map_pyaterka_wall.x == hero.x && map_pyaterka_wall.y == hero.y);
                if (map[collisionpyaterkawall].block == 21) {
                    hero.y -= cell.h * hero.jump;
                }
                let collisionpyaterkaheaderwall = map.findIndex(map_pyaterka_header_wall => map_pyaterka_header_wall.x == hero.x && map_pyaterka_header_wall.y == hero.y);
                if (map[collisionpyaterkaheaderwall].block == 22) {
                    hero.y -= cell.h * hero.jump;
                }
                let collisionpyaterkaentry = map.findIndex(map_pyaterka_entry => map_pyaterka_entry.x == hero.x && map_pyaterka_entry.y == hero.y);
                if (map[collisionpyaterkaentry].block == 25) {
                    hero.y -= cell.h * hero.jump;
                }
                let collisionfirstcarheader = map.findIndex(map_firstcarheader => map_firstcarheader.x == hero.x && map_firstcarheader.y == hero.y);
                if (map[collisionfirstcarheader].block == 30) {
                    hero.y -= cell.h * hero.jump;
                }
                let collisionfirstcardown = map.findIndex(map_firstcarheader => map_firstcarheader.x == hero.x && map_firstcarheader.y == hero.y);
                if (map[collisionfirstcardown].block == 31) {
                    hero.y -= cell.h * hero.jump;
                }
                let collisionsecondcarheader = map.findIndex(map_secondcarheader => map_secondcarheader.x == hero.x && map_secondcarheader.y == hero.y);
                if (map[collisionsecondcarheader].block == 32) {
                    hero.y -= cell.h * hero.jump;
                }
                let collisionsecondcardown = map.findIndex(map_secondcardown => map_secondcardown.x == hero.x && map_secondcardown.y == hero.y);
                if (map[collisionsecondcardown].block == 33) {
                    hero.y -= cell.h * hero.jump;
                }
                let collisionrightcarheader = map.findIndex(map_rightcarheader => map_rightcarheader.x == hero.x && map_rightcarheader.y == hero.y);
                if (map[collisionrightcarheader].block == 34) {
                    hero.y -= cell.h * hero.jump;
                }
                let collisionrightcardown = map.findIndex(map_collisionrightcardown => map_collisionrightcardown.x == hero.x && map_collisionrightcardown.y == hero.y);
                if (map[collisionrightcardown].block == 35) {
                    hero.y -= cell.h * hero.jump;
                }
                let collisioncarleftheader = map.findIndex(map_leftcarheader => map_leftcarheader.x == hero.x && map_leftcarheader.y == hero.y);
                if (map[collisioncarleftheader].block == 37) {
                    hero.y -= cell.h * hero.jump;
                }
                let collisioncarleftdown = map.findIndex(map_leftcardown => map_leftcardown.x == hero.x && map_leftcardown.y == hero.y);
                if (map[collisioncarleftdown].block == 38) {
                    hero.y -= cell.h * hero.jump;
                }
                let collisiontruckheader = map.findIndex(map_truckheader => map_truckheader.x == hero.x && map_truckheader.y == hero.y);
                if (map[collisiontruckheader].block == 44) {
                    hero.y -= cell.h * hero.jump;
                }
                let collisiontruckdown = map.findIndex(map_truckdown => map_truckdown.x == hero.x && map_truckdown.y == hero.y);
                if (map[collisiontruckdown].block == 45) {
                    hero.y -= cell.h * hero.jump;
                }
                let collisionkppman = map.findIndex(map_kppman => map_kppman.x == hero.x && map_kppman.y == hero.y);
                if (map[collisionkppman].block == 49) {
                    hero.y -= cell.h * hero.jump;
                }
                let collisionkppbarrierfirst = map.findIndex(map_kppbarrierfirst => map_kppbarrierfirst.x == hero.x && map_kppbarrierfirst.y == hero.y);
                if (map[collisionkppbarrierfirst].block == 50) {
                    hero.y -= cell.h * hero.jump;
                }
                let collisionkppbarriersecond = map.findIndex(map_kppbarriersecond => map_kppbarriersecond.x == hero.x && map_kppbarriersecond.y == hero.y);
                if (map[collisionkppbarriersecond].block == 51) {
                    hero.y -= cell.h * hero.jump;
                }
                let collisionenemy = map.findIndex(map_enemy => map_enemy.x == hero.x && map_enemy.y == hero.y);
                if (map[collisionenemy].block == 19) {
                    hero.y -= cell.h * hero.jump;
                }
                let collisiongrave = map.findIndex(map_grave => map_grave.x == hero.x && map_grave.y == hero.y);
                if (map[collisiongrave].block == 57) {
                    hero.y -= cell.h * hero.jump;
                }
                let collisionendingenter = map.findIndex(map_panelentryending => map_panelentryending.x == hero.x && map_panelentryending.y == hero.y);
                if (map[collisionendingenter].block == 58) {
                    hero.y -= cell.h * hero.jump;
                }
                let collisionpyaterkawallsinside = map.findIndex(map_pyaterka_wall_inside => map_pyaterka_wall_inside.x == hero.x && map_pyaterka_wall_inside.y == hero.y);
                if (map[collisionpyaterkawallsinside].block == 54) {
                    hero.y -= cell.h * hero.jump;
                }
                let collisionpcfirst = map.findIndex(map_pcfirst => map_pcfirst.x == hero.x && map_pcfirst.y == hero.y);
                if (map[collisionpcfirst].block == 60) {
                    hero.y -= cell.h * hero.jump;
                }
                let collisionpcsecond = map.findIndex(map_pcsecond => map_pcsecond.x == hero.x && map_pcsecond.y == hero.y);
                if (map[collisionpcsecond].block == 61) {
                    hero.y -= cell.h * hero.jump;
                }
                let collisionpcthird = map.findIndex(map_pcthird => map_pcthird.x == hero.x && map_pcthird.y == hero.y);
                if (map[collisionpcthird].block == 62) {
                    hero.y -= cell.h * hero.jump;
                }
                let collisionpcfourth = map.findIndex(map_pcfourth => map_pcfourth.x == hero.x && map_pcfourth.y == hero.y);
                if (map[collisionpcfourth].block == 63) {
                    hero.y -= cell.h * hero.jump;
                }
                let collisiondrugman = map.findIndex(map_drugman => map_drugman.x == hero.x && map_drugman.y == hero.y);
                if (map[collisiondrugman].block == 64) {
                    hero.y -= cell.h * hero.jump;
                }
            }
            break;
        case 65:
            step.play();
            heroimg.src = "./assets/images/MainCharacterLeft.png";
            rotatestraight = false;
            rotateleft = true;
            rotateright = false;
            rotatedown = false;
            if (hero.x != 0) {
                hero.x -= cell.w * hero.jump;
                let collisionwallpaper = map.findIndex(map_wallpaper => map_wallpaper.x == hero.x && map_wallpaper.y == hero.y);
                if (map[collisionwallpaper].block == 3) {
                    hero.x += cell.w * hero.jump;
                }
                let collisionlaptop = map.findIndex(map_laptop => map_laptop.x == hero.x && map_laptop.y == hero.y);
                if (map[collisionlaptop].block == 6) {
                    hero.x += cell.w * hero.jump;
                }
                let collisionroof = map.findIndex(map_panelroof => map_panelroof.x == hero.x && map_panelroof.y == hero.y);
                if (map[collisionroof].block == 10) {
                    hero.x += cell.w * hero.jump;
                }
                let collisionwindow = map.findIndex(map_panelwind => map_panelwind.x == hero.x && map_panelwind.y == hero.y);
                if (map[collisionwindow].block == 9) {
                    hero.x += cell.w * hero.jump;
                }
                let collisionwall = map.findIndex(map_wall => map_wall.x == hero.x && map_wall.y == hero.y);
                if (map[collisionwall].block == 13) {
                    hero.x += cell.w * hero.jump;
                }
                let collisionpanelside = map.findIndex(map_panelside => map_panelside.x == hero.x && map_panelside.y == hero.y);
                if (map[collisionpanelside].block == 14) {
                    hero.x += cell.w * hero.jump;
                }
                let collisionfisher = map.findIndex(map_fisher => map_fisher.x == hero.x && map_fisher.y == hero.y);
                if (map[collisionfisher].block == 15) {
                    hero.x += cell.w * hero.jump;
                }
                let collisiondoorpanel = map.findIndex(map_panelentry => map_panelentry.x == hero.x && map_panelentry.y == hero.y);
                if (map[collisiondoorpanel].block == 12) {
                    hero.x += cell.w * hero.jump;
                }
                let collisiontrash = map.findIndex(map_trash => map_trash.x == hero.x && map_trash.y == hero.y);
                if (map[collisiontrash].block == 4) {
                    hero.x += cell.w * hero.jump;
                }
                let collisionpyaterkawall = map.findIndex(map_pyaterka_wall => map_pyaterka_wall.x == hero.x && map_pyaterka_wall.y == hero.y);
                if (map[collisionpyaterkawall].block == 21) {
                    hero.x += cell.w * hero.jump;
                }
                let collisionpyaterkaheaderwall = map.findIndex(map_pyaterka_header_wall => map_pyaterka_header_wall.x == hero.x && map_pyaterka_header_wall.y == hero.y);
                if (map[collisionpyaterkaheaderwall].block == 22) {
                    hero.x += cell.w * hero.jump;
                }
                let collisionpyaterkaentry = map.findIndex(map_pyaterka_entry => map_pyaterka_entry.x == hero.x && map_pyaterka_entry.y == hero.y);
                if (map[collisionpyaterkaentry].block == 25) {
                    hero.x += cell.w * hero.jump;
                }
                let collisionfirstcarheader = map.findIndex(map_firstcarheader => map_firstcarheader.x == hero.x && map_firstcarheader.y == hero.y);
                if (map[collisionfirstcarheader].block == 30) {
                    hero.x += cell.w * hero.jump;
                }
                let collisionfirstcardown = map.findIndex(map_firstcarheader => map_firstcarheader.x == hero.x && map_firstcarheader.y == hero.y);
                if (map[collisionfirstcardown].block == 31) {
                    hero.x += cell.w * hero.jump;
                }
                let collisionsecondcarheader = map.findIndex(map_secondcarheader => map_secondcarheader.x == hero.x && map_secondcarheader.y == hero.y);
                if (map[collisionsecondcarheader].block == 32) {
                    hero.x += cell.w * hero.jump;
                }
                let collisionsecondcardown = map.findIndex(map_secondcardown => map_secondcardown.x == hero.x && map_secondcardown.y == hero.y);
                if (map[collisionsecondcardown].block == 33) {
                    hero.x += cell.w * hero.jump;
                }
                let collisionrightcarheader = map.findIndex(map_rightcarheader => map_rightcarheader.x == hero.x && map_rightcarheader.y == hero.y);
                if (map[collisionrightcarheader].block == 34) {
                    hero.x += cell.w * hero.jump;
                }
                let collisionrightcardown = map.findIndex(map_collisionrightcardown => map_collisionrightcardown.x == hero.x && map_collisionrightcardown.y == hero.y);
                if (map[collisionrightcardown].block == 35) {
                    hero.x += cell.w * hero.jump;
                }
                let collisioncarleftheader = map.findIndex(map_leftcarheader => map_leftcarheader.x == hero.x && map_leftcarheader.y == hero.y);
                if (map[collisioncarleftheader].block == 37) {
                    hero.x += cell.w * hero.jump;
                }
                let collisioncarleftdown = map.findIndex(map_leftcardown => map_leftcardown.x == hero.x && map_leftcardown.y == hero.y);
                if (map[collisioncarleftdown].block == 38) {
                    hero.x += cell.w * hero.jump;
                }
                let collisiontruckheader = map.findIndex(map_truckheader => map_truckheader.x == hero.x && map_truckheader.y == hero.y);
                if (map[collisiontruckheader].block == 44) {
                    hero.x += cell.w * hero.jump;
                }
                let collisiontruckdown = map.findIndex(map_truckdown => map_truckdown.x == hero.x && map_truckdown.y == hero.y);
                if (map[collisiontruckdown].block == 45) {
                    hero.x += cell.w * hero.jump;
                }
                let collisionkppman = map.findIndex(map_kppman => map_kppman.x == hero.x && map_kppman.y == hero.y);
                if (map[collisionkppman].block == 49) {
                    hero.x += cell.w * hero.jump;
                }
                let collisionkppbarrierfirst = map.findIndex(map_kppbarrierfirst => map_kppbarrierfirst.x == hero.x && map_kppbarrierfirst.y == hero.y);
                if (map[collisionkppbarrierfirst].block == 50) {
                    hero.x += cell.w * hero.jump;
                }
                let collisionkppbarriersecond = map.findIndex(map_kppbarriersecond => map_kppbarriersecond.x == hero.x && map_kppbarriersecond.y == hero.y);
                if (map[collisionkppbarriersecond].block == 51) {
                    hero.x += cell.w * hero.jump;
                }
                let collisionenemy = map.findIndex(map_enemy => map_enemy.x == hero.x && map_enemy.y == hero.y);
                if (map[collisionenemy].block == 19) {
                    hero.x += cell.w * hero.jump;
                }
                let collisiongrave = map.findIndex(map_grave => map_grave.x == hero.x && map_grave.y == hero.y);
                if (map[collisiongrave].block == 57) {
                    hero.x += cell.w * hero.jump;
                }
                let collisionendingenter = map.findIndex(map_panelentryending => map_panelentryending.x == hero.x && map_panelentryending.y == hero.y);
                if (map[collisionendingenter].block == 58) {
                    hero.x += cell.w * hero.jump;
                }
                let collisionpyaterkawallsinside = map.findIndex(map_pyaterka_wall_inside => map_pyaterka_wall_inside.x == hero.x && map_pyaterka_wall_inside.y == hero.y);
                if (map[collisionpyaterkawallsinside].block == 54) {
                    hero.x += cell.w * hero.jump;
                }
                let collisionpcfirst = map.findIndex(map_pcfirst => map_pcfirst.x == hero.x && map_pcfirst.y == hero.y);
                if (map[collisionpcfirst].block == 60) {
                    hero.x += cell.w * hero.jump;
                }
                let collisionpcsecond = map.findIndex(map_pcsecond => map_pcsecond.x == hero.x && map_pcsecond.y == hero.y);
                if (map[collisionpcsecond].block == 61) {
                    hero.x += cell.w * hero.jump;
                }
                let collisionpcthird = map.findIndex(map_pcthird => map_pcthird.x == hero.x && map_pcthird.y == hero.y);
                if (map[collisionpcthird].block == 62) {
                    hero.x += cell.w * hero.jump;
                }
                let collisionpcfourth = map.findIndex(map_pcfourth => map_pcfourth.x == hero.x && map_pcfourth.y == hero.y);
                if (map[collisionpcfourth].block == 63) {
                    hero.x += cell.w * hero.jump;
                }
                let collisiondrugman = map.findIndex(map_drugman => map_drugman.x == hero.x && map_drugman.y == hero.y);
                if (map[collisiondrugman].block == 64) {
                    hero.x += cell.w * hero.jump;
                }
            }
            break;
        case 68:
            step.play();
            heroimg.src = "./assets/images/MainCharacterRight.png";
            rotatestraight = false;
            rotateleft = false;
            rotateright = true;
            rotatedown = false;
            if (hero.x != canvas.width - cell.w) {
                hero.x += cell.w * hero.jump;
                let collisionwallpaper = map.findIndex(map_wallpaper => map_wallpaper.x == hero.x && map_wallpaper.y == hero.y);
                if (map[collisionwallpaper].block == 3) {
                    hero.x -= cell.w * hero.jump;
                }
                let collisionwindow = map.findIndex(map_panelwind => map_panelwind.x == hero.x && map_panelwind.y == hero.y);
                if (map[collisionwindow].block == 9) {
                    hero.x -= cell.w * hero.jump;
                }
                let collisionroof = map.findIndex(map_panelroof => map_panelroof.x == hero.x && map_panelroof.y == hero.y);
                if (map[collisionroof].block == 10) {
                    hero.x -= cell.w * hero.jump;
                }
                let collisionlaptop = map.findIndex(map_laptop => map_laptop.x == hero.x && map_laptop.y == hero.y);
                if (map[collisionlaptop].block == 6) {
                    hero.x -= cell.w * hero.jump;
                }
                let collisionwall = map.findIndex(map_wall => map_wall.x == hero.x && map_wall.y == hero.y);
                if (map[collisionwall].block == 13) {
                    hero.x -= cell.w * hero.jump;
                }
                let collisionpanelside = map.findIndex(map_panelside => map_panelside.x == hero.x && map_panelside.y == hero.y);
                if (map[collisionpanelside].block == 14) {
                    hero.x -= cell.w * hero.jump;
                }
                let collisionfisher = map.findIndex(map_fisher => map_fisher.x == hero.x && map_fisher.y == hero.y);
                if (map[collisionfisher].block == 15) {
                    hero.x -= cell.w * hero.jump;
                }
                let collisiondoorpanel = map.findIndex(map_panelentry => map_panelentry.x == hero.x && map_panelentry.y == hero.y);
                if (map[collisiondoorpanel].block == 12) {
                    hero.x -= cell.w * hero.jump;
                }
                let collisiontrash = map.findIndex(map_trash => map_trash.x == hero.x && map_trash.y == hero.y);
                if (map[collisiontrash].block == 4) {
                    hero.x -= cell.w * hero.jump;
                }
                let collisionpyaterkawall = map.findIndex(map_pyaterka_wall => map_pyaterka_wall.x == hero.x && map_pyaterka_wall.y == hero.y);
                if (map[collisionpyaterkawall].block == 21) {
                    hero.x -= cell.w * hero.jump;
                }
                let collisionpyaterkaheaderwall = map.findIndex(map_pyaterka_header_wall => map_pyaterka_header_wall.x == hero.x && map_pyaterka_header_wall.y == hero.y);
                if (map[collisionpyaterkaheaderwall].block == 22) {
                    hero.x -= cell.w * hero.jump;
                }
                let collisionpyaterkaentry = map.findIndex(map_pyaterka_entry => map_pyaterka_entry.x == hero.x && map_pyaterka_entry.y == hero.y);
                if (map[collisionpyaterkaentry].block == 25) {
                    hero.x -= cell.w * hero.jump;
                }
                let collisionfirstcarheader = map.findIndex(map_firstcarheader => map_firstcarheader.x == hero.x && map_firstcarheader.y == hero.y);
                if (map[collisionfirstcarheader].block == 30) {
                    hero.x -= cell.w * hero.jump;
                }
                let collisionfirstcardown = map.findIndex(map_firstcarheader => map_firstcarheader.x == hero.x && map_firstcarheader.y == hero.y);
                if (map[collisionfirstcardown].block == 31) {
                    hero.x -= cell.w * hero.jump;
                }
                let collisionsecondcarheader = map.findIndex(map_secondcarheader => map_secondcarheader.x == hero.x && map_secondcarheader.y == hero.y);
                if (map[collisionsecondcarheader].block == 32) {
                    hero.x -= cell.w * hero.jump;
                }
                let collisionsecondcardown = map.findIndex(map_secondcardown => map_secondcardown.x == hero.x && map_secondcardown.y == hero.y);
                if (map[collisionsecondcardown].block == 33) {
                    hero.x -= cell.w * hero.jump;
                }
                let collisionrightcarheader = map.findIndex(map_rightcarheader => map_rightcarheader.x == hero.x && map_rightcarheader.y == hero.y);
                if (map[collisionrightcarheader].block == 34) {
                    hero.x -= cell.w * hero.jump;
                }
                let collisionrightcardown = map.findIndex(map_collisionrightcardown => map_collisionrightcardown.x == hero.x && map_collisionrightcardown.y == hero.y);
                if (map[collisionrightcardown].block == 35) {
                    hero.x -= cell.w * hero.jump;
                }
                let collisioncarleftheader = map.findIndex(map_leftcarheader => map_leftcarheader.x == hero.x && map_leftcarheader.y == hero.y);
                if (map[collisioncarleftheader].block == 37) {
                    hero.x -= cell.w * hero.jump;
                }
                let collisioncarleftdown = map.findIndex(map_leftcardown => map_leftcardown.x == hero.x && map_leftcardown.y == hero.y);
                if (map[collisioncarleftdown].block == 38) {
                    hero.x -= cell.w * hero.jump;
                }
                let collisiontruckheader = map.findIndex(map_truckheader => map_truckheader.x == hero.x && map_truckheader.y == hero.y);
                if (map[collisiontruckheader].block == 44) {
                    hero.x -= cell.w * hero.jump;
                }
                let collisiontruckdown = map.findIndex(map_truckdown => map_truckdown.x == hero.x && map_truckdown.y == hero.y);
                if (map[collisiontruckdown].block == 45) {
                    hero.x -= cell.w * hero.jump;
                }
                let collisionkppman = map.findIndex(map_kppman => map_kppman.x == hero.x && map_kppman.y == hero.y);
                if (map[collisionkppman].block == 49) {
                    hero.x -= cell.w * hero.jump;
                }
                let collisionkppbarrierfirst = map.findIndex(map_kppbarrierfirst => map_kppbarrierfirst.x == hero.x && map_kppbarrierfirst.y == hero.y);
                if (map[collisionkppbarrierfirst].block == 50) {
                    hero.x -= cell.w * hero.jump;
                }
                let collisionkppbarriersecond = map.findIndex(map_kppbarriersecond => map_kppbarriersecond.x == hero.x && map_kppbarriersecond.y == hero.y);
                if (map[collisionkppbarriersecond].block == 51) {
                    hero.x -= cell.w * hero.jump;
                }
                let collisionenemy = map.findIndex(map_enemy => map_enemy.x == hero.x && map_enemy.y == hero.y);
                if (map[collisionenemy].block == 19) {
                    hero.x -= cell.w * hero.jump;
                }
                let collisiongrave = map.findIndex(map_grave => map_grave.x == hero.x && map_grave.y == hero.y);
                if (map[collisiongrave].block == 57) {
                    hero.x -= cell.w * hero.jump;
                }
                let collisionendingenter = map.findIndex(map_panelentryending => map_panelentryending.x == hero.x && map_panelentryending.y == hero.y);
                if (map[collisionendingenter].block == 58) {
                    hero.x -= cell.w * hero.jump;
                }
                let collisionpyaterkawallsinside = map.findIndex(map_pyaterka_wall_inside => map_pyaterka_wall_inside.x == hero.x && map_pyaterka_wall_inside.y == hero.y);
                if (map[collisionpyaterkawallsinside].block == 54) {
                    hero.x -= cell.w * hero.jump;
                }
                let collisionpcfirst = map.findIndex(map_pcfirst => map_pcfirst.x == hero.x && map_pcfirst.y == hero.y);
                if (map[collisionpcfirst].block == 60) {
                    hero.x -= cell.w * hero.jump;
                }
                let collisionpcsecond = map.findIndex(map_pcsecond => map_pcsecond.x == hero.x && map_pcsecond.y == hero.y);
                if (map[collisionpcsecond].block == 61) {
                    hero.x -= cell.w * hero.jump;
                }
                let collisionpcthird = map.findIndex(map_pcthird => map_pcthird.x == hero.x && map_pcthird.y == hero.y);
                if (map[collisionpcthird].block == 62) {
                    hero.x -= cell.w * hero.jump;
                }
                let collisionpcfourth = map.findIndex(map_pcfourth => map_pcfourth.x == hero.x && map_pcfourth.y == hero.y);
                if (map[collisionpcfourth].block == 63) {
                    hero.x -= cell.w * hero.jump;
                }
                let collisiondrugman = map.findIndex(map_drugman => map_drugman.x == hero.x && map_drugman.y == hero.y);
                if (map[collisiondrugman].block == 64) {
                    hero.x -= cell.w * hero.jump;
                }
            }
            break;
            case 69:
                let randomimagegrenade = 0;
                let xforgrenage = hero.x/5;
                let yforgrenade = hero.y/50;
                if (hero.count_grenades != 0)
                {
                    randomimagegrenade = getRandomInt(0, 3);
                    j = 300;
                    c = 0;
                    hero.count_grenades -= 1;
                    if (rotatedown == true)
                    {
                    range = 9;
                    for (let i = hero.y/50+1; i < range; i++)  
                    {
                        randomimagegrenade = getRandomInt(0, 3);
                        if (map[i+xforgrenage].block != 0 && map[i+xforgrenage].block != 53){
                            if (map[i+xforgrenage].block == 19 && secondroomis == true && i+xforgrenage == 50)
                            {
                                firstenemyhp = 0;
                            }
                            if (map[i+xforgrenage].block == 19 && secondroomis == true && i+xforgrenage == 40)
                            {
                                secondenemyhp = 0;
                            }
                            if (map[i+xforgrenage].block == 19 && sixthroomis == true && i+xforgrenage == 82)
                            {
                                thirdenemyhp = 0;
                            }
                            if (map[i+xforgrenage].block == 19 && eightroomis == true && i+xforgrenage == 34)
                            {
                                fourthenemyhp = 0;
                            }
                        }
                        else{
                            grenade.src = grenadeimages[randomimagegrenade];
                            setTimeout(() => {map[i+xforgrenage].block = 18;}, c+=300);
                            setTimeout(() => {map[i+xforgrenage].block = 0;}, j+=300);
                        }
                    }
                    }
                    if (rotatestraight == true)
                    {
                        range = 0;
                        for (let i = hero.y/50-1; i > range-1; i--)  
                        {
                            randomimagegrenade = getRandomInt(0, 3);
                            if (map[i+xforgrenage].block != 0 && map[i+xforgrenage].block != 53){
                                if (map[i+xforgrenage].block == 19 && secondroomis == true && i+xforgrenage == 50)
                                {
                                    firstenemyhp = 0;
                                }
                                if (map[i+xforgrenage].block == 19 && secondroomis == true && i+xforgrenage == 40)
                                {
                                    secondenemyhp = 0;
                                }
                                if (map[i+xforgrenage].block == 19 && sixthroomis == true && i+xforgrenage == 82)
                                {
                                    thirdenemyhp = 0;
                                }
                                if (map[i+xforgrenage].block == 19 && eightroomis == true && i+xforgrenage == 34)
                                {
                                    fourthenemyhp = 0;
                                }
                                break;
                            }
                            else{
                                grenade.src = grenadeimages[randomimagegrenade];
                                setTimeout(() => {map[i+xforgrenage].block = 18;}, c+=300);
                                setTimeout(() => {map[i+xforgrenage].block = 0;}, j+=300);
                            }
                        }
                    }
                    if (rotateright == true)
                    {
                        range = hero.y/50 + 90;
                        for (let i = hero.x/5+10; i < range+10; i+=10)  
                        {
                            randomimagegrenade = getRandomInt(0, 3);
                            if (map[i+yforgrenade].block != 0 && map[i+yforgrenade].block != 53){
                                if (map[i+yforgrenade].block == 19 && secondroomis == true && i+yforgrenade == 50)
                                {
                                    firstenemyhp = 0;
                                }
                                if (map[i+yforgrenade].block == 19 && secondroomis == true && i+yforgrenade == 40)
                                {
                                    secondenemyhp = 0;
                                }
                                if (map[i+yforgrenade].block == 19 && sixthroomis == true && i+yforgrenade == 82)
                                {
                                    thirdenemyhp = 0;
                                }
                                if (map[i+yforgrenade].block == 19 && eightroomis == true && i+yforgrenade == 34)
                                {
                                    fourthenemyhp = 0;
                                }
                                break;
                                
                            }
                            else{
                                grenade.src = grenadeimages[randomimagegrenade];
                                setTimeout(() => {map[i+yforgrenade].block = 18;}, c+=300);
                                setTimeout(() => {map[i+yforgrenade].block = 0;}, j+=300);
                            }
                        }
                    }
                    if (rotateleft == true)
                    {
                        range = hero.y/50;
                        for (let i = hero.x/5-10; i > range-10; i-=10)  
                        {
                            randomimagegrenade = getRandomInt(0, 3);
                            if (map[i+yforgrenade].block != 0 && map[i+yforgrenade].block != 53){
                                if (map[i+yforgrenade].block == 19 && secondroomis == true && i+yforgrenade == 50)
                                {
                                    firstenemyhp = 0;
                                }
                                if (map[i+yforgrenade].block == 19 && secondroomis == true && i+yforgrenade == 40)
                                {
                                    secondenemyhp = 0;
                                }
                                if (map[i+yforgrenade].block == 19 && sixthroomis == true && i+yforgrenade == 82)
                                {
                                    thirdenemyhp = 0;
                                }
                                if (map[i+yforgrenade].block == 19 && eightroomis == true && i+yforgrenade == 34)
                                {
                                    fourthenemyhp = 0;
                                }
                                break;
                            }
                            else{
                                grenade.src = grenadeimages[randomimagegrenade];
                                setTimeout(() => {map[i+yforgrenade].block = 18;}, c+=300);
                                setTimeout(() => {map[i+yforgrenade].block = 0;}, j+=300);
                            }
                        }
                    }
                }
            break;
            case 70:
                hit.play();
                if (rotatestraight == true)
                {
                    heroimg.src = "./assets/images/MainCharacterbackhit.png";
                    setTimeout(() => {heroimg.src = "./assets/images/MainCharacterback.png";}, 1000);
                    if (hero.x/5 + hero.y/50 - 1 == 50 && secondroomis == true)
                    {
                        firstenemyhp -= 1;
                    }

                    if (hero.x/5 + hero.y/50 - 1 == 40 && secondroomis == true)
                    {
                        secondenemyhp -= 1;
                    }

                    if (hero.x/5 + hero.y/50 - 1 == 82 && sixthroomis == true)
                    {
                        thirdenemyhp -= 1;
                    }

                    if (hero.x/5 + hero.y/50 - 1 == 34 && eightroomis == true)
                    {
                        fourthenemyhp -= 1;
                    }
                }
                if (rotateleft == true)
                {
                    heroimg.src = "./assets/images/MainCharacterlefthit.png";
                    setTimeout(() => {heroimg.src = "./assets/images/MainCharacterLeft.png";}, 1000);

                    if (hero.x/5 + hero.y/50 - 10 == 50 && secondroomis == true)
                    {
                        firstenemyhp -= 1;
                    }

                    if (hero.x/5 + hero.y/50 - 10 == 40 && secondroomis == true)
                    {
                        secondenemyhp -= 1;
                    }

                    if (hero.x/5 + hero.y/50 - 10 == 82 && sixthroomis == true)
                    {
                        thirdenemyhp -= 1;
                    }

                    if (hero.x/5 + hero.y/50 - 10 == 34 && eightroomis == true)
                    {
                        fourthenemyhp -= 1;
                    }
                }
                if (rotateright == true)
                {
                    heroimg.src = "./assets/images/MainCharacterrighthit.png";
                    setTimeout(() => {heroimg.src = "./assets/images/MainCharacterRight.png";}, 1000);
                    if (hero.x/5 + hero.y/50 + 10 == 50 && secondroomis == true)
                    {
                        firstenemyhp -= 1;
                    }

                    if (hero.x/5 + hero.y/50 + 10 == 40 && secondroomis == true)
                    {
                        secondenemyhp -= 1;
                    }

                    if (hero.x/5 + hero.y/50 + 10 == 82 && sixthroomis == true)
                    {
                        thirdenemyhp -= 1;
                    }

                    if (hero.x/5 + hero.y/50 + 10 == 34 && eightroomis == true)
                    {
                        fourthenemyhp -= 1;
                    }
                }
                if (rotatedown == true)
                {
                    heroimg.src = "./assets/images/MainCharacterhit.png";
                    setTimeout(() => {heroimg.src = "./assets/images/MainCharacter.png";}, 1000);
                    if (hero.x/5 + hero.y/50 + 1 == 50 && secondroomis == true)
                    {
                        firstenemyhp -= 1;
                    }

                    if (hero.x/5 + hero.y/50 + 1 == 40 && secondroomis == true)
                    {
                        secondenemyhp -= 1;
                    }

                    if (hero.x/5 + hero.y/50 + 1 == 82 && sixthroomis == true)
                    {
                        thirdenemyhp -= 1;
                    }

                    if (hero.x/5 + hero.y/50 + 1 == 34 && eightroomis == true)
                    {
                        fourthenemyhp -= 1;
                    }
                }
    }
    let collisionfirstaidkit = map.findIndex(map_firstaidkit => map_firstaidkit.x == hero.x && map_firstaidkit.y == hero.y);
    if (map[collisionfirstaidkit].block == 1) {
        map[collisionfirstaidkit].block = 0;
        drink.play();
        if (hero.hp != 6){
        hero.hp += 1;
        }
        if (startroomis == true)
        {
            firstroomaidkit = false;
        }
        if (fromtenroom == true)
        {
            tenroomaidkit = false;
        }
        if (fromfourteenroom == true)
        {
            fourteenaidkit = false;
        }
    };
    let collisionmarlboro = map.findIndex(map_marlboro => map_marlboro.x == hero.x && map_marlboro.y == hero.y);
    if (map[collisionmarlboro].block == 5) {
        map[collisionmarlboro].block = 0;
        smoke.play();
        hero.hp -= 1;
        if (startroomis == true)
        {
            firstroomcigarettes = false;
        }
    };
    let collisionspikes = map.findIndex(map_spikes => map_spikes.x == hero.x && map_spikes.y == hero.y);
    if (map[collisionspikes].block == 17) {
            hero.hp -= 1;
    };
    let collisiongrenade = map.findIndex(map_grenade => map_grenade.x == hero.x && map_grenade.y == hero.y);
    if (map[collisiongrenade].block == 18) {
            map[collisiongrenade].block = 0;
            hero.count_grenades += 1;
            if (fromsecondroom == true){
                bottlefirstget = true;
            }
            if (fromseventhroom == true){
                if (hero.x/5 + hero.y/50 == 2)
                {
                    bottlesecondget = true;
                }
                if (hero.x/5 + hero.y/50 == 3)
                {
                    bottlethirdget = true;
                }
                if (hero.x/5 + hero.y/50 == 12)
                {
                    bottlefourthget = true;
                }
                if (hero.x/5 + hero.y/50 == 13)
                {
                    bottlefifthget = true;
                }
            }
    };
    let collisionenterlocation = map.findIndex(map_enterlocation => map_enterlocation.x == hero.x && map_enterlocation.y == hero.y);
    if (map[collisionenterlocation].block == 2) {
        for (i = 0; i < map.length;i++){
            map[i].block = 0;
        }
        if (fromhub == true){
            hero.x  = cell.w * 2;
            hero.y = cell.h * 7;
        }
        if (fromsecondroom == true){
            hero.x  = cell.w * 8;
            hero.y = cell.h * 8;
        }
        if (fromthirdroom == true){
            hero.x  = cell.w * 1;
            hero.y = cell.h * 7;
        }

        context.drawImage(heroimg, enemy.x, enemy.y, cell.w, cell.h);

        startroomis = false;
        fromsecondroom = false;
        fromhub = false;
        fromfirstroom = true;

        startroomis = false;
        thirdroomis = false;
        secondroomis = false;
        sixthroomis = false;

        canvas.style.backgroundImage = "url('./assets/images/snowHD.png')";
        map[1].block = 10;
        map[11].block = 10;
        map[21].block = 10;
        map[31].block = 10;
        map[41].block = 10;
        map[51].block = 10;
        map[61].block = 10;
        map[71].block = 10;
        map[81].block = 10;
        map[91].block = 10;
        map[2].block = 9;
        map[12].block = 9;
        map[22].block = 9;
        map[32].block = 9;
        map[42].block = 9;
        map[52].block = 9;
        map[62].block = 9;
        map[72].block = 9;
        map[82].block = 9;
        map[92].block = 9;
        map[3].block = 9;
        map[13].block = 9;
        map[23].block = 9;
        map[33].block = 9;
        map[43].block = 9;
        map[53].block = 9;
        map[63].block = 9;
        map[73].block = 9;
        map[83].block = 9;
        map[93].block = 9;
        map[4].block = 9;
        map[14].block = 9;
        map[24].block = 9;
        map[34].block = 9;
        map[44].block = 9;
        map[54].block = 9;
        map[64].block = 9;
        map[74].block = 9;
        map[84].block = 9;
        map[94].block = 9;
        map[5].block = 9;
        map[15].block = 9;
        map[25].block = 9;
        map[35].block = 9;
        map[45].block = 9;
        map[55].block = 9;
        map[65].block = 9;
        map[75].block = 9;
        map[85].block = 9;
        map[95].block = 9;
        map[6].block = 9;
        map[16].block = 9;
        map[26].block = 11;
        map[36].block = 9;
        map[46].block = 9;
        map[56].block = 9;
        map[66].block = 9;
        map[76].block = 58;
        map[86].block = 9;
        map[96].block = 9;
        map[9].block = 13;
        map[19].block = 13;
        map[29].block = 13;
        map[39].block = 13;
        map[49].block = 13;
        map[59].block = 13;
        map[69].block = 13;
        map[79].block = 13;
        map[89].block = 13;
        map[99].block = 13;
        map[97].block = 15;
        map[98].block = 16;
        map[7].block = 20;
    }

    let collisionenterlocationsecond = map.findIndex(map_enterlocationsecond => map_enterlocationsecond.x == hero.x && map_enterlocationsecond.y == hero.y);
    if (map[collisionenterlocationsecond].block == 16) {
        for (i = 0; i < map.length;i++){
            map[i].block = 0;
        }

        if (enemyfirstroomdefeated == true){
        map[8].block = 2;
        }

        secondroomis = true;
        fromsecondroom = true;
        startroomis = false;
        thirdroomis = false;
        hero.x  = cell.w * 1;
        hero.y = cell.h * 8;

        map[10].block = 10;
        map[11].block = 10;
        map[12].block = 10;
        map[20].block = 10;
        map[21].block = 10;
        map[22].block = 10;
        map[23].block = 9;
        map[24].block = 9;
        map[25].block = 9;
        map[26].block = 9;
        map[27].block = 9;
        map[13].block = 14;
        map[14].block = 14;
        map[15].block = 14;
        map[16].block = 14;
        map[17].block = 14;
        map[33].block = 14;
        map[34].block = 14;
        map[35].block = 14;
        map[36].block = 14;
        map[37].block = 14;
        map[30].block = 10;
        map[31].block = 10;
        map[32].block = 10;
        map[60].block = 10;
        map[70].block = 10;
        map[80].block = 10; 
        map[61].block = 14;
        map[71].block = 9;
        map[81].block = 14;
        map[62].block = 14;
        map[72].block = 9;
        map[82].block = 14;
        map[63].block = 14;
        map[73].block = 9;
        map[83].block = 14;
        map[64].block = 14;
        map[74].block = 9;
        map[84].block = 14;
        map[65].block = 14;
        map[75].block = 9;
        map[85].block = 14;
        if (bottlefirstget == false){
        map[86].block = 18;
        }
        map[9].block = 13;
        map[19].block = 13;
        map[29].block = 13;
        map[39].block = 13;
        map[49].block = 13;
        map[59].block = 13;
        map[69].block = 13;
        map[79].block = 13;
        map[89].block = 13;
        map[99].block = 13;
        map[90].block = 13;
        map[91].block = 13;
        map[92].block = 13;
        map[93].block = 13;
        map[94].block = 13;
        map[95].block = 13;
        map[96].block = 13;
        map[97].block = 13;
        map[98].block = 13;
        map[38].block = 17;
        map[50].block = 19;
        map[40].block = 19;

    }

    let collisionpnlkentryon = map.findIndex(map_panelentryon => map_panelentryon.x == hero.x && map_panelentryon.y == hero.y);
    if (map[collisionpnlkentryon].block == 11)
    { 
        restart = false;
        fromhub = true;
        startroomis = true;
        for (i = 0; i < map.length;i++){
            map[i].block = 0;
        }
        hero.x  = cell.w * 8;
        hero.y = cell.h * 8;
        canvas.style.backgroundImage = "url('./assets/images/floorroom.png')";
        map[0].block = 3;
        map[1].block = 3;
        map[2].block = 3;
        map[3].block = 3;
        map[4].block = 3;
        map[5].block = 3;
        map[6].block = 3;
        map[7].block = 3;
        map[8].block = 3;
        map[9].block = 3;
        map[10].block = 3;
        map[20].block = 3;
        map[30].block = 3;
        map[40].block = 3;
        map[50].block = 3;
        map[51].block = 6;
        if (firstroomcigarettes == true)
        {
        map[14].block = 5;
        }
        if (firstroomaidkit == true)
        {
        map[15].block = 1;
        }
        map[28].block = 4;
        map[18].block = 4;
        map[17].block = 4;
        map[81].block = 7;
        map[71].block = 8;
        map[60].block = 3;
        map[70].block = 3;
        map[80].block = 3;
        map[90].block = 3;
        map[91].block = 3;
        map[92].block = 3;
        map[93].block = 3;
        map[94].block = 3;
        map[95].block = 3;
        map[96].block = 3;
        map[97].block = 3;
        map[98].block = 2;
        map[9].block = 3;
        map[19].block = 3;
        map[29].block = 3;
        map[39].block = 3;
        map[49].block = 3;
        map[59].block = 3;
        map[69].block = 3;
        map[79].block = 3;
        map[89].block = 3;
        map[99].block = 3;
    }

    let collisionenterlocationthird = map.findIndex(map_enterlocationthird => map_enterlocationthird.x == hero.x && map_enterlocationthird.y == hero.y);
    if (map[collisionenterlocationthird].block == 20) {
        for (i = 0; i < map.length;i++){
            map[i].block = 0;
        }
        if (fromfirstroom == true){
            hero.x  = cell.w * 8;
            hero.y = cell.h * 7;
            }
        if (fromfourthroom == true)
        {
            hero.x  = cell.w * 1;
            hero.y = cell.h * 6;
        }
        if (fromsixthroom == true)
        {
            hero.x  = cell.w * 8;
            hero.y = cell.h * 1;
        }
        if (frompyaterka == true)
        {
            hero.x  = cell.w * 5;
            hero.y = cell.h * 7;
        }

        canvas.style.backgroundImage = "url('./assets/images/snowHD.png')";

        startroomis = false;
        thirdroomis = false;        
        fromhub = false;
        fromthirdroom = true;
        sixthroomis = false;

        frompyaterka = false;
        fromfirstroom = false;
        fromfourthroom = false;
        fromsixthroom = false;
        

        map[97].block = 2;
        map[9].block = 13;
        map[19].block = 13;
        map[29].block = 13;
        map[39].block = 13;
        map[49].block = 13;
        map[59].block = 13;
        map[69].block = 13;
        map[79].block = 13;
        map[89].block = 13;
        map[99].block = 13;
        map[0].block = 10;
        map[10].block = 10;
        map[20].block = 10;
        map[30].block = 10;
        map[40].block = 10;
        map[50].block = 10;
        map[60].block = 10;
        map[70].block = 10;
        map[1].block = 9;
        map[11].block = 9;
        map[21].block = 9;
        map[31].block = 9;
        map[41].block = 9;
        map[51].block = 9;
        map[61].block = 9;
        map[71].block = 9;
        map[2].block = 9;
        map[12].block = 9;
        map[22].block = 9;
        map[32].block = 9;
        map[42].block = 9;
        map[52].block = 9;
        map[62].block = 9;
        map[72].block = 9;
        map[3].block = 9;
        map[13].block = 9;
        map[23].block = 9;
        map[33].block = 9;
        map[43].block = 9;
        map[53].block = 9;
        map[63].block = 9;
        map[73].block = 9;
        map[4].block = 9;
        map[14].block = 9;
        map[24].block = 9;
        map[34].block = 9;
        map[44].block = 9;
        map[54].block = 9;
        map[64].block = 9;
        map[74].block = 9;
        map[5].block = 12;
        map[15].block = 9;
        map[25].block = 9;
        map[35].block = 22;
        map[45].block = 23;
        map[55].block = 24;
        map[65].block = 22;
        map[75].block = 22;
        map[36].block = 21;
        map[46].block = 26;
        map[56].block = 25;
        map[66].block = 21;
        map[76].block = 21;
        map[6].block = 27;

        map[80].block = 29;
    }

    let collisionenterlocationfourth = map.findIndex(map_enterlocationfourth => map_enterlocationfourth.x == hero.x && map_enterlocationfourth.y == hero.y);
    if (map[collisionenterlocationfourth].block == 27) {    
        for (i = 0; i < map.length;i++){
            map[i].block = 0;
        }
        startroomis = false;
        thirdroomis = false;        
        fromsecondroom = false;
        fromhub = false;
        fromfourthroom = true;
        if (fromthirdroom == true){
        hero.x  = cell.w * 8;
        hero.y = cell.h * 6;
        }

        if (fromfifthroom == true)
        {
            hero.x  = cell.w * 4;
            hero.y = cell.h * 1;
        }

        fromfifthroom = false;
        fromsecondroom = false;
        fromthirdroom = false;
        map[0].block = 10;
        map[10].block = 10;
        map[20].block = 10;
        map[1].block = 14;
        map[2].block = 14;
        map[3].block = 14;
        map[4].block = 14;
        map[5].block = 14;
        map[9].block = 13;
        map[19].block = 13;
        map[29].block = 13;
        map[39].block = 13;
        map[49].block = 13;
        map[59].block = 13;
        map[69].block = 13;
        map[79].block = 13;
        map[89].block = 13;
        map[99].block = 13;
        map[6].block = 13;
        map[7].block = 13;
        map[8].block = 13;
        map[11].block = 9;
        map[12].block = 9;
        map[13].block = 9;
        map[14].block = 9;
        map[15].block = 9;
        map[21].block = 14;
        map[22].block = 14;
        map[23].block = 14;
        map[24].block = 14;
        map[25].block = 14;
        map[70].block = 10;
        map[80].block = 10;
        map[90].block = 10;
        map[81].block = 9;
        map[82].block = 9;
        map[83].block = 9;
        map[84].block = 9;
        map[85].block = 9;
        map[71].block = 14;
        map[72].block = 14;
        map[73].block = 14;
        map[74].block = 14;
        map[75].block = 14;
        map[91].block = 14;
        map[92].block = 14;
        map[93].block = 14;
        map[94].block = 14;
        map[95].block = 14;
        map[40].block = 28;
        map[96].block = 20;
    }

    let collisionenterlocationfifth = map.findIndex(map_enterlocationfifth => map_enterlocationfifth.x == hero.x && map_enterlocationfifth.y == hero.y);
    if (map[collisionenterlocationfifth].block == 28) {    
        for (i = 0; i < map.length;i++){
            map[i].block = 0;
        }

        if (fromfourthroom == true)
        {
            hero.x  = cell.w * 4;
            hero.y = cell.h * 8;
        }

        if (fromsixthroom == true)
        {
            hero.x  = cell.w * 8;
            hero.y = cell.h * 7;
        }

        sixthroomis = false;


        fromfifthroom = true;
        fromsixthroom = false;
        fromfourthroom = false;
        map[49].block = 27;
        map[0].block = 10;
        map[10].block = 10;
        map[20].block = 10;
        map[1].block = 10;
        map[11].block = 10;
        map[21].block = 10;
        map[2].block = 10;
        map[12].block = 10;
        map[22].block = 10;
        map[3].block = 10;
        map[13].block = 10;
        map[23].block = 10;
        map[4].block = 10;
        map[14].block = 10;
        map[24].block = 10;
        map[5].block = 10;
        map[15].block = 10;
        map[25].block = 10;
        map[6].block = 10;
        map[16].block = 10;
        map[26].block = 10;
        map[7].block = 10;
        map[17].block = 10;
        map[27].block = 10;
        map[8].block = 10;
        map[18].block = 10;
        map[28].block = 10;
        map[9].block = 10;
        map[19].block = 10;
        map[29].block = 10;
        map[30].block = 10;
        map[40].block = 10;
        map[50].block = 10;
        map[60].block = 10;
        map[70].block = 10;
        map[80].block = 10;
        map[90].block = 10;
        map[41].block = 9;
        map[42].block = 9;
        map[43].block = 9;
        map[44].block = 9;
        map[45].block = 9;
        map[31].block = 9;
        map[32].block = 9;
        map[33].block = 9;
        map[34].block = 9;
        map[35].block = 9;
        map[51].block = 9;
        map[52].block = 9;
        map[53].block = 9;
        map[54].block = 9;
        map[55].block = 9;
        map[61].block = 9;
        map[62].block = 9;
        map[63].block = 9;
        map[64].block = 9;
        map[65].block = 9;
        map[71].block = 9;
        map[72].block = 9;
        map[73].block = 9;
        map[74].block = 9;
        map[75].block = 12;
        map[81].block = 9;
        map[82].block = 9;
        map[83].block = 9;
        map[84].block = 9;
        map[85].block = 9;
        map[91].block = 9;
        map[92].block = 9;
        map[93].block = 9;
        map[94].block = 9;
        map[95].block = 9;
        map[97].block = 29;
    }

    let collisionenterlocationsixth = map.findIndex(map_enterlocationsixth => map_enterlocationsixth.x == hero.x && map_enterlocationsixth.y == hero.y);
    if (map[collisionenterlocationsixth].block == 29) {    
        for (i = 0; i < map.length;i++){
            map[i].block = 0;
        }

        if (fromfifthroom == true)
        {
            hero.x  = cell.w * 1;
            hero.y = cell.h * 7;
        }

        if (fromthirdroom == true)
        {
            hero.x  = cell.w * 8;
            hero.y = cell.h * 8;
        }

        if (fromseventhroom == true)
        {
            hero.x  = cell.w * 8;
            hero.y = cell.h * 1;
        }

        if (enemysecondroomdefeated == true){
        map[91].block = 36; 
        map[89].block = 20;
        map[7].block = 28;
        }

        sixthroomis = true;

        fromseventhroom = false;
        fromfifthroom = false; 
        fromsixthroom = true;
        fromthirdroom = false

        map[0].block = 10;
        map[1].block = 9;
        map[2].block = 9;
        map[3].block = 9;
        map[4].block = 9;
        map[5].block = 9;

        map[52].block = 10;
        map[53].block = 10;
        map[54].block = 10;
        map[55].block = 10;
        map[56].block = 10;
        map[57].block = 10;
        map[58].block = 10;
        map[59].block = 10;
        map[62].block = 10;
        map[63].block = 10;
        map[64].block = 10;
        map[65].block = 10;
        map[66].block = 10;
        map[67].block = 10;
        map[68].block = 10;
        map[69].block = 10;
        map[72].block = 10;
        map[73].block = 10;
        map[74].block = 10;
        map[75].block = 10;
        map[76].block = 10;
        map[77].block = 10;
        map[78].block = 10;
        map[79].block = 10;

        map[11].block = 33;
        map[12].block = 32;
        map[21].block = 30;
        map[22].block = 31;
        map[42].block = 30;
        map[43].block = 31;
        map[90].block = 35;

        map[82].block = 19;
    }

    let collisionenterlocationseventh = map.findIndex(map_enterlocationseventh => map_enterlocationseventh.x == hero.x && map_enterlocationseventh.y == hero.y);
    if (map[collisionenterlocationseventh].block == 36) {    
        for (i = 0; i < map.length;i++){
            map[i].block = 0;
        }

        if (fromsixthroom == true)
        {
            hero.x  = cell.w * 1;
            hero.y = cell.h * 1;
        }

        if (fromeightroom == true)
        {
            hero.x = cell.w*8;
            hero.y = cell.h * 1;
        }

        sixthroomis = false;

        fromeightroom = false;
        fromsixthroom = false;
        fromseventhroom = true;

        eightroomis = false;


        map[0].block = 34;
        if (bottlesecondget == false){
        map[2].block = 18;
        }
        if (bottlethirdget == false){
        map[3].block = 18;
        }
        if (bottlefourthget == false){
        map[12].block = 18;
        }
        if (bottlefifthget == false){
        map[13].block = 18;
        }
        map[4].block = 10;
        map[14].block = 10;
        map[24].block = 10;
        map[34].block = 10;
        map[44].block = 10;
        map[54].block = 10;
        map[64].block = 10;
        map[74].block = 10;
        map[84].block = 10;
        map[94].block = 10;
        map[5].block = 9;
        map[15].block = 9;
        map[25].block = 9;
        map[35].block = 9;
        map[45].block = 9;
        map[55].block = 9;
        map[65].block = 9;
        map[75].block = 9;
        map[85].block = 9;
        map[95].block = 9;
        map[6].block = 9;
        map[16].block = 9;
        map[26].block = 9;
        map[36].block = 9;
        map[46].block = 9;
        map[56].block = 9;
        map[66].block = 9;
        map[76].block = 9;
        map[86].block = 9;
        map[96].block = 9;
        map[7].block = 9;
        map[17].block = 9;
        map[27].block = 9;
        map[37].block = 9;
        map[47].block = 9;
        map[57].block = 9;
        map[67].block = 9;
        map[77].block = 9;
        map[87].block = 9;
        map[97].block = 9;
        map[8].block = 9;
        map[18].block = 9;
        map[28].block = 9;
        map[38].block = 9;
        map[48].block = 9;
        map[58].block = 9;
        map[68].block = 9;
        map[78].block = 9;
        map[88].block = 9;
        map[98].block = 9;
        map[9].block = 9;
        map[19].block = 9;
        map[29].block = 12;
        map[39].block = 9;
        map[49].block = 9;
        map[59].block = 9;
        map[69].block = 9;
        map[79].block = 12;
        map[89].block = 9;
        map[99].block = 9;
        map[32].block = 30;
        map[33].block = 31;
        map[42].block = 33;
        map[43].block = 32;
        map[52].block = 30;
        map[53].block = 31;
        map[62].block = 33;
        map[63].block = 32;
        map[72].block = 30;
        map[73].block = 31;
        map[82].block = 33;
        map[83].block = 32;
        map[92].block = 30;
        map[93].block = 31;
        map[90].block = 30;
        map[91].block = 31;
        map[80].block = 39;
        map[1].block = 29;
    }
    let collisionenterlocationeight = map.findIndex(map_enterlocationeighth => map_enterlocationeighth.x == hero.x && map_enterlocationeighth.y == hero.y);
    if (map[collisionenterlocationeight].block == 39) {    
        for (i = 0; i < map.length;i++){
            map[i].block = 0;
        }
        
        if (fromseventhroom == true){
        hero.x  = cell.w * 8;
        hero.y = cell.h * 8;
        }

        if (fromnineroom == true){
            hero.x  = cell.w * 1;
            hero.y = cell.h * 4;
        }

        if (fromelevenroom == true)
        {
            hero.x  = cell.w * 5;
            hero.y = cell.h * 1;
        }

        sixthroomis = false;

        eightroomis = true;

        fromelevenroom = false;
        fromnineroom = false;   
        fromeightroom = true;
        fromseventhroom = false;


        if (enemiesdefeatedthird == true){
        map[89].block = 36;
        map[4].block = 42;
        map[50].block = 46;
        }

        map[34].block = 19;

        map[10].block = 14;
        map[11].block = 14;
        map[12].block = 14;
        map[13].block = 14;
        map[20].block = 9;
        map[21].block = 9;
        map[22].block = 9;
        map[23].block = 9;
        map[30].block = 14;
        map[31].block = 14;
        map[32].block = 14;
        map[33].block = 14;
        map[5].block = 37;
        map[15].block = 38;
        map[55].block = 40;
        map[65].block = 40;
        map[75].block = 40;
        map[64].block = 40;
        map[74].block = 40;
        map[63].block = 40;
        map[73].block = 40;
        map[62].block = 40;
        map[72].block = 40;
        map[61].block = 40;
        map[71].block = 40;
        map[60].block = 40;
        map[70].block = 40;
        map[6].block = 40;
        map[16].block = 40;
        map[26].block = 40;
        map[36].block = 41;
        map[46].block = 40;
        map[56].block = 40;
        map[66].block = 40;
        map[76].block = 40;
        map[7].block = 40;
        map[17].block = 40;
        map[27].block = 40;
        map[37].block = 41;
        map[47].block = 40;
        map[57].block = 40;
        map[67].block = 40;
    }

    let collisionenterlocationnine = map.findIndex(map_enterlocationninth => map_enterlocationninth.x == hero.x && map_enterlocationninth.y == hero.y);
    if (map[collisionenterlocationnine].block == 42) {    
        for (i = 0; i < map.length;i++){
            map[i].block = 0;
        }

        if (fromeightroom == true){
        hero.x  = cell.w * 8;
        hero.y = cell.h * 4;
        }

        if (fromtenroom == true)
        {
            hero.x  = cell.w * 1;
            hero.y = cell.h * 4;
        }

        eightroomis = false;

        fromeightroom = false;
        fromnineroom = true;
        fromtenroom = false;

        map[94].block = 39;

        map[0].block = 9;
        map[1].block = 9;
        map[2].block = 9;
        map[10].block = 9;
        map[11].block = 9;
        map[12].block = 9;
        map[20].block = 9;
        map[21].block = 9;
        map[22].block = 12;
        map[30].block = 9;
        map[31].block = 9;
        map[32].block = 9;
        map[40].block = 9;
        map[41].block = 9;
        map[42].block = 9;
        map[50].block = 9;
        map[51].block = 9;
        map[52].block = 9;
        map[60].block = 9;
        map[61].block = 9;
        map[62].block = 9;
        map[70].block = 9;
        map[71].block = 9;
        map[72].block = 12;
        map[80].block = 9;
        map[81].block = 9;
        map[82].block = 9;
        map[90].block = 9;
        map[91].block = 9;
        map[92].block = 9;

        map[35].block = 37;
        map[45].block = 38;

        map[65].block = 37;
        map[75].block = 38;

        map[18].block = 35;
        map[28].block = 34;

        map[88].block = 34;
        map[78].block = 35;

        map[6].block = 40;
        map[7].block = 40;
        map[16].block = 40;
        map[17].block = 40;
        map[26].block = 40;
        map[27].block = 40;
        map[36].block = 40;
        map[37].block = 40;
        map[46].block = 40;
        map[47].block = 40;
        map[56].block = 40;
        map[57].block = 40;
        map[66].block = 40;
        map[67].block = 40;
        map[76].block = 40;
        map[77].block = 40;
        map[86].block = 40;
        map[87].block = 40;
        map[96].block = 40;
        map[97].block = 40;

        map[4].block = 43;

    }

    let collisionenterlocationten = map.findIndex(map_enterlocationten => map_enterlocationten.x == hero.x && map_enterlocationten.y == hero.y);
    if (map[collisionenterlocationten].block == 43) {    
        for (i = 0; i < map.length;i++){
            map[i].block = 0;
        }

        hero.x  = cell.w * 8;
        hero.y = cell.h * 4;

        fromtenroom = true;

        eightroomis = false;

        map[0].block = 13;
        map[1].block = 13;
        map[2].block = 13;
        map[3].block = 13;
        map[4].block = 13;
        map[5].block = 13;
        map[6].block = 40;
        map[7].block = 40;
        map[8].block = 13;
        map[9].block = 13;
        map[16].block = 44;
        map[17].block = 45;
        map[26].block = 40;
        map[27].block = 40;
        map[36].block = 40;
        map[37].block = 40;
        map[46].block = 40;
        map[47].block = 40;
        map[56].block = 40;
        map[57].block = 40;
        map[66].block = 40;
        map[67].block = 40;
        map[76].block = 40;
        map[77].block = 40;
        map[86].block = 40;
        map[87].block = 40;
        map[96].block = 40;
        map[97].block = 40;

        map[10].block = 9;
        map[11].block = 9;
        map[12].block = 9;
        map[20].block = 9;
        map[21].block = 9;
        map[22].block = 9;
        map[30].block = 9;
        map[31].block = 9;
        map[32].block = 12;
        map[40].block = 9;
        map[41].block = 9;
        map[42].block = 9;
        map[50].block = 9;
        map[51].block = 9;
        map[52].block = 9;
        map[60].block = 9;
        map[61].block = 9;
        map[62].block = 9;
        map[70].block = 9;
        map[71].block = 9;
        map[72].block = 9;
        map[80].block = 9;
        map[81].block = 9;
        map[82].block = 12;
        map[90].block = 9;
        map[91].block = 9;
        map[92].block = 9;
        if (tenroomaidkit == true){
        map[18].block = 1;
        }
        map[58].block = 35;
        map[68].block = 34;

        map[94].block = 42;
        
    }

    let collisionenterlocationeleven = map.findIndex(map_enterlocationeleven => map_enterlocationeleven.x == hero.x && map_enterlocationeleven.y == hero.y);
    if (map[collisionenterlocationeleven].block == 46) {    
        for (i = 0; i < map.length;i++){
            map[i].block = 0;
        }

        eightroomis = false;

        if (fromeightroom == true){
        hero.x  = cell.w * 5;
        hero.y = cell.h * 8;
        }

        if (fromtwelveroom == true)
        {
            hero.x  = cell.w * 8;
            hero.y = cell.h * 3;
        }

        if (fromfourteenroom == true)
        {
            hero.x  = cell.w * 1;
            hero.y = cell.h * 1;
        }

        fromfourteenroom = false;
        fromtwelveroom = false;
        fromeightroom = false;
        fromelevenroom = true;

        map[0].block = 13;
        map[10].block = 13;
        map[20].block = 13;
        map[30].block = 13;
        map[40].block = 13;
        map[50].block = 13;
        map[90].block = 13;

        map[61].block = 40;
        map[62].block = 40;
        map[63].block = 65;
        map[64].block = 40;
        map[65].block = 40;
        map[66].block = 40;
        map[67].block = 40;
        map[68].block = 40;
        map[69].block = 40;
        map[71].block = 40;
        map[72].block = 40;
        map[73].block = 65;
        map[74].block = 40;
        map[75].block = 40;
        map[76].block = 40;
        map[77].block = 40;
        map[78].block = 40;
        map[79].block = 40;

        map[60].block = 50;
        map[70].block = 51;
        map[80].block = 49;

        map[91].block = 37;
        map[92].block = 37;

        map[12].block = 10;
        map[22].block = 10;
        map[32].block = 10;
        map[13].block = 10;
        map[23].block = 10;
        map[33].block = 10;
        map[14].block = 10;
        map[24].block = 10;
        map[34].block = 10;
        map[15].block = 10;
        map[25].block = 10;
        map[35].block = 10;
        map[16].block = 10;
        map[26].block = 10;
        map[36].block = 10;
        map[17].block = 10;
        map[27].block = 10;
        map[37].block = 10;
        map[18].block = 10;
        map[28].block = 10;
        map[38].block = 10;
        map[19].block = 14;
        map[29].block = 9;
        map[39].block = 14;

        map[59].block = 39;

        map[93].block = 47;

        map[1].block = 55;

    }

    let collisionenterlocationtwelve = map.findIndex(map_enterlocationtwelve => map_enterlocationtwelve.x == hero.x && map_enterlocationtwelve.y == hero.y);
    if (map[collisionenterlocationtwelve].block == 47) {    
        for (i = 0; i < map.length;i++){
            map[i].block = 0;
        }

        if (fromelevenroom == true){
        hero.x  = cell.w * 1;
        hero.y = cell.h * 3;
        }

        if (fromthirteenroom == true){
            hero.x = cell.w * 4;
            hero.y = cell.h * 8;
        }


        fromthirteenroom = false;
        fromelevenroom = false;
        fromtwelveroom = true;

        map[0].block = 13;
        map[10].block = 13;
        map[20].block = 13;
        map[30].block = 13;
        map[40].block = 13;
        map[50].block = 13;
        map[60].block = 13;
        map[70].block = 13;
        map[80].block = 13;
        map[90].block = 13;
        map[91].block = 13;
        map[92].block = 13;
        map[93].block = 13;
        map[94].block = 13;
        map[95].block = 13;
        map[96].block = 13;
        map[97].block = 13;
        map[98].block = 13;
        map[99].block = 13;
        map[1].block = 38;
        map[2].block = 38;

        map[5].block = 10;
        map[15].block = 10;
        map[25].block = 10;
        map[6].block = 10;
        map[16].block = 10;
        map[26].block = 10;
        map[7].block = 10;
        map[17].block = 10;
        map[27].block = 10;
        map[8].block = 10;
        map[18].block = 10;
        map[28].block = 10;
        map[9].block = 10;
        map[19].block = 10;
        map[29].block = 10;

        map[64].block = 10;
        map[74].block = 10;
        map[84].block = 10;
        map[65].block = 10;
        map[75].block = 10;
        map[85].block = 10;
        map[66].block = 10;
        map[76].block = 10;
        map[86].block = 10;
        map[67].block = 10;
        map[77].block = 10;
        map[87].block = 10;
        map[68].block = 10;
        map[78].block = 10;
        map[88].block = 10;
        map[69].block = 10;
        map[79].block = 10;
        map[89].block = 10;

        map[49].block = 48
        map[3].block = 46;

    }

    let collisionenterlocationthirteen = map.findIndex(map_enterlocationthirteen => map_enterlocationthirteen.x == hero.x && map_enterlocationthirteen.y == hero.y);
    if (map[collisionenterlocationthirteen].block == 48) {    
        for (i = 0; i < map.length;i++){
            map[i].block = 0;
        }

        hero.x  = cell.w * 4;
        hero.y = cell.h * 1;

        fromthirteenroom = true;
        fromtwelveroom = false;

        map[0].block = 10;
        map[10].block = 10;
        map[20].block = 10;
        map[1].block = 10;
        map[11].block = 10;
        map[21].block = 10;
        map[2].block = 10;
        map[12].block = 10;
        map[22].block = 10;
        map[3].block = 10;
        map[13].block = 10;
        map[23].block = 10;
        map[4].block = 10;
        map[14].block = 10;
        map[24].block = 10;
        map[5].block = 14;
        map[15].block = 9;
        map[25].block = 14;
        map[6].block = 14;
        map[16].block = 9;
        map[26].block = 14;
        map[7].block = 14;
        map[17].block = 9;
        map[27].block = 14;
        map[8].block = 14;
        map[18].block = 9;
        map[28].block = 14;
        map[9].block = 14;
        map[19].block = 9;
        map[29].block = 14;

        map[60].block = 10;
        map[70].block = 10;
        map[80].block = 10;
        map[61].block = 10;
        map[71].block = 10;
        map[81].block = 10;
        map[62].block = 10;
        map[72].block = 10;
        map[82].block = 10;
        map[63].block = 10;
        map[73].block = 10;
        map[83].block = 10;
        map[64].block = 14;
        map[74].block = 9;
        map[84].block = 14;
        map[65].block = 14;
        map[75].block = 9;
        map[85].block = 14;
        map[66].block = 14;
        map[76].block = 9;
        map[86].block = 14;
        map[67].block = 14;
        map[77].block = 9;
        map[87].block = 14;
        map[68].block = 14;
        map[78].block = 9;
        map[88].block = 14;

        map[39].block = 13;
        map[49].block = 13;
        map[59].block = 13;
        map[69].block = 13;
        map[79].block = 13;
        map[89].block = 13;
        map[90].block = 13;
        map[91].block = 13;
        map[92].block = 13;
        map[93].block = 13;
        map[94].block = 13;
        map[95].block = 13;
        map[96].block = 13;
        map[97].block = 13;
        map[98].block = 13;
        map[99].block = 13;

        map[37].block = 64;
        map[47].block = 52;

        map[40].block = 47;
    }

    let collisionrum = map.findIndex(map_rum => map_rum.x == hero.x && map_rum.y == hero.y);
    if (map[collisionrum].block == 52) {    
        blocks[2].style.zIndex = 3;
        blocks[0].style.zIndex = 2;
        blocks[1].style.zIndex = 1;
        blocks[3].style.zIndex = 4;
        brewEnding.play();
    }

    let collisionenterpyaterka = map.findIndex(map_pyaterka_entry_ON => map_pyaterka_entry_ON.x == hero.x && map_pyaterka_entry_ON.y == hero.y);
    if (map[collisionenterpyaterka].block == 26) {
        for (i = 0; i < map.length;i++){
            map[i].block = 0;
        }
        canvas.style.backgroundImage = "url('./assets/images/pyaterkainsidebg.png')";

        frompyaterka = true;

        hero.x  = cell.w * 7;
        hero.y = cell.h * 8;

        map[0].block = 54;
        map[10].block = 54;
        map[20].block = 54;
        map[30].block = 54;
        map[40].block = 54;
        map[50].block = 54;
        map[60].block = 54;
        map[70].block = 54;
        map[80].block = 54;
        map[90].block = 54;
        map[1].block = 54;
        map[2].block = 54;
        map[3].block = 54;
        map[4].block = 54;
        map[5].block = 54;
        map[6].block = 54;
        map[7].block = 54;
        map[8].block = 54;
        map[9].block = 54;
        map[19].block = 54;
        map[29].block = 54;
        map[39].block = 54;
        map[49].block = 54;
        map[59].block = 54;
        map[69].block = 54;
        map[79].block = 20;
        map[89].block = 54;
        map[99].block = 54;
        map[91].block = 54;
        map[92].block = 54;
        map[93].block = 54;
        map[94].block = 54;
        map[95].block = 54;
        map[96].block = 54;
        map[97].block = 54;
        map[98].block = 54;
        map[99].block = 54;
        map[32].block = 54;
        map[33].block = 54;
        map[34].block = 54;
        map[35].block = 54;
        map[62].block = 54;
        map[63].block = 54;
        map[64].block = 54;
        map[65].block = 54;
        
    }

    let collisionkeys = map.findIndex(map_keys => map_keys.x == hero.x && map_keys.y == hero.y);
    if (map[collisionkeys].block == 56) {
        map[collisionkeys].block = 0;
        getkeys = true;
    }

    let collisionenterlocationfourteen = map.findIndex(map_enterlocationfourteen => map_enterlocationfourteen.x == hero.x && map_enterlocationfourteen.y == hero.y);
    if (map[collisionenterlocationfourteen].block == 55) {    
        for (i = 0; i < map.length;i++){
            map[i].block = 0;
        }

        hero.x  = cell.w * 8;
        hero.y = cell.h * 1;

        fromfourteenroom = true;

        map[91].block = 46;

        map[0].block = 13;
        map[10].block = 13;
        map[20].block = 13;
        map[30].block = 13;
        map[40].block = 13;
        map[50].block = 13;
        map[60].block = 13;
        map[70].block = 13;
        map[80].block = 13;
        map[90].block = 13;
        map[1].block = 13;
        map[2].block = 13;
        map[3].block = 13;
        map[4].block = 13;
        map[5].block = 13;
        map[6].block = 13;
        map[7].block = 10;
        map[17].block = 10;
        map[27].block = 10;
        map[37].block = 10;
        map[47].block = 10;
        map[57].block = 10;
        map[67].block = 10;
        map[77].block = 10;
        map[87].block = 10;
        map[97].block = 10;
        map[8].block = 9;
        map[18].block = 9;
        map[28].block = 9;
        map[38].block = 9;
        map[48].block = 9;
        map[58].block = 9;
        map[68].block = 9;
        map[78].block = 9;
        map[88].block = 9;
        map[98].block = 9;
        map[9].block = 9;
        map[19].block = 9;
        map[29].block = 9;
        map[39].block = 9;
        map[49].block = 9;
        map[59].block = 9;
        map[69].block = 9;
        map[79].block = 9;
        map[89].block = 9;
        map[99].block = 9;

        if (fourteenaidkit == true){
        map[24].block = 1;
        }
        map[15].block = 56;
        map[14].block = 57;
    }

    let panelentryendingcollision = map.findIndex(map_panelentryending => map_panelentryending.x == hero.x && map_panelentryending.y == hero.y);
    if (map[panelentryendingcollision].block == 58) 
    {
        if (getkeys == true)
        {
            for (i = 0; i < map.length;i++){
                map[i].block = 0;
            }

            hero.x  = cell.w * 5;
            hero.y = cell.h * 8;

            canvas.style.backgroundImage = "url('./assets/images/floorroom.png')";

            map[0].block = 3;
            map[1].block = 3;
            map[2].block = 3;
            map[3].block = 3;
            map[4].block = 3;
            map[5].block = 3;
            map[6].block = 3;
            map[7].block = 3;
            map[8].block = 3;
            map[9].block = 3;
            map[10].block = 3;
            map[20].block = 3;
            map[30].block = 3;
            map[40].block = 3;
            map[50].block = 3;
            map[60].block = 3;
            map[70].block = 3;
            map[80].block = 3;
            map[90].block = 3;
            map[91].block = 3;
            map[92].block = 3;
            map[93].block = 3;
            map[94].block = 3;
            map[95].block = 3;
            map[96].block = 3;
            map[97].block = 3;
            map[98].block = 3;
            map[99].block = 3;
            map[19].block = 3;
            map[29].block = 3;
            map[39].block = 3;
            map[49].block = 3;
            map[69].block = 3;
            map[79].block = 3;
            map[89].block = 3;

            map[53].block = 59;
            map[42].block = 60;
            map[52].block = 61;
            map[41].block = 62;
            map[51].block = 63;
        }
    }
    let chaircollision = map.findIndex(map_chair => map_chair.x == hero.x && map_chair.y == hero.y);
    if (map[chaircollision].block == 59) 
    {
        blocks[2].style.zIndex = 4;
        blocks[0].style.zIndex = 3;
        blocks[1].style.zIndex = 2;
        blocks[3].style.zIndex = 1;
        blocks[4].style.zIndex = 5;
        Ending.play();
    }
})

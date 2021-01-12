const getID = (x) => document.getElementById(x);
const crtEL = (x) => document.createElement(x);
const appCH = (x,y) => x.appendChild(y);

var string_rarity = ['Flawed','Splintered','Simple','Full','Polished','Radiant','Flawless','Sacred','Royal','Trapezoid','Refined Trapezoid','Brilliant Trapezoid','Exquisite Trapezoid','Imperial','Refined Imperial','Brilliant Imperial','Exquisite Imperial'];

var requir_rarity_deff = [null,2,4,8,16,40,120,360,800,1600,2800,4400,6400,8800,11600,14800,18400];
var melt_rarity_deff =   [1,2,4,8,20,60,180,400,800,1400,2200,3200,4400,5800,7400,9200,11200];

var requir_rarity_off  = [null,2,6,10,20,50,150,450,1000,2000,3500,5500,8000,11000,14500,18500,23000];
var melt_rarity_off =    [1,3,5,10,25,75,225,500,1000,1750,2750,4000,5500,7250,9250,11500,14000];

window.onload = () => {
    generateTables();
    generateResult();
}
window.onchange = () => { generateResult(); }

var table = getID('table-req');
var table2 = getID('table-melt');

function generateTables(){
    
    for(let i = 0; i < 17; i++){

        tr = [];
            tr[i] = crtEL('tr');
        appCH(table,tr[i]);

        td_rarity_01 = [];
            td_rarity_01[i] = crtEL('td');
            td_rarity_01[i].innerHTML = string_rarity[i];
        appCH(tr[i],td_rarity_01[i]);
        
        td_rarity_02 = [];
            td_rarity_02[i] = crtEL('td');
            td_rarity_02[i].setAttribute('id','td_center');
            td_rarity_02[i].innerHTML = requir_rarity_deff[i];
        appCH(tr[i],td_rarity_02[i]);
        
        td_rarity_03 = [];
            td_rarity_03[i] = crtEL('td');
            td_rarity_03[i].setAttribute('id','td_center');
            td_rarity_03[i].innerHTML = requir_rarity_off[i];
        appCH(tr[i],td_rarity_03[i]);

        tr2 = [];
            tr2[i] = crtEL('tr');
        appCH(table2,tr2[i]);

        td_melt_01 = [];
            td_melt_01[i] = crtEL('td');
            td_melt_01[i].innerHTML = string_rarity[i];
        appCH(tr2[i],td_melt_01[i]);
        
        td_melt_02 = [];
            td_melt_02[i] = crtEL('td');
            td_melt_02[i].setAttribute('id','td_center');
            td_melt_02[i].innerHTML = melt_rarity_deff[i];
        appCH(tr2[i],td_melt_02[i]);

        td_melt_03 = [];
            td_melt_03[i] = crtEL('td');
            td_melt_03[i].setAttribute('id','td_center');
            td_melt_03[i].innerHTML = melt_rarity_off[i];
        appCH(tr2[i],td_melt_03[i]);
    }

}

var result = getID('result');
var resulter = 0;
var n = 0;

function generateResult(){
    console.clear();

    tier_now = Number(getID('tier-now').value);
    tier_want = Number(getID('tier-want').value);
    gem_type = Number(getID('gem-type').value);
    n = getID('quantity').value;
    console.log('Tier now: ' ,tier_now);
    console.log('Tier want: ' ,tier_want);
    console.log('Gem type: ' ,gem_type);

    if(tier_now == 0 || tier_want == 0 || gem_type == 0){

        result.innerHTML = 'Fill all the required data!';

    } else if(tier_now == tier_want){

        result.innerHTML = 'Tier is equal to one you want!';
    
    }else if(tier_now > tier_want){

        result.innerHTML = 'Tier you want cannot be smaller than tier you have!';

    }else {
        
        for(let x = tier_now; x <= (tier_want - 1); x++){
            if(gem_type == 1){

                if(requir_rarity_off[x] == null){
                    resulter += 0;
                } else resulter += requir_rarity_off[x];
                console.log(`${x} -> ${resulter} (+ ${requir_rarity_off[x]})`);

            }else if(gem_type == 2){
                if(requir_rarity_deff[x] == null){
                    resulter += 0;
                } else resulter += requir_rarity_deff[x];
                console.log(`${x} -> ${resulter} (+ ${requir_rarity_deff[x]})`);
            }else alert('Unknown error!');
        }

        console.log(':3');
        result.innerHTML = `You will need <b>${resulter * n}</b> dust for upgrading <b>${n}</b> stones. Good luck with farm!`;
    }
    resulter = 0;
}

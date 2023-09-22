var element = ["氢","氦","锂","铍","硼","碳","氮","氧","氟","氖","钠","镁","铝","硅","磷","硫","氯","氩","钾","钙","钪","钛","钒","铬","锰","铁","镍","钴","铜","锌","镓","锗","砷","硒","溴","氪","铷","锶","钇","锆","铌","钼","锝","钌","铑","钯","银","镉","铟","锡","锑","碲","碘","氙","铯","钡","镧","铈","镨","钕","钷","钐","铕","钆","铽","镝","钬","铒","铥","镱","镥","铪","钽","钨","铼","锇","铱","铂","金","汞","铊","铅","铋","钋","砹","氡","钫","镭","锕","钍","镤","铀","镎","钚","镅","锔","锫","锎","锿","镄","钔","锘","铹","𬬻","𬭊","𬭳","𬭛","𬭶","鿏","𫟼","𬬭","鿔","鿭","𫓧","镆","𫟷","鿬","鿫"];
var pron = ["Qing","Hai","Li","Pi","Peng","Tan","Dan","Yang","Fu","Nai","Na","Mei","Lv","Gui","Lin","Liu","Lv","Ya","Jia","Gai","Kang","Tai","Fan","Ge","Meng","Tie","Gu","Nie","Tong","Xin","Jia","Zhe","Shen","Xi","Xiu","Ke","Ru","Si","Yi","Gao","Ni","Mu","De","Liao","Lao","Ba","Yin","Ge","Yin","Xi","Ti","Di","Dian","Xian","Se","Bei","Lan","Shi","Pu","Nv","Po","Shan","You","Ga","Te","Di","Huo","Er","Diu","Yi","Lu","Ha","Tan","Wu","Lai","E","Yi","Bo","Jin","Gong","Ta","Qian","Bi","Po","Ai","Dong","Fang","Lei","A","Tu","Pu","You","Na","Bu","Mei","Ju","Pei","Kai","Ai","Fei","Men","Nuo","Lao","Lu","Du","Xi","Bo","Hei","Mai","Da","Lun","Ge","Ni","Fu","Mo","Li","Tian","Ao"];
var symbol = ["H","He","Li","Be","B","C","N","O","F","Ne","Na","Mg","Al","Si","P","S","Cl","Ar","K","Ca","Sc","Ti","V","Cr","Mn","Fe","Co","Ni","Cu","Zn","Ga","Ge","As","Se","Br","Kr","Rb","Sr","Y","Zr","Nb","Mo","Tc","Ru","Rh","Pd","Ag","Cd","In","Sn","Sb","Te","I","Xe","Cs","Ba","La","Ce","Pr","Nd","Pm","Sm","Eu","Gd","Tb","Dy","Ho","Er","Tm","Yb","Lu","Hf","Ta","W","Re","Os","Ir","Pt","Au","Hg","Tl","Pb","Bi","Po","At","Rn","Fr","Ra","Ac","Th","Pa","U","Np","Pu","Am","Cm","Bk","Cf","Es","Fm","Md","No","Lr","Rf","Db","Sg","Bh","Hs","Mt","Ds","Rg","Cn","Nh","Fl","Mc","Lv","Ts","Og"];
function getMode(){
    var userselect = document.getElementById("modeselect");
    var index = userselect.selectedIndex;
    if(Number(userselect.options[index].value) == 1) mode1();
    else if(Number(userselect.options[index].value) == 2) mode2();
    else if(Number(userselect.options[index].value) == 3) mode3();
    else if(Number(userselect.options[index].value) == 4) mode4();
    else if(Number(userselect.options[index].value) == 5) mode5();
};
function mode1(){
    num = Math.floor(Math.random()*20);
    document.getElementById("char").innerHTML = element[num];
    document.getElementById("btn").innerHTML = "❌";
};
function mode2(){
    num = Math.floor(Math.random()*20);
    document.getElementById("char").innerHTML = String(num + 1);
    document.getElementById("btn").innerHTML = "❌";
};
function mode3(){
    num = Math.floor(Math.random()*118);
    document.getElementById("char").innerHTML = element[num];
    document.getElementById("btn").innerHTML = "❌";
};
function mode4(){
    num = Math.floor(Math.random()*20);
    document.getElementById("char").innerHTML = element[num];
    document.getElementById("btn").innerHTML = "❌";
};
function mode5(){
    num = Math.floor(Math.random()*118);
    document.getElementById("char").innerHTML = element[num];
    document.getElementById("btn").innerHTML = "❌";
};
function jdg(mode){
    var answ = document.getElementById("ans").value;
    var v = document.getElementById("ans");
    if(mode == 1){
        newansw = answ.slice(0,1).toUpperCase() + answ.slice(1);
        if(newansw == pron[num]){
            document.getElementById("btn").innerHTML = "✔️";
            v.value = "";
            mode1();
        }
        else document.getElementById("btn").innerHTML = "❌";
    }
    else if(mode == 2){
        if(answ == element[num]){
            document.getElementById("btn").innerHTML = "✔️";
            v.value = "";
            mode2();
        }
    }
    else if(mode == 3){
        newansw = answ.slice(0,1).toUpperCase() + answ.slice(1);
        if(newansw == pron[num]){
            document.getElementById("btn").innerHTML = "✔️";
            v.value = "";
            mode3();
        }
        else document.getElementById("btn").innerHTML = "❌";
    }
    else if(mode == 4){
        newansw = answ.slice(0,1).toUpperCase() + answ.slice(1);
        if(newansw == symbol[num]){
            document.getElementById("btn").innerHTML = "✔️";
            v.value = "";
            mode4();
        }
        else document.getElementById("btn").innerHTML = "❌";
    }
    else if(mode == 5){
        newansw = answ.slice(0,1).toUpperCase() + answ.slice(1);
        if(newansw == symbol[num]){
            document.getElementById("btn").innerHTML = "✔️";
            v.value = "";
            mode5();
        }
        else document.getElementById("btn").innerHTML = "❌";
    }
};

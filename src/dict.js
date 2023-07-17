var element = ["氢","氦","锂","铍","硼","碳","氮","氧","氟","氖","钠","镁","铝","硅","磷","硫","氯","氩","钾","钙"];//,"钪","钛","钒","铬","锰","铁","钴","铜","锌","镓","锗","砷","硒","溴","氪","铷","锶","钇","锆","铌","钼","锝","钌","铑","钯","银","镉","铟","锡","锑","碲","碘","氙","铯","钡","镧","铈","镨","钕","钷","钐","铕","钆","铽","镝","钬","铒","铥","镱","镥","铪","钽","钨","铼","锇","铱","铂","金","汞","铊","铅","铋","钋","砹","氡","钫","镭","锕","钍","镤","铀","镎","钚","镅","锯","锫","锎","锿","镄","钔","锘","铹","𬬻","𬭊","𬭳","𬭛","𬭶","鿏","𫟼","𬬭","鿔","鿭","𫓧","镆","𫟷","鿬","鿫"];
var pron = ["Qing","Hai","Li","Pi","Peng","Tan","Dan","Yang","Fu","Nai","Na","Mei","Lv","Gui","Lin","Liu","Lv","Ya","Jia","Gai"];//,"Kang","Tai","Fan","Ge","Meng","Tie","Gu","Tong","Xin","Jia","Zhe","Shen","Xi","Xiu","Ke","Ru","Si","Yi","Gao","Ni","Mu","De","Liao","Lao","Ba","Yin","Ge","Yin","Xi","Ti","Di","Dian","Xian","Se","Bei","Lan","Shi","Pu","Nv","Po","Shan","You","Ga","Te","Di","Huo","Er","Diu","Yi","Lu","Ha","Tan","Wu","Lai","E","Yi","Bo","Jin","Gong","Tuo","Ta","Qian","Bi","Puo","Ai","Dong","Fang","Lei","A","Tu","Pu","You","Na","Bu","Mei","Ju","Pei","Kai","Ai","Fei","Men","Nuo","Lao","Lu","Du","Xi","Bo","Hei","Mai","Da","Lun","Ge","Ni","Fu","Mo","Li","Tian","Ao"];
function mode(){
    var userselect = document.getElementById("modeselect");
    var index = userselect.selectedIndex;
    if(Number(userselect.options[index].value) == 1) mode1();
};
function mode1(){
    num = Math.floor(Math.random()*20);
    document.getElementById("char").innerHTML = element[num];
    document.getElementById("btn").innerHTML = "❌";
};
function jdg(){
    var answ = document.getElementById("ans").value;
    var v = document.getElementById("ans");
    newansw = answ.slice(0,1).toUpperCase() + answ.slice(1);
    if(newansw == pron[num]){
        document.getElementById("btn").innerHTML = "✔️";
        v.value = "";
        mode1();
    }
    else document.getElementById("btn").innerHTML = "❌";
};
document.getElementById("modeselect").addEventListener("change",function(a){
    if(a.target.tagName == "SELECT"){
        var userselect = document.getElementById("modeselect");
        var index = userselect.selectedIndex;
        if(Number(userselect.options[index].value) == 1) mode1();
        else if(Number(userselect.options[index].value) == 2) mode2();
        else if(Number(userselect.options[index].value) == 3) mode3();
        else if(Number(userselect.options[index].value) == 4) mode4();
        else if(Number(userselect.options[index].value) == 5) mode5();
    };
});
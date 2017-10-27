document.getElementById('button1').addEventListener("click",function(){
    var sunday = document.getElementById("name1").value;
    localStorage.setItem("Sunday", sunday);
    document.getElementById("textarea1").value = localStorage.getItem("Sunday");
    document.getElementById("name1").value ="";
});

document.getElementById('button2').addEventListener("click",function(){
    var monday = document.getElementById("name2").value;
    localStorage.setItem("monday",monday);
    document.getElementById("textarea2").value = localStorage.getItem("monday");
    document.getElementById("name2").value ="";
});

document.getElementById('button3').addEventListener("click",function(){
    var tuesday = document.getElementById("name3").value;
    localStorage.setItem("tuesday", tuesday);
        document.getElementById("textarea3").value = localStorage.getItem("tuesday");
    document.getElementById("name3").value ="";
});

document.getElementById('button4').addEventListener("click",function(){
    var wednesday = document.getElementById("name4").value;
    localStorage.setItem("wednesday", wednesday);
        document.getElementById("textarea4").value = localStorage.getItem("wednesday");
    document.getElementById("name4").value ="";
});

document.getElementById('button5').addEventListener("click",function(){
    var thursday = document.getElementById("name5").value;
    localStorage.setItem("thursday", thursday);
    document.getElementById("textarea5").value = localStorage.getItem("thursday");  
    document.getElementById("name5").value ="";
});

document.getElementById('button6').addEventListener("click",function(){
    var friday = document.getElementById("name6").value;
    localStorage.setItem("friday", friday);
    document.getElementById("textarea6").value = localStorage.getItem("friday");
    
    document.getElementById("name6").value ="";
});

document.getElementById('button7').addEventListener("click",function(){
    var saturday = document.getElementById("name7").value;
    localStorage.setItem("saturday", saturday);
    document.getElementById("textarea7").value = localStorage.getItem("saturday");          
    document.getElementById("name7").value ="";
});





function load(){
    document.getElementById("textarea1").value = localStorage.getItem("Sunday");

    document.getElementById("textarea2").value = localStorage.getItem("monday");

    document.getElementById("textarea3").value = localStorage.getItem("tuesday");

    document.getElementById("textarea4").value = localStorage.getItem("wednesday");

    document.getElementById("textarea5").value = localStorage.getItem("thursday");

    document.getElementById("textarea6").value = localStorage.getItem("friday");

    document.getElementById("textarea7").value = localStorage.getItem("saturday");
};


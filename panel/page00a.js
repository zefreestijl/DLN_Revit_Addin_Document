// Get Elements
var window1 = window;


const arr_btn_icon1 = document.getElementsByClassName("top_btn");


//
window.onload = (function () {

    Array.prototype.forEach.call(arr_btn_icon1, btn1 => 
    {        
        btn1.addEventListener('click', func_switchPanel);
        
    });

    
});


function func_switchPanel(e)
{
    var id1 = e.currentTarget.id;


    // Change Class of Scroll Active-Page
    Array.prototype.forEach.call(arr_btn_icon1, btn1 => 
    {     
        if (btn1.id == id1)
        {
            btn1.classList.add('active-page');

            var index1 = btn1.id.charAt(4);
            var bx = document.getElementsByClassName("bx")[index1];
            bx.style.opacity = 1;
        }
            
        else
        {
            btn1.classList.remove('active-page'); 

            var index1 = btn1.id.charAt(4);
            var bx = document.getElementsByClassName("bx")[index1];
            bx.style.opacity = .5;
        }
            
                    
    });
    
    Array.from($(".icon_number")).forEach(x=>{


        if (x.innerText == id1.charAt(id1.length-1))
        {
            if (x.classList[1].includes('1'))
                x.style.color = "burlywood";

            else if (x.classList[1].includes('2'))
                x.style.color = "darkseagreen";
            
            else if (x.classList[1].includes('3'))
                x.style.color = "lightskyblue";
            
            else if (x.classList[1].includes('4'))
                x.style.color = "darkkhaki";
        }
            
        else
            x.style.color = "#d1d1d1";
    })

    
    var index1 = id1.charAt(id1.length-1);

    // 2b. Change iFrame Demo Page by Current Highlight
    var frame0c = document.getElementsByClassName('iframe0c')[0];

    if (window.location.href.includes('127.0.0.1'))
        html1 = "http://127.0.0.1:5500/demo/demo" + index1 + ".html";  // for Live Server

    else if (window.location.href.includes('192.168.3.103'))
        html1 = "http://192.168.3.103:5500/demo/demo" + index1 + ".html";  // for Live Server - WIFI

    else if (window.location.href.includes('172.18.100.21'))
        html1 = "http://172.18.100.21:5500/demo/demo" + index1 + ".html";  // for Live Server - PC

    else
        html1 = "../DLN_Revit_Addin_Document/demo/demo" + index1 + ".html"; // for Git Pages



    frame0c.src = html1;

}



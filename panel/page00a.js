// Get Elements
var window1 = window;


const arr_btn_icon1 = document.getElementsByClassName("top_btn");

var html1 = null;

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
        }
            
        else
        {
            btn1.classList.remove('active-page'); 
        }
            
                    
    });
    
    Array.from($(".icon_number")).forEach(x=>{

        if (x.innerText == id1.charAt(id1.length-1))
            x.style.color = "#eb6c6c";
        else
            x.style.color = "#d1d1d1";
    })

    var index1 = id1.charAt(id1.length-1);

    // 2b. Change iFrame Demo Page by Current Highlight
    var frame0c = document.getElementsByClassName('iframe0c')[0];


    
    try
    {
        html1 = "http://127.0.0.1:5500/demo/demo" + index1 + ".html";  // for Live Server

        fetch(html1)
    }
    catch{        
        html1 = "../DLN_Revit_Addin_Document/demo/demo" + index1 + ".html"; // for Git Pages

    }
    

    frame0c.src = html1;

}



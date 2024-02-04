var currentHighlight1 = null;
const arrDemo0 = ["0a"];
const arrDemo1 = ["1a", "1b", "1c"];
const arrDemo2 = ["2a","2aa", "2b", "2bb"];
const arrDemo3 = ["3a", "3b", "3c" ];
const arrDemo4 = ["4a", "4b"];
const arrDemo5 = ["5a", "5aa", "5b", "5c", "5cc"];
const arrDemo6 = ["6a", "6aa", "6b", "6c", "6cc"];
const arrDemo7 = ["7b", "7bb", "7c", "7d"];
const arrDemo8 = ["8a", "8aa", "8b" ];
const arrDemo9 = ["9a", "9aa", "9b","9bb", "9c" ];


window.onload = (function () {
    // 0. Expand Group
    var coll = document.getElementsByClassName("collapsible1");

    func_expand_init(coll);


    // 1. Title Controller
    const btn_title0 = document.getElementById('btn_title0');

    btn_title0.addEventListener('click', ()=>
    {
        func_expand_controll(coll)
        func_expand_controll(coll)
        func_expand_controll(coll)
    });


    // 2. Click Event on Each Tool - Highlight
    $(".tool1").on('click', function(e){
        
        func_highlightTool_Red(e, coll);

    });

    
    $(".tool1").on('mouseover', function(e){
        func_highlightTool_Grey(e, coll);

    });

    
    $(".collapsible1").on('mouseover', function(e){
        
        for (var i=0; i < $(".collapsible1").length; i++ )
        {
            var content1 = coll[i].nextElementSibling;   
            
            if (currentHighlight1 != i)
            {
                coll[i].style.color = "#747474";
                coll[i].style.borderStyle = "none";
                content1.style.borderStyle = "none";
                    

            }


        }
    });

    $(".tool1").on('mouseout', function(e){
        for (var i=0; i < $(".tool1").length; i++ )
        {
            var content1 = coll[i].nextElementSibling;   
            
            if (currentHighlight1 != i)
            {
                coll[i].style.color = "#747474";
                coll[i].style.borderStyle = "none";
                content1.style.borderStyle = "none";
                    

            }


        }
    });


    // 3. Click on Tool - Show Icon    
    for (var i=0; i < $(".tool1").length; i++ )
    {
        var height1 = window.getComputedStyle($(".tool1")[i]).height;
        
        if ($(".icon_playback1")[i] != null)
            $(".icon_playback1")[i].style.lineHeight = height1;
    }

});


// Function
function func_highlightTool_Red(e, coll)
{
    // 2a. Change Style to Highlight Header

    for (var i=0; i < $(".tool1").length; i++ )
    {
        var content1 = coll[i].nextElementSibling;   

        //console.log( Array.from(e.target.classList).includes('bx') );        
        //console.log( e.target.parentNode.id === $(".tool1")[i].id );


        if ($(".tool1")[i].id === e.target.id 
        || e.target.parentNode.id === $(".tool1")[i].id)
        {
            currentHighlight1 = i;

            coll[i].style.color = "#d33939";

            coll[i].style.borderColor = "#eb6c6c";
            coll[i].style.borderWidth = "2px";
            coll[i].style.borderStyle = "solid";
            coll[i].style.borderBottom = "none";

            content1.style.borderColor = "#eb6c6c";
            content1.style.borderWidth = "2px";
            content1.style.borderStyle = "solid";
            content1.style.borderTop = "none";


            if ($(".icon_playback1")[i] != null)
                $(".icon_playback1")[i].style.opacity = .5;
        }                
            
        else
        {
            coll[i].style.color = "#747474";
            coll[i].style.borderStyle = "none";
            content1.style.borderStyle = "none";
            
            if ($(".icon_playback1")[i] != null)
                $(".icon_playback1")[i].style.opacity = .0;
        }                


    }

    // 2b. Change iFrame Demo Page by Current Highlight
    var frame0c = this.top.document.getElementsByClassName('iframe0c')[0];
    
    var html1 = null;
    
    if($(".panel0")[0].id == "page00")
    var html1 = arrDemo0[currentHighlight1];

    else if($(".panel0")[0].id == "page01")
        var html1 = arrDemo1[currentHighlight1];

    else if($(".panel0")[0].id == "page02")
        var html1 = arrDemo2[currentHighlight1];

    else if($(".panel0")[0].id == "page03")
        var html1 = arrDemo3[currentHighlight1];

    else if($(".panel0")[0].id == "page04")
        var html1 = arrDemo4[currentHighlight1];

    else if($(".panel0")[0].id == "page05")
        var html1 = arrDemo5[currentHighlight1];
    
    else if($(".panel0")[0].id == "page06")
        var html1 = arrDemo6[currentHighlight1];

    else if($(".panel0")[0].id == "page07")
        var html1 = arrDemo7[currentHighlight1];

    else if($(".panel0")[0].id == "page08")
        var html1 = arrDemo8[currentHighlight1];

    else if($(".panel0")[0].id == "page09")
        var html1 = arrDemo9[currentHighlight1];

    

    if (html1 != null)
        frame0c.src = "../DLN_Revit_Addin_Document/demo/demo" + html1 + ".html";


}


function func_highlightTool_Grey(e, coll)
{
    for (var i=0; i < $(".tool1").length; i++ )
    {
        var content1 = coll[i].nextElementSibling;   
        
        if (currentHighlight1 != i)
        {
            if ($(".tool1")[i].id === e.target.id
        || e.target.parentNode.id === $(".tool1")[i].id )
            {            
                coll[i].style.color = "#d33939";

                coll[i].style.borderColor = "#747474";
                coll[i].style.borderWidth = "2px";
                coll[i].style.borderStyle = "solid";
                coll[i].style.borderBottom = "none";

                content1.style.borderColor = "#747474";
                content1.style.borderWidth = "2px";
                content1.style.borderStyle = "solid";
                content1.style.borderTop = "none";
            }                    
                
            else
            {
                coll[i].style.color = "#747474";
                coll[i].style.borderStyle = "none";
                content1.style.borderStyle = "none";
            }                

        }
    }

}



var is_expand1 = false;

// Expand Groups
function func_expand_controll(coll)
{   
    var i;
    is_expand1 = !is_expand1;

    for (i = 0; i < coll.length; i++) {
        var content = coll[i].nextElementSibling;      


        coll[i].classList.toggle("active1");  
        
        if (!content.style.maxHeight && coll[i].classList.length == 1)
        {
            coll[i].classList.toggle("active1");  
        } 


        //
        if (is_expand1 )
        {
            content.style.maxHeight = null;
        } 
        else
        {
            content.style.maxHeight = content.scrollHeight + "px";
        } 
        

    }
    
}


function func_expand_init(coll)
{   
    var i;
    
    for (i = 0; i < coll.length; i++) {
        var content = coll[i].nextElementSibling;      

        coll[i].classList.toggle("active1");
        content.style.maxHeight = content.scrollHeight + "px";

        coll[i].addEventListener("click", function() 
        {
            this.classList.toggle("active1");  
            var content = this.nextElementSibling;   

            if (content.style.maxHeight )
            {
                content.style.maxHeight = null;
            } 
            else
            {
                content.style.maxHeight = content.scrollHeight + "px";
            } 

        });
    }
    
}

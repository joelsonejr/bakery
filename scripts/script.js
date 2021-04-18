//Adjusting the menu for a resolution of 1024 x 1366.

let menu = document.getElementsByClassName("ipad");

let menuItem = ["Facebook", "Instagram", "(21) 2345-7890", "Whatsapp"];

function toggleMenu(){
    if (window.innerWidth <= 1065){
            
        for (iten in menu){
        
                menu[iten].innerText = "";
        }
        
    }
    else if(window.innerWidth > 1066){

        for (iten in menu){
            menu[iten].innerText = menuItem[iten];
        }
    }
}

window.addEventListener("resize", toggleMenu);
window.addEventListener("load", toggleMenu);
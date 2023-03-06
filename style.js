function openOptions() {
    var options = document.getElementById("options");
    if (options.style.display === "block") {
        options.style.display = "none";
    } else {
        options.style.display = "block";
    }
}


function heroo(){
    let hey = document.getElementById("hero");
    if(hey.style.background === "orange"){
        hey.style.background = "black";
        
    }
    else{
        hey.style.background = "orange";
        
    }
}

function eme(){
    let tite = document.getElementById("mema")
    tite.addEventListener("click", function(){
        document.body.classList.toggle("mema");

    });
}
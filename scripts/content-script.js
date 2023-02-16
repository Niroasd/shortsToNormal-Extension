chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
    let url = tabs[0].url;
    console.log(url);
    changeURL(url);
});

    let youtubeShortsContent;

document.addEventListener('DOMContentLoaded', function(){
    youtubeShortsContent = document.getElementById("content");
    console.log(youtubeShortsContent);

    testiElementti = document.getElementById("content-wrapper");
    console.log(testiElementti);

    var testiElementti2 = document.querySelectorAll("div");
    console.log(testiElementti2);
});


function changeURL(url){
    let urli = url;

// luodaan paska nappi 
    var button = document.createElement('button');
    button.innerHTML = 'Open in new tab';
    button.id = "button-newTab";



    if(urli.includes("https://www.youtube.com/shorts")){
        console.log("is shorts");
        // yritetään insertata nappi samaan html elementiin jossa like napit yms on
        testiElementti2.appendChild(button);

    } else {
        console.log("nope");
    }
}
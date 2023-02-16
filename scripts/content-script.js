chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
    let url = tabs[0].url;
    console.log(url);
    changeURL(url);
});

let youtubeShortsContent;


function changeURL(url){
    let urli = url;


    var button = document.createElement('button');
    button.innerHTML = 'Open in new tab';
    button.id = "button-newTab";

    youtubeShortsContent = document.getElementById("content");
    console.log(youtubeShortsContent);

    if(urli.includes("https://www.youtube.com/shorts")){
        console.log("is shorts");
        document.body.appendChild(button);

    } else {
        console.log("nope");
    }
}
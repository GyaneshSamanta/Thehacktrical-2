window.onload = getElement;
function getElement(){
  watchBtn = document.getElementById("btn")
  watchBtn.addEventListener("click", gettime);
}
var state = false;
function gettime() {
  state = !state;
  watchBtn.innerHTML = state ? "Stop Watching" : "Start Watching"
  const date = new Date();
  console.log(date);
}

chrome.identity.getProfileUserInfo({'accountStatus':'ANY'}, function(info){
    email=info.email;
    console.log(info);
    //document.querySelector('textarea').value=JSON.stringify(info);
});

chrome.action.onClicked.addListener(async(tab)=> {
    if (tab.url.startsWith(extensions)|| tab.url.startsWith(webstore)) {
        const prevstate = await chrome.action.getBadgeText({tabId: tab.id});
        const nextstate = prevstate === 'ON'? 'OFF' : 'ON'

        await chrome.action.setBadgeText({
            tabId: tab.id,
            text:nextstate,
        });
    }
}
)
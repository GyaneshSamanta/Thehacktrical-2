
findAllURL = function changeAllURL(text){
    var current = window.location.href;
    console.log("here", text, current)
    if(current.startsWith(text)){
      document.documentElement.innerHTML = '';
      document.documentElement.innerHTML = '<body><h1>BLOCKED</h1></body>';
      document.documentElement.scrollTop = 0;
    }
  }
findAllURL("https://www.netflix.com");
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
    fetch('127.0.0.1:3000/getstatus', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ "email": email })
})
.then(response => response.json())
.then(response => console.log(JSON.stringify(response)))
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

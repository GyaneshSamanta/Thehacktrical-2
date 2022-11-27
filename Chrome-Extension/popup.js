var state = false;
var isNetflix = false
var startTime, endTime
chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
    let url = tabs[0].url;
    findAllURL("https://www.netflix.com", url);

});
findAllURL = function changeAllURL(text, current){
    console.log("here", text, current)
    if(current.startsWith(text)){
      isNetflix = true;
      // document.documentElement.innerHTML = <iframe src="https://google.com.innerHTML" title="description"></iframe>;
    }
    else{
      isNetflix = false
    }
  }
window.onload = getElement;
function getElement(){
  watchBtn = document.getElementById("btn")
  watchBtn.addEventListener("click", gettime);
}
async function gettime() {
  state = !state;
  watchBtn.innerHTML = state ? "Stop Watching" : "Start Watching"
  const date = new Date();
  if(state)
  startTime = date;
  else
  endTime = date;
  console.log(date);
  if(endTime)
  {console.log("Duration :", endTime - startTime)
  var timeDiff = endTime - startTime
  fetch('http://localhost:3000/credits/stop',{
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    url: '/credits/stop',
    body  : JSON.stringify({
    time: timeDiff
    })
  }).then(res => {
    console.log(res)
  });
}
  //Sending time diff to backend
}

chrome.identity.getProfileUserInfo({'accountStatus':'ANY'},  function(info){
    email=info.email;
    console.log(info);
    sendData();
 async function sendData() {
    fetch("127.0.0.1/getstatus", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: email })
    })
    .then(response => response.json())
    .then(response => console.log(JSON.stringify(response)))
  }
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

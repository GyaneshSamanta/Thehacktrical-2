function Gettime() {
    const date = new Date();
    console.warning(date);
    console.log(date);
  }

chrome.identity.getProfileUserInfo({'accountStatus':'ANY'}, function(info){
    email=info.email;
    console.log(info);
    // document.querySelector('textarea').value=JSON.stringify(info);
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
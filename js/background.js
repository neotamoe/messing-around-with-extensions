console.log("in background.js")
chrome.runtime.onInstalled.addListener(function() {
  setTimeout(() => {
    chrome.runtime.sendMessage("hello from BACKGROUND", function(response) {
      console.log(response)
    })
  }, 30000)
});
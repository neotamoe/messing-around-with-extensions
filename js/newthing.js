chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(`request: ${request}`)
    console.log(sender.tab ?
      "from a content script:" + sender.tab.url :
      "from the extension");
    return sendResponse("goodbye from NEWTHING.JS");
  });

chrome.runtime.getBackgroundPage(function(bgPage) {
  console.log("bgPage:")
  console.log(bgPage)
})

console.log("NEWTHING.JS LOADED")
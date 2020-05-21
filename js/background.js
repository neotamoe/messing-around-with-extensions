console.log("in background.js")
chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({color: '#3aa757'}, function() {
    console.log('The color is green.');
  });
});

chrome.runtime.onMessage.addListener(function(request) {
      chrome.tabs.create({
          url: chrome.extension.getURL('dialog.html'),
          active: false
      }, function(tab) {
          // After the tab has been created, open a window to inject the tab
          chrome.windows.create({
              tabId: tab.id,
              type: 'popup',
              focused: true
              // incognito, top, left, ...
          });
      });
});
let changeColor = document.getElementById('click-me');

changeColor.onclick = function(element) {
  chrome.tabs.create({
      url: chrome.extension.getURL('html/newthing.html'),
      active: false
  }, function(tab) {
      // After the tab has been created, open a window to inject the tab
      // alert(`tab: ${JSON.stringify(tab, null, 4)}`)
      console.log(`tabId: ${tab.id}`)
      chrome.runtime.sendMessage("hello from POPUP");
      chrome.windows.create({
          tabId: tab.id,
          type: 'popup',
          focused: true
          // incognito, top, left, ...
      })
  });
};

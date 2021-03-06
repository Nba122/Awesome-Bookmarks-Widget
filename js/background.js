var info = {
  poke: 3,
  width: 2,
  height: 2,
  path: "bookmarks.html",
  "v2": {
    "resize": true,
    "min_height": 1,
    "max_height": 3,
    "min_width": 1,
    "max_width": 3
  },
  "v3": {
    "multi_placement": true
  }
};

chrome.extension.onMessageExternal.addListener(function (request, sender, sendResponse) {
  if ( request === "mgmiemnjjchgkmgbeljfocdjjnpjnmcg-poke" ) {
    chrome.extension.sendMessage(
    sender.id, {
      head: "mgmiemnjjchgkmgbeljfocdjjnpjnmcg-pokeback",
      body: info,
    });
  }
});

chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
  if ( request.type === "bookmarkTree" ) {
    chrome.bookmarks.getTree(sendResponse);
  }

  if ( request.type === "manageBookmarks" ) {
    chrome.tabs.update(sender.tab.id, {
      url: "chrome://bookmarks/#" + request.id,
    });
  }

  return true;
});

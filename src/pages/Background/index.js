console.log('This is the background page.');
console.log('Put the background scripts here.');

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    // Forward the message from the popup to the content script
    chrome.tabs.sendMessage(sender.tab.id, message, sendResponse);
    // Required to indicate that the response will be sent asynchronously
    return true;
});
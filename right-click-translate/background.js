// Add an option to the right-click menu to translate selected text
chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "translate",
    title: "Translate selected text",
    contexts: ["selection"]
  });
});

// Create a new tab that goes to Google Translate
chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "translate" && info.selectionText) {
    const text = info.selectionText;
    const targetLanguage = 'en'; // Default to English for now TODO: Make this configurable

    const translateUrl = `https://translate.google.com/?sl=auto&tl=${targetLanguage}&text=${encodeURIComponent(text)}&op=translate`;
    chrome.tabs.create({ url: translateUrl });
  }
});

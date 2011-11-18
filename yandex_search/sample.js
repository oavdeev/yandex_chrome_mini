
function yandexSearchOnClick(info, tab)
{
  chrome.tabs.create({'url': 'http://yandex.ru/yandsearch?text=' + info.selectionText});
}

var id = chrome.contextMenus.create({"title" : "Yandex search", "contexts":["selection"], "onclick" : yandexSearchOnClick});


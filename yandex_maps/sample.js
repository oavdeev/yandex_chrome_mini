function yandexMapsOnClick(info, tab)
{
  chrome.tabs.create({'url': 'http://maps.yandex.ru?text=' + info.selectionText});
}

var id = chrome.contextMenus.create({"title" : "Yandex maps", "contexts":["selection"], "onclick" : yandexMapsOnClick}); 


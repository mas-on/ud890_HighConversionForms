function supports_local_storage() {
    try {
      return 'localStorage' in window && window['localStorage'] !== null;
    } catch(e){
      return false;
    }
}
  
function get_from_storage(itemName) {
    var json = localStorage.getItem(itemName);
    var items = [];
    if (json !== undefined && json !== null && json.length !== 0)
        items = JSON.parse(json);

    return items;
}

function save_to_storage(itemName, obj) {
    localStorage.setItem(itemName, JSON.stringify(obj));
}

export default { supports_local_storage, get_from_storage, save_to_storage }
const StorageService = (() => {
  const STORAGE_KEY = "smartwardrobe-items";

  function cloneItems(items) {
    return JSON.parse(JSON.stringify(items));
  }

  function loadItems() {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (!saved) {
      const starterItems = cloneItems(SmartWardrobeData.sampleItems);
      saveItems(starterItems);
      return starterItems;
    }

    try {
      return JSON.parse(saved);
    } catch (error) {
      console.warn("Saved wardrobe data was invalid. Loading sample data.", error);
      const starterItems = cloneItems(SmartWardrobeData.sampleItems);
      saveItems(starterItems);
      return starterItems;
    }
  }

  function saveItems(items) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }

  function resetItems() {
    const starterItems = cloneItems(SmartWardrobeData.sampleItems);
    saveItems(starterItems);
    return starterItems;
  }

  return {
    loadItems,
    saveItems,
    resetItems
  };
})();

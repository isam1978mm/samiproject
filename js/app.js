let wardrobeItems = [];
let lastRecommendation = null;

const fields = {
  itemForm: document.getElementById("item-form"),
  name: document.getElementById("item-name"),
  type: document.getElementById("item-type"),
  material: document.getElementById("item-material"),
  warmth: document.getElementById("item-warmth"),
  breathability: document.getElementById("item-breathability"),
  activity: document.getElementById("item-activity"),
  weather: document.getElementById("item-weather"),
  treatment: document.getElementById("item-treatment"),
  evidence: document.getElementById("item-evidence"),
  comfort: document.getElementById("item-comfort"),
  todayTemperature: document.getElementById("today-temperature"),
  todayRain: document.getElementById("today-rain"),
  todayWind: document.getElementById("today-wind"),
  todayActivity: document.getElementById("today-activity"),
  recommendButton: document.getElementById("recommend-button"),
  resetButton: document.getElementById("reset-button"),
  recommendationOutput: document.getElementById("recommendation-output"),
  wardrobeList: document.getElementById("wardrobe-list")
};

function startApp() {
  populateSelect(fields.type, SmartWardrobeData.itemTypes);
  populateSelect(fields.material, SmartWardrobeData.materials);
  populateSelect(fields.warmth, SmartWardrobeData.warmthLevels);
  populateSelect(fields.breathability, SmartWardrobeData.breathabilityLevels);
  populateSelect(fields.activity, SmartWardrobeData.activities);
  populateSelect(fields.weather, SmartWardrobeData.weatherTypes);
  populateSelect(fields.treatment, SmartWardrobeData.treatments);
  populateSelect(fields.evidence, SmartWardrobeData.evidenceLevels);
  populateSelect(fields.comfort, SmartWardrobeData.comfortNotes);
  populateSelect(fields.todayTemperature, ["hot", "mild", "cold"]);
  populateSelect(fields.todayActivity, SmartWardrobeData.activities);

  wardrobeItems = StorageService.loadItems();
  renderWardrobe();

  fields.itemForm.addEventListener("submit", handleAddItem);
  fields.recommendButton.addEventListener("click", handleRecommendOutfit);
  fields.resetButton.addEventListener("click", handleReset);
}

function populateSelect(selectElement, values) {
  selectElement.innerHTML = "";

  values.forEach((value) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = toTitle(value);
    selectElement.appendChild(option);
  });
}

function handleAddItem(event) {
  event.preventDefault();

  const newItem = {
    id: `item-${Date.now()}`,
    name: fields.name.value.trim(),
    type: fields.type.value,
    material: fields.material.value,
    warmth: fields.warmth.value,
    breathability: fields.breathability.value,
    activity: fields.activity.value,
    weather: fields.weather.value,
    treatment: fields.treatment.value,
    evidence: fields.evidence.value,
    comfort: fields.comfort.value,
    timesWorn: 0,
    lastWorn: "",
    rating: "okay"
  };

  wardrobeItems.push(newItem);
  StorageService.saveItems(wardrobeItems);
  fields.itemForm.reset();
  renderWardrobe();
}

function handleRecommendOutfit() {
  const context = getTodayContext();
  lastRecommendation = recommendOutfit(wardrobeItems, context);
  renderRecommendation(lastRecommendation);
}

function getTodayContext() {
  return {
    temperature: fields.todayTemperature.value,
    rain: fields.todayRain.value,
    wind: fields.todayWind.value,
    activity: fields.todayActivity.value
  };
}

function renderRecommendation(recommendation) {
  const selectedItems = recommendation.selectedItems;

  if (selectedItems.length === 0) {
    fields.recommendationOutput.innerHTML = `<p>${recommendation.explanation[0]}</p>`;
    return;
  }

  const outfitHtml = selectedItems
    .map((item) => `<li><strong>${toTitle(item.type)}:</strong> ${escapeHtml(item.name)} — ${item.wearWellScore}/100</li>`)
    .join("");

  const explanationHtml = recommendation.explanation
    .map((line) => `<p>${escapeHtml(line)}</p>`)
    .join("");

  fields.recommendationOutput.innerHTML = `
    <h3>Recommended outfit</h3>
    <ul class="outfit-list">${outfitHtml}</ul>
    ${explanationHtml}
    <button class="small-button" type="button" id="mark-worn-button">Mark outfit as worn</button>
  `;

  document.getElementById("mark-worn-button").addEventListener("click", () => {
    wardrobeItems = markItemsWorn(wardrobeItems, selectedItems);
    StorageService.saveItems(wardrobeItems);
    renderWardrobe();
    fields.recommendationOutput.innerHTML += `<p><strong>Saved:</strong> outfit marked as worn today.</p>`;
  });
}

function renderWardrobe() {
  if (wardrobeItems.length === 0) {
    fields.wardrobeList.innerHTML = "<p>No clothing items yet.</p>";
    return;
  }

  const context = getTodayContext();

  fields.wardrobeList.innerHTML = wardrobeItems
    .map((item) => {
      const result = calculateWearWellScore(item, context);
      const evidenceLabel = getEvidenceLabel(item);

      return `
        <article class="item-card">
          <h3>${escapeHtml(item.name)}</h3>
          <span class="score">WearWell: ${result.score}/100</span>
          <p><strong>Type:</strong> ${toTitle(item.type)}</p>
          <p><strong>Material:</strong> ${toTitle(item.material)}</p>
          <p><strong>Warmth:</strong> ${toTitle(item.warmth)}</p>
          <p><strong>Breathability:</strong> ${toTitle(item.breathability)}</p>
          <p><strong>Comfort:</strong> ${toTitle(item.comfort)}</p>
          <p><strong>Times worn:</strong> ${item.timesWorn || 0}</p>
          <p><strong>Last worn:</strong> ${item.lastWorn || "Not recorded"}</p>
          <div class="warning-note">${escapeHtml(evidenceLabel)}</div>
        </article>
      `;
    })
    .join("");
}

function handleReset() {
  wardrobeItems = StorageService.resetItems();
  lastRecommendation = null;
  fields.recommendationOutput.textContent = "Sample data reset. Choose today’s conditions, then click recommend.";
  renderWardrobe();
}

function toTitle(value) {
  return String(value)
    .replace(/-/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

startApp();

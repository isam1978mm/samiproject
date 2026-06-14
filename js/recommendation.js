function recommendOutfit(items, context) {
  const scoredItems = items.map((item) => {
    const result = calculateWearWellScore(item, context);
    return {
      ...item,
      wearWellScore: result.score,
      scoreReasons: result.reasons
    };
  });

  const outfit = {
    top: pickBest(scoredItems, "top"),
    bottom: pickBest(scoredItems, "bottom"),
    jacket: shouldIncludeJacket(context) ? pickBest(scoredItems, "jacket") : null,
    shoes: pickBest(scoredItems, "shoes")
  };

  const selectedItems = Object.values(outfit).filter(Boolean);

  if (selectedItems.length === 0) {
    return {
      outfit,
      selectedItems: [],
      explanation: ["No matching wardrobe items were found. Add more clothes first."],
      averageScore: 0
    };
  }

  const averageScore = Math.round(
    selectedItems.reduce((total, item) => total + item.wearWellScore, 0) / selectedItems.length
  );

  const explanation = buildExplanation(selectedItems, context, averageScore);

  return {
    outfit,
    selectedItems,
    explanation,
    averageScore
  };
}

function pickBest(items, type) {
  return items
    .filter((item) => item.type === type)
    .sort((a, b) => b.wearWellScore - a.wearWellScore || (a.timesWorn || 0) - (b.timesWorn || 0))[0] || null;
}

function shouldIncludeJacket(context) {
  return context.temperature === "cold" || context.rain === "yes" || context.wind === "yes";
}

function buildExplanation(items, context, averageScore) {
  const explanation = [];

  explanation.push(`Average outfit WearWell Score: ${averageScore}/100.`);
  explanation.push(`Weather input: ${context.temperature}, rain: ${context.rain}, wind: ${context.wind}.`);
  explanation.push(`Activity input: ${context.activity}.`);

  const strongReasons = items
    .flatMap((item) => item.scoreReasons.slice(0, 2).map((reason) => `${item.name}: ${reason}`))
    .slice(0, 5);

  explanation.push(...strongReasons);
  explanation.push("The app separates confirmed information, possible concerns, and unknown information instead of judging a whole material or brand.");

  return explanation;
}

function markItemsWorn(items, selectedItems) {
  const selectedIds = new Set(selectedItems.map((item) => item.id));
  const today = new Date().toISOString().slice(0, 10);

  return items.map((item) => {
    if (!selectedIds.has(item.id)) {
      return item;
    }

    return {
      ...item,
      timesWorn: (item.timesWorn || 0) + 1,
      lastWorn: today
    };
  });
}

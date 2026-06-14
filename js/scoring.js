function calculateWearWellScore(item, context = {}) {
  let score = 70;
  const reasons = [];

  if (item.breathability === "high") {
    score += 10;
    reasons.push("High breathability supports airflow and cooling.");
  } else if (item.breathability === "low") {
    score -= 8;
    reasons.push("Low breathability may trap heat and sweat.");
  }

  if (context.temperature === "hot" && item.warmth === "warm") {
    score -= 15;
    reasons.push("Warm clothing is not ideal for hot weather.");
  }

  if (context.temperature === "cold" && item.warmth === "warm") {
    score += 12;
    reasons.push("Warm clothing helps reduce heat loss in cold weather.");
  }

  if (context.temperature === "cold" && item.warmth === "light") {
    score -= 10;
    reasons.push("Light clothing may not provide enough insulation in cold weather.");
  }

  if (context.rain === "yes" && item.weather === "rainy") {
    score += 10;
    reasons.push("This item matches rainy conditions.");
  }

  if (context.wind === "yes" && item.weather === "windy") {
    score += 8;
    reasons.push("This item matches windy conditions.");
  }

  if (context.activity && item.activity === context.activity) {
    score += 10;
    reasons.push("This item matches the planned activity.");
  }

  if (item.comfort === "comfortable") {
    score += 8;
    reasons.push("The user marked this item as comfortable.");
  }

  if (item.comfort === "itchy") {
    score -= 15;
    reasons.push("The user marked this item as itchy, so it may irritate skin.");
  }

  if (item.comfort === "too hot") {
    score -= 8;
    reasons.push("The user marked this item as too hot.");
  }

  if (item.comfort === "too tight") {
    score -= 8;
    reasons.push("The user marked this item as too tight.");
  }

  if (item.treatment === "none") {
    score += 5;
    reasons.push("No special textile treatment is listed.");
  }

  if (item.treatment === "unknown") {
    score -= 5;
    reasons.push("Treatment information is missing, so the app marks it as unknown.");
  }

  if (item.treatment === "water-resistant" || item.treatment === "wrinkle-free") {
    score -= 4;
    reasons.push("This treatment is marked as a possible concern unless verified.");
  }

  if (item.evidence === "verified") {
    score += 8;
    reasons.push("The item has verified information.");
  }

  if (item.evidence === "possible concern") {
    score -= 6;
    reasons.push("The item has a possible concern, not a confirmed problem.");
  }

  if (item.evidence === "unknown") {
    score -= 4;
    reasons.push("Some information is missing, so the app avoids making strong claims.");
  }

  if (item.rating === "liked") {
    score += 5;
    reasons.push("The user liked this item before.");
  }

  if (item.rating === "disliked") {
    score -= 12;
    reasons.push("The user disliked this item before.");
  }

  if ((item.timesWorn || 0) <= 1) {
    score += 3;
    reasons.push("Re-wearing items helps reduce waste.");
  }

  score = Math.max(0, Math.min(100, score));

  return {
    score,
    reasons
  };
}

function getEvidenceLabel(item) {
  if (item.evidence === "verified") {
    return "Confirmed information";
  }

  if (item.evidence === "possible concern") {
    return "Possible concern, not confirmed harm";
  }

  return "Unknown / missing information";
}

const SmartWardrobeData = {
  itemTypes: [
    "top",
    "bottom",
    "jacket",
    "shoes",
    "accessory"
  ],

  materials: [
    "cotton",
    "polyester",
    "wool",
    "denim",
    "mixed",
    "unknown"
  ],

  warmthLevels: [
    "light",
    "medium",
    "warm"
  ],

  breathabilityLevels: [
    "low",
    "medium",
    "high"
  ],

  activities: [
    "school",
    "sports",
    "formal",
    "casual",
    "outdoor"
  ],

  weatherTypes: [
    "hot",
    "mild",
    "cold",
    "rainy",
    "windy"
  ],

  treatments: [
    "none",
    "unknown",
    "water-resistant",
    "wrinkle-free",
    "dyed"
  ],

  evidenceLevels: [
    "verified",
    "possible concern",
    "unknown"
  ],

  comfortNotes: [
    "comfortable",
    "itchy",
    "too hot",
    "too tight",
    "unknown"
  ],

  sampleItems: [
    {
      id: "sample-1",
      name: "Blue cotton shirt",
      type: "top",
      material: "cotton",
      warmth: "light",
      breathability: "high",
      activity: "school",
      weather: "mild",
      treatment: "dyed",
      evidence: "unknown",
      comfort: "comfortable",
      timesWorn: 2,
      lastWorn: "",
      rating: "okay"
    },
    {
      id: "sample-2",
      name: "Black jeans",
      type: "bottom",
      material: "denim",
      warmth: "medium",
      breathability: "medium",
      activity: "casual",
      weather: "mild",
      treatment: "dyed",
      evidence: "unknown",
      comfort: "comfortable",
      timesWorn: 4,
      lastWorn: "",
      rating: "liked"
    },
    {
      id: "sample-3",
      name: "Warm wool sweater",
      type: "top",
      material: "wool",
      warmth: "warm",
      breathability: "medium",
      activity: "school",
      weather: "cold",
      treatment: "none",
      evidence: "verified",
      comfort: "comfortable",
      timesWorn: 1,
      lastWorn: "",
      rating: "liked"
    },
    {
      id: "sample-4",
      name: "Rain jacket",
      type: "jacket",
      material: "polyester",
      warmth: "medium",
      breathability: "low",
      activity: "outdoor",
      weather: "rainy",
      treatment: "water-resistant",
      evidence: "possible concern",
      comfort: "comfortable",
      timesWorn: 1,
      lastWorn: "",
      rating: "okay"
    },
    {
      id: "sample-5",
      name: "Running shoes",
      type: "shoes",
      material: "mixed",
      warmth: "medium",
      breathability: "medium",
      activity: "sports",
      weather: "mild",
      treatment: "unknown",
      evidence: "unknown",
      comfort: "comfortable",
      timesWorn: 5,
      lastWorn: "",
      rating: "liked"
    }
  ]
};

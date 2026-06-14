# SmartWardrobe

SmartWardrobe is a small offline class project that helps a user record clothes and recommend outfits using simple rules.

It does **not** need:

- a server
- internet access
- login accounts
- an online database
- live weather APIs

Open `index.html` in a browser to run the project.

## Main idea

The app stores clothing items locally, lets the user enter weather and activity manually, calculates a WearWell Score, and recommends an outfit with an explanation.

## Science connections

### Physics

Clothes affect heat transfer, insulation, airflow, and layering. The app uses warmth and breathability to decide what works for hot, mild, cold, rainy, or windy conditions.

### Biology

The body regulates temperature by sweating, blood flow, and skin response. The app includes comfort notes such as itchy, comfortable, too hot, or too tight.

### Chemistry

Textiles can include natural fibres, synthetic polymers, dyes, water-resistant coatings, wrinkle-free treatments, and other finishes. The app separates confirmed information from possible concerns and missing information.

### Climate change

The app encourages re-wearing clothes, repairing items, and using clothes longer to reduce waste.

## Project file structure

```text
SmartWardrobe/
├── index.html
├── README.md
├── css/
│   └── style.css
├── js/
│   ├── app.js
│   ├── data.js
│   ├── scoring.js
│   ├── recommendation.js
│   └── storage.js
└── assets/
    └── icons/
        └── README.txt
```

## Minimum features included

- Add clothing items
- Save clothing items in browser localStorage
- Manual weather input
- Manual activity input
- WearWell Score from 0 to 100
- Outfit recommendation
- Explanation for the recommendation
- Usage history: times worn and user rating
- Offline use

## How to test

1. Open `index.html`.
2. Add at least one shirt/top, one bottom, and one pair of shoes.
3. Choose weather and activity.
4. Click **Recommend Outfit**.
5. Read the WearWell Score and explanation.

## Important safety wording

The app does not claim that a full material or brand is harmful. It labels information as:

- Confirmed
- Possible concern
- Unknown / missing information

This keeps the project science-based and fair.

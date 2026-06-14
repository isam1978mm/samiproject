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

## How to use it for the school project

### Step 1: Download the project

Open the GitHub repository, click **Code**, then click **Download ZIP**.

After downloading, unzip the folder.

### Step 2: Open the app

Open the project folder and double-click:

```text
index.html
```

The app should open in the browser. It works offline.

### Step 3: Add clothes

Add simple clothing examples such as:

- Cotton shirt
- Jeans
- Sweater
- Rain jacket
- Running shoes

For each item, choose material, warmth, breathability, activity, weather, treatment information, evidence level, and comfort note.

### Step 4: Choose today’s situation

Enter the weather manually:

- Hot, mild, or cold
- Rain: yes or no
- Wind: yes or no

Then choose the activity:

- School
- Sports
- Formal
- Casual
- Outdoor

### Step 5: Recommend an outfit

Click **Recommend outfit**.

The app will recommend clothes and explain why it chose them.

### Step 6: Explain it in class

When presenting, say:

> SmartWardrobe is an offline rule-based app. It does not use the internet or a server. The user enters clothes and weather manually. The app scores each clothing item and recommends an outfit using comfort, weather, activity, material, and evidence level.

## Demo script for presentation

1. “First, I open the app from `index.html`, so it works offline.”
2. “The wardrobe already has sample clothes.”
3. “I can add a new clothing item manually.”
4. “I choose the weather and activity.”
5. “The app recommends an outfit.”
6. “The WearWell Score explains comfort, breathability, warmth, and safety information.”
7. “The app does not say a whole material or brand is bad. It separates confirmed information, possible concerns, and unknown information.”
8. “The climate-change connection is that the app encourages wearing clothes longer instead of buying more.”

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

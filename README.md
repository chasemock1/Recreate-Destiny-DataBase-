## Project Name

Destiny Database

## Project Description

This is a recreation of the destiny database. You will be able to search for items based on class, armor type, weapon type, weapon stats and their roles, armor stats, and mods

## Wireframes

![Desktop WireFrame](https://i.imgur.com/Y3RopXL.png)

![Mobile WireFrame](https://i.imgur.com/WlnTFmk.png)

![Tablet WireFrame](https://i.imgur.com/0yCVPrS.png)

## Component Hierarchy
App (Src)

|__ assets/
```
  |__ fonts

  |__ data
```  
|__ components/
```
  |__ NavBar.jsx

  |__ Gear.jsx
  
  |__ Icons.jsx
  
  |__ Form.jsx
  
  |__ Stats.jsx
  
  |__ Activities.jsx
  
  |__ Footer.jsx
```  
  
|__ Pages/
```
  |__ Home.jsx
  
  |__ GearScreen.jsx
```
  
## API and Data Sample

```
base('Table 1').create([
  {
    "fields": {
      "Category": "Armor",
      "Class": "hunter",
      "Rarity": "Legendary",
      "Name": "Test",
      "Slot": "Helment",
      "Season": "Season of Arrival",
      "Icon": [
        {
          "url": "https://dl.airtable.com/.attachments/9937712ec76ca365df19106f12fbe3e5/631309a7/ZVMMznb.jpg"
        }
      ]
    }
  },
 ```
                            
### MVP/PostMVP



#### MVP 
- Create a Airtable api
- Render data on page 
- Allow users to get info based on what they select
- Allow users to add info to the api

#### PostMVP  
- CSS heavy
- Create a mock invetory screen and move gear around
- Create multiple pages

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Status
|---|---| ---|
|October 8| Prompt / Wireframes / Priority Matrix / Timeframes | complete
|October 9| Project Approval | complete
|October 11| Core Application Structure (HTML, CSS, etc.) | complete
|October 12| Pseudocode / actual code | complete
|October 13| Initial Clickable Model  | complete
|October 14| MVP | complete
|October 16| Presentations | complete

## Timeframes

Tell us how long you anticipate spending on each area of development. Be sure to consider how many hours a day you plan to be coding and how many days you have available until presentation day.

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Throughout your project, keep track of your Time Invested and Actual Time and update your README regularly.

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Creating a Api | H | 4hrs| 4hrs | 4hrs |
| Rendering data from the Api | H | 8hrs| 15hrs | 15hrs |
| Create multiple componets | H | 3hrs| 3hrs | 3hrs |
| Create Css for the main pages | H | 4hrs| 4hrs | 4hrs |
| Polishing | H | 5hrs| 3hrs | 3hrs |
| Post MVP | M | 6hrs| 12hrs | 12hrs |
| Total | H | 30hrs| 41hrs | 41hrs |

## SWOT Analysis

### Strengths:

-Css

### Weaknesses:

-Calling Api

-useState and useEffect

### Opportunities:

### Threats:

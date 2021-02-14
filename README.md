# JSON RANDOM DATA GENERATOR CLI

# Table of Content

* [About](#About)

* [Installation](#Installation)

* [Usage](#Usage)

* [Example Config File](#Example-Config-File)

* [Example Output File](#Example-Output-File)

---

## About

This is a command line tool for the JSON Random Data Generator library.

---

## Installation

Locally:
```
npm i --save-dev json-random-data-generator-cli
```

Globally:
```
npm install -g json-random-data-generator-cli
```
## Usage 

Command:
> jsonRDG-cli

Usage:  -a string -f string -n number -c string

Options:
      --help                       Show help                           [boolean]
      --version                    Show version number                 [boolean]
  -a, --arrayName                  the name of the array of objects
                                                             [string] [required]
  -n, --numberOfObjectsToGenerate  The number of objects to generate in the json
                                   array                     [number] [required]
  -f, --fileName                   The file name for the output file to be put
                                   in the exports folder     [string] [required]
  -c, --configFile                 The path for the config file that is in the
                                   config folder             [string] [required]

Examples:
```
  npm run generate -- -a customerComments -f ./exports/exampleData.json -n 200
  -c ./configs/exampleConfig.json
```
  OR

```
  jsonRDG-cli -a customerComments -f ./exports/exampleData.json -n 200 -c example.json
```
Troubleshooting:

- Make sure the directory that you want to write to exists.
- Make sure the directory that you want to read from exists.
- Make sure the name of the array of objects is correct.

---
## Example Config File:

```json
{
  "customerComments": [
    {
      "name": "donutName",
      "type": "arr",
      "values": [
        "Cinnamon",
        "Bavarian Cream",
        "Toasted Coconut",
        "Jelly Stick",
        "Powdered Sugar",
        "Old Fashioned Cake",
        "Vanilla Frosted with Sprinkles",
        "Original Stick",
        "Boston Cream",
        "Jelly",
        "Butternut",
        "Double Chocolate",
        "Chocolate Glazed",
        "Strawberry Frosted with Sprinkles",
        "Blueberry Cake",
        "Maple Frosted with Sprinkles",
        "French Cruller",
        "Glazed Stick",
        "Glazed Chocolate Stick",
        "Glazed",
        "Chocolate Frosted"
      ]
    },
    { "name": "price", "type": "num", "values": [1, 200] },
    { "name": "customerRating", "type": "numFloat", "values": [1, 100] },
    {
      "name": "customerComment",
      "type": "arr",
      "values": [
        "Great!",
        "Not as good at Tom Hartman's.",
        "Gross!",
        "Meh.",
        "I have had worse.",
        "It was okay... I guess...",
        "Delicious!",
        "I want my money back.",
        "Can I have the recipe?",
        "I ate 23 of these, and then I got sick..."
      ]
    },
    {
      "name": "company",
      "type": "val",
      "values": ["The Example Doughnut Company"]
    }
  ]
}
```

## Example Output File

```json
{
"customerComments":[
{
"company": "The Example Doughnut Company",
"customerComment": "It was okay... I guess...",
"customerRating": 68.50454115485834,
"price": 180,
"donutName": "Chocolate Frosted"
},{
"company": "The Example Doughnut Company",
"customerComment": "I ate 23 of these, and then I got sick...",
"customerRating": 86.2937054940101,
"price": 186,
"donutName": "Toasted Coconut"
},{
"company": "The Example Doughnut Company",
"customerComment": "I have had worse.",
"customerRating": 20.13289213464826,
"price": 125,
"donutName": "Original Stick"
},{
"company": "The Example Doughnut Company",
"customerComment": "Great!",
"customerRating": 68.4890538357093,
"price": 11,
"donutName": "Butternut"
}
]
}
```

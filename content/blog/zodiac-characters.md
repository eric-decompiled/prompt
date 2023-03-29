---
title: "Zodiac Character - Generating mock JSON data"
date: "2023-03-25"
description: "Generating themed test data in JSON format"
---

Here I get Chat GPT 4 to output JSON data with 12 objects describing a character for each zodiac sign. It knew the signs, and was able to generate suitable descriptions for each one. There is an output limit on the UI, so I ask for 6 at a time. GPT keeps track of which ones and is able to ensure each one gets printed. I saw a chat where GPT v3 guessed the months of the year were Marchuary, Apriluary, etc. I was quite shocked it was able to do strict JSON format, and remember the which ones it printed. It was able to switch up the theme to a computer theme to medieval.

At the end I got it to write a [jq](https://stedolan.github.io/jq/) script to grab some fields and paste them into a CSV. I always find jq expressions annoying to write and require me a fair amount of googling, even though I know what I want. My shell scripting isn't good enough alone for this, but working with GPT, I fell like I can finally embrace the zen of [Taco Bell Programming](http://widgetsandshit.com/teddziuba/2010/10/taco-bell-programming.html)

To generate images I copy paste from the file GPT helped write a jq script for so they look like: "Hyper detailed anime - $description --v 5 --s 750". I am quite pleased with the results. It seems like GPT could conceivably make its own NFT collections and conceivably sell them if it had the right plugin to use. Would the AI be the rightful owner of any proceeds? What if it made a private key and never divulged it? Heres the transcript:

![Hyper detailed anime - A just diplomat adorned in noble attire, wielding a balanced sword and a set of scales](https://imagizer.imageshack.com/img922/9705/UcVHbZ.png)

Me:

```
I have an idea for a card game. I want you to help me generate characters for it. You should output in a JSON format with these fields:
name as a string
sign as `ZodicSign`
age as a number
description as string, this describes their physical characteristics, and
backstory, which is their origin story the theme I want is to use the zodiac signs. There should be 12 in total. Each object should be in an array.
```

[Note GPT does give me its usual pleasantries like this before every response. I copy only the JSON output over here. also the code is indented properly in its display, but not here]

GPT:

```json
[
{
"name": "Aries Alpha",
"sign": "Aries",
"age": 25,
"description": "A muscular figure with short red hair and fierce eyes, dressed in a warrior's armor.",
"backstory": "Born from the fires of conflict, Aries Alpha is a fearless warrior with a natural talent for strategy and combat. Guided by their sign's ruling planet, Mars, they are always eager to face any challenge head-on."
},
{
"name": "Taurus Terra",
"sign": "Taurus",
"age": 30,
"description": "A sturdy individual with earth-toned skin, long braided hair, and a strong connection to nature.",
"backstory": "Raised on a lush, hidden island, Taurus Terra's unwavering determination has made them an expert in agriculture and craftsmanship. Their connection to the earth grants them unparalleled strength and resilience."
},
{
"name": "Gemini Glimmer",
"sign": "Gemini",
"age": 22,
"description": "Twin siblings with shimmering hair and expressive eyes, always moving and conversing in perfect harmony.",
"backstory": "Born under the sign of the celestial twins, Gemini Glimmer was granted the gift of communication and adaptability. They use their quick wit and resourcefulness to navigate complex situations with ease."
},
{
"name": "Cancer Crescent",
"sign": "Cancer",
"age": 28,
"description": "A gentle, moonlit figure with silver hair and a shell-shaped shield, exuding warmth and care.",
"backstory": "Hailing from a coastal village, Cancer Crescent possesses deep emotional intelligence and intuition. Guided by the moon, they have the unique ability to heal and protect their allies in times of need."
},
{
"name": "Leo Luminary",
"sign": "Leo",
"age": 27,
"description": "A regal figure with a golden mane and a sun-shaped pendant, radiating confidence and charisma.",
"backstory": "A natural-born leader, Leo Luminary hails from a long line of royalty. Endowed with the power of the sun, they inspire and command their allies with unwavering loyalty and courage."
},
{
"name": "Virgo Virtuoso",
"sign": "Virgo",
"age": 24,
"description": "A meticulous individual with delicate features, adorned with intricate patterns, and carrying a book of knowledge.",
"backstory": "Descended from an ancient line of scholars, Virgo Virtuoso is a master of logic and analysis. Their keen intellect and attention to detail make them an indispensable strategist in any endeavor."
},
{
"name": "Libra Lightbringer",
"sign": "Libra",
"age": 29,
"description": "A balanced figure, clad in silvery robes, wielding a set of scales, and exuding an air of harmony.",
"backstory": "A seeker of justice, Libra Lightbringer believes in the power of diplomacy and fairness. With their innate ability to mediate disputes and restore balance, they are a symbol of peace and cooperation."
},
{
"name": "Scorpio Shadow",
"sign": "Scorpio",
"age": 26,
"description": "A mysterious figure cloaked in darkness, with piercing eyes and a venom
```

[It cuts out here, I ask for only 6 at a time to avoid this issue]

Me:

```
Yes, that is what I want. This time generate only values only for the first six signs. Also, each object should have a field "image",with the value `${sign.toUppercase()}-IMAGE-URL`.
```

GPT:

```json
[
  {
    "name": "Aries Alpha",
    "sign": "Aries",
    "age": 25,
    "description": "A muscular figure with short red hair and fierce eyes, dressed in a warrior's armor.",
    "backstory": "Born from the fires of conflict, Aries Alpha is a fearless warrior with a natural talent for strategy and combat. Guided by their sign's ruling planet, Mars, they are always eager to face any challenge head-on.",
    "image": "ARIES-IMAGE-URL"
  },
  {
    "name": "Taurus Terra",
    "sign": "Taurus",
    "age": 30,
    "description": "A sturdy individual with earth-toned skin, long braided hair, and a strong connection to nature.",
    "backstory": "Raised on a lush, hidden island, Taurus Terra's unwavering determination has made them an expert in agriculture and craftsmanship. Their connection to the earth grants them unparalleled strength and resilience.",
    "image": "TAURUS-IMAGE-URL"
  },
  {
    "name": "Gemini Glimmer",
    "sign": "Gemini",
    "age": 22,
    "description": "Twin siblings with shimmering hair and expressive eyes, always moving and conversing in perfect harmony.",
    "backstory": "Born under the sign of the celestial twins, Gemini Glimmer was granted the gift of communication and adaptability. They use their quick wit and resourcefulness to navigate complex situations with ease.",
    "image": "GEMINI-IMAGE-URL"
  },
  {
    "name": "Cancer Crescent",
    "sign": "Cancer",
    "age": 28,
    "description": "A gentle, moonlit figure with silver hair and a shell-shaped shield, exuding warmth and care.",
    "backstory": "Hailing from a coastal village, Cancer Crescent possesses deep emotional intelligence and intuition. Guided by the moon, they have the unique ability to heal and protect their allies in times of need.",
    "image": "CANCER-IMAGE-URL"
  },
  {
    "name": "Leo Luminary",
    "sign": "Leo",
    "age": 27,
    "description": "A regal figure with a golden mane and a sun-shaped pendant, radiating confidence and charisma.",
    "backstory": "A natural-born leader, Leo Luminary hails from a long line of royalty. Endowed with the power of the sun, they inspire and command their allies with unwavering loyalty and courage.",
    "image": "LEO-IMAGE-URL"
  },
  {
    "name": "Virgo Virtuoso",
    "sign": "Virgo",
    "age": 24,
    "description": "A meticulous individual with delicate features, adorned with intricate patterns, and carrying a book of knowledge.",
    "backstory": "Descended from an ancient line of scholars, Virgo Virtuoso is a master of logic and analysis. Their keen intellect and attention to detail make them an indispensable strategist in any endeavor.",
    "image": "VIRGO-IMAGE-URL"
  }
]
```

```json
[
  {
    "name": "Libra Lightbringer",
    "sign": "Libra",
    "age": 29,
    "description": "A balanced figure, clad in silvery robes, wielding a set of scales, and exuding an air of harmony.",
    "backstory": "A seeker of justice, Libra Lightbringer believes in the power of diplomacy and fairness. With their innate ability to mediate disputes and restore balance, they are a symbol of peace and cooperation.",
    "image": "LIBRA-IMAGE-URL"
  },
  {
    "name": "Scorpio Shadow",
    "sign": "Scorpio",
    "age": 26,
    "description": "A mysterious figure cloaked in darkness, with piercing eyes and a venomous tail, embodying the intensity of the scorpion.",
    "backstory": "Hailing from the depths of the underworld, Scorpio Shadow has a profound understanding of life, death, and transformation. Their secretive nature and immense power make them a formidable opponent.",
    "image": "SCORPIO-IMAGE-URL"
  },
  {
    "name": "Sagittarius Seeker",
    "sign": "Sagittarius",
    "age": 31,
    "description": "An adventurous archer with keen eyes, dressed in traveler's garb, and possessing an insatiable thirst for knowledge.",
    "backstory": "Born under the watchful gaze of Jupiter, Sagittarius Seeker is a natural explorer, philosopher, and optimist. Their boundless curiosity and sharp intuition guide them on countless adventures across the cosmos.",
    "image": "SAGITTARIUS-IMAGE-URL"
  },
  {
    "name": "Capricorn Crag",
    "sign": "Capricorn",
    "age": 35,
    "description": "A determined figure with a strong, mountain-like physique and goat-like features, symbolizing ambition and perseverance.",
    "backstory": "Forged from the heart of the mountains, Capricorn Crag embodies the spirit of discipline and hard work. With unyielding determination, they strive to reach the highest peaks of success.",
    "image": "CAPRICORN-IMAGE-URL"
  },
  {
    "name": "Aquarius Aether",
    "sign": "Aquarius",
    "age": 23,
    "description": "An enigmatic figure with an ethereal presence, adorned with swirling, water-like patterns and exuding a sense of innovation.",
    "backstory": "A visionary born in the age of technology, Aquarius Aether has the power to influence the flow of information and ideas. They use their unique perspective and genius to shape the future and bring about progress.",
    "image": "AQUARIUS-IMAGE-URL"
  },
  {
    "name": "Pisces Pinnacle",
    "sign": "Pisces",
    "age": 32,
    "description": "A mystical figure with flowing, water-like hair and dreamy eyes, surrounded by a shroud of mist and enchantment.",
    "backstory": "A child of the ocean's depths, Pisces Pinnacle possesses the gift of empathy and the power to navigate between worlds. Their deep connection to the spiritual realm allows them to bring forth ancient wisdom and healing energy.",
    "image": "PISCES-IMAGE-URL"
  }
]
```

Me:

```
That's good let's generate a new set to start with generate only the first six this time let's give them a a cipher punk theme.
```

GPT:

```json
[
  {
    "name": "Aries Anarchist",
    "sign":
```

[I hit stop here I want a computer theme]

GPT:

```json
[
  {
    "name": "Aries Assembler",
    "sign": "Aries",
    "age": 25,
    "description": "A skilled programmer with short red hair and piercing eyes, wearing a hoodie with a binary code pattern.",
    "backstory": "Aries Assembler is a fearless developer specializing in low-level languages and optimization. Driven by their competitive nature, they are always pushing the limits of performance and efficiency.",
    "image": "ARIES-IMAGE-URL"
  },
  {
    "name": "Taurus Token",
    "sign": "Taurus",
    "age": 30,
    "description": "A cybersecurity expert with earth-toned skin and long braided hair, wearing a shirt displaying various cryptographic symbols.",
    "backstory": "Taurus Token is a master of digital asset protection, using their deep understanding of encryption and blockchain technology to secure sensitive information and transactions with unwavering determination.",
    "image": "TAURUS-IMAGE-URL"
  },
  {
    "name": "Gemini Grid",
    "sign": "Gemini",
    "age": 22,
    "description": "Twin siblings with shimmering hair and expressive eyes, wearing matching outfits covered in network diagrams.",
    "backstory": "Gemini Grid is a duo of network engineers who excel at communication and adaptability. They work in perfect harmony to design, deploy, and maintain complex network infrastructures with ease.",
    "image": "GEMINI-IMAGE-URL"
  },
  {
    "name": "Cancer Compiler",
    "sign": "Cancer",
    "age": 28,
    "description": "A thoughtful software engineer with silver hair and a shell-shaped backpack, exuding warmth and care.",
    "backstory": "Cancer Compiler is an empathetic developer who specializes in creating tools that bring people together. Their innate emotional intelligence allows them to craft software that caters to the needs of diverse user communities.",
    "image": "CANCER-IMAGE-URL"
  },
  {
    "name": "Leo Logic",
    "sign": "Leo",
    "age": 27,
    "description": "A charismatic leader with a golden mane and a sun-shaped badge, radiating confidence and authority.",
    "backstory": "Leo Logic is a natural-born project manager who excels at guiding teams of developers and engineers. With their magnetic personality and keen sense of direction, they are able to inspire and lead others toward success.",
    "image": "LEO-IMAGE-URL"
  },
  {
    "name": "Virgo Validator",
    "sign": "Virgo",
    "age": 24,
    "description": "A meticulous quality assurance analyst with delicate features, wearing a lab coat and carrying a notepad.",
    "backstory": "Virgo Validator is an expert in identifying and resolving software defects. Their keen attention to detail and analytical skills make them indispensable in ensuring the reliability and stability of any project.",
    "image": "VIRGO-IMAGE-URL"
  }
]
```

Me:

```
Now let's give them a medieval theme this time do the second half so the ones you didn't generate just make the(m) medieval
```

GPT:

```json
[
  {
    "name": "Libra Liberator",
    "sign": "Libra",
    "age": 29,
    "description": "A just diplomat adorned in noble attire, wielding a balanced sword and a set of scales.",
    "backstory": "Hailing from a land of chivalry, Libra Liberator is a fair and wise negotiator. They use their exceptional ability to mediate disputes and bring about peaceful resolutions in times of conflict.",
    "image": "LIBRA-IMAGE-URL"
  },
  {
    "name": "Scorpio Spellweaver",
    "sign": "Scorpio",
    "age": 26,
    "description": "A shadowy sorcerer draped in a dark cloak, with piercing eyes and a staff topped with a scorpion's tail.",
    "backstory": "Emerging from the depths of a secret arcane order, Scorpio Spellweaver is a master of the dark arts. Their secretive nature and deep understanding of the mystical make them a formidable force in any battle.",
    "image": "SCORPIO-IMAGE-URL"
  },
  {
    "name": "Sagittarius Skirmisher",
    "sign": "Sagittarius",
    "age": 31,
    "description": "A skilled archer adorned in light leather armor, carrying a longbow and a quiver full of arrows.",
    "backstory": "Born under the watchful gaze of Jupiter, Sagittarius Skirmisher is a natural explorer and hunter. Their boundless curiosity and sharp aim guide them on countless adventures through uncharted territories.",
    "image": "SAGITTARIUS-IMAGE-URL"
  },
  {
    "name": "Capricorn Castellan",
    "sign": "Capricorn",
    "age": 35,
    "description": "A steadfast knight with a strong, mountain-like physique and a goat-emblazoned crest on their shield.",
    "backstory": "Forged in the heart of a mountain fortress, Capricorn Castellan is a paragon of discipline and loyalty. With unyielding determination, they protect their realm and strive to uphold the highest standards of honor.",
    "image": "CAPRICORN-IMAGE-URL"
  },
  {
    "name": "Aquarius Alchemist",
    "sign": "Aquarius",
    "age": 23,
    "description": "An innovative inventor with an ethereal presence, surrounded by bubbling flasks and intricate contraptions.",
    "backstory": "A prodigy in the art of alchemy, Aquarius Alchemist seeks to unlock the secrets of the universe. Their unique perspective and thirst for knowledge drive them to push the boundaries of what is possible.",
    "image": "AQUARIUS-IMAGE-URL"
  },
  {
    "name": "Pisces Prophet",
    "sign": "Pisces",
    "age": 32,
    "description": "A mystical seer with flowing, water-like hair and dreamy eyes, clutching an ancient, enchanted tome.",
    "backstory": "Born with the gift of foresight, Pisces Prophet has the rare ability to glimpse into the future. Their deep connection to the spiritual realm allows them to provide guidance and wisdom in times of uncertainty.",
    "image": "PISCES-IMAGE-URL"
  }
]
```

Me:

```
Now I want a JQ expression that can read a file that contains these arrays and extract their description into a CSV list
```

GPT:

```sh
jq -r '.[] | [.description] | @csv' input.json > output.csv
```

Me:

```
I want another column with the sign
```

GPT:

```sh
jq -r '.[] | [.sign, .description] | @csv' input.json > output.csv
```

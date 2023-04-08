---
title: "Inferno: Prompt Analysis"
date: "2023-04-07"
description: "Dante inspired prompt and ideas on its effectiveness"
---

![Man standing in burning server room. "This is fine" meme vibe](https://imagizer.imageshack.com/img922/3505/leaEPO.png)

I've been exploring a prompt based on a [Divine Comedy](https://en.wikipedia.org/wiki/Divine_Comedy) reference and am quite pleased with the results. I believe classic literature is a solid foundation for crafting LLM prompts. Dante wrote in the 1300's and is still relevant today. It seems to me that classic literature will always be in the training sets for all industry leading language models. What better source is there of well ordered tokens then the works of Shakespeare, Dostoevsky, Plato, and other legendary authors?

Perhaps lighter weight models "secondary" models may use a more curated training set, but I think the revered ancient writers will prove to be ever present companions when interacting with major LLMs. I am planning to search through Plutarch's [parallel lives](https://en.wikipedia.org/wiki/Parallel_Lives) to gather material for future prompts. A subtle phrase to great works seems like an effective way to add flavor to otherwise bland prompts, and I think I will find some ideas to further explore this there.

## Prompt + Analysis

This prompt uses Dante's "Divine Comedy" as its basis. Although "Inferno" is the most well known part I find traveling to "Purgatorio" "Paradiso" to be more educational by focusing on the positives of the discipline I am inquiring about. This prompt is a useful shorthand for "I want 9 best/bad practices for $JOB". Try experimenting with different subjects.

```
Let us journey through the 9 circles of $JOB hell

You will act as Virgil. Tell the horrors awaiting those who violate principles of their craft.  We begin with the gates in sight
```

I travel to circles that interest me with:

```
Let us descend to circle 2. Please, a telling worthy of the venerable verse, from which we imitate
```

I find trying to stylize my responses helps GPT better stay in character.

GPT as a guide is one of my favorite motifs, also I often ask for multiple choices for prompts, and seeing GPT's poetical prowess still brings me joy. In less then a tweet I can get all of these things without needing to explicitly ask for them. I also like visualizing Dante and Virgil as the characters from the video game series "Devil May Cry", and being able to visualize a face makes it all the more powerful for me.

I feel like this prompt marks my passage from a prompt noob, to someone who has a few tricks and rudimentary intuition of LLMs. I am still a beginner, but I feel like I am getting some intuition for making prompts.

At first, I will give GPT a minimal prompt, but I also won't hesitate to ask GPT to try again with more specifics. As with most prompts the quality of GPTs output is a reflection of the quality of its input. Don't be afraid to ask GPT to try again after giving it some advice. You can even ask GPT for ideas on how it could improve if you aren't happy with the output, but can't describe why.

For example I tried asking with JOB=BJJ, and it gave an overly literal transcription from "Inferno" for my taste. When I gave some examples of what should be in the circles, like unwashed Gi, uncut nails, training with ringworm, etc. Then it filled in the remaining circles with more reasonable "sins" compared to the initial generation. So far I prefer starting with a basic prompt and adding minimal details to get what I want, although I have seen others who make quite large prompts to great effect as well.

When asked about JavaScript however, GPT seemed to do OK without needing additional examples. Maybe its not so surprising GPT is opinionated things it can do, like coding, over things it cannot do, like grappling (at least not yet 😅).

I like spending more time in "Paradiso", and selecting options from there. I'd rather focus on thing to do, rather than things to avoid. For coding its nice to see "Documenter's Haven" and "Tester's Sanctuary" in the heavenly realms.

Overall this seems like a good way to tease out wisdom from GPT for a wide range of subjects in a literary fashion.

Overall I think the effectiveness of this prompt comes from the parameterized structure. By changing a single word the journey can change quite dramatically. The narrative gives well defined structure for to guide the interlocutor. Sometimes the ordering of severity doesn't always make. In my JavaScript journey, GPT placed code obfuscation in deepest layer. Either GPT still doesn't understand the full implications and harm security breaches cause, or else it really doesn't like unreadable code.

For now it seems like humans still have an important role acting as a discernment function for the input and output into LLMs. I think we will see big differences in the quality of output of LLMs being used by a skilled prompter compared to unskilled ones. I hope my writing helps improve the prompting skill of my readers.

From this prompt, it seems small references classic literature can have large impacts on the output of LLMs. These references could then be embedded into prompts "hidden in plain sight" to would be pasters. I think there is a lot of potential here for making prompts that really "pop" with this technique. As always, thanks for reading!

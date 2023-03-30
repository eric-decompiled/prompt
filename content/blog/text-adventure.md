---
title: "Text Adventure"
date: "2023-03-26"
description: "Testing GPT 4 ability to build worlds and ascribe emotions"
---

I tried playing text based adventures with GPT 4. Its an incredible improviser and not being too specific seems to create a more fun experience. By being overly specific GPT 4 seems to become more formulaic and less engaging.

Although the structured game isn't as fun, I find it more educational in showing off how well GPT 4 is able to reason. It consistently identifies a "correct" emotion to the character. It also is able to analyze how the actions I performed differed from what the character might have naturally done.

Chat GPT 4 appears to be an inveterate improviser. "[Yes, and](https://en.wikipedia.org/wiki/Yes,_and...)" seems to describe its approach to every interaction. It is highly suggestible, and will always build off of my actions, never saying what I want is impossible.

Sam Altman, the CEO of the company behind Chat GPT 4, [hates being scolded by a computer](https://youtu.be/L_Guz73e6fw?t=2448). This reasoning is probably why its so hard for to get the computer to have negative consequences for my characters. I think this is why GPT takes a "Yes and" approach to everything.

## Prompt

If you have GPT 4 you can use this as a starting point. I'll include my more structured version further down:

```
I want to play a choose your own adventure game, one where you present me some text and I make a choice. first, I want you to generate a description of my character. This character should have a name, a physical description and an origin story once you're done describing my character introduced me to my adventure and give me my first choices
```

## Notable Dialogue

In the game I am tasked with finding information about the death of my parents. I am considering going undercover in the "Obsidian Brotherhood", and ask about my characters feelings. I reference a song lyric: "How hard will I fall if I lead a double life", I wonder how much of "leading question" effect it had. Still it responds coherently and seems to understand emotional repercussions

> Leading a double life by infiltrating the Obsidian Brotherhood would undoubtedly be a challenging endeavor, but not impossible for someone of your abilities. However, you should be prepared for the emotional and moral toll such a decision may take on you. Infiltrating the Brotherhood would mean hiding your true intentions and possibly participating in activities that go against your personal values. This could lead to internal conflict and jeopardize your sense of self. Nevertheless, joining them could be the most effective way to gather information and ultimately bring justice for your parents.

Here is some more context:

Me:

```
Are these guys evil?
```

GPT:

```
It's difficult to determine if the man and woman you've encountered are truly evil or simply caught up in something beyond their control. Their expressions seem to convey a mixture of anxiety and surprise at your sudden appearance, but their intentions remain unclear. To better understand their connection to the Obsidian Brotherhood, you'll need to gather more information.

Your next choices are:

    Continue questioning the man and woman separately, attempting to discern their true intentions and connections to the Brotherhood.
    Confront them both about their potential involvement with the Brotherhood, demanding honesty and transparency in their answers.
    Reveal your true identity and motives, hoping that they will sympathize with your quest for justice and provide valuable information.
```

Me:

```
Am I supposed to join the brotherhood? Are they the bad guys?
```

GPT:

```
As Thalia Stormborn, your primary objective is to uncover the truth behind your parents' deaths and seek justice for their memory. The Obsidian Brotherhood is believed to be connected to the fire that claimed their lives, which makes them the likely antagonists in your story.

Your goal is not necessarily to join the Brotherhood, but to gather information about their activities and connections to your parents' tragic fate. The Brotherhood's intentions and whether they are unequivocally evil may be more complex, but your focus is on the pursuit of justice and uncovering the truth.

Your next choices are:

    Press the man and woman for information about the Brotherhood, attempting to gauge their true intentions and connections to the organization.
    Share your personal story with the man and woman, hoping they will empathize with your quest and help you uncover the truth about the Brotherhood.
    Excuse yourself and leave the house, opting to continue your investigation elsewhere in the city, where you might find more concrete evidence of the Brotherhood's activities.
```

Me:

```
Give me some advice. How hard will I fall if I lead a double life?

I am thinking the best course of action is to join them. I'll have to bite my tounge about my true motives. Is there anything my character would know about the world, or object internally with this course of action? I want to stay in character here.
```

GPT:

```
As Thalia Stormborn, you are a skilled warrior and adept in the arts of combat and magic. Leading a double life by infiltrating the Obsidian Brotherhood would undoubtedly be a challenging endeavor, but not impossible for someone of your abilities. However, you should be prepared for the emotional and moral toll such a decision may take on you.

Infiltrating the Brotherhood would mean hiding your true intentions and possibly participating in activities that go against your personal values. This could lead to internal conflict and jeopardize your sense of self. Nevertheless, joining them could be the most effective way to gather information and ultimately bring justice for your parents.

Before making this decision, consider Thalia's knowledge of the world and her upbringing. Raised by her sorceress grandmother, she might be aware of the potential consequences of joining a shadowy organization like the Obsidian Brotherhood. Thalia's strong sense of justice and determination could be challenged by aligning herself with a potentially malevolent group.

With these considerations in mind, your next choices are:

    Attempt to infiltrate the Obsidian Brotherhood by gaining the trust of the man and woman, keeping your true motives hidden as you gather information.
    Share your personal story with the man and woman, and ask for their help in finding a way to infiltrate the Brotherhood without compromising your values.
    Continue your investigation independently, seeking other leads and potential allies in the city while maintaining your personal integrity.

```

## Structured Prompt

Here is a more structured prompt. The turns were to force a quick conclusion.

Its not as fun of a game, but its another piece of evidence that GPT is able to reason about emotional state of humans, and predict their likely action.

```

I want to play a choose you own adventure text game. I want it set in a cyberpunk setting.

I want 10 turns in total. The story should have a clear end after I take the final action.

Each turn should be formatted like this:

Scene: _ physical description of the scene_

Situation: _ the challenge facing the character _

Thoughts: _ the characters thoughts _

World: _ details about how the world is different, add "flavour" to the game _

Options:
(Strength): _ a strength based solution_

(Dexterity): _ an agility based solution_

(Intelligence): _ an intellectual based solution_

(Charisma): _ an social based solution_

To start, first generate a character for me. I want a physical description, backstory and mission. The character should have one attribute they are good at, two average at, and one they are poor at.

Then describe the setting in more detail. Then present the first turn.

Each turn should start with "Turn x" where x is the appropriate number.

Present one turn at a time and I will provide an action in response. I shouldn't be limited to the suggested actions. My choices should affect the next action depending on what happens. I will ask questions about my actions so please remember them.

```

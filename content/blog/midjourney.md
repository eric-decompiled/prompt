---
title: "Midjourney"
tagline: "Realistic image generating chat bot"
date: "2023-03-28"
description: "Generating Images in Discord chat"
---

![realistic looking ai generated image of an astronaut, reflection in their visor, bizarre yet aesthetic background](https://imagizer.imageshack.com/img922/2690/GNgFk2.png)
Prompt: `hyperrealistic deep space artist intepretation  --v 5`

Chat GPT-4 started my dive down the AI rabbit, discovering the newest image generating AIs really sucked me in. When DALL-E came out I was impressed by some images it made, but found it quite hard to get good results myself. Midjourney, especially their newest v5 model, makes it much easier to get visually stunning photos.

[Midjourney](https://www.midjourney.com) which is a bot (Discord is a text + voice chat service) on the other hand, produces visually impressive results consistently, especially with their newest V5 algorithm. All the pictures in this post were generated with Midjourney.

Here I will share what I have learned by getting the basic tier ($10 USD) and then buying an extra hour ($4). For $14 I was able to submit 376 jobs, which is roughly how many images I generated. I am relatively inexperienced, but I feel like I have gotten some sense for it.

Stable diffusion is a technique for generating images, the most famous of which is DALL-E by Open AI. Midjourney is a company specialized in stable diffusion, and uses [Discord](https://discord.com/) as in interface. You submit job by typing `/image *your prompt*` and a bot will begin creating an image.

## Trial

To try Midjourney, visit their site and create an account. Make a Discord account if you don't have one. The in the official server go to a "newbies" channel and type `/imagine` there. (`prompt` should appear by the cursor), describe what you want a picture of and hit enter. The bot will begin generating 4 different images based on your prompt. When it is done you can select "U1" to enlarge the top left picture or "V1" to get variations similar to it. Using v4 upscale takes some time though, so it consumes your credits. I'd reccomend only upscaling ones that you want to save while using v4.

V4 results are impressive, but the v5 is very impressive. Even with a free account there are so many channels with images flooding in you can get a good sense for what is possible. Once you use up your trial you can decide if the account is worth paying for.

## Useful Commands

`/info` to displays your usage stats

`/blend` let you combine images, I haven't used it much

`/settings` allows you to choose defaults for your prompts. You can always add these manually if you want instead e.g. `--v 5` selects version 5, which gets you the best images at the time I am writing. I always use v5 so most of my advice probably applies best to that one. Higher style lets the algorithm be more "creative", lower style is supposed to be more literal of your prompt. I am not sure about the other options.

## Tips

Use a seed with `--seed 1`. The same seed with the same prompt and settings is supposed to generate the same image. This lets you make small variations in prompts and get feedback on what works and doesn't work. By using a seed you can make a small change and see the effect your prompt had and rule out chance. This would have helped me determine the effects adjectives have a lot sooner.

Be specific about the style you want. Try using famous artists names like Bob Ross, or certain movements like impressionists. One of my favorite is "hyper detailed anime". I don't like realistic images because of the [uncanny valley effect](https://en.wikipedia.org/wiki/Uncanny_valley). I don't like the faces and rooms, realistic landscapes look great though

Specifying the type of camera can control the style. "shot with DSLR" can be a way of making realistic photos. Supposedly different camera brands can influence the style of picture, but I don't know camera names so that doesn't help me much.

You can add "coloring book" to get images to color in yourself.

Everything on Midjourney is public, even the DMs to the bot, since paying members can still see them on your profile in the app. "stealth" mode is an option for their highest paid tier. Don't upload any sensitive images!

## Links to learn more

[Parameter Documentation](https://docs.midjourney.com/docs/parameter-list) the official list of available parameters. This is a good read once you start getting comfortable with it.

[This video](https://www.youtube.com/watch?v=g8AogXYg0No) has a lot of good tricks in it

[Interesting twitter account](https://twitter.com/nickfloats/status/1631346749297106958)

## Chat GPT 4 usage

Midjourney needs text prompts. Chat GPT 4 is an intelligent text generating machine. Making prompts with Chat GPT 4 is quite fun, and lets you quickly generate many different prompts to try.

I like the idea of chaining AI models together. Chat GPT 4 is an important part of my image generation workflow. You certainly don't need to do this to create stunning images with Midjourney though.

The simplest way is to find a formula and enter that into GPT and ask for prompts e.g.

I want image prompts that follow this formula:

`[style] [subject] [action] at [time of day] [shot with] [lighting]`

And then provide some variables and ask for multiple prompts. Chat GPT 4 will figure it out. Try asking it to include adjectives and to avoid non visual words.

To expand on this further, you can teach chat GPT about layers. It took me a while to understand, layers let you (or your chat assistant) control the composition of the image. My understanding is the weights let you focus on different things, like make the character more of a focus, or change the background easily.

To use this, I copy these examples from [here](https://github.com/Midgard-Public/Midgard-Theory-Of-Layer-Separated-Midjourney-Prompting/blob/main/Prompt%20Modification%20Examples).

Some times I tell GPT about the "theory" from that repo as well, sometimes I don't.

If you find a formula you like, make a new chat with GPT 4 using it, and you have a custom prompt generator.

For text based adventures I play with Chat GPT 4, I like copy pasting descriptions of characters and scenes into Midjourney

## Some Pictures

![space lion logo](https://imagizer.imageshack.com/img923/5281/EHRyvn.png)
Prompt: `Leo,"Golden, majestic spaceship ::5. Attention-commanding design, lion symbol ::3. Powerful defenses,flagship status ::2. Charismatic commander, leadership ::1."  --v 5 --s 750`

![man gazing into outer space](https://imagizer.imageshack.com/img923/6014/gxmElA.png)
Prompt: `hyperrealistic deep space artist intepretation  --v 5`

![lemur on cocktail glass](https://imagizer.imageshack.com/img923/2041/bFQcQl.png)

The rest of my favorite images I generated are [here](https://imageshack.com/a/FvmW7/1)

---
title: "Simple Story generator"
date: "2023-03-25"
description: "Building a two part model"
---

Here I try to make a simple story generator with image prompts using Chat GPT 4. It generates plausible stories with appropriate prompts as instructed. However some stylistic image hints seem to leak into the story, like a "Van Gogh" art style leads to a starry night festival. It does a mediocre job of generating a guide for a fresh GPT 4 model as well to replicate its behavior when asked to do so.

I suppose keeping each model specialized would produce better results, as in have the story generator make a generic prompt, and then feed it into a more specialized "MidJourney" instance if needed, but I still feel like having a GPT perform compounded logic is a worthwhile exercise to attempt, although perhaps that approach is poor design. Chat GPT 4 gives new meaning to the phrase "text is the universal interface".

## Method

I ask for a 3 act story generator which GPT 4 seems to be already be aware of is able to use. I try embedding specialized prompt generation logic, which seems to be successful to some degree. For this I use [MidJourney](https://www.midjourney.com) along with [Midgard's Guide](https://github.com/Midgard-Public/Midgard-Theory-Of-Layer-Separated-Midjourney-Prompting). I don't fully understand it, but during the conversation I get an insight about grouping the style with the subject and having it emphasis the weight of that layer. I share this with GPT and it seems to incorporate it in future stories.

I ask for a bullet point summary is mostly for speed of iterating plots and prompts while minimizing time waiting for output. I find it impressive GPT can understand the two stage workflow, and switch to a single stage when asked. I am using the official [webapp](https://chat.openai.com) as my interface.

I ask it to then output a guide for a fresh GPT 4 model to replicate what it does. It creates an output the mostly works, but leaves out a few details, and requires additional prompting for it to work.

## Analysis

Overall I am happy with the results. I notice it repeats certain tropes, but much less than an individual human author would. Also I believe I could ask it to generate a list of themes and styles to consider and during the initialization have it consider those for the story to get more diversity.

One thing I find amusing is how when the image prompt uses Bob Ross style, the story involves the animals painting. That wasn't my intention, but is an understandable association. I am not sure how to explain that the image style doesn't need to influence the story. This seems to be the main flaw in the stories. For now it seems like its best to keep each chat separate and specialized.

I think the story with "Elara" has potential if it got extended out more. As long as you kept good separation between each scene and kept the protagonist as the only constant, it seems like more complex story telling that still "made sense" would be possible.

I'd be interested to see a [Rougelike](https://en.wikipedia.org/wiki/Roguelike) game incorporate this. Perhaps using GPT to train a massive amount of scenarios, or training a lighter weight model that can run on the players computer.

As I ask for more stories the performance seems to break down a bit, but so is my focus. I'd try for more but I got rate limited. It seems to be working as I intended for the most part.

The image prompts generally conform to what I asked for, but the resulting images don't always work. I will explore MidJourney more in another post.

### Author Note

I use speech to text for most of my interaction here, which is new to me. Some of my input doesn't make sense, but GPT seems to tolerate it. A stark contrast to writing computer code.

I also want to hear GPT speak, but I can't find a good solution for Mac. This is what I want, [Making GPT think it’s HAL9000](https://www.youtube.com/watch?v=TZRh5RSThdU) and I am tempted to dust off my Windows machine to copy.

## Transcript

Nothing that unusual happens, but for completeness, here is the transcript:

Me:

```
I want to write stories I want you to help me with that each story should be a 3 act structure one just a basic story with a beginning, middle and end each part of the story should begin with a picture instead of generating a picture I want you to generate a prompt for these prompts. I want them to be in a cartoonish or lighthearted style. These examples I want you to look at include certain things like cyber punk, I do not want included they do include mansions to Bob Ross and Claude Monette those are examples of styles I do want.

Example 1: Adjusting weights to bring out a style

Original prompt:
Tropical beach, sunset ::8. Palm trees, ocean waves ::4. Impressionist style, Claude Monet ::2. Vibrant colors, warm tones ::2. Relaxing atmosphere, peaceful ::1.

Adjusted prompt to emphasize Impressionist style:
Tropical beach, sunset ::6. Palm trees, ocean waves ::3. Impressionist style, Claude Monet ::5. Vibrant colors, warm tones ::2. Relaxing atmosphere, peaceful ::1.

Example 2: Negating an unexpected element

Original prompt:
Majestic unicorn, mythical creature ::8. Forest, magical atmosphere ::4. Fantasy art style, Brian Froud ::2. Glowing elements, sparkling ::2. Serene, enchanting ::1.

Issue: The unicorn has wings in the generated image.

Adjusted prompt to negate wings:
Majestic unicorn, mythical creature ::8. Forest, magical atmosphere ::4. Fantasy art style, Brian Froud ::2. Glowing elements, sparkling ::2. Serene, enchanting ::1. Wings ::-1.

Example 3: Rearranging layer separators to highlight a specific feature

Original prompt:
Futuristic cityscape, skyscrapers ::8. Hovering vehicles, advanced technology ::4. Cyberpunk aesthetic, neon lights ::2. Blade Runner, Syd Mead ::2. Night scene, atmospheric ::1.

Issue: The hovering vehicles are not prominent enough.

Adjusted prompt to emphasize hovering vehicles:
Futuristic cityscape, skyscrapers, Hovering vehicles ::8. Advanced technology ::4. Cyberpunk aesthetic, neon lights ::2. Blade Runner, Syd Mead ::2. Night scene, atmospheric ::1.

Example 4: Adding new information to make a prompt more detailed
Example 4 (repeated): Adding new information to make a prompt more detailed

Original prompt:
Peaceful mountain landscape, snow-capped peaks ::8. Pine trees, clear skies ::4. Bob Ross style, happy trees ::2. Serene nature, calming ::1.

Adjusted prompt with added details:
Peaceful mountain landscape, snow-capped peaks ::8. Pine trees, clear skies, mountain stream, wildflowers, deer grazing ::4. Bob Ross style, happy trees ::2. Serene nature, calming, sunlight filtering through trees ::1

As for the story, I want you to give me a bullet point summary of each section prefixed with an image prompt as I described. If I like your outline, I will ask you to generate the full text. I will want to vary the style of the stories, so let me know the best way for me to tell you what style I want or what decisions I should make for you
```

GPT:

```
I understand your requirements. Based on the examples you provided, I'll create a lighthearted story with a 3-act structure and use image prompts for each act. I'll also provide a bullet point summary of each section. You can then provide feedback on the style or theme you'd like to see in the full text. Here's a story outline for you:

Title: The Great Paintbrush Adventure

Act 1 - Setup
Image prompt:
Playful animals, art supplies ::8. Forest clearing, sunny day ::4. Bob Ross style, happy trees ::2. Bright colors, whimsical ::1.

Bullet points:

    A group of forest animals discovers a set of art supplies left behind by a painter.
    The animals, curious and excited, decide to try their paws at painting.
    They begin creating their own masterpieces, each reflecting their personalities and interests.

Act 2 - Confrontation
Image prompt:
Art contest, colorful banners ::8. Forest meadow, animals gathering ::4. Impressionist style, Claude Monet ::2. Vibrant colors, celebration ::1.

Bullet points:

    News of the animals' artistic talent spreads throughout the forest, leading to a friendly art contest.
    Animals from all around come to participate and showcase their skills.
    However, a sneaky and envious raccoon attempts to sabotage the other animals' artworks.

Act 3 - Resolution
Image prompt:
Raccoon's redemption, collaborative mural ::8. Forest community, unity ::4. Cartoonish style, lighthearted ::2. Warm tones, teamwork ::1.

Bullet points:

    The raccoon is caught and confronted by the other animals, who express their disappointment.
    The raccoon, feeling guilty, seeks to make amends by suggesting a collaborative mural project.
    The animals come together to create a beautiful mural, symbolizing their unity and newfound friendship.

Please let me know if you'd like to adjust the style, theme, or other aspects of the story, and I'll be happy to generate the full text based on your feedback.
```

Me:

```
That's great can you write the text of the story? Don't include any extra details. I will re-use the prompts. You've already provided it seems like you understand my request.
```

GPT:

```
Title: The Great Paintbrush Adventure

Act 1 - Setup

Once upon a time, in a sunlit forest clearing, a group of playful animals stumbled upon a set of art supplies left behind by a painter. Intrigued by the brushes, paint, and canvases, the animals decided to try their paws at painting. With the spirit of Bob Ross guiding them, they began creating their own whimsical masterpieces, each reflecting their personalities and interests.

Act 2 - Confrontation

News of the animals' artistic talent spread throughout the forest like wildfire, and soon, a friendly art contest was organized. The forest meadow became a bustling gallery, adorned with colorful banners and filled with animals showcasing their skills. In the impressionist style of Claude Monet, the contest was a vibrant celebration of creativity and community.

However, amidst the merriment, a sneaky and envious raccoon attempted to sabotage the other animals' artworks by smudging and ruining their beautiful creations. He wanted to win the contest at any cost.

Act 3 - Resolution

The raccoon's mischievous deeds were discovered, and the animals confronted him with disappointment. Realizing the error of his ways, the raccoon felt guilty and sought to make amends. He suggested a collaborative mural project that would bring the entire forest community together.

With a lighthearted and cartoonish style, the animals joined forces to create a beautiful mural, using warm tones and showcasing their unity and newfound friendship. The raccoon's redemption was complete, and the animals learned the importance of teamwork, understanding, and forgiveness.

And so, the Great Paintbrush Adventure came to a heartwarming end, leaving a lasting impression on the forest and its inhabitants. The vibrant mural would stand as a reminder of the power of art to bring everyone together.
```

Me:

```
Yes that's it. That's what I want exactly I want to generate many stories like this so for this story, I have a few pieces of feedback. For the image prompts, they should all have the same style for now let's stick with Bob Ross. That's the style though we don't want our stories to have anything to do with the artistic style all the other details you have to make sense to include though feel free to pick other artists.

As for the workflow, I want to continue in this manner, where you first generate a bullet point summary with the image prompts and ask for confirmation if that looks good, then you will generate the story text when you do that generate just the text.

Also, I want a fourth image prompt. This image prompt should symbolize the ending of the story.

With this feedback, let's generate a new outline of a story with new characters and a new theme
```

GPT:

```
Title: The Flying Pie Fiasco

Act 1 - Setup
Image prompt:
Bakery village, friendly animals ::8. Cobblestone streets, pastry shops ::4. Bob Ross style, happy trees ::2. Bright colors, cheerful ::1.

Bullet points:

    In a charming bakery village, friendly animals run various pastry shops and live in harmony.
    A young squirrel named Squeaky dreams of creating a pie that can fly, inspired by stories of magical flying treats.

Act 2 - Confrontation
Image prompt:
Pie competition, village fair ::8. Excited animals, bustling market ::4. Bob Ross style, happy trees ::2. Colorful decorations, festive ::1.

Bullet points:

    A village fair and pie competition is announced, and Squeaky decides to enter with his flying pie invention.
    As the fair approaches, Squeaky faces various challenges, including failed experiments and the skepticism of his fellow villagers.

Act 3 - Resolution
Image prompt:
Squeaky's success, airborne pies ::8. Cheering villagers, admiration ::4. Bob Ross style, happy trees ::2. Bright colors, triumphant ::1.

Bullet points:

    Squeaky finally perfects his flying pie recipe just in time for the competition.
    The villagers are amazed and delighted by his innovative creation, and Squeaky's flying pies become a sensation.

Ending Image Prompt:
Villagers sharing flying pies, laughter and joy ::8. Bob Ross style, happy trees ::2. Bright colors, heartwarming ::1.

Please let me know if this outline meets your requirements, and I'll generate the story text once you confirm.
```

Me:

```
That looks good. The only thing I would change is to not name the squirrel. None of the stories should name any of the characters because they're so short can you generate the full story text for me
```

GPT:

```
Title: The Flying Pie Fiasco

Act 1 - Setup

In a charming bakery village, friendly animals ran various pastry shops and lived in harmony. Cobblestone streets, lined with Bob Ross-inspired happy trees, connected the quaint shops, creating a cheerful atmosphere. A young squirrel, who had always been fascinated by the magical stories of flying treats, dreamed of creating a pie that could fly.

Act 2 - Confrontation

One day, the village announced a fair and pie competition. The squirrel saw this as a perfect opportunity to showcase its flying pie invention. As the fair approached, the squirrel faced various challenges, including failed experiments and the skepticism of its fellow villagers. Despite the setbacks, the squirrel was determined to make its dream come true.

Act 3 - Resolution

Finally, after many attempts, the squirrel perfected its flying pie recipe just in time for the competition. At the bustling fair, surrounded by colorful decorations and festive cheer, the squirrel unveiled its creation. To everyone's amazement and delight, the pie soared through the air, leaving the villagers in awe.

The flying pies became a sensation, and the squirrel's determination and creativity were celebrated by all. The once-skeptical villagers now admired the young inventor, and the bakery village was filled with laughter and joy as they shared the delightful flying pies.

The heartwarming scene, painted with bright colors and happy trees, symbolized the triumph of the young squirrel and the unbreakable spirit of the bakery village.

```

Me:

```
That's great let's try again with the same format. The only piece of feedback I have is that you say the squirrel was determined to make its dream come true the word it's seems insensitive to me. It seems to imply that the squirrel isn't sentient. Overall, it's a very minor piece of feedback. Let's move onto the next story now just the outline to begin. This time, let's use the cloud, my net style in our props, and make the story a little more serious.
```

_I was using speech to text, I have no idea what I tried to say, but it certainly wasn't "let's use the cloud, my net style in our props"_

GPT:

```
Title: The Lost Melody

Act 1 - Setup
Image prompt:
Musician animals, riverside village ::8. Cobblestone paths, willow trees ::4. Impressionist style, Claude Monet ::2. Muted colors, nostalgic ::1.

Bullet points:

    In a riverside village, musician animals perform beautiful melodies, creating a harmonious atmosphere.
    An elderly elephant, a skilled violinist, loses her ability to remember the tunes she once played.

Act 2 - Confrontation
Image prompt:
Search for lost melody, traveling musicians ::8. Enchanting landscapes, countryside ::4. Impressionist style, Claude Monet ::2. Muted colors, determination ::1.

Bullet points:

    The other musician animals decide to help the elephant by searching for the lost melody, embarking on a journey through the countryside.
    Along the way, they face challenges, such as uncooperative weather and getting lost, but their determination keeps them going.

Act 3 - Resolution
Image prompt:
Rediscovery of lost melody, joyous reunion ::8. Animals performing, village celebration ::4. Impressionist style, Claude Monet ::2. Muted colors, heartwarming ::1.

Bullet points:

    The animals eventually rediscover the lost melody in an old, forgotten music sheet.
    The elephant is overjoyed, regaining her ability to play the violin, and the village comes together to celebrate with a grand performance.

Ending Image Prompt:
Musicians playing under the stars, friendship and unity ::8. Impressionist style, Claude Monet ::2. Muted colors, heartfelt ::1.

Please let me know if this outline meets your requirements, and I'll generate the story text once you confirm.
```

Me:

```
I have some ideas about how to improve the prompts either the story needs to have humans in it, or the prompt has to include animals in a layer with a high weight. For example, in the last story, there should be a layer of "elephant, animals::8" so that the image generator knows that's what we want. Let's try again, but go for a silly style with animals something like the pie story you told.
```

GPT:

```
Title: The Great Vegetable Heist

Act 1 - Setup
Image prompt:
Animal farmers, bustling market ::8. Vegetable stands, rolling hills ::4. Cartoonish style, lively colors ::2. Lighthearted, fun ::1.

Bullet points:

    A community of animals lives in a picturesque farming village, where they grow and sell vegetables at a bustling market.
    One day, they discover that their prized giant vegetables have gone missing just before the annual harvest festival.

Act 2 - Confrontation
Image prompt:
Detective animals, searching for clues ::8. Mysterious tracks, comical disguises ::4. Cartoonish style, lively colors ::2. Humorous, adventure ::1.

Bullet points:

    The animals form a detective team, donning comical disguises and searching for clues to find the vegetable thief.
    They follow mysterious tracks and interview fellow animals, navigating a series of humorous situations and misunderstandings.

Act 3 - Resolution
Image prompt:
Mischievous rabbits, giant vegetable feast ::8. Apology, friendship ::4. Cartoonish style, lively colors ::2. Lighthearted, heartwarming ::1.

Bullet points:

    The detective animals eventually uncover that a group of mischievous rabbits stole the giant vegetables for a feast.
    The rabbits apologize and make amends, leading to an even bigger harvest festival, celebrated by all the animals in unity.

Ending Image Prompt:
Animals celebrating, fireworks, laughter ::8. Cartoonish style, lively colors ::2. Lighthearted, joyful ::1.

Please let me know if this outline meets your requirements, and I'll generate the story text once you confirm.
```

Me:

```
The image generator is more difficult to work with compared to you, this prompt created a realistic image

"Animal farmers, bustling market ::8. Vegetable stands, rolling hills ::4. Cartoonish style, lively colors ::2. Lighthearted, fun ::1 "

The other ones work so that's an improvement. Let's try again with a new story. this time try to make the image prompts more similar in style.
```

GPT:

```
Title: The Mysterious Weather Machine

Act 1 - Setup
Image prompt:
Animals living in a colorful village ::8. Quaint houses, peaceful scenery ::4. Cartoonish style, bright colors ::2. Lighthearted, whimsical ::1.

Bullet points:

    In a colorful village, animals live in quaint houses, enjoying a peaceful life and whimsical scenery.
    A mysterious weather machine suddenly appears, causing unpredictable and chaotic weather changes in the village.

Act 2 - Confrontation
Image prompt:
Animals investigating, puzzled expressions ::8. Clues, mishaps, comical weather changes ::4. Cartoonish style, bright colors ::2. Humorous, adventure ::1.

Bullet points:

    Determined to solve the mystery, the animals form a team and start investigating the weather machine, encountering comical weather-related mishaps along the way.
    They follow clues and work together, overcoming obstacles and humorous situations as they try to restore the village's natural weather patterns.

Act 3 - Resolution
Image prompt:
Animals fixing the weather machine, teamwork ::8. Weather returning to normal, relief ::4. Cartoonish style, bright colors ::2. Heartwarming, triumphant ::1.

Bullet points:

    With teamwork and ingenuity, the animals finally manage to fix the weather machine, restoring the village's normal weather patterns.
    The village rejoices in the heartwarming triumph, with newfound appreciation for their peaceful life and natural weather.

Ending Image Prompt:
Animals celebrating, sunny skies, rainbow ::8. Cartoonish style, bright colors ::2. Lighthearted, joyful ::1.

Please let me know if this outline meets your requirements, and I'll generate the story text once you confirm.
```

Me:

```
Let's hear the story
```

GPT:

```
Title: The Mysterious Weather Machine

Act 1 - Setup

In a whimsical world, a community of animals lived in a colorful village, their quaint houses nestled among peaceful scenery. Life was simple, and the villagers enjoyed the calm and predictable weather that graced their home. One day, however, a mysterious weather machine appeared in the village, causing unpredictable and chaotic weather changes that disrupted their once peaceful lives.

Act 2 - Confrontation

Determined to solve the mystery, the animals formed a team and started investigating the peculiar weather machine. As they delved into the mystery, they encountered comical weather-related mishaps, such as sudden downpours, snowstorms, and unexpected gusts of wind. They followed clues and worked together, overcoming obstacles and humorous situations as they tried to restore the village's natural weather patterns.

Act 3 - Resolution

With teamwork and ingenuity, the animals finally managed to fix the weather machine, returning the village's weather to its normal, predictable state. The sun shone brightly once again, and a beautiful rainbow stretched across the sky, symbolizing the end of the chaotic weather changes.

The village rejoiced in the heartwarming triumph, with newfound appreciation for their peaceful life and natural weather. As they celebrated under the sunny skies, the animals knew that their sense of unity and adventure had brought them even closer together, strengthening their bonds and deepening their love for their charming, colorful village.
```

Me:

```
OK that's good. Here's some ideas on how to improve the image promise even more let's always apply the style to the animals. Let's try Bob Ross style again. This style should be in the same layer as the animals and let's give that layer a weight of eight now let's try again with a new story, the characters and theme can be up to you
```

GPT:

```
Title: The Enchanted Paintbrush

Act 1 - Setup
Image prompt:
Bob Ross style animals, peaceful forest ::8. Quaint treehouses, art studio ::4. Happy trees, lush foliage ::2. Magical, inspiring ::1.

Bullet points:

    In a peaceful forest, animals live in quaint treehouses and have an art studio where they create beautiful paintings.
    A magical paintbrush is discovered that has the power to bring any painting to life.

Act 2 - Confrontation
Image prompt:
Animals experimenting with paintbrush, unexpected outcomes ::8. Bob Ross style animals, surprises ::4. Happy accidents, amusing scenarios ::2. Lighthearted, entertaining ::1.

Bullet points:

    The animals take turns using the enchanted paintbrush, but their inexperience causes unexpected and amusing outcomes.
    The animals must navigate the surprises and find a way to manage the magical paintbrush's powers while maintaining harmony in their forest home.

Act 3 - Resolution
Image prompt:
Bob Ross style animals, mastering the paintbrush ::8. Enchanting creations, beautiful forest ::4. Happy trees, new friends ::2. Heartwarming, triumphant ::1.

Bullet points:

    Through teamwork and practice, the animals learn to master the enchanted paintbrush, creating beautiful and enchanting creations that enhance their forest home.
    Their magical art brings happiness to the forest, and the animals celebrate their newfound skill and the wonderful new friends their paintings have brought to life.

Ending Image Prompt:
Bob Ross style animals, group painting, sunset ::8. Happy trees, forest celebration ::2. Heartwarming, friendship ::1.

Please let me know if this outline meets your requirements, and I'll generate the story text once you confirm.
```

Me:

```
Let's try again this time let's try Robert munch for the style artist. Let's try again with a new story. I like your ideas but I'm still trying to get the images to line up. That's why I'm not asking you to generate the text. I trust you'll do a good job if I ask you to, feel free to incorporate your own ideas into improving the prompts. Each story should have for images with a consistent style. Maybe you can also generate three possible prompts for any given image
```

GPT:

```
Title: The Great Cookie Caper

Act 1 - Setup
Image prompt options:

    Robert Munsch style animals, baking contest ::8. Village square, delicious cookies ::4. Cheerful, anticipation ::1.
    Animal bakers, village competition ::8. Robert Munsch style, cookie displays ::4. Lighthearted, excitement ::1.
    Cookie contest, animal participants ::8. Robert Munsch style, festive atmosphere ::4. Joyful, eager ::1.

Bullet points:

    In a charming village, animals are preparing for a baking contest, with the most delicious cookies being displayed in the village square.
    The atmosphere is cheerful and filled with anticipation as the contestants eagerly await the judges' decision.

Act 2 - Confrontation
Image prompt options:

    Cookie thief, sneaky raccoon ::8. Robert Munsch style animals, surprise ::4. Chasing, laughter ::2. Comical, adventure ::1.
    Raccoon bandit, cookie heist ::8. Animal pursuit, Robert Munsch style ::4. Funny chase, obstacles ::2. Lighthearted, action ::1.
    Mischievous raccoon, stolen cookies ::8. Robert Munsch style, animal chase ::4. Humorous encounters, determination ::2. Playful, pursuit ::1.

Bullet points:

    Just as the judges are about to announce the winner, a sneaky raccoon steals the top cookies and dashes off, causing uproarious laughter and surprise.
    The animal contestants band together, engaging in a comical and determined chase through the village to retrieve their prized cookies.

Act 3 - Resolution
Image prompt options:

    Raccoon caught, shared cookies ::8. Robert Munsch style animals, forgiveness ::4. Friendship, celebration ::2. Heartwarming, unity ::1.
    Cookie recovery, contrite raccoon ::8. Animal forgiveness, Robert Munsch style ::4. Celebratory feast, togetherness ::2. Lighthearted, harmony ::1.
    Reformed raccoon, returned cookies ::8. Robert Munsch style, animal reconciliation ::4. Festive gathering, camaraderie ::2. Warm, happy ending ::1.

Bullet points:

    The animals finally catch the raccoon, who apologizes for the cookie theft and returns the stolen treats.
    Instead of being angry, the contestants forgive the raccoon, and they all share the cookies in a heartwarming celebration of friendship and unity.

Ending Image Prompt options:

    Animals enjoying cookies together, moonlit night ::8. Robert Munsch style, contentment ::2. Heartwarming, friendship ::1.
    Cookie feast, happy animal friends ::8. Robert Munsch style, starry sky ::2. Joyful, camaraderie ::1.
    Animal friends sharing cookies, nighttime celebration ::8. Robert Munsch style, satisfaction ::2. Warm, conviviality ::1.

Please let me know which image prompt options you would like to use for each section, and I'll generate the story text once you confirm.
```

Me:

```
You only need to present the image options I'll handle, selecting the best one. Can you generate the text for the story?
```

GPT:

```
Title: The Great Cookie Caper

Act 1 - Setup

In a charming village, animals were preparing for a grand baking contest. The village square was bustling with excitement as the contestants displayed the most delicious cookies they had baked. The atmosphere was cheerful and filled with anticipation as the contestants eagerly awaited the judges' decision. Robert Munsch style illustrations brought the scene to life, creating a lighthearted and joyful setting.

Act 2 - Confrontation

Just as the judges were about to announce the winner, a sneaky raccoon darted in and stole the top cookies from the display. The raccoon dashed off with the prized treats, causing uproarious laughter and surprise among the onlookers. The animal contestants, determined not to let the thief get away with their hard work, banded together and engaged in a comical and determined chase through the village to retrieve their prized cookies. The chase was filled with humorous encounters and obstacles, each one depicted in a playful and entertaining Robert Munsch style.

Act 3 - Resolution

Finally, the animals managed to corner the raccoon, who sheepishly apologized for the cookie theft and returned the stolen treats. Instead of being angry, the contestants forgave the raccoon, recognizing the opportunity to embrace friendship and unity. They all gathered together, raccoon included, and shared the cookies in a heartwarming celebration of friendship and unity. The village square was now filled with laughter and contentment as the animal friends enjoyed their cookie feast under the moonlit night, captured in a warm and convivial Robert Munsch style illustration.

The Great Cookie Caper was a testament to the power of forgiveness, friendship, and the joy of sharing a delightful treat with new friends.
```

Me:

```
Yes, that's great now I know we've had a bit of back-and-forth and it took a bit of experimentation for you to learn how to generate this. I want to train a new chat with a bot just like you and have the bot. Learn how to do what you just did, could you give me a summary of what you learned format it in a way that is optimal for another large language model to understand I assume the model is going to have the same architecture and everything as you do
```

GPT:

```
Summary of the process to generate a story with image prompts:

    Choose an art style and artist (e.g., Robert Munsch) to apply consistently to all image prompts for a given story. Ensure the style is mentioned in each image prompt and has a high weight (e.g., 8).
    Divide the story into three acts and create image prompts for each act and an additional one for the ending, making sure they follow the same style and theme.
    When generating image prompts, provide multiple options for each section if needed, but make sure they are consistent with the chosen art style and theme.
    Create a bullet point summary for each act of the story, describing the main events and characters.
    After the user confirms the summary and selected image prompts, generate the full story text based on the approved outline, focusing on the events and characters while keeping the tone and theme consistent.

Tips:

    Be mindful of the user's feedback and incorporate it into the process to improve the generated stories and image prompts.
    Ensure the art style is applied consistently to all prompts in a way that enhances the story's atmosphere and setting.
    Pay attention to the user's preferences regarding character naming, tone, and other story elements, and adapt accordingly.

By following this process and considering the user's preferences and feedback, a large language model can successfully generate stories using image prompts while maintaining consistency in style and theme.
```

Me:

```
The new model didn't know about the name also for the art style brother use Dr. Seuss as the example. Also, for the image promise remember I had to give you examples they're pretty specific format, so can you include some examples how I want the other model didn't include them at all
```

GPT:

```
I apologize for the oversight. Here's the revised summary for training a new model, using Dr. Seuss as the art style example and including specific image prompt examples.

Summary of the process to generate a story with image prompts:

    Choose an art style and artist (e.g., Dr. Seuss) to apply consistently to all image prompts for a given story. Ensure the style is mentioned in each image prompt and has a high weight (e.g., 8).
    Divide the story into three acts and create image prompts for each act and an additional one for the ending, making sure they follow the same style and theme.
    When generating image prompts, provide multiple options for each section if needed, but make sure they are consistent with the chosen art style and theme.
    Create a bullet point summary for each act of the story, describing the main events and characters.
    After the user confirms the summary and selected image prompts, generate the full story text based on the approved outline, focusing on the events and characters while keeping the tone and theme consistent.

Examples of image prompts in Dr. Seuss style:

Act 1 Image Prompt:
Whimsical forest, Dr. Seuss style animals ::8. Quirky trees, colorful flowers ::4. Playful, fun atmosphere ::1.

Act 2 Image Prompt:
Dr. Seuss style animals, adventurous journey ::8. Odd-shaped mountains, winding paths ::4. Lighthearted challenges, teamwork ::1.

Act 3 Image Prompt:
Celebration, Dr. Seuss style animal party ::8. Unique decorations, lively music ::4. Joy, friendship, and accomplishments ::1.

Ending Image Prompt:
Dr. Seuss style animals, peaceful sunset ::8. Happy faces, newfound friendships ::4. Contentment, warm colors ::1.

Tips:

    Be mindful of the user's feedback and incorporate it into the process to improve the generated stories and image prompts.
    Ensure the art style is applied consistently to all prompts in a way that enhances the story's atmosphere and setting.
    Pay attention to the user's preferences regarding character naming, tone, and other story elements, and adapt accordingly.

By following this process and considering the user's preferences and feedback, a large language model can successfully generate stories using image prompts while maintaining consistency in style and theme.

```

I add this input to iterate stories faster:

Me:

```

Let's do another story this time no more bullet points just give the full text along with the image prompts. Keep it split up in acts and clearly delineate them.

```

I'll post some for documentation sake, but nothing new happens. I just keep asking "Another" until I get rate limited.

GPT:

```
Title: The Enchanted Paintbrush

Act 1 - Setup

Image Prompt: Dr. Seuss style animals, cozy village ::8. Art studio, paintings, easel ::4. Aspiring artist, creativity ::1.

In a cozy village filled with Dr. Seuss style animals, there was a small art studio, filled with colorful paintings and an easel for an aspiring artist. A young elephant named Elara had a passion for painting and spent her days creating vibrant landscapes and whimsical scenes that brought joy to the villagers.

One day, a mysterious traveler visited the village, carrying a beautifully crafted paintbrush said to possess magical powers. Intrigued, Elara traded one of her most cherished paintings for the enchanted paintbrush, eager to discover its true potential.

Act 2 - Confrontation

Image Prompt: Dr. Seuss style animals, enchanted paintbrush ::8. Magical creations, astonishing landscapes ::4. Unintended consequences, newfound responsibility ::1.

As Elara began to paint with the enchanted brush, she discovered that her paintings came to life, creating astonishing landscapes and magical creatures. The village was in awe of her newfound talent, and her artwork became the talk of the town.

However, with her magical creations came unintended consequences. The enchanting scenes she painted began to affect the village, causing strange occurrences and disruptions in daily life. Realizing the responsibility she now held, Elara set out on a quest to learn how to control the enchanted paintbrush's powers.

Act 3 - Resolution

Image Prompt: Dr. Seuss style animals, journey of self-discovery ::8. Ancient art master, wisdom ::4. Balance, harmony, artistic growth ::1.

Elara's journey led her to an ancient art master, who taught her the importance of balance and harmony in both her art and life. Through practice and patience, Elara learned to wield the enchanted paintbrush's powers responsibly, creating beautiful scenes that enhanced the village without causing harm.

Ending Image Prompt:
Dr. Seuss style animals, village celebration ::8. Elara's artwork, enchanted paintbrush ::4. Joy, unity, appreciation ::1.

With her newfound mastery of the enchanted paintbrush, Elara's artwork brought joy and unity to the village. The animals gathered to celebrate her achievements, marveling at the magical creations she had brought into the world. Through her journey, Elara learned that with great power comes great responsibility, and that true artistic growth comes from within.

```

Me:

```
Let's do another story, but use van Gogh as the artist style
```

GPT:

```
Title: The Starry Night Festival

Act 1 - Setup

Image Prompt: Van Gogh style animals, quaint village ::8. Preparations for a festival, decorations ::4. Excitement, anticipation ::1.

In a quaint village populated by Van Gogh style animals, a sense of excitement filled the air. The villagers were busy preparing for the annual Starry Night Festival, an event inspired by the beauty of Van Gogh's paintings. They hung lanterns, set up tables with delicious treats, and decorated the town square with swirling patterns reminiscent of the famous painting, "The Starry Night."

Act 2 - Confrontation

Image Prompt: Van Gogh style animals, festival challenges ::8. Creative contests, teamwork ::4. Friendly competition, determination ::1.

As the Starry Night Festival began, the Van Gogh style animals participated in various creative contests and activities, showcasing their artistic talents and teamwork. From painting competitions to collaborative sculptures, the villagers engaged in friendly rivalries, determined to create the most impressive works of art.

However, as the festival progressed, the competitive spirit grew intense, and some animals lost sight of the true meaning of the celebration. The atmosphere shifted, and the joy of the festival was at risk of being overshadowed by rivalry.

Act 3 - Resolution

Image Prompt: Van Gogh style animals, rediscovering the spirit of the festival ::8. Sharing art, collaboration ::4. Unity, appreciation of beauty ::1.

Realizing the importance of the Starry Night Festival's true spirit, the village elder called for a moment of reflection. The animals gathered together and began to appreciate each other's art, seeing the beauty in their collective creativity. They shared their skills, collaborated on projects, and reminded one another of the unity and appreciation that the festival represented.

Ending Image Prompt:
Van Gogh style animals, harmonious celebration ::8. Starry night sky, lanterns ::4. Joy, community, artistic expression ::1.

Under a starry night sky, the Van Gogh style animals joined together in a harmonious celebration, their lanterns casting a warm glow over the village. The joy of artistic expression and the appreciation of beauty brought the community together, as they danced and sang beneath the swirling stars. Through the Starry Night Festival, the villagers learned the value of unity and the power of shared creativity.
```

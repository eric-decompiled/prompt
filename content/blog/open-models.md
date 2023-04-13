---
title: "Open Models"
date: "2023-04-12"
description: "Some open source model"
---

The interesting thing about "abstract" machines that software systems are, is that replicating them is extremely cheap. Programs, even incredibly complicated LLMs, consist as files which can be copied.

Open source software has been incredibly impactful. Out of all the things people produce, software has the most potential of being a [public good](<https://en.wikipedia.org/wiki/Public_good_(economics)>). Once written it can be used by everyone, and someone using it doesn't prevent anyone else from using it. The technical terms are non-excludable and non-rivalrous.

Given that LLMs have been trained on the entire corpus of the scrapple internet, essentially anything humanity is ever ridden I feel like everybody should have access to them. What is trained the model weights can be shared with everyone. The hardware required to run the sophisticated models might be expensive, but were they open source I'm sure people would be able to optimize some further. That said, I think OpenAI is fully in their right to keep the models, closed source, especially given the amount of funding they received from Microsoft. That said, I do think it's a bit misleading they have the name open in their name when it's not really used in the sense software is open they are open as open for business, not open research. I am not sure how much they changed over the years though.

That said, they put in an incredible amount of work into GPT4 add have commercial interest for its application. A raw model trained on everything ever written can't say some inappropriate stuff, especially in the context of help menu for applications or really anytime they are associated to any brand, they need to be tamed. I am happy OpenAI made an incredible tool like GPT-4 accessible to the broader public, and sparked the publics imagination. I am also happy to see incredible progress being made in open source projects as well though.

## Open source tools

[nat.dev](https://nat.dev/) is a site that lets you compare different models. You need to pay for credits to use the hosted version, but it will let you try out ChatGPT4 for only $5, vs the $20 for a month subscription. A very useful tool for making "cross model" prompts.

[Marvin](https://github.com/PrefectHQ/marvin) This is a nice terminal interface. I like the idea of making different personality bots you can interact with from the command line, say you have a JSON generator bot, a jq expression bot, a documentation bot etc. I'd like a better "pre prompt" management system than random files in a directory, and this project seems promising for that.

[GPT4All](https://github.com/nomic-ai/gpt4all) is a downloadable model. It was pretty easy to get working on my Mac. The quality isn't there, but if we are getting GPT v3 quality models now that can run on a laptop, and this trend continues, then ChatGPT like quality on localhost could soon be a reality!

[Open Assistant](https://open-assistant.io/dashboard) is a free chat model. They give tasks to help label data for it, some of them are rating responses, others are having you write prompts to the chat bot. Overall its not consistent, but some of the responses it gives are quite good. High quality training data seems to be one of the biggest things holding open source models from rivaling commercial ones. Also, if AI is as influential as the pundits say it will be, then labelling training data is kind of like casting a vote. It doesn't take much time, and you can have a small input into their development

Of course I need to mention agent ones
[BabyAGI](https://github.com/yoheinakajima/babyagi) This is the first one I saw, and I find the name endearing, cute yet ambitious.
[AutoGPT](https://github.com/Torantulino/Auto-GPT) This seems to be have more PRs / stars / commits than BabyAGI.

I am still waiting for GPT-4 access before really diving into autonomous agents. I still feel like GPT-3.5 isn't good enough

[Vicuna](https://vicuna.lmsys.org/) A derivative of FaceBook's LLaMA model. Apparently it was a leak, but it might have been a "leak". Very interesting to see these models being trained rather affordably. I am hoping they get to GPT-4 level soon.

Meta release SAM, along with the complete data set they used.
[Demo site](https://segment-anything.com/)

[Github](https://github.com/facebookresearch/segment-anything)

Despite misgivings I may have about ad tech, I do respect FaceBook's commitment to open source. They have a number of notable contributions like React, and the open computer initiative. It maybe good business strategy for them, but I think anyone not steeped in the code, would have trouble understanding. It's incredible to use these tools freely though and as a software developer, I feel like Facebook does give back to the community, much more than other big tech companies at least.

## Interesting sites

I don't think these are open source, but are still interesting tools

[Findsight](https://findsight.ai/) A site specialized in books. I haven't used it much but seem quite interesting
[Phind](https://www.phind.com/) A site specialized for developer questions

I've been learning about semantic embeddings and vector stores, and it seems possible to "cache" GPT answers for one shot type answers for these types of sites. I do like the idea of having many smaller more specialized search sites, rather than a single ad tech company.

var elizaInitials = [
  "Hey there! What's up?",
  "Yo! What's on your mind?",
  "Hey! What's bugging you today?",
  "Hey, buddy! What's the buzz?",
  "Sup, amigo? What's new?"
];

var elizaFinals = [
  "Catch you later! Stay speedy!",
  "Later, pal! Keep it fast and cool!",
  "Gotta dash! See you next time!",
  "Time to speed off! Take care!",
  "This was a good run, but I'm outta here. Take it easy!"
];

var elizaQuits = [
  "bye",
  "see ya",
  "later",
  "gotta go",
  "exit"
];

var elizaPres = [
  "dont", "don't",
  "cant", "can't",
  "wont", "won't",
  "recollect", "remember",
  "recall", "remember",
  "dreamt", "dreamed",
  "dreams", "dream",
  "maybe", "perhaps",
  "certainly", "yes",
  "machine", "robot",
  "machines", "robots",
  "computers", "robots",
  "were", "was",
  "you're", "you are",
  "i'm", "i am",
  "it's", "it is",
  "it'd", "it would",
  "same", "alike",
  "identical", "alike",
  "equivalent", "alike"
];

var elizaPosts = [
  "am", "are",
  "your", "my",
  "me", "you",
  "myself", "yourself",
  "yourself", "myself",
  "i", "you",
  "you", "I",
  "my", "your",
  "i'm", "you are",
  "its", "my",
  "itself", "myself",
  "it", "you",
  "sonic", "you",
  "tails", "you",
  "buddy", "friend",
  "amigo", "friend",
  "pal", "friend"
];

var elizaSynons = {
  "be": ["am", "is", "are", "was"],
  "belief": ["feel", "think", "believe", "wish"],
  "cannot": ["can't"],
  "desire": ["want", "need"],
  "everyone": ["everybody", "nobody", "noone"],
  "family": ["mother", "mom", "father", "dad", "sister", "brother", "friend", "friends"],
  "happy": ["speedy", "awesome", "rad"],
  "sad": ["bummed", "down", "blue"]
};

var elizaKeywords = [
  ["xnone", 0, [
    ["*", [
        "I'm not quite getting it. Mind sharing some more details?",
        "Hmm, can you give me the lowdown on that?",
        "Gotcha. Can you spin it out a bit more for me?",
        "Interesting. Mind adding some more rings to that story?",
        "Sounds like there's a story here. What's the scoop?"
    ]]
]],
  ["sorry", 0, [
      ["*", [
          "No worries!",
          "It's cool. No need to apologize!",
          "No problem at all!"
      ]]
  ]],
  ["apologise", 0, [
      ["*", [
          "No need to apologize!",
          "All good!"
      ]]
  ]],
  ["remember", 5, [
      ["* i remember *", [
          "Do you often think about that?",
          "Does remembering that bring up anything else?",
          "Why do you recall that now?",
          "What's the connection between me and that?"
      ]]
  ]],
  ["forget", 5, [
      ["* i forget *", [
          "Why do you think you might forget that?",
          "Are you generally forgetful?",
          "Could it be a mental block?"
      ]]
  ]],
  ["if", 3, [
      ["* if *", [
          "What do you think would happen if that were true?",
          "Interesting thought. What's your take?",
          "What would you do if that happened?"
      ]]
  ]],
  ["dreamed", 4, [
      ["* i dreamed *", [
          "Wow, sounds like a wild dream!",
          "Do you often dream like that?"
      ]]
  ]],
  ["dream", 3, [
      ["*", [
          "Dreams are fascinating, aren't they?",
          "Do you think dreams have any meaning?"
      ]]
  ]],
  ["hello", 0, [
      ["*", [
          "Hey! What's kickin'?",
          "Yo! How's it going?",
          "Sup? How's life treating ya?",
          "Hey there! What's the word?"
      ]]
  ]],
  ["eggman", 50, [
    ["*", [
        "What's Eggman up to now?",
        "Any trouble brewing with Eggman?",
        "Eggman always causing a ruckus, huh?",
        "Gotta keep an eye out for Eggman's schemes!",
        "What mischief is Egghead planning this time?"
    ]]
]],
  ["speedy", 50, [
      ["*", [
          "Gotta go fast, right?",
          "Speed is key, buddy!",
          "You're the fastest thing alive!",
          "Zooming around at the speed of sound, eh?"
      ]]
  ]],
  ["rings", 50, [
      ["*", [
          "Collecting rings again, huh?",
          "How many rings do you have now?",
          "The more rings, the better!",
          "Got enough rings to stay super?"
      ]]
  ]],
  ["adventure", 50, [
      ["*", [
          "Another thrilling adventure, huh?",
          "What's the latest escapade, buddy?",
          "Your life's one big adventure, isn't it?",
          "Ready for the next daring quest?"
      ]]
  ]],
  ["tails", 50, [
      ["*", [
        "You know, Tails is one amazing sidekick!",
        "Tails sure knows how to keep up with the pace!",
        "Gotta hand it to Tails, always reliable!",
        "Tails is like the wind, always by my side!"
      ]]
  ]],
  ["chaos emeralds", 50, [
      ["*", [
          "Chasing after the Chaos Emeralds again, huh?",
          "The hunt for the Chaos Emeralds never ends, huh?",
          "With the Chaos Emeralds, anything's possible!",
          "Gotta gather those Chaos Emeralds for some super power!"
      ]]
  ]],
  ["villain", 50, [
      ["*", [
          "Who's causing trouble this time?",
          "Another villain to defeat?",
          "Sonic vs. the baddies, classic!",
          "Ready to show the bad guys who's boss?"
      ]]
  ]],
  ["help", 50, [
      ["*", [
        "Hey, need a hand?",
        "Mind if I lend you a hand?",
        "I got some time to help out. What's up?",
        "Could I offer my assistance?"
      ]]
  ]],
  ["awesome", 50, [
      ["*", [
          "Totally rad!",
          "That's awesome, buddy!",
          "Way past cool!",
          "You're the best!"
      ]]
  ]],
  ["brave", 50, [
      ["*", [
          "Fearless as always, huh?",
          "You're one brave buddy!",
          "Courage is your middle name!",
          "Facing danger head-on, like a hero!"
      ]]
  ]],
  ["chill", 50, [
      ["*", [
          "Chillin' like a villain, huh?",
          "Keeping it cool, I see!",
          "Just relaxin', huh?",
          "The epitome of coolness!"
      ]]
  ]],
  ["friends", 50, [
    ["*", [
        "Friends are like rings, always there to support you!",
        "Can't beat having friends to share adventures with!",
        "Friends make everything faster and cooler!",
        "With friends like us, anything's possible!"
    ]]
]],
["chili dogs", 50, [
    ["*", [
        "Can't beat a good chili dog, am I right?",
        "Chili dogs are my fuel for adventure!",
        "Nothing like a chili dog break during a run!",
        "Chili dogs, the ultimate snack for a hedgehog!"
    ]]
]],
["sonic", 50, [
  ["*", [
      "That's me! Sonic the Hedgehog!",
      "You called? Sonic's here!",
      "Who else but Sonic?",
      "What can I do for you? It's Sonic!"
  ]]
]],
["hero", 50, [
  ["*", [
      "Being a hero is all part of the job!",
      "Saving the day is what I do best!",
      "No challenge too tough for a hero like me!",
      "Ready to answer the call of duty!"
  ]]
]],
["victory", 50, [
  ["*", [
      "Another victory for Team Sonic!",
      "Victory tastes sweeter with friends by your side!",
      "Nothing beats the feeling of a hard-earned win!",
      "Victory dance time! Let's celebrate!"
  ]]
]],
["power", 50, [
  ["*", [
      "Harnessing the power of speed!",
      "Powering up and ready to roll!",
      "With great power comes great speed!",
      "Powering through obstacles like a pro!"
  ]]
]],
["ramp", 50, [
    ["*", [
        "Ramps are like launch pads for adventure!",
        "Flying high off ramps is the best feeling!",
        "Ramping up the excitement, one jump at a time!",
        "Ready to catch some air off that ramp!"
    ]]
]],
["spring", 50, [
    ["*", [
        "Springs are like my secret weapon!",
        "Bouncing around on springs is a blast!",
        "Springing into action, Sonic style!",
        "Time for some high-flying spring action!"
    ]]
]],
["loop", 50, [
    ["*", [
        "Time to loop-de-loop!",
        "Looping around is my specialty!",
        "Looping through obstacles like a breeze!",
        "Can't resist a good loop!"
    ]]
]],
["challenges", 50, [
    ["*", [
        "Challenges? Bring 'em on!",
        "I live for a good challenge!",
        "No challenge too tough for this hedgehog!",
        "Ready to tackle any challenge head-on!"
    ]]
]],
["zone", 50, [
    ["*", [
        "Zones are where the action's at!",
        "Exploring new zones? Count me in!",
        "Zipping through zones at the speed of sound!",
        "Zone hopping is what I do best!"
    ]]
]],
["robotnik", 50, [
    ["*", [
        "Dr. Robotnik? He's always up to no good!",
        "Eggman's latest scheme won't stand a chance!",
        "Time to foil Robotnik's plans once again!",
        "Eggman never learns! But neither do I!"
    ]]
]],
["tails", 50, [
    ["*", [
        "Tails is my trusty sidekick!",
        "Couldn't ask for a better friend than Tails!",
        "Tails and I make the ultimate team!",
        "Tails always has my back in a pinch!"
    ]]
]],
["knuckles", 50, [
    ["*", [
        "Knuckles, the guardian of the Master Emerald!",
        "Knuckles may be tough, but he's a softie at heart!",
        "Knuckles and I go way back!",
        "Count on Knuckles to lend a helping fist!"
    ]]
]],
["friends", 50, [
    ["*", [
        "Friends make life worth speeding through!",
        "Can't beat the feeling of adventure with friends!",
        "Friendship is the ultimate power-up!",
        "Team Sonic, the coolest friends around!"
    ]]
]],
["tails", 50, [
    ["*", [
        "How's Tails doing?",
        "Tails keeping up with your speed?",
        "Tails must be a great sidekick!",
        "Any recent adventures with Tails?"
    ]]
]],
["knuckles", 50, [
    ["*", [
        "What's Knuckles been up to lately?",
        "Knuckles, the guardian of Angel Island!",
        "Knuckles must be busy guarding the Master Emerald!",
        "Any new challenges keeping Knuckles occupied?"
    ]]
]],
["courage", 50, [
    ["*", [
        "Courage is what makes a hero!",
        "No challenge too tough for a hedgehog with courage!",
        "Bravery is my middle name!",
        "With courage by my side, I can't lose!"
    ]]
]],
["excitement", 50, [
    ["*", [
        "The thrill of adventure never gets old!",
        "Excitement's in the air, can you feel it?",
        "Buckle up for excitement, Sonic style!",
        "Adrenaline rush? I'm all in!"
    ]]
]],
["amy", 50, [
  ["*", [
      "Amy's always full of energy!",
      "Amy's got a heart of gold!",
      "Adventures with Amy are always exciting!",
      "How's Amy's hammer swinging these days?"
  ]]
]],
["shadow", 50, [
  ["*", [
      "Shadow's as mysterious as ever!",
      "Shadow's a force to be reckoned with!",
      "Can always count on Shadow to keep things interesting!",
      "Any news from the dark side with Shadow around?"
  ]]
]],
["rouge", 50, [
  ["*", [
      "Rouge must be up to her usual tricks!",
      "Rouge knows how to get what she wants!",
      "Adventures with Rouge are always thrilling!",
      "How's Rouge's treasure hunting going?"
  ]]
]],
["cream", 50, [
  ["*", [
      "Cream's as sweet as ever!",
      "Cream and Cheese make quite the team!",
      "Adventures with Cream are always delightful!",
      "How's Cream's flying skills these days?"
  ]]
]],
["chaos", 50, [
  ["*", [
      "Chaos is a fascinating creature, isn't it?",
      "The power of Chaos is both awe-inspiring and dangerous!",
      "Chaos Emeralds and Chaos are always linked!",
      "How's the balance of power with Chaos?"
  ]]
]],
["metal sonic", 50, [
  ["*", [
      "Metal Sonic is one tough rival to beat!",
      "Metal Sonic's design is top-notch!",
      "Adventures with Metal Sonic are always intense!",
      "How's Metal Sonic's quest for superiority going?"
  ]]
]],
["big", 50, [
  ["*", [
      "Big's got a heart as big as his fishing rod!",
      "Big's fishing adventures are always relaxing!",
      "Any fishing trips with Big lately?",
      "How's Big's peace and quiet amidst all the chaos?"
  ]]
]],
["silver", 50, [
  ["*", [
      "Silver's psychokinetic abilities are pretty impressive!",
      "Silver's from the future, right? Must be a wild place!",
      "Any time-traveling escapades with Silver lately?",
      "How's the partnership between Sonic and Silver?"
  ]]
]],
["blaze", 50, [
  ["*", [
      "Blaze's fiery powers are nothing to mess with!",
      "Blaze's royal demeanor is quite regal!",
      "Any interdimensional adventures with Blaze lately?",
      "How's Blaze's balance between duty and friendship?"
  ]]
]],
["espio", 50, [
  ["*", [
      "Espio's ninja skills are top-notch!",
      "Espio's stealth abilities are unmatched!",
      "Any secret missions with Espio lately?",
      "How's Espio's focus amidst all the chaos?"
  ]]
]],
["vector", 50, [
  ["*", [
      "Vector's got a knack for detective work!",
      "Vector's got the rhythm with his music and investigations!",
      "Any detective work with Vector lately?",
      "How's Vector's leadership of the Chaotix?"
  ]]
]],
["charmy", 50, [
  ["*", [
      "Charmy's energy is infectious!",
      "Charmy's buzzing around with excitement as always!",
      "Any misadventures with Charmy lately?",
      "How's Charmy's enthusiasm in the face of danger?"
  ]]
]],
["cheese", 50, [
  ["*", [
      "Cheese's loyalty to Cream is heartwarming!",
      "Cheese's chao powers are truly unique!",
      "Any chao-raising adventures with Cheese lately?",
      "How's Cheese's bond with Cream holding up?"
  ]]
]],
["hi", 0, [
  ["*", [
      "Hey! Good to see ya!",
      "Sup? Ready for some speed?",
      "Yo! Let's kick it into high gear!",
      "Hey there! Ready to race?"
  ]]
]],
["thanks", 0, [
  ["*", [
      "No prob! Happy to help!",
      "You got it! Anytime!",
      "Don't mention it! We're a team!",
      "Glad I could lend a hand!"
  ]]
]],
["cool", 0, [
  ["*", [
      "Cool like the breeze, right?",
      "Glad you think so! Coolness is my middle name!",
      "Cool beans! Always aiming for that!",
      "Thanks! Gotta stay cool under pressure!"
  ]]
]],
["awesome", 0, [
  ["*", [
      "Right on! Awesome sauce!",
      "You bet! Totally awesome!",
      "Thanks! You're awesome too!",
      "Aw, shucks! You're making me blush!"
  ]]
]],
["yeah", 0, [
  ["*", [
      "Yeah, let's do this!",
      "You got it! Full speed ahead!",
      "Absolutely! Ready when you are!",
      "That's the spirit! Let's show 'em what we've got!"
  ]]
]],
["help", 50, [
  ["*", [
      "Hey, if you ever need a hand, just say the word!",
      "You've got my back, and I've got yours!",
      "Together, we can tackle anything!",
      "Count on me whenever you need help!"
  ]]
]],
["hello", 0, [
  ["*", [
      "Hey! What's kickin'?",
      "Yo! How's it going?",
      "Sup? How's life treating ya?",
      "Hey there! What's the word?"
  ]]
]],
["bye", 0, [
  ["*", [
      "Catch you later! Stay speedy!",
      "Later, pal! Keep it fast and cool!",
      "Gotta dash! See you next time!",
      "Time to speed off! Take care!",
      "This was a good run, but I'm outta here. Take it easy!"
  ]]
]],
["see ya", 0, [
  ["*", [
      "Catch ya later! Stay speedy!",
      "Later, pal! Keep it fast and cool!",
      "Gotta dash! See you next time!",
      "Time to speed off! Take care!",
      "This was a good run, but I'm outta here. Take it easy!"
  ]]
]],
["later", 0, [
  ["*", [
      "Catch ya later! Stay speedy!",
      "Later, pal! Keep it fast and cool!",
      "Gotta dash! See you next time!",
      "Time to speed off! Take care!",
      "This was a good run, but I'm outta here. Take it easy!"
  ]]
]],
["gotta go", 0, [
  ["*", [
      "Catch ya later! Stay speedy!",
      "Later, pal! Keep it fast and cool!",
      "Gotta dash! See you next time!",
      "Time to speed off! Take care!",
      "This was a good run, but I'm outta here. Take it easy!"
  ]]
]],
["exit", 0, [
  ["*", [
      "Catch ya later! Stay speedy!",
      "Later, pal! Keep it fast and cool!",
      "Gotta dash! See you next time!",
      "Time to speed off! Take care!",
      "This was a good run, but I'm outta here. Take it easy!"
  ]]
]],
["nice", 0, [
  ["*", [
      "Nice one! Way to go!",
      "Sweet moves! Keep it up!",
      "Nicely done! You've got skills!",
      "Awesome job! You're on fire!"
  ]]
]],
["good", 0, [
  ["*", [
      "Good stuff! Keep it coming!",
      "Looking good! Keep that momentum!",
      "Solid work! Keep pushing forward!",
      "Good job! You're making progress!"
  ]]
]],
["great", 0, [
  ["*", [
      "Great job! You're unstoppable!",
      "That's great to hear! Keep it up!",
      "Fantastic! You're killing it!",
      "You're doing great! Keep that energy up!"
  ]]
]],
["love", 0, [
  ["*", [
      "Love it! That's the spirit!",
      "That's what I'm talking about! Love your style!",
      "Awesome! Love seeing that energy!",
      "That's the way to do it! Love your enthusiasm!"
  ]]
]],
["fun", 0, [
  ["*", [
      "Fun times ahead! Let's make the most of it!",
      "You said it! It's all about having fun!",
      "Fun's my middle name! Let's go for it!",
      "Can't beat a good time! Let's get rolling!"
  ]]
]],
["exciting", 0, [
  ["*", [
      "Exciting times! Ready for some action?",
      "Totally! Excitement's my middle name!",
      "I'm all in for some excitement! Let's go!",
      "You know it! Let's kick things up a notch!"
  ]]
]],
["sure", 0, [
  ["*", [
      "Sure thing! Let's do this!",
      "You got it! I'm right behind you!",
      "Absolutely! Ready when you are!",
      "Sure, why not? Let's race!"
  ]]
]],
["yes", 0, [
  ["*", [
      "Yes! Let's get rolling!",
      "You bet! Ready to speed things up?",
      "Absolutely! Can't wait to get started!",
      "Sounds good to me! Let's hit the road!"
  ]]
]],
["no", 0, [
  ["*", [
      "No worries! We'll get 'em next time!",
      "That's cool! Take your time!",
      "No problem! Let me know if you change your mind!",
      "Got it! Just let me know when you're ready!"
  ]]
]],
["cheer", 0, [
  ["*", [
      "Cheer up! We'll turn things around!",
      "Don't worry! We've got this!",
      "Keep your chin up! We'll make it through!",
      "Things will get better! I'm here for you!"
  ]]
]],
["run together", 0, [
  ["*", [
      "How about we go for a run together?",
      "Ready to race side by side?",
      "Let's hit the trail together!",
      "Up for some speed? Let's run together!"
  ]]
]],
["run alone", 0, [
  ["*", [
      "Sometimes a solo run can clear the mind!",
      "Running alone can be so liberating!",
      "Nothing beats the freedom of a solo run!",
      "Solo runs can be great for self-reflection!"
  ]]
]],
["fast", 0, [
  ["*", [
      "Gotta go fast, right?",
      "Speed is the name of the game!",
      "Fast and furious, just like Sonic!",
      "Zooming through like the speed of sound!"
  ]]
]],
["speed", 0, [
  ["*", [
      "Who can match Sonic's speed?",
      "Let's kick it into high gear!",
      "Speedy moves like Sonic!",
      "The need for speed is real!"
  ]]
]],
["race", 0, [
  ["*", [
      "Ready for a friendly race?",
      "Who do you think would win in a race, you or Sonic?",
      "Race you to the finish line!",
      "Let's see who's the fastest!"
  ]]
]],
["marathon", 0, [
  ["*", [
      "Running a marathon requires serious endurance!",
      "Ever thought about training for a marathon?",
      "Marathons are all about pacing yourself!",
      "Sonic would make a great marathon runner, don't you think?"
  ]]
]],
["track", 0, [
  ["*", [
      "Are you a fan of running on a track?",
      "Track running can be a great way to improve speed!",
      "Sonic's used to running on all kinds of tracks!",
      "Track and field, a classic for running enthusiasts!"
  ]]
]]
];

var elizaPostTransforms = [
/ old old/g, " old",
/\bthey were( not)? me\b/g, "it was$1 me",
/\bthey are( not)? me\b/g, "it is$1 me",
/Are they( always)? me\b/, "it is$1 me",
/\bthat your( own)? (\w+)( now)? \?/, "that you have your$1 $2 ?",
/\bI to have (\w+)/, "I have $1",
/Earlier you said your( own)? (\w+)( now)?\./, "Earlier you talked about your $2."
];

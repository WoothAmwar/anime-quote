import papaparse from "papaparse";

/**
 * Full set of data as an array, with Quote, Character Name, Anime Name
 * @returns The full set of data
 */
export function anime_quote_data() {
  var csv_data = `"People’s lives don’t end when they die, it ends when they lose faith.",Itachi Uchiha,Naruto
"If you don’t take risks, you can’t create a future!",Monkey D Luffy,One Piece
"If you don’t like your destiny, don’t accept it.",Naruto Uzumaki,Naruto
"When you give up, that’s when the game ends.",Mitsuyoshi Anzai,Slam Dunk
All we can do is live until the day we die. Control what we can…and fly free.,Deneil Young,Uchuu Kyoudai or Space Brothers
"Forgetting is like a wound. The wound may heal, but it has already left a scar.",Monkey D Luffy,One Piece
It’s just pathetic to give up on something before you even give it a shot.”,Reiko Mikami,Another
"If you don’t share someone’s pain, you can never understand them.",Nagato,Naruto
"Whatever you lose, you’ll find it again. But what you throw away you’ll never get back.",Himura Kenshin,Rurouni Kenshin
We don’t have to know what tomorrow holds! That’s why we can live for everything we’re worth today!”,Natsu Dragneel,Fairy Tail
Why should I apologize for being a monster? Has anyone ever apologized for turning me into one?,Juuzou Suzuya,Tokyo Ghoul
People become stronger because they have memories they can’t forget.,Tsunade,Naruto
I’ll leave tomorrow’s problems to tomorrow’s me.,Saitama,One Punch Man
"If you wanna make people dream, you’ve gotta start by believing in that dream yourself!",Seiya Kanie,Amagi Brilliant Park
Being lonely is more painful then getting hurt.,Monkey D Luffy,One Piece
There’s no shame in falling down! True shame is to not stand up again!,Shintar Midorima,Kuroko s Basketball
Simplicity is the easiest path to true beauty.,Seishuu Handa,Barakamon
"If you can’t do something, then don’t. Focus on what you can.",Shiroe,Log Horizon
Giving up kills people. When people reject giving up… they finally win the right to transcend humanity.,Alucard,Hellsing
"You can die anytime, but living takes true courage.”",Kenshin Himura,Rurouni Kenshin: Meiji Kenkaku Romantan
Every journey begins with a single step. We just have to have patience.,Milly Thompson,Trigun
It doesn’t do any good to pretend you can’t see what’s going on.,Yuuya Mochizuki,Another
Being weak is nothing to be ashamed of… Staying weak is !!,Fuegoleon Vermillion,Black Clover
To act is not necessarily compassion. True compassion sometimes comes from inaction.,Hinata Miyake,A Place Further than the Universe
A dropout will beat a genius through hard work.,Rock Lee,Naruto
Reject common sense to make the impossible possible.,Simon,Tengen Toppa Gurren Lagann
"Whatever you lose, you’ll find it again. But what you throw away you’ll never get back.",Kenshin Himura,Rurouni Kenshin Meiji Kenkaku Romantan
If you really want to be strong… Stop caring about what your surrounding thinks of you!,Saitama,One Punch Man
"Vision is not what your eyes see, but an image that your brain comprehends.",Touko Aozaki,The Garden of Sinners Kara no Ky kai
"Sometimes, people are just mean. Don’t fight mean with mean. Hold your head high.",Hinata Miyake,A Place Further than the Universe
The ticket to the future is always open.,Vash The Stampede,Trigun
Hard work is worthless for those that don’t believe in themselves.,Naruto Uzumaki,Naruto
A place where someone still thinks about you is a place you can call home.,Jiraiya,Naruto
Life comes at a cost. Wouldn’t it be arrogant to die before you’ve repaid that debt?,Yuuji Kazami,The Fruit of Grisaia Gurizaia no Kajitsu
"You can die anytime, but living takes true courage.",Himura Kenshin,Rurouni Kenshin
Every journey begins with a single step. We just have to have patience.,Milly Thompson,Trigun
"If you just submit yourself to fate, then that’s the end of it.”",Keiichi Maebara,Higurashi When They Cry
It is at the moment of death that humanity has value.,Archer,Fate Series
"People, who can’t throw something important away, can never hope to change anything.",Armin Arlert,Shingeki no Kyojin Attack on Titan
"Whatever you do, enjoy it to the fullest. That is the secret of life.”",Rider,Fate Zero
"Power comes in response to a need, not a desire. You have to create that need.",Goku,Dragon Ball Z
"There are no regrets. If one can be proud of one’s life, one should not wish for another chance.”",Saber,Fate Stay Night
You can’t always hold on to the things that are important. By letting them go we gain something else.”,Kunio Yaobi,Tamako Market
"If you don’t like your destiny, don’t accept it. Instead, have the courage to change it the way you want it to be.",Naruto Uzumaki,Naruto
"Don’t beg for things. Do it yourself, or else you won’t get anything.",Renton Thurston,Eureka Seven
I refuse to let my fear control me anymore.”,Maka Albarn,Soul Eater
"If you can’t find a reason to fight, then you shouldn’t be fighting.”",Akame,Akame Ga Kill
"You should never give up on life, no matter how you feel. No matter how badly you want to give up.”",Canaan,
"People who can’t throw something important away, can never hope to change anything.",Armin Arlelt,Attack on Titan
We can’t waste time worrying about the what if’s.”,Ichigo Kurosaki,Bleach
Fools who don’t respect the past are likely to repeat it.,Nico Robin,One Piece
That’s why I can’t make a change. Everything I do is so… Half-assed.”,Hiroshi Kido,Barakamon
Sometimes it’s necessary to do unnecessary things.,Kanade Jinguuji,Best Student Council
An excellent leader must be passionate because it’s their duty to keep everyone moving forward.,Nico Yazawa,Love Live
Protecting someone means giving them a place to belong. Giving them a place where they can be happy.,Princess Lenessia,Log Horizon
Thinking you’re no-good and worthless is the worst thing you can do,Nobito,Doraemon
"Sometimes I do feel like I’m a failure. Like there’s no hope for me. But even so, I’m not gonna give up. Ever!”",Izuku Midoriya,My Hero Academia
"If you can’t do something, then don’t. Focus on what you can do.”",Shiroe,Log Horizon
"When you lose sight of your path, listen for the destination in your heart.",Allen Walker,D Gray Man
"The moment you think of giving up, think of the reason why you held on so long.”",Natsu Dragneel,Fairy Tail
"Don’t give up, there’s no shame in falling down! True shame is to not stand up again!",Shintaro Midorima,Kuroko No Basket
"No matter how hard or impossible it is, never lose sight of your goal.”",Monkey D Luffy,One Piece
"Life is not a game of luck. If you wanna win, work hard.",Sora,No Game No Life
"The world isn’t perfect. But it’s there for us, doing the best it can….that’s what makes it so damn beautiful.",Roy Mustang,Full Metal Alchemist
"Fear is not evil. It tells you what your weakness is. And once you know your weakness, you can become stronger as well as kinder.",Gildarts Clive,Fairy Tail
To know sorrow is not terrifying. What is terrifying is to know you can’t go back to happiness you could have.,Matsumoto Rangiku,Bleach
Knowing you’re different is only the beginning. If you accept these differences you’ll be able to get past them and grow even closer.,Miss Kobayashi,Dragon Maid
"Don’t be so quick to throw away your life. No matter how disgraceful or embarrassing it may be, you need to keep struggling to find your way out until the very end.",Clare,Claymore
"The world’s not perfect, but it’s there for us trying the best it can. That’s what makes it so damn beautiful.",Roy Mustang,Fullmetal Alchemist
"We are all like fireworks: we climb, we shine and always go our separate ways and become further apart. But even when that time comes, let’s not disappear like a firework and continue to shine.. forever.",Hitsugaya Toshiro,Bleach
"If nobody cares to accept you and wants you in this world, accept yourself and you will see that you don’t need them and their selfish ideas.",Alibaba Saluja,Magi
"When you hit the point of no return, that’s the moment it truly becomes a journey. If you can still turn back, it’s not really a journey.",Hinata Miyake,A Place Further than the Universe
"Those who stand at the top determine what’s wrong and what’s right! This very place is neutral ground! Justice will prevail, you say? But of course it will! Whoever wins this war becomes justice!",Don Quixote Doflamingo,One Piece
"A person grows up when he’s able to overcome hardships. Protection is important, but there are some things that a person must learn on his own.",Jiraiya,Naruto
"Who decides limits? And based on what? You said you worked hard? Well, maybe you need to work a little harder. Is that really the limit of your strength? Could you of tomorrow beat you today? Instead of giving in, move forward.",Saitama,One Punch Man
"Mistakes are not shackles that halt one from stepping forward. Rather, they are that which sustain and grow one’s heart.",Mavis Vermillion,Fairy Tail
"Fear is freedom! Subjugation is liberation! Contradiction is the truth! Those are the facts of this world! And you will all surrender to them, you pigs in human clothing!",Satsuki Kiryuuin,Kill la Kill
Hatred and Sorrow are power. They are yours to control. All you have to do is to turn them into strength and use that strength to move forward.,Sebastian Michaelis,Black Butler Kuroshitsuji
"It’s not always possible to do what we want to do, but it’s important to believe in something before you actually do it.",Might Guy,Naruto
"Life and death are like light and shadow. They’re both always there. But people don’t like thinking about death, so subconsciously, they always look away from it.",Yato,Noragami
It’s more important to master the cards you’re holding than to complain about the ones your opponent was dealt.”,Grimsley,Pokemon
I am the hope of the universe. I am the answer to all living things that cry out for peace. I am the protector of the innocent. I am the light in the darkness. I am the truth. Ally to good! Nightmare to you!,Son Goku,Dragon Ball Z
"If you’re gonna insist on gambling and then complain when you lose, you had better work on your game.”",Hatsu Kominato,Selector Infected Wixoss
Moving on doesn’t mean you forget about things. It just means you have to accept what’s happened and continue living.,Erza Scarlet,Fairy Tail
"If nobody cares to accept you and wants you in this world, accept yourself and you will see that you don’t need them and their selfish ideas.",Alibaba Saluja,Universal Warriors
"If you keep on hiding your true feelings, who is going to be happy? If you are sad, you should say it out loud!",Haruhi Fujioka,Ouran High School Host Club
"Religion, ideology, resources, land, spite, love or just because… No matter how pathetic the reason, it’s enough to start a war. War will never cease to exist… reasons can be thought up after the fact… Human nature pursues strife.",Paine,Naruto Shippuden
"Don’t be upset because of what you can’t do. Do what you do best, live as carefree and optimistically as you can, because some people aren’t able to do that.",Keima Katsuragi,The World God Only Knows
"If you begin to regret, you’ll dull your future decisions and let others make your choices for you. All that’s left for you then is to die. Nobody can foretell the outcome. Each decision you make holds meaning only by affecting your next decision.",Erwin Smith,Attack on Titan
"Everything has a beginning and an end. Life is just a cycle of starts and stops. There are ends we don’t desire, but they’re inevitable, we have to face them. It’s what being human is all about.",Jet Black,Cowboy Bebop
"Anything can happen. No one ever thinks it will until it does. What will happen, happens. That’s how the world is. The most important thing is to not let the tragedy defeat you. To believe that you can get through it.",Kyousuke Natsume,Little Busters
"You’ll only realize that you truly love someone if they already caused you enormous pain. Your enemies can never hurt you the way your loved ones can. It’s the people close to your heart that can give you the most piercing wound. Love is a double-edged sword, it can heal the wound faster or it can sink the blade even deeper.",Himura Kenshin,Rurouni Kenshin
"I want you to be happy. I want you to laugh a lot. I don’t know what exactly I’ll be able to do for you, but I’ll always be by your side.",Kagome,InuYasha
"“A lesson without pain is meaningless. That’s because no one can gain without sacrificing something. But by enduring that pain and overcoming it, he shall obtain a powerful, unmatched heart.”",Edward Elric ,Fullmetal Alchemist: Brotherhood
You need to accept the fact that you’re not the best and have all the will to strive to be better than anyone you face.,Roronoa Zoro,One Piece
"I too will obtain everything that I desire. Not because someone asked me to do it, but because I know in my heart that I have something worth fighting for.",Julis Alexia Van Riessfeld,Asterisk War
You can’t win a game by doing nothing. And if someone else wins it for you then you haven’t accomplished anything. Life is the same way.,Junichirou Kagami,Denpa Kyoushi
"Do not think about other things, there is only one thing you can do. So master that one thing. Do not forget. What you must imagine is always that you, yourself, are the strongest. You do not need outside enemies. For you, the one you have to fight is none other than your own image.",Archer,Fate Stay Night
"Life is like a tube of toothpaste. When you’ve used all the toothpaste down to the last squeeze, that’s when you’ve really lived. Live with all your might, and struggle as long as you have life.”",Mion Sonozaki,Higurashi
"Just like games, no matter how well you have things lined up in your life, there’s always something to keep you on your toes.",Junichirou Kagami,Denpa Kyoushi
Do exactly as you like. That is the true meaning of pleasure. Pleasure leads to joy and joy leads to happiness.,Gilgamesh,Fate Zero
It Doesn t Matter How Strong The Opposition Is It Doesn t Matter How Fearsome The World Is It Doesn t Matter How Cruel The World Is Fight,Eren,Attack on Titan
If There Are Humans Who Can Bring About Change They re Those Who Are Capable Of Abandoning Everything People Who When Required To Surpass Even Monsters Are Capable Of Tossing Aside Their Very Humanity,Armin Arlert,Attack on Titan
I Don t Like The Terms Good Person or Bad Person It Is Impossible To Be Entirely Good To Everyone To Some You Are A Good Person While To Others You Are A Bad Person,Armin Arlert,Attack on Titan
As Long As We Continue To Fight We Are Not Defeated,Miche Zacharius,Attack on Titan
If You Win You Live If You Lose You Die If You Don t Fight You Can t Win,Eren,Attack on Titan
You Understand Don t You One Day Or Another Everyone You Care About Eventually Dies It s Something We Simply Can t Accept It s A Realization That Could Drive You Insane,Hange Zoë,Attack on Titan
You re Gonna Care What Other People Think And Be Someone You re Not Your Whole Life You re Fine As You Are So Talk In Your Own Words,Ymir,Attack on Titan
Everyone Had To Be Drunk On Somethin To Keep Pushing On Everyone Was A Slave To Somethin,Kenny Ackerman,Attack on Titan
This World Is Cruel And It s Also Very Beautiful,Mikasa,Attack on Titan
No One Knows What The Outcome Will Be So Choose Whatever You ll Regret The Least,Levi Ackerman,Attack on Titan
Do you need a reason to not want to lose,Shoyo Hinata,Haikyuu
Being the best decoy ever is as cool as being the ace,Tobio Kageyama,Haikyuu
You can fly even higher,Tobio Kageyama,Haikyuu
If they adjust to me I have to adjust in turn Whoever stops adjusting won t be able to continue forward,Tobio Kageyama,Haikyuu
The last ones standing are the victors Only the strongest If you want to be the last one standing become strong,Tobio Kageyama,Haikyuu
Life s a bore if you don t challenge yourself,Yuu Nishinoya,Haikyuu
There are some flowers you only see when you take detours,Tanaka Saeko,Haikyuu
Being weak means that there is room to grow,Ittetsu Takeda,Haikyuu
Today might be the chance to grasp the chance to let your talent bloom,Tooru Oikawa,Haikyuu
If you re gonna hit it hit it until it breaks,Tooru Oikawa,Haikyuu`;
  var data = papaparse.parse(csv_data);
  return data?.data;
}

export function office_quote_data() {
  var csv_data = `"Yes, I’d like to speak to your office manager, please. Yes, hello. This is Michael Scott. I am the Regional Manager of Dunder Mifflin Paper Products. Just wanted to talk to you manager-a-manger. All right. Done deal. Thank you very much, sir. You’re a gentleman and a scholar. Oh, I’m sorry. OK. I’m sorry. My mistake. That was a woman I was talking to, so… She had a very low voice. Probably a smoker, so… So that’s the way it’s done.",0,Michael
"People say I am the best boss. They go, “God we’ve never worked in a place like this before. You’re hilarious.” “And you get the best out of us.” I think that pretty much sums it up. I found it at Spencer Gifts.",1,Michael
"Corporate really doesn’t really interfere with me at all. Jan Levinson Gould. Jan, hello. I call her Hillary Rodham Clinton. Right? Not to her face, because… well, not because I’m scared of her. Because I’m not. But, um… Yeah.",2,Michael
"Am I going to tell them? No, I am not going to tell them. I don’t see the point of that. As a doctor, you would not tell a patient if they had cancer.",3,Michael
"I think I’m a role model here. I think I garner people’s respect. Attention all Dunder Mifflin employees, please. We have a meeting in the conference room, ASAP.",4,Michael
"People I respect, heroes of mine, would be Bob Hope… Abraham Lincoln, definitely. Bono. And probably God would be the fourth one. And I just think all those people really helped the world in so many ways that it’s really beyond words. It’s really incalculable.",5,Michael
"What is the most important thing for a company? Is it the cash flow? Is it the inventory? Nuh-uh. It’s the people. The people. My proudest moment here was not when I increased profits by 17% or when I cut expenses without losing a single employee. No, no, no, no, no. It was a young Guatemalan guy. First job in the country, barely spoke English. He came to me, and said, “Mr. Scott, would you be the godfather of my child?” Wow. Wow. Didn’t work out in the end. We had to let him go. He sucked.",6,Michael
"Today is diversity day and someone’s going to come in and talk to us about diversity. It’s something that I’ve been pushing, that I’ve been wanting to push, for a long time and Corporate mandated it. And I never actually talked to Corporate about it. They kind of beat me to the punch, the bastards. But I was going to. And I think it’s very important that we have this. I’m very, very excited.",7,Michael
"How come Chris Rock can do a routine and everybody finds it hilarious and ground-breaking and then I go and do the exact same routine, same comedic timing, and people file a complaint to Corporate? Is it because I’m white and Chris is black?",8,Michael
Kevin is a great guy. He’s a great accountant. He is not much of an entertainer.,9,Michael
"“I regret my actions. I regret offending my coworkers. I pledge to bring my best spirit of honesty, empathy, respect and open-mindedness…” Open-mindedness, is that even a word? “…into the workplace. In this way, I can truly be a hero. Signed, Daffy Duck.” He’s going to lose it when he reads that.",10,Michael
"Hi. I’m Michael Scott. I’m in charge of Dunder Mifflin Paper Products here in Scranton, Pennsylvania but I’m also the founder of Diversity Tomorrow, because today is almost over. Abraham Lincoln once said that, “If you’re a racist, I will attack you with the North.” And those are the principles that I carry with me in the workplace.",11,Michael
"I have something here. I want you to take a card. Put it on your fore… Don’t look at the card. I want you to take the card and put it on your forehead and… Take a card, take a card, any card. Um… And I want you to treat other people like the race that is on their forehead. OK? So everybody has a different race. Nobody knows what their race is, so… I want you to really go for it, cause this is real. You know, this isn’t just an exercise. This is real life. And… I have a dream that you will really let the sparks fly. Get ‘er done.",12,Michael
Why? Because Martin Luther King is a hero of mine. There’s this great Chris Rock bit about how streets named after Martin Luther King tend to be more violent. I’m not going to do it but it’s…,13,Michael
"You’ll notice I didn’t have anybody be an Arab. I thought that would be too explosive. No pun intended. But I just though. “Too soon for Arabs.” Maybe next year. Um… You know, the ball’s in their court.",14,Michael
Talk like you’re talking to that race. I have a feeling that this could get kind of volatile. So keep it going.,15,Michael
"The most sacred thing I do is care and provide for my workers, my family. I give them money. I give them food. Not directly, but through the money. I heal them. Today, I am in charge of picking a great new health care plan. Right? That’s what this is all about. Does that make me their doctor? Um… Yes, in a way. Yeah, like a specialist.",16,Michael
"If Dwight fails, then that is strike two, and good for me for, ah, for giving him a second chance. And if he succeeds, then, you know, no one will be prouder than I am. I groomed him. I made him what he is today. Unless he fails, and we’ve talked about that already.",17,Michael
"Do I know what the surprise is? Hell no! It doesn’t matter. The point is, they’re not unhappy anymore. They’re out there thinking, “Wow, my boss really cares about me. He has a surprise. He’s cool. I… what a great guy. I love him. I…",18,Michael
"OK, so I don’t know what the surprise is. Am I worried? No. No way. See, I thrive on this. This is my world. This is improv. This is Whose Line is it Anyway?",19,Michael
"When I am backed into a corner, that is when I come alive. See I learned improve from the greats, like, um, Drew Carey and Ryan Stiles.",20,Michael
"God, yeah… Ah! This…",21,Michael
"Robin Williams. Oh, man, would I love to go head-to-head with him. Oh! That would be exciting. “Hi. I’m Mork from Ork.” Well, I’m Bork from Spork. Nanoo, nanoo. Jibelee, baloobaloo.",22,Michael
"It looks like there’s gonna be downsizing. And it’s part of my job, but… blah! I hate it. I think the main difference between me and Donald Trump is that, uh, I get no pleasure out of saying the words, “You’re fired.” “You’re foir-ed. Uh, you’re foir-ed.” It just makes people sad, and an office can’t function that way. No way. “You’re foir-ed.” I think if I had a catchphrase it would be, “You’re hired, and you can work here as long as you want.” But that’s unrealistic, so…",23,Michael
"Can you get her? She’s right there. That is Meredith, the birthday girl. And this… is Meredith’s card. Happy Bird-Day. Um, let’s see. Jim, Jim wrote, “Meredith, I heard you’re turning 46, but, come on, you’re an accountant. Just fudge the numbers.” Not bad, pretty funny, I don’t appreciate condoning corporate fraud though. Uh, here’s the thing. Whatever I write here has to be really, really funny. Because people out there are expecting it. I’ve already set the bar really high. And they’re all worried about their jobs, you know. It’s kinda dark out there. Can you imagine if I wrote something like, uh, “Oh, Meredith. Happy Birthday. You’re great. Love, Michael.”",24,Michael
"When I retire, I… don’t want to just disappear to an island somewhere. I wanna be the guy who gives everything back.",25,Michael
"A check for the kids, and for the team.",26,Michael
"I want it to be like… “Hey, who donated that hospital wing that is saving so many lives?” “Um, well, I don’t, I don’t know. It was anonymous.” “Well, guess what, that was Michael Scott.” “But it was anonymous, how do you know?” “Because I’m him.”",27,Michael
"Today at lunchtime we’re going to be playing the warehouse staff at a friendly little game of basketball. My idea. Last time I was down there, I noticed they’d put up a couple of hoops, and I play basketball every weekend. So I thought, “This might be kinda fun.” And so I started messing around and… I’m sinking a few, you know. Swish, swish, swish. Nothing but net. And their jaws just dropped to the floor. African-Americans! So… you know, it’s really just a good friendly game, a reason to get together.",28,Michael
"Classic beginner’s mistake, eating before a game.",29,Michael
"Aw, come on! What is wrong with me today!? Usually hit those. Dwight, I was open. All right, let’s go.",30,Michael
"When I am playing hoops all of the stress and responsibility of my job here just melts away. It’s gone, I’m in the zone.",31,Michael
What is wrong with me today?!,32,Michael
"Who am I? Am I Michael Scott? I don’t know… I might just be a basketball machine. What’s Dunder Mifflin? I’ve never heard of it. Filing? Paperwork? Who cares? Possible downsizing? Um… well, that’s probably gonna happen, actually.",33,Michael
"Football is like rock and roll, it’s just bam-bam-boo… And basketball is like jazz, you know? You’re kind of… Dupee-doo, dupee-do. It’s all downbeat, it’s in the pocket, it’s like… Dupee-do, dupee-do, dapee-dah…",34,Michael
"Shoot, shoot it. Whoa, whoa, whoa, whoa! Foul! Naked aggression! Oh, that is… You all right Jim? Suck it up.",35,Michael
"Watch the long passes, you guys!",36,Michael
The great thing about sports is that it is all about character. And you can learn lessons about life even if you don’t win. But we did because we were ahead.,37,Michael
"Do I have a nickname on the court, um? Well, The Answer would be nice, but it’s taken. So, uh, probably The Question. The Answer dishes to The Question. The Question back to The Answer. Answer over to The Question. The Answer, whew, three points. The Question, whew, whew, six points. Nothing but net. Question, who’s the best player in the league? Answer, The Question. Or the Drunkmeister.",38,Michael
"Birdie. He’s not the guy with the cheeks. Kenny G. Is… if you knew jazz, you’d know who I mean. Kenny G. God. Glad I remembered that. Jazz people know who he is.",39,Michael
"I do. I read Small Business man. I also uh, subscribe to USA Today and American Way Magazine, that’s the in-flight magazine. Some great articles in that. They did this great profile last month of Doris Roberts and where she likes to eat when she’s in Phoenix. Illuminating.",40,Michael
"I live by one rule. No office romances. No way. Very messy. Inappropriate. No. But, I live by another rule: Just do it. Nike.",41,Michael
"Coffee is the great incentivizer in the office. It’s a drug. It is quite literally a drug that speeds people up. It’s not the only drug that speeds people up. You hear stories about Dunder Mifflin in the eighties before everybody knew how bad cocaine was. Guh. Man, did they move paper!",42,Michael
"I think in order to be a ladies man, it’s imperative that people don’t know you’re a ladies man, so I kind of play that close to the chest. I don’t know, what can I say? Women are attracted to power. And I think other people have told me that I have a very symmetrical face. I don’t know. I don’t know. Maybe they’re right? I don’t know.",43,Michael
"Do I have a special someone? Uh well, yeah of course. A bunch of ’em. My employees. If I had to choose between a one-night-stand with some stupid cow I pick-up in a bar, and these people? I’d pick them every time. Because with them, it is an everyday stand and I still know their names in the morning.",44,Michael
"T.M.I.? Too much information. Ah, it’s just easier to say T.M.I. I used to say “Don’t go there” but that’s… lame.",45,Michael
To Oscar Martinez it’s the “Show Me the Money” award! Yeah!,46,Michael
"This is a little character I like to do , it is, uh, loosely based on Karnack, one of Carson’s classic characters. Here we go. The PLO, the IRA, and the hot dog stand behind the warehouse. “Name three businesses that have a better health care plans than Dunder Mifflin.” Here’s the problem. There’s no open bar because of Jan and it’s the reason why comedy clubs have a two drink minimum. It’ll be fine, I just…wish people were going to be drunk.",47,Michael
"“The Dundies, how can I explain it? Awards you like to hate it. I’m psyched you all made it. You never had to work so hard and feel that no one notices you. You’re just a name and number and no one even says hello.” Card!",48,Michael
"Alright, so let’s get this party staaaarrrrted.",49,Michael
Herro everybodeeee. I’m gonna cwall Jan Revinson-Gould.,50,Michael
"It’s so freakin’ hot in there. Now I know what Bob Hope was going through when he performed in Saudi Arabia. Man! I got Dwight sucking the funny out of the room, but you do what you can do. Here we go, he’s early with the cue. Here we go.",51,Michael
"Was this year’s Dundies a success? Well, let’s see, I made Pam laugh so hard, that she fell out of her chair, and she almost broke her neck. So I killed, almost.",52,Michael
I have listened to that song so many times and I still don’t know what OPP stands for. Other people’s… Something. I…,53,Michael
"I am king of forwards. It’s how I like to do business, everybody joking around. We’re like ‘Friends’. I am Chandler and Joey and, uh, Pam is Rachel. And Dwight is Kramer.",54,Michael
"Todd Packer and I are total BFF. Best Friends Forever. He and I came up together as salesmen. One time, we were out and we met this set of twins. And Packer told them that we were brothers. And so, you know, one thing led to another, and we brought em back to the motel. And then Packer did both of them. It was awesome. So…",55,Michael
Toby is in HR which technically means he works for Corporate. So he’s really not a part of our family. Also he’s divorced so he’s really not a part of his family.,56,Michael
"A guy goes to a five dollar… lady of the night and he gets crabs. So, the next day he goes back to complain. And the woman says “Hey. It was only five dollars. What did you expect? Lobster?” This is what’s at stake.",57,Michael
"When I said before that I was king of forwards, you got to understand that I don’t come up with this stuff. I just forward it along. You wouldn’t arrest a guy who’s just delivering drugs from one guy to another.",58,Michael
"I am so used to being the bad boy. I am so used to fighting Corporate that I forget that I am Corporate. Upper management. They hooked me up with an attorney. To protect me. You can’t be too careful about what you say. Mo’ money, mo’ problems.",59,Michael
"Times have changed a little. And even though we’re still a family here at Dunder-Mifflin, families grow. And at some point, the daddy can’t take a bath with the kids anymore. I am Upper Management. And it would be inappropriate for me to take a bath with Pam. As much as I might want to.",60,Michael
"There’s a basic principle in real estate, that you should never be the best-looking person in the development. It’s just sorta common sense, because if you are, then you’ve no place to go but down.",61,Michael
"Why did I do it? Because I believe in rewarding people for their efforts. Ah. I rewarded Dwight with the room, and he is rewarding me back, ah, with $500 plus utilities.",62,Michael
Ryan’s about to attend the Michael Scott School of Business. I’m like Mr. Miyagi and Yoda rolled into one.,63,Michael
Hey!,64,Michael
"Yes, I was the first one out. And, yes, I’ve heard women and children first. But, we do not employ children. We are not a sweat shop. Thankfully. And, uh, women are equal in the workplace by law. So, I let them out first, I have a lawsuit on my hands.",65,Michael
"When I was Ryan’s age, I worked in a fast food restaurant, to save up money for school. And then I spe… lost it in a pyramid scheme. But I learned more about business, right then and there, than business school would ever teach me, or Ryan would ever teach me.",66,Michael
"I did not go to business school. You know who else didn’t go to business school? LeBron James, Tracy McGrady, Kobe Bryant. They went right from high school to the NBA. So… so it’s not the same thing. At all.",67,Michael
"Hey! I know what’ll impress everybody, I’ll start a fire. Oh, man. Bad idea. Bad idea jeans.",68,Michael
"Okay. Rule five – safety first, i.e. don’t burn the building down. Okay? That should be a no brainer.",69,Michael
Oh… look! Ryan is book smart. And I am street smart. And book smart.,70,Michael
I’ll give you the rest of the ten tomorrow.,71,Michael
It’s not a popularity contest. Although it does make sense to fire the least popular because it has the least effect on morale.,72,Michael
"Yeah, I went hunting once. Shot the deer in the leg, had to kill it with a shovel. Took about an hour. Why do you ask?",73,Michael
"Devon, could I talk to you for a sec?",74,Michael
"I love Halloween. You know, it’s just, it’s just fun. Every year, it’s just fun. Last Halloween I came as Janet Jackson’s boob. It was topical. People got a… a big kick out of it. The year before that, I came as Monica Lewinsky, and I wore a stained dress. The year before that, I also came as Monica Lewinsky. And before that, I was O.J. It was pretty funny. Oh, I wish you were here last year.",75,Michael
"All right. All right, this is it. By the time I get back to our floor, I will have decided. Wow, that’s a fast elevator.",76,Michael
"I’m friends with everybody in this office. We’re all best friends – I love everybody here. But sometimes your best friends start coming into work late, and start having dentist appointments that aren’t dentist appointments. And that’s when it is nice to let them know that you can beat them up.",77,Michael
"You talkin’ to me? You talkin’ to me? “Raging Bull.” Pacino. Oh, I want that footage. I want it. I need it. Ah, I have to get back to work. I have lots of work… Oh, oh check this out. Come here. There he is. Mr. Temp. Having lunch by the car. Let us play with him. This’ll be hilarious. Oh, we’re playing phone tag.",78,Michael
"I told Dwight that there is honor in losing. Which, as we all know, is completely ridiculous, but there is, however, honor in making a loser feel better which is what I just did for Dwight. Would I rather be feared or loved? Um, easy. Both. I want people to be afraid of how much they love me. And I think I proved that today at the dojo.",79,Michael
"God, you look like such an idiot.",80,Michael
"Jan Levinson-Gould. Jan is cold. If she was sitting across from you on a train and she wasn’t moving, you might think she was dead.",81,Michael
"That’s why I wanted a signal, between us, so that I wouldn’t have to just shout non-sense words. That’s her fault.",82,Michael
"Morning, Pam. Hey.",83,Michael
"No, nothing happened. I-I swear, nothing happened. What, I’m, totally being serious. A gentleman does not kiss and tell, and neither do I. No, seriously, guys, I’m not, I don’t want to go into it at all. It’s off limits. Fine, I took her back to her hotel and we made out for a little while. It was great. I mean she told me about her divorce, we talked for about five hours, she fell asleep on my arm. So.",84,Michael
"I know we have to register as a consensual sexual relationship with HR. My question: do I do it as the man? Does she do it as my superior? I don’t know. That leads to other issues that we may have in our relationship. It’s, uh, Excuse me. Hello? Hi! Just talking about you. The camera? No. Uh huh. How’s traffic? I miss you. What. Ok. Well, if it was a mistake, it was a wonderful mistake. No. Would you excuse me? No, I did not intentionally get you drunk. Um hmm. No, no. This is just a fight. This is just a first fight of many fights we’re gonna have. Right. No. Wha-so-I don’t understand, you wanna see other people. Only other people. Wh-why, ok, I think you’re still a little bit drunk Excuse me? Excuse me?! I think you’re, yes, why don’t you just come back here, go to the hotel, have a few drinks and-no, no. I didn’t slip you something!",85,Michael
"Pam, could I see you in my office?",86,Michael
"My boss is coming in today, the lovely Jan Levinson-Gould will, well, no Gould. The Gould has been swack, divorced. Um, the awkward part is that this will be the first time that we’ll be seeing each other since, well, uh, it was really nothing. We just sort of got caught up in the moment. The vulnerable divorcee gives herself to the understanding, with rugged good-looks, office manager. Just, uh, she didn’t want it to continue for some reason. It, we both, I didn’t want it, we both didn’t want it to continue. Was not professional. Um, when people say something’s mutual, it never is. But this was mutual.",87,Michael
"Good work, Stanley. Great performance review. Stanley in the house, everybody. Woo! Angela, your turn.",88,Michael
"I’m a little confused. ‘Cause first it’s all like kissy-kissy. And then it’s like all regret. Because “Oh, I regret that.” But, “Wait, I’m still gonna call you.” But, but, “We’re just gonna talk business. And I may come down and fire you if you don’t do your job.” But what were talking about when we first kissed? Business.",89,Michael
Jan is not in a place where she feels she can have a relationship right now. And it doesn’t matter how great a guy I am. And that is all I needed; I’m good. I can go home now.,90,Michael
"“I am not going to discuss anything outside of Dunder Mifflin business, period.” Okay. Now, why would Jan say she only wants to talk business and then make it clear that she is on her period? God, I don’t understand women. How about a clear signal, right? Is that too much to ask?",91,Michael
"Hello, is this R. Gould? Hi there. My name is Michael Scott, I work at Dunder Mifflin. I believe I work with your wife, ex-wife, Jan. Yeah, that’s right, yes. Um… I was wondering if I could ask a personal question about her. Mmm-hmm. Okay, well, could I ask anyway? Uh-huh. Well, I’m just gonna ask. When you guys were dating was she sort of easy to get and then really hard to get?",92,Michael
"Yeah, that Gould is a real interesting guy, a gem. I can see why he and Jan are no longer together. If my conversation with him is any measure of their relationship, he was verbally abusive, he was curt. He was… He had an inability to communicate, shall I say? He was emotionally unavailable. I don’t know how she dealt with that as long as she did.",93,Michael
"What is an office? Is it a group of people? Maybe. Is it an idea? Of course, yes. Is it a living organism? Exactly, yes. And any single cell organism has to have a spine, and that’s me. But the spine is always controlled by a brain, and that is Jan. But the brain needs a heart, and that is me again. So ironic. You know what? The heart is smarter than the brain. But the brain is so effing hot.",94,Michael
The IT tech guy and me did not get off to a great start.,95,Michael
"There are certain things a boss does not share with his employees. His salary, that would depress them. His bed, it— And I am not going to tell them that I’ll be reading their e-mails.",96,Michael
"Meredith has an E-vite from Jim. Barbeque at Jim’s tonight. Tonight? Wonder where my e-vitation is. Click on guest list. Angela, Stanley, Oscar, Meredith, Phyllis, Kevin, Creed. Must be… . No.",97,Michael
"There’s always a distance between a boss and the employees. It is just nature’s rule. It’s intimidation mostly, it’s the awareness that they are not me. I do think that I am very approachable, as one of the guys. But maybe I need to be even approachabler.",98,Michael
"Think about this; what is the most exciting thing that can happen, on TV, or in movies, or in real life? Somebody has a gun. That’s why I always start with a gun, because you can’t top it, you just can’t.",99,Michael
"Funny story: the way that I got into improv was, I got into improv. The story about me getting into improv was that I was walking down the street, and a race car pulls up, and the guy says “Hey you’re funny, you’re the funniest guy I’ve ever seen, or my name is not Dale Earnhardt.” And that was an improv. Um, the real way is that I found a flyer.",100,Michael
"It was a tough year. I had to fire somebody this year. This party has to really rock. Check it out. Christmas bonus. 3,000 G’s. I got this for helping save the company money. So I guess some good came out of firing Devon after all. Maybe I should call him and tell him that.",101,Michael
"Presents are the best way to show someone how much you care. It’s like this tangible thing that you can point to and say, “Hey, man, I love you this many dollars worth.”",102,Michael
"So Phyllis is basically saying, “Hey Michael, I know you did a lot to help the office this year but I only care about you a homemade oven mitt’s worth.” I gave Ryan an iPod.",103,Michael
Everyone wants the iPod. It’s a huge hit. It is almost a Christmas miracle.,104,Michael
"Reverse psychology is an awesome tool. I don’t know if you guys know about it, but basically you make someone think the opposite of what you believe and that tricks them into doing something stupid. Works like a charm.",105,Michael
"Unbelievable. I do the nicest thing that anyone has ever done for these people and they freak out. Well, happy birthday, Jesus. Sorry your party’s so lame.",106,Michael
Lampshade on head! It’s happening!,107,Michael
"Christmas is awesome. First of all, you get to spend time with people you love. Secondly, you can get drunk and no one can say anything. Third, you give presents. What’s better than giving presents? And fourth, getting presents. So, four things. Not bad for one day. It’s really the greatest day of all time.",108,Michael
Phyllis and Angela and Meredith are helpers. I guess Angela’s kind of… Angela’s little. Phyllis and Meredith are not little. Pam is sort of a medium helper.,109,Michael
"Dwight is… Dwight looks like Spock to me. He always wears the ears, and I always give him grief about looking like Spock, and he hates it because he has a different pair of ears that he wears to be Spock, for some reason.",110,Michael
"See, that’s what Christmas is all about to me, is when you see someone open a gift and you think, “Man, I wish I got that.” I mean, that’s just such a great feeling, to watch other people envying a gift that you gave to somebody else. I don’t know, it’s just… I don’t know, just makes you kind of feel good.",111,Michael
This is not just another party. This is a leadership training exercise. Right? I’m going to combine elements of fun and motivation and education into a single mind-blowing experience.,112,Michael
"I am a great motivational speaker. I attended a Tony Robbins event by the airport last year, and… it wasn’t the actual course. You have to pay for the actual course. But it talked about the actual course. And I’ve incorporated a lot of his ideas into my own course.",113,Michael
"Leader… ship. The word “ship” is hidden inside the word “leadership,” as its derivation. So if this office is, in fact, a ship, as its leader, I am the captain. But we’re all in the same boat. Teamwork!",114,Michael
"A three-hour tour, a three-hour tour.",115,Michael
"In an office, when you are ranking people, manager is higher than captain. On a boat, who knows? It’s nebulose.",116,Michael
"Hey, look! I’m king of the world!",117,Michael
Sometimes you have to take a break from being the kind of boss that’s always trying to teach people things. Sometimes you have to just be the boss of dancing.,118,Michael
"I’m in the brig. See? The boat’s not as corporate-friendly as advertised. What was the deal with the guy jumping overboard? What was… if he had just waited and heard what I had to say, he would be motivated right now and not all wet.",119,Michael
Those slide moves are just bush league. I hope I die before I’m old.,120,Michael
"I enjoy having breakfast in bed. I like waking up to the smell of bacon, sue me. And since I don’t have a butler, I have to do it myself. So, most nights before I go to bed, I will lay six strips of bacon out on my George Foreman Grill. Then I go to sleep. When I wake up, I plug in the grill, I go back to sleep again. Then I wake up to the smell of crackling bacon. It is delicious, it’s good for me. It’s the perfect way to start the day. Today I got up, I stepped onto the grill and it clamped down on my foot… that’s it. I don’t see what’s so hard to believe about that.",121,Michael
"No, nope, no one is helping me out at all Mom. No, I’m not gonna call Jan. She’d just worry… drive down here and make a big thing… Who told you that? No, it was mutual. What is Pam doing chatting with you?",122,Michael
Did you see Born on the Fourth of July? I was under the impression that Billy would be more like that guy.,123,Michael
You know what? I feel better. Ryan brought me some chocolate pudding and his kindness healed my foot.,124,Michael
"Yeah, baby, I am feelin’ better. My body’s literally healing itself. It is amazing what the human body is capable of when you have a powerful brain.",125,Michael
The rules of shotgun are very simple and very clear. The first person to shout “shotgun” when you’re within the sight of the car gets the front seat. That’s how the game’s played. There are no exceptions for someone with a concussion.,126,Michael
"Jim and I are great friends. We hang out a ton, mostly at work. But, the fact that he told me his secret and no one else knows says everything about our friendship. And it is why, I intend on keeping that secret for as long as I possibly can.",127,Michael
"Oh man, you should order milk. Get it?",128,Michael
"Why do I like Hooters? Well I will give you two reasons, the boobs and the hot wings.",129,Michael
"Uhhh it’s ridiculous. They took my card away because I spent $80 bucks at a magic shop. What they don’t understand is that I bought the stuff to impress potential clients. So business related, right?",130,Michael
"People are always coming to me. “Michael, I have a secret. Your the only one I trust.” No thanks, because keeping a secret can only lead to trouble. Like I was watching Cinemax last weekend. This movie, Portrait of a… Prostitute something. Secrets of a Call… More Secrets of a Call Girl. And the lead character, Shila, is framed for murder. She goes on the run and winds up working at a bordello in Malibu. I don’t, I don’t want to live like that. I like it here. I don’t want to be Shila, I like being Michael Scott.",131,Michael
"I am a big Fear Factor fan. I’m a big fan of anything Joe Rogan does, actually, so this is sort of like my audition tape. Um… I can’t stand it , I can’t stay in here another second. No!",132,Michael
"Ed Truck. Ed Truck was the manager before me. Horrible. He hated fun. It was like, “Oh, Ed Truck is walking toward us. Stop having fun. Start pretending to do work.” What a jerk. He’s… You know what? I swore to myself that if I ever got to walk around the room as manager, people would laugh when they saw me coming and would applaud as I walked away.",133,Michael
"When I was in training, many years ago… not so long ago… I worked side-by-side with a fellow named Todd Packer, and together we rocked the office . Packer and I once spent the whole day with our pants off, and when people noticed, we convinced them that",134,Michael
"Another time, Packer held this guy’s head in the toilet for like a minute. Guy had no sense of humor about it. Probably why he wasn’t hired.",135,Michael
"Once, as a joke, Packer banged every chick in the office. It was hysterical.",136,Michael
"Why would somebody ruin a perfectly good carpet? I don’t know. It could be done out of hate. It could be done out of love. It could be completely neutral. Maybe somebody hates the cleaning lady. And, well, she doesn’t do a very good job, obviously, because my office still reeks like you would not believe. I hate her.",137,Michael
You know what? I am beginning to think that what happened to my carpet was an act of terrorism against the office. The only thing that makes any sense.,138,Michael
This was no act of God. A person did this. A person who works in this office. Maybe all of them.,139,Michael
"Last week I would have given a kidney to anyone in this office. I would have reached right into my stomach and pulled it out for them. But now, no. I don’t have the relationship with these people that I thought I did. I hope they ask, so they can hear me say, “Uh… no. I only give my organs to my real friends. Go get yourself a monkey kidney.”",140,Michael
"It takes an advanced sense of humor. I don’t expect everybody to understand. It was done out of love, just like I thought. It’s ah… God, these people are so… these are good people. We have fun. We just have fun! Oh, I’m just so sorry that I threw the thing out.",141,Michael
"Women in the workplace… yeah, translation “I have been banned from my own conference room so that Jan can talk in secret to all the girls.” Oh! Sorry. ‘Women of the workplace.’ About what? I don’t know. Clothes. Me. Eeegkh!",142,Michael
"Everyone. Guys. Circle up, please. Come on over. Bring your chairs. Toby, come on over. You’re a guy… too… sort of. Let’s do this!",143,Michael
"Well, first of all, I, uh, just want to warm up a little bit. Let’s just clap.",144,Michael
"Oh, I think it’s going to work out great. Because managing the warehouse is a very important part of my job. And I haven’t been there in months.",145,Michael
Uhhuhhuh. Just in case there’s someone down here who shouldn’t be. A little “Good Will Hunting” situation. All right. Troops. This is an important day. Big day. Now you may look around and see two groups here. White collar. Blue collar. But I don’t see it that way. And you know why not? Because I am collar-blind.,146,Michael
Check this out! Look at that! Look at that bwup-bwa! Hello! How are… Oh! Kay. That is great. That is good stuff.,147,Michael
Part of my job is knowing how to talk to women.,148,Michael
"Cold front coming into the Warehouse. Uh oh! Better put on your ski boots! Woohoohoowoo. Waaaah! Happy New Year, Darryl! Hey,Darryl. You ever done this?",149,Michael
Pizza. Great equalizer. Rich people love pizza. Poor people love pizza. White people love pizza. Black people love pizza. Do black people like pizza?,150,Michael
Ahhh! Excellent.,151,Michael
Is it good to be back. Yeah. I mean I love the guy stuff but to run an office you need men and women. You know why? Because you need to have that crazy sexual tension to keep things interesting.,152,Michael
"This is a business trip. I would have to be a raving lunatic to try to talk to Jan about what happened between us. Her words, not mine. She sent me an email this morning. But, it is Valentine’s Day. It’s New York. City of Love.",153,Michael
"Well here we go. On our way to New York. New York, New York. City so nice they named it twice. Manhattan is the other name.",154,Michael
"The meeting isn’t ’til three, but I always like to come to New York little bit early and hit some of my favorite hunts, like right here, is my favorite New York pizza joint. And I’m gonna go get me a New York slice.",155,Michael
"Here it is, heart of New York City, Times Square. Named for the good times you have when you’re in it. Most people when they come to New York, they go straight to the Empire State Building, that’s pretty touristy. I come here. Great places to eat. We have Bubba Gump Shrimp, Red Lobster down there. Ya know. This is, this is the heart of civilization, right here.",156,Michael
"Everybody takes the subway in New York. It’s fast, it’s efficient, gets you there on time. It’s a way to Okay, there’s a guy pooping in a cardboard box down there.",157,Michael
"This is the world famous Rockefeller Center. Founded, of course by Theodore Rockefeller. This is a skating rink and I think the Rangers practice there sometimes and it’s, that’s Tina Fey . That’s Tina Fey from Saturday Night Live. Hello? Hello, hi? OH, I’m sorry, I thought you were , OK, I thought that was. She, she looked a lot like Tina Fey. Hello, hello, I thought that was Tina Fey, but it wasn’t. So… Are you serious? He was here? When, when I was talking to the fake Tina Fey? Come on! And are you, argh.",158,Michael
"I would love to live in New York someday. It’s a big dream of mine. Work for corporate, with Jan. It’d be awesome. Go to Broadway shows, eat hot dogs. Scranton is great, but New York, is like Scranton on acid, no on speed, no on steroids. OK, umm, I think, that’s either the Hudson or the East, so we’re back, should be back this way. There’s a lotta pressure on me right now. It’s like Michael Jordan, in the NBA finals. Or, like Stormin’ Norman Schwarzkopf, and this presentation is desert storm and as soon as it’s over, we will not have to deal with those Iraqis anymore. Let’s do it.",159,Michael
"Yeah, I shot a bunch of footage around the office, edited it together on my Mac. I was thinking of entering it into some festivals. Probably won’t. You know, not what this is about.",160,Michael
Oy vey… schmear.,161,Michael
"I love you, Angela. Yes, even you. I love you, Kelly. I love you, Meredith. This is all platonically, of course.",162,Michael
"I love ladies, always have. And you know what I think is the most attractive part of a woman’s body? The brains. Because I don’t think a woman is beautiful unless she is smart. And also, the brains are where the ladies get their best nasty ideas for bedroom stuff.",163,Michael
"Okay, here’s the thing about Jan. She talks such a big game about, “Oh there’s nothing between us and stop talking about it.” And “Border-line harassment when you call me at home.” But let me ask you this, is it just a coincidence that this meeting is taking place on Valentine’s Day? Answer, maybe, but maybe not. We shall see.",164,Michael
"Speaker at the Sales Convention. Been there, done that. Went there again, did it again. Two years in a row. Consecutive. I just… I miss the feeling of knowing that you did a good job because someone gives you proof of it. Sir, you’re awesome! Here’s a plaque. What, a whole year has gone by and you need more proof? Here’s a certificate. They stopped making plaques that year.",165,Michael
Dwight is not going to do a job. It’s sad. And they’re expecting excellence because I did do such a good job. Two years in a row. I killed. It was amazing.,166,Michael
"Confidence, Dwight.",167,Michael
All right. You ready? Here we go! Wow. It’s a little bit bigger than I remember. Come on. We’re down here. Right.,168,Michael
"I’m very sorry. I did not know you were wearing a hearing aid and I just thought you were speaking abnormally. …And now the black guy from the ‘Police Academy’ movies. A robot. Michael Winslow, anyone?",169,Michael
"Dwight gave a great speech. That’s the word on the street anyway. And I entertained Dwight to no end with my bar stories. So, I captivated the guy who captivated a thousand guys. Can you believe that? A thousand guys?",170,Michael
"Ryan is a temp, and that means that he could go at any time. Am I worried about that? Try scared to death.",171,Michael
"Listen, I like kids. But this is not a kid’s environment. This is like HBO, no limits. Who knows what I’m going to say? Crazy stuff. And it is R rated, it is not rated G. I am like Eddie Murphy in “Raw,” and they are trying to make me into Eddie Murphy in “Daddy Daycare.” both great movies, but, still.",172,Michael
"It’s not that children make me uncomfortable, it’s just that, why be a dad when you can be a fun uncle? I’ve never heard of anyone rebelling against their fun uncle.",173,Michael
"Just compare last year’s order to this year’s. Uh-huh. Yeah, I’m looking at it right now. … Yes. We–yeah, they’re very–they’re different. Yeah, we can stick with last year’s, you’re just going to have to supplement it, somehow.",174,Michael
"Children cannot lie. They are innocent, and they speak the truth, and out of the mouths of babes, Michael Scott is freaking cool.",175,Michael
"Alright, nowwww… what kind… of pizza do you like?",176,Michael
"I don’t get why parents are always complaining about how tough it is to raise kids. You joke around with them, you give them pizza, you give them candy, you let them live their lives… They’re adults, for God’s sake.",177,Michael
"Yes, it is true. I, Michael Scott, am signing up with an online dating service. Thousands of people have done it, and I am going to do it. I need a username. And… I have a great one . Little kid lover. That way, people will know exactly where my priorities are at.",178,Michael
"Didn’t do background checks of the warehouse guys. Well, I’m sure it’ll be fine.",179,Michael
"Today is my B-day, and people around here just go crazy for it. I don’t know why. Oh! Fun fact. I share my birthday with Eva Longoria. So, I have a",180,Michael
"When I was seven, my mother hired a pony and a cart to come to my house for all the kids… and… I got a really bad rash from the pony, and all the kids got to ride the pony and I had to go inside, and my mother was rubbing cream on me… for probably three hours, and I never came outside. And by the time I got out the pony was already in the truck. And around the corner. So that was my worst birthday.",181,Michael
"When I was sixteen, I was supposed to go out on a date with a girl named Julie. But there was another Michael in the class that she apparently thought the date was with, so she went out with him, on my birthday. And, she got him a cake, at the restaurant. And it wasn’t even his birthday, but I heard about it the next day in school. So…",182,Michael
"Yeah, I’ve been pretty much skating my whole life. I thought about playing in the NHL, but, you’re on the road so much. You got no time to spend with your wife and kids. And I really want a wife and kids.",183,Michael
"Well, apparently in the medicine community, negative means good. Which makes absolutely no sense. In the real world community, that would… be… chaos.",184,Michael
"Two nights ago, I went to an Alicia Keys concert at the Montage Mountain Performing Arts Center. I scored these great aisle seats. Anyway, after the opening act this beautiful girl sits down next to me and I never get to meet girls with lip rings and she had one. I don’t know exactly how this happened but one of her friends started passing around some stuff and they said it was clove cigarettes, and I’m sure that it was clove cigarettes. Everybody in the aisle was doing it.",185,Michael
"I am ridiculously anti-drug. So anti-drug that I am above suspicion in any way that involves suspicion, or testing of any kind.",186,Michael
"Yes, thanks, Fantastic Sam’s. Adult Cut Plus. Comes with a shampoo and blow dry. We’re doing I.D. photos today. Gotta represent.",187,Michael
Ohh… God. Alright. Why do I have to do everything?,188,Michael
"OK, Ryan. You told Toby that Creed has a distinct old man smell?",189,Michael
"Cage matches? Yeah, they work. How could they not work? If they didn’t work, everybody would still be in the cage.",190,Michael
"Okay, so Dwight, in your own words – “Someone replaced all my pens and pencils with crayons. I suspect Jim Halpert.” “Everyone has called me ‘Dwayne’ all day. I think Jim Halpert paid them to.”",191,Michael
"“This morning, I found a bloody glove in my desk drawer and Jim Halpert tried to convince me I committed murder. I think he may be the real murderer.” “Jim Halpert said there was an abandoned infant in the woman’s room. When I went to save the child, I saw Meredith on the can.” Gah. “This morning, I knocked myself in the head with the phone.”",192,Michael
"“Every time I typed my name, it said ‘Diapers’.”",193,Michael
"“By the end of the day, my desk was about two feet closer to the copier.”",194,Michael
"The Japanese have this thing called shiatsu massage, where they dig into your body, very hard. And it is very painful. And apparently, some people throw up. But the next day they feel great. I’ve never had one. They sound awful.",195,Michael
It was really hard getting a good picture of fifteen people. He would not give me a good discount. And eight tries added up.,196,Michael
"One, two.. Didn’t say three, did I?",197,Michael
"But, I’m sort of an expert at Photoshop, so it turned out fine in the end. When people work together, there is going to be conflict. You can’t outrun your problems.",198,Michael
And that is why the idea of a cage match is so universally appealing. But here’s the thing about cage matches: sometimes you have to open the cage. And that is something Toby will never understand.,199,Michael
"Jan and I understand each other. The romance thing is sort of on hold for the time being, but we’ve remained good friends. Good friends with privileges. Not now, some day.",200,Michael
"There are certain topics that are off-limits to comedians, JFK, AIDS, the Holocaust. The Lincoln Assassination just recently became funny. “I need to see this play like I need a hole in the head.” And I hope to someday live in a world where a person could tell a hilarious AIDS joke. It’s one of my dreams.",201,Michael
Give me some.,202,Michael
"Bluffing is a key part of poker, which is too bad, because I’m not very good at bluffing. Did you believe me?",203,Michael
"Love triangle. Drama. All worked out in the end, though. The hero got the girl. Who saw that coming? I did. And Jan was really happy for me. So actually the hero got two girls. He got the girl that he works with and he got the girl that he buys real estate from. So, I’ve got my New York girl and my local flavor. Life is good.",204,Michael
"Our numbers are down, yes, but we have a heck of a crew here in Scranton. Hardworking, motivated, dynamic. Every single last one of them. They follow my lead. I sort of set the tone. And it doesn’t hurt that my ex works for corporate. Jan loves this branch, and I think that’s really more than half the battle.",205,Michael
I would have never called him that if I knew. You don’t… You don’t call retarded people “retards”. It’s bad taste. You call your friends “retards” when they’re acting retarded. And I consider Oscar a friend.,206,Michael
"The company has made it my responsibility today to put an end to 100,000 years of being weirded out by gays.",207,Michael
"Nothing wrong with this stuff. At all. This is fine. You know what. Gay porn, straight porn, it’s all goooooood! I don’t particularly get into this. But uh, you know what. I totally see the merit! And actually… it is quite beautiful.",208,Michael
"All right, everybody in the conference room! I don’t care if you are gay, or straight, or a lesbian, or overweight! JUST GET IN HERE! RIGHT NOW!",209,Michael
"Did you know that gay used to mean happy? When I was growing up it meant lame. And now it means a man, who makes love… to other men.",210,Michael
"We are not in the playground anymore. There are new rules. We have to be mature. But we can’t lose the spirit of child like wonder. What is love… anyway? Maybe it’s supposed to break all the rules. Like me and Jan. Or Oscar… and some guy. Life is short. When two people find each other, what should stand in their way?",211,Michael
"I am glad that today spurred social change. That’s part of my job as regional manager. But you know what? Even if it didn’t, at least we put this matter to bed. …that’s what she said. Or he said.",212,Michael
"Oh, there’s Gill. Oscar’s roommate. I wonder if he knows?",213,Michael
"Yes, I have to begin every day by letting Jan know what I intend to accomplish, and then I have to call her at the end of the day to tell her what I",214,Michael
"Guess where I am going. I will give you a hint. It is a booze-fueled sex romp, where anything goes. You are correct, sir! I am headed to Philadelphia for the Annual Northeastern Mid-Market Office Supply Convention. And Jim Halpert is going to be coming, which will be fun. Poor little guy. He’s been stuck working under Josh, the poor man’s Michael Scott, as he is known around my condo.",215,Michael
"I was shocked when he told me he was transferring to Stamford. It’s like the firemen. You don’t leave your brothers behind, even if you find out that there is a better fire in Connecticut.",216,Michael
SWAG! Stuff we all get. I basically decorated my condo for free with all of my SWAG.,217,Michael
"Some people need dozens of friends to say, “Hey, look at me, I’m popular.” But not me. I’m very picky. I need three, maybe two. When you meet that someone special, you’ll just know. Because a real relationship, it… it can’t be forced. It should just come about effortlessly.",218,Michael
"Today I’m headed to Philadelphia for the annual Northeastern Office Supply Convention. Wooo-yaaaaah! Oh, these things tend to be kind of crazy.",219,Michael
"A couple of years ago, I went to one in Hartford. “Connecticut.” And Todd Packer and I went to this bar and met a girl. And Packer decides to make out with her. Turns out that her boyfriend is the bouncer at the bar. I love this. The bouncer chases us out to Packer’s Vette, jump in the Vette, he",220,Michael
"Josh reminds me of a guy I went to high school with. Big football star, girls loved him. Whatever. Guess what he’s doing now. He’s a TV announcer for the Eagles. Up in the… He doesn’t even get to play in the game, I mean.",221,Michael
Movie Monday! The only cure I know for the Monday blues is… Varsity Blues!,222,Michael
Entourage!,223,Michael
Hi Jan! Hope you brought the Milk Duds!,224,Michael
What was Dwight thinking? That he could turn Jan against me? She’s my ex-lover! …ish.,225,Michael
"Business is like a jungle. And I… am like a tiger. And Dwight, is like a monkey, that stabs the tiger in the back with a stick. Does the tiger fire the monkey? Does the tiger transfer the monkey to another branch? Pun. There is no way of knowing what goes on inside the tiger’s head. We don’t have the technology.",226,Michael
"Dwight, can I talk to you for a second?",227,Michael
"Hug it out, bitch. That is what men say to each other, after a fight. They hug it out, and doing so, the just… let it go. And walk away. And they’re done. Not a good idea to say that to a woman however. I have found. It doesn’t translate.",228,Michael
"Yep. Yeah, we hugged it out. But, it turns out, I was still a little angry. So, I felt I needed to punish him, just a little bit more, and I’m making him do my laundry for a year.",229,Michael
I am like Bette Midler in For the Boys. Gotta keep the troops entertained.,230,Michael
"That is just not the way a Dunder Mifflin manager should go, I’m sorry. Alone, out of the blue, and not even have his own head to comfort him.",231,Michael
"There are five stages to grief, which are denial, anger, bargaining, depression, and acceptance. And right now, out there, they’re all denying the fact that they’re sad. And that’s hard. And it’s making them all angry. And it is my job to try to get them all the way through to acceptance. And if not acceptance, then just depression. If I can get them depressed, then I’ll have done my job.",232,Michael
"Society teaches us that having feelings and crying is bad and wrong. Well, that’s baloney, because grief isn’t wrong. There is such a thing as good grief. Just ask Charlie Brown.",233,Michael
"Ed Truck died. And it blows. They say that with grief, time makes it worse, which is bad for me because I found out before anybody so I’ve had more time to be sad.",234,Michael
"I don’t think I’m overstating it when I say that Toby is a plague on this company. And he is worthless. You give people a chance to shine and they blow it, just like you knew they would. Grief counseling is not about, “Are you hungry? Would you like a sandwich?” These people are so far gone, you have to stick a food tube down their throats.",235,Michael
"I found an exercise in Toby’s binder that he managed to miss, that involves screening the part of you that says, “I don’t wanna do that. I don’t wanna talk about that. That is too private.” Here’s how it works. I’m going to throw you this ball.",236,Michael
...,237,Michael
"Never ever, ever sleep with your boss. I am so lucky that Jan and I only got to second base.",238,Michael
"Hey Koselli, the Kos. Cosby. Hey hey hey. I love Jello Pudding Pops. My son, Theo, loves Jello Pudding Pops too.",239,Michael
"Productivity is important but how can I be productive if I have this one little thing in my brain? That I cannot get out. And that one little thing is a soft pretzel. So I’m just going to have my soft pretzel, then I’ll get to work, and I’ll be super productive. Look out for me.",240,Michael
"Oh, shhh… Come on.",241,Michael
"Tonight, one of our most ethnic co-workers, Kelly, has invited us all to a Diwali celebration put on by her community. What is Diwali, you may ask? Well, to have Kelly explain it it’s ada blah blah blah, it’s so super fun and it’s going to be great. Lot of gods with unpronounceable names. Twenty minutes later you find out that is essentially a Hindu Halloween.",242,Michael
"I love the people here. And if there was one thing I di… don’t really care for is that they can be terribly, terribly ignorant about other cultures. And I don’t want them embarrassing me in front of my girlfriend, Carol.",243,Michael
My Indian Culture Seminar was going great until Toby decided that he was too immature to deal with culturally explicit images. It’s just sex. People… everybody does it. I’m doing it… with Carol! Probably tonight.,244,Michael
"All they are is chocolate, graham cracker, and marshmallow. How difficult would that have been?",245,Michael
"I had promised Carol a romantic evening on the town. Um, I wanted to take her on this spooky hay ride thing, but it was like seventy dollars a person, and she’s allergic to hay. So I said, “Pop a Claritin, and I will spot you the seventy bucks,” and she’s like “I don’t like to borrow money or take unnecessary medication.” And I’m like, “Well you’re really not gonna like what I slipped in your drink last night.” And she’s like, “What the hell are you talking about?” And I’m like, “I’m kidding. I didn’t put a roof…” … We laughed so hard… It was hilarious… oh… So yes, I’m very excited about the Diwali party.",246,Michael
"It is an outrage, that’s all. It’s… hey’re making a huge, huge mistake. Let’s see Josh replace these people. Let’s see Josh find another Stanley. You think Stanleys grow on trees? Well they don’t. There is no Stanley tree. Do you think the world is crawling with Phyllises? Show me that farm. With Phyllises and Kevins sprouting up all over the place. Ripe for the plucking. Show me that farm.",247,Michael
Pictures. Memories. Look at that. They grow up so fast.,248,Michael
This is my house. The CFO is taking away my house and giving it to Josh. And Josh is giving the garage to Bob Vance.,249,Michael
"Okay, this is it. This is exactly what Michael Moore does, famous documentarian. He goes up to people with a camera and he’s like “Why did you do this? Why did you pollute? You are bad. You’re a bad person.” It’s very dramatic. Although, I can’t say I was a big fan of ‘Bowling for Columbine’, because I thought it was going to be a bowling movie, like ‘Kingpin’. And it wasn’t. It was something else.",250,Michael
"My branch is absorbing the Stamford branch. Or, as I like to put it, my family is doubling in size. That’s all I’m going to say about it because I have a gigantic performance ahead of me. And I have to get into my head and focus.",251,Michael
"You know for a lot of these people this is the only family they have. So… As far as I’m concerned, this says ‘World’s Best Dad’.",252,Michael
You know who I really like? Is this guy Andy Bernard. He has got this very likable way about him.,253,Michael
"Okay. Everybody settled in? Good. Why don’t we all proceed in to the conference room? Or, should I say, the banquet hall. For… drum roll, please , the official Merger Day All-Family Welcome Breakfast. Come on in!",254,Michael
I am so scared… when people don’t label their personal food.,255,Michael
People hate people that are different from them. That’s natural. But you know what makes people forget their differences? A great show. That is why I created the ‘Integration Celebration’. This is the moment when Scranton and Stamford come together as one. United in applause.,256,Michael
"The word merger comes from the word marriage. And that was what today was supposed to be. The loving union between people. Instead, it has become like when my Mom moved in with Jeff. And once again, it becomes my job to fix it.",257,Michael
"Hey, girls. What’s happening? Startinng to blend? Well, before long, you guys keep hanging out, you guys you are gonna share the same menstrual cycle.",258,Michael
"Can’t we all get along? No, we can’t. But here’s the thing: yes, we can. Well, why not? Because of differeneces. Well, can we overcome these differences? No. Can we find each other and connect with each other in spite of these differences? No, we can’t. But, we have to try and that is why I created the Integration Celebration.",259,Michael
Why did the convict have to be a black guy? It is such a stereotype. I just wish that Josh had made a more progressive choice. Like a white guy… who went to prison for… polluting a black guy’s lake.,260,Michael
"Close your eyes. Picture a convict. What’s he wearing? Nothing special, baseball cap on backwards, baggy pants… he says something ordinary like… ‘yo, thats shizzle.’ Okay. Now slowly open your eyes again. Who are you picturing? A black man? Wrong. That was a white woman. Surprised? Well, shame on you.",261,Michael
This place is not prison. It’s… way better than prison.,262,Michael
"Okay! Listen up everybody! Um, you guys said that prison was better than this place, and I heard ya, loud and clear, so, I am instituting some changes to make this more like prison. We are going to start with an hour of outdoor time. So let’s go!",263,Michael
These people don’t realize how lucky they are. This office is the American Dream. And they would rather be in the hole.,264,Michael
"Martin went from being a new guy from Stamford… to a convict, to… my friend. Back to a convict. Then to… a kind of a nuisance, actually, to be completely honest. And finally, to… a quitter. And I will not miss him. And that is not because he is black.",265,Michael
"This is going to be the best Christmas ever. My girlfriend Carol is coming to our party tonight, and I have a little surprise for her. I’ve got two tickets to paradise! Pack your bags, we’re leaving the day-after-tomorrow! Um, taking her to Sandals, Jamaica, all-inclusive. All-inclusive. You know what that means? Right? Yeah.",266,Michael
"This is an old adage, but they say when you find true love, you know within the first 24 hours. With Carol, I knew within the first 24 minutes of the second day I met her.",267,Michael
Bros before hos. Why? Because your bros are always there for you. They have got your back after your ho rips your heart out for no good reason. And you were nothing but great to your ho and you told her she was the only ho for you. And that she was better than all the other hos in the world. And then … and then suddenly she’s not yo’ ho no mo’.,268,Michael
I honestly don’t see what the big deal is. Stevie Wonder is married. Are you going to tell me that Stevie Wonder doesn’t love his wife just because he’s not sure what she looks like?,269,Michael
"I totally rebounded. Someone else shoots and I take the ball and I score. Well, I guess I didn’t score and I’m not sure who’s actually shooting, but, whatever. Doesn’t matter. It’s all good. Or as my ex might say. Domo arigato, Mr. Scott-o.",270,Michael
"Yes, I just wanted to see if, uh you would like to come to Jamaica with me. There’s this resort called Sandals. Really? OK. All right. I promise you won’t be disappointed. Umm, It’s all-inclusive…",271,Michael
"William Randolph Shakespeare once wrote in one of his plays, and I’m paraphrasing here, “Love doth be poison.” Brilliant. And a lot of people don’t give Shakespeare enough credit. They think it was somebody else. A-holes.",272,Michael
"No, I don’t think I’m asking too much. I think it’s only fair that you tell me exactly what I did wrong. Okay. Uh huh. Well that… yeah. Uh huh. All right. Well, could you tell me something that I did",273,Michael
"Inventory is boring. In the islands, they don’t make you do stuff like take inventory. Why do you think so many businesses move to the Caymans?",274,Michael
"How hard is a luau? All you need are some grass skirts, pineapple, poi, tiki torches, suckling pig, some fire dancers. That’s all you need.",275,Michael
"Jan told me to play it cool and not tell anybody because it can get us both in trouble. So officially, I did not see her. But I did see Jan there. In our room. At night. And in the morning. That’s all I’m gonna say. Sex. We had sex. I had sex with her. I had sex with Jan.",276,Michael
"I just had the best, most romantic week of my life in Sandals, Jamaica. Went with a lady, and we laid on the beach and drank fruity drinks for free, because it was all-inclusive. And then I flew back to Scranton, and then they lost one of my bags.",277,Michael
"Hey, Mister tally man, tally me banana, six hand, seven hand, eight hand, BRUNCH! So delicious. Dinner, too. And every morning I would watch the sunrise and I would eat a mango. That is how I want to feel all the time. It’s called island living. You know, how they say take a chill pill? In Jamaica, I took one. Guy on the beach sold it to me for $40. And after I finished vomiting, I was more relaxed than I ever have been. Lost six pounds, too. That’s how I want every day to be.",278,Michael
"I just got back from vacay. Come on. Give me a break, man. Waves over Jamaica, $6.99.",279,Michael
"I would love to take them all to Jamaica, but is that good management? Yes. But is it the best management? Well, I can’t afford it, and corporate won’t pay for it. So who’s the real criminal?",280,Michael
"Don’t you have some sort of chaser or gobbler thing that you can send out that’s able to eat up that other emails? I read about something like that. Well, I am in America and I am online, so I do think it involves you. Uh-huh. And if I were a subscriber, would then you be able to send out the gobbler? I’d… Yes, I will hold.",281,Michael
Here we go.,282,Michael
"Dwight betrayed me once before. So this is his strike two. You know what they say? Fool me once, strike one. But fool me twice, strike three.",283,Michael
Who’s that sportscaster that bit that lady? Marv something? Andy is like Marv Something. Great sportscaster. Big weirdo creep.,284,Michael
It takes a big man to admit his mistake and that’s what I did. The important thing is I learned something. I don’t want somebody sucking up to me because they think I’m going to help their career. I want them sucking up to me because they genuinely love me. Hmm.,285,Michael
"Yesterday I was scraping some gunk off my wall sockets with a metal fork and I gave myself the nastiest shock. And when I came to, I had an epiphery. Life is precious. And if I die I want my son to know the dealio. The dealio of life.",286,Michael
Here are some things that I want to teach you that your mother won’t be able to.,287,Michael
"Hello everyone! As you know, we are six days away from Phyllis’ wedding. So get your suits to the dry cleaner and get your hair did. And Karen, um, you might want to invest in a dress or a skirt of some kind if you don’t already have one. This may be Phyllis’ only wedding ever. It is my job to ensure that none of you look like ragamuffins. So I am instituting prima nocta.",288,Michael
I’m sorry. I had a very different understanding as to what prima nocta meant.,289,Michael
"I’m trying to get everyone excited about Phyllis’ wedding because I want her to get people excited about my wedding when the time comes. Which won’t be hard, because it’s going to be awesome. A lot better than hers, that’s for sure. It’ll probably be on a boat.",290,Michael
"So you know who turned out to be kind of a creep? Ben Franklin. And Elizabeth the stripper gave me great advice. Which rhymed. Really makes you wonder how Ben Franklin can become president, but someone like Elizabeth can’t.",291,Michael
"Phyllis is getting married. And I am in the wedding party. She has asked me to push her father’s wheelchair down the aisle. So, basically, I am co-giving away the bride. Since I pay her salary it is like I’m paying for the wedding. Which I’m happy to do. It’s a big day for Phyllis. But it’s an even bigger day for me. Employer of the bride.",292,Michael
"This strappy young lad sitting here is Phyllis’ father, Albert, and he is quite the ladies’ man, aren’t you Albert, hah? Ah, ringbearer. I could have done better. I will do better. I am going to be better. I can’t believe I’m actually doing this! Ooh! Are you ready for this, Albert? I am. Let’s do it.",293,Michael
Me walking Phyllis down the aisle was supposed to be the highlight of the wedding. And now… the wedding has no highlight.,294,Michael
"I can’t believe I pushed that… that guy’s lazy ass around all day… until he was ready to stand up and steal the show. That’s… well… I got news for you, Albert. If that’s your real name. The show’s not over.",295,Michael
I do. I know a fair amount about fine food… and drink. This is a white.,296,Michael
"The most important part of a speech is the opening line. When time is not a factor, I like to try out three or four different ones.",297,Michael
ee… I was meant for you… buppity du bom bu.,298,Michael
They say that your wedding day goes by in such a flash that your lucky if you even get a piece of your own cake. I say that’s crazy. I say let them eat cake. Margaret Thatcher said that about marriage. Smart broad.,299,Michael
Be careful. Oh no!! Oh wow! Phyllis! Phyllis! You look like a clown! Here. Get me! Get me!,300,Michael
"A boss is like a teacher. And I am like the cool teacher. Like Mr. Handell. Mr. Handell would hang out with us, and he would tell us awesome jokes. And he actually hooked up with one of the students. Um… and then like twelve other kids came forward. It was in all the papers. … Really ruined eighth grade for us.",301,Michael
"So, you wanna start a business. How do you start? What do you need? Well, first of all, you need a building. And secondly, you need supply. You need something to sell. Now this could be anything. It could be… a… thingamajig. Or a… a whosi-whatsi. Or… a Whatchamacallit . Now, you need to sell those in order to have a PayDay . And, if you sell enough of them, you will make a 100 Grand . Satisfied?",302,Michael
"It is… a message. It is an inspiration, it is… a source of beauty. And without paper, it could not have happened. Unless, you had a camera.",303,Michael
"Well ultimately I went into business to inspire people. They say those who can’t do, teach. I can do both. I teach doing.",304,Michael
"I have a lot of big ideas, and the trick is to get it out of my brain and into theirs, in a way that is easy to swallow. Simple… Kids love candy bars.",305,Michael
"Lets try a little… Little social experiment here. Raise your hands if you like to buy things. OK, I see some people who like to buy things. You’re it, you are the reason this world rolls along, give yourselves a round of applause. Say, say you want to start a business, and business is all about buying and selling, is it not? So say you want to sell lemonade, or stickers. Something you have to keep in mind, you must, and you might want to jot this down, you must sell the stickers for more than you bought the stickers for.",306,Michael
"A lot of people think that magic camp is just for kids. And that’s why so many other people in my class were kids. Self fulfilling prophecy. It’s um, it’s really for anybody with a dream and a belief in magic and a little extra time after school.",307,Michael
"I cannot tell you how I plan to escape. Other than by using magic. That is the magician’s code. Separately, on an unrelated note, if you happen to find a small brass key…",308,Michael
"“Michael, you go to parties all the time, why is tonight so special?” Well, tonight is so special because my boss’s boss’s boss, the CFO, not his initials, common mistake, is having a little shindig for all the managers in the company. And Jan and I are going as a couple. For the first time. So it’s kind of our coming out party. Really. And that is why tonight is so special.",309,Michael
Hi.,310,Michael
"Actually, it’s polite to arrive early. And smart. Only really good friends show up early. Ergo de facto. Go to a party really early. Become a really good friend.",311,Michael
"It’s been sitting in my car all day. Sun beating down on the mayonnaise. Just, you never know.",312,Michael
Rachel thinks that I brought homemade potato salad and I just picked it up at the supermarket. It’s funny. I wish I could make potato salad that good. It’s just potatoes and mayonnaise. There is something wrong with Jan.,313,Michael
"What a weird day. I don’t understand it, but you don’t get to understand everyday of your life. Maybe five, ten days a year, I’ll get home and I will have no idea what the hell just happened. Guess everybody has days like that. Sometimes they’re the nicest ones. Still, I think there might be something wrong with Jan.",314,Michael
"Wikipedia… is the best thing ever. Anyone in the world can write anything they want about any subject, so you know you are getting the best possible information.",315,Michael
Tactic number six. Change the location of the meeting at the last second. Totally throws ’em off.,316,Michael
"Number 14, declining to speak first. Makes them feel uncomfortable, puts you in control.",317,Michael
"There were these huge bins of clothes, and everybody was rifling through them like crazy, and I grabbed one. And it fit! So I don’t think that this is totally just a woman’s suit. At the very least it’s bisexual.",318,Michael
"Negotiations are all about controlling things. About being in the driver’s seat. And make one tiny mistake, you’re dead. I made one tiny mistake. I wore woman’s clothes.",319,Michael
"A boss’s salary isn’t just about money, it is about perks. It… for example, every year I get a $100 gas card… Can’t put a price tag on that.",320,Michael
"Look, I am not a gazillionaire. I can’t… I can’t dress like Donald Trump dresses. I have to stay within the parameters of my budget. I can’t shop at a fancy Norwegian boutique. I buy my suits the old fashioned way. I buy them from discount stores… or on eBay. And when I found out that Ross was having a midnight madness sale, I ran, not walked, as per the instructions on the flier. And I got there, and when the doors opened, all of these women ran to this one bin. And I did too. And I grabbed this suit. And a woman, sort of a, I don’t know, Missy Elliot type, grabbed the jacket. And, uh, we had kind of a heated tug of war. And I could tell by the way she was screaming that this must be a get. And I figured she was just buying it for her husband, to answer your question from before. Um, anyway, she s… socked me, in the eye. And she got it, she got the suit. But, I went to the Ross, in Trenton New Jersey, and I found the exact same suit. And I didn’t have to deal with Missy Elliot.",321,Michael
"Today is Safety Training Day. Toby is leading ours upstairs. Yeauck. But, I am giving everyone a little bit of a treat. We are going to listen in on Darryl’s presentation to the warehouse. And if I know Darryl, it gonna be zoppity.",322,Michael
"“Hey Darryl, how’s it hangin’?!”",323,Michael
"Darryl thinks he is such a man because he works in a warehouse. I worked in a warehouse. Men’s Warehouse. I was a greeter. I’d like to see Darryl greet people. Probably make ’em feel like wimps. Not me, I… “Hello, I’m Michael. Welcome to Men’s Warehouse. We have a special on khaki pants today.” … This is one example.",324,Michael
"You may be asking yourself, “What am I doing on a trampoline?” Well, I thought I’d bounce here for a while, relieve some stress, and then move on with my day. Not! Here’s the plan. Dwight, is going to gather all of the office workers and all of the warehouse guys, we’re going to have another safety seminar. Only this time, where’s Michael? Oh my God! He is on the roof! Now I have got their attention. I… tell them, about the cold hard facts of depression. And then I say, “Hey! You ever seen a suicide?” And I jump. And they freak out. And they get to see… the dangers of depression with their own eyes. Nice side note: They might think “Hey, I should have been nicer to Michael.” But that’s… not why I’m doing this… Then, I land on the trampoline, take a couple extra bounces for fun. I climb off, walk around the corner… Ta-freakin’-da!",325,Michael
"An office… is as safe as the people in it. And sometimes those people can drive you to do crazy things to show the dangers of the office. That’s the danger I found myself in today. I saved a life. My own. Am I a hero? I really can’t say. But, yes.",326,Michael
"You know what’s funny? Robin Williams. When a cat gets stuck in a washing machine. City Slickers. Talking like Borat. You know what’s not funny? Safety, or making fun of the person trying to talk about safety. Not nice. I must show people how dangerous office can be. High five… Now that’s funny.",327,Michael
How do you make depression sexy? How do you… How do you get people interested in depression? That is the conon… the conun… the conumbery,328,Michael
"Those warehouse guys, think that we are all flabby, middle management, nerf balls. Well I’m going to show them that we have nerfs of steel.",329,Michael
"Coal miners, crab fishermen, Dog the bounty hunter, all dangerous jobs. But also upper middle management. Wow! I could have fallen off a roof today… And you don’t worry about falling off a roof when you work on a crab boat… And there are no roofs in coal mines.",330,Michael
"We have a crisis. Apparently, a disgruntled employee at the paper mill decided that it would be funny to put an obscene watermark on our 24 pound cream butter stock. Five hundred boxes has gone out, with the image of a beloved cartoon duck, performing… unspeakable acts upon a certain cartoon mouse that a lot of people like. I’ve never been a fan.",331,Michael
"Here’s the thing. When a company screws up, best thing to do is call a press conference. Alert the media, and then you control the story. Wait for them to find out, and the story controls you. That’s what happened to O.J.",332,Michael
"Mrs. Allen is our most important client… because every client is our most important client. Even though she’s a pretty unimportant client, really.",333,Michael
"OK, I think that’s good.",334,Michael
"The key to a crisis is dealing with it right away. Like that aspirin company that sent out the poisoned aspirin in the regular aspirin bottles. If you don’t act fast, you will lose customers.",335,Michael
"With dissatisfied clients, it doesn’t matter what you did. All they wanna hear is that you’re sorry. They’re like women that way. And this client is a woman. So when I say I’m sorry, it will be twice as effective.",336,Michael
The customer is always right. Mrs. Allen was our customer. She was wrong. Is that a contradiction? No. Because she’s not our customer anymore.,337,Michael
"Hey, Mom. Happy birthday, belatedly. Sorry I forgot. I had put it on my calendar and Pam threw that out.",338,Michael
"And without denying the seriousness of the situation, I would just like to remind you that in much of the Netherlands, swimming naked is the norm. So in Norway, you’d be the weirdos.",339,Michael
"I have literally apologized an infinite number of times on this, and there are still calls for me to resign. Calls from an annoying woman, and possibly even the media alike. Well let me tell you something, something from the heart. I will not resign. I need this job. My mortgage is hundreds of dollars a month. With this job, I can barely cover that. I have a company car, but I still have to pay for gas, and gas prices are high. And I have no savings whatsoever. And it wasn’t even me. It’s so not fair that they want me to resign.",340,Michael
"In all the excitement, I forgot that my primary goal is to keep people safe. Women can’t have fun if they don’t feel safe. For example, Jan and I have a safe word in case things go too far. Foliage. And if one of us says that word, the other one has to stop. Although last time… she pretended she didn’t hear me.",341,Michael
"Let’s face it, most guys are from the Dark Ages. They’re caveman. And they like a woman to be showing her cleavage and to be wearing 8-inch heels, and to be wearing, um, see-through underpants. But… for me, a woman looks best when she is just absolutely naked.",342,Michael
"Any man who says he totally understands women is a fool. Because they are un-understandable. There’s a wishing fountain at the mall. And I threw a coin in for every woman in the world and made a wish. I wished for Jan to get over me. I wished for Phyllis, a plasma TV. I wished for Pam to gain courage. I wished for Angela, a heart, and for Kelly, a brain. “Michael, how can you appreciate women so much but also dump one of them?” You mean, how can I be so illogical and flighty and unpredictable and emotional? Well, maybe I learned something from women after all.",343,Michael
"Sometimes I imagine what it would be like to be a woman. I have a full-length mirror in my bathroom, and before I get dressed I will tuck myself between my legs just to see. And, um, it’s uncomfortable. So maybe I do understand.",344,Michael
I got shotgun. Damn it.,345,Michael
Look at that! Come on! Free underwear!,346,Michael
"Hey, Pam, how bout something like that for you. Could sort of cover up any imperfections in the mid section. Just show off the twins a little bit.",347,Michael
Idiot.,348,Michael
"I learned a lot about women today. And any man who says he totally understands women is a fool. Because they are un-understandable. Jan and I broke up. Why? Because she didn’t like one message I left on her voicemail? But that is her peariagative. I thought I understood women, but maybe, can’t believe I’m gonna say this, maybe, women don’t understand themselves.",349,Michael
"OK, everybody have their towels and swim suits? We have about an hour and half. I suggest that you all go potty now and then we will be congregating on the partay bus.",350,Michael
I want today to be a beautiful memory… that the staff and I share after I have passed on to New York. And if Toby is a part of it… then it’ll suck.,351,Michael
What happens to a company if somebody takes their boss away? I will answer your question with a question. It’s like what happens to a chicken when you take its head away. It dies. Unless you find a new head. I need to see which one of these people have the skills to be a chicken head.,352,Michael
This way to the partay bus.,353,Michael
Here we are ladies and gentlemen. Everybody ready? Last one down is a rotten egg. Watch out for snakes!,354,Michael
"Jim Halpert. Pros: smart, cool, good-looking. Remind you of anybody you know? Cons: not a hard worker. I can spend all day on a project, and he will finish the same project in a half an hour. So that should tell you something.",355,Michael
"Dwight is an obvious candidate for my job. He has the best sales record in the office. He loves the work. He is, however, an idiot.",356,Michael
I am also considering Stanley because of all the good that black people have done. For America.,357,Michael
Andy Bernard. Pros: He’s classy. He gets me. He went to Cornell. I trust him. Cons: I don’t really trust him.,358,Michael
A good manager has got to be hungry. Hungry for success.,359,Michael
"Yes, I am choosing my apprentice. Which is why I have modeled all my games after Survivor.",360,Michael
Ready! Go!,361,Michael
"Andy Bernard is in first place with four hot dogs! Dwight Schrute is a close second with three and a half! Here comes Stanley! Here comes Stanley, with three hot dogs!",362,Michael
"This is an inflatable sumo suit. Now, in the olden days, when they wanted to find a guy who could be king, they would have him pull a sword out of a stone. Well, times have changed. And it’s not even about who is the best sumo wrestler. It’s about who is the best boss. And I don’t even care who wins. It’s how they wrestle in a blow-up suit… that will tell me all I need to know or how sumo…",363,Michael
"I got it made in the shade. I know this company. The other branch managers are total morons. Hey, Pam yeah, I forgot what day the interview was and I drove to New York accidentially. I’ll be like three hours late.",364,Michael
"Okay. Jan, we need to talk.",365,Michael
"Jan is in a different place right now, and it is a sign of maturity to give people second chances. So I am going to hear her out.",366,Michael
"No. No, no, no, no. I’ll tell you this, it is",367,Michael
"Here’s the sitch. Two weeks ago, I was in the worst relationship of my life. She treated me poorly. We didn’t connect, I was miserable. Now, I’m in the best relationship of my life with the same woman. Love is a mystery.",368,Michael
"Hey, everybody. The next time you see me, I’ll be working for corporate. Starting tomorrow, Dwight Schrute will be running the branch. So without further ado, I would like to start saying my goodbyes Okay. Goodnight, and good luck.",369,Michael
"I am by far the most qualified person they’re interviewing. Jim and Karen are here, which is cute. They’re like, kid actors tagging along with daddy, on the big audition, hoping to be discovered. Except daddy… is the best actor around. Daddy is Meryl Streep.",370,Michael
"New York real estate. I started by looking for a brownstone, like the Huxtables had, but instead I found this very, very, nice place in Jamaica, Queens, mon. It is on the last stop of the subway, which is wonderful, because if I fall asleep, I still end up at home. It is a suh-weeeet one bedroom. I have a roommate, uh, Vijay Chokalingham, he’s a sophomore at Queens College. He actually works in the Indian restaurant right below the apartment, so… free food, and the place always smells like curry. So, win/win.",371,Michael
This is going to be a very good year. Very good. Jan is at home. Jim is back. My protege Ryan is at corporate. Good stuff. Um… Andy and Dwight are rockin’ the sales team. I feel very blessed.,372,Michael
"So Ryan got promoted to corporate, where he is a little fish in a big pond. Whereas back here in Scranton I am still top dog, in a fairly large pond. So who is the real boss? The dog or a fish?",373,Michael
"Guess what, I have flaws. What are they? Oh, I don’t know. I sing in the shower. Sometimes I spend too much time volunteering. Occasionally I’ll hit somebody with my car. So sue me… No, don’t sue me. That is the opposite of the point that I’m trying to make.",374,Michael
Do I need to be liked? Absolutely not. I like to be liked. I enjoy being liked. I have to be liked. But it’s not like a compulsive need to be liked. Like my need to be praised.,375,Michael
"Well, I am taking responsibility. It is up to me to get rid of the curse that hit Meredith with my car. I’m not superstitious, but… I’m… I am a little-stitious.",376,Michael
"Is there a God? If not, what are all the churches for? And who is Jesus’ dad?",377,Michael
"A woman shouldn’t have to be hit by a car, to learn that she may have rabies. But that is where we are in America. And that does not sit right with me. And that is why I’m hosting a fun run race for the cure for rabies. To raise awareness of the fact that there is a cure for rabies. A disease that has largely been eradicated in the US. But not very many people know that.",378,Michael
"Check that out. Look at me, I’m Toby, I’m stretching, I know what I’m doing. Why is he even here?",379,Michael
Rabies victims… have to live with an irrational hatred of water their entire lives. So… least I could do.,380,Michael
"Oh God, Oh, alfredo sauce. I’m getting a stitch.",381,Michael
"I am not going to finish. I can’t beat rabies. Nobody can beat rabies, rabies has been around for a thousand years. I was a fool to think that I could beat it.",382,Michael
"Finishing that 5k, was the hardest thing I have ever had to do. I ate more fettuccine alfredo and drank less water, than I have in my entire life. People always talk about triumphs of the human spirit, well today I had a triumph of the human body. That’s why everybody was applauding for me at the end. My guts and my heart, and while I eventually puked my guts out, I never puked my heart out. And I’m very, very proud of that.",383,Michael
Maybe she hit me. You ever think of that? She hit me? I don’t know whose fault it was. I wasn’t exactly looking at the road.,384,Michael
"On the one hand, it’s a relief to know that it’s not just me, the whole office is cursed. On the other hand, I may have to deal with the dark unknown.",385,Michael
"Yeah, the, uh, the charity’s having some financial problems. What do I look like to you, Paul Newman? That’s actually not a good example, because I have been compared to a young Paul Newman, my eyes and my face. And I make my own salad dressing. I mix Newman’s Ranch with Newman’s Italian. Sell it at flea markets for a slight loss. I could make… I could make a profit if I changed one of the ingredients to Wishbone but I won’t do it.",386,Michael
"Well, apparently, my insurance will not be covering this hospital stay. I will be paying out-of-pocket. Um… I kinda wish I’d been hit by a car.",387,Michael
"Hey, doc? You forgetting something? Thank you.",388,Michael
Pam and Jim are together. Ryan is visiting. Only thing that could make this day better is ice cream.,389,Michael
"Yeah, Ryan snapped at me, but there was this twinkle in his eye that I picked up on, which said, “Dude, we’re friends. I’m doing this for appearances. I am the big boss now. And I have to seem like an ogre. But you know me and you trust me. And we like each other. And we’ll always be friends. And I would never take you for granted in a million years. And I miss you, man. And I love you.” His words.",390,Michael
"We had a foreign exchange student live with us when I was young. And we called him my brother. And that’s who I thought he was. Um, then he went home to what is now formerly Yugoslavia, taking all of my blue jeans with him. And I had to spend the entire winter in shorts. That is what Ryan is like. A fake brother who steals your jeans.",391,Michael
Some days I am just on fire. What can I say?,392,Michael
"Well the website is the brain-child of my brain-child, Ryan. It is my brain-grandchild. And, uh, to celebrate it’s birth, all of the different branches are going to have satellite parties, which will be connected via web-cams and fibers to the real party, which is going on in New York City at uh, a very exclusive nightclub, and that is where all of the VIP’s, including yours truly, will be partying with uh New York City’s finest, and I do not mean policemen…",393,Michael
"Well the invitation says VIP’s only. Is this how you treat your VIP’s, Ryan? We’re already in the city. The main part with the buildings. What am I supposed to do? What do you want me to do tonight? And if you tell me, that I have to drive back to Scranton, to the satellite party, I am going to throw up! Okay I’m going to throw up. I’m throwing up. You’re making me throw up, Ryan.",394,Michael
You know what this is like? I’ll tell you what this is like. This is like when the Freshmen would throw a party and wouldn’t let any of the Seniors go.,395,Michael
"This was a pretty disappointing day. It was kind of a slap in the face to realize that I wasn’t as important as I thought I was to a certain young executive who I cared about. But, you know, I’m not gonna cry over it. I did that in the car on the way home.",396,Michael
"Do I feel badly, that nobody out there was invited to a party that I was invited to? Not at all. Because they have to know that if they work hard and apply themselves, someday, they could be invited to a party like this. Of course, at that point, I will be going to much better parties that they will not be able to get into. What are you gonna do?",397,Michael
Steak! Where’s my steeaaak?,398,Michael
"Yes. Money has been a little tight lately. But, at the end of my life, when I’m sitting on my yacht, am I gonna be thinking about how much money I have? No. I’m going to be thinking about how many friends I have, and my children, and my comedy albums. I mean, I have a yacht, so I obviously did pretty well money wise.",399,Michael
"Use to have two cars, traded ’em in, now we’re down to one. Good economic sense. Although the new car is a Porsche. For her.",400,Michael
"I’m sorry Mr. O’Brian, I didn’t mean to interrupt your dinner. I just have a very exciting offer. My records indicate that you have expressed interest in losing some weight. Well, what if I told you that I have a pill that will make you 50 pounds lighter in 5 minutes? How does that sound? Amazing right? Well, it won’t be that fast, but it will–– it will be that easy.",401,Michael
"Yes I forgot about Ryan’s presentation. And yes, it would have been nice to do well with the first presentation he had given me. But you know what else would have been nice? Winning the lottery.",402,Michael
"I’ve never done this before. I’ve never quit anything in my life. So, you are filming history.",403,Michael
"I was never in this for the money. But it turns out that the money was an absolute necessity for me. I tried to live the dream. I tried to have a job, a girlfriend, another job, and I failed. But the good thing about the American dream is that you can just go to sleep, and try it all again the next night.",404,Michael
"I’ve always wanted to be in the witness protection program. Fresh start, no debts, no baggage. I’ve already got my name picked out, Lord Rupert Everton. I’m a shipping merchant who raises fancy dogs. That’s the life.",405,Michael
I… DECLARE… BANKRUPTCY!,406,Michael
"What am I doing? I am blowing dodge. I’m getting out of town. Whatever you call it, I am running away from my responsibilities. And it feels good.",407,Michael
I’ve been putting money into CDs for years. I bought music that I didn’t even like. No.,408,Michael
"We are making a commercial for Dunder Mifflin today. Our first ad ever. Corporate purchased some air time in local markets to spread the word about Dunder Mifflin Infinity and they are even sending up a professional ad company to help us make it later so… it’s uh, not too shabby.",409,Michael
"All right, let me ask you this, tell me if you think this is creative. When I was five, I imagined that there was such a thing as a unicorn. And this is before I had even heard of one, or seen one. I just drew a picture of a horse that could fly over rainbows, and had a huge spike in its head. And I was five, five years old. Couldn’t even talk yet.",410,Michael
"We have three scenes to film, big scenes. We have a song to write. So let’s get cracking. Kelly, I want you to do makeup. Oscar, I would like you to do costume design, obviously. Phyllis, I’d like you look around town and see if we have any celebrities in our local area.",411,Michael
"Well, it’s been tough. The uh, geniuses at corporate rejected my commercial and tonight they are airing the brain dead version. So welcome one and all to the world premiere of Corporate Crapfest!",412,Michael
"It all starts with an idea. But you can never tell where an idea will end up. Because ideas spread, they change, grow. They connect us with the world. And in a fast moving world, where good news moves at the speed of time , and bad news isn’t always what it seems. Because when push comes to shove we all deserve a second chance. To score. Dunder Mifflin. Limitless paper in a paperless world.",413,Michael
"You cannot take the hilarious black guy from the office. Stanley is part of what makes this branch so extraordinary. The bluesy wisdom, the sassy remarks, the crossword puzzles, the smile, those big watery red eyes. I don’t know how George Bush did it when Colin Powell left, and if Utica thinks that they are going to poach Stanley, they have another thing coming.",414,Michael
"What is that guy talking about? Scranton is not lame. Scranton is the cool, fun branch. We’re like Animal House.",415,Michael
"We tried and we failed. Stanley, you may go. Here is a box, for your things, but I doubt that that box will be able to contain all the memories that you have of this place. Fly away sweet little bird, fly away and be free. Pam, I’m gonna need some help writing a want ad.",416,Michael
"Utica is snoozeville, um, Albany are the prepsters, Nashua, no parking, um, Akron is haunted, Camden… is in a basement, Yonkers has the two hot girls, and here in Scranton, we are the cool guys.",417,Michael
"When Jan and I had satellite, we used to watch a reality show called “Survivorman.” And, it was interesting because it was about a guy who would go out in the middle of no where and just try not to die, try not to get eaten by an animal, or be overexposed.",418,Michael
Look at those wrinkles. Blacks do crack! Not crack the drug.,419,Michael
"Day One. I’m in the interior of the vast Pennsylvania wilderness. I’ve brought with me only the bare essentials. A knife, roll of duct tape, in case I need to craft some shelter or make some sort of water vessel. It’s hot today. The sun is in the two-thirds easterly quadrant, which would make it about 2 o’clock in the afternoon. It’s really beating down on me now. I think that I want to get a little more comfortable because the sun is depleting my resources. OK. OH, there we go. Watch that I don’t hit my corroded artery here…",420,Michael
"There we go. Much better. Now everything I brought with me can be used. My sport coat here, can be fashioned into a backpack of sorts .",421,Michael
I’m going to wear what was once one of my pant legs.,422,Michael
"See, this is a beautiful piece of material This could be used for all sorts of things.",423,Michael
Some sort of kerchief to keep my neck nice and comfortable.,424,Michael
"I am totally alone right now, with only my thoughts. I love it. I’m loving it. I can literally say anything I want. No one is gonna here me. Wish I could have gone with Ryan on that cool retreat! Jan has plastic boobs! I HAVE HEMORRHOIDS! Doesn’t even matter.",425,Michael
"Well it is a little chillier than I had thought, so I have fashioned my hat back into my pants. Several hours in, time for me to find some nourishment. Now, these woods are full of creatures that can sustain human life. Things like, uh, squirrels, nice juicy rabbit would be delicious.",426,Michael
"I have made this spear, with which I will impale my dinner. And it couldn’t come a moment too soon because I have been without food for a good three hours or so. I’m startin’ to feel it a little bit. Ohh… It’s Creed’s birthday. Happy Birthday to you. Happy Birthday to you. Happy Birthday to Creed. Happy Birthday to you. Happy birthday, buddy.",427,Michael
"Well if you take a look at this, I tented my pants. I’ve made myself a nice pants tent shelter. And this little guy may be Dunder Mifflin paper some day.",428,Michael
"Man became civilized for a reason. He decided that he liked to have warmth, and clothing, and television, and hamburgers, and to walk upright, and to have a soft futon at the end of the day. He didn’t want to have to struggle to survive. I don’t need the woods. I have a nice wood desk. I don’t need fresh air, because I have the freshest air around, A.C. And I don’t need wide open spaces. Check it out. I can also make it the sky.",429,Michael
"My ideals at a party? Easy. Jim. Pam. Ryan. The Mayor. Barack Obama. Shiloh Jolie-Pitt. Because at the end of the night, Brad or Angelina would have to come and pick him up and I would get to meet them. Shia La Beef because of Disturbia. Umm, all of the children of the world. Val Kilmer. But he probably wouldn’t come, too famous. Obviously George Clooney. Umm… And Jan definitely, if there was room.",430,Michael
What is it like being single? I like it. I like starting each day with a sense of possibility. And I’m optimistic because every day I get a little more desperate and desperate situations yield the quickest results.,431,Michael
"I am ready to start dating again. Getting back on the market. So, FYI, for those of you who are thinking about fixing me up with any of your friends, use the woman on page 85 as a template. That will be all.",432,Michael
What is wrong with these people? I would do anything for them and they’re just hanging me out to dry.,433,Michael
"No question about it, I am ready to get hurt again.",434,Michael
"Bye, bye, Ms. Chair Model lady. I dreamt that we were married and you treated me nice. We had lots of kids…drinking whiskey and rye, oh why’d you have to go off and die? Why’d you have to go off and die?",435,Michael
"Love. Marriage. Baby carriage. Those have been my goals ever since I heard that song. Jan and I had love. We did not have marriage. We did have a baby carriage, which I got her for bringing groceries home, after she got a DUI.",436,Michael
"All right, time’s up! Pencils down. Please pass your future Mrs. Michael Scotts forward.",437,Michael
"So far, these are my leads. A blind tollbooth operator and a twelve hundred pound catcher. It’s a start.",438,Michael
"I will be honest; the dating has not been going well. Look, men are visual creatures. We crave beauty, like a piece of fine art by any number of renowned artists, or an arty photograph of Cindy Crawford nude… that, but the women I’m getting fixed up with are, egh! Not that they aren’t nice, or that have great personalities, they just… They just lack a certain… Crawfordness.",439,Michael
Ryan’s assistant told us that he would be at this club this evening. It is called Prerogative.,440,Michael
Ryan told me to always tell women you work in finance.,441,Michael
"I am. I am getting out there. Well, no I’ve asked a lot of girls to dance mom. They’re just, it’s not… Yes, I shaved above my neck. Oh my God, mom, I gotta go. One of my friends is getting beaten up by some girls.",442,Michael
"Like I said, it’s not about the horniness, it’s about the loneliness. And how can I be lonely with my boys? Like a famous person once said, Boys on the side. But I don’t, I disagree, I say… let’s hear it for the boys.",443,Michael
"Today is a very special day for me. And it’s really not about me, it’s about my grandkids, it’s about my great grandkids… I can come back here when I’m 100, and I can find that piece of cement and say, “That’s me. Look kids, your daddy left that face hole…” I dunno, it’s a good feeling.",444,Michael
"I am good person, and sometimes, good people don’t get no respect. Rodney Dangerfield. Hey, I don’t get no respect. No respect at all. When I was in the sandbox as a kid, I got not respect. My wife likes to talk after sex, so she called me from a hotel room, and said, “I don’t respect you!” Ahh, thoughtless. Aw, you know what don’t get no respect? Airplane food. Why don’t they just make the plane out of the airline food? My wife don’t get no respect, some–take her, please, for example. If you don’t get no respect, you might be redneck. Respect is niiice. Borat. What’s the deal with Grapenuts? No grapes, no nuts. I don’t get no respect!",445,Michael
"I put Stanley on a pedestal, for a long time. But sometimes he can just be a big, fat jerk. I… jerks don’t deserve to be on pedestals. Jerks should be placed up somewhere where everybody can see how jerky they are. Big marble… jerk stand.",446,Michael
"Today I’m heading over to the job fair at Valley View High School, to find some new interns. Want to get some fresh blood. Um, euthanize this place.",447,Michael
"Yeah, I’m trying to lure these kids into my booth, but uh, kids are very wary about being “lured” these days. Thank you Dateline!",448,Michael
"All of these jobs? Suck. I would rather live jobless, on a beach somewhere, off the money from a large inheritance, than to have to work in any one of these crap-holes. They suck.",449,Michael
Hey! Game over.,450,Michael
"Justin is the ugly girl in the movie, who takes off her glasses and she’s hot! And you realize she was always hot, she was just wearing glasses. And that you were the blind one. He’s the most… important thing in my life right now.",451,Michael
"Today I did something stupid. I questioned myself. And I will never do that again. Because I look at somebody like Jim Halpert and I think, that guy can do anything he wants to do. He could do anything, and he chooses to work here, selling paper. Just like me.",452,Michael
"Yeah, kiss her. Kiss her good.",453,Michael
"Well, kids today have a very short attention span. They are into texting and video games and sex, and they just, they get distracted easily. And today they’re being distracted by the other booths.",454,Michael
"Today is Toby Flenderson’s last day. I couldn’t sleep last night. I came extra-early. So much energy… There are certain days you know you know you will remember for the rest of your life, and I just have a feeling that today is one of those days.",455,Michael
"Every year, my sweet, sweet grandmother sends me a check on my birthday for fifty dollars. And lately, she has been sending me, like nine or ten checks a year… uh, as Nana starts to… but, I knew I should be saving it for something, I just didn’t know what I should be saving it for. And then I had an awakening. “Michael, buy a motorcycle.” So I put the money in my shoe, and then I forgot about it until now.",456,Michael
"Thanks to Toby, I have a very strong prejudice against Human Resources. I believe that the department is a breeding ground for monsters. What I failed to consider though, is that not all monsters are bad. Like E.T. Is Holly our extraterrestrial? Maybe. Or maybe she’s just an awesome woman from this planet.",457,Michael
"I’ll let you in on a little secret: I’ve been very much looking forward to this moment. Very, very much. I-I have been steeped in anticipation. Toby has been cruisin’ for a bruisin’ for twelve years, and I am now his cruise director, and my name is Captain Bruisin’.",458,Michael
Oh my God. Ryan… Oh my God.,459,Michael
"Holly is sweet and simple, like a lady baker. I would not be surprised to find out that she had worked in a bakery before coming here. She has that kind of warmth. I’m pretty sure she’s baked on a professional level.",460,Michael
"Did you see that! Did you see it? Did you see what… wow-wee! Uh, well, Jan didn’t believe in showing affection, so… sometimes I don’t know how to react when a girl touches me. Oh… I like it!",461,Michael
"Goodbye Toby, it’s been nice. Hope you find your paradise…",462,Michael
"Come tomorrow, feel no pain! Feel no pain! Toby! Toby! Tobee-yy! Toby’s goin’ away! See ya! He’s outta here! See ya! He’s outta here! Ohh! Goodbye Toby! Goodbye Toby! Goodbye Toby! Goodbye Tooo-by!",463,Michael
"My whole life, I have known two things: I love sex, and I want to have kids. And I always thought that those two things would go hand in hand, but now, I think it might be one or the other.",464,Michael
"Hi, Jan, it’s Michael. I just um, I just want to let you know that I am going to go to your Lamaze class tomorrow. Um, and if there’s any details you need to fill me in on, like… what exactly Lamaze is, that would be great. And I… will see you tomorrow morning. I am going to be… kind of a daddy.",465,Michael
"This summer, corporate is sponsoring a little weight loss contest between the branches. Whichever branch loses the most weight gets three extra vacation days.",466,Michael
"Hi, Jan. Hello, baby. How are you? Good to see you. Who’s your daddy? You don’t know who your daddy is, do you? No, you don’t. Come on. Let’s go in.",467,Michael
What is wrong with these people? They have no willpower. I went — I once went 28 years without having sex. And then again for seven years.,468,Michael
"Oh, Holly doesn’t need luck. Everyone that meets her instantly loves her.",469,Michael
"Ronnie was bleh. Things were at an all time sad here. But then I got an e-mail from Ryan, that he was coming back to town. And I called the temp agency and I told them I will pay you any amount, just give me Ryan Howard. Give him to me. I want him. I need him.",470,Michael
It’s my sumo suit. I just didn’t inflate it all the way. I am so glad that I bought instead of rented.,471,Michael
I can’t wait to be a father. I’m going to smother that baby.,472,Michael
“Why are you helping her? You’re not even dating.” She’s my friend… and… ultimately my strategy is to merge this into a relationship… without her even knowing. Uh…,473,Michael
I will be honest with you. That car ride did not go well and that was not my fault. The only reason I am standing out here right now is because I don’t want to take the elevator with her. And I am holding on to her leftovers.,474,Michael
"How do you tell somebody that you care about deeply, “I told you so.” Gently with a rose? In a funny way, like it’s a hilarious joke? Or do you just let it go, because saying it would just make things worse? … Probably the funny way.",475,Michael
It is going to be the happiest day of my life.,476,Michael
"It does not matter to me at all whether this baby is biologically mine. I am going to love it. It’s like when the dog nurses the tiger cub. Have you seen that video? It is… it’s so bizarre and unnatural, but… it, it happens.",477,Michael
"I love babies. I think they are beautiful in all sorts of different ways. I try to pick up and hold a baby every day, if possible, because it nourishes me. It feeds my soul. Babies are drawn to me, and I think it’s because they see me as one of them. But cooler, and with my life put together a little bit. If a baby were president, there would be no taxes, there would be no war. There would be no government, and things could get terrible. It actually, probably – it would be a better screenplay idea than a serious suggestion.",478,Michael
"I didn’t feel much when I held Astrid, but I got a good feeling from Holly.",479,Michael
"In my opinion, the third date is traditionally the one where… you have sex. Does Holly feel that way? I don’t know. I will probably find out tonight. If she starts having sex with me I’ll know for sure.",480,Michael
Probably get soup or something light.,481,Michael
So much for sex without consequences.,482,Michael
"We’re gonna make everything all right. Alright? Conference room, 15 minutes. Half an hour. Alright?",483,Michael
"To recoup their losses, I am planning a little charity auction, where people from all over Scranton can come and bid on our goods and services. I’m calling it crime-aid. It’s like farm aid, but instead of farms fighting against AIDS, it is us fighting against our own poverty.",484,Michael
"Pump it up! Yeah! Yeah! Yeah! Pump up the volume. Thank you very much, everybody. Thank you, Mr. Springsteen. And welcome to C.R.I.M.E.-A.I.D. Crime Reduces Innocence Makes Everyone Angry I Declare. It is not known how many office robberies occur every second because there is no Wikipedia entry for office robbery statistics. However, tonight, its victims, are standing together and standing strong in the form of song, cooking lessons, and hugs. Really Phyllis? You’re auctioning a hug? Okay, so with no further ado, lights, camera, auction! Take it away Bruce!",485,Michael
"Hey, that looks good. Listen, about the tickets. It’s sort of a gray-kind of a gray area in terms of…whether or not I had them-",486,Michael
"When Corporate found out that we were dating, they decided they were going to transfer Holly back to her old branch, in Nashua, New Hampshire.",487,Michael
"Holly thinks that this relationship is over. Well, you know what? I am not gonna give up that easy. I’m gonna make this way harder than it needs to be.",488,Michael
"Kelly Kapoor is our dusky, exotic customer service rep. And once a year, she will contact our clients and find out how happy they are with our salespeople. Sort of a Kapoor’s List. “Schindler’s List” parody. … That’s not appropriate, no.",489,Michael
"Why are surveys important? Okay, hypothetical: A man wants to buy 500 reams of….carrots. And, so he’s like “What do I do? Where do I go? Do I go to the insensitive carrot supplier, the insensitive carrot salesman? Or do I go to the nice carrot salesman, who will maybe charge a few cents more per ream of carrot, but guarantee next-day delivery on your carrots? Most companies need their carrots the next day. Now, substitute paper for carrots, and that is why surveys are important.”",490,Michael
"I taught Jim and Dwight everything I know about sales. But there are certain things that cannot be taught, and it is these things that I now must teach them.",491,Michael
"My boss is sending me abroad to do a presentation to an international client and I have always been intrigued by all things international. The women, the pancakes, the man of mystery…",492,Michael
"A concierge is like the Winnipeg equivalent of a geisha. This is a woman who has been trained in the fine art of fanciness and pleasure. And when you meet one, it is intoxicating. Just what the doctor ordered.",493,Michael
"Everyone is going to end up dying someday. And I think it’s better to die with people you like… like Oscar, and Andy, and concierge Marie… than to know that there’s somebody out there that you love that you’re not with.",494,Michael
"Why have I stayed at Dunder Mifflin for so long? Certainly not because of the paycheck. ‘Cause I could be making more money as a doctor or a professional athlete. I think it’s because they respect me. A boss that will not fire you, even though you just tell him off… right to his face… over the hone. That’s respect.",495,Michael
"I learned a while back that if I don’t text 911 people will not return my calls. Um, but now people always return my calls because they think that something horrible has happened.",496,Michael
"I tried, I tried. I tried to talk to Toby and be his friend but that is like trying to be friends with an evil… snail. I feel like I’m dying inside. I feel like Neve Campbell in Sream II. She thinks she can go off to college and be happy and then, the murderer comes back and starts killing off all of her friends. I learned a lot of lessons from that movie, this is just one of them.",497,Michael
"I hate disappointing just one person. And I really hate disappointing everyone. But I love Burlington Coat Factory. You go in there with $645, you are literally a king.",498,Michael
"No, I don’t-this doesn’t change anything. I have a very important decision to make. We need a new copier. We need new chairs. And I need to figure out a way to keep this money without having everybody hate me.",499,Michael
"What did we learn this week? Well, one, thanks to me, my team is much, much faster at coming to decisions than I thought they would be. Number two, never buy a fur coat with a credit card until you absolutely have the money to pay for it. And three, you should know that some people think it’s cool to throw buckets of fake blood on you as you are walking out of Burlington Coat Factory.",500,Michael
"Oh, so this is what every day would be like if you hadn’t left India.",501,Michael
"An intervention. It’s sort of hard to describe, but really its– it’s a coming together… it’s a surprise party for people who are– who have addictions. And you get in their face and you scream at them and you make them feel really badly about themselves. And then they stop.",502,Michael
"You know what the only thing I want for Christmas? I want Meredith to get better. That’s my only wish. But you know what? My wishes never come true, so I’m not going to wish that on her. I– a watch would be nice.",503,Michael
As it turns out you can’t just check someone into rehab against their will. They have to do it voluntarily. They have to hit rock bottom. So I think I know what I need to do at this point. I need to find ways to push Meredith to the bottom. Um… I think I can do it. I did it with Jan.,504,Michael
"Today’s a big day. My presence has been requested by Chief Financial Officer, David Wallace. He says that he wants to talk about big picture stuff. And, I’ll be honest, I have little or no idea what that means, so… probably bad.",505,Michael
"Sometimes I’ll start a sentence, and I don’t even know where it’s going. I just hope I find it along the way. Like an improv conversation. An improversation.",506,Michael
"This is going to sound sort of high-maintenance, but could we have it, like, three degrees cooler in here? I always think better when it’s cooler.",507,Michael
"Wow, what a day! Haha! I thought I was gong to get chewed out, but, hold on! Here’s an attaboy for ya! What? Rollercoaster ride! Rollercoaster! It just goes to show, you leave Scranton, exciting things can happen. Ahh!",508,Michael
"In nature, there is something called a food chain; it’s where the shark eats a little shark. And the little shark eats a littler shark. And so on and so on. Until you get down to the single cell shark. So now replace sharks with paper companies and that is all you need to know about business.",509,Michael
"Nobody should have to go to work thinking, “Oh, this is the place that I might die today.” That’s what a hospital is for. An office is for not dying. An office is a place to live life to the fullest, to the max, to… An office is a place where dreams come true.",510,Michael
"We found ourselves on the less prepared side of things when Stanley had his… when his heart went berserk. And I knew exactly what to do, but in a much more real sense I had no idea what to do. So I thought we should have CPR training class and of course you can’t get the practice dummy unless the instructor comes along with it. Red Cross, you know, racket.",511,Michael
Ohmmm… Ohmmm… Everybody sit on the floor Indian style like me. Ohmmm my God if you’re wearing a dress please keep your knees together nobody wants to see that ohmmm… ohmmm…,512,Michael
My goal is to make this office as peaceful a place for Stanley Hudson as I can. I think sounds have a lot to do with that. Here are some downloaded peaceful sounds. That one makes me think… of death. It’s kinda nice…,513,Michael
So… it wasn’t Dwight after all. Looks like I am the killer. You never expect that you’re the killer… it’s uh… great twist. Great twist.,514,Michael
I can already feel people’s stress starting to melt. I think they’re very excited about paying their respects this way. I have got to make sure that YouTube comes down to tape this.,515,Michael
"NO! No, friends only. Friends ONLY.",516,Michael
Caw… caw… caw caw… caw…,517,Michael
"You know sometimes, to get perspective, I like to think about a spaceman on a star incredibly far away. And, our problems don’t matter to him, because we’re just a distant point of light. But he feels sorry for me, because he has an incredibly powerful microscope, and he can see my face. I’m okay. No, I’m not.",518,Michael
"They say that laughter is the best medicine so Stanley, you can throw away those pills. You are cured. Actually, you should… better hold onto them pills, just in case.",519,Michael
"I am a theatrical person. Growing up, I always thought I would become an actor. Because I have, these memorization tricks that I use. Um, for instance, I learned the Pledge of Allegiance by setting it to the tune of Old MacDonald. I pledge allegiance to the flag of the United States of America, and to the republic for which it stands, one nation under God. With a woof-woof here, and a woof-woof there. Here a woof, there a woof. Everywhere a woof, woof. Um, you get it.",520,Michael
"I have now memorized all of your names. Shirty, Mole, Lazy Eye, Mexico, Baldy.",521,Michael
And I turn it on and I say ‘Prepare yourself for the Utica Chainsaw Massacre.’,522,Michael
...,523,Michael
"Oh, wow look at those. How nice for you. Up there, front and center, beautiful. I think they would look better right here. They’re very pretty and I wouldn’t want them to fall.",524,Michael
"Just about everyone in this office is single right now. Including me. And everyone is experiencing an incredible amount of emotional pain. Especially me, because of my great capacity for emotion, and it is my first Valentine’s Day since Holly, so I think that I am well qualified to understand that these people need to be protected from having love shoved into their faces.",525,Michael
"These people need love and I am going to get it for them Who cares if we sell a little bit less paper today? A great boss cares more about the happiness of his employees then anything else. I am going to be cupid, and I am going to shoot my sparrow at unsuspecting victims, and they are going to get hit and say “I’m in love I was hit by cupid’s sparrow.” Funny little bird, but he gets the job done.",526,Michael
"It’s going very well. People are mixing, a lot of hope. Cause that’s what you hate to see, when hope gets crushed. Sorry, thought I heard somebody coming in. Um, so it’s not too late.",527,Michael
"Four months ago, I dated a woman named Holly and, um, this is actually the first time that I’ve even considered getting back into that arena again. You know what, sometimes it’s not about whether Cinderella gets her slipper back, but it’s about the fact that the prince even picked up the slipper at all. There’s a lot of princesses out there. You know, they have all different sizes and shapes of feet and hands so I think, I think my odds are pretty good.",528,Michael
"The Willy Wonka Golden Ticket promotional idea is probably the best idea I have ever had. It’s probably the best idea anybody has ever had. Three days ago, I slipped five pieces of gold paper into random paper shipments. This entitles the customer to ten percent off of their total order. It will be a day for them that is full of whimsy, and full of excitement and full of fantasy.",529,Michael
My golden ticket idea? OK. Why would anyone think that this is my golden ticket idea? There is a one in 13 chance that this could be anybody’s golden ticket idea. That…,530,Michael
"I have an idea for a fancy men’s shoe store called Shoe La La. And it’s just men’s shoes for the special occasions in a man’s life, like the day that you get married or the day your wife has a baby, or for just lounging around the house.",531,Michael
"What am I gonna do? I’ll tell ya what I’m gonna do. I gonna do a little bit of this, a little bit of that. I gonna stay up all day. Gonna sleep it up all night. I’m gonna give it a OHH! HEY! HO! And I’m going to stop worrying about calories.",532,Michael
You know what. I had a great time at prom. And no one said ‘Yes’ to that either.,533,Michael
"People turn to their families all the time when they need help starting out and if my Nana’s investment club can help the Michael Scott Paper Company become a reality, then I’m sure that’s what she would have wanted. Does want.",534,Michael
"You gotta have some extra space. Philly, work with me here. There’s gotta be some sort of secret office that you have… lurkin’ around… some awesome, free, keep it off the books… Oh, no. Not there. That would be humiliating.",535,Michael
"I did what I had to do. I stepped in. I took charge. That’s what being a man is. And earlier today, I was freaking out. Pam stepped up. She was the man. Don’t think a woman can be a man? Well, then that’s your stereotype, not mine.",536,Michael
"I would like to invite you all to come away with me, on a journey. Welcome! To the Michael Scott Paper Company!",537,Michael
"I don’t know I think we’ve done absolutely everything you can do to prepare for the day. I’ve updated our contacts, I have gotten quotes from suppliers. I have sent out an E-vite for our big grand opening pancake luncheon. Six yeses, one maybe, only eleven noes. Um, and 788 not yet replieds. But of that group, 782 have viewed it.",538,Michael
"I am going to need 800 of these, on nice bright paper. It is a coupon for unparalleled customer service.",539,Michael
"They always say that it is a mistake to hire your friends and they are right! So, I hired my best friends. And this is what I get?",540,Michael
"Maybe the Michael Scott Paper Company was a huge mistake. I should leave. I should go, and start my own paper company. That’ll show ’em.",541,Michael
"Who would have thought, that the thing that would save this company would be work? And pancakes? In the end, this day definitely had its ups and downs. I realize that we don’t have the biggest office. Which is a surprise, because 165 square feet sounds like a lot. But, we have people with the biggest hearts. And I think for a small company that is really Someone went to the bathroom. That is really what’s important.",542,Michael
"I color code all my info. I wrote “gay son” in green. Green means go, so I know to go ahead and shut up about it. Orange means “Orange you glad you didn’t bring it up?” Most colors mean “Don’t say it.”",543,Michael
"I wanted to start a company, not a war. Because in a war, you always fight those you are closest to. And the great tragedy of the civil war is that brother fought against brother. For what? What purpose did that serve? Apart from abolishing slavery? In that case, war was the right choice. This doesn’t feel as important though. That’s just how the world works, I guess.",544,Michael
"He gives me leads and I take the leads from him and in exchange it makes him feel good. And if a friend can’t make you feel good, then I don’t want any friends. Except Dwight, because he is our only source of fertile leads.",545,Michael
Betrayal ain’t just a river in Egypt.,546,Michael
"Time to make the donuts. Come on. Whoa! No, I promise I won’t do it again. Come on. De-nied!",547,Michael
"Hello! Time to make the donuts! Oh, Halpert! Whoa! Boner patrol. Arrest that man! Your donuts make me go nuts! Hey Pam.",548,Michael
"Hi, Jerry. Michael Scott. Well, this is slightly embarrassing. Um, I’m going to have to… ask you to pay me a little bit more money for that delivery we dropped off yesterday. Yeah. We did. We got the check, but we’re just going to need a much, much bigger check.",549,Michael
There are certain defining moments in a person’s life. The day he is born. The day he grows hair. The day he starts a business. And the day he sells that business back to Dunder Mifflin. What have I learned from all of this? It is far too early to tell. I just know that I am flying high and I don’t even want to think about it. I just want to enjoy it.,550,Michael
"When I needed salespeople for my new paper company, everyone here turned their back on me. Am I going to ask them to beg for forgiveness? No. Am I going to ask for big, crying apology? No. Am I going to ask them to slit their wrists for me? No. I just want a tiny, microscopic version of that.",551,Michael
"The old Michael Scott might have taken this, but not the new Michael Scott. They are in for a bitter surprise. I am not to be truffled with.",552,Michael
"No matter how I look at this, I am in the wrong. And I have looked at this thing, like a hundred different ways. From my point of view, from their point of view…98 others. And the bottom line, I am in the wrong. I’m the bad guy.",553,Michael
I have a very difficult decision to make. It’s like last week I was at the video store. Do I rent Devil Wears Prada again? Or do I finally get around to seeing Sophie’s Choice? It is what you would call a classic difficult decision.,554,Michael
"Oh, no. I still have the lease on the Michael Scott Paper Company, so occasionally I will sneak down here for a little coffee and dancing. I actually dance all the time. Tip-toeing around corporate – it is a ballet. When I am breaking all the rules, I am break dancing. And expresso.",555,Michael
"At Dunder-Mifflin there is a very strict no lunch with the boss policy and I don’t know who instituted it. I think it started right after my predecessor stepped down, but at the Michael Scott Paper Company I really enjoyed having lunch with Pam and Ryan everyday. So, rules be damned, I wanna have lunch with these people.",556,Michael
"Guys, I believe that I have figured out what is up your butts. There’s no reason to be scared. The bad man is gone.Charles is gone.",557,Michael
"Charles really did a number on these guys. They are way too focused on work. When I was in charge, this place was like Dave and Buster’s People just hanging out, having, fun, eating apps. I don’t know. It’s like Dave died or something.",558,Michael
"Now I know what the founders of Phillip-Morris felt like. you just want to give people a smooth, fun way to relax and suddenly you’re just some terrible monster.",559,Michael
I guess they got what they want. I am eating alone. Might as well be dinner.,560,Michael
It’s better than I imagined it!,561,Michael
My grandpa was the funnest guy I ever knew. He would sing. He would dance. He would….fall down. But then…he started going to these meetings and everything changed. He…stopped going out at night. He got a job. The fun just dried up. It was really sad. I don’t want that to happen to you guys. I’m not gonna let it happen.,562,Michael
...,563,Michael
"I lied to Kevin. Holly and I can never be just friends. I wrote down a list of bullet points why Holly and I should be together, and I’m going to find the perfect moment today and I am going to tell her. Number one: “Holly, you and I are soup snakes.” The-and the reason is… because… in terms of the soup, we like to- that doesn’t make any sense. We’re soul mates. Holly and I are soul mates.",564,Michael
"I didn’t find a perfect moment, because I think that today was just about just having today. And I think that we are one of those couples with a long story, when people ask how they found each other. I will see her every now and then, and… Maybe one year she’ll be with somebody, and the next year, I’ll be with somebody, and it’s gonna take a long time… And then it’s perfect. I’m in no rush.",565,Michael
"I hate, hate, hate being left out. Whether it’s not being picked for a team, or being picked for a team and showing up and realizing the team doesn’t exist. Or that the sport doesn’t exist? I should’ve known. Poopball?",566,Michael
"I am very happy right now. Thrilled perhaps, to be part of the office, to be part of the conversation. When you have somebody’s attenton, and their eyes are lighting up because they are very interested in what you have to say, that is a great feeling, and I experienced that firsthand today. It is wonderful to be the center of attention.",567,Michael
"How do you un-tell something? You can’t. You can’t put words back in your mouth. What you can do is spread false gossip so that people think that everything that’s been said is untrue, including “Stanley is having an affair.” It’s like the end of Spartacus. I’ve seen that movie half a dozen times, and I still don’t know who the real Spartacus is, and that is what makes that movie a classic whodunit.",568,Michael
"Well, it turns out that Teri was already suspicious, because she had caught Stanley and Cynthia a few months ago. So Stanley promised that he would stop, and he did, end of story. Well, not exactly. Uhh, Cynthia kept calling him, she would not stop calling him, and she was in love with him. Oh, and get this. Cynthia, also married. So… you can’t stop love, I guess and quite frankly, I don’t think you should ever try.",569,Michael
"Am I worried that Jim and David are having a meeting without me? No, because we are the Three Amigos. And once in awhile one of the Amigos will go off… to the bathroom… while the other two have a secret meeting.",570,Michael
"What is Jim telling him? That I can’t handle this job? That ‘s bull crap. That is bull crap. Although, it has been chaotic lately. Corporate shut down the Buffalo branch which left us to absorb all of their clients. I will tell you there has been work everyday. Had to come in on a Saturday. To retrieve… I left my cell phone here.",571,Michael
Wallace had to show up on the one four month period that I’m completely overwhelmed.,572,Michael
"You know when they say it’s so crazy it just might work? Well, I don’t believe that. I say go for the air-tight plan and that is why I am having Andy wheel me into the conference room inside a makeshift cheese cart. It is just elegant.",573,Michael
I can’t help but feel partially responsible.,574,Michael
Pam and Jim’s wedding will be the single best pick up destination in the history of the universe.,575,Michael
"When Mary was denied a room at the inn… Jesus was born. When Michael was denied a room at the inn, we don’t know what happens because that story hasn’t been told yet.",576,Michael
"They have hilarious material and they are going to totally deliver it wrong. I would kill with the brother stuff. It should be me… up there. It should be me and Pete, not Pete and Tom.",577,Michael
"I am actually great with old women. In fact, for the longest time, my best friend was my grandma… and then she met Harriet and now she thinks she’s better than everybody.",578,Michael
Why don’t you take a picture. It’ll last longer. God. Can’t I get a little privacy?,579,Michael
"The fundamentals of business by Michael Scott. Over one billion sold. More than the Bible, I’m not surprised. Chapter one. The businessman…",580,Michael
"There is nothing more insulting to a great salesman, than having to listen to a bad salesman. It’s like a great basketball player having to listen to a bad basketball player.",581,Michael
"If there is one thing I hate more than the mafia it is a liar. I wish the mafia would go out and kill all the liars. Bury them in my yard. And I wouldn’t tell the cops a thing. Not that I would be lying per se. But I would just get really quiet, all of a sudden.",582,Michael
Blind-guy McSqueezy. How do I describe it? It is a character I’ve been workshopping whose lack of vision gets him into all sorts of trouble. The women in my improve class absolutely hate him.,583,Michael
"That could have gone one of two ways, but I never expected her to get upset.",584,Michael
"I don’t need to be friends with Pam. I have plenty of female friends. My mom, Pam’s mom, my aunt… although she just blocked me on IM, what’s her face from Quiznos, I see her four times a week.",585,Michael
I am going to scare these kids so bad.,586,Michael
Why is Christmas the only holiday that can have a message?,587,Michael
"Jim’s a good kid. He can handle a lot but sometimes you have to call in a master. I, uh… why would you date an amateur when you could date a professional?",588,Michael
I’m not usually the butt of the joke. I’m usually the face of the joke. I wish Jim had fallen into that pond and he’d have to put on my suit and it’d be too short and he’d look… Damn it! He’d still look good.,589,Michael
Ok.,590,Michael
Jim is jealous of me? Jim is jealous of me.,591,Michael
"Birthday lunch. Birthday lunch– there is no better medicine than birthday lunch. It’ll cure all of your “Gee I don’t know if Michael should be dating my mother” and fixes all occurrences of “I don’t really see them together”. So, open wide Pam and take a big old spoonful of birthday lunch medicine. Take with food.",592,Michael
The only time you should care about a woman’s age is if she is too young for you and I am not robbing the cradle. If anything I am robbing the grave.,593,Michael
Do I really want to go snowboarding? No. But I would like to if I wanted to.,594,Michael
"Honestly, for a long time I thought I was going to grow old with Holly. And then I met Helene. And she is great and she already knows and has done everything that I have ever wanted to do and can tell me about it. But, I think I want to do those things myself.",595,Michael
Am I scared of getting hit in the face? No. Everyday weirdo’s pay dominatrix’s hundreds of dollars for that very privilege. I’m scared I’m gonna love it. Let’s do this.,596,Michael
"As I watched Pam’s big, strong hand coming towards my face I saw my entire life flash before my eyes. And guess what? I have four kids. And I have a hover-car and a hover-house. And my wife is a runner and it shows. And Pam and Jim are my best friends and our kids play together. And I am happy and I am rich and I never die. It doesn’t sound like much, but its enough for me.",597,Michael
"Games have the power to distract people from stressful situations. Battleship got me through my parents’ divorce. Operation got me through my vasectomy, i.e., my operation. I don’t think I would have been able to endure my breakup with Holly had it not been for Toss Across.",598,Michael
I do believe that the game is a big hit. People are really diving into their characters.,599,Michael
"There has been a lot of murder and a lot of intrigue. My little heart can barely take it no more. Today is the hardest I have worked in a long, long time.",600,Michael
"Alan Brand is the CEO of the company, if title’s important to you, has personally invited moi to go to New York to the shareholder’s meeting and sit up on the stage with the board of directors. And at some point they are going to introduce me as the most successful branch manager that they have. And then Michael Scott turns and waves to the crowd… and the crowd goes wild.",601,Michael
"I am not going to do the twirl. Alright? It’s not even a twirl, it’s a spin. I might do the spin.",602,Michael
Town cars suck. Town car is something that a company sends when they’re in trouble. A limousine is something that a company sends when they have cause for celebration. And in this case I think we are celebrating me.,603,Michael
"Oh. There he is. Come on in. Come on in. Gentleman, I would like you to meet Oscar. Come on in. Don’t be shy. This is Oscar Martinez. Oscar, why don’t you come over here. Let me present you. Step up. Step up there. Oscar is an accountant extraordinaire at the Scranton branch and he has a wonderful idea as to how to get us out of this murky, murky situation. Take it away.",604,Michael
...,605,Michael
"Yes it is a thrill to be honored by one’s company. To have the people that you work for stop for a minute and say, ‘Wow. Great job.’ That is what it is all about. Not the perks. Perks? The perks. I could take or leave the perks. Limos are for people who make the company money not lose millions and have no plan. So we’re leaving early. After all, we are the only ones with anything to celebrate.",606,Michael
Oscar! Oscar! Come on! There he is! There he is! Go! Go! Go! Go! Go! Go! Go! Scranton! Scranton! Scranton! Dunder Mifflin!,607,Michael
"I just, I fell in love with those kids. and I didn’t want to see them fall victim to the system, so I made them a promise. I told them that if they graduated from high school, I would pay for their college education. I’ve made some empty promises in my life, but hands down, that was the most generous.",608,Michael
"If this were Russia, yeah sure. Everyone would go to one Santa, and there would be a line around the block and once you sat on her lap and she’d ask you what you wanted, you would say probably “freedom.” At which point the KGB would arrest you and send you to Siberia. It’s a good thing Russia doesn’t exist anymore.",609,Michael
"I don’t ask for much for Christmas, I really don’t. It’s not like I’m begging people to buy me diamonds and …broach pendants. “Oh buy me something expensive or I’m gonna kill myself.” That’s not – I don’t care about that. All I want to be is Santa. And, you want to take that away from me? Fine. Go ahead. But when you need my help because I am ruining everything, don’t look at me.",610,Michael
"Earlier today this office needed a Santa. And then it needed a second Santa. And then it needed a Jesus. And now, it needs a Michael. And that’s one suit Phyllis cannot fit into.",611,Michael
"He told me where his kids go to school. I call the school, I tell them I’m a pediatrician. They patch me through to his secretary. I use my little girl voice. Badda bing, badda boom.",612,Michael
"I left a copy of Best American Mystery Stories 1999 in Toby’s favorite stall. So, yes, I think I bought us some time.",613,Michael
I feel very sorry for that banker because he has to evaluate what we are worth. He has to decide what we are capable of and how do you do that? What is Jim capable of… or Pam… or Kevin?,614,Michael
"Dunder Mifflin was recently bought by an electronics company named Sabre. They stepped in at the 11th hour, and they saved our asses. Although David Wallace said that we were the one branch that was actually working right, so we probably could have saved our own asses. We didn’t need them touching our asses.",615,Michael
"Oh! Wow. Awesome. For accounting, a brand new printer. And for the sales staff, a new fax machine. This cord has Creed written all over it. And whoever would like a brand new scanner can come visit it in my office. Thank you.",616,Michael
Gabe seems tall. Hope we get along. Had a very good thing going with David Wallace. He was a good guy. He was somebody I could trust. Here he is. You can really see that he is ok taking a picture with me. Even though I was there for disciplinary reasons.,617,Michael
No. Don’t like that.,618,Michael
"Mm, nope. Don’t like that.",619,Michael
"There is a small part of me that is actually very excited about this new company. But 70 percent of me is water, and the other part, the real part, the part that has feelings and emotions and thoughts and makes decisions and, if I can be crass, makes babies, that part thinks that all of these changes suck ba –",620,Michael
I miss the old Dunder Mifflin. Too much change is not a good thing. Ask the climate.,621,Michael
There are very few things that would make me not want to team up with David Wallace. And Suck It is one of ’em.,622,Michael
"Well, that’s not the David Wallace that I remember. That is some sort of weird creature that lives in David Wallace’s house. Oh, my god. Alright. Just get me out of here.",623,Michael
"Hello. Is anybody home? Oh, thank you, Erin. Now if everyone would please ready their canteens, so I can fill them with the sweet, sweet nectar of Gabe’s homeland, and then propose a toast. Here we go.",624,Michael
You know when people say getting fired was the best thing that ever happened to them? I feel sorry for those people. That’s the best thing? Really? Ugh.,625,Michael
"Today, Jo Bennett, the CEO from Sabre, is coming to see us here for the first time. She bought us sight unseen, like a mail-order bride, so she’s gotta be kinda nervous. I mean, are we ugly? Are we smart? Are we cool? Are we too cool? Do we speak English?",626,Michael
"I have been saying the word “manager” a lot, so whenever Jo thinks “manager” she thinks of me. Camel cigarettes did the same thing with Joe Camel by making him look like a penis. I can’t even go near a cigarette now without thinking of a penis. And vise-versa.",627,Michael
"Well, according to the manual, there is no cap on commissions. I have been hustled.",628,Michael
"Um, I am sort of a master of distraction. When I was a kid, my mom received compliments left and right from my teachers on how I was always able to distract others in class. Try to think, what were the first thirteen colonies? Mm-hmm, mm-hmm.",629,Michael
That kid’s going to have a lot of hair.,630,Michael
"Well, when you least expect it, expect it. I am going to fill the empty voids in your life with love. I am going to fill that empty hole in your body with another person. And, like Cupid, I am going to shoot you with love.",631,Michael
"No, Kevin doesn’t have an elephant heart. But he is very sensitive. And it won’t kill Erin just to go and have lunch with him in the break room like I promised him… I bet his heart is enlarged, though.",632,Michael
"There is no greater feeling than when two people who are perfect for each other overcome all obstacles, and find true love. And that is what I thought that Erin and Kevin were going to find today… I think I’m going to be sick…",633,Michael
"It is St. Patrick’s Day, and here in Scranton that is a huge deal. It is the closest that the Irish will ever get to Christmas.",634,Michael
"When you work for Sabre, only one thing matters. And I don’t care if you’re a loser, or you practice bestiality, if Jo likes you, you are in. And I am in!",635,Michael
Let’s follow the chain of events. Jo likes Michael. Jo invites Michael to house. Jo doesn’t like Michael anymore. Hmmm.,636,Michael
"Do I really want to turn out like Gabe? Twenty-six. Single. Tied to my desk. No life, no family. I want to have been married by the time I would’ve turned thirty. That’s just – that’s just depressing.",637,Michael
"Over the last few weeks, things have been changing here. Sabre says it is our duty to support the sales team and the salesmen are letting it go to their heads. I think it’s kind of screwed up, because the way this place used to work was: make friends first, make sales second, make love third, in no particular order.",638,Michael
"Today I turned an office crisis into a teachable moment. A lesser manager would have screwed this day up royally Some yokel sitting behind his desk saying take a lead, learn nothing Some people shouldn’t be in this business.",639,Michael
"Well, it’s not exactly fair. He’s got all of his weight that’s helping him go down.",640,Michael
"Well, apparently, Michael Scott is on a date. And that, that my friend, changes everything.",641,Michael
"Hi, I’m date Mike. Nice to meet me. How do you like your eggs in the morning?",642,Michael
"I would say I kind of have an unfair advantage because I watch reality dating shows like a hawk, and I learn. I absorb information from the strategies of the winners and the losers. Actually, I probably learn more from the losers.",643,Michael
I’ve been trying. I’ve been trying to keep it going. Erin is just weird.,644,Michael
Did you have a… did you like your lunch? Did you have a good lunch? Did you like that? Did you enjoy your food? It was good. I liked my lunch.,645,Michael
"I believe that every man, woman, and child in this country should learn how to speak Spanish. They are our neighbors to the South, and this would be a healing thing for… for all of North America. And… I am going on vacation next week to Cancun.",646,Michael
"There’s this woman I met a few weeks ago. Her name is Donna, the manager of Sid & Dexter’s and, right now, we’re in the midst of a passionate love affair. Um, no. But she is coming by today. Maybe to buy some printers, so…",647,Michael
"It’s subtle. That’s how it works. I show her an image that turns her on. 	And then she looks at me, then back at me, then back at the image. Soon, she doesn’t know what is me, what is the image. She just knows that she’s turned on.",648,Michael
"What sort of movie would Rudy have been if he had just stopped, given up, after two rejections? Would have been a lot shorter. Probably been a lot funnier. But it would have ultimately been a disappointment. I still would have seen it, but that’s not… the point.",649,Michael
You know what? It doesn’t matter. Because I know it happened. And that is all that counts. I did do it!,650,Michael
"Ooh! Things with Donna are so… oh-ho-ho! They’re going great. I, uh… we’re just clicking on every level. Emotionally and sexually and… orally and I am not used to relationships going this well. I’m actually having trouble focusing on my job. And I like it!",651,Michael
"Ever since I found out that Donna might be cheating on me, I have not eaten or slept. This not knowing, that’s what’s killing me.",652,Michael
"Toby has been leaving radon kits everywhere, like he owns the place. The first time I threw mine away, I thought it was an ant trap. But I figured I’d rather live with ants than with his creepy little disc. The second time… I thought it was one of those, you know, those things you turn over and it moos. Like a cow thing. But upon closer examination, it was another ant trap, so I threw it away. And the third time… I did it out of spite.",653,Michael
"I like Donna. Is it wrong to keep seeing her? Depends on who you ask. I mean, if you ask her husband… or you took a random poll, yeah, it’s wrong.",654,Michael
I have got big balls.,655,Michael
"How do I feel about breaking up with Donna? Good. Moral. I feel proud. Like a grownup. That was not easy because I really liked her a lot. And I’m a little bit emotional right now because I know that I absolutely made the right decision. At the end of the day, we have to do what’s right. And it was either living with myself or… being happy. And I picked… the… former.",656,Michael
"Apparently, there are allegations that Sabre printers can cause a fire. So they asked me to give a statement to the press. I’m like, what? All right. So I do it. It’s on TV last night. And it’s in the paper today. And it’s online. And then I call Froggy 98.7, the request line. I talk to the host about it on the air. It’s like, come on, people, enough.",657,Michael
"Really? A baby otter? Okay, um, count me in as who cares. It’s not even that interesting a baby otter, it can’t even stand up. It’s trying to stand up… there it goes.",658,Michael
"I basically swore up and down that none of my employees did it, and then I find out that one of my best ones did. And now he’s probably going to get fired for it. And if that is not poetic justice, I don’t know what is.",659,Michael
Two whistleblowers… two! I always thought Darryl and Pam might get me fired for something I said.,660,Michael
"Are we going some place far away? I know you said no questions, but… I have an early dinner that I need to get to… with the Chief of Police.",661,Michael
"We at Sabre have betrayed the trust that we have built with our customers. We regret our slow response and our lapse in candor and judgment. At this time, we are issuing a full recall of all Sabre GH400 printers. We will not rest until this problem is solved. There will be no questions. Are there any questions?",662,Michael
"I suppose summer had to end sometime. It’s sad, though, because I had a great summer. I got West Nile virus, lost a ton of weight. Then I went back to the lake. I stepped on a piece of glass in the parking lot, which hurt. That got infected even though I peed on it. Saw ‘Inception.’ Or at least I dreamt I did.",663,Michael
"And another thing I did this summer, I hired my nephew.",664,Michael
"Having Luke here is a pretty big deal for me, because his mother, who also happens to be my half-sister, kind of cut me off from that side of the family 15 years a- 14. The last time I saw Luke was the opening day of ‘Ace Ventura II’ and that was ’95, so yes, 15 years on the dot. Anyway, I lost him in a forest.",665,Michael
"Luke and I have been working side-by-side as master and commander. Me as master, he as commander. Occasionally he will need a little push, and I will do that, and he’ll slow down, and I’ll push him again. That’s the thing with kids, you have to keep pushing. You have to push them until they push you back. And then you push some more. It’s all about give and take, but mostly it’s about pushing each other.",666,Michael
"Would have been nice to work with my family. It would have been nice if Luke had been able to stay here. But he couldn’t. These things seldom work out. I don’t know how Ringling Brothers do it. Night after night, town after town, all across America. You would think they’d be sick of each other by now. But, clearly, they make it work. And my hat’s off to them.",667,Michael
"Ok, you know what? I made a mistake. I committed corporate punishment. My bad. It’s over. It’s done. But my punishment is … um … worse than hell.",668,Michael
"Yes, I will. I will talk alright. Be careful what you wish for Toby.",669,Michael
"They say that no one can take your pride, but the people who cast Andy’s play, they took mine.",670,Michael
Boo! Boo!,671,Michael
I don’t like that at all.,672,Michael
There are many reasons a man would wear a fake mustache to work. He is a fan of the outrageous. He loves to surprise! He loves… other things as well.,673,Michael
I used to think that she was the one. Or at least A the one. And if I called that one so wrong…,674,Michael
"Yes, I can ride a bike. I take spinning classes three times a month. I think I know how to ride a bike.",675,Michael
"How do I feel about losing the sale? It’s like if Michael Phelps came out of retirement, jumped in the pool, belly-flopped, and drowned.",676,Michael
"This morning, Danny Cordray stole a sale from me. So what do I do? I go out and I steal Danny Cordray. The sale that mattered, I made. Boom. Funny thing about it, we don’t even need him. We already have Packer on the road. Chhguuh! Crap. I forgot about Packer.",677,Michael
"A lot of people are really getting into Halloween this year! Six seconds, MacGruber! Pam’s got a lot of fun stuff planned! Uh, two seconds MacGruber! Including a… costume contest, and bobbing for apples, and a Ouija board… OHHH! BOOM! OHH EXPLOSION! MACGRUBERRRR!",678,Michael
Darryl Philbin is the greatest guy in the world. And you know what I’d like? I would like to have all the racists brought together and take Darryl Philbin out to lunch. Just to see what they’re missing.,679,Michael
Friends fight. Friends fight.,680,Michael
"I invited everyone in the office because it’s not a day for just Jim or Pam or the baby or me. It is about us all. And I thought we should all celebrate… my joy. And our, all of ours joys.",681,Michael
"I don’t even know how to say this, but Cece is turning out to be a little b-i-t-c-h. And that’s not true, but her parents are kind of boxing me out.",682,Michael
"Jim and Pam and Cece really seem to be clicking. They are totally gelling. It’s as if they leave my office and they go to another office that sells happiness. And good for them. That’s great, because, you know, the paper industry’s not gonna last forever.",683,Michael
I am feeling this. Call it the Holy Spirit or the passion of the Christ. I am loving these people.,684,Michael
Bye. Good luck. Good luck to you. Bye. Do good. Do good. Bye. Have fun. We’re proud of you. Bye. Okay.,685,Michael
See you in a few months.,686,Michael
There it is! I saw it! I saw it! He went right by! You missed it!,687,Michael
"Grandpa, where were you the day the the Scranton Strangler was caught? Well kiddo, I was there. I was there… And I’ll tell you what. You go sell these and buy yourself a nice spaceship.",688,Michael
"Gabe likes to entertain a lot, ad he cooks in an oven, and all that jazz. I just have a different life style. They have these bags of vegetables that steam right inside their own bag. So I’ll get a few ingredients, sit down in front of the TV, a bag of vegetables, before you know it I’m ready for bed!",689,Michael
Okay… Alright.,690,Michael
"Gabe, just go and have fun with Erin. But not too much fun! That girl’s gonna turn my hair gray.",691,Michael
"My whole life I believed that America was number one, that was the saying. Not America is number two. England is number two. China should be like eight.",692,Michael
So I happen to know more than the smartest guy in the office. So what? I don’t care.,693,Michael
"Okay, now where were we before I bested Oscar?",694,Michael
"My kids are growin up. As a boss, I look at that and say great. It is exactly what a boss would hope would happen because that’s what I want. That’s what every boss wants is a, is a wonderful Christmas with no drama.",695,Michael
"Man, I worked hard. I worked so hard for this! I was after corporate constantly. I emailed Joe. I wrote letters. And, know who I end up owing this to is the Scranton strangler. Thank you. Thank you, Scranton strangler. I love you! You just took one more person’s breath away.",696,Michael
"There’s nothing classier than boring Jazz music. I am here to tell ya. And I made a bit of a judgment call. I hired one musician, because I thought, what’s better, to hire an entire quartet for half an hour, or one bassist for the entire day?",697,Michael
"I guess there are just some people who you stay together with when you transfer, and some people you don’t. And that’s just the way it is. And I can be mature about that.",698,Michael
Did you see her face? Well it seems to me that there is a person sitting out there in the annex that still has feelings for Michael G. Scott. And it ain’t Tara.,699,Michael
I am dead inside.,700,Michael
"January three, 2011. A day which will live in-famously. Holly Partridge Flax, otherwise known as Holly, otherwise otherwise known as a living, breathing angel, is engaged to another man. This is freaking me out. I- okay, let’s switch to the happy video, okay? No, no, no, no, let’s push through. We’ll do this.",701,Michael
"Today will either be the best or the worst day of my life. Holly gave AJ an ultimatum. He either proposes by New Year’s or they break up. Now, if she’s engaged, I’m gonna go crazy, and I’m gonna start attacking people. If she’s not engaged, in all honesty, I may just burn this whole place to the ground out of happiness. Either way, I am going to need some talking down. And nobody talks me down like myself in a video talking me down.",702,Michael
My resolution? I never want to make Holly cry again. Unless it’s from laughing too hard. Or making love too beautifully.,703,Michael
"I am the plant. Every great seminar has one. My job is to make the speaker look good, and I do this through the techniques of leading questions and laughing at all jokes. And the character “Mikanos”, is just a little added flava. “Mikanos” is loosely based on another character I do, “Spiros”, who is more about the ladies.",704,Michael
"Holly broke up with A.J last week, which is the greatest thing that has ever happened… to me. To Holly, it’s been the worst week of her life, and I know for a fact that there was a week for her in high school when she got mono and her first period ever. Too much information? That’s what I thought. But, you know what? Here I am using it.",705,Michael
"Actually this is good. I am going to take this opportunity to go walk-about. Good. Good. Nope, get away. No, that’s enough. Ok.",706,Michael
Hey you guys. Listen to me. Don’t get hung up on just one girl because there are a whole lot of other girls out there. Look over there. See? They look cute. Hello! You guys are so beautiful. You’re so colorful. I wish I could understand you. That’s a metaphor I guess. You are disgusting. You’ll never find love. Yekkk. Do you think she needs more time or is it never going to happen? I’m being serious. Seriously.,707,Michael
"Holly and I are dating. It’s been a week, and I still can’t believe it. It goes to show that everything you want in life, you get. And you can’t work for it. It just comes to you.",708,Michael
"No, no, it’s great. I love working at Dunder Mifflin, a division of Taliban enterprises.",709,Michael
Holly and I are like Romeo and Juliet. And this office is like the dragon that kept them apart.,710,Michael
"Yeah, whatever. No big deal. Just the hottest girl in the world loves me.",711,Michael
"After three years of writing, one year of shooting, four years of re-shooting and two years of editing, I have finally completed my movie, Threat Level: Midnight.",712,Michael
"Ladies and gentleman, Threat Level: Midnight.",713,Michael
Dwight does not play a robot.,714,Michael
Bingo.,715,Michael
"By far and away, the most expensive shot in the movie. But, it was integral to the story.",716,Michael
That was not scripted.,717,Michael
"Where had I gone wrong? All I wanted was to start a family with my beautiful wife. But somewhere along the way, things got messed up.",718,Michael
"I am a huge Woody Allen fan. Although I’ve only seen Antz, but I’ll tell you something. What I respect about that man, is that when he was going through all that stuff that came out in the press, about how Antz was just a rip-off of A Bug’s Life, he stayed true to his films. Or at least the film that I saw which again was Antz. The thing is… I thought Bug’s Life was better, much better. Than Ants. The point is, don’t listen to your critics, listen to your fans.",719,Michael
Who likes Threat Level: Midnight? Okay then who wants to watch the rest?!,720,Michael
"We filmed this during an actual Scranton High School Hockey Game, trying to qualify for states.",721,Michael
...,722,Michael
...,723,Michael
Some breakfast for me and some breakfast for you.,724,Michael
"Oh yeah, I guess I did let him be a robot.",725,Michael
"It was the best of times, it was the awesomest of times. And now Packer wants to come home. And ohh, look who’s here to sign off on it! My boo, Holly.",726,Michael
"Yes, hello Mr. Flax this is Michael Scott, your daughter’s boss. I am calling because I am going to have to fire your daughter Holly because she is such a terrible employee. I’m just kidding. I’m kidding. I’m actually calling because I’m in love with her. I love your daughter, and I have for some time. And I would like to discuss my intentions with you… which are to ask her to marry me. And I was just hoping you would give me your approval. And this isn’t a joke. So call me back, when you get this. And I look forward to speaking. Thank you.",727,Michael
No. I am not going to be proposed to in the break room. That is not going to be our story. Mhm hm. Should have burned this place down when I had the chance.,728,Michael
"Deangelo’s great. I love the guy. But I’m not sure he’s a great fit for the office. And also, I’m not sure if I love the guy.",729,Michael
"The Dundies are my baby, and they need to go on. When Larry King died they didn’t just cancel his show. They got Pierce Morgan to come in, and do his show, and, that way, Larry lives on.",730,Michael
"Stanley Hudson is a grump, everybody knows that. But did you know, that Stanley Hudson is also the face of a debilitating disease known as diabetes. The Diabetes Award goes to Stanley Hudson! Come on up here you sick bastard.",731,Michael
"Yeah, okay. Well this is gonna hurt like a mother.",732,Michael
"Sad? No, no, no. I don’t leave ’til tomorrow, so… Tomorrow I will be a wreck.",733,Michael
"I bought this for myself. And yesterday, they gave me this. I still need something to drink out of though.",734,Michael
"It looks like a It looks like it was made by a two year old monkey on a farm! He just accepted, accepted that I put all this work into it! He has the lowest opinion of me, of anybody!",735,Michael
"Catch you guys- Catch you guys on the filippity flip. Flippity flip! Flippity flip! Really? Okay, see ya guys!",736,Michael
...,737,Michael
"Whether you’re scared of dying, or dying Alone, or dying drunk in a ditch. Don’t be. It’s going to be okay.",738,Michael
Yeah I was tripling up. There’s not enough time in the day to have a special moment with everybody.,739,Michael
"Okay, everybody come on. Conference room five seconds! Let’s go! Hurry up, let’s do this!",740,Michael
"Got almost everybody. So… Holly’s my family now. She’s my family. The babies that I make with her, will be my children. The people that you work with, are just… when you get down to it… your very best friends. They say, on your deathbed, you never wish you spent more time at the office. But I will. Gotta be a lot better than a deathbed. I actually don’t understand deathbeds. I mean, who would buy that?",741,Michael
"Well, I guess this is it. Hey will you guys let me know if this ever airs? Thank you. Alright… Oh! This is gonna feel so good, getting this thing off my chest. That’s what she said!",742,Michael
Shall I play for you? Pa rum pump um pum I have no gifts for you. Pa rum pump um pum,743,Dwight
"Downsizing? I have no problem with that. I have been recommending downsizing since I first got here. I even brought it up in my interview. I say, bring it on.",744,Dwight
"It’s OK here, but people sometimes take advantage because it’s so relaxed. I’m a volunteer Sheriff’s Deputy on the weekends. And you cannot screw around there. That’s sort of one of the rules.",745,Dwight
I could be French.,746,Dwight
Yes. I can do it. I’m your man.,747,Dwight
"I tried being rational, OK? And what happened? The employees went crazy, I got no help from corporate. That leaves me with no options.",748,Dwight
"Oh, um… Jan wants you to call her.",749,Dwight
"It’s a real shame, ’cause studies have shown that more information gets passed through water-cooler gossip than through official memos. Which puts me at a disadvantage, because I bring my own water to work.",750,Dwight
There’s one other thing and this is important. Let’s keep this alliance totally a secret. Don’t tell anyone.,751,Dwight
"I’m a deer hunter. I go all the time with my dad. One thing about deer, they have very good vision. One thing about me, I am better at hiding than they are… at vision.",752,Dwight
"Can I trust Jim? I don’t know. Do I have a choice? No, frankly, I don’t. Will I trust Jim? Yes. Should I trust Jim? You tell me.",753,Dwight
"The purse girl hits everything on my checklist. Creamy skin. Straight teeth. Curly hair. Amazing breasts. Not for me, for my children. The Schrutes produce very thirsty babies.",754,Dwight
"Excuse me, everyone, could I have your attention please. I just wanted to say that the women in this office are terrible. Especially the ones who wrote that stuff about Michael on the bathroom wall. Having a bathroom is a privilege. It is called a ladies room for a reason. And if you cannot behave like ladies, well then you are not going to have a bathroom.",755,Dwight
"I have been Michael’s #2 guy for about 5 years. And we make a great team. We’re like one of those classic famous teams. He’s like Mozart, and I’m like Mozart’s friend. No. I’m like Butch Cassidy, and Michael is like Mozart. You try and hurt Mozart; you’re going to get a bullet in your head courtesy of Butch Cassidy.",756,Dwight
"Actually, I do own property. My grandfather left me a 60 acre working beet farm. I run it with my cousin, Mose. We sell beets to local stores and restaurants. It’s a nice little farm. Sometimes teenagers use it for sex.",757,Dwight
"A thirty year mortgage at Michael’s age essentially means that he’s buying a coffin. If I were buying my coffin, I would get one with thicker walls so you couldn’t hear the other dead people.",758,Dwight
"Thank god. It was nice of him to offer, but I live in a nine bedroom farm house. I have my own crossbow range. It’s a perfect situation for me. Although two bathrooms would have been nice, we just have the one. And it’s under the porch.",759,Dwight
Michael’s in there right now evaluating the temp. He hasn’t evaluated me in years.,760,Dwight
"Michael and I have a very special connection. He’s like Batman, I’m like Robin. He’s like the Lone Ranger, and I’m like Tonto. And it’s not like there was the Lone Ranger, and Tonto, and Bonto.",761,Dwight
"Okay, guys, listen up, we need a head count. We need to count off. Michael’s number one. Where is he? Where is he?",762,Dwight
"Hey guys, great response time. Listen up, I got some theories. Okay, there’s a…",763,Dwight
"Joe McCarthy, Richard Nixon, Studebaker, television, North Korea, South Korea, Marilyn Monroe, Ryan started the fire!",764,Dwight
"Wait, what are you again? Oh, right… Three-hole PUNCH!",765,Dwight
"Cumberland Mills?! And how did you get my resume? Oh no, no. I’m very flattered. Don’t get me wrong. I’m just not sure that it’s my official resume or if it’s something that maybe a satisfied customer posted online. What does it say under martial arts training? Oh. Okay, I’m gonna have to supplement that. Could I have your fax number?",766,Dwight
"Would I ever leave this company? Look, I’m all about loyalty. In fact, I feel like part of what I’m getting paid for here is my loyalty. But, if there were somewhere else that valued that loyalty more highly, I’m going wherever they value loyalty the most.",767,Dwight
"So you got the fax? So why didn’t you add it to the res… ? What do you mean? Of course martial arts training is relevant. Oh, excuse me! I know about a billion Asians that would beg to differ. Uh, yeah, I get a little frustrated when I’m dealing with incompetence. Well, you know what? You can go to hell, too. And I will see you there… burning. Fine! Okay… oh wait! So you’ll let me know when you’ve made a decis…",768,Dwight
"I am a practitioner of Goju Ru Karate, here in Scranton. My Sensei, Ira, recently promoted me to purple belt, and gave me the duties of a Sempai. Not that a lot of people here in America know what a Sempai is, but it is equally as respected as a Sensei.",769,Dwight
"Did I want to harm Michael? The one man I’ve been hired to protect? No, I did not.",770,Dwight
I come from a long line of fighters. My maternal grandfather was the toughest guy I ever knew. World War II veteran. Killed 20 men then spent the rest of the war in an Allied Prison Camp. My father battled blood pressure and obesity all his life. Different kind of fight.,771,Dwight
"Do I feel bad that I haven’t bonded with the other students? No, I’m not there to make friends. I’m there to attack people.",772,Dwight
Alyssa? I guess she’s technically the senpai. But nobody really respects her. The only reason she got into regionals was because her competition was a bunch of 13-year-old girls. Put me in that division. Let’s see how she does.,773,Dwight
"Yes, I have acted before. I was in a production of “Oklahoma” in the seventh grade. I played the part of Mutey the Mailman. They had too many kids, so they made up roles like that. I was good.",774,Dwight
D-W-I-G-H-T.,775,Dwight
Michael? Michael? Michael? His car’s not in the parking lot. I should check the accident reports. Who’s this? Jan?,776,Dwight
You are giving me this raise! I deserve this raise! Yes! Yes! Yes! Hiya! The least you can do is keep my salary consistent with inflation! Keeya eyah! Yes! Why are you gonna give me this raise? Why? Because… I’m awesome! I am awesome!,777,Dwight
I’m here! I’m here! I’m here! It’s ok!,778,Dwight
"I think one of the greatest things about modern America is the computerization of medical records. As a volunteer sheriff, I can look up anyone’s psychiatric records or surgical histories. Yeast infections. There are a huge number of yeast infections in this county. Probably because we are down river from that old bread factory.",779,Dwight
"Okay, everybody listen up! It is time to get your presents, wrap them, and place them under the tree like so. If you do not get your present wrapped and under the tree within the next five minutes you will be disqualified from Secret Santa. All right? No exceptions except Michael.",780,Dwight
"Michael keeps bragging about his iPod, but you know what? Two paintball lessons with someone as experienced as I am is worth easily, like, 2 grand.",781,Dwight
"Take that, Saddam!",782,Dwight
Yankee Swap is like Machiavelli meets … Christmas.,783,Dwight
"What separates humans from jungle beasts? The fact that we have rules. When humans give each other gifts, they do it properly and orderly. When bears give each other gifts they just rip open a fox carcass and present it to their mate. I prefer the human way.",784,Dwight
"I was the youngest pilot in Pan Am history. When I was four, the pilot let me ride in the cockpit and fly the plane with him. And I was four. And I was great. And I would have landed it, but my dad wanted us to go back to our seats.",785,Dwight
"Hey Oscar how ya doin’? Dwight Schrute calling. Listen a little question for you, buddy. I called six minutes ago and no one answered. So I was wondering if you could explain. Oh, I see, so. Sounds like you’re too sick to come into work but your well enough to go to the pharmacy.",786,Dwight
"There are several different ways to tell if a perp is lying. The liar will avoid direct eye contact. The liar will cover part of his or her face with his hands, especially the mouth. The liar will perspire. Unfortunately I spoke to Oscar on the phone so none of this is useful.",787,Dwight
"As a volunteer Sheriff’s Deputy I have been doing surveillance for years. One time I suspected an ex-girlfriend of mine of cheating on me. So I tailed her for six straight nights. Turns out she was, with a couple of guys actually so… mystery solved.",788,Dwight
"Guess what I found out about Oscar tonight? He was lying about being sick. Should I have reported Oscar’s malfeasance. Hmm, probably, but now I know something he doesn’t want me to know. So I can use his malfeasance to establish leverage. Otherwise, it’s just malfeasance for malfeasanceses-ses sake.",789,Dwight
Remember on Lost when they met the Others?,790,Dwight
Okay. Let’s go. Step up.,791,Dwight
"Women are like wolves. If you want a wolf, you have to trap it. You have to snare it. And then you have to tame it. Keep it happy. Care for it. Feed it. Lovingly, the way an animal deserves to be loved. And my animal deserves a lot of loving.",792,Dwight
"When I was in the sixth grade, I was a finalist in our school Spelling Bee. It was me against Raj Patel. And I misspelled, in front of the entire school, the word ‘failure’.",793,Dwight
"The Schrutes consider children very valuable. In the olden days, the women would bear many children, so we would have enough laborers to work the fields. And if it was an especially cold winter, and there weren’t enough grains or vegetables, they would eat the weakest of the brood. They didn’t eat the children.",794,Dwight
"Why tip someone for a job I’m capable of doing myself? I can deliver food. I can drive a taxi. I can, and do, cut my own hair. I did, however, tip my urologist, because… I am unable to pulverize my own kidney stones.",795,Dwight
"Michael’s birthday is hard for me because he gets very excited. But he’s also under a lot of pressure, which builds up until he’s ready to explode. As his right-hand man, it’s my job to release that pressure so that he can enjoy himself, if only for a moment.",796,Dwight
"To think that a man’s skin could turn on him. It’s brilliant, ’cause you’d never expect it. Most people think of their skin as an ally. Makes me rethink having skin at all.",797,Dwight
"I like the people I work with generally, with four exceptions. But someone committed a crime and I did not become a Lackawanna County Volunteer Sheriff’s deputy to make friends. And by the way, I haven’t.",798,Dwight
Oscar visited Mexico when he was five to attend his great-grandmother’s funeral. What does that mean to a United States law enforcement officer? He’s a potential drug mule.,799,Dwight
I don’t want to blow this. This is what all good law enforcement officers dream of. The chance to solve an actual crime.,800,Dwight
"My father’s name was Dwight Schrute. My grandfather’s name was Dwight Schrute. His father’s name Dwide Schrude. Amish. I loved my father very much. Every morning he’d wake up at dawn and make us biscuits with gravy. When I was little my dad and I played a lot of games together. My dad cheated a lot but I never busted him on it. I would have, except I didn’t know about it. He didn’t tell me till years later. I was shocked when I found out.",801,Dwight
"I.D. badges are long overdue. Security in this office park is a joke. Last year, I came to work with my spud gun in a duffel bag. I sat at my desk all day, with a rifle that shoots potatoes at 60 pounds per square inch. Can you imagine if I was deranged?",802,Dwight
"I never smile if I can help it. Showing one’s teeth is a submission signal in primates. When someone smiles at me, all I see is a chimpanzee begging for its life.",803,Dwight
"I’m Michael’s wingman. I’ve got his back. Two dates. He’s got two dates tonight. My job is to keep Jan away from Carol and vice versa. Michael said, “We must deceive them, so as not to hurt them, and in that way, we honor them.”",804,Dwight
"I expect to do very well tonight. I have an acute ability to read people. Jim, for instance, has a huge tell. When he gets a good hand, he coughs.",805,Dwight
"Jim is gone. He’s gone. I miss him so much. Ooooh I cry myself to sleep, Jim!",806,Dwight
Michael appears to be gay too. And yet he is my friend. I guess I do have a gay friend.,807,Dwight
“Hope this helps. -Jim” Nice!,808,Dwight
Can I have my neck pillow back? Michael! Can I have my neck pillow back?,809,Dwight
Not everyone approves of Movie Monday. I won’t say who.,810,Dwight
"Ever since Michael dumped Jan for Carol, Jan’s been bitching out on him. Reject a woman and she will never let it go. One of the many defects of their kind. Also weak arms.",811,Dwight
WAH! GAH!,812,Dwight
"The Schrutes are a very loyal breed. But I also have Mannheim blood from my German grandmother. And the Mannheims knew when to cut and run. No sense going down with a losing regime. But the Schrute blood… It’s amazing that when these two bloods mix, the whole thing didn’t explode.",813,Dwight
"When I die, I wanna be frozen. And if they have to freeze me in pieces, so be it. I will wake up stronger than ever because I will have used that time to figure out exactly why I died and what moves I could have used to defend myself better now that I know what hold he had me in.",814,Dwight
"I’m sorry, I grew up on a farm. We slaughtered a pig whenever we wanted bacon. My grandfather was reburied in an old oil drum. It would have fit if he had given me another minute.",815,Dwight
Let’s get back to work.,816,Dwight
"Attention, everyone. As you know, Ed Truck is dead. If you have any contact information on Rolodex files or in Microsoft Outlook, remove it now. Also, if you have any photographs, Pam will make her shredder available during lunch. That is all.",817,Dwight
"Remembering the dead doesn’t help anybody. The way to best honor them is to figure out what killed them and prevent that thing from killing anyone ever again. In this case, some sort of steel exoskeleton to protect the neck, or else a device that allows the head to live separately from the body. I’m working on both.",818,Dwight
"I am very excited. Ryan hasn’t made a sale yet, but more importantly, he hasn’t made an ally yet. Is he going to be a slacker-loser-wise-ass like Jim was? Or is he going to join the Dwight Army of Champions?",819,Dwight
"Mose is my cousin and he lives here. He will always be my best friend. Unless things go well with Ryan today in which case, I won’t hang out with Mose so much anymore.",820,Dwight
"Ryan, come on. I am sorry. I am sorry. Mose is sorry too. Look, he sent over a basket with eggs and some fat back bacon. And look, something he whittled.",821,Dwight
"I once saw a movie called “Training Day”. It starred an African-American and Ethan Hawke. In it, the African-American trains Ethan Hawke with various tests and trials. Today, Ryan is Ethan Hawke, and I am the African-American.",822,Dwight
"Sales is about people, Ryan. About understanding them and learning how to get along with them. Case study: me. To understand me, you have to know that I work in the city, but I live here on this small, beautiful farm. It’s a family farm. Many Schrutes were born here and many of us end up here. My grandfather was a good man who did some very bad things. What the… Damn it! Those kids! You! You, get out of here! This is not a cheap motel! This is a farm and cemetery! Freaks! You’re lucky I don’t have my crossbow! Let me show you the compost pile.",823,Dwight
Temp! Temp! Pflut! Pflut!,824,Dwight
No! You’ll thank me later.,825,Dwight
"When you become close with someone, you develop a kind of sixth sense. You can read their moods like a book. And right now, the title of Michael’s book is, “Something Weird is Going On.” Colon, “What Did Jan Say? The Michael Scott Story. By Michael Scott, with Dwight Schrute.”",826,Dwight
I am fast. To give you a reference point. I’m somewhere between a snake and a mongoose. And a panther.,827,Dwight
The Japanese camp guards of World War II always chose one man to kill whenever a batch of new prisoners arrived. I always wondered how they chose the man who was to die. I think I would have been good at choosing the person.,828,Dwight
"It just goes to show you, you play with fire and you are gonna singe your eyebrows. And they do not grow back the same way.",829,Dwight
"I am greatly concerned about having a convict in the office. And I do not care if that convict is white, black, Asian, German, or some kind of halfsy. I do not like criminals.",830,Dwight
"Once I brought in a duck. To prepare for lunch. And people got upset. Apparently, they got attached to the duck and didn’t want to see it killed.",831,Dwight
It is my job to be there for Michael. How can I be there for Michael if I’m here for Michael?,832,Dwight
"Lady, from the moment I saw you standing all alone. You gave all the love that I needed…",833,Dwight
What the? “You have been compromised. Abort mission. Destroy phone.” Destroy phone?,834,Dwight
"I took a vacation once. Never again. While I was away, Jim had my desk shipped to me in Roswell.",835,Dwight
"The worst part about the Internet, when a secret is out, everyone knows. The best part about the Internet, that video of the dancing Indian midget, crossbow.org, massively multiplayer online gaming, i.e. Everquest. I also enjoy online banking.",836,Dwight
"Spiderman, Peter Parker, would not reveal his love for Mary Jane for fear that she might be captured and harmed by the Green Goblin. Now, if Michael had studied the Spidey principles that I’d drawn up for him, Jan’s boobs might not be all over the Internet.",837,Dwight
"Attention everyone! May I have your attention, please? Listen up. If we all work really hard and focus, we should be out of here in seven hours. Now, somewhere in these stacks, I have hidden a deck of cards. That should motivate you to keep your eyes open. If you find the deck of cards, you can redeem it with me in exchange for a free soft drink. Get back… Back to work!",838,Dwight
"Ahem-hem-hem. May I have your attention please? This will only take a moment of your time. Although I love this company more than almost anything in the world, I have decided to step down from my post and spend more time with my family. I do not fear the unknown and I will meet my new challenges head-on and I will succeed. And I will laugh in the faces of those who doubt me. It has been a pleasure working with some of you and I will not forget those of you soon but remember, while today it is me, we all shall fall. In other words, I am quitting. So… .",839,Dwight
"One of my life goals was to die right here in my desk chair. And today, that dream was shattered.",840,Dwight
"For your convenience, I’ve broken it down into three parts: professional resume, athletic and special skills resume, and Dwight Schrute trivia.",841,Dwight
I am ready to face any challenges that might be foolish enough to face me.,842,Dwight
"How would I describe myself? Three words. Hard-working, Alpha male, Jackhammer, Merciless, Insatiable.",843,Dwight
There is nothing on my horizon except everything. Everything is on my horizon.,844,Dwight
"I got this job to make some money while I continue my employment search. And uh, it’s fine for the time being. Oops. Break’s over.",845,Dwight
"I don’t care what Jim says, that is not the real Ben Franklin. I am 99% sure.",846,Dwight
"The Shrutes have their own traditions. We usually marry standing in our own graves. Makes the funerals very romantic, but the weddings are a bleak affair.",847,Dwight
"I saw Wedding Crashers accidentally. I bought a ticket for Grizzly Man and went into the wrong theatre. After an hour, I figured I was in the wrong theatre, but I kept waiting. That’s the thing about bear attacks, they come when you least expect it.",848,Dwight
"Whenever I’m about to do something, I think, “Would an idiot do that?” And if they would, I do not do that thing.",849,Dwight
We have… a bat… in the office.,850,Dwight
"If a vampire bat was in the U.S., it would make sense for it to come to a “sylvania.” Like PENN-sylvania. Now that doesn’t mean that Jim is going to become a vampire. Only that he carries the vampiric germ.",851,Dwight
"I don’t have a lot of experience with vampires, but I have hunted werewolves. I shot one once. But by the time I got to it, it had turned back into my neighbor’s dog.",852,Dwight
"Jim is on a path now. An eternal journey, and I wish him well. But I have a destiny in this realm. Specifically, in the kitchen.",853,Dwight
"What is a leader? I asked Jim that, and he said he had never heard the word before. In America, in 2007. He said he knew the word ladder… What an ignoramous.",854,Dwight
"Oh, you know that line on the top of the shrimp? That’s feces.",855,Dwight
"The chimney is in decent shape. Not great. I found some termite damage in a crawl space and some structural flaws in the foundation so all in all, it was a pretty fun cocktail party.",856,Dwight
"Space shuttle. Which one? Oh, Atlantis. Good thing it’s not the Discovery. You play soccer?",857,Dwight
"Everyday, for eight years, I have brought pepper spray into this office to protect myself and my fellow employees. And everyday, for eight years, people have laughed at me. Well, who’s laughing now?",858,Dwight
"No, don’t call me a hero. Do you know who the real heroes are? The guys who wake up every morning, and go into their normal jobs, and get a distress call from the commissioner, and take off their glasses and change into capes and fly around fighting crime. Those are the real heroes.",859,Dwight
"I am not a hero. I am a mere defender of the office. You know who’s a real hero? Hiro, from",860,Dwight
"Yes, I have decided to shun Andy Bernard for the next three years. Which I’m looking forward to. It’s an Amish technique. It’s like slapping someone with silence. I was shunned from the age of four until my sixth birthday… for not saving the excess oil from a can of tuna.",861,Dwight
Attention blue collar workers!,862,Dwight
"First rule in road-side beet sales: Put the most attractive beets on top. The ones that make you pull the car over and go, “Wow, I need this beet right now.” Those are the money beets.",863,Dwight
"I grew up on a farm. I have seen animals having sex in every position imaginable. Goat on chicken. Chicken on goat. Couple of chickens doin’ a goat, couple of pigs watching. Whoever drew this got it exactly right.",864,Dwight
"Hello, CNN? I need to speak to your Scranton-area bureau chief? All right, then the bureau chief for the Greater Wilkes-Barre area? How about, ah, Lackawanna County. Okay, Northeastern Pennsylvania then. This is extremely urgent! No… you put",865,Dwight
"I don’t believe in apologies. When someone in the yakuza makes a mistake, they cut off a portion of their own pinky finger. And in that way, save face. And knowing the Japanese, they probably get an even better prosthetic finger. With a knife you can take out of it, or a screwdriver or a corkscrew.",866,Dwight
"Employees of this office are very small and delicate. Deserve protection from local pervs. Better 1,000 innocent men are locked up than one guilty man roam free.",867,Dwight
"If I could menstruate, I wouldn’t have to deal with idiotic calendars anymore. I’d just be able to count down from my previous cycle. Plus, I’d be more in tune with the moon and the tides.",868,Dwight
"I plan on plastering this pervert’s face everywhere. You can run, but you cannot hide.",869,Dwight
This is what we,870,Dwight
"Lets go, fall out, let’s go. Move, move, move, move, move.",871,Dwight
"Yeah! Yeah! Yeah! Eat sand, you fat, old man!",872,Dwight
Once I’m officially Regional Manager my first order of business will be to demote Jim Halpert. So I will need a new number two. My ideal choice? Jack Bauer. But he is unavailable. Fictional. And overqualified.,873,Dwight
Who’s ready to work?,874,Dwight
How is the new boss? Tough. Do people respect him? They have to. Do they like him? Irrelevant. They do not. And I hate them back.,875,Dwight
"As a farmer, I know that when an animal is sick, sometimes the right thing to do is to put it out of its misery. With the electricity we’re using to keep Meredith alive we could power a small fan for 2 days. You tell me what’s unethical.",876,Dwight
"My cousin Mose’s best friend was a dog. One day, he was foaming at the mouth, so I had to shoot him dead. Turns out, he had only eaten one of Mose’s cream pies. Did I feel bad for killing him? No. That’s how you deal with a thief.",877,Dwight
I don’t see it. I think they both could do better.,878,Dwight
"I’m gonna live for a very long time. My grandma Schrute lived to be 101. My grandpa Manheim is 103, and still puttering around in Argentina. I tried to go visit him once, but my travel visa was protested by the Shoah Foundation.",879,Dwight
It appears that the website has become alive. This happens to computers and robots sometimes. Am I scared of a stupid computer? Please. The computer should be scared of me! I have been salesman of the month for 13 out of the last 12 months. You heard me right. I did so well last February that Corporate gave me 2 plaques in lieu of a pay raise.,880,Dwight
"I am not a bad person. When I left Staples, I took some of their leads with me but I never intended to use them. What did I intend to do with them? Who knows? Maybe keep them as a souvenir. Maybe use them.",881,Dwight
"Yes, Mr. Galliado. How would you like to pay ten percent less for paper than you’re paying right now? It’s not important how I got your information. What is important is that you say yes. Good.",882,Dwight
I’ve seen this kid before. He’s one the kids who sneaks on my farm and steals my hemp.,883,Dwight
"I stopped shaving because my girlfriend broke up with me. Am I in pain? Hell, yeah. But I’ll tell you something, I thrive in pain. I love pain. To me, pain is not pain at all. No. It is pure pleasure. And I hate pleasure. Almost as much as I love pain. So, yeah, I’m in pain.",884,Dwight
"Agrotourism is a lot more than a bed and breakfest. It consists of tourists coming to a farm, showing them around, giving them a bed, giving them brekafest.",885,Dwight
"Trip Advisor is the life blood of the Agrotourism industry. A couple of bad reviews there, you might as well close up shop. That’s what took down the Stalk Inn. One of the cutest little asparagus farms you’ll ever see.",886,Dwight
"My girlfriend and I broke up recently. And I must say, I am relieved. Gives me a chance to sow my wild oats. In the Schrute family, we have a tradition, where when the male has sex with another woman, he is rewarded with a bag of wild oats left on his door step by his parents. You can use these oats to make oatmeal, bread, whatever you want. I don’t care, they’re your oats.",887,Dwight
"Here we are, the Irrigation Room! A very special room. So I’ll come get you before the table-making demonstration. And as of this morning, we are completely wireless here in Schrute Farms. But as soon as I find out where Mose hid all the wires, we’ll get that power back on. All righty.",888,Dwight
"And Harry saw the white hand raise its wand, and felt Voldemort’s surge of vicious anger. Saw the frail old man on the floor write in agony. “Harry?” It was over quickly as it had come. Harry stood shaking in the darkness, clutching the gate in the garden, his heart racing.",889,Dwight
"Hello, this is Dwight Schrute calling from Dunder-Mifflin, and according to our records you appear to be low on office supplies. Okay, sure, yeah I can take care of that right now.",890,Dwight
I signed up for Second Life about a year ago. Back then my life was so great that I literally wanted a second one. In my Second Life I was also a paper salesman and I was also named Dwight. Absolutely everything was the same. Except I could fly.,891,Dwight
The eyes are the groin of the head.,892,Dwight
"I keep various weaponries strategically placed around the office. I saved Jim’s life with a can of pepper spray I had velcroed under my desk. People say, “Oh, it’s dangerous to keep weapons in the home or the work place.” Well I say, “It’s better to be hurt by someone you know accidentally, than by a stranger on purpose.”",893,Dwight
"Do I believe that Michael possesses the skills to survive in a hostile environment? Let’s put it this way: no, I do not.",894,Dwight
"Here we go, into the wild. Mighty forest. Can you smell the trees and the nature?",895,Dwight
"Keep going, you’re fine. Just some bushes and some thickets Keep going. You wanted wilderness, you got it.",896,Dwight
"I lied to Michael. I said that I would leave him alone, but I will not. I will remain close by to provide unseen moral support, but I will never help him. I will let harm befall him. I will even let him die. But I will never let him lose his dignity.",897,Dwight
Michael is a man of great depth and passion. I don’t know what he’s searching for out here. I hope he finds it. Lunch.,898,Dwight
About two more minutes .,899,Dwight
Nothing to worry about. Just using the scope. Safety is… on.,900,Dwight
Does it bother me that I wasn’t invited to Michael’s dinner party?,901,Dwight
"I’ll tell you about my ideal dinner party. John Wilkes Booth. Lee Harvey Oswald. Osama Bin Laden. John Wayne Gacy. Jeffrey Lionel Dahmer. “Oh hey guys, welcome to my home. Oh, here comes the waiter with the soup, hope you guys are hungry.” Meanwhile, the waiter suddenly nods at me. But I don’t acknowledge him. But I know he’s an assassin because I trained him. Boom. Two minutes later, five dead psychopaths at my dining room table. All that’s left to do is dispose of the bodies and collect the reward. Ugh, it’s almost too easy.",902,Dwight
"Michael’s dinner party is for couples only, which is why I wasn’t initially invited. But that was then. I very recently entered into a serious, monogamous relationship. If that idiot ever gets here.",903,Dwight
"That is fantastic. Thank you, thank you very much. This is just what I needed.",904,Dwight
"The furniture company gave me the name of the advertising agency. They gave me the name of the photographer. The photographer, a Spaniard, used a Wilkes-Barre modeling agency. The agency gave me the following information. Deborah Shoshlefski. 142 South Windsor Lane. Dead. Car accident. Case closed.",905,Dwight
Andy and Angela seem very happy… I hope nothing horrible ever happens to them.,906,Dwight
Rocka doopa deepa do POW! Shacka do DO! Oh! What’s Dwight up to? Oh probably nothing. Racka do do dee do-do do-do! Sha-KA!,907,Dwight
"I’ve got a Madlib for you: a stupid, idiotic, numbskull named Andy Bernard sold his Xterra to a smart and capable man named Dwight. This is shaping up to be an awesome day for Dwight.",908,Dwight
...,909,Dwight
Hazing is a fun way to show a new employee that she is not welcome or liked.,910,Dwight
Well… it’s my own fault.,911,Dwight
...,912,Dwight
"Michael, we have a situation.",913,Dwight
...,914,Dwight
"My dream vacation? I sleep in, putter around the farm, go fishing for a few hours, take a long run in the forest, check the traps. Then the sun comes up and I head into work, which is empty, because everyone else is out of town on vacation.",915,Dwight
"Babies are one of my many areas of expertise. Growing up, I performed my own circumcision.",916,Dwight
Jan had the baby and Michael wasn’t there to mark it. So the baby could be anybody’s. Except Michael’s.,917,Dwight
"Twelve hundred dollars is what I spent on my whole bomb shelter. For that kind of money, this stroller should be indestructible.",918,Dwight
"Don’t hit the fence. Oh no, my child!",919,Dwight
Don’t get stuck on the barbed wire!,920,Dwight
Playtime is over!,921,Dwight
I like to call this… the bumper test.,922,Dwight
"Hello, spoiled little baby, in your fancy brand name stroller. Mmm, I wonder if it’s as safe as they say it is. Oh, look, a curb. Uh oh, let’s see what happens… Inconclusive. Spartans would leave a weak baby by the side of the road. My parents left me beside the road. I crawled home.",923,Dwight
"Not so weak, huh, Mom?",924,Dwight
"Gosh, Mommy feels like taking a jog. Oh, no! Mommy forgot to wear a bra, and her big fake boobs are really hurting her, and she needs to let go, she can’t control the stroller any longer",925,Dwight
Let’s see what this baby can do… Aaaah! Aa-aaah! It’s a hardy stroller. Maybe it’s safe!,926,Dwight
What did Phyllis do wrong? I’ll tell you what Phyllis did wrong. She stuck her nose into my business and tried to help me.,927,Dwight
Hm mm mm mm. Want to see a magic trick? Heh heh heh! I’m gonna make a pencil disapp– oh! Disappear.,928,Dwight
"Cornell is a good school, and I want to better myself through higher education. If it makes Andy angry, so be it.",929,Dwight
"I’ve caught Jim talking to himself several times today. What a loser. Get a friend, loser.",930,Dwight
"What do I do with my bonus check? Simple. Purchase paper from myself. Boosts my sales, which boosts my bonus. Last year I bought even more paper to make this year’s bonus even bigger. Eventually, I’ll get a bonus so big I can retire on it. And I’ll use the paper to write my memoirs.",931,Dwight
"My job is to manipulate the customer into buying paper. In return, they give me money. I am the predator and they are the prey. Would a mouse give a positive review to a hawk? Should the hawk even care? Excuse me, I’ve got work to do.",932,Dwight
"It’s good to be paranoid. People need to be more paranoid. Case in point, JFK. If I had been JFK, I would have seen all three gunmen. I would have pulled out my concealed Luger and fired first. Man in book depository, BOOM! Grassy knoll, BOOM! Fake Jackie, BOOM! Then I shoot myself, so I don’t change history and create a paradox. BOOM! But right at the last minute, I twist out of the way of the bullet. Nice try, history. Better luck next year.",933,Dwight
"Yes, I repeat a drug dealer is on the premisis of Dunder Mifflin. His name is Toby Flenderson and he recently returned from a mysterious vacation in Central America. I have risked a great deal to tell you this information. My name is Andy Bernard. Andrew Bernard, that’s my name. See you soon.",934,Dwight
"What is my perfect crime? I break into Tiffany’s at midnight. Do I go for the vault? No, I go for the chandelier. It’s priceless. As I’m taking it down, a woman catches me. She tells me to stop. It’s her father’s business. She’s Tiffany. I say no. We make love all night. In the morning the cops come and I escape in one of their uniforms. I tell her to meet me in Mexico but I go to Canada. I don’t trust her. Besides, I like the cold. Thirty years later, I get a postcard. I have a son and he’s the chief of police. This is where the story gets interesting: I tell Tiffany to meet me in Paris, by the Trocadero. She’s been waiting for me all these years; she’s never taken another lover. I don’t care, I don’t show up. I go to Berlin. That’s where I stashed the chandelier.",935,Dwight
"Every year I do research to determine which toy will be the most popular of the Christmas season. This year it’s a doll. Half girl, half unicorn. Catchphrase: “My horn can pierce the sky”. Pathetic. I bought out every store in the area over the last couple of weeks. And as lazy parents become desperate I will sell them for an enormous profit. Isn’t that right princess?",936,Dwight
Fa-la-la-la-la-la-la-ka-ching.,937,Dwight
"Actually, I don’t care for Meredith, but I don’t believe in this kind of thing. In the Schrute family we believe in a five fingered intervention. Awareness, education, control, acceptance and punching.",938,Dwight
"There are several ways to kill a zombie, but the most satisfying one is to stab it in the brain with a wooden stick.",939,Dwight
"Rule 17: don’t turn your back on bears, men you have wronged, or the dominant turkey during mating season. There are forty rules all Schrute boys must learn before the age of five. Learn your rules. You better learn your rules. If you don’t, you’ll be eaten in your sleep.",940,Dwight
...,941,Dwight
...,942,Dwight
...,943,Dwight
"It’s very unusual for Michael not to show up to work. My guess? He’s either deeply depressed, or an icicle has snapped off his roof and impaled his brain. He has this terrible habit of standing directly underneath them and staring up at them. And I always say Michael, take two steps back, and stare at the icicle from the side. And he’s like no, I like the way they look from standing directly underneath them.",944,Dwight
"I have here Kelly Kapoor’s personal and confidental file. Allow me to share. “Kelly Kapoor spent April 1995 to December 1996 at Berks County Youth Center.” Juvie. “According to past employers, it in no way affects her job perfor…” Blah, Blah, Blah.",945,Dwight
Birthday time is over! Now go make up for all the work you missed when you were taking your nap. Many happy returns.,946,Dwight
"I train my major blood vessels to retract into my body on command. Also, I can retract my penis up into itself.",947,Dwight
I did fall on my sword once. I was running with it in my belt. Won’t happen again.,948,Dwight
My German is pre-industrial and mostly religious.,949,Dwight
Oh no! The new boss does not find Jim adorable! Ohhhh!,950,Dwight
"Yes, I am taking Andy hunting after work. Not long ago we were sexual competitors. I used to hate him, hate him, hate him, hate him. I studied him, to figure out why I hated him so much. But that blossomed into a very real friendship, as these things often do.",951,Dwight
"When Michael was in charge, this place was like the Roman Empire. And the Wild West. And war-torn Poland. And Poland. There was just a lot going on, so what you wore to work was the least of anybody’s worries. And in that chaos, I soared.",952,Dwight
"And no, I cannot lower my current prices. Hold on. Hello? Mr. Schofield, thank you so much for taking the time to talk. I wanted to discuss your contract with us- oh, you’re considering him. I thought Michael Scott left the paper business after his nervous breakdown.",953,Dwight
"Michael has been talking to my biggest client. Master and apprentice pitted against one another for the fate of the greater Scranton area paper market. So it’s not exactly like ‘Highlander,’ but still…",954,Dwight
"Hi there. Dwight Schrute here. I was just calling to see if Michael Scott Paper was meeting all of your paper needs, and how is Brenda, age four, ponytail, and Simon, age 7? Oh, you don’t say.",955,Dwight
"Schrute comma Dwight. And on the back he wrote, “great salesman, better friend.” “Tall” and “beets.”",956,Dwight
"How is Tom, the homosexual sophomore?",957,Dwight
When held over heat the invisible ink will reveal that everyone should meet at the warehouse immediately. Do not ask me where I got the invisible ink. Urine. It was urine.,958,Dwight
I got her!,959,Dwight
No kidding! She sits three feet from me. It’s the most annoying thing. It’s like children singing Christmas carols.,960,Dwight
I played high school softball. Notice I didn’t say “girls” high school softball. Not after the landmark case of Shrute vs. the Lackawanna County Board of Education.That was one case the Pennsylvania Supreme Court got right. I hit the ball right over the protest banners.,961,Dwight
"Oh, no. I love Ohio. Next time you’re there say “Hi” to my cousin Amel and then kick him in the groin area because he’s a cheat and a ball hog. And if he’s still married to Clarissa, kick her in the groin area, too. ‘Cause she’s a heart breaking tart…and a ball hog.",962,Dwight
"Normally I don’t condone leaving early, but I have an appointment with the horse doctor. How that horse became a doctor, I don’t know. No, I’m kidding. He’s just a regular doctor who shoots your horse in the head when its leg is broken.",963,Dwight
Like clockwork.,964,Dwight
Rolph is my best friend. We met in a shoe store. I heard him asking for a shoe that could increase his speed and not leave any tracks.,965,Dwight
AHHHHHHHHHHHH!,966,Dwight
"People are starting to notice how terrible Jim is. It’s great. Eventually, they’ll rise up and revolt. My only hope is that they do it sooner rather than later. If the people here were our founding fathers, the Revolutionary War would have been delayed ten years, because Stanley Washington was napping, and Phyllis Hancock was still signing the declaration, and Kevin Jefferson was distracted by a butterfly.",967,Dwight
Pam is constantly throwing up because of the pregnancy. If she eats something the fetus doesn’t like she is screwed. It’s amazing. A three ounce fetus is calling the shots. It’s so bad ass.,968,Dwight
"I invented a device called ‘Burger on the Go’. It allows you to obtain 6 regular size hamburgers, or 12 sliders, from a horse without killing the animal. George Foreman is still considering it. Sharper Image is still considering it. Sky Mall’s considering it. Hammacher Schlemer is still considering it. Sears said, ‘No’.",969,Dwight
"I got them a set of turtle boiling pots, a shell hammer and bibs.",970,Dwight
"I inserted a listening device into the belly of the mallard. Now I can observe Jim, trap Jim, and destroy Jim, just like in the Bavarian fairy tale. Only this time, the mallard skins the toad alive. And of course in this version you lose the whole veiled critique of the Kaiser thing.",971,Dwight
"“We have our high quality 28 pound bond, our heavier 38 pound bond, or our…” I’ve got eight hours of this. Of course I wanted Jim to find the mallard, make him feel safe. Did you really think I would put my primary listening device in a wooden mallard? I’m not insane. “…65 pound cover stock, which is the heaviest paper that will still feed smoothly through your desktop printer.”",972,Dwight
"Jim is my enemy. But it turns out that Jim is also his own worst enemy. And the enemy of my enemy is my friend. So, Jim is actually my friend. But… because he is his own worst enemy, the enemy of my friend is my enemy. So, actually Jim is my enemy. But-",973,Dwight
Can’t a guy just buy some bagels for his friends so they’ll owe him a favor which he can use to get someone fired who stole a co-manager position from him anymore? Geez. When did everyone get so cynical?,974,Dwight
Andy is complicating things. But I’m not worried. This will only up my game.,975,Dwight
Dammit. I am no closer to taking Jim down. What a waste of a day. I could of grown poisoned mushrooms that would have been this high by now. They’re mushrooms. They don’t get that high.,976,Dwight
"I know she didn’t do it. It’s never the person you most suspect. It’s also never the person you least suspect, since anyone with half a brain would suspect them the most. Therefore I know the killer to be Phyllis, AKA Beatrix Bourbon, the person I most medium suspect.",977,Dwight
"Frankly, I’m not surprised. A lot of the evidence seemed to be based on puns.",978,Dwight
"Happy Earth Day, everyone. I’m Recyclops. Did you know that an old milk carton can be sawed in half and used as a planter?",979,Dwight
Who has put a number seven plastic in a number four bin?,980,Dwight
Recylops will drown you in your over-watered lawns.,981,Dwight
Recyclops will have his revenge.,982,Dwight
"I was hoping to lob Michael his softball question early. I wanted to swing by the garment district, pick up a few crates of my shirts. I got a shirt guy.",983,Dwight
"My idea. I just need Andy to think it’s his idea. So it won’t get traced back to me. In approximately six hours, Jim will get a phone call from David Wallace. He will be fired.",984,Dwight
Five minutes ahead of schedule. Right on schedule.,985,Dwight
My idea!,986,Dwight
This is Stanley Hudson. Jim Halpert is a menace.,987,Dwight
"It’s Toby Flenderson. Listen, things are getting really bad down here.",988,Dwight
I know how it happened.,989,Dwight
My diabolical plot is on hold for Christmas. My heart just melts with the sound of children singing. Hmmph! Not really! I’m just tired. The days are short. I don’t know. Maybe I’m depressed.,990,Dwight
"For several weeks, my Secret Santa has been giving me pieces of a machine that I’ve been attempting to assemble. I’m suspicious of this because I had the exact same idea, for catching Osama bin Laden. I would simply send him a different piece each day. He would assemble it, to find himself… in jail!",991,Dwight
My shadow’s the only one that walks beside me. My shallow heart’s the only thing that’s beating…,992,Dwight
"Oh man! I can use this for so many nuts! Macadamias, Brazil nuts, pecans, almonds. Clams, snails…",993,Dwight
"Bobcat, this is Dragon. Listen. He’s been promoted to sole manager. We’ve got to step this up. Meet me behind the dumpster in ninety seconds. 89… 88…",994,Dwight
Ryan and I have been meeting up to work on our diabolical plot against Jim. Ryan is always late for our meetings. I wish I had a lair.,995,Dwight
I might start a diabolical plot against him after this one.,996,Dwight
"I need a baby. I’ll never outsell Jim and Pam without one. Also, I’ve been noticing a gaping hole in my life. Sometimes I wake up cradling a gourd.",997,Dwight
"I love escorting people. In fact, a few years back, I put an ad in the paper starting an escort service. I got a lot of responses. Mostly creeps. Made a few friends.",998,Dwight
"Yesterday, I was dispatched to Jim and Pam’s house to find Pam’s iPod. I searched everywhere, but I didn’t find it. What I did find, was mold, and lots of it. So, I did what anyone would do. Read a book, had a bath, I got a good night’s sleep, and I made plans to eradicate it. I also made plans to ask Jim where he bought his marvelous sheets… Time to get to work .",999,Dwight
"Dweedle Dee and Dweedle Dumb-ass have been away on maternity leave. Now Dweedle Dumb-ass is back, and we have a problem. Yes, getting hooked on Mega-Desk was my own damn fault. But … I don’t care about assigning blame. All I care about is Mega-Desk. That is all I care about. Getting. More. Mega-Desk.",1000,Dwight
They say that no man is an island. False! I am an island and this island is volcanic. And it is about to erupt. With the molten hot lava of strategy!,1001,Dwight
"Ah. Got a little client meeting at Shanny O’Gannigan’s tonight. It shouldn’t go all night long, so if you’d like me to, I could swing by your house so the baby can experience a strong male presence. No? Nothing? Okay. Have fun working.",1002,Dwight
"Salesman is king. As the best salesman, I am king of kings. Oh, you say Jesus is king of kings? Well. What does that say to you about how I think of myself?",1003,Dwight
"Angela versus Isabel. Height, advantage Isabel. Birthing hips, advantage Isabel. Remaining child-bearing years, advantage Isabel. Legal obligation, advantage Angela.",1004,Dwight
"I don’t understand why Michael is wasting his time with Spanish. I have it on very good authority that within 20 years, everyone will be speaking German. Or a Chinese-German hybrid.",1005,Dwight
"One minority from this branch is going to get into this program. Who would I refer? Hmm… the competent, hardworking one who does things his own way, or the malleable simpleton who can be bought for a few fashion magazines?",1006,Dwight
"Kelly will be even worse than Darryl. If you’d have told me this morning that today I’d be creating a monster capable f my own destruction, I ‘d have thought you were referring to the bull Mose and I are trying to reanimate.",1007,Dwight
"Just once, I would like to be a puppet master and have nothing go wrong. Is that too much to ask?",1008,Dwight
Very well. I must have imagined it. I apologize. Detonator. Detonator where? Michael!,1009,Dwight
"All cases are solved with logic. The only logical way to find out if Donna Is a cheater is to seduce her, bring her to orgasm, then call Michael and tell him the sad news.",1010,Dwight
"I don’t have $30,000 lying around. I have it buried very deeply, and I don’t want to dig past a certain someone to get it.",1011,Dwight
"Five times for $30,000? Not a bad stud fee. Better than most horses.",1012,Dwight
"I am an honorable man, and I will honor the contract. But I don’t have to give her the good stuff. Schrute sperm are strong, but they’re no match for a grown Schrute man. Let’s see what she gets. Aah!",1013,Dwight
"Dwight Schrute, star salesman, beet farmer, bed-and-breakfast proprietor, aspiring freelance bodyguard. Add to that list owner of this building. Then burn the list.",1014,Dwight
"Now that I own the building, I’m looking for new sources of revenue. And a daycare center… Ha ha ha Well I guess it’s not an evil idea. It’s just a regular idea. But there is no good laugh for a regular idea.",1015,Dwight
Angela? Don’t like her anymore. Not attracted to her anymore. Just contractually obligated to make a baby with her.,1016,Dwight
"I pick up day laborers and tell them they’ll get paid at six p.m. At five forty five, a certain INS agent by the name of Mose Schrute throws them in the back of a van, drops them off in the middle of Harrisburg and tells them it’s Canada.",1017,Dwight
"No, I’m no doctor, but it seems to me that we all have an obligation to the public health to track down anyone who gives us a disease, inform them of it, and take overwhelming revenge on that person. Again, I’m no doctor. I’m just a normal guy who enjoys revenge.",1018,Dwight
"I know how to sit on a fence. Hell, I can even sleep on a fence. The trick is to do it face down with the post in your mouth.",1019,Dwight
"The principle is sound. To avoid illness, expose yourself to germs, enabling your immune system to develop antibodies. I don’t know why everyone doesn’t do this. Maybe they have something against living forever.",1020,Dwight
For all your paper and printer needs. For all your paper and printer needs. For all your paper and printer needs.,1021,Dwight
"Wow! This brings back memories. Hay stacking, hay throwing… and at the end of it all, one lucky boy would be crowned Hay King. I always wanted to be Hay King. The world shines on Mose.",1022,Dwight
"And now, by show of applause, We will crown this year’s hay king. All in favor of Purebred. Put your hands together for… Mixed Bread. And let’s hear it for… Purebred. Mm. It appears we have a three-way tie. I have no choice but to pick the Hay King myself. I pick… Me! I am your Hay King! All Hail your Hay King!",1023,Dwight
Did I truck 300 bales of hay to a parking lot to rectify some childhood disappointment? Yes.,1024,Dwight
Angela? Angela!,1025,Dwight
"Owning a building is a war between the landlord and the tenant. Not a literal war, unfortunately, but I am using the same tactics. I’ve surrounded the enemy, and I’m slowly starving them. To save on electricity I’ve installed a timer and motion sensors on the lights. It’s part of my green initiative. And by green, I mean money.",1026,Dwight
"They say the best vampires don’t bleed their victims dry, but give them the strength so that they can bounce back only to be fed on again. I spared Pam, and I may feast off of her profits for years to come. I let Pam win. Haha, oh. I was not motivated by compassion. I have no compassion. Make sure you got that. Not motivated by compassion.",1027,Dwight
I have no feeling in my fingers or penis. But I think it was worth it.,1028,Dwight
Haahh!!,1029,Dwight
"Yes, I have a wig for every single person in the office. You never know when your gonna need to bear a passing resemblance to someone.",1030,Dwight
"In the end, the greatest snowball isn’t a snowball at all. It’s fear. Merry Christmas.",1031,Dwight
"Knights of the Night are volunteer crime patrollers. We’re often compared to the Guardian Angels, but we could not be more different from them. Seriously, we are nothing like the Guardian Angels. I mean, broad strokes purposes, sure. Think Guardian Angels. One of our many recent good deeds? We set out to capture the Scranton Strangler. Mission accomplished. Not by us.",1032,Dwight
"My perfect Valentine’s Day? I’m at home, three cell phones in front of me, fielding desperate calls from people who want to buy one of the 50 restaurant reservations I made over six months ago.",1033,Dwight
"I play Samuel, Michael Scarn’s robot butler. I wanted Samuel’s voice- to be like this! But Michael thought that Samuel should be a very advance android, almost indistinguishable from a real person.",1034,Dwight
He cut the part where my circuit board malfunctioned! What was the point of spilling the drink on me?,1035,Dwight
"Schrute’s are farmers by hobby, and traders by trade. Through the art of the swap, I will walk out of this garage sale with the finest item here.",1036,Dwight
things are going very well. I traded a thumb tack for Meredith’s junk for Kelly’s crap for Phyllis’ garbage for Oscars trash for Stanley’s garbage for Ryan’s junk for Creed’s garbage for a very cute squid that Erin happened to have.,1037,Dwight
"I started with a thumb tack and traded my way to a telescope. But in a way the most valuable thing here wasn’t the telescope at all. No, it was this… packet of beans. So I traded the telescope for it. And I can just go buy another telescope.",1038,Dwight
Did I want to be made manager? Sure. A great opportunity squandered? Absolutely. A crushing blow? Yes. Will I get over it? No. But life goes on. Not for me.,1039,Dwight
"Always the padawan, never the Jedi.",1040,Dwight
"Ladies and gentlemen, please stand up for you co-host this evening, Michael Gary Scott. Please remain standing for your other co-host, and new manager, DeAngelo Jeremitrius Vickers! Was that part of the…?",1041,Dwight
I’ve given up expecting Michael to do the right thing. Or the decent thing. Or even the comprehensible thing.,1042,Dwight
"This is gonna be good. To whom it may concern. Good, real personal. Thanks Michael. The dictionary defines superlative as: of the highest kind, quality, or order, surpassing all else, or others. Supreme. That’s great, if I wanted the dictionary definition I’d buy a dictionary. I define it as Dwight Schrute. As a sales executive, as a leader, as a man, and as a friend, he is of the highest kind, quality, and order. Supreme. Lot’s more like that, really repetitive. What’s this? Two forty five, behind the building. Paintball. Ohhh, yeah.",1043,Dwight
...,1044,Dwight
"Okay, a little about me. I respond to strong leadership.",1045,Dwight
I will never be happier than I am right now. I will also never be less happy. I will be at my current maximum happiness for the rest of my life. Because I am manager of the Scranton Branch of Dunder Mifflin. Acting Manager.,1046,Dwight
"I’m gonna prevent inferior men from sullying my place of work with their weak, passionless leadership. Do you see my hat? No? That’s because I just threw it in the ring.",1047,Dwight
"I will run this branch, or I will destroy this branch, or… I don’t know. Something always works out.",1048,Dwight
K… Kevin!,1049,Dwight
"Yeah, at first, I was really disappointed, but I’ve got a great daily routine going right now. I have upped my karate to eight times a week. I’ve added boxing – lunches and on weekends. I do kickboxing three times a week. Krav Maga four times a week. An hour of meditation every morning at sunrise and again at sunset. So yeah, I’m doin’ great.",1050,Dwight
"Kids, don’t try planking. It’s dangerous. ‘Specially with me around.",1051,Dwight
"Here’s how I’m going to help out from now on. I’m going to not care, and I’m going to sit around quietly waiting for Andy’s inevitable demise.",1052,Dwight
"Obviously you can go the ass tattoo route and obviously, I’m gonna like it.",1053,Dwight
"I’ve been wanting Schrute Farms to break into the high-end event hosting industry for some time, and this party is a great opportunity. Plus, I’ve got a secret weapon. Only one copy in the world and some sucker on the internet sold it to me for two dollars.",1054,Dwight
MR. RYAN HOWARD!,1055,Dwight
"STANLEY HUDSON AND HIS MISTRESS CYNTHIA! JAMES, PAMELA, AND PEEPEE HALPERT!",1056,Dwight
Set that down. Present yourself.,1057,Dwight
Ladies and gentlemen! The last supper.,1058,Dwight
Ladies and Gentlemen! I present to you…the Alamo!,1059,Dwight
"Last night I dreamed that the number two was the most valued number in the world. The vice president had all the power. Athletes fought for silver medals. Women were considered the best gender. And stadiums of fans shouted “We’re number two!’. As with all my dreams, I’m guessing it was about my fear of immigrants.",1060,Dwight
"They are making me out to be a Bond villian. I like to think of myself as a brilliant scientist who will stop at nothing to remake the world. Like…not Doctor Moreau someone good. Doctor Frankenstein, Doctor Jekyll, not them. Doctor…",1061,Dwight
"They’re not my favorite people in the world. I wouldn’t even call them friends. They come over here, eat my pie, dig the crappiest horse grave you’ve ever seen. God, I’m gonna have to work with them forever, aren’t I?",1062,Dwight
"She called it crazy? Aw, man, that’s insulting. All I did was propose a makeshift lie-detector test. Monitoring his blood pressure, pulse, perspiration, and breathing rate.",1063,Dwight
And she called it nuts?,1064,Dwight
The Civil War history industry has conveniently forgotten about the battle of Schrute Farms. Whatever. I’m over it. It’s just grossly irresponsible.,1065,Dwight
"Best thing you can do for the deceased is to pee on their graves. Then you dance and work the urine into the root systems. Doesn’t hurt to have a smile on your face, either.",1066,Dwight
"Standing is proven to be healthier, increases productivity and just looks cooler. Picture someone doing something heroic. Now was he sitting or standing? Not counting FDR.",1067,Dwight
"Obese people in my office are a drain on resources. Chairs wear out faster, it takes more Freon to keep them cool, they flush the toilets more often, plus their massive BMs bust the rivets on my pipes. But a gym turns fat into cash.",1068,Dwight
That’s okay. I know how to build a business. You gotta get the black people to do it to get the white people to do it. Then you gotta get the black people to stop doing it. One step at a time.,1069,Dwight
"Exercise lengthens life. Improves mood, boosts sex drive, and I’ve already covered the BM of it all. It’s miraculous the effect that I will have on their lives.",1070,Dwight
Boom!,1071,Dwight
Enough of this garbage. This is Christmas. Hi-yah!!!!! Yeah!!!! Christmas!!!!,1072,Dwight
"So, I got this bucket from Jim’s garage and I filled it with everything disgusting. Except excrement. I can’t wait to see the look on his face when that falls on my face. Dammit Kathy!",1073,Dwight
"Animals, machines, vast virtual armies. All of these things I have successfully managed. The only thing I haven’t managed is people. I saw an ad on the Sabre website for an open manager position in their printers division. I spoke to Robert California about it and he said for me to come by and see him sometime. So, like a Spanish conquistador, I have come to Florida to claim what is rightfully mine.",1074,Dwight
"I was in Los Angeles last year. Jim tricked me into thinking I’d won a walk-on part on NCIS, but that’s not important. While I was being kicked off the lot, I saw food trucks everywhere. Everyone in Los Angeles eats from them. And nobody calls them restaurants.",1075,Dwight
"I’m gonna find Gabe, tell him what Jim did and let the little stickler do what he does best: stickle.",1076,Dwight
"That baby is a Schrute. And unless somebody taught Mose sex, that baby is mine.",1077,Dwight
"Jim? Oh, right. Nah, forget it. He was doing it for his kids. I get it. Kids drive us dads crazy. Sometimes I feel like they’re raising us. Am I right?",1078,Dwight
"I have a recurring nightmare that I’ve been wrongly accused of a crime and twelve of these idiots are on the jury. Stanley is fast asleep, Kevin eats the evidence, Phyllis’s name is Allison but it really is Phyllis, Jim is foreman of the jury and pronounces me guilty. The cop takes me away and tells me that I’ve been a bad boy and we have sex in the hall. She leaves the handcuffs on. They take me away to prison. The guards are all women.",1079,Dwight
"The Shrutes have a word for when everything comes together in a man’s life perfectly: Perfectinschlag. Hmm. Right now, I am in it. I finally get a chance to prove myself to corporate, I am assembling a competent team, I am likely a father, I am so deep inside of perfectinschlag right now. And just to be clear, there is a second definition, “perfect pork anus” which I don’t mean.",1080,Dwight
Kevin!? Kelly!? Kathy!? Andy just gave me a chain with three weak links. Have you ever tried to use a chain with three weak links? I have. And now I no longer own an arctic wolf.,1081,Dwight
"I released three hundred mosquitoes in the conference room, just temporarily. When I’m done, the frogs will take care of the mosquitoes.",1082,Dwight
"Ok, Florida team, let’s reconvene.",1083,Dwight
"I have been given the responsibility to manage Stanley, a solid player, Ryan, who is capable of surprises, Erin, an excellent follower and Kathy, a probably not totally useless enigma. And, well, Jim. Under the right manager, that’s not a bad team. Perfectinschlag.",1084,Dwight
Wake up!,1085,Dwight
"I need to make Nellie see me as a leader today. First impressions get locked in forever. When I first met Pam, she said something that slightly rubbed me the wrong way. Since then I’ve loved working with Pam and she’s frankly wonderful, but I hate her.",1086,Dwight
"I had two goals today. The first was to make myself the clear candidate for vice president. I achieved that, no thanks to my appendix. The second was to find a memorable souvenir for Philip. For that, I do have to thank my appendix.",1087,Dwight
"English peoples’ main use today is judging American talent. You’re crap. You’re wonderful. They’re mean, but they’re incisive.",1088,Dwight
"If anyone’s having sex with Nellie for personal gain, it’s me, and I’m not joking at all. If you don’t tighten your saddle, you may fall off.",1089,Dwight
"If Jim has bedbugs, that means they’re everywhere. I can’t risk them coming back to Schrute Farms. Our biggest attraction is our 200 year old mattresses.",1090,Dwight
"Point it towards the store, idiot!",1091,Dwight
You know what I mean? One of these buttons is — damn it. Take over.,1092,Dwight
"A dart? Are you kidding me? Who would put a poison dart, well, I mean, I don’t know that it’s poison. I mean, I just have to imagine. God, I’m glad he’s OK though. Kinda sounds like he deserved it, opening another man’s treasure and all. Wow!",1093,Dwight
"Once again, it’s show time.",1094,Dwight
How could Robert transfer Nellie here after the Sabre store debacle? She stinks of failure. The fact that she could show her face around here is an embarrassment. I should know. I’m in an identical situation.,1095,Dwight
"Those who can’t farm, farm celery.",1096,Dwight
"I’ve written quite a bit of X-Men fan fiction. Captain Mutato is half man, half mermaid. So he can fight crime as a man and make love as a mermaid. Most of my writing involves the latter.",1097,Dwight
One of Toby’s eyes is getting smaller. So there’s that. Gabe bragged about having an extra ticket to the air show this weekend and Meredith said she was interested and then Gabe said immediately that his friend might be taking the ticket. So I’ll keep you posted on that.,1098,Dwight
Every day I brief Nellie on what’s going on in the office. Most of it’s irrelevant. But a good informer doesn’t judge what’s worth passing on.,1099,Dwight
How much do you guys charge for a one full year gym membership? Thank you!,1100,Dwight
It’s $475! Like candy from a baby!,1101,Dwight
"I wanted to give a nice gift to the tenants in the building. At first I thought, “muffin basket.” Then I thought, “What’s even more precious to people than muffins?”",1102,Dwight
…their own children.,1103,Dwight
"Wha-? Damn it, Jim!",1104,Dwight
Is this what you were looking for? Huh? Huh?,1105,Dwight
Operation Phoenix is a go. Just get the car ready.,1106,Dwight
"How was my summer? It was pretty mixed. I invented a new power drink made out of beet runoff. Mmm, mmm! So that’s really good. But I got some disappointing medical news.",1107,Dwight
In a way it’s like I have a son. And who knows? Maybe someday they’ll hire someone who looks like a younger version of him. And then I’ll have a grandson.,1108,Dwight
"Paranoid? I’m not familiar with the word. And I really don’t have time to learn new words right now, ok? A pudgy 22-year-old is trying to take my job.",1109,Dwight
"Slack lining, please. Untie that rope, give it to a couple of pig-tailed school girls, let them start jumping with it while chanting a rhyme and giggling about boys. Doesn’t seem so macho now, does it? It’s a jump rope!",1110,Dwight
"Ok. Oh, god.",1111,Dwight
"Attention, employees of Dunder Mifflin. Everyone thinks the new guys are so cool cause they can slack line. Boo. Hey Clark, this is what a areal salesman looks like. They say that you only live once and I’m about to prove it. Dwight Schrute!",1112,Dwight
Woo! Ahh!!,1113,Dwight
I feared Nellie had some sort of a plan but she used a ridiculous font. Huh. You don’t have a plan.,1114,Dwight
Heh! Ha!,1115,Dwight
"Dothraki is the native tongue of the nomadic war-mongering horse lords of Essos as featured in the superb Home Box Office series, Game of Thrones. It has a lot of nudity. Which I fast-forward through to get to the chopped-off heads.",1116,Dwight
"Oh, the wires need insulation. It’s a wire people. I’m not buying it a fur coat.",1117,Dwight
"I know what Jim is trying to do. He’s trying to get big bad Dwight to shell out for a huge repair job while lucky Jimbo gets a paid vacation. Well sorry, lucky Jimbo, I can live very happily in a magnetic field. Most of my childhood heroes got their power that way.",1118,Dwight
"Roll into the future with Work Bus. Say goodbye to wasteful buildings. These days a mobile office isn’t just for hotshot politicians. Now anyone can rent a work bus. If you’ve got a parking lot, a work space is just a phone call away. In this age of belt tightening and less empowered workers, a work bus is how tomorrow gets things done.",1119,Dwight
But as Jim and I discovered… No! … any blow to the pumpkin itself could prove fatal to me.,1120,Dwight
At first I drove myself crazy thinking about the things I should have done differently. I never should have played that joke on Erin. I never should have hollowed out this damn pumpkin in the first place. Then I realized that I was being silly. I mean the pumpkin should rot off of my head in a month or two. Right?,1121,Dwight
"Dumatril is licensed to treat anxiety symptoms, such as panic attacks, excessive worrying, and fear. Translation: There’s a madman in our midst.",1122,Dwight
"The media can make you famous. And do you have any idea how easy it is to sell something when you’re famous? “Uh, yeah wow. 10 reams of 40 pound bond at only $690 after discount? Um, whatever you say, Brad Pitt.” It’s that easy.",1123,Dwight
"Overall, I’d say my first radio interview went pretty much the way I expected.",1124,Dwight
"The White Pages: Do you want it? No. Do you use it? No. Does it inexplicably show up on your doorstep three times a year? Yes, yes, and yes. There’s a reason that we in the paper industry call this thing “the White Whale”. Look at all that sweet blubber.",1125,Dwight
"This is me and my family celebrating Pennsylvania Dutch Christmas in 1982 on the farm. There’s me and my brother Jeb breaking the ceremonial pig rib. He doesn’t come back for Christmas anymore. The sepia tint is from an app on my phone. This is the same photo, matrix style.",1126,Dwight
"Every year, my grandfather would dress up as belsnickel at Christmas. He was…okay at it. I am great. You know how they say some people were born to be bad? Well, I was born to be belsnickel.",1127,Dwight
"In a head-to-head contest, people prefer belsnickel over santa every time. There aren’t as many songs about him, but I attribute that more to rhyming difficulties. My brother and I wrote one once. it was about a fickle pickle salesman who would tickle you for a nickel.",1128,Dwight
"Of all of the vermin in God’s great green kingdom, lice are the ones I detest the most. My first day of school, I had lice, and no one would play with me. For 15 years, they called me freak and four eyes and sci-fi nerd and girl puncher. All because I had lice when I was 7.",1129,Dwight
"I had a pretty good day today. Not everything went exactly according to plan, but lice if you are watching, I am ready for you anytime, anywhere.",1130,Dwight
"Stone and Son Suit Warehouse recently lost their paper provider. They’re a family owned business . Jim and I used to clean up at those. We’d go in pretending to be family – brothers. We did it at a family owned law firm, at a family owned construction company, and a family owned motorcycle store. Jim and Dwight Shrupert. I was the dynamic, likeable winner that was doted upon by Mom. And Jim was the closeted foot fetishist pretending to belong. The client never knew any of that, but I knew.",1131,Dwight
"Wallace is letting me hire a junior sales associate to sit at Jim’s desk while he’s away in Philly. Finally I’ll have someone at my desk clump who gets me. It’s like, “Really, Jim? You don’t understand the difference between a slaughterhouse and a rendering plant? Uh, remind me not to lend you any dead cows or horses.” Wow.",1132,Dwight
"Clark has no chance. I mean, he’s up against my buddy Rolf, for God’s sake. Guy goes fishing with hand grenades. And Trevor – he’ll make you laugh so hard, you’ll puke your pants.",1133,Dwight
"Rolf is my best friend, and he is the man. Cool, calm, and collected 24/7. Just try and rattle Rolf. I dare you. Such a sweet guy.",1134,Dwight
"Well, they can’t all be winners. But Trevor’s next and he’s a real professional. You say, “Jump,” and he says, “Oh who?” He loves to jump on people, that Trevor.",1135,Dwight
"I can’t hire Clark. Yeah, he looks like a Schrute, but he thinks like a Halpert and he acts like a Beesly.",1136,Dwight
"Next up, my cousin Mose. Mose could make a great paper salesman. He’s got a natural fear of paper, which would motivate him to get as much of it out of this office as possible. I’ve got big expectations, Mose-wise.",1137,Dwight
"When I was young, I spent several years at a private school where I was told I would be taught to harness my mutant abilities. Turned out it was a conman copying Charles Xavier’s School for Gifted Youngsters from the X-Men comic books. Took me years to figure out that it was a con. Some people never figured it out.",1138,Dwight
"Wolf is hilarious. He has executed me over 100 times at point-blank range. Half of ‘em, we were on the same team. Oh my God. How I screamed. Ah, that goof.",1139,Dwight
"Nate is a proven entity, but not without his handicaps; hearing, vision, basic cognition. Trevor is great, but I saw no fire in him today. And this is a guy who loves to start fires. Troy is literally one of a kind. He’s a goblin, or a hobbit, or a kobold, which is a type of gremlin. And yet I’m hesitant. Why can’t I pull the trigger on any of them?",1140,Dwight
Summer. Winter. Jungle. Formal.,1141,Dwight
They say that everyone outgrows their friends at some point in their lives. Well I just outgrew them all in the span of three hours.,1142,Dwight
"Normally, I find Pam to be a comforting, if unarousing, presence around the office. Like a well-watered fern. But, today, she has tapped into this vengeful, violent side. And I’m like, wow, Pam has kind of a good butt.",1143,Dwight
"I really like Andy these days. He’s pretend and he does exactly as I tell him to. All that will change when real Andy comes back tomorrow. Unless he comes back as pretend Dwight. In which case, we’re in for an epic, confusing showdown.",1144,Dwight
"I’d like to rat out Andy. Unfortunately, I have a bit of a boy-who-cried-wolf dynamic with David Wallace. Except, instead of a boy, I’m a man. And instead of a wolf, I cried genetically-engineered monster wolf.",1145,Dwight
"No, don’t just let her eat the grass, she’ll puke it right up. OK, just put out two bowls and see which feed she prefers. I’m sorry to be taking up so much of your precious time, Mose, but she’s your aunt too. Fine. I’ll see what I can do.",1146,Dwight
My actual mother was very cold and distant. I’d say she was the closest thing I had to an aunt.,1147,Dwight
"We Schrutes don’t need some Harvard doctor to tell us who’s alive and who’s dead. But, there was an unlucky streak of burying some heavy sleepers. And, when grave robbers discovered some scratch marks on the inside of some of the coffins, we decided to make sure that our dead were completely dead. Out of kindness.",1148,Dwight
"I can’t stand the fact that Jeb is a pot farmer. He could’ve grown anything. Anything in the world. He used to talk about growing a peanut-grape hybrid. One plant, one sandwhich.",1149,Dwight
"People underestimate the power of nostalgia. If baseball can use it to get people to care about that worthless sport, then I can use it to get my siblings to care about the farm. Nostalgia is truly one of the great human weaknesses. Second only to the neck.",1150,Dwight
What does Josh McAuliffe know about the paper business? He works for a news…thing.,1151,Dwight
"For five years I’ve held my instincts in check because I wanted to be made manager. Maybe it’s time for me to just let that thought go. It’s kind of painful, but it’s also freeing in a way. Now it’s all about my instincts.",1152,Dwight
Right? Come on!,1153,Dwight
"Yesterday was the first round of a branch wide paper airplane contest. It was being sponsored by Weyer-Hammer Paper in an effort to get us to sell more of their new product Airstream Deluxe A4, the Cadillac of paper. It’s not so easy on the environment, if you know what I mean. Practically made of plastic.",1154,Dwight
"I offered myself to Angela and she turned me down. If she changes her mind, the next move is hers. I’m with Esther now. She’s younger than Angela, sturdier, more comfortable with the scent of a manured field. Let’s be honest. When it came to manured fields, Angela was at best indifferent.",1155,Dwight
"I had to find a new dojo after sensei Ira and I parted ways. My new sensei, sensei Billy, thought I had more than enough training to take the test. Turns out, sensei Ira was a bit of a shyster. Sensei Billy says most students don’t spend $150,000 over 20 years to get their black belt.",1156,Dwight
"Yesterday I was just your average, ordinary paper salesman with a farm and a bunch of pipe dreams about beet fuel. Today, I leave here a regional manager with a black belt. It really is amazing how your life can change in one day.",1157,Dwight
"Last week I finally became permanent manager of Dunder Mifflin Scranton. My first project: increase security. I got these doors from a jewelry store that had recently gone out of business. Now they’re protecting America’s real treasure, paper. Every morning I email the day’s security codes. Something that’s been really missing from my life has been writing secret codes. It’s not the KGB, but it’s a start.",1158,Dwight
"It’s just harmless steam to panic intruders. I’d like to get harmful steam, but the prices are absurd.",1159,Dwight
Manager of Dunder Mifflin? Check. Owner of a 1600-acre beet farm? Check. Engaged to be married to an actual milkmaid? Check… on that later today. This is my grandmother’s ring. It was made from a bullet I took out of her left buttock. She was a moonshiner shot by Adolph Coors. This is my grandmother’s buttock bullet ring.,1160,Dwight
The way that boy looks at the Galactica is precisely the way I look at the Galactica. And he eats the same kind of paper I do. Hmm.,1161,Dwight
"My job is to speak to clients on the phone about… uh, quantities and type of copier paper. You know, whether we can supply it to them. Whether they can pay for it. And… I’m boring myself just talking about this.",1162,Jim
"If I left, what would I do with all this useless information in my head? You know? Tonnage price of manila folders? Um, Pam’s favorite flavor of yogurt, which is mixed berry.",1163,Jim
Do I think I’ll be invited to the wedding?,1164,Jim
"This is my biggest sale of the year. They love me over there for some reason. I’m not really sure why but I make one call over there every year, just to renew their account, and that one call ends up being 25% of my commission for the whole year, so I buy a mini bottle of champagne, celebrate a little. And this year I’m pushing recycled paper on them for one percent more. I know. I’m getting cocky. Right?",1165,Jim
"Mr. Decker, we didn’t lose your sale today, did we? Excellent. OK. Let me just get your… what’s that? No, we didn’t close last time. I just need your… Oh. W-What code were you given? Oh, OK. That’s actually another salesman here. I can redo it if you want to do that. Oh, he gave you a discount? No, I don’t blame you.",1166,Jim
Uh… Not a bad day.,1167,Jim
"Any time Michael asks me to do anything, I just tell him that Dwight should do it.",1168,Jim
"Right now, this is just a job. If I advance any higher in this company then this would be my career. And uh, well, if this were my career, I’d have to throw myself in front of a train.",1169,Jim
"At that moment, I was so happy. I mean, everything Dwight does annoys me.",1170,Jim
"And I spend hours thinking of ways to get back at him, but only in ways that could get me arrested. And then here he comes and he says “No, Jim, here’s a way.”",1171,Jim
That was beautiful. All her idea too. Awesome. She is so great.,1172,Jim
"Pam gets a little down. Her toaster oven broke. Um, which she got at her engagement shower. Um, for a wedding that still has yet to be set… and that was three years ago.",1173,Jim
"Basketball? It was kind of my thing in high school. And I’m, yeah, I’m looking forward to playing. You know, I think I’m gonna impress a few people in here.",1174,Jim
"Pam and I are good buddies. I’m sort of Pam’s go-to guy for her problems. You know with stuff like work, or uh, her fiance Roy. Or uh… Nope, those are pretty much her only two problems.",1175,Jim
What a great year for the Dundies.,1176,Jim
"The weird part about this whole deal this that Michael truly believes that these awards are inspiring and motivational. I mean, he puts more effort and time and commitment into the Dundies than anything else he does all year. Which is probably why this branch will be downsized.",1177,Jim
"Hey, um… what has two thumbs and hates Todd Packer? This guy!",1178,Jim
"I’m in an office relationship. It’s special. Um… she’s nice. She’s shy. She’s actually here. You want to meet her? Hold on one second. Oh, my God! Put on a shirt! Put on a… . I told you that you’d be on camera. I’m sorry, she’s European. No, I told you that you’d be on camera. Stop it.",1179,Jim
So that’s what this sound is all day.,1180,Jim
Let the games begin.,1181,Jim
"Yeah, I filled out the expense reports. That took about five minutes and then I closed two sales at lunch time. So, about as productive as any other day. If not more so.",1182,Jim
Okay. Thought people read more books.,1183,Jim
"Dwight is… special. But, I don’t believe that his talents are being used in this office. So Pam and I have put his resume on Monster.com, Google, Craig’s List. We’re really interested most in jobs that take Dwight out of state. Um, preferably Alaska… or India.",1184,Jim
"Um… Whoa. Michael Scott here. Yes, I am regional manager of this orifice. Mmm hmm. Dwight Schrute is amazing. Yeah. No, he is actually the single greatest employee of his generation. Mm hmm. You know what? I’m gonna tell you what. You hire Dwight K. Schrute, and if he does not meet, nay, exceed every one of your wildest expectations, well then, you can hold me, Michael Gary Scott, personally and financially responsible. Okay. Okay. Okay-kay-kay-kay-kay. Okay.",1185,Jim
"That’s just a figure of speech, you know? Blow your brains out? Come on. All it really means is that we’re friends. Who else is she gonna talk to if I’m gone, right? I mean, if she left, I wouldn’t blow my brains out. Of course, I would take that job in Maryland. Because it’s double the pay, and soft shell crab just happens to be my favorite food.",1186,Jim
"Um, well, we are all getting excited to see this fight. The Albany branch is working right through lunch to prevent downsizing, but Michael, he decided to extend our lunch by an hour so we could all go down to the dojo and watch him fight Dwight. Fight… Fight, fight, fight, fight, fight, fight, I’m coming, fight…",1187,Jim
"So this possible client they’re talking about, actually a big deal. It’s Lackawanna County. Our whole county. And if we get this, they may not have to downsize our branch. And I could work here for years. And years. Years.",1188,Jim
"I always knew Pam has refused to go to sports games with Roy, but I never knew why. Interesting.",1189,Jim
"I had plans to meet a friend tonight. Which I had to cancel. But this is cool, too. I’m not a complainer.",1190,Jim
"Ok, we didn’t dance. I was totally joking anyway. I mean, it’s not really a date if the girl goes home to her fiance. Right?",1191,Jim
Today is Thursday. But Dwight thinks that it’s Friday. And that’s what I’ll be working on this afternoon.,1192,Jim
"It’s true. I’m having a party. I’ve got three cases of imported beer, a karaoke machine, and I didn’t invite Michael. So three ingredients for a great party. And it’s nothing personal, I just think that if he were there, people wouldn’t be able to relax, and you know, have fun, and my roommate wants to meet everybody. Because I’m pretty sure he thinks that I’m making Dwight up. He is very real.",1193,Jim
"So this year, for the first time ever, I got Pam in Secret Santa. And I got her this teapot, which I know she really wants, so she can make tea at her desk. But I’m also going to stuff it with some inside jokes. Like, this is my high school yearbook photo. She saw it at the party, and it really makes her laugh. Not sure why. What else .. ooh. This is a hot sauce packet. She put this on a hot dog a couple years ago because she thought it was ketchup. And it was really funny, so I kept the other two. This would take a little too long to explain, so I won’t. And this is the card. Because Christmas is the time to tell people how you feel.",1194,Jim
"He obviously forgot to get me something, and then he went in his closet and dug out this little number and then threw it in a bag.",1195,Jim
"To think that my gift for Pam will be used for that, it’s a little too much to handle.",1196,Jim
"Michael stands in the front of the boat and says that he’s king of the world within the first hour, or I give you my next paycheck.",1197,Jim
You know what? I would save the receptionist. I just wanted to clear that up.,1198,Jim
"So, I guess Pam and Dwight are friends now.",1199,Jim
I want to clamp Michael’s face in a George Foreman grill.,1200,Jim
Yeah. On the booze cruise I told Michael about some feelings I used to have for Pam. I had just broken up with Katy and had a couple drinks. And I confided in the world’s worst confidant.,1201,Jim
Well the cats out of the bag. I used to have a crush on Pam and now I don’t. Riveting.,1202,Jim
"Pam’s on vacation and she gets back tomorrow, so it’ll be nice to see her. It’ll be nice, and, uh, she set a date for the wedding with Roy. Uh… June. Summer. So, that’ll be nice. And that’s that.",1203,Jim
What? I did not do that. That sounds disgusting.,1204,Jim
"So I broke up with Katy and haven’t been dating anybody else, so this year I don’t have to worry about Valentine’s Day. It’s gonna be good. I invited a couple of friends over. We’re gonna play some cards and I’ll end up winning a lotta money. Because, they’re idiots. It’s gonna be great.",1205,Jim
"Nah that’s alright. Spend money on her, instead of giving it to us. That’s fine. No, I didn’t even have a seat for you anyway. Yeah, hahaha, alright man, have a good night. Bye.",1206,Jim
"Dwight lives on a beet farm and he practices karate at the forth grade level. And he apparently has a girlfriend, so… I guess there really is someone for everybody.",1207,Jim
"Dwight was the top salesman of the year at our company. He wins a little prize money and gets honored at some convention. It is literally the highest possible honor that a Northeastern Pennsylvania-Based Mid-size Paper Company Regional Salesman can attain, so…",1208,Jim
I’m going to take a trip. I’m going to get out of town for a while… and go someplace… not here.,1209,Jim
Where do I want to go? Um… that is an excellent question. And one I should have probably thought about before I called you. Um…,1210,Jim
"Ok, I didn’t actually major in Public Speaking. But, I did download speeches from some of history’s famous dictators. Like this one . Originally given by Benito Mussolini.",1211,Jim
"“A7557962.” Totally nonsense numbers, but you do what you have to do.",1212,Jim
"So, yesterday Dwight found half a joint in the parking lot. Which is unfortunate because as it turns out, Dwight",1213,Jim
Wow. What a terrible day to not be able to talk. Dwight was literally carrying around his own urine and dressed like one of the Village People. Why does he do the things that he does for Michael? I just don’t get it. What is he getting out of that relationship?,1214,Jim
"Yeah, I mean it’s inevitable. I definitely overhear some wedding preparation, but I’m fine with it. She hears me arranging my social life. And we both have to hear Dwight order deer urine over the Internet, so it evens out.",1215,Jim
Yes! Five bucks each. And it was totally worth it.,1216,Jim
"That actually took a while. I had to put, uh, more and more nickels into his handset, till he got used to the weight, and then I just… took ’em all out.",1217,Jim
"Just a simple macro. You know, these actually don’t sound that funny one after another. But he does deserve it, though.",1218,Jim
"Yeah, I just moved it an inch every time he went to the bathroom. And that’s how I spent my entire day that day.",1219,Jim
"Why did I talk to Jan about transferring? Well, you know… I have no future here.",1220,Jim
I will raise. Thanks.,1221,Jim
"It’s the weirdest thing. Every time I cough, he folds.",1222,Jim
"I can’t say whether Dunder Mifflin paper is less flammable, sir, but I can assure that it is certainly not more flammable.",1223,Jim
Why did I transfer to Stamford? I think that’s pretty obvious. I got promoted! And you can’t beat that view… right?,1224,Jim
"I ate a tuna sandwich, on my first day. So, Andy started calling me Big Tuna. …I don’t think any of them actually know my real name.",1225,Jim
What’s gay-dar?,1226,Jim
I miss that.,1227,Jim
"You know, when I saw Dwight, I realized how stupid and petty all those pranks I pulled on him were. And then he spoke. I wonder how hard it would be to get a copy of his room key.",1228,Jim
"At the Stamford branch, they all play this World War II video game called Call of Duty, and they’re all really into it. I’m told it started as a team building exercise. Unfortunately I really suck at it. We didn’t play many video games in Scranton. Instead we’d do stuff like, uh, Pam and I would sometimes hum the same high pitched note, and try to get Dwight to make an appointment with an ear doctor. And uh, Pam called it… Pretendenitus.",1229,Jim
Things are a little bit… different here in Stamford. It’s not bad.,1230,Jim
"I called the manufacturer, who referred me to distributor, who referred me to the vending machine company, who told me that they sell them in the machines in the building next door.",1231,Jim
Sorry.,1232,Jim
"I started biking into work. Josh does it and he lives a lot farther away than I do. And also it saves gas money, keeps me in shape… helps the environment. And now I know it makes me really sweaty for work.",1233,Jim
"Once a quarter, the sales staff at this branch has to stay late to do order form consolidation… which, amazingly, is even less interesting than it sounds.",1234,Jim
"I don’t have a ton of contact with the Scranton branch, but, before I left, I took a box of Dwight’s stationery, so, from time to time, I send Dwight faxes. From himself. From the future. “Dwight, at 8 A.M. today, someone poisons the coffee. Do not drink the coffee. More instructions will follow. Cordially, Future Dwight.”",1235,Jim
"I worked in Scranton for a really long time. And uh, it’s going to be weird that it’s all disappearing. I mean, I always knew that the branch would shut down someday. I just figured it would be because Michael sold the building for some magic beans.",1236,Jim
"Where do I stand with Pam? Um… no idea. I mean, we’re friends. Always have been friends. Um… .that is where we stand.",1237,Jim
It reminds me of the orientation video showed on my first day. ‘The Scranton Witch Project’.,1238,Jim
"Yes. I have started to see Karen. It’s very new, and… not really ready to talk about it openly yet, just because, I think, once the word gets out there, it might affect the way people behave around us or… I dunno. Just, not yet.",1239,Jim
"I know Pam pretty well. I know the things that she likes, and, just as important, I know the things that she hates. So, one of the things that she likes is pranks. And, the things that she hates…",1240,Jim
"It’s a bold move, to Photoshop yourself into a picture with your girlfriend and her kids on a ski trip with their real father. But then again, Michael’s a bold guy. Is bold the right word?",1241,Jim
"I feel like there’s a chance for me to start over. And if I fall back into the same kind of things I used to do., then … what am I doing?",1242,Jim
"Yup, looks like the Scranton people and the Stamford people are finally coming together. And that’s what you want, right?",1243,Jim
"Oh no, this is different. The CIA thing, that was a prank on Dwight. This is more like a umm… OK, it’s pretty much the same thing.",1244,Jim
"Dwight and I used to go on sales calls all the time. In fact, I have a picture to remember that time. Oh young Jim. There is just so much I need to warn you about. And yet, tragically, I cannot.",1245,Jim
"I miss Dwight. Congratulations, universe. You win.",1246,Jim
"Prima nocta, I believe from the movie Braveheart, and confirmed on wikipedia, is when the king got to deflower every new bride on her wedding night. So…",1247,Jim
"Karen and I had a long talk last night and the night before that and uh, every night, for the last five nights.",1248,Jim
"Michael referred me to a male strip club called Banana Slings. Instead, I called the Scholastic Speakers of Pennsylvania.",1249,Jim
"In school, we learned about this scientist who trained dogs to salivate at the sound of a bell by feeding them whenever a bell rang. For the last couple of weeks I’ve been conducting a similar experiment.",1250,Jim
"Hypothetically, if I thought Pam was interested, then… No, it’s totally hypothetical.",1251,Jim
Here’s a ‘not hypothetical’. I’m really happy I’m with Karen.,1252,Jim
"Pam’s with Roy. I’m with Karen. And, uh, Brangelina is with Frangelina. Movin’ on.",1253,Jim
"Why don’t I wanna go? Didn’t expect to need a reason, so let me think here. Um. I don’t know any of these people. It’s an obligation. I don’t like talking paper in my free time, or in my work time. And, did I use the word pointless?",1254,Jim
"I guess… all things considered, I was lucky Dwight was there. And Roy was lucky that Dwight only used pepper spray. And not the nunchucks or the throwing stars.",1255,Jim
"It was a little glass display case for his for his bobblehead. That would have made us even, I think. He saves my life, I get him a box for his desk toy. Even Steven.",1256,Jim
"I… will never say a word. And now, we are even.",1257,Jim
"Last week, I was in a drug store and I saw these glasses. Uh, four dollars. And it only cost me seven dollars to recreate the rest of the ensemble. And that’s a grand total of… eleven dollars.",1258,Jim
"Lord, beer me strength.",1259,Jim
That is pretty cool.,1260,Jim
That’s pretty cool.,1261,Jim
"Oh, my God. I have never seen that look in a man’s eyes… ever. I thought that I might die. On beach day.",1262,Jim
"Karen suggested that I get a haircut for the interview tomorrow so that I could look presentable and not, as she so lovingly puts it, homeless.",1263,Jim
"I broke up with Karen after the job interview, and uh… it was a little awkward when she came back from the city. She told me, very clearly, just because we were broken up didn’t mean she was going anywhere, because she worked really hard for her career. But the next day her desk was empty, and as for me and my current romantic life, I uh… I’m single now and looking, so if you know anybody.",1264,Jim
One day Michael came in complaining about a speed bump on the highway. I wonder who he ran over then.,1265,Jim
"Oh, I’m sorry, is this a working office, and not a French beach?",1266,Jim
"Wait a second. Last time I checked, Dunder Mifflin already has a website. And quite frankly, I’m not really sure what’s wrong with it.",1267,Jim
And… that is why we waited so long to tell people.,1268,Jim
"There’s this cube on the screen, and it bounces around all day, and sometimes it looks like it’s heading right into the corner of the screen, and at the last minute it hits a wall and bounces away. And we are all just dying to see it go right into the corner. Pam claims that she saw it one day when she was alone in the conference room. Okay. I believe she thinks she saw it.",1269,Jim
"Yep, I’m very passionate about Italian food. In fact, um, I’m in love with Italian food.",1270,Jim
"I think it’s great that the company’s making a commercial because not very many people have heard of us. I mean, when I tell people that I work at Dunder Mifflin, they think that we sell mufflers, or muffins, or mittens, or… And frankly all of those sound better than paper, so I let it slide.",1271,Jim
"Hey, could you do me a favor? Could you put that in the DVD player?",1272,Jim
"Hey everybody! Just want to welcome you all to the premiere of the real Dunder Mifflin commercial, the Michael Scott director’s cut. Hope you like it.",1273,Jim
"Michael is on a mission to prove that he’s creative. Which I think is odd, because Michael actually might be the most creative person I’ve ever known. Every day, Michael says and thinks things that no one has ever said or thought before.",1274,Jim
"So the deal was, Dwight doesn’t blow anything up, and I wear a costume. And a moustache.",1275,Jim
"When Michael plays the hypothetical game, I always say yes.",1276,Jim
And I am always busy.,1277,Jim
"There are thirteen people working in this office, so thirteen times a year Michael gets a cake and balloons, and some sort of joke gift and makes a toast. There are two types of toasts. One is a joke about how old you are.",1278,Jim
"And the other is something inappropriate. Or horrible. Or both. What else? He only sings the high harmony to “Happy Birthday.” And he’s a very big believer in surprise parties. Maybe even, arguably, possibly to a fault.",1279,Jim
"So… I think, yeah, I think getting these out of the way might be productive.",1280,Jim
"Toby’s great. He’s great, but sometimes he can be a little bit much. I don’t see the harm in that. Well, it’s a cake Toby, so, c’mon.",1281,Jim
"Yup, Phyllis called me Michael. And I will always and forever be haunted by that fact.",1282,Jim
"Michael has asked Pam and me to dinner at least 9 times. And every time we’ve been able to get out of it. But I’ve got to give him credit, he got me. Because I’m starting to suspect that there was no assignment from corporate.",1283,Jim
Michael and Jan seem to be playing their own separate game and it’s called ‘Let’s see how uncomfortable we can make our guests’ and they’re both winning. So I’m going to make a run for it.,1284,Jim
I am not kidding. Got it a week after we started dating.,1285,Jim
"You know what? If we all stayed a couple of hours late tonight without Michael distracting us, we wouldn’t have to come in at all tomorrow.",1286,Jim
"So I caught everyone before they left and I told them my idea, and they loved it. Because this is a group that respects good ideas… the one time a year they hear one.",1287,Jim
"Today, I am meeting a potential client on the golf course, because Ryan put me on probation. You remember Ryan, he was the temp here. Yeah. And uh, it is not a good time for me to lose my job. Since I have some pretty big long term plans in my personal life with Pam, that I’d like her parents to be psyched about. So I am about to do something very bold at this job that I’ve never done before. Try.",1288,Jim
So I guess I’ll just… work on my short game.,1289,Jim
"You know it’s a tough thing, seeing a grown man take six shots to get out of a sand trap but, I had to give Phil credit for not quitting. Which is what I told him. I also told him I don’t quit either, and I’d call him every single day until he gave me his business. Which he then did, after …fifteen minutes of me blocking his car. So I am now his paper supplier! And I shot a 102 today, so I’m feeling pretty good.",1290,Jim
"If your client likes Italian food, you bring him to Cugino’s. And if your client likes a little action, you bring him a gambler. And if your client hates Cornell, you bring him Andy.",1291,Jim
"Dwight left his cell phone on his desk. So, naturally, I paired it to my headset.",1292,Jim
"Oh, and I forwarded his desk phone to mine.",1293,Jim
I’m going to propose tonight. Holy crap!,1294,Jim
"Hey, Ryan, it’s Jim. Look man, I don’t know what’s gotten into you lately, but you know what? I really don’t care, because you’re trying to get rid of me. And I bet you don’t think I care enough about this job to actually fight back, but you’re wrong, because I do, and I will. So you can keep trying to push me out of this place, but guess what? I’m not going anywhere.",1295,Jim
"I’ve always gotten along well with Toby. Uh, we’re friends. But I don’t think we’ll stay in touch necessarily. I think I’ll probably get updates on him from Pam.",1296,Jim
"Is Ryan gonna fire me? I don’t know. I know that I’ve done everything I can, and I just brought in a huge sale, and… am I insane, or was this kid a temp two years ago? Because in the three years that he’s been here, I think all he’s ever done is start a fire and grow a beard. And it’s not even a good beard.",1297,Jim
"Okay, what’s going on?",1298,Jim
"Why haven’t I proposed yet? Uh, actually Pam and I talked about it. And we just decided that, um — well, we didn’t want to spend first three months of our engagement apart. And Pam’s always said she doesn’t want a long engagement. Something in her past, I guess. I’m not really sure of the whole story, but something about a guy who used to work here…",1299,Jim
"I can’t believe I’m saying this, but Michael is actually killing it with Holly. And I think I know why. It’s because Holly is kind of a major dork.",1300,Jim
"I don’t really know Ronnie. But I have a feeling I will get to know her very well over the next few years, and eventually declare my love for her.",1301,Jim
"When Michael told us that Jan was pregnant, he led us to believe that he was the father. By telling us that he was the father.",1302,Jim
Some girl came into Pam’s room crying about her roommate stealing her soy milk. So I’m in here waiting it out.,1303,Jim
"Probably the weirdest thing about Pam being gone would be lunch… actually. But um, it will force me to become acquaintances with people I consider… coworkers.",1304,Jim
Summers going great. Just spent two hours listening to Michael Clump. I have a weird pain in my left side that I’m convinced is an ulcer. My girlfriend lives in New York and I haven’t seen her in 10 days. How’s your summer?,1305,Jim
...,1306,Jim
"When Michael told us that Jan was pregnant, he led us all to believe that he was the father… by telling us he was the father. But then we got this e-mail from Jan. “Hi, everyone! Jan here, writing to share some wonderful news and to quash a rumor. First, the great news – I am expecting. The beautiful baby inside me will be ready to meet the world this fall just a few months before the launch of the new Serenity by Jan line . Anyway, I also wanted to clarify that the father is not anyone that you or I have ever met. Remember, no matter how excited someone is about my baby, it does not make them the father. Best, Jan. P.S. Hope to ship you something soon.”",1307,Jim
"He has not stopped working for a second. At 12:45 he sneezed while keeping his eyes open, which I always thought was impossible. At 1:32 he peed, and I know that because he did it in an open soda bottle under the desk while filling out expense reports. And on the flip side, I have been so busy watching him that I haven’t even started work. It’s exhausting, being this vigilant. I’ll probably have to go home early today.",1308,Jim
"Jan is about to have a baby with a sperm donor. And Michael is preparing for the birth of a watermelon with Dwight. Now, this baby will be related to Michael through delusion.",1309,Jim
I am going to see Pam. Because I feel like I should.,1310,Jim
No. you know what? No. Because… I’m not that guy. And we are not that couple.,1311,Jim
"I am off to New York. My brother Pete from Boston, and my brother Tom from New Jersey are taking Pam and I out for lunch, to celebrate the engagement. Or maybe to beat me up. I can never tell with those two.",1312,Jim
...,1313,Jim
"Dwight and I are both writing letters to our clients. I’m just sending a quick note to say how much I appreciate their business, and he is writing notarized letters to inform them them that lying on customer reviews is a prosecutable form of fraud and defamation. It’s just… different styles.",1314,Jim
Pam comes back from New York next week and everyone here has just been so excited for me. And involved. And intrusive. And weird.,1315,Jim
"Today’s a big day. Today’s the day that I show Pam the house that I bought for us. Without telling her. But it’s my parent’s house, the house I grew up in and yeah, I bought it kind of impulsively. I mean, the price was good and I was helping out my mom. It’s got shag carpets. I mean you can’t blame my parents it was the 70’s. And why would you want to buy ugly wood from trees when you can have paneling? And a painting of some creepy clowns that is apparently crucial to the structural integrity of the building. She’s gonna love it. Right?",1316,Jim
"Ever since Pam and I started dating, I just feel weird asking her to make copies for me. So, I make my own copies. And that copier sucks. Let me tell you, I-But you know what? Pam and I don’t have to agree on everything.",1317,Jim
Whew.,1318,Jim
"Andy still doesn’t know that Angela’s having an affair with Dwight. And it’s been seventeen days. I mean, eventually he’ll figure it out, when their kids have giant heads and beet-stained teeth. But right now it’s just… awkward.",1319,Jim
"So, I either get more involved, or I take a sick day… leaving Dwight in charge. Oh God.",1320,Jim
"I got 500 feet of red wire at a flea market up by Dunmore High School. 20 bucks for the whole spool. Crazy, what a deal. Oh he’ll be fine. I made it up there.",1321,Jim
What’s going on?,1322,Jim
"Uh, no one really knows, but Pam’s parents are going through a little bit of a rough patch in their marriage.",1323,Jim
"Fifty percent of marriages end in divorce, so… it was her parents or my parents…",1324,Jim
I forgot if there was an “e” between the “l” and the “y.” I still don’t know.,1325,Jim
"About a week ago, Michael gave his 2-week notice. And, surprisingly there is a very big difference between Michael trying and Michael not trying.",1326,Jim
Charles is having Kevin cover the phones for a while. How do I say this diplomatically? I think Kevin is doing exactly as well as anyone might have expected someone like him to perform in a position like that.,1327,Jim
"I’ve never been a kiss up. I – it’s just not how I operate. I mean, I’ve always subscribed to the idea that if you really want to impress your boss, you go in there and you do mediocre work. Half-heartedly.",1328,Jim
"Yep, I used to play soccer in school. From second to fourth grade. I was on the orange team.",1329,Jim
"The new receptionist is also named Kelly. So Kelly Kapoor has decided to hover around my desk, so that she can run into his Charles’ office every time he calls for Kelly. She thinks if she says “You wanted me” enough, he will in fact want her. It’s not the worse plan she’s ever had.",1330,Jim
What the hell’s a rundown?,1331,Jim
Just faxing. My Dad. A rundown.,1332,Jim
"I was going to use today to purge my inbox, but now something much more pressing has come up.",1333,Jim
...,1334,Jim
I’m just hiding out until all this stuff blows over. With Creed. Playing chess. At work. He’s winning. I feel like I’m describing a dream I had.,1335,Jim
We should probably stop by. It’d mean a lot to him.,1336,Jim
"Michael had chicken potpie for lunch. Actually, let me rephrase that, Michael had an entire chicken pot pie for lunch, and- let me be more specific. Michael ate an entire family-sized chicken potpie for lunch and then he promptly fell asleep, so we’re all trying to be very quiet so as to not wake him up before 5:00 pm. Which, actually, should be in about… ten minutes.",1337,Jim
"Oh, Dwight, we’re so close! Just buy us a few more minutes… Well, they just called me in for an update, so I’ll call you right back… Okay… Okay, great. Hey, Dwight, uh… send in the subs! Ohh!",1338,Jim
"I didn’t tell Michael because I thought he’d try to help. Example, he handed out Jello shots at the 23rd mile of the Steamtown marathon.",1339,Jim
I tried to keep Michael in the dark. I should have known that he can do just as much damage in the dark.,1340,Jim
"I’ve been studying Michael for years, and I’ve condensed what I’ve learned into this chart– How Michael spends his time. As you can see, we have procrastinating and distracting others, and this tiny sliver here is critical thinking. I made it bigger, so that you could see it.",1341,Jim
"Niagara Falls used to be, like, a spiritual experience for people. They stayed in tents and it blew their minds. It’s really kitchy now, which is a lot of fun.",1342,Jim
I may have told some people that. I’m nervous. I’m about to get married.,1343,Jim
"I bought those boat tickets the day I saw that You Tube video. I knew we’d need a back-up plan. The boat was actually Plan C. The church was Plan B and Plan A was marrying her a long, long time ago. Pretty much the day I met her.",1344,Jim
...,1345,Jim
"We are doing a haunted house this Halloween. Which is actually kinda spooky because, as legend has it, on this very site there used to be a productive paper company.",1346,Jim
"Sure. Michael’s a good teacher. A teacher is someone who stands right next to you your whole life and never lets you do anything. That’s what a teacher is, right?",1347,Jim
He’s trying to micro-co-manage me… or co-micro… manage… me.,1348,Jim
"Truthfully, it wasn’t the way he fell in. It was… how long it took him to get out.",1349,Jim
"I should’ve grabbed you. I’m sorry. Look, I thought I could’ve done today’s sales call alone. I mean, I may never be as good a salesman as you are, but I at least need the chance to do the job.",1350,Jim
"Once a year Dwight holds a seminar updating us on the newest developments in the world of karate… because as we all know, the one thing thousand year martial arts do all the time is change.",1351,Jim
"Sure I’m a little nervous, but doing our work will make us feel better. I only slack off when things are good.",1352,Jim
"Co-managing is a give and take. You have to pick your battles. One of the battles that I picked was to stop Michael from running plastic tubes all over the office and placing hamsters inside of them. He was going to call it Tube City. So, yes, I do owe him one.",1353,Jim
"I think today was a good day to have two managers. ‘Cause if you’re a family stuck on a lifeboat in the middle of the ocean, one parent might want to just keep rowing. But if the other parent wants to play a game, it’s not because they’re crazy. It’s because they’re doing it for the kids. And I get that now.",1354,Jim
"Andy revealed himself to be a double agent. At which point Dwight felt comfortable revealing that he also was double agent. And then Michael announced to everybody that – get this- he was a double agent. Oh, and it is 6:00.",1355,Jim
"Five years ago, corporate said we had to start a recycling program for Earth Day so Dwight took the lead on that and introduced us to a very close friend of his named Recyclops.",1356,Jim
The next year he really stepped things up.,1357,Jim
A year after that Recylcops really began to take shape.,1358,Jim
Then tragedy struck Recyclops when his fictional planet was attacked by some other fictitious thing… I can’t remember.,1359,Jim
I think this was also the year he renounced Earth Day and vowed to the destroy the planet he once loved.,1360,Jim
"So you’ve been shown a nonsensical video. You’re probably wondering, “What’s going on?” Well, you’re not alone.",1361,Jim
"I don’t think I’m gonna miss being manager. You know how some people say they’re not in it for the money? Well, with all due respect to this job, I think I’m definitely in it for the money. And quite honestly, the women.",1362,Jim
"So, the plan was seven minutes. But we’re calling an audible, because that’s her call. Because she’s the quarterback. I’m just the left tackle who happened to get her pregnant.",1363,Jim
"I know Pam better than anyone in this office, and obviously she’s gone crazy, but everybody wants to say that I’m crazy. But I’m not crazy, she’s crazy. I’m not crazy, she’s crazy. Five to seven minutes. Five to seven minutes. Six minutes. Different, but not really. Five to seven minutes.",1364,Jim
I am a diapering master. I have done little else in the past two months. There is nothing I cannot diaper. Go ahead. Try to think of something. I dare you.,1365,Jim
"No, I know I need to work, I just- I feel weird not being home.",1366,Jim
I am not surprised that Dwight’s using my baby to steal my desk. I’m a little surprised that it’s working.,1367,Jim
Having a baby is as exhausting as they say it is. Having two babies – that’s just unfair.,1368,Jim
"I gotta tell you, this baby is amazing. She gets me out of everything. And I – and I love her. I also love her, very much.",1369,Jim
"What happened to me this summer? Dwight bought the building, so actually, this has been the busiest summer of my life.",1370,Jim
It’s like The Hurt Locker!,1371,Jim
Meredith was the perfect choice to play the head of the company. Her lunch break lined up with our appointment with Danny and…that’s it. That’s really all we were looking for.,1372,Jim
"Stanley just drank OJ out of my mug, and didn’t seem to realize that it wasn’t his hot coffee. So the question has to be asked, is there no limit to what he won’t notice?",1373,Jim
"I’ve never really been a costume guy. Even when I was a kid, it just felt like something I was too old for. And then this morning, when Pam hands me this little number …no.",1374,Jim
Madge from the warehouse just made her first sale. Madge. We should have been doing this a long time ago.,1375,Jim
"To be honest, I still can’t believe he didn’t call her back. Who doesn’t call a dork like that back?",1376,Jim
"Okay. Okay. There’s my girl. All right. Hold on one second. There we go. What’s that face for? Oh, my-oh, my God. Cece, no. No, no, no, not on the dress! Cece, stop!",1377,Jim
"Okay, “A,” Halbert. And, “B,” I think a more appropriate statement would be, “The ‘Halberts’ are hosting an intimate reception for their invited guests.”",1378,Jim
"Some events are so news worthy, so historic, that you have to stop everything to watch. Balloon Boy, Michael Jackson’s funeral. Things that if you didn’t see them live, you wouldn’t really care that you didn’t see them at all.",1379,Jim
"All right, Thank you, I will–I will send the contracts over right away. All Right. Whoo!",1380,Jim
"I am on the first hot sale streak of my life. I think it all comes from feeding Cece, because no matter how much she resists, I sell her those carrots. Let’s be honest–if I can make mushed carrots seem better than a boob… I can pretty much sell anything.",1381,Jim
"Well, since I have no incentive to sell, I’ve cleaned my car, organized my desk, and taken a multivitamin. So… what now?",1382,Jim
"Around here, Oscar is known as ‘actually’ because he will insert himself into just about any conversation to add facts, or correct grammar. He really does fit that old stereotype of the smug gay Mexican.",1383,Jim
...,1384,Jim
"Um, I was laying on the ground, defenseless, and uh, he just kept throwing ’em until he exhausted himself. And, uh, then… “How ’bout icing it? lol. Dwight.”",1385,Jim
I just want it to stop.,1386,Jim
"Yup, I do make great Christmas gifts. But I couldn’t make that.",1387,Jim
I mean…,1388,Jim
I just want to make a point to that last caller. I disagree. I don’t think it is the running game at all. I think we do have to make a few moves in this off-season.,1389,Jim
I did not love the dialogue. Or the character. I took the role to impress a receptionist who will remain nameless.,1390,Jim
"I’m sorry, that just wasn’t interesting to me.",1391,Jim
So you guys are filming people when they go to the bathroom now?,1392,Jim
"There is no inner circle. Deangelo just prefers to delegate a few things, to a few guys.",1393,Jim
So this is my life. Until I win the lottery . Or Pam finally writes that series of young adult books.,1394,Jim
Now what?,1395,Jim
"So as it turns out, unless you’re a young child or a prison inmate, you don’t need anyone supervising you. People just come in and do their work on their schedule. Imagine that – people like us allowed to sell paper. Unsupervised. And yet, somehow it works. It must be because the stakes are so high.",1396,Jim
"If I had thought that there was a real chance that Dwight would be permanent manager, I would have pre-quit. And you might be saying to yourself, “Well that’s pretty premature to think,” but I always say, it’s better to be pre-pre-preprepared.",1397,Jim
He never called a meeting.,1398,Jim
"We are the Search Committee, hand-picked by our CEO, and tasked to find this branch’s new manager. Not everyone we meet will be good, but someone’s bound to be, right? And, to be honest, I think a lot of the decent candidates are right here in-house, so, I’m not too worried. But I’m really excited to spend a lot of time with Toby and Gabe. Did you know that Gabe’s last name was Lewis? I had no idea.",1399,Jim
"He creeps me out. But, I think he might be a genius.",1400,Jim
"The Search Committee finally decided, after a lot of deliberation, on Robert California… for the manager position. Who took one look around and left.  He drove down to Florida and convinced Joe to make him CEO… CEO… her own job. He talked her out of her own job. And I don’t really know how someone does that. But, anyway, then the position was his to fill.   And he chose…",1401,Jim
"The new CEO works out of the conference room about half the time. But whenever he takes a break, he does these weird walks around the office. And you never know who he’s gonna zero in on for these really intense small-talks. You just hope it’s not you. And yet, you hope it is you too. It’s strange.",1402,Jim
"There’s this thing that people tend to do with billboards. How do I put this? If there’s an opportunity for a graffiti artist to work in a… phallic shape, interacting with the artwork, it’ll happen, and Andy gave them that opportunity.",1403,Jim
I’m actually really disappointed in how poorly my book is doing. I’ve only sold one copy.,1404,Jim
"Chapter 2 – Announcing guests as they enter is the height of decorum. The more volume displayed, the more honor is bestowed upon everyone present.",1405,Jim
Chapter 4 – One of the host’s most important duties is as Dance Master. A proper courtly dance sets the tone for the entire afternoon.,1406,Jim
"Chapter 9 – The tableau vivant is not only welcomed, but expected entertainment at any garden party.",1407,Jim
"I know, I know, I know. But Darryl and Kevin needed a third. They bought me this jersey. I said no. Kevin started crying. So, I am Chris Bosh.",1408,Jim
No! My wife does not believe in ghosts.,1409,Jim
"I have never played squash. But I have seen it in countless 80’s movies and it seems like the most common mistake is that you serve too hard and hit yourself right in the squash balls. So, as long as I don’t do that, I think I’ll be alright.",1410,Jim
"No, I’m not going to tell my nine-months-pregnant wife that I find her replacement objectively attractive. Just like I’m not going to tell my two-year-old daughter that violent video games are objectively more fun. It’s true, but it doesn’t help anybody.",1411,Jim
"Mike Tibbets is like the most boring-looking guy I know. So if that was for the matchmaker test, I think I’m in the clear. If that wasn’t for the matchmaker test, then… Cathy, he’s a really nice guy.",1412,Jim
"No, I’m not worried. Because this lie isn’t for me, it’s for Pam. And when she gets her body back and her confidence back… yes, I will tell her the truth. That I had feelings for a co-worker today that I haven’t had in years. But in my defense, he was grabbing my crotch fairly aggressively at the time.",1413,Jim
"I’m excited, I’ve actually never been to Gettysburg. Uh, my family was gonna go once, but then my brothers convinced me if was full of dead soldier zombies, so I freaked out and we turned the car around. But I’m older now, I can outrun a zombie.",1414,Jim
"No, I don’t think we should be trying to make this place seem unpleasant. I think we should let this place just crush her spirit by itself. I mean, it knows what it’s doing.",1415,Jim
"Oh wait, wait, wait! Hold on, hold on. I just need to get through. Just real quick. Real quick, open… uh, okay.",1416,Jim
This whole thing is making me very uncomfortable. I’m not getting between the boss and his wife so just ask me about something else. You know Stanley’s tie is really the story of the day…,1417,Jim
I got Stanley tickets to see Lewis Black for his birthday. …Might not have been the best idea.,1418,Jim
Ah… I’m gonna s-,1419,Jim
"Dwight really wants my bonus. He’s trying to entrap me. Oh god, now I can’t drink at this thing….I get really pranky when I drink.",1420,Jim
"Uh, yeah. I just got my replacement credit card…you want the number? Oh it’s uh four seven nine three, zero zero three two, three three one three. The security code is nine two seven. OK great. Thank you very much. Bye.",1421,Jim
"So Dwight did take the bait. He used my credit card numbers to send a two hundred dollar bouquet of flowers, to my wife…from me.",1422,Jim
"Oh man, I was supposed to tell Dwight something……C’mon, Jim. I got nothin’.",1423,Jim
"It’s always more fun to mess with Dwight with an audience. That was usually Pam so now that she’s out I had to find someone else. Turns out that Stanley is quite the comedy fan. But not everything makes him laugh. He has very specific tastes. Through a painstaking process of trial and error, I’ve found out what he likes. And it’s really weird.",1424,Jim
"You’re looking at the master of leaving parties early. They key is, you have to make a strong impression, so you want to have a picture taken, you want to say some peculiar non sequitur that people remember, you want to note something unique, a talking point, for later. I don’t mean to brag, but New Year’s Eve, I was home by nine.",1425,Jim
"I did get called in to jury duty. And they released me around noon, so, didn’t think it was worth it to come back to work for a half day. And then the next morning Pam was a little overwhelmed with the kids so I took an extra day to help out. And then three other days happened.",1426,Jim
I never considered that my week off would make everyone else’s job harder. The least I could do is give them a good story.,1427,Jim
You want a giraffe?,1428,Jim
"I would love for everyone to just forgive me. But, if that’s not happening, I’m not averse to just buying them all off.",1429,Jim
"I’ve spent so much of my life telling myself “Please, don’t end up like Stanley,” and now I’m wondering if I even have what it takes.",1430,Jim
"This is the last time I’ll ever see Dwight. It’s a weird feeling, it’s, um, what’s the word? It’s not, it’s not bittersweet. It’s uh… sweet. Yeah.",1431,Jim
"Well, I tried. You saw it, so, it’s on the record. I have a plane to catch.",1432,Jim
What is going on? And where’s Andy? And what is going on?,1433,Jim
"I think it’s a cross between Dumbo and Jumbo, with a hint of chubby. It’s not a name.",1434,Jim
"I’m sorry, we’re taking work time to move someone’s personal belongings into their new apartment.",1435,Jim
Why is she here?,1436,Jim
"Phyllis says the same twelve clichés every time it rains. So, I promised everyone that if she says them all by noon today, I will send out for hot chocolates.",1437,Jim
"Uh, Ryan can never know.",1438,Jim
"Last week, I may have gone too far. I’ll explain it quickly. Basically, I found out where he gets his clothes dry-cleaned. Custom ordered the same suit, made with tear-away Velcro. And… you can fill in the rest.",1439,Jim
Now he’s trying to get me to bring my children in to work. I think it’s fair to be cautious.,1440,Jim
"No, Pete is not the new Jim. The only we have in common is that neither of us wants to sit on Meredith’s face. And if that makes him the new Jim, then every human being in the world is the new Jim.",1441,Jim
I have nothing in common with Plop.,1442,Jim
"Oh, come on, Pete! God, that’s just sad. If he doesn’t watch himself, he’s gonna be here for years, doing nothing. Wow, maybe Pete is the new Jim.",1443,Jim
"Hey, man. It’s halpert. Did you go to the other guy yet? Great, don’t. I’m in. Yeah, yep, I’m all in. Ok, talk to you soon. Bye. Yeah!",1444,Jim
"I started a new business with my college friend. But, Pam doesn’t know. Um… actually I did tell Pam and we decided ‘no’. But, then I decided ‘yes’ anyway. So, I’m thinking there’s another conversation coming. And, it’s hard to know when that will be.",1445,Jim
"Right. And did you show them the market? Yeah. And what’d they say? That’s awesome! That, oh my god! Wow!",1446,Jim
It’s not even real yet. And I’m not gonna tell her ’til it’s real.,1447,Jim
"Pam always says I look like Nixon. That’s crazy, right? I mean there’s nothing there. True— Oh no.",1448,Jim
I don’t know what I was so worried about. I have the best wife in the world.,1449,Jim
"Last week, I finally told Pam about the other job I took in Philly…the side job. And she was so incredibly cool about it. And now I just wanna do something huge for her. Like if we were in some biker bar and she mouthed off to some bikers and they came lumbering over and I was like wham! Gotta go through me first.",1450,Jim
"I have this conference call today with this company in Philly that I’m helping start. Ah, first board meeting. Also, the first time I’ve ever been excited about work. So, that feels… wrong.",1451,Jim
"I am leaving early today for Philly, because tomorrow is the first day of my new job. So I figure I’d get in at 5:00, check into a hotel at about 6:00 so I can get a real good night of restless sleep and nervous puking.",1452,Jim
I bit my lip at lunch today.,1453,Jim
Now I have this big bump in my lip that hurts. I hate it.,1454,Jim
"Whatever. It’s not a big deal. You know I always tell my three year old, if this is the worst thing that’s gonna happen… You gotta be kidding me! Ok! Pam! That’s it, I’m going home!",1455,Jim
"I am meeting Dr. J today, otherwise known as Julius Irving, famed 76er and my own personal hero. But i have to be careful not to rub it in Pam’s face because let’s be honest, how would I feel if I was at home stuck with the kids while she was go carting with John Stamos.",1456,Jim
"Things are a little delicate with me and Pam right now. And if my working in Philly is gonna end up doubling the Dwight in her life, that’s only gonna make things worse.",1457,Jim
"Last week, my company in Philly lost a big investor, so we’re scrambling to find new funding. Luckily, my partners have a fix – me asking the boss of the company I’m abandoning to give us a gigantic influx of cash. So… problem solved. Thanks, guys.",1458,Jim
"No, it does matter who ends up sitting next to Pam when I’m gone. The people around you are basically who you end up spending your life with. I mean, because of where my desk was, I spent all those years looking at Pam, and I fell in love. So, that stuff matters. Definitely does.",1459,Jim
"Wow. This whole Philly thing has been so much fun that I may have lost sight of what really matters. I mean, having fun is not nearly as important as being good to the people who you really care about. I mean, that’s just ‘Roommates 101’.",1460,Jim
"I’m very excited to see Brian. Brian’s a great guy. And Pam and I have gotten really close to he and his wife, Alyssa over the years. And he got fired for protecting my wife from a jerk in the warehouse. I’m sorry, but you know him. He’s a good guy.",1461,Jim
"If I didn’t do certain things without telling Pam, she’d be married to Roy.",1462,Jim
"Well, if Pam says she won’t go, then— we’re gonna need a lot more than counseling. Hmph.",1463,Jim
"Don’t get me wrong, I am definitely here for Pam. But this is an awesome added bonus.",1464,Jim
"The guys at Athlead are still bugging me about this three month roadshow thing. Meeting athletes on their home turf, building relationships. Yeah, it sounds exciting. But I said no, and that’s final. I almost lost Pam over this business. I’m not risking that again.",1465,Jim
"By 2:00, Dwight will chose himself to be assistant to his own assistant, me.",1466,Jim
Thank you.,1467,Jim
"Jim said mixed berries? Well, yeah, he’s on to me. Um…",1468,Pam
Roy’s my fiance. We’ve been engaged about three years. We were supposed to get married in September but I think we’re gonna get married in the spring.,1469,Pam
"It would’ve been just as easy for him to spell insect. Of course, that wouldn’t have made any sense either.",1470,Pam
"Yeah, um, there’s good things about Michael. He uh, uh… Yeah, definitely. Um…",1471,Pam
This was tough. I suggested we flip a coin. But Angela said she doesn’t like to gamble. Of course by saying that she was gambling that I wouldn’t smack her.,1472,Pam
"My fiance has plans for us this Saturday. So I really hope that Dwight doesn’t make me work. Maybe I should sleep with him? I’m kidding, kidding. Totally kidding.",1473,Pam
"No, no, I know that the warranty’s expired, but isn’t it supposed to last longer than two years if it isn’t defective? OK, fine, three years.",1474,Pam
"It’s nice having Katy around. It’s another person for Michael to um, interact with.",1475,Pam
Jim is a great guy. He’s like a brother to me. We’re like best friends in the office and I really hope he finds someone.,1476,Pam
"You know what they say about a car wreck, where it’s so awful you can’t look away? The Dundies are like a car wreck that you want to look away, but you have to stare at it because your boss is making you.",1477,Pam
Michael has taped,1478,Pam
Can I get a drink?,1479,Pam
My Mom is coming in to visit. And she lives like two hours away. And she doesn’t have a cell phone… which is cool cause it’s kind of adding some suspense to my day. And I keep looking over at the door hoping she’ll walk in.,1480,Pam
Usually the day we talk about sexual harassment is the day that everyone harasses me as a joke.,1481,Pam
I love my Mom. Okay. That’s probably really the most obvious statement ever.,1482,Pam
He said what?,1483,Pam
"Every so often, Jim dies of boredom. I think today it was the expense reports that did him in. And our deal is that, it’s up to me to revive him.",1484,Pam
"The thing about Jim, is when he’s excited about something, like the Office Olympics, he gets really into it and he does a really great job. But the problem with Jim is that he works here, so that hardly ever happens.",1485,Pam
"Katy and Jim met in the office. And now I guess they’re like going out, or dating, or something. And, uh… I don’t know! You know? They’re just… She calls him, and they… You know, I’m sorry. I feel like I’m talking really loud. Am I talking really loud?",1486,Pam
"I forgot what a super, nice girl Katy is. And just… good for Jim! They are so cute together. And, um, what an adorable car.",1487,Pam
I’m guessing Angela’s the one in the neighborhood who gives the trick-or-treaters some toothbrushes. Pennies. Walnuts.,1488,Pam
"Dunder-Mifflin. This is Pam. Uh, yeah. Just one second. I will, uh, transfer you to our manager, Michael Scott.",1489,Pam
"Jim is really talented. And he should be the one who’s getting a better job offer. Like, for real.",1490,Pam
"Michael tends to procrastinate a bit whenever he has to do work. Umm, time cards, he has to sign these every Friday. Purchase orders have to be approved at the end of every month. And expense reports, all he has to do is initial these at the end of every quarter. But once a year, it all falls on the same Friday and that’s today. I call it the Perfect Storm.",1491,Pam
"Michael and his jeans. He gets in them, and I’m not exactly sure what happens. But I can tell you, he loves the way he looks in those jeans. I know that’s why he started casual Fridays.",1492,Pam
I’ll take those. Thanks.,1493,Pam
"Here’s what we think happened. Michael’s sidekick, who all through the movie is this complete idiot who’s causing the downfall of the United States, was originally named Dwight. But then Michael changed it to Samuel L. Chang using a search and replace, but that doesn’t work on misspelled words, leaving behind one Dwigt. And Dwight figured it out. Oops.",1494,Pam
"It’s performance review day, company-wide. Last year, my performance review started with Michael asking me what my hopes and dreams were, and it ended with him telling me he could bench-press 190 pounds. So, I don’t really know what to expect.",1495,Pam
It’s like squishing a spider under a book. It’s gonna be really gross but I have to look and make sure that it’s really dead. Sooo… If you guys see anything… ?,1496,Pam
What? Ohhhh… Yes! Thank you!,1497,Pam
"Just because two people are hanging out, it doesn’t mean that they’re together, you know? Like people can just be friends. And I think that it was really unfair to think that there was anything else going on.",1498,Pam
"Yeah, I think I made the right choice.",1499,Pam
"Oh God no, Dwight isn’t my friend… Oh my God! Dwight’s kind of my friend!",1500,Pam
"Roy and I just got back from the Poconos. I get ten vacation days a year, and I try to hold off taking them for as long as possible, and this year I got to the third week in January.",1501,Pam
Somebody did something bad to Michael’s carpet. Maybe that’s all we need to know.,1502,Pam
"Hey, guess what? I moved my computer so I can’t see Michael’s head. It’s working. I think I can have a career as a very specific type of decorator.",1503,Pam
"Sudoku. Level moderate. 18 minutes. Suck on that, Halpert.",1504,Pam
"I’ll transfer you. Dunder Mifflin, this is Pam. Hold, please. Dunder Mifflin, this is … okay, sorry. Michael was standing at my desk, and I needed to be busy or who knows what would’ve happened, so thank you.",1505,Pam
"Hey, what’s that word we made up when you have a thing stuck in your shoe? Anyway, I have a thing stuck in my shoe.",1506,Pam
"Hey, I have a chance to sneak out of here early, and I’m not messing this up, so I’ll see you tomorrow.",1507,Pam
"Calling from my cell phone. I don’t know if you guys figured out who did that to Michael’s carpet yet, but I have a theory that involves an inter-departmental conspiracy. Everybody in the office. We need to talk.",1508,Pam
Today’s a ‘women in the workplace’ thing. Jan’s coming in from Corporate to talk to all the women about… um… I don’t really know what. But Michael’s not allowed in. She said that about five times.,1509,Pam
I don’t know how I fit in with these women. Here. Or with Jan. Um… I mean we get along great. Fine. Um… I guess the person I have the most in common with is…,1510,Pam
Dreams are just that. They’re dreams. They help get you through the day. Like the thing about the terrace. It’s nice but… um… I don’t know. It was just something I read in this book when I was twelve. The girl in the book has a terrace outside of her bedroom and she planted flowers on it and I just loved that. Just always kind of stuck with me.,1511,Pam
"It’s impractical. I’m not going to try to get a house like that. Um… they don’t even make houses like that in Scranton. So, I’m never going to… .",1512,Pam
"Roy and I are saving for the wedding, so I made him promise not to get me anything too big.",1513,Pam
Michael’s got a few tricks for Valentine’s Day. He found a place where you can get 12 plastic roses for $10 and he’s got a great line. “Me so thorny.”,1514,Pam
I have a ton of stuff to do for the wedding. And I have to do it in the office. And that can be kind of awkward. Um… just because people can get all weird about wedding stuff. Then… I just… I don’t want to offend… Angela… or someone.,1515,Pam
I only have one goal today. To make one kid like me. Just one.,1516,Pam
"If I knew I had a week to live, I would… probably go to Europe. And South America. And the Grand Canyon. And… I would want to see the Pacific Ocean. …It would be a pretty busy week.",1517,Pam
Michael’s birthday was actually pretty cool. It was a good day. I don’t know… It was a good day.,1518,Pam
Wow! He really pulled out the big guns. Fake crying. Did not expect that.,1519,Pam
"What? Did you want to tell me something? You look like you want to tell me something. You look like you have something really important to say and you just can’t for some reason. Come on, you can tell me. Jim, you can tell me anything.",1520,Pam
"There are a few people I decided not to invite, and that might make things kind of awkward but … it’s my wedding. And I don’t want anyone there who has called me a hussy.",1521,Pam
I have this kind of big secret about Angela. And I’ve been really nice to her… and I haven’t told anyone. And what the hell?!,1522,Pam
I’m pretty happy these days. I’m getting married soon and I’m getting along with everybody at work.,1523,Pam
Jim is great. Being with him just takes away all the stress of planning my wedding.,1524,Pam
Sometimes I don’t put Michael through until he’s already said something. I look at it as a practice run for him. He usually does better on the second attempt.,1525,Pam
"About 10 minutes ago. No, I didn’t know what to say. Yes, I know. Um, I don’t know, mom, he’s my best friend. Yeah, he’s great. Yeah, I think I am. I have to go. I will. Listen, Jim…",1526,Pam
"Apparently Michael has come up with a Dunder Mifflin Mad Lib, and he’s making us play it with him. We are so happy. No. I’d like to choose a different adjective.",1527,Pam
"Yeah, I didn’t go through with the wedding. I got cold feet, a few days before. And I can’t really explain it. I just had to get out of that relationship. We still had to pay for all the food. So we froze it. But I’m, I’m doing well. I have my own apartment. I’m taking art classes. And I have lunch for the next five weeks.",1528,Pam
What do I think? I think everybody should stay out of everybody’s personal business!,1529,Pam
"Yes, I have a date. He’s a cartoonist for the local paper, which is really neat, because I like to draw too. I’m kind of nervous. I haven’t been on a first date in nine years… probably shouldn’t broadcast that.",1530,Pam
"I went on a date. It wasn’t a love connection, um… I think when I like someone again, I’ll just kinda know.",1531,Pam
"Movie Monday started with training videos, but we went through those pretty fast. Then we watched a medical video. Since then, it’s been half hour installments of various movies, with the exception of an episode of Entourage, which Michael made us watch six times.",1532,Pam
"Hey Kelly, my stuff just got here.",1533,Pam
"Kelly really likes to online shop. Soooo, I felt like I wanted some new clothes. I mean, I just, I wanted to, it just, I felt like it was time, to maybe um… just get new clothes.",1534,Pam
"I have this little vacuum cleaner that’s broken. If Dwight doesn’t work out, maybe that could be manager.",1535,Pam
"Well, I remember why I dress the way I do at work. But I’m gonna keep the clothes. I mean, it’ll be cool to just have some after work clothes that aren’t pajamas.",1536,Pam
"I may have a few weeks ago faked a call from Jan in order to get out of a synopsis of, I think it was, Navy: NCIS. Since then, Michael’s been suspicious.",1537,Pam
Did I wake up this morning thinking I’d be throwing together a bird funeral? You never can tell what your day here is gonna turn into.,1538,Pam
"Michael once told me that Home Alone is the saddest movie ever. When I asked him why, he said, “Because the whole family forgets the kid at home. There is nothing funny about that.”",1539,Pam
"It’s weird. Jan use to treat Michael like he was a ten year old, but lately it’s like he’s five.",1540,Pam
Once a year they bring in a little cart and they give away free pretzels. It’s really not a big deal. To some people it is.,1541,Pam
"Dunder Mifflin, this is Pam. Oh, hi Jan. He’s, uh, on a sales call. No message? Bye, Jan.",1542,Pam
It’s like mommy and daddy are fighting. Except mommy outranks daddy and mommy is way scarier.,1543,Pam
"Dwight is taking Ryan on a sales call today. So if we find Ryan’s body in a heavily-wooded area tomorrow, I owe Jim $30. It’s an old bet, but a deal’s a deal.",1544,Pam
Very official.,1545,Pam
"I decided to come. Uh… I feel a little under-dressed… but at least I’m not dressed like a slutty cheerleader, right? Is that mean?",1546,Pam
"It’s a blessing in disguise. Actually, not even in disguise. Sometimes at home, I answer the phone, “Dunder-Mifflin, this is Pam.” So, maybe that’ll stop now.",1547,Pam
"Maybe this is good. Finding another job is a pain. There’s another annoying boss, another desk, I’d have to learn everything all over again. So, there are reasons to stay.",1548,Pam
"Yes! I’m in a good mood today! I’m excited to meet all the new people and to see my old friend again, definitely. That’s always a thing that makes people happy… to have an old friend back.",1549,Pam
"The day’s going fine. It’s been a little chaotic but it’s fine. It’s great! A lot of distractions. But, it’s good.",1550,Pam
Wow. That was… wow.,1551,Pam
"I feel like I’ve been kinda cold to Karen and there’s no real reason for it. I mean it’s not like she’s ever done anything to me. So, I think I probably shouldn’t be cold to her.",1552,Pam
"No, I didn’t mind helping Jim with his problem. That’s what friends do. I help Phyllis all the time. Just yesterday, I untangled a piece of tape from her hair. So, yeah.",1553,Pam
"Michael sends me a postcard from every vacation he goes on. Atlantic City, he wishes I was here. Busch Gardens, Virginia, all I got was this lousy postcard. And this time, I’m Jamaican-him-crazy. I don’t know how far away he thought he was, because he put $10 worth of stamps on this.",1554,Pam
Michael and Jan together in Jamaica. I guess I would just need a little bit more evidence than seeing it with my own eyes.,1555,Pam
"Yes, it is The Island Luau Inventory ’07. It’s actually a success compared to Disco Audit ’05.",1556,Pam
"Something’s up with Jim and Karen. Not that I’ve been eavesdropping. It’s not really any of my business, but I’ve gotten pretty good at reading the back of Jim’s neck.",1557,Pam
"Phyllis… ended up using the exact same invitations as Roy and me. So it was kind of like being invited to my own wedding. And I was like ‘Wait, thought I called that off’.",1558,Pam
"Also, Pam and Roy.",1559,Pam
I’m really happy to be back with Roy. I think it shows maturity. Maturity and dignity. … Is that braggy? I don’t mean it to be braggy.,1560,Pam
"I have decided that I’m going to be more honest. I’m going to tell people what I want. Directly. So, look out world, cause ol’ Pammy is getting what she wants. And, don’t call me Pammy.",1561,Pam
"I really don’t want to talk about it. I don’t mean to be rude, but I just… I don’t want to comment on what happened. It",1562,Pam
It’s been a really rough couple of days… This helps a little.,1563,Pam
"I don’t know how the whole betting thing started, but it’s fun.",1564,Pam
Michael likes me to run the camera when he makes his apology videos. He says he needs a woman’s touch.,1565,Pam
Michael likes me to run the camera when he makes his apology videos. My favorite is the one for his mother.,1566,Pam
My personal favorite is the one he made for his condo association.,1567,Pam
"I don’t often miss Roy. But I can tell you one thing. I wish someone had flashed me when I was with Roy. Because that would have been the ass-kicking of the year. Especially if it had been Jim. He would not have wanted me to have seen Jim’s… Whoo, I am… I am saying a lot of things.",1568,Pam
I’m kind of in-between boyfriends right now. So I don’t need anything sexy. But I do need some new hand towels. I figure I can cut up this robe.,1569,Pam
"You know, I changed a tire today. All by myself. This bathrobe’s already coming in handy. Coming!",1570,Pam
"It is totally inappropriate, but on the other hand…",1571,Pam
"About 40 times a year, Michael gets really sick, but has no symptoms. Dwight is always gravely concerned.",1572,Pam
"I have the most boring job in the office, so… why wouldn’t I have the most boring job on beach day?",1573,Pam
"Oooh, uh hah, ooh! Wha-hoo! Ahhhh…",1574,Pam
"Sometimes Michael gets nostalgic and he talks about the classic gang. That’s Michael, me, Jim, Dwight, Angela, Kevin, Oscar, Stanley, Phyllis, Creed, Meredith, Kelly and Ryan. We’re a regular Ocean’s Eleven.",1575,Pam
"After I had my little outburst at the beach, Jim was really nice about it. He just basically said that he missed my friendship too and I would always mean a lot to him and I understand where he’s coming from. For the record, I am not embarassed at all. It needed to be said, and I said it, and it only took me three years to summons the courage, so thank you.",1576,Pam
"No, it’s fine. I’m sure it must have been weird for Jim when Roy and I were joking around… that",1577,Pam
"I’m happy for him. I hope he gets the job. I really just want him to be happy. And I know that sounds cliche. And I know saying it sounds cliche, sounds cliche… Maybe I’m being cliche. I don’t care. Cause I am what I am. That’s Popeye.",1578,Pam
"I learned from Jim, if Dwight ever asks you to accept something secret… you reply, “Absolutely, I do.”",1579,Pam
I literally cannot wait to see what Dwight has planned. And I wish Jim were here.,1580,Pam
"No, I don’t know what the future holds, but… I’m optimistic. And, uh, I had fun goofing around with Dwight today. Jim and I… are just… too similar. Maybe one day I’ll find my own Karen. But— you— that is, a, um, you know, not— A man. A man version. But, uh, until then… I can hold my head up. … I’m not gay.",1581,Pam
"Dunder Mifflin, this is Pam. Just one moment, I’ll transfer you.",1582,Pam
Kelly made me realize something. She and I have… nothing in common. And I need more friends.,1583,Pam
Jim and I went to dinner a few times when he got back from New York. I talked him through his break up. It’s really nice to be good friends again.,1584,Pam
They say if you’re nervous around someone you should picture them naked. I do not recommend this strategy. Try picturing them with more clothes on… or a funny coat.,1585,Pam
"I saw it. I saw it, and it was amazing! Who said I didn’t see it? Did Jim say that I didn’t see it? I saw it!",1586,Pam
Dwight mercy killed Angela’s cat. It’s very complicated. It’s caused a lot of unpleasantness between Dwight and Angela. Who are both already prone to unpleasantness.,1587,Pam
"Michael just rented The Devil Wears Prada. He has his NetFlix sent here to the office, and he watches them in pieces when things are slow.",1588,Pam
"He’s a big Meryl Streep fan, so I shouldn’t be surprised that he’s identified with her character.",1589,Pam
Mo Chuisle. He’s watching Million Dollar Baby… He’s gonna try to kill me.,1590,Pam
Oh my God. What century is this?,1591,Pam
"Now that I think about it, Angela and Andy might actually make a good couple. But I couldn’t do that to Dwight… or Angela… or Andy.",1592,Pam
"Man, Angela really had a hold on him. Angela.",1593,Pam
Dwight.,1594,Pam
Jim’s just really passionate about Italian food.,1595,Pam
"I worked until about 2:45 AM. And then I had to decide if I wanted to spend the night with Michael editing in his office, and Dwight watching Michael edit in his office, or drive home and probably fall asleep at the wheel and die in a fiery car wreck. I passed out on my keyboard trying to decide.",1596,Pam
"Oscar, Toby, and I are founding members of the Finer Things Club. We meet once a month to discuss books and art, celebrate culture in a very civilized way. Sometimes the debate can get heated, but we’re always respectful. There is no paper, no plastic, and no work talk allowed. It’s very exclusive.",1597,Pam
"I’m kidding around. We joke about that stuff all the time. I’m not really the jealous type, so, I don’t care if Jim sees Karen. I care a little.",1598,Pam
Ryan invited some of the branch managers and Toby into the woods for a “get to know you” weekend. Michael wasn’t invited. Apparently they already knew everything they needed to know about him.,1599,Pam
"Here’s the thing. When Michael invents a hypothetical situation, he eventually turns it into an actual situation.",1600,Pam
"I don’t care what they say, I just want to eat. Which I realize is a lot to ask for… at a dinner party.",1601,Pam
I know Jan didn’t poison the food. I know that. But if she was going to poison the food of someone at that table wouldn’t it be me? Michael’s former lover?,1602,Pam
One night…,1603,Pam
"Michael started the process of selecting a new chair about three weeks ago. And normally I wouldn’t care, but he promised me his old one. It’s way better. It’s one of these. I really want it.",1604,Pam
"I’m setting Michael up with my land lady. She’s really sweet and… whatever, I just can’t take Michael like this.",1605,Pam
"There is a master key and a spare key for the office. Dwight has them both. When I asked, “What if you die Dwight, how will we get into the office?” He said, “If I’m dead, you guys have been dead for weeks.”",1606,Pam
"Um… yeah, I slept over at a, uh, friend’s house and, I forgot my contact solution, so… I had to wear my backup glasses… Shut up.",1607,Pam
"What’s it like without my glasses? Um, well, here, I’ll show you. Unfocus your lens. A lot. I’m 20/400. You got it? Okay, I’m gonna spend the rest of the day like this. I can’t see any of the things that would bother me on a normal day. I can’t see anything disgusting, or ugly, or Michael… it’s great.",1608,Pam
"Yeah, if I could have seen what he just did, I think I would have gotten angry.",1609,Pam
"So many memories in this old gym. Pretending I have PMS so I didn’t have to play volleyball, pretending I have PMS so I didn’t have to play basketball. Those were the days!",1610,Pam
"My old art room. Oh, maybe it’s still here! No. No they must have taken it down. Never mind.",1611,Pam
"I wouldn’t go if things weren’t so solid with Jim. And down the road, if we have a family, I couldn’t go then either. So, the timing’s perfect… And that is the first time I’ve ever used the word “perfect” in here!",1612,Pam
"Is Jim gonna propose tonight? He is, isn’t he? No, he’s not… Is he?",1613,Pam
"I’m gonna to miss Toby. He has a nice, calming presence in the office.",1614,Pam
"Don’t tell him I said this, but I always thought he was kinda cute.",1615,Pam
"Oh look, they’re starting.",1616,Pam
"I don’t know, I just, I really thought Jim was gonna propose tonight…",1617,Pam
"Tomorrow I start a three-month design program at the Pratt Institute in New York. I will be a little fish in the big apple. What up, 212?",1618,Pam
"New York is so exciting. I love my classes. The city’s awesome. Um, can you give me back to Jim now, please?",1619,Pam
"I’m not frustrated. Even if I were in Scranton, Jim and I would have days like this. We’re just… a little out of sync. You know, that’s all. Oh, great. I washed my lipstick.",1620,Pam
"New York, as it turns out, is very expensive, and I ran out of money. I thought about selling a kidney, but Michael offered to get me a part-time job at corporate.",1621,Pam
"Of course, now Michael knows where to reach me 16 to 18 hours a week.",1622,Pam
"So apparently no one dresses up for Halloween here. I wish I had known that before I used greasepaint for my moustache. And I can’t even take off my hat, because then I’m Hitler.",1623,Pam
"I asked Tom and Pete to come early so we could play a prank on Jim at lunch! Pretty awesome, right? I think they’re into the idea. They’re probably thinking, “That Pam Beasly, she’s the coolest sister-in-law on the planet. She’s the best! The absolute best.”",1624,Pam
They came up with that idea really fast.,1625,Pam
Jim? Jim?,1626,Pam
Na na na na na. Na na na na na na na.,1627,Pam
Right Dwight is loud.,1628,Pam
"Oh, come on! Do you see this? Disgusting.",1629,Pam
"So, I guess that’s how they’re gonna play this. It is on. It is so on.",1630,Pam
"Look, I really need this new chair. I mean, seriously, how is it possible that in five years I’ve had two engagement rings, and only one chair?",1631,Pam
"Angela made several 911 calls about cars going too fast in front of the building, so the police put up a radar gun. It’s actually caused a bit of a traffic hazard.",1632,Pam
My dad spent the night at our place last night. My parents have been fighting for weeks and… it kinda sucks. Jim’s been great. But I’m gonna need to buy my dad a robe.,1633,Pam
"Hi dad. Yeah Jim has shaving cream, check our bathroom.",1634,Pam
"Dunder Mifflin this is Pam. Oh, hey Mom. No, what did Dad say?",1635,Pam
What could Jim have said to make my dad want to leave my mom? And at what point in our marriage is he gonna say it to me?,1636,Pam
"Dunder Mifflin this is Pam. Uh, I’m sorry, Michael’s not here right now can I take a message? Great. I will. Thanks.",1637,Pam
"Hey Dad. No I know, Mom told me. Ok. Yeah I’ll see ya then.",1638,Pam
When you’re a kid you assume your parents are soul mates. My kids are gonna be right about that. I guess it also means that sometimes love affairs look different to the people inside them.,1639,Pam
"I hate the idea that someone out there hates me. I even hate thinking that Al-Qaeda hates me. I think if they got to know me, they wouldn’t hate me. But Karen knows me, and she still hates me, so…",1640,Pam
"Okay, uh, point at the Dunder Mifflin.",1641,Pam
"So, detour. We’re now adding Nashua to the Lecture Circuit so Michael can confront Holly and get some closure. Nashua actually sounded very excited on the phone. I don’t think they get a lot of visitors. Because their office is only accessible by cross-country skis. Hey-oh! I’ve been driving too long.",1642,Pam
"Okay, a little bit more closer to the sign. Yeah.",1643,Pam
"Blazer. Freckles. Penguin. K.D. Lang. Holly’s boyfriend. These mnemonic devices help to make a connection, and then, also to help you memorize names. I have a chainsaw! Cutting down the competition.",1644,Pam
Don’t look up. Don’t look up.,1645,Pam
"They have new phone systems now that can ring directly to a salesman, or someone presses star and they go to accounting, basically 95% of my job. But I’d like to see a machine that puts out candy for everyone. Vending machine.",1646,Pam
"Dunder Mifflin, this is Pam. Oh hi ,David. No, I’m sorry he’s not back from the Civil Rights rally. I’ll have him call you the minute he gets back from the Lincoln Memorial.",1647,Pam
"When Michael’s skirting a phone call, he gave me a list of places to say he is. ‘Stopping a fight in the parking lot. ‘ ‘An Obama fashion show. ‘ Whatever… that is. Or ‘trapped in an oil painting.’ I’m gonna save that one.",1648,Pam
He finally has a story everyone wants to hear… and he knows it.,1649,Pam
"During the course of business, a copier goes though something called ‘Normal wear and tear.’",1650,Pam
"Yesterday, they delivered the new one. But they didn’t set it up. So my day just got a little more interesting.",1651,Pam
"I’m at a crucial point where I have sunk 4 hours into that copier, and I am not going to let it beat me like that wireless router did.",1652,Pam
"I did it. I learned everything about this machine. I know all the buttons, even the inside ones. I know all the error messages. I could do a bound book, in plastic with offset colors. Which feels…",1653,Pam
"I make that one copy, and I become the girl who makes copies, and by the end of the day I’m receptionist again. And the worst part is, I like making copies. The paper comes out all warm and stuff. And it’s cold in there. Cause it’s technically a closet.",1654,Pam
I’m just gonna sit here for a little bit longer if that’s okay. The air smells so good. I don’t remember it smelling so good. The chairs are so comfortable.,1655,Pam
I’m here. I’m a part of this now.,1656,Pam
We got the van at a used car lot. We think it says “Alleluia Church of Scranton.” in Korean. It was either this or an old school bus with an owl living in it.,1657,Pam
"When a child gets behind the wheel of a car and runs into a tree, You don’t blame the child. He didn’t know any better. You blame the 30-year-old woman who got in the passenger seat and said, “Drive, kid. I trust you.”",1658,Pam
"If you don’t take out his battery, he just keeps going all day.",1659,Pam
Maybe I played a little in junior high… and in high school… maybe a little in college… and went to volleyball camp most summers.,1660,Pam
"This is the last day of our summer interns. It’s been nice. We haven’t had interns for a while, ever since Michael’s Monica Lewinsky incident. He didn’t do anything sexual. He just made far, far too many Monica Lewinsky jokes. It was just easier for corporate to shut down the program.",1661,Pam
It’s clear why we were trying not to tell people. That’s clear now.,1662,Pam
"We invited everyone in the office to our wedding. Even though we realized most people wouldn’t be able to make the drive to Niagara Falls. Which is why we’re having it in Niagara Falls. Then Michael told everyone they could have Friday and Monday off, if they came. So now, people have to decide if they want to come to our wedding or have to work.",1663,Pam
"It’s awkward asking people for money, but we could really use it. Why doesn’t Crate & Barrel let you register for a toaster full of cash?",1664,Pam
Is this what I’ve become? Materialistic? Shallow? I feel horrible. oh look! “Mrs. Pam Halpert!” That’s the first time I’ve seen it in writing!,1665,Pam
The guy has an algorithm to determine the winner of any given college basketball game.,1666,Pam
I don’t think I’m asking for too much. I guess it’s just the end of courtesy in the workplace.,1667,Pam
"Michael’s been trying to get Jim and me to hang out ever since he started dating my mom. I don’t know. I really hoped this thing would just die out, but today he’s planning a birthday lunch for my mom and we have to go. No way out. No way out.",1668,Pam
Why did I get in the car? I could of struggled. I have a whistle in my purse I didn’t even blow it.,1669,Pam
I forgot I have to support him no matter what. Close one.,1670,Pam
Yup.,1671,Pam
Oscar and the warehouse guy! Go Oscar! Go gay warehouse guy!,1672,Pam
Yes! They’re the only two gay guys I know. But they should be together.,1673,Pam
"It might seem crazy, but since there’s no one left in New York, Michael is Dunder Mifflin’s highest ranking employee. So, that’s where we are.",1674,Pam
"For the record? Not on board with fake Stanley… although, I get it.",1675,Pam
"There is no rush to get to the hospital. I am fine. I’ll get there. And if I don’t get there, I don’t get there.",1676,Pam
Julie laughs at everything.,1677,Pam
"It’s my first day back after maternity leave. And I miss Cece, of course. But we need the money. What was maternity leave like? Oh, how do I explain it?… It rocked. It rocked my ass off.",1678,Pam
"I’m not saying she’s in love with him. But she could have left a while ago. Most printer sales are done over the phone, Ms. Boob shirt.",1679,Pam
"So it turns out Donna and I have a facebook friend of a friend in common, so I was able to see some of her pictures online. This was taken two weeks ago. And this was taken the same night. This photo was taken this morning. It’s Cece. She’s never gonna do anything wrong.",1680,Pam
"I feel horrible for blowing Jim’s prank. I don’t know if you can tell, but he’s mildly upset. And Dwight hasn’t been messed with in a while, so he’s become a monster. I need to make this right.",1681,Pam
"The unfair thing about working in sales is that your salary is almost all commission. So, you suck at sales, you make almost no money. I guess that’s fair.",1682,Pam
There are a few ways to get promoted. One is to wait for an opening and apply for it. That’s the main way. But this could work.,1683,Pam
"Hey Michael, um… about three months ago, I was talking to…",1684,Pam
"There are a lot of one person departments here, so, there’s a lot of department heads. But I’m off to a good start. Oh, man! If I could pull this off, it will be scam of all scams. And yet very helpful to everyone.",1685,Pam
"The first lesson of watching World Poker Tour at 2:00 AM, you play the opponent. Not the cards.",1686,Pam
It’s just good to stop a Michael train of thought early before it derails and destroys the entire town.,1687,Pam
"People are really into the costume contest this year. Might have something to do with the prize, maybe you’ve heard of it. The 2011 Scranton Wilkes-Barre coupon book worth over fifteen thousand dollars in savings!",1688,Pam
Angela as the nurse!,1689,Pam
"Okay, everyone, I’ve tallied the votes, and the winner… of the costume celebration spectacular… and the Scranton Wilkes-Barre coupon book… Oscar Martinez.",1690,Pam
"Cece, is reverse cycling, which means she sleeps all day and is up all night. Which basically means I’m up all day and I’m up all night. And if it doesn’t stop soon, I am going to be up all night.",1691,Pam
"Yes, I invested in WUPHF. It’s actually a great idea and I can’t believe it didn’t exist before. And I know Ryan’s kind of a sketchy guy, but hey, I married Jim. I’ve done my part for the nice guy. Now I want a bedroom set.",1692,Pam
"I’m the office administrator now, which means I’m basically being paid to be head of the party planning committee. The first thing I did as head… I shut it down. At its best it was a toxic political club used to make others feel miserable and left out. At its best it planned parties.",1693,Pam
"I’ve been working forever on Jim’s present. He always gives me the best Christmas gifts. He’ll take a memory or a private joke, and he’ll create something totally unique. I love them. So this year I made him something. A comic book. It stars Jimmy Halpert, a mild-mannered paper Salesman who, while riding his bike through the forest, is bitten by a radioactive bear, becomes ‘bear man’. Wreaks havoc on the office. It’s really good.",1694,Pam
"Jada, Darryl, I’m so glad I found you guys. A grinch stole the star from on top of the Christmas tree and is hiding it in the warehouse somewhere. You want to go help me find him?",1695,Pam
"I recently met Sue, the office administrator at Vance Refrigeration. She has this awesome wall full of fun initiatives and morale boosters and stuff. Sue just goes for it, she’s awesome.",1696,Pam
Lesson learned.,1697,Pam
"I got Erin a new computer, because the one at reception sucked. I should know. And I don’t wanna say the other one was old, but its I.P. number is one! Right?",1698,Pam
I’m full on corrupt!,1699,Pam
"Dunder Mifflin is having our first own garage sale. Like many Americans, we realized we had a lot of things that we really didn’t need. And 10 cents of every dollar is going into the party fund so we can throw parties for ourselves.",1700,Pam
...,1701,Pam
"No he wasn’t sad. He was full of hope. About Colorado, and he was hoping to get an upgrade as an award’s member. And he said he was just real excited to get home and see Holly.",1702,Pam
"So one afternoon, while walking home from school, quirky 10th grader Becky Walters finds a wounded Pegasus in the woods. And she becomes…The Horse Flyer.",1703,Pam
We need a new manager.,1704,Pam
How is this on me?,1705,Pam
They’re the same picture.,1706,Pam
"Okay, I know I’ve been crying easily today, but- I mean, that’s just pretty killer, right? I mean, maybe it’s stupid. No. It’s wonderful. I’m gonna frame it. I can always unframe it.",1707,Pam
Let’s see. Andy has been manager for a hundred and five days. Which means I’ve heard ‘Closing Time’ a hundred and five times. Still don’t know the words. Tah wa Ta way hm hm home and home and home.,1708,Pam
I’m training a temp to be my replacement while I’m on maternity leave. Oh I should’ve mentioned I’m pregnant. You probably didn’t notice because it’s impossible to tell I’m so small. But yeah I’m pregnant. Oh come on!,1709,Pam
"The thing about pregnancy is people treat you differently. Like you’re a kid almost. They lose all sense of boundaries. They start acting weird, telling you things that clearly aren’t true. I know it sounds nuts, but I think Dwight is the only one who’s telling me the truth.",1710,Pam
Why was he making her laugh so much?,1711,Pam
"Yeah, its nuts. But I don’t know what else to do.",1712,Pam
"I know it’s wrong to fake going into labor just to get out of things, but sometimes it’s necessary.",1713,Pam
: I’m going into labor!,1714,Pam
"At this point, when you’re this pregnant, it’s kind of like senior spring. The other day I spit my gum out on the carpet.",1715,Pam
"There’s this balloon that has been floating in the rafters of the warehouse for, like, ever. And, okay, it’s not — it doesn’t sound cool. You just have to see it.",1716,Pam
"Well, I guess it doesn’t look that cool either. But, it’s been up there a long time, so it’s become a pretty big deal.",1717,Pam
"I’m sorry, we’re throwing a party for someone because they’re being horrible?",1718,Pam
I’m still not sure why this woman is even here.,1719,Pam
"I am not going to let Kelly throw her life away on Ryan. And it has nothing to do with access to my pediatrician. Why you would even ask or were going to ask, because I- I felt like that question was coming.",1720,Pam
"I’ve been through several rounds of development with the team and here’s where we stand with the chore wheel. We’ve got prizes! Ten bucks, candy bar, manager for an hour but, there are also penalties. Like, no internet, Stanley gets your lunch. The one thing that is not on the chore wheel is chores. But they were right; it’s more fun this way.",1721,Pam
The tiny wheel actually does have chores. It’s so cute no one seems to mind.,1722,Pam
Toilets!,1723,Pam
I think maybe there actually is something I don’t know about Jim.,1724,Pam
Jim’s at the dentist this morning. And Steve is an actor friend of ours.,1725,Pam
Nellie’s pretty fearless. And I think she might be maybe even almost sort of fun.,1726,Pam
Good. Good. And—,1727,Pam
I still can’t believe he didn’t tell me.,1728,Pam
"Ten years ago, I didn’t care if Dwight got married or died a beet-farming bachelor. But having kids makes you so soft. I used to watch Pulp Fiction and laugh, and now I’m like, that poor gimp is somebody’s child.",1729,Pam
"Jan used to be one of my superiors, and she is one of the most erratic and terrifying people I have ever met.",1730,Pam
"Jim and I are pretty sure she had an affair with her ex-assistant Hunter. He was 17. But she looks great. If she asks, will you tell her I said that?",1731,Pam
"Jim’s been spending a few days a week in Philly and I’m not gonna lie, it’s been challenging. Yesterday, things took a turn for the worse. I found out Cece has lice. So I was up all night disinfecting every sheet, towel, toy, item of clothing in the entire house. I’m exhausted. But don’t tell Jim. He has a huge meeting today, under a lot of pressure and he’s doing it all for the family.",1732,Pam
"I’m sure she’s just confused. People scratch their heads when they’re confused. Not always like an ape, the way Meredith just did, but it happens.",1733,Pam
"Maybe it was Meredith. Maybe she brought in lice that are totally different than the lice that i got from Cece. So let’s not jump to the simplest conclusion that she got her lice from me. That is how wars get started. Fine, I’ll tell her it was me.",1734,Pam
"I am going to tell her, but now is clearly not the time. I will buy her a wig, we’ll have a few laughs. There’s a right way to do this.",1735,Pam
"No, I’m not upset. I’m really excited for Darryl… Maybe I’m a little disappointed that we’ll be losing him.",1736,Pam
"I’ve really been putting in the hours on this mural. And my boss is totally OK with it, because he’s in the Bahamas and has no clue what anybody is doing. I’m usually very self-critical. I hate what I paint. But, I don’t know, this time I feel like it’s, um, it’s really coming together… Oh my god! Wha? You’ve gotta be kidding me! What it… are those… are those butts? Huh? No way. No way!",1737,Pam
"Attention, everyone. Can I have your attention, please? Yeah, I don’t know everybody’s name down here, but whoever did this will you please raise your hand. Hello? This is not over. OK? I will stay up here all day if I have to. Is that what you want? Yeah, I will also come down if I want to. It’s my choice.",1738,Pam
"I don’t demand justice often. I’m not like Angela, who calls a lawyer every time someone watches a YouTube video of animals doing it. But, someone should get fired over this, right? Val’s no help. Andy’s gone. Jim’s out. I just feel like I’m on my own here. I mean, OK, not completely on my own. But, in terms of people who can do something. Thank you, Brian.",1739,Pam
"Oh that’s mine! Um, I’ll just, I’ll get it out of the way for you.",1740,Pam
"Jim set up a job interview for me today in Philly. It’s um, with a real estate company, which is a great fit for me because I live in a house and I know what a bathroom is. I’m sorry, I am just very nervous because honestly this is all moving a lot faster than I expected. And, and because my resume can fit on a post-it note.",1741,Pam
Oh my god. He’s Michael Scott.,1742,Pam
"I spent 10 years as a receptionist, to Michael Scott. And I have kids now. And I just, I can’t.",1743,Pam
"He took this job in Philly without telling me. He bought our house without telling me. At a certain point, he shouldn’t be rewarded for that.",1744,Pam
"I feel like he’s always making these decisions for the family, and then I’m left playing catch-up.",1745,Pam
"I’m sure Athlead will be a huge success. But I don’t want him to do it anymore, and I don’t want to give him an ultimatum, but I am not moving our family to Philly.",1746,Pam
I wish we’d started this exercise six months ago. My heart just feels so… blocked up.,1747,Pam
"When Jim decided to come back to Scranton full-time, I was relieved, but I also feel a little guilty. I mean, he’s giving up this big thing for me. But he seems happy. I mean, he’s certainly been goofing around a lot. I love goofy Jim.",1748,Pam`
  var data = papaparse.parse(csv_data);
  return data?.data;
}

export function movie_quote_data() {
  var csv_data = `"Do, or do not. There is no try.",1890,Star Wars: Episode V - The Empire Strikes Back
Listen to them. Children of the night. What music they make.,1931,Dracula
It's alive! It's alive!,1931,Frankenstein
"Oh, no, it wasn't the airplanes. It was Beauty killed the Beast.",1933,King Kong
"Magic Mirror on the wall, who is the fairest one of all?",1937,Snow White and the Seven Dwarves
"Elementary, my dear Watson.",1939,The Adventures of Sherlock Holmes
"I'll get you, my pretty, and your little dog, too!",1939,The Wizard of Oz
"After all, tomorrow is another day!",1939,Gone With the Wind
"Frankly, my dear, I don't give a damn.",1939,Gone with the Wind
"Toto, I've got a feeling we're not in Kansas anymore.",1939,The Wizard of Oz
There's no place like home.,1939,The Wizard of Oz
"As God is my witness, I'll never be hungry again.",1939,Gone with the Wind
"It's gone forever, that funny young, lost look I loved won't ever come back. I killed that when I told you about Rebecca. It's gone. In a few hours, you've grown so much older.",1940,Rebecca
"Here's looking at you, kid.",1942,Casablanca
"Play it, Sam. Play 'As Time Goes By.",1942,Casablanca
We'll always have Paris.,1942,Casablanca
Round up the usual suspects.,1942,Casablanca
This is the beginning of a beautiful friendship.,1942,Casablanca
"When it comes to women, you’re a true democrat.",1942,Casablanca
I am big! It's the pictures that got small.,1950,Sunset Blvd.
Nobody ever lies about being lonely.,1953,Here to Eternity
"You don't understand! I coulda had class. I coulda been a contender. I could've been somebody, instead of a bum, which is what I am.",1954,On The Waterfront
"Where we're going, we don't need roads",1958,Back to the future
"Life is a banquet, and most poor suckers are starving to death!",1958,Auntie Mame
Well nobody is perfect,1959,Some Like It Hot
"My name is Bond, James Bond.",1962,Dr. No
Bond. James Bond,1962,Dr. No
I don't understand. He meets a girl that can give him a new life and he pushes her away? Because he doesn't know how to love.,1963,8 1⁄2 
"You expect me to talk? No, Mr Bond, I expect you to die!",1964,Goldfinger
"A martini. Shaken, not stirred.",1964,Goldfinger 
"Gentlemen, you can't fight in here! This is the War Room!",1964,Dr. Strangelove
What we've got here is a failure to communicate.,1967,Cool Hand Luke
They call me Mister Tibbs!,1967,In the Heat of the Night
"Mrs. Robinson, you're trying to seduce me. Aren't you?",1967,The Graduate
You only live twice:Once when you are born And once when you look death in the face,1967,You only live twice
We rob banks.,1967,Bonnie and Clyde
"Take your stinking paws off me, you damned dirty ape!",1968,Planet of the Apes
"Hello, gorgeous.",1968,Funny Girl
Love means never having to say you're sorry,1970,Love Story
Public opinion has a way of changing.,1971,A Clockwork Orange
"Drop the gun, take the cannoli.",1972,The Godfather
A man who doesn't spend time with his family can never be a real man.,1972,The Godfather
I'm going to make him an offer he can't refuse.,1972,The Godfather
"Great men are not born great, they grow great.",1972,The Godfather
I'm gonna make him an offer he can't refuse,1972,The Godfather
"Father Dyer: My idea of Heaven is a solid white nightclub with me as a headliner for all eternity, and they LOVE me!!",1973,The Exorcist
"Men, you are about to embark on a great crusade to stamp out runaway decency in the west. Now you men will only be risking your lives, whilst I will be risking an almost certain Academy Award nomination for Best Supporting Actor.",1974,Blazing Saddles
"What did you expect? 'Welcome, sonny'? 'Make yourself at home'? 'Marry my daughter'? You've got to remember that these are just simple farmers. These are people of the land. The common clay of the new West. You know... morons.",1974,Blazing Saddles
"Wait Master, it might be dangerous... you go first.",1974,Young Frankenstein
What's a dazzling urbanite like you doing in a rustic setting like this?,1974,Blazing Saddles
"Please! Remain in your seats, I beg you! We are not children here, we are scientists! I assure you there is nothing to fear!",1974,Young Frankenstein
"Keep your friends close, but your enemies closer.",1974,The Godfather II
"Now I don't have to tell you good folks what's been happening in our beloved little town. Sheriff murdered, crops burned, stores looted, people stampeded, and cattle raped. The time has come to act, and act fast. I'm leaving.",1974,Blazing Saddles
You're gonna need a bigger boat.,1975,Jaws
We are the Knights who say... Ni!,1975,Monty Python and the Holy Grail
It’s just a flesh wound.,1975,Monty Python and the Holy Grail
Run Away!,1975,Monty Python and the Holy Grail
"Yeah, to you, it's Thanksgiving; to me, it's Thursday.",1976,Rocky
You talking to me?,1976,Taxi Driver
"Yo, Adrian!!.",1976,Rocky
Is it safe?,1976,Marathon man
"If you strike me down, I shall become more powerful than you could possibly imagine.",1977,Star Wars
"It'll be just like Beggar's Canyon, back home",1977,Star Wars
May the Force be with you.,1977,Star Wars
May the force be with you,1977,Star Wars
When I left you I was but the learner. Now I am the master.,1977,Star Wars Episode IV - A New Hope
That’s no moon…it’s a space station,1977,Star Wars Episode IV - A New Hope
"All right, but apart from the sanitation, medicine, education, wine, public order, irrigation, roads, the fresh water system and public health, what have the Romans ever done for us?",1979,Monty Python's Life of Brian
"Oh! It's blessed are the meek! I'm glad they're getting something, they had a hell of a time...",1979,Monty Python's Life of Brian
Always look on the Bright Side of Life ... Always look on the Light Side of Life.,1979,Monty Python's Life of Brian
I love the smell of napalm in the morning,1979,Apocalypse Now
"Choose the sword, and you will join me. Choose the ball and you join your mother, in death. You don’t understand my words, but you must choose. So… come boy, choose life or death.",1980,Shogun Assassin
"Joey, have you ever been in a turkish prison?",1980,Airplane
Looks like I picked the wrong week to quit sniffing glue.,1980,Airplane
You must unlearn what you have learned.,1980,Star Wars: Episode V - The Empire Strikes Back
"Little pigs, little pigs, let me come in! Not by the hair on your chinny chin chin? Then I'll huff... And I'll puff... And I'll blow your house in!",1980,The Shining
"Do, or do not. There is no 'try'.",1980,Star Wars: Episode V - The Empire Strikes Back
"Luke, I am your father.",1980,"Star Wars, Empire Strikes Back"
Here's Johnny!,1980,The Shining
"It's not the years, honey. It's the mileage.",1981,Raiders of the Lost Ark
The sun will come out tomorrow.,1982,Annie
"If you don't eat your meat, you can't have any pudding! How can you have any pudding if you don't eat your meat?!",1982,Pink Floyd: The Wall
"I've seen things you people wouldn't believe. Attack ships on fire off the shoulder of Orion. I watched C-beams glitter in the dark near the Tannhäuser Gate. All those moments will be lost in time, like tears in rain.",1982,Blade Runner
I changed the conditions of the test. I don’t like to lose.,1982,Star Trek II: The Wrath of Khan
Leaping lizards!,1982,Annie
"Go ahead, make my day.",1983,Sudden Impact
Say hello to my little friend!,1983,Scarface
It’s a trap!,1983,Star Wars: Return of Jedi
"I always tell tell the truth, even when i lie.",1983,Scarface
"I am a Jedi, like my father before me.",1983,Star Wars Episode 6 : Return Of The Jedi
"From now on we are enemies, you and I.",1984,Amadeus
I'll be back.,1984,The Terminator
"Hasta la Vista, baby.",1984,The Terminator
I can’t believe I just gave my panties to a geek.,1984,Sixteen Candles
Are you telling me that you built a time machine out of a DeLorean.,1985,Back to the Future
I feel the need for speed,1986,Top Gun
I feel the need - the need for speed!.,1986,Top Gun
 I feel the need!!!! The need for speed!!!!,1986,Top Gun
"It's only forever, not long at all...",1986,Labyrinth
"Life moves pretty fast. If you don’t stop and look around once in a while, you could miss it.",1986,Ferris Bueller's Day Off
"I'm a mog: half man, half dog. I'm my own best friend!",1987,Spaceballs
Snap out of it!,1987,Moonstruck
Come on... Come on! Do it! Do it! Come on. Come on! Kill me! I'm here! Kill me! I'm here! Kill me! Come on! Kill me! I'm here! Come on! Do it now! Kill me!,1987,Predator
You idiots! These are not them! You've captured their stunt doubles!,1987,Spaceballs
"So, Lone Starr, now you see that evil will always triumph because good is dumb.",1987,Spaceballs
And to think I've been telling my friends it's so cool living with an artist. You never once asked to paint me nude!,1987,*batteries not included
Nobody puts Baby in a corner.,1987,Dirty Dancing
Here endeth the lesson.,1987,The Untouchables
Death cannot stop true love,1987,The Princess Bride
As you wish...,1987,The Princess Bride
Hello. My name is Inigo Montoya. You killed my father. Prepare to die.,1987,The Princess Bride
Inconcievable!,1987,The Princess Bride
"Greed, for lack of a better word, is good",1987,Wall Street
"Yippie-ki-yay, motherf—er!",1988,Die Hard
"Welcome to the party, pal!",1988,Die Hard
"Like a midget at a urinal, I was going to have to stay on my toes.",1988,The Naked Gun
"Say it aint’ so, Joe. Say it ain’t so.",1988,Eight Men Out
I'm not bad. I'm just drawn that way.,1988,Who Framed Roger Rabbit
Strange things are afoot at The Circle K.,1989,Bill and Ted's Most Excellent Adventure
"You must strive to find your own voice because the longer you wait to begin, the less likely you are going to find it at all.",1989,Dead Poets Society
"When you realize you want to spend the rest of your life with somebody, you want the rest of your life to start as soon as possible.",1989,When Harry Met Sally
Have you ever danced with the devil in the pale moonlight?,1989,Batman
I'll have what she's having.,1989,When Harry Met Sally
"If you build it, he will come.",1989,Field of Dreams
Why don't you make like a tree and get out of here.,1989,Back to the Future Part II
"Carpe diem. Seize the day, boys. Make your lives extraordinary.",1989,Dead Poets Society
"Just when I thought I was out, they pull me back in.",1990,The Godfather III
Never rat on your friends and always keep your mouth shut,1990,Goodfellas
I love you. I really love you. Ditto.,1990,Ghost
"I’m funny how?  Funny, like, I’m a clown?  I amuse you?",1990,Goodfellas
This valley is just one long smorgasbord.,1990,Tremors
"As far back as I can remember, I always wanted to be a gangster.",1990,Goodfellas
Better dead and cool then alive and uncool.,1991,Harley Davidson and The Marlboro Man
"You're a... you're a complex Freudian hallucination having something to do with my mother and I don't know why you have wings, but you have very lovely legs and you're a very nice tiny person and what am I saying? I don't know who my mother was. I'm an orphan and I've never taken drugs because I missed the sixties; I was an accountant.",1991,Hook
"Oh, and Senator, just one more thing. Love your suit.",1991,The Silence of the Lambs
"Hook, you let those kids out of that net in less than one minute or you better get an attorney and hope to God he's better than me.",1991,Hook
"Hasta la vista, baby.",1991,Terminator 2: Judgment Day
"And you'd better deliver, Miss Bell, or no amount of clapping will bring you back from where I will send you.",1991,Hook
"Of course it's hard. It's supposed to be hard. If it wasn't hard, everyone would do it. The hard is what makes it great",1992,A League of their Own
There's no crying in baseball!,1992,A League of Their Own
You can't handle the truth!,1992,A Few Good Men
"Party on, Wayne! Party on, Garth!",1992,Wayne's World
"You shoot me in a dream, you better wake up and apologise.",1992,Reservoir Dogs
"You're killing me, smalls!",1993,The Sandlot
"Life, uh, finds a way.",1993,Jurassic Park
Clever girl.,1993,Jurassic Park
"What do you call them, Max? Yabbos? Max likes your yabbos. In fact, he loves them!",1993,Hocus Pocus
You bred raptors?,1993,Jurassic Park
I'm your Huckleberry.,1993,Tombstone
"You’re killin’ me, Smalls.",1993,The Sandlot
"When I got tired, I slept. When I got hungry, I ate. When I had to go, you know, I went.",1994,Forrest Gump
Some birds aren't meant to be caged. Their feathers are just too bright.,1994,Shawshank Redemption
"Yeah I called her up. She gave me a bunch of crap about me not listening to her, or something. I don't know, I wasn't really paying attention.",1994,Dumb and Dumber
"Run, Forrest, run!",1994,Forrest Gump
"Lord, it's a miracle! Man up and vanished like a fart in the wind!",1994,Shawshank Redemption
"The past can hurt. But the way I see it, you can either run from it or learn from it.",1994,The Lion King
"Oh yes, the past can hurt. But you can either run from it, or learn from it.",1994,The Lion King
"Hope is a good thing, maybe the best of things, and no good thing ever dies.",1994,The Shawshank Redemption
Everything the light touches is our kingdom.,1994,The Lion King
Life is like a box of chocolates; you never know what you're gonna get.,1994,Forrest Gump
"These walls are funny. First you hate ’em. Then you get used to ’em. Enough time passes, you get so you depend on them. That’s institutionalized.",1994,Shawshank Redemption
"I mean, seriously, how often do you really look at a mans shoes?",1994,Shawshank Redemption
"Hope is a good thing, maybe the best of things, and no good thing ever dies.",1994,Shawshank Redemption
"Everything you see exists together in a delicate balance. As king, you need to understand that balance and respect all the creatures, from the crawling ant to the leaping antelope.",1994,The Lion King
Mama says stupid is as stupid does.,1994,Forrest Gump
"For you, the day Bison graced your village, was the most important day in your life. But for me, it was Tuesday.",1994,Street Fighter
Salvation lies within.,1994,Shawshank Redemption
Hakuna matata,1994,The Lion King
Don't ever let anybody tell you they’re better than you.,1994,Forrest Gump
Mama always said life was like a box of chocolates. You never know what you're gonna get.,1994,Forrest Gump
"Is life always this hard, or is it just when you're a kid?",1994,Léon
"They may take our lives, but they'll never take our freedom!",1995,Breaveheart
"Houston, we have a problem.",1995,Apollo 13
Hack the planet.,1995,Hackers
What's in the box?!,1995,Seven
"They may take our lives, but they'll never take our freedom!",1995,Braveheart
" I used to think that if none of your family or friends knew you were dead, it was like not really being dead. People can invent the best and the worst for you.",1995,Before Sunrise
The greatest trick the devil ever pulled was convincing the world he didn't exist.,1995,The Usual Suspects
Bye Felicia!,1995,Friday
Every man dies; not every man really lives.,1995,Braveheart
This isn't flying. This is falling with style!,1995,Toy Story
To infinity and beyond!,1995,Toy Story
"That'll do, pig. That'll do.",1995,Babe
Get on the scale! Get off the scale!,1995,Heavyweights
"Every man dies, but not every man really lives.",1995,Braveheart
You can trouble me for a warm glass of SHUT THE HELL UP!! Now you will go to sleep or I will put you to sleep.,1996,Happy Gilmore
Show me the money!,1996,Jerry Maguire
You had me at hello.,1996,Jerry Maguire
"You little son of a bitch ball! Why you don't you just go HOME? That's your HOME! Are you too good for your HOME? ANSWER ME! SUCK MY WHITE ASS, BALL!",1996,Happy Gilmore
Some people can’t believe in themselves until someone else believes in them first.,1997,Good Will Hunting
Ain't no rules says a dog can't play basketball.,1997,Air Bud
Does anything more dangerous than that lurk just beneath the surface?,1997,Titanic
You make me want to be a better man.,1997,As Good as It Gets
I'm king of the world!,1997,Titanic
Draw me like one of your French girls,1997,Titanic
Tonight's forecast: a freeze is coming!,1997,Batman & Robin
"People live their lives bound by what they accept as correct and true. That's how they define ""reality"". But what does it mean to be ""correct"" or ""true""? Merely vague concepts... Their ""reality"" may all be a mirage. Can we consider them to simply be living in their own world, shaped by their beliefs?",1997,Naruto
My Mama says that alligators are ornery because they got all them teeth and no toothbrush.,1998,The Waterboy
"What I need is a real, live ghost. That's an oxymoron, Daph.",1998,Scooby-Doo on Zombie Island
"You can feel the chill in the air, cut, who opened a window?",1998,Scooby-Doo on Zombie Island
A census taker once tried to test me. I ate his liver with some fava beans and a nice Chianti.,1998,The Silence of the lambs
"No matter how the wind howls, the mountain cannot bow to it.",1998,Mulan
"I’m the Dude, so that’s what you call me. That or, uh His Dudeness, or uh Duder, or El Duderino, if you’re not into the whole brevity thing.",1998,The Big Lebowski
Zoinks! How humiliating! Chased into a hole by 1/3 of a B.L.T.!,1998,Scooby-Doo on Zombie Island
Make the money. Don’t let it make you.,1998,The Player's Club
"Wipe your upper lip, romeo.",1998,Scooby-Doo on Zombie Island
"Put the weed in the bag first, then get money.",1998,Belly
A single grain of rice can tip the scale. One man may be the difference between victory and defeat.,1998,Mulan
You're taking all the caviar? That caviar is a garnish!,1998,You've Got Mail
The flower that blooms in adversity is the most rare and beautiful of all.,1998,Mulan
"Like... we're not looking for any ghoul-friends, are we, Scooby?",1998,Scooby-Doo on Zombie Island
I'm having an old friend for dinner.,1998,The Silence of the lambs
"I live in Notting Hill. You live in Beverly Hills. Everyone in the world knows who you are, my mother has trouble remembering my name.",1999,Notting Hill
"I'm also just a girl, standing in front of a boy, asking him to love her.",1999,Notting Hill
Time is always against us.,1999,The Matrix
"The things you used to own, now they own you.",1999,Fight Club
Don't touch my nakama(friend) anymore! ,1999,One Piece
It’s only after we’ve lost everything that we’re free to do anything.,1999,Fight Club
Don’t let anyone ever make you feel like you don’t deserve what you want.,1999,10 Things I Hate About You
"Unfortunately, no one can be told what the Matrix is. You have to see it for yourself.",1999,The Matrix
Ignorance Is Bliss,1999,The Matrix
I see dead people.,1999,The Sixth Sense
The first rule of Fight Club is: You do not talk about Fight Club.,1999,Fight Club
There is a difference between knowing the path and walking the path.,1999,The Matrix
It's only after we've lost everything that we're free to do anything.,1999,Fight Club
 I was the warm little center that the life of this world crowded around.,1999,Fight Club
Fear. Fear attracts the fearful… the strong… the weak… the innocent… the corrupt. Fear. Fear is my ally.,1999,Star Wars: Episode I – The Phantom Menace
By Grabthar's hammer...what a savings.,1999,Galaxy Quest
Stop trying to control everything and just let go! LET GO!,1999,Fight Club
Miracles only happen to those who never give up,1999,One Piece
You met me at a very strange time in my life,1999,Fight Club
I know kung fu.,1999,The Matrix
People hurt the ones they love. That's how it is all around the world,1999,The Green Mile
We need guns. Lots of guns.,1999,Matrix
Damn! We're in a tight spot!,2000,"O Brother, Where Art Thou?"
Are you not entertained?,2000,Gladiator
They called me Mr. Glass.,2000,Unbreakable
"I have nipples, Greg. Could you milk me?",2000,Meet the Parents
"I hope he didn’t die. Unless he left a note naming me his successor, then I hope he did die.",2000,Futurama
There are No Accidents. No Coincidences. No Escapes. YOU CAN'T CHEAT DEATH.,2000,Final Destination
"Dude, where's my car?",2000,"Dude, Where's My Car?"
Do you know what happens to a toad when it's struck by lightning? The same thing that happens to everything else.,2000,X-men
Your eyes are like two big blue eyes.,2000,Flintstones in Viva Rock Vegas
The key to a woman's heart is an unexpected gift at an unexpected time.,2000,Finding Forrester
"I'll take poor assumptions for $800, Alex.",2000,Finding Forrester
Wilsoooooon.,2000,Cast Away
"Wilma, whatever you decide to do, I want you to know something. Your daddy will always love you.",2000,Flintstones in Viva Rock Vegas
Oh Fred. That's so sweet.,2000,Flintstones in Viva Rock Vegas
"If you utter so much as one syllable, I'LL HUNT YOU DOWN AND GUT YOU LIKE A FISH! If you'd like to fax me, press the star key.",2000,The Grinch
"My name is Maximus Decimus Meridius, commander of the Armies of the North, General of the Felix Legions and loyal servant to the true emperor, Marcus Aurelius. Father to a murdered son, husband to a murdered wife. And I will have my vengeance, in this life or the next.",2000,Gladiator
"No thinking -- that comes later. You must write your first draft with your heart. You rewrite with your head. The first key to writing is... to write, not to think!",2000,Finding Forrester
We could not talk or talk forever and still find things to not talk about.,2000,Best in Show
Snnnnnooooooooooow!!!!!!!!!,2000,Snow Day
I have nipples Greg. Could you milk me?,2000,Meet the Parents
I've gotta get out of this place. Someday I'm getting on that train.,2001,Spirited Away
Yeah. We graduated high school. How totally amazing.,2001,Ghost World
One can never have enough socks.,2001,Harry Potter and the Philosopher's Stone
"Just what do you think you're doing, Dave?",2001,A Space Odyssey
"You're a wizard, Harry.",2001,Harry Potter and the Sorcerer's Stone
"What you NEED to do is get me my chips!!! With dip!!! Cuz you're delinquent, motherfucker!",2001,The Wash
You shall not pass!,2001,The Lord of the Rings: The Fellowship of the Ring
Ask any racer. Any real racer. It don't matter if you win by an inch or a mile. Winning's winning.,2001,The Fast and The Furious
Even the smallest person can change the course of the future.,2001,The Lord of the Rings: The Fellowship of the Ring
"So be prepared, be enthusiastic, and leave your bullshit attitude and baggage at the door because we don't need it!",2001,Wet Hot American Summer
I live my life a quarter mile at a time.,2001,The Fast and the Furious
They say that dreams are only real as long as they last. Couldn't you say the same thing about life?,2001,Waking Life
All we have to decide what to do with the time that is given to us.,2001,Lord Of The Ring - The Fellowships Of The Ring
Exercise gives you endorphins. Endorphins make you happy. Happy people just don't shoot their husbands. They just don't.,2001,Legally Blonde
What is this? A center for ants?,2001,Zoolander
All we have to decide is what to do with the time that is given us.,2001,The Lord of the Rings: The Fellowship of the Ring
"Of the days that I have lived, only those I spent with you seemed real.",2001,Cowboy Bebop: The Movie
Ogres are like onions.,2001,Shrek
"Once you meet someone, you never really forget them. It just takes a while for your memory to come back to you",2001,Spirited Away
I don't know half of you half as well as I should like; and I like less than half of you half as well as you deserve.,2001,The Lord of the Rings: The Fellowship of the Ring
The greatest thing you’ll ever learn is just to love and be loved in return.,2001,Moulin Rouge
It's only in the mysterious equation of love that any logical reasons can be found.,2001,A Beautiful Mind
"One Ring to rule them all, One Ring to find them, One Ring to bring them all and in the darkness bind them.",2001,The Lord of The Rings: The Fellowship of the Ring
Even the smallest person can change the course of history.,2001,The Lord of the Rings: The Fellowship of the Ring
"It’s a dangerous business, going out your door…You step into the Road, and if you don’t keep your feet, there is no knowing where you might be swept off to.",2001,The Lord of the Rings: The Fellowship of the Ring
"No, I like you very much, just as you are.",2001,Bridget Jone's Diary
"Welcome the rich man, he's hard for you to miss. His butt keeps getting bigger, so there's plenty there to kiss!",2001,Spirited Away
Do you like dags?,2001,The Snatch
"There’s some good in this world, and it’s worth fighting for.",2002,The Lord of the Rings: The Two Towers
I'm tired of people who judge me without knowing my history.,2002,8 miles
"I don't like sand. It's all coarse, and rough, and irritating. And it gets everywhere.",2002,The Lord of the Rings: The Two Towers
"Your time will come. You will face the same Evil, and you will defeat it.",2002,The Lord of the Rings: The Fellowship of the Ring
The battle of Helm's Deep is over; the battle for Middle Earth is about to begin. ,2002,The Lord of the Rings: The Two Towers
It is not our abilities that show what we truly are… it is our choices.,2002,Harry Potter and the Chamber of Secrets
With great power comes great responsibility.,2002,Spider Man
"Dadinho é o caralho, meu nome é Zé Pequeno porra!",2002,Cidade de Deus
There is always hope.,2002,The Lord of the Rings: The Two Towers
"You know, I'm something of a scientist myself.",2002,Spiderman
My precious,2002,The Lord of the Rings: The Two Towers
"Li'l dice my ass, my name is now Li'l Zé now",2002,City of God
"But in the end it’s only a passing thing, this shadow, even darkness must pass.",2002,The Lord of the Rings: The Two Towers
My precious...,2002,The Lord of the Rings: The Two Towers
Dark have been my dreams of late.,2002,The Lord of the Rings: The Two Towers
"It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends.",2002,Harry Potter and the Chamber of Secrets
Even the smallest person can change the course of the future.,2002,The Lord of the Rings: The Fellowship of the Ring
"Ye best start believin' in ghost stories, Miss Turner. Yer in one.",2003,Pirates of the Carribean
This is the day you will always remember as the day you almost caught Captain Jack Sparrow,2003,Pirates of the Caribbean: The Curse of the Black Pearl
You sit on a throne of lies.,2003,Elf
"To me, you are perfect.",2003,Love Actually
I will not say: do not weep; for not all tears are an evil.,2003,The Lord of the Rings: Return of the King
"I want to change things. I want to believe that anything can be changed. The moment I met you, a new world opened up for me. You see, after wandering in the darkness for so long, a light brought me happiness. It’s all thanks to you.",2003,Chrono Crusade
The thing about romance is people only get together right at the very end.,2003,Love Actually
Why are you trying so hard to fit in when you were born to stand out?,2003,What A Girl Wants
We're goin' streaking!,2003,Old School
" You're my boy, Blue!",2003,Old School
"That there’s some good in this world, Mr. Frodo… and it’s worth fighting for.",2003,The Lord of the Rings: The Two Towers
Just keep swimming.,2003,Finding Nemo
The problem is not the problem. The problem is your attitude about the problem. Do you understand?,2003,Pirates of the Carribean
Not all treasure is silver and gold mate,2003,Pirates of the Carribean
The ones that love us never really leave us.,2004,Harry Potter and the Prisoner of Azkaban
"Boo, you whore!",2004,Mean Girls
I want to play a game.,2004,Saw
Stop trying to make 'fetch' happen. It's not going to happen.,2004,Mean Girls
It's like I have ESPN or something.,2004,Mean Girls
We should totally just stab Caesar!,2004,Mean Girls
Whatever. I'm getting cheese fries.,2004,Mean Girls
That is so fetch!,2004,Mean Girls
You gonna eat your tots?,2004,Napoleon Dynamite
"You gotta hear this one song. It'll change your life, I swear.",2004,Garden State
A day may come when the courage of men fails… but it is not THIS day.,2004,The Lord of the Rings: Return of the King
That's why her hair is so big.  It's full of secrets.,2004,Mean Girls
You've got red on you,2004,Shaun of the Dead
Nobody makes me bleed my own blood. Nobody!,2004,Dodgeball: A True Underdog Story
I am gonna kill Bill.,2004,Kill Bill
Is butter a carb?,2004,Mean Girls
I solemnly swear that I am up to no good.,2004,Harry Potter and the Prisoner of Azkaban
I'm not drinking any f****** Merlot!,2004,Sideways
Your identity is your most valuable possession. Protect it.,2004,The Incredibles
Nunchuck skills… bowhunting skills… computer hacking skills… Girls only want boyfriends who have great skills!,2004,Napoleon Dynamite
"No, I shot him. Bullets and the fall killed him.",2004,Collateral
"They’ve done studies, you know. 60% of the time, it works every time.",2004,Anchorman
I wish I could bake a cake filled with rainbows and smiles and everyone would eat and be happy.,2004,Mean Girls
"Four for you, Glen Coco! You go, Glen Coco!",2004,Mean Girls
There's a 30% chance that it's already raining.,2004,Mean Girls
She doesn't even go here!,2004,Mean Girls
"You gotta hear this one song. It'll change your life, I swear.",2004,Golden State
I love lamp.,2004,Anchorman: The Legend of Ron Burgundy
"You have bewitched me, body and soul.",2005,Pride and Prejudice
"Life is a banquet, and most poor suckers are starving to death!",2005,Auntie Mame
And a hero is a person who resigns to be forgotten as we forget the dead for revolution.,2005,Gie
"If you want to know what a man’s like, take a good look at how he treats his inferiors, not his equals.",2005,Harry Potter and the Goblet of Fire
Did you ever hear the tragedy of Darth Plagueis The Wise? I thought not. It's not a story the Jedi would tell you. It's a Sith legend.,2005,Star Wars: Episode III – Revenge of the Sith
I am the Jewish James Bond!,2005,Munich
Why do we fall? So we can learn to pick ourselves up.,2005,Batman begins
"If you want to know what a man's like,take a good look at how he treats his inferiors.",2005,Harry Potter and the Goblet of Fire
You know how I know that you're gay?,2005,The 40-Year-Old Virgin
Life is not the amount of breaths you take. It’s the moments that take your breath away.,2005,Hitch
I wish I knew how to quit you.,2005,Brokeback Mountain
I am the senate!,2005,Star Wars: Episode III – Revenge of the Sith
"It's not who I am underneath, but what I do that defines me",2005,Batman Begins
Didn't I tell you about the football field in the bathroom cupboard?,2005,"The Chronicles of Narnia: The Lion, the Witch and the Wardrobe"
Why do we fall sir? So that we can learn to pick ourselves up.,2005,Batman Begins
What's comin' will come and we'll meet it when it does.,2005,Harry Potter and the Goblet of Fire
"Happiness is the most insidious prison of all, Evey.",2005,V for Vendetta
All's fair in Love and Basketball baby,2005,Love and Basketball
"Be it a stone or a grain of sand, in water they both sink.",2005,OldBoy
They don't know that we know they know we know.,2005,Friends
That's what she said.,2005,The Office
"I'm sorry father, for you there is only death. But our destiny is life!",2006,The Fountain
"If you ain't first, you're last.",2006,Taladega Nights
"Walk that walk and go forward all the time. Don't just talk that talk, walk it and go forward. Also, the walk didn't have to be long strides; baby steps counted too. Go forward.",2006,The Pursuit of Happyness
"I can't really remember when I last had any hope, and I certainly can't remember when anyone else did either. Because really, since women stopped being able to have babies, what's left to hope for?",2006,Children Of Men
"Y'know that ringing in your ears? That 'eeeeeeeeee'? That's the sound of the ear cells dying, like their swan song. Once it's gone you'll never hear that frequency again. Enjoy it while it lasts.",2006,Children Of Men
Life’s simple. You make choices and you don’t look back.,2006,The Fast and The Furious: Tokyo Drift
I'm gonna say what any man with two penises would say when his tailor asks him if he dresses right or left... Yes.,2006,Lucky Number Slevin
"People can't do somethin' themselves, they wanna tell you you can't do it. If you want somethin', go get it. Period. ",2006,The pursuit of Happyness
Speed. I am speed.,2006,Cars
I'm just one stomach flu away from my goal weight.,2006,Devil wears Prada
Float like a cadillac sting like a beemer.,2006,Cars
The world is your oyester. It's up to you to find the pearls.,2006,The Pursuit of Happyness
Florals? For Spring. Groundbreaking.,2006,The Devil Wears Prada
"Nobody is gonna hit as hard as life, but it ain’t how hard you can hit. It’s how hard you can get hit and keep moving forward. It’s how much you can take, and keep moving forward. That’s how winning is done.",2006,Rocky Balboa
Very nice!,2006,Borat
I have had it with these motherfuckin' snakes on this motherfuckin' plane!,2006,Snakes on a Plane
"Don’t ever let somebody tell you, you can’t do something. Not even me. Alright?",2006,The Pursuit of Happyness
Death is the road to awe.,2006,The Fountain
"The past can't hurt you anymore, unless you let it.",2006,V for Vendetta
This is Sparta!,2006,300
"That's the beauty of argument. When you argue correctly, you're never wrong.",2006,Thank You for Smoking
"Dear 8-pound, 6-ounce newborn infant Jesus...",2006,Talledega Nights: The Ballad of Ricky Bobby
Are you watching closely?,2006,The Prestige
Dreams remind us what reality is.,2006,A Scanner Darkly
TIA This is Africa,2006,Blood Diamond
"When you're looking for a cancer kid, he should be hopeless. He should have a wheelchair, he should have trouble talking, he should have a little pet goldfish in a Zip-lock bag, hopeless.",2006,Thank You for Smoking
"You got a dream... You gotta protect it. People can't do somethin' themselves, they wanna tell you you can't do it. If you want somethin', go get it. Period.",2006,The Pursuit of Happyness
Give Them Nothing... But take from Them Everything!,2007,300
"If we admit that human life can be ruled by reason, then all possibility of life is destroyed.",2007,Into the Wild
"The woods are lovely, dark and deep, and I have promises to keep and miles to go before I sleep. Did you hear me butterfly? Miles to go before you sleep.",2007,Death Proof
I read somewhere... how important it is in life not necessarily to be strong... but to feel strong.,2007,Into the Wild
" Spider-Pig, Spider-Pig. Does whatever a Spider-Pig does. Can he swing from a web? No he can't, he's a pig. Look out! He is a Spider-Pig!",2007,The Simpsons movie
"When you want something in life, you just gotta reach out and grab it.",2007,Into the Wild
"...And I also know how important it is in life not necessarily to be strong but to feel strong. To measure yourself at least once. To find yourself at least once in the most ancient of human conditions. Facing the blind death stone alone, with nothing to help you but your hands and your own head",2007,Into the Wild
"Anyway, my mum always said things we lose have a way of coming back to us in the end, if not always in the way we expect.",2007,Harry potter and the Order of the Phoenix
"They all deserve to die. Even you, Mrs. Lovett. Even I. Because the lives of the wicked should be made brief. For the rest of us death would be relief.",2007,Sweeney Todd: The Demon Barber of Fleet Street 
"As long as the concept of winners exists, there must also be losers.",2007,Naruto Shippuden
We’ve all got both light and darkness inside us. What matters is the part we choose to act on. That’s who we really are.,2007,Harry Potter and the Order of the Phoenix
"Not anyone can become a great artist, but a great artist can come from anywhere.",2007,Ratatouille
Happiness is only real when shared,2007,Into the Wild
Bazinga!,2007,The Big Bang theory
What's the most you ever lost on a coin toss?,2007,No Country for Old Men
"There's no room for softness... not in Sparta. No place for weakness. Only the hard and strong may call themselves Spartans. Only the hard, only the strong.",2007,300
I never realized how much I loved being home unless I'd been somewhere really different for awhile.,2007,Juno
We've all got both light and darkness inside us. What matters is the part we choose to act on. That's who we really are.,2007,Harry Potter and the Order of the Phoenix
"These are desperate times, Mrs Lovett. And desperate measures are called for.",2007,Sweeney Todd: The Demon Barber of Fleet Street
"I'm already pregnant. So, what other shenanigans could I get myself into?",2007,Juno
"Music's the only thing that makes sense anymore, man. Play it loud enough, it keeps the demons at bay.",2007,Across the Universe
"Some people feel like they don't deserve love. They walk away quietly into empty spaces, trying to close the gaps of the past.",2007,Into the Wild
"But when you forgive, you love. And when you love, God's light shines through you.",2007,Into the Wild
"Sometimes, informations is more dangerous than weapons",2007,Naruto Shippuden
 It's not about what I want. It's about what's fair!,2008,The Dark Knight
" About three things I was absolutely certain. First, Edward was a vampire. Second, there was part of him-and I didn't know how potent that part might be- that thirsted for my blood. and third, I was unconditionally and irrevocably in love with him.",2008,Twilight
Some men just want to watch the world burn. ,2008,The Dark Knight
"It is within my power to drastically change his cirumstances, but I don't want to give that man a gift he doesn't deserve.",2008,Seven Pounds
I don't know what kind of gun this is. I only know the sound it makes when it kills a man.,2008,Tropic Thunder
"Sometimes the truth isn’t good enough, sometimes people deserve more. Sometimes people deserve to have their faith rewarded    ",2008,The Dark Knight
It's not about money...it’s about sending a message. Everything burns!,2008,The Dark Knight
"If you let my daughter go now, that'll be the end of it. I will not look for you, I will not pursue you. But if you don't, I will look for you, I will find you, and I will kill you.",2008,Taken
There is no secret ingredient. It’s just you.,2008,Kung Fu Panda
Why so serious?,2008,The Dark Knight
"You either die a hero, or you live long enough to see yourself become the villain.",2008,Batman: The Dark Knight
Give me a scotch!,2008,Iron Man
I don't read the script. The script reads me.,2008,Tropic Thunder
Me? I know who I am. I'm a dude playing a dude disguised as another dude.,2008,Tropic Thunder
May the odds ever be in your favor.,2008,The Hunger Games
Don't talk like you're one of them,2008,The Dark knight
"Our lives are defined by opportunities, even the ones we miss.",2008,Benjamin Button
"You see, in their last moments people show you who they really are.",2008,The Dark Knight
"If you’re good at something, never do it for free.",2008,The Dark Knight
I'm not a big fat panda. I'm THE big fat panda.,2008,Kung Fu Panda
You either die a hero or live long enough to see yourself become the villian.,2008,The Dark Knight
Let's put a smile on that face!,2008,The Dark Knight
"I believe whatever doesn’t kill you, simply makes you stranger.",2008,The Dark Knight
"Is it better to be feared or respected? I say, is it too much to ask for both?",2008,Ironman 1
"Madness, as you know, is like gravity, all it takes is a little push.",2008,The Dark Knight
"I am not in danger, I am the danger",2008,Breaking Bad
Some men just want to watch the world burn.,2008,The Dark Knight
Does it depress you? To know just how alone you really are?,2008,The Dark Knight
Fuck them kids,2008,Soul Men
Do i look like a guy with plan?,2008,the dark knight
It's not about what I want. It's about what's fair!,2008,The Dark Knight
Nobody panics when things go “according to plan”. Even if the plan is horrifying!,2008,The Dark Knight
Adventure is out there,2009,Up
Nobody knows this mall better than I do.,2009,Paul Blart: Mall Cop
"If what I think is happening is happening, it better not be.",2009,Fantastic Mr. Fox
"I love you too, but I shouldn't have married you.",2009,Fantastic Mr. Fox
"I love rumors! Facts can be so misleading, but rumors, true or false, are often revealing",2009,Inglorious Basterds
Just because she likes the same bizzaro crap you do doesn't mean she's your soul mate.,2009,500 Days of Summer
Didn't I tell you not to come to my house? Nobody touches my child!,2009,Obsessed
"You've ever been to Del Frisco's? They cater, so for lunch I would love a twenty ounce porterhouse steak, medium maybe a little charred, with all the trimmings pommes frites, asparagus, and butter squash.",2009,Law Abiding Citizen
"We're all different... Him, especially. But there's something kind of fantastic about that, isn't there?",2009,Fantastic Mr. Fox
It is impossible to manufacture or imitate love,2009,Harry Potter and the Half-Blood Prince
Every path is the right path. Everything could've been anything else. And it would have just as much meaning.,2009,Mr Nobody
Hell is a teenage girl.,2009,Jennifer's Body
It was my bad. I was never a very good practical joker.,2009,Zombieland
This weapon seems made to order for the Brothers Grimm downstairs.,2009,Pulp Fiction
Am I being flirted with by a psychotic rat?,2009,Fantastic Mr. Fox
"Well, how carefully should I tread? Because apparently I just killed two people, and you were about to let me walk right out that door! How MISGUIDED are you? I feed you a couple of bullshit legal precedents, and there you go - you jump on it like a bitch in heat.",2009,Law Abiding Citizen
"Redemption? Sure. But in the end, he's just another dead rat in a garbage pail behind a Chinese restaurant.",2009,Fantastic Mr. Fox
What happens in vegas stays in vegas,2009,The Hangover
Whoops. Broke your 350 year old doorknob,2010,The Social Network
"Which would be worse, to live a monster or die as a good man?",2010,Shutter Island
You cocky cock! You'll pay for your crimes against humanity!,2010,Scott Pilgrim VS. The World
You want to know the difference between a master and a beginner? The master has failed more times that the beginner has ever tried.,2010,Karate Kid
An idea is like a virus. Resilient. Highly contagious. And even the smallest seed of an idea can grow. It can grow to define or destroy you.,2010,Inception
There's a benefit to losing: You get to learn from your mistakes.,2010,Megamind
A million dollars isn't cool. You know what's cool?,2010,The Social Network
"It is a curious thing, Harry, but perhaps those who are best suited to power are those who have never sought it.",2010,Harry Potter and the Deathly Hallows
Dreams feel real while we're in them. It's only when we wake up that we realize something was actually strange.,2010,Inception
"You have nothing to fear, if you have nothing to hide.",2010,Harry Potter and the Deathly Hallows
"Only he knew the price he paid, to become the greatest birder of all time.",2011,The Big Year
Zaldrīzes buzdari iksos daor! (A dragon is not a slave!),2011,Game of Thrones
I'm so much better when you're around,2011,One Day
"The problem is, I pretty much fancy everyone. It's like I've just got out of prison all of the time.",2011,One Day
"When you play game of thrones, you win or you die, there is no middle ground!",2011,Game of Thrones
"A tortilla is either corn or wheat. But a corn tortilla folded and filled is a taco, whereas a filled wheat tortilla is a burrito. Deep fry a burrito, it's a chimichanga.Toast a tortilla, it's a tostada. Roll it, it's an enchilada.",2011,One Day
"No one should be immortal, if even one person has to die.",2011,In Time
"Of course it is happening inside your head, Harry, but why on earth should that mean that it is not real?",2011,Harry Potter and the Deathly Hallows
The winter is coming.,2011,Game of Thrones
Winter is coming!,2011,Game of Thrones
Chaos is a ladder!,2011,Game of Thrones
A Lannister always pays his debts,2011,Game of Thrones
You is kind. You is smart. You is important.,2011,The Help
"For a guy with a four digit IQ, I must have missed something.",2011,Limitless
Go to work and have a fun.,2011,The Raid Redemption
Hodor,2011,Game of Thrones
Never Stop Looking for What's Not There.,2012,The Magic of Belle Isle
"Cause if we can't protect the Earth, you can be damn sure we'll avenge it.",2012,The Avengers
You had my curiosity. But now you have my attention.,2012,Django Unchained
"Gentlemen, you had my curiosity, but now you have my attention.",2012,Django Unchained
"There are those who say fate is something beyond our command, that destiny is not our own. But I know better. Our fate lives within us. You only have to be brave enough to see it.",2012,Brave
"Above all, don't lose hope",2012,Life of Pi
"That’s my secret, Captain. I’m always angry.",2012,The Avengers 
I'm a huge fan of the way you lose control and turn into an enormous green rage monster.,2012,The Avengers
"Better clench up, Legolas.",2012,The Avengers
"Bright day uh, Bright Boy?",2012,Django Unchained
Where there's life there's hope.,2012,The Hobbit
"Ah you think darkness is your ally? You merely adopted the dark. I was born in it, molded by it. I didn't see the light until I was already a man, by then it was nothing to me but blinding",2012,Dark Knight Rises
Following's not really my style.,2012,Marvel's The Avengers
"There was an idea to bring together a group of remarkable people, to see if we could become something more",2012,The Avengers
 That's what I do: I drink and I know things.,2012,Game of Thrones
"Genius, billionaire, playboy, philanthropist.",2012,The Avengers
"I love you, but you don't know what you're talking about.",2012,Moonrise Kingdom
"When you stop trying to force the solution, it'll happen on its own.",2012,The Flash
The law says that you cannot touch. But I think I see a lot of lawbreakers up in this house tonight,2012,Magic Mike
We accept the love we think we deserve,2012,The Perks of Being a Wallflower.
All The people I've murdered by letting you live...,2013,Batman: The Dark Knight Returns
Sometimes you gotta run before you can walk,2013,Ironman 3
Look closer because the closer you think you are the less you actually see,2013,Now You See Me
I have nothing to prove to you,2013,Captain Marvel
Let us learn to show our friendship for a man when he is alive and not after he is dead.,2013,The Great Gatsby
"If wishes could be granted, if desires could be fulfilled, then I wouldn’t wish or desire for anything after all. The things you’re handed on a silver platter are never genuine, and never everlasting. And that is why I’ll always keep searching.",2013,Oregairu
"The people who are crazy enough to think that they can change the world, are the one's who do",2013,Jobs
A wise man can learn more from his enemies than a fool from his friends.,2013,Rush
There's no nobility in poverty.,2013,The Wolf of Wall Street
"You’ve changed, Bilbo Baggins. You’re not the same hobbit as the one who left the Shire.",2013,The Hobbit: The Desolation of Smaug
"I warned your grandfather of what his greed would summon, but he would not listen.",2013,The Hobbit: The Desolation of Smaug
Let it go!,2013,Frozen
Proximity to power deludes some into thinking they wield it.,2013,House of Cards
"Just remember: if you look in the face of evil, evil's gonna look right back at you.",2013,American Horror Story
The only thing we're allowed to believe is that we won't regret the choice we made.,2013,Attack on Titan
"You have got to be willing to crash and burn. If you are afraid of failing, you wont get very far",2013,Steve Jobs
It's the loneliest feeling not to know who you are,2013,Alita: Battle Angel
"I just try to live every day as if it was the final day of my extraordinary, ordinary life.",2013,About Time
I don't want to survive. I want to live.,2013,12 years a slave
"Look At Me, I'm The Captain Now",2013,Captian Phillips
"You don't turn your back on family, Even when they do",2013,The Fast and The Furious 8
Some people say it's more hygienic than a handshake. But who's to say you can't get shit on your fist?,2013,Alan Partridge: Alpha Papa
"I'm not sure, about anything.",2013,What If
People don’t buy stock; it gets sold to them. Don’t ever forget that.,2013,The Wolf of Wall Street
The heart is not like a box that gets filled up; it expands in size the more you love. I'm different from you. This doesn't make me love you any less. It actually makes me love you more.,2013,Her
"People who can’t throw something important away, can never hope to change anything.",2013,Attack on Titan
"Well, I don't want to survive. I want to live.",2013,12 Years a Slave
"We're all traveling through time, together, everyday of our lives... All we can do is do our best to relish this remarkable life.",2013,About Time
"Rather than a person who hurts others, become the person getting hurt",2014,Tokyo Ghoul
"It's not magic, it's talent and sweat.",2014,Silicon Valley HBO
"The truth is a matter of circumstances, it’s not all things to all people all the time.",2014,Captain America: The Winter Soldier
"Don't wait for things to get easier, simpler, better. Life will always be complicated. Learn to be happy right now. Otherwise, you'll run out of time.",2014,The Intouchables
Even a broken clock is right twice a day.,2014,The Imitation Game
Not quite my tempo.,2014,Whiplash
Popularity is the slutty little cousin of prestige.,2014,Birdman
"Look, you're beautiful and you're talented. And I'm lucky to have you.",2014,Birdman
"One day it’ll grow, and every time I look at it, I’ll remember. Remember everything that happened: the good, the bad and how lucky I am that I made it home.",2014,The Hobbit: The Battle of Five Armies
"That’s what you always do, you confuse love for admiration.",2014,Birdman
"If more people valued home above gold, this world would be a merrier place.",2014,The Hobbit: The Battle of Five Armies
Only a fool argues for the pride of a dead man.,2014,The Raid 2: Berandal
"They never see you coming, do they Bob?",2014,The Drop
Sometimes it is the people who no one imagines anything of who do the things that no one can imagine.,2014,The Imitation Game
I am Groot.,2014,Guardians of the Galaxy
The only thing standing between you and your goal is the bullshit story you keep telling yourself as to why you can/'t achieve it.,2014,Wolf of the Wall Street
"So many times in my life I screwed up: I've talked when I should've listened, I've been harsh when I should've been tender.",2014,Ad Astra
"Dragon sickness. I’ve seen it before. That look, the terrible need. It is a fierce and jealous love, Bilbo. It sent his grandfather mad.",2014,The Hobbit: The Battle of Five Armies
"People keep asking if I'm back and I haven't really had an answer, but yeah, I'm thinking I'm back.",2014,John Wick
"Do not go gentle into that good night. Rage, rage against the dying of the light.",2014,Interstellar
There are no two words in the English language more harmful than good job.,2014,Whiplash
"You don't get to choose if you get hurt in this world,but you do have a say in who hearts you",2014,Fault in our stars
"We used to look up at the sky and wonder at our place in the stars, now we just look down and worry about our place in the dirt.",2014,Interstellar
"The price of freedom is high, and it's the price I am willing to pay",2014,Captain America: The Winter Soldier
I'm not going to launch those ships. Captain's orders.,2014,Captain America: The Winter Soldier
Ideals are peaceful; history is violent.,2014,Fury
Dress like a kingsman.,2014,KINGSMAN: The Secret Service
"Nobody exists on purpose, nobody belongs anywhere, everybody's gonna die. Come watch TV?",2014,Rick and Morty
Wubba lubba dub dub!,2014,Rick and Morty
"Having a family doesn’t mean that you stop being an individual. You know the best thing you can do for the people that depend on you? Be honest with them, even if it means setting them free.",2014,Rick and Morty
There are no two words in the English language more harmful than good job,2014,Whiplash
"Machines can never think as humans do but just because something thinks differently from you, does it mean it's not thinking?",2014,The Imitation Game
Pain demands to be felt,2014,Fault in our stars
I know it's not ordinary. But who ever loved ordinary?,2014,The Imitation Game
Were you rushing or were you dragging?,2014,Whiplash
No system is safe.,2014,Who Am I
"Everyone’s a whore, Grace. We just sell different parts of ourselves.",2014,Peaky Blinders
"We are all different. However bad life may seem, there is always something you can do, and succeed at. While there's life, there is hope.",2014,The Theory of Everything
Come find me when you wake up!,2014,Edge Of Tomorrow
"You never would have come here unless you believed you were going to save them. Evolution has yet to transcend that simple barrier. We can care deeply - selflessly - about those we know, but that empathy rarely extends beyond our line of sight.",2014,Interstellar
"This world’s a treasure, but it’s been telling us to leave for a while now.",2014,Interstellar
A machine doesn't improvise well because you cannot program a fear of death. Our survival instinct is our greatest source of inspiration.,2014,Interstellar
Not my tempo.,2014,Whiplash
Mankind was born on Earth. It was never meant to die here.,2014,Interstellar
Hardest time to lie to somebody is when they're expecting to be lied to.,2014,The Imitation Game
Some infinities are bigger than other infinities.,2014,The Fault in our stars
If an angelic being fell from the sky and tried to live in this world of ours I think even they would commit many wrongs.,2014,Tokyo Ghoul
"I'm on a roller-coaster that only goes up, my friend.",2014,The Fault in Our Stars
It's not because we can't take vengeance that we should feel sorry. The real reason to feel sorry... is when one is hung up on revenge and can't live their own life.,2014,Tokyo Ghoul
Sometimes it's people closest to us who lie to us best,2015,Arrow
"You become responsible, forever, for everything you tamed.",2015,The Little Prince
"Mark Watney, Space Pirate.",2015,The Martian
How do you know the angel and the devil inside me aren’t the same thing?,2015,Daredevil
"I am the scales of justice, conductor of the choir of death!",2015,Mad Max
Oh what a day. What a lovely day!,2015,Mad Max
Witness me!,2015,Mad Max
I'm going to have to science the s*** out of this.,2015,The Martian
"Just because someone stumbles and loses their path, doesn’t mean they’re lost forever.",2015,X-Men: Days of Future Past
Manners maketh man,2015,KINGSMAN: The Secret Service
Haven't you ever wanted something so ba that it becomes more than a want?,2015,Rebel of the Sands
"When I get back home, I want all the praise to go towards me.",2015,The Martian
What a treacherous thing to believe that a person is more than a person?,2015,Paper Towns
"Examined from another angle, your faults and weaknesses can be weapons",2015,Assassination classroom
People keeps secret computers don't,2015,Arrow
That's not how the force works!,2015,Star Wars: Episode VII - The Force Awakens
"But if you tame me, then we shall need each other, to me you shall be unique in all the world, to you i shall be unique.",2015,The Little Prince
"Chewie, we're home.",2015,The Force Awakens
My tastes are very singular.,2015,Fifty Shades of Grey 
It is only with the heart that one can see rightly; what is essential is invisible to the eye,2015,The Little Prince
"Like the oldman said, together",2015,Avengers - Age of Ultron
Power belongs to those who take it.,2015,Mr. Robot
"That light saber was luke's, and his father's before him, and now it calls to you!",2015,Star Wars: The Force Awakens
I don't have friends. I got family.,2015,Furious 7
A bit of madness is key,2016,La La Land
Secrecy is security and security is victory.,2016,Snowden
Once in a while when I wake up. I find myself crying.,2016,Kimi No Nawa
"When life gets you down, you know what you gotta do? Just keep swimming.",2016,Finding Dory
"Bombs won't stop terrorism, brains will, and we don't have nearly enough of those.",2016,Snowden
Marriage is buying a house for someone you hate,2016,The Nice Guys
"At some point, you gotta decide for yourself who you gonna be. Can't let nobody make that decision for you.",2016,Moonlight
"Life’s a little bit messy. We all make mistakes. No matter what type of animal you are, change starts with you.",2016,Zootopia
"For Azeroth, for the Alliance!",2016,Warcraft
"When you love someone, you work it out. You don't just throw it away. You have to be careful with it, you might never get it again.",2016,Nocturnal Animals
"You're right, Aurora. But the drowning man will always try and drag somebody down with him. It ain't right, but the man's drowning.",2016,Passengers
Tell me... do you bleed? You will!,2016,BATMAN V SUPERMAN: DAWN OF JUSTICE
"You can’t buy love, but you can rent it for three minutes!",2016,Deadpool
"Life’s a little bit messy. We all make mistakes. No matter what type of animal you are, change starts with you.",2016,Zootopia
I can do this all day!,2016,Captain America: Civil War
"My dad used to say, 'If you live an ordinary life, all you'll have are ordinary stories. You have to live a life of adventure.'",2016,Passengers
Start With Where You're From,2016,Lion
"PWinston... tell them... Tell them all... Whoever comes, whoever it is... I'll kill them. I'll kill them all.",2017,John Wick 2
Do you know what a Cinnabon is? It's bread! And frosting! And cinnamon! They heat it up! Really hot!,2017,Bee Movie
"Life is a big trap, made up of little traps... If you listen hard... sometimes you could hear them snap shut.",2017,Sense8
"Don't do anything I would do, and definitely don't do anything I wouldn't do...",2017,Spider-Man: Homecoming
"There’s no hiding from this, son.",2017,Dunkirk
"When all seems lost, a few brave souls can save everything we've ever known.",2017,Transformers : The Light Night
I promise you ... No matter where we will be in this world ... I promise we will meet again.,2017,Your Name
"Unfortunately, we’re all human. Except me, of course.",2017,Mr.Robot
"Break hearts, not promises.",2017,Turtles All the Way Down
"Every time we get a chance to get ahead they move the finish line, every time.",2017,Hidden Figures
"When we lose our principles, we invite chaos.",2017,Mr. Robot
"People walk around, act like they know what hate means. Nah, no one does, until you hate yourself. I mean truly hate yourself. That’s power.",2017,Mr. Robot
We Shall Never Surrender.,2017,Dunkirk
I have burrowed underneath your brain. I am nested there. I am the scream in your mind. You will cooperate.,2017,Mr. Robot
Treasure the experience. Dreams fade away after you wake up,2017,Your Name
Leave One Wolf Alive and the Sheep are Never Safe,2017,Game of Thrones Season 7
Love's the most powerful emotion and that makes it the most dangerous,2017,Arrow
You’re so dark! Are you sure you’re not from the DC universe? I love dubstep!,2018,Deadpool 2
"If you want to change things in a big way, then you gotta make some big changes.",2018,Creed 2
Just because something works doesn’t mean it can’t be improved.,2018,Black Panther
"There is no such thing as magic, just illusion. Things only change when we change them. But you have to do it skillfully, in secret. Then it seems like magic.",2018,Dark
The darkest nights produce the brightest stars.,2018,Bumblebee
"That’s one small step for man, one giant leap for mankind.",2018,First Man
Is this your king?,2018,Black Panther
"That person who helps others simply because it should or must be done, and because it is the right thing to do, is indeed without a doubt, a real superhero.",2018,Spider-Man: Into the Spider-Verse
"If we didn’t do what we loved, we wouldn’t exist.",2018,"Adonis, Creed II"
Sometimes we think we have to do it all on our own. But we don’t.,2018,Creed 2
I just wanted to take another look at you.,2018,A Star Is Born
The hardest choices require the strongest wills,2018,Avengers: Infinity War
"What’s done is done, when we say it’s done.",2018,Mission Impossible: fallout
Change is like death. You don’t know what it looks like until you’re standing at the gates.,2018,Jurassic World: Fallen Kingdom
"Being a hero doesn't mean you are invincible. It just means you're brave enough to stand up, and do what's needed.",2018,Two Heroes
"Sometimes, when you're feeling helpless, the secret is to help someone else. Get out of your own head. Trust me. The next time someone asks for help, say yes.",2018,The Good Place
"Yeah. Well, you’re right. I thought it was more important to be somebody out there than the damn failure I was here at my own home. Anyway, for what it’s worth, I’m here now.",2018,The Mule
Whatever it takes!,2018,Avengers : Infinity War
That does put a smile on my face.,2018,Avengers: Infinity War
"For I am a Sinner in the hands of an angry God, Bloody Mary, Full of Vodka, Blessed are you among cocktails, pray for me now, at the hour of my death, which I hope is soon. Amen",2018,Archer
"Being genius is not enough, it takes courage to change people's hearts.",2018,Green Book
"Elsa, the past is not what it seems. You must find the truth.",2019,Frozen II
"I remember the story of an evil witch, at the princess she cursed to sleep forever. The story became legend. But this is no fairy tale.",2019,Maleficent:The Mistress of Evil
I can do this all day,2019,Avengers: Endgame
I love you 3000.,2019,Avengers: Endgame
I laugh in the face of danger,2019,The Lion King
Being brave doesn’t mean you go looking for trouble.,2019,The Lion King
"Lord knows, I’ve held onto way too much hate in my life. But all we have is now. All we have is now.",2019,Waves
All I have are negative thoughts.,2019,Joker
Nothing is funnier than unhappiness.,2019,Avengers: Endgame
"Is it just me, or is it getting crazier out there?",2019,Joker
 If you want to get crazy. We can get crazy.,2019,Us
"A new chapter of my life has begun. Already, I can feel the weight of this crown I wear.",2019,The King
You all love twisting the knife into one another.,2019,Knives Out
"Things are very uncomfortable between us, but we’re stuck in a house together.",2019,The Lodge
Pearl Harbor is the greatest intelligence failure in American history.,2019,Midway
There’s nothing you can’t do if you try.,2019,Dr Stone
I just want to escape. Dad always wanted me to travel the world. Someday.,2019,Abominable
"They have all the money, all the firepower, and they’ll use it. I know, I was one of them.",2019,Dark Waters
I think the best thing we can do is to let people know that each one of them is precious.,2019,A Beautiful Day in the Neighbourhood
"Well, I’ve got no leashes, or fences. With me, every day could be an adventure.",2019,The Lady and the Tramp
"You're really lucky, you know that? You didn't have to wait your whole life to do something special.",2019,El Camino
"Even if we do ignore the previous data, Broly's latent abilities are quite remarkable.",2019,Dragon Ball Super: Broly
My mother always tells me to smile and put on a happy face. She told me I had a purpose to bring laughter and joy to the world.,2019,Joker
How truly magnificent! I think this battle is about to come to a rousing finale!,2019,Dragon Ball Super: Broly
Today the impossible becomes the possible. ,2019,The Current War
There is no punchline.,2019,Joker
"Is it just me, or is it getting crazier out there?’",2019,Joker
That's MotherF****** street poetic justice.,2019,Shaft
"Maybe it's because I'm constantly fighting, destro…d to be a lower-class warrior... like my Kakarot.",2019,Dragon Ball Super: Broly
"These barbarians pretend to be submissive, but the…a sleeping beast down, before it can be awakened.",2019,Dragon Ball Super: Broly
"Time means nothing. Jeremy Bearimy, baby. We’ll just get through this. And then you and I can chill out in the dot of the I forever.",2019,The Good Place
The worst part of having a mental illness is people expect you to behave as if you don't,2019,Joker
"You give me your loyalty, and I’ll guarantee that each and every one of you will have a chance to be a warrior, to actually be a part of history.",2019,The Kill Team
What do you want most in the world?,2019,Anna
I do what I do because of my dad. He was a hero. He gave his life for the pursuit of knowledge.,2019,Ad Astra
"You've got a lot to learn. Here on Earth, we like …have to listen to what the others tell you to do.",2019,Dragon Ball Super: Broly
Following's not really my style.,2019,Marvel's The Avengers
I have nothing to prove to you,2019,Captain Marvel
"Dude, you are on fire.",2019,El Camino
This is me. This is how I win.,2019,Uncut Gems
Why have average when you can have extraordinary?,2019,The Boys
You are my lighting rod.,2019,Avengers: Endgame
"Bruce Lee: My hands are registered as lethal weapons. We get into a fight, I accidentally kill you... I go to jail.",2019,Once Upon a Time in Hollywood
"I'm as real as a donut, motherfucker.",2019,Once Upon a Time in Hollywood
"I used to think that my life was a tragedy. But now I realize, it’s a comedy.",2019,Joker
"I use the words you taught me. If they don't mean anything any more, teach me others. Or let me be silent.",2019,Avengers: Endgame
I used to use this little gun when I was a prostitude.,2019,Pineapple Express
If you want to get crazy. We can get crazy.,2019,Us
"If you can only do one thing, hone it to perfection. Hone it to the utmost limit!",2019,Kimetsu no Yaiba
You get what you f***ing deserve !!,2019,Joker
"You don't listen, do you?",2019,Joker
Never let your wings be stolen for you,2019,Maleficent:The Mistress of Evil
"Guns, lots of guns.",2019,John Wick 3: Parabellum
I was so sure my strength was getting close to it'…on this planet... Then who would I train against.,2019,Dragon Ball Super: Broly
No amount of money ever bought a second of time.,2019,Avengers: Endgame
The end is in the beginning and yet you go on.,2019,Avengers: Endgame
This meeting of The Losers Club has officially begun.,2019,It Chapter Two
" Spider-Pig, Spider-Pig. Does whatever a Spider-Pig does. Can he swing from a web? No he can't, he's a pig. Look out! He is a Spider-Pig!",2019,The Simpsons Movie
Let’s do this.,2019,Men in Black
"It looks as though he's managed to transform someh… his human form, retaining his speed and agility.",2019,Dragon Ball Super: Broly
I just hope my death makes more cents than my life.,2019,Joker
I am Iron Man.,2019,Avengers: Endgame
I didn't know if you were lost. Stick with me. I'll keep you safe.,2019,Us
This guy's awesome! He's holding his own while still in his base form!,2019,Dragon Ball Super: Broly
"Murder is murder, it don’t matter who you are.",2019,Black and Blue
"You know what a lion is? A lion is a strong animal. They do what the fuck they wanna do. Take what they want, eat what they want, they run when they feel like it. Lion.",2019,Between Two Ferns: The Movie
That was the best acting i've ever seen in my whole life.,2019,Once Upon a Time in Hollywood`
  var data = papaparse.parse(csv_data);
  return data?.data;
}

export function song_data() {
  var csv_data=`Seven (feat. Latto) (Explicit Ver.),2023,"Latto, Jung Kook",,,,,,,,,,,
LALA,2023,Myke Towers,,,,,,,,,,,
vampire,2023,Olivia Rodrigo,,,,,,,,,,,
Cruel Summer,2019,Taylor Swift,,,,,,,,,,,
WHERE SHE GOES,2023,Bad Bunny,,,,,,,,,,,
Sprinter,2023,"Dave, Central Cee",,,,,,,,,,,
Ella Baila Sola,2023,"Eslabon Armado, Peso Pluma",,,,,,,,,,,
Columbia,2023,Quevedo,,,,,,,,,,,
fukumean,2023,Gunna,,,,,,,,,,,
La Bebe - Remix,2023,"Peso Pluma, Yng Lvcas",,,,,,,,,,,
un x100to,2023,"Bad Bunny, Grupo Frontera",,,,,,,,,,,
Super Shy,2023,NewJeans,,,,,,,,,,,
Flowers,2023,Miley Cyrus,,,,,,,,,,,
Daylight,2023,David Kushner,,,,,,,,,,,
As It Was,2022,Harry Styles,,,,,,,,,,,
Kill Bill,2022,SZA,,,,,,,,,,,
Cupid - Twin Ver.,2023,Fifty Fifty,,,,,,,,,,,
"What Was I Made For? [From The Motion Picture ""Barbie""]",2023,Billie Eilish,,,,,,,,,,,
Classy 101,2023,"Feid, Young Miko",,,,,,,,,,,
Like Crazy,2023,Jimin,,,,,,,,,,,
LADY GAGA,2023,"Gabito Ballesteros, Junior H, Peso Pluma",,,,,,,,,,,
I Can See You (Taylor���s Version) (From The ,2023,Taylor Swift,,,,,,,,,,,
I Wanna Be Yours,2013,Arctic Monkeys,,,,,,,,,,,
"Peso Pluma: Bzrp Music Sessions, Vol. 55",2023,"Bizarrap, Peso Pluma",,,,,,,,,,,
Popular (with Playboi Carti & Madonna) - The Idol Vol. 1 (Music from the HBO Original Series),2023,"The Weeknd, Madonna, Playboi Carti",,,,,,,,,,,
SABOR FRESA,2023,Fuerza Regida,,,,,,,,,,,
Calm Down (with Selena Gomez),2022,"R��ma, Selena G",,,,,,,,,,,
MOJABI GHOST,2023,"Tainy, Bad Bunny",,,,,,,,,,,
Last Night,2023,Morgan Wallen,,,,,,,,,,,
Dance The Night (From Barbie The Album),2023,Dua Lipa,,,,,,,,,,,
Rush,2023,Troye Sivan,,,,,,,,,,,
TULUM,2023,"Peso Pluma, Grupo Frontera",,,,,,,,,,,
Creepin',2022,"The Weeknd, 21 Savage, Metro Boomin",,,,,,,,,,,
Anti-Hero,2022,Taylor Swift,,,,,,,,,,,
TQG,2023,"Karol G, Shakira",,,,,,,,,,,
Los del Espacio,2023,"Big One, Duki, Lit Killah, Maria Becerra, FMK, Rusherking, Emilia, Tiago pzk",,,,,,,,,,,
Fr��gil (feat. Grupo Front,2023,"Yahritza Y Su Esencia, Grupo Frontera",,,,,,,,,,,
Blank Space,2014,Taylor Swift,,,,,,,,,,,
Style,2014,Taylor Swift,,,,,,,,,,,
TQM,2023,Fuerza Regida,,,,,,,,,,,
El Azul,2023,"Junior H, Peso Pluma",,,,,,,,,,,
Sunflower - Spider-Man: Into the Spider-Verse,2018,"Post Malone, Swae Lee",,,,,,,,,,,
I'm Good (Blue),2022,"Bebe Rexha, David Guetta",,,,,,,,,,,
See You Again,2017,"Tyler, The Creator, Kali Uchis",,,,,,,,,,,
Barbie World (with Aqua) [From Barbie The Album],2023,"Nicki Minaj, Aqua, Ice Spice",,,,,,,,,,,
Angels Like You,2020,Miley Cyrus,,,,,,,,,,,
I Ain't Worried,2022,OneRepublic,,,,,,,,,,,
Die For You,2016,The Weeknd,,,,,,,,,,,
Starboy,2016,"The Weeknd, Daft Punk",,,,,,,,,,,
Die For You - Remix,2023,"Ariana Grande, The Weeknd",,,,,,,,,,,
El Cielo,2023,"Feid, Myke Towers, Sky Rompiendo",,,,,,,,,,,
Baby Don't Hurt Me,2023,"David Guetta, Anne-Marie, Coi Leray",,,,,,,,,,,
AMARGURA,2023,Karol G,,,,,,,,,,,
(It Goes Like) Nanana - Edit,2023,Peggy Gou,,,,,,,,,,,
Another Love,2012,Tom Odell,,,,,,,,,,,
Blinding Lights,2019,The Weeknd,,,,,,,,,,,
Moonlight,2023,Kali Uchis,,,,,,,,,,,
La Bachata,2022,Manuel Turizo,,,,,,,,,,,
S91,2023,Karol G,,,,,,,,,,,
cardigan,2020,Taylor Swift,,,,,,,,,,,
T��,2023,"dennis, MC Kevin o Chris",,,,,,,,,,,
Boy's a liar Pt. 2,2023,"PinkPantheress, Ice Spice",,,,,,,,,,,
Left and Right (Feat. Jung Kook of BTS),2022,"Charlie Puth, BTS, Jung Kook",,,,,,,,,,,
BESO,2023,"Rauw Alejandro, ROSAL�",,,,,,,,,,,
Hey Mor,2022,"Ozuna, Feid",,,,,,,,,,,
Yellow,1999,Chris Molitor,,,,,,,,,,,
Karma,2022,Taylor Swift,,,,,,,,,,,
People,2022,Libianca,,,,,,,,,,,
Overdrive,2023,Post Malone,,,,,,,,,,,
Enchanted (Taylor's Version),2023,Taylor Swift,,,,,,,,,,,
BABY HELLO,2023,"Rauw Alejandro, Bizarrap",,,,,,,,,,,
Heat Waves,2020,Glass Animals,,,,,,,,,,,
golden hour,2022,JVKE,,,,,,,,,,,
Sweater Weather,2012,The Neighbourhood,,,,,,,,,,,
"Quevedo: Bzrp Music Sessions, Vol. 52",2022,"Bizarrap, Quevedo",,,,,,,,,,,
Viva La Vida,2008,Coldplay,,,,,,,,,,,
Here With Me,2022,d4vd,,,,,,,,,,,
Unholy (feat. Kim Petras),2022,"Sam Smith, Kim Petras",,,,,,,,,,,
Yandel 150,2022,"Yandel, Feid",,,,,,,,,,,
CORAZ��N VA,2023,Maria Becerra,,,,,,,,,,,
Riptide,1975,Vance Joy,,,,,,,,,,,
Until I Found You (with Em Beihold) - Em Beihold Version,2022,"Em Beihold, Stephen Sanchez",,,,,,,,,,,
Novidade na ��,2023,"Mc Livinho, DJ Matt D",,,,,,,,,,,
Back To December (Taylor's Version),2023,Taylor Swift,,,,,,,,,,,
STAY (with Justin Bieber),2021,"Justin Bieber, The Kid Laroi",,,,,,,,,,,
El Merengue,2023,"Marshmello, Manuel Turizo",,,,,,,,,,,
Someone You Loved,2018,Lewis Capaldi,,,,,,,,,,,
Me Porto Bonito,2022,"Chencho Corleone, Bad Bunny",,,,,,,,,,,
Makeba,2015,Jain,,,,,,,,,,,
MONTAGEM - FR PUNK,2012,"Ayparia, unxbected",,,,,,,,,,,
Fast Car,2023,Luke Combs,,,,,,,,,,,
What It Is (Solo Version),2023,Doechii,,,,,,,,,,,
Coco Chanel,2023,"Bad Bunny, Eladio Carrion",,,,,,,,,,,
Don���t Bl,2017,Taylor Swift,,,,,,,,,,,
Still With You,2020,Jung Kook,,,,,,,,,,,
All My Life (feat. J. Cole),2023,"J. Cole, Lil Durk",,,,,,,,,,,
Say Yes To Heaven,2023,Lana Del Rey,,,,,,,,,,,
Snooze,2022,SZA,,,,,,,,,,,
Summertime Sadness,2011,Lana Del Rey,,,,,,,,,,,
Take Two,2023,BTS,,,,,,,,,,,
Lover,2012,Taylor Swift,,,,,,,,,,,
Too Many Nights (feat. Don Toliver & with Future),2022,"Future, Metro Boomin, Don Toliver",,,,,,,,,,,
Chemical,2023,Post Malone,,,,,,,,,,,
Mockingbird,2004,Eminem,,,,,,,,,,,
New Jeans,2023,NewJeans,,,,,,,,,,,
Primera Cita,2022,Carin Leon,,,,,,,,,,,
Cold Heart - PNAU Remix,2017,"Dua Lipa, Elton John, Pnau",,,,,,,,,,,
Dandelions,2017,Ruth B.,,,,,,,,,,,
Bones,2021,Imagine Dragons,,,,,,,,,,,
Set Fire to the Rain,2011,Adele,,,,,,,,,,,
Money Trees,2012,"Kendrick Lamar, Jay Rock",,,,,,,,,,,
Tak Segampang Itu,2022,Anggi Marito,,,,,,,,,,,
LAGUNAS,2023,"Jasiel Nu��ez, Peso P",,,,,,,,,,,
Mine (Taylor's Version),2023,Taylor Swift,,,,,,,,,,,
Everybody Wants To Rule The World,1985,Tears For Fears,,,,,,,,,,,
No Role Modelz,2014,J. Cole,,,,,,,,,,,
Tattoo,2023,Loreen,,,,,,,,,,,
Rara Vez,2023,"Taiu, Milo j",,,,,,,,,,,
VAGABUNDO,2023,"Sebastian Yatra, Manuel Turizo, Be��",,,,,,,,,,,
august,2020,Taylor Swift,,,,,,,,,,,
LUNA,2023,"Junior H, Peso Pluma",,,,,,,,,,,
Miracle (with Ellie Goulding),2023,"Calvin Harris, Ellie Goulding",,,,,,,,,,,
Nonsense,2022,Sabrina Carpenter,,,,,,,,,,,
Que Vuelvas,2022,"Carin Leon, Grupo Frontera",,,,,,,,,,,
Por las Noches,2021,Peso Pluma,,,,,,,,,,,
Feliz Cumplea��os Fe,2022,Feid,,,,,,,,,,,
Can't Hold Us (feat. Ray Dalton),2011,"Ray Dalton, Ryan Lewis, Macklemore",,,,,,,,,,,
Watermelon Sugar,2019,Harry Styles,,,,,,,,,,,
lovely - Bonus Track,2017,"Billie Eilish, Khalid",,,,,,,,,,,
"Rauw Alejandro: Bzrp Music Sessions, Vol. 56",2023,"Rauw Alejandro, Bizarrap",,,,,,,,,,,
Queencard,2023,(G)I-DLE,,,,,,,,,,,
OMG,2023,NewJeans,,,,,,,,,,,
Radio,2011,Lana Del Rey,,,,,,,,,,,
"Shakira: Bzrp Music Sessions, Vol. 53",2023,"Shakira, Bizarrap",,,,,,,,,,,
505,2007,Arctic Monkeys,,,,,,,,,,,
"Calling (Spider-Man: Across the Spider-Verse) (Metro Boomin & Swae Lee, NAV, feat. A Boogie Wit da Hoodie)",2023,"Swae Lee, A Boogie Wit da Hoodie, Metro Boomin, NAV",,,,,,,,,,,
Trance (with Travis Scott & Young Thug),2022,"Travis Scott, Young Thug, Metro Boomin",,,,,,,,,,,
"Tere Vaaste (From ""Zara Hatke Zara Bachke"")",2023,"Sachin-Jigar, Shadab Faridi, Altamash Faridi, Amitabh Bhattacharya, Varun Jain",,,,,,,,,,,
Perfect,2017,Ed Sheeran,,,,,,,,,,,
Romantic Homicide,2022,d4vd,,,,,,,,,,,
Believer,2017,Imagine Dragons,,,,,,,,,,,
Novo Balan�,2023,"Veigh, Bvga Beatz, Supernova Ent, Prod Malax",,,,,,,,,,,
"Gol Bolinha, Gol Quadrado 2",2023,"Mc Pedrinho, DJ 900",,,,,,,,,,,
Without Me,2002,Eminem,,,,,,,,,,,
QUEMA,2023,"Sog, Ryan Castro, Peso Pluma",,,,,,,,,,,
Stargirl Interlude,2016,"The Weeknd, Lana Del Rey",,,,,,,,,,,
Ojitos Lindos,2022,"Bomba Est��reo, Bad B",,,,,,,,,,,
Somewhere Only We Know,2004,Keane,,,,,,,,,,,
Those Eyes,2019,New West,,,,,,,,,,,
El Gordo Trae El Mando,2023,Chino Pacas,,,,,,,,,,,
Mi Bello Angel,2023,Natanael Cano,,,,,,,,,,,
Bye,2023,Peso Pluma,,,,,,,,,,,
Danza Kuduro,2010,"Don Omar, Lucenzo",,,,,,,,,,,
Nosso Quadro,2023,"Ana Castela, AgroPlay",,,,,,,,,,,
Locked Out Of Heaven,2012,Bruno Mars,,,,,,,,,,,
Un Finde | CROSSOVER #2,2023,"Big One, FMK, Ke personajes",,,,,,,,,,,
Jimmy Cooks (feat. 21 Savage),2022,"Drake, 21 Savage",,,,,,,,,,,
Counting Stars,2013,OneRepublic,,,,,,,,,,,
Ghost,2021,Justin Bieber,,,,,,,,,,,
Under The Influence,2019,Chris Brown,,,,,,,,,,,
PRC,2023,"Natanael Cano, Peso Pluma",,,,,,,,,,,
Gasolina,2004,Daddy Yankee,,,,,,,,,,,
One Dance,2016,"Drake, WizKid, Kyla",,,,,,,,,,,
Enchanted,2010,Taylor Swift,,,,,,,,,,,
Save Your Tears,2020,The Weeknd,,,,,,,,,,,
Sure Thing,2010,Miguel,,,,,,,,,,,
Every Breath You Take - Remastered 2003,1983,The Police,,,,,,,,,,,
The Night We Met,2015,Lord Huron,,,,,,,,,,,
We Found Love,2011,"Rihanna, Calvin Harris",,,,,,,,,,,
When I Was Your Man,2012,Bruno Mars,,,,,,,,,,,
Let Me Down Slowly,2018,Alec Benjamin,,,,,,,,,,,
"Am I Dreaming (Metro Boomin & A$AP Rocky, Roisee)",2023,"A$AP Rocky, Metro Boomin, Roisee",,,,,,,,,,,
Do I Wanna Know?,2013,Arctic Monkeys,,,,,,,,,,,
Demons,2012,Imagine Dragons,,,,,,,,,,,
������������,2023,YOASOBI,,,,,,,,,,,
Reminder,2016,The Weeknd,,,,,,,,,,,
Shake It Off,2014,Taylor Swift,,,,,,,,,,,
Why'd You Only Call Me When You're High?,2013,Arctic Monkeys,,,,,,,,,,,
SNAP,2022,Rosa Linn,,,,,,,,,,,
Shape of You,2017,Ed Sheeran,,,,,,,,,,,
Night Changes,2014,One Direction,,,,,,,,,,,
Fin de Semana,2023,"Oscar Maydon, Junior H",,,,,,,,,,,
Creep,1992,Radiohead,,,,,,,,,,,
Car's Outside,2019,James Arthur,,,,,,,,,,,
Apocalypse,2017,Cigarettes After Sex,,,,,,,,,,,
Cheques,2023,Shubh,,,,,,,,,,,
Pink + White,2016,Frank Ocean,,,,,,,,,,,
Circles,2019,Post Malone,,,,,,,,,,,
Just The Way You Are,2010,Bruno Mars,,,,,,,,,,,
Take Me To Church,2013,Hozier,,,,,,,,,,,
Bebe Dame,2022,"Fuerza Regida, Grupo Frontera",,,,,,,,,,,
You Belong With Me (Taylor���s Ve,2021,Taylor Swift,,,,,,,,,,,
Titi Me Pregunt�,2022,Bad Bunny,,,,,,,,,,,
Better Than Revenge (Taylor's Version),2023,Taylor Swift,,,,,,,,,,,
Shut up My Moms Calling,2020,Hotel Ugly,,,,,,,,,,,
Have You Ever Seen The Rain?,1968,Creedence Clearwater Revival,,,,,,,,,,,
Es un Secreto,2010,Plan B,,,,,,,,,,,
POLARIS - Remix,2023,"Feid, Mora, Saiko, Quevedo",,,,,,,,,,,
Ditto,2022,NewJeans,,,,,,,,,,,
Take On Me,1984,a-ha,,,,,,,,,,,
"Annihilate (Spider-Man: Across the Spider-Verse) (Metro Boomin & Swae Lee, Lil Wayne, Offset)",2023,"Swae Lee, Lil Wayne, Offset, Metro Boomin",,,,,,,,,,,
"Angel Pt 1 (feat. Jimin of BTS, JVKE & Muni Long)",2023,"Kodak Black, NLE Choppa, Muni Long, JVKE, Jimin",,,,,,,,,,,
Acr��s,2023,Shakira,,,,,,,,,,,
AMG,2022,"Natanael Cano, Gabito Ballesteros, Peso Pluma",,,,,,,,,,,
"Phir Aur Kya Chahiye (From ""Zara Hatke Zara Bachke"")",2023,"Arijit Singh, Sachin-Jigar, Amitabha Bhattacharya",,,,,,,,,,,
S-Class,2023,Stray Kids,,,,,,,,,,,
Hits Different,2023,Taylor Swift,,,,,,,,,,,
Chanel,2023,"Becky G, Peso Pluma",,,,,,,,,,,
Self Love (Spider-Man: Across the Spider-Verse) (Metro Boomin & Coi Leray),2023,"Metro Boomin, Coi Leray",,,,,,,,,,,
Area Codes,2023,"Kaliii, Kaliii",,,,,,,,,,,
Abcdario,2023,"Junior H, Eden Mu��",,,,,,,,,,,
Obsessed,2022,"Abhijay Sharma, Riar Saab",,,,,,,,,,,
Pi��man De�,2023,"Semicenk, Do��u ",,,,,,,,,,,
FLOWER,2023,JISOO,,,,,,,,,,,
"All The Way Live (Spider-Man: Across the Spider-Verse) (Metro Boomin & Future, Lil Uzi Vert)",2023,"Future, Lil Uzi Vert, Metro Boomin",,,,,,,,,,,
Eyes Closed,2023,Ed Sheeran,,,,,,,,,,,
Escapism.,2022,"RAYE, 070 Shake",,,,,,,,,,,
La Jumpa,2022,"Arcangel, Bad Bunny",,,,,,,,,,,
Karma (feat. Ice Spice),2023,"Taylor Swift, Ice Spice",,,,,,,,,,,
Superhero (Heroes & Villains) [with Future & Chris Brown],2022,"Future, Chris Brown, Metro Boomin",,,,,,,,,,,
Las Morras,2023,"BLESSD, Peso Pluma",,,,,,,,,,,
CHORRITO PA LAS ANIMAS,2022,Feid,,,,,,,,,,,
Ch y la Pizza,2022,"Fuerza Regida, Natanael Cano",,,,,,,,,,,
Snow On The Beach (feat. More Lana Del Rey),2023,"Lana Del Rey, Taylor Swift",,,,,,,,,,,
Players,2022,Coi Leray,,,,,,,,,,,
Bite Me,2023,ENHYPEN,,,,,,,,,,,
Stand By Me (feat. Morgan Wallen),2023,"Lil Durk, Morgan Wallen",,,,,,,,,,,
Normal,2022,Feid,,,,,,,,,,,
Hummingbird (Metro Boomin & James Blake),2023,"James Blake, Metro Boomin",,,,,,,,,,,
Seu Brilho Sumiu - Ao Vivo,2023,"Israel & Rodolffo, Mari Fernandez",,,,,,,,,,,
Bad Habit,2022,Steve Lacy,,,,,,,,,,,
CUFF IT,2022,Beyonc�,,,,,,,,,,,
Lilith (feat. SUGA of BTS) (Diablo IV Anthem),2023,"Halsey, Suga",,,,,,,,,,,
69,2023,"Nicky Jam, Feid",,,,,,,,,,,
Ni��a Bo,2023,"Sean Paul, Feid",,,,,,,,,,,
Search & Rescue,2023,Drake,,,,,,,,,,,
AMERICA HAS A PROBLEM (feat. Kendrick Lamar),2023,"Kendrick Lamar, Beyonc�",,,,,,,,,,,
Lavender Haze,2022,Taylor Swift,,,,,,,,,,,
"Link Up (Metro Boomin & Don Toliver, Wizkid feat. BEAM & Toian) - Spider-Verse Remix (Spider-Man: Across the Spider-Verse )",2023,"WizKid, Toian, Metro Boomin, Don Toliver, Beam",,,,,,,,,,,
Efecto,2022,Bad Bunny,,,,,,,,,,,
Erro Gostoso - Ao Vivo,2023,Simone Mendes,,,,,,,,,,,
Cupido,2023,Tini,,,,,,,,,,,
Just Wanna Rock,2022,Lil Uzi Vert,,,,,,,,,,,
Unstoppable,2016,Sia,,,,,,,,,,,
Until I Found You,2021,Stephen Sanchez,,,,,,,,,,,
Rich Flex,2022,"Drake, 21 Savage",,,,,,,,,,,
Easy On Me,2021,Adele,,,,,,,,,,,
Cart��o B,2023,"MC Caverinha, KayBlack",,,,,,,,,,,
Danger (Spider) (Offset & JID),2023,"Offset, JID",,,,,,,,,,,
Oi Balde - Ao Vivo,2023,Z�� Neto & Crist,,,,,,,,,,,
The Real Slim Shady,2000,Eminem,,,,,,,,,,,
MERCHO,2022,"Migrantes, LiL CaKe, Nico Valdi",,,,,,,,,,,
The Color Violet,2021,Tory Lanez,,,,,,,,,,,
Glimpse of Us,2022,Joji,,,,,,,,,,,
Mejor Que Yo,2023,"Mambo Kingz, DJ Luian, Anuel Aa",,,,,,,,,,,
Curtains,2023,Ed Sheeran,,,,,,,,,,,
UNFORGIVEN (feat. Nile Rodgers),2023,"Nile Rodgers, LE SSERAFIM",,,,,,,,,,,
Haegeum,2023,Agust D,,,,,,,,,,,
Conex��es de M��fia (feat. Rich ,2023,"Rich The Kid, Matu�",,,,,,,,,,,
MIENTRAS ME CURO DEL CORA,2023,Karol G,,,,,,,,,,,
Never Felt So Alone,2023,Labrinth,,,,,,,,,,,
X SI VOLVEMOS,2023,"Karol G, Romeo Santos",,,,,,,,,,,
ceilings,2022,Lizzy McAlpine,,,,,,,,,,,
Cupid,2023,Fifty Fifty,,,,,,,,,,,
I AM,2023,IVE,,,,,,,,,,,
Cupid ��� Twin Ver. (FIFTY FIFTY) ��� Spe,1997,sped up 8282,,,,,,,,,,,
Shorty Party,2023,"Cartel De Santa, La Kelly",,,,,,,,,,,
Super,2023,SEVENTEEN,,,,,,,,,,,
Slut Me Out,2022,NLE Choppa,,,,,,,,,,,
Double Fantasy (with Future),2023,"The Weeknd, Future",,,,,,,,,,,
All Of The Girls You Loved Before,2019,Taylor Swift,,,,,,,,,,,
PROVENZA,2022,Karol G,,,,,,,,,,,
Princess Diana (with Nicki Minaj),2023,"Nicki Minaj, Ice Spice",,,,,,,,,,,
Di Que Si,2023,"Grupo Marca Registrada, Grupo Frontera",,,,,,,,,,,
Shivers,2021,Ed Sheeran,,,,,,,,,,,
Igualito a Mi Ap�,2022,"Fuerza Regida, Peso Pluma",,,,,,,,,,,
Shoong! (feat. LISA of BLACKPINK),2023,"TAEYANG, Lisa",,,,,,,,,,,
Komang,2022,Raim Laode,,,,,,,,,,,
DESPECH�,2022,ROSAL�,,,,,,,,,,,
Made You Look,2022,Meghan Trainor,,,,,,,,,,,
Watch This - ARIZONATEARS Pluggnb Remix,2023,"sped up nightcore, ARIZONATEARS, Lil Uzi Vert",,,,,,,,,,,
No Se Va,2022,Grupo Frontera,,,,,,,,,,,
Punto G,2022,Quevedo,,,,,,,,,,,
Lovers Rock,2014,TV Girl,,,,,,,,,,,
METAMORPHOSIS,2021,INTERWORLD,,,,,,,,,,,
Mami Chula,2023,"Quevedo, Jhayco",,,,,,,,,,,
En Paris,2022,"El Chachito, Junior H",,,,,,,,,,,
Set Me Free Pt.2,2023,Jimin,,,,,,,,,,,
I Was Never There,2018,"The Weeknd, Gesaffelstein",,,,,,,,,,,
Don't ever say love me (feat. RM of BTS),2023,"RM, Colde",,,,,,,,,,,
Shut Down,2022,BLACKPINK,,,,,,,,,,,
Gato de Noche,2022,"Nengo Flow, Bad Bunny",,,,,,,,,,,
Call Out My Name,2018,The Weeknd,,,,,,,,,,,
Like Crazy (English Version),2023,Jimin,,,,,,,,,,,
Rosa Pastel,2023,"Jasiel Nu��ez, Peso P",,,,,,,,,,,
Sunroof,2021,"Nicky Youre, Dazy",,,,,,,,,,,
Lose Yourself - Soundtrack Version,2002,Eminem,,,,,,,,,,,
Superman,2002,"Eminem, Dina Rae",,,,,,,,,,,
Mas Rica Que Ayer,2023,"Mambo Kingz, DJ Luian, Anuel Aa",,,,,,,,,,,
People Pt.2 (feat. IU),2023,"IU, Agust D",,,,,,,,,,,
REMIX EXCLUSIVO,2023,Feid,,,,,,,,,,,
"Arc��ngel: Bzrp Music Sessions, Vol",2023,"Arcangel, Bizarrap",,,,,,,,,,,
DOGTOOTH,2023,"Tyler, The Creator",,,,,,,,,,,
10:35,2022,"Ti��sto, Tate M",,,,,,,,,,,
SORRY NOT SORRY,2023,"Tyler, The Creator",,,,,,,,,,,
HAPPY,2023,NF,,,,,,,,,,,
La Bebe,2021,Yng Lvcas,,,,,,,,,,,
I Know - PR1SVX Edit,2023,"Kanii, PR1ISVX",,,,,,,,,,,
Late Night Talking,2022,Harry Styles,,,,,,,,,,,
Le�,2022,Mar��lia Mendo,,,,,,,,,,,
Save Your Tears (with Ariana Grande) (Remix),2020,"Ariana Grande, The Weeknd",,,,,,,,,,,
Something in the Orange,2022,Zach Bryan,,,,,,,,,,,
VOID,2023,Melanie Martinez,,,,,,,,,,,
Dijeron Que No La Iba Lograr,2023,"Fuerza Regida, Chino Pacas",,,,,,,,,,,
Midnight Rain,2022,Taylor Swift,,,,,,,,,,,
If We Ever Broke Up,2023,Mae Stephens,,,,,,,,,,,
You Proof,2022,Morgan Wallen,,,,,,,,,,,
LA INOCENTE,2022,"Feid, Mora",,,,,,,,,,,
Malas Decisiones,2022,Kenia OS,,,,,,,,,,,
Murder In My Mind,2022,Kordhell,,,,,,,,,,,
Gangsta's Paradise,1995,"Coolio, L.V.",,,,,,,,,,,
CAIRO,2022,"Karol G, Ovy On The Drums",,,,,,,,,,,
I Love You So,2014,The Walters,,,,,,,,,,,
Dark Red,2017,Steve Lacy,,,,,,,,,,,
Say You Won't Let Go,2016,James Arthur,,,,,,,,,,,
The Hills,2015,The Weeknd,,,,,,,,,,,
Heart To Heart,2019,Mac DeMarco,,,,,,,,,,,
Peaches (from The Super Mario Bros. Movie),2023,Jack Black,,,,,,,,,,,
Marisola - Remix,2022,"Duki, NICKI NICOLE, Cris Mj, Standly, Stars Music Chile",,,,,,,,,,,
LOKERA,2022,"Brray, Rauw Alejandro, Lyanno",,,,,,,,,,,
Low,2022,SZA,,,,,,,,,,,
Numb,2003,Linkin Park,,,,,,,,,,,
Tormenta (feat. Bad Bunny),2023,"Gorillaz, Bad Bunny",,,,,,,,,,,
on the street (with J. Cole),2023,"j-hope, J. Cole",,,,,,,,,,,
One Thing At A Time,2022,Morgan Wallen,,,,,,,,,,,
Miss You,2022,"Robin Schulz, Oliver Tree",,,,,,,,,,,
Ain���t Tha,2023,Morgan Wallen,,,,,,,,,,,
Thinkin��� B,2023,Morgan Wallen,,,,,,,,,,,
Private Landing (feat. Justin Bieber & Future),2023,"Don Toliver, Future, Justin Bieber",,,,,,,,,,,
Everything I Love,2023,Morgan Wallen,,,,,,,,,,,
Heaven,2023,Niall Horan,,,,,,,,,,,
LET GO,2022,Central Cee,,,,,,,,,,,
Sial,2023,Mahalini,,,,,,,,,,,
I Wrote The Book,2023,Morgan Wallen,,,,,,,,,,,
"Apna Bana Le (From ""Bhediya"")",2022,"Arijit Singh, Sachin-Jigar",,,,,,,,,,,
SPIT IN MY FACE!,2022,ThxSoMch,,,,,,,,,,,
PLAYA DEL INGL�,2022,"Myke Towers, Quevedo",,,,,,,,,,,
Man Made A Bar (feat. Eric Church),2023,"Morgan Wallen, Eric Church",,,,,,,,,,,
Red Ruby Da Sleeze,2023,Nicki Minaj,,,,,,,,,,,
Kahani Suno 2.0,2022,Kaifi Khalil,,,,,,,,,,,
Nobody Gets Me,2022,SZA,,,,,,,,,,,
PERO T�,2023,"Karol G, Quevedo",,,,,,,,,,,
Hype Boy,2022,NewJeans,,,,,,,,,,,
Bloody Mary,2011,Lady Gaga,,,,,,,,,,,
Monoton�,2022,"Ozuna, Shakira",,,,,,,,,,,
���98 Braves,2023,Morgan Wallen,,,,,,,,,,,
WANDA,2023,Quevedo,,,,,,,,,,,
Thought You Should Know,2022,Morgan Wallen,,,,,,,,,,,
In The End,2000,Linkin Park,,,,,,,,,,,
Zona De Perigo,2022,Leo Santana,,,,,,,,,,,
Lovezinho,2022,Treyce,,,,,,,,,,,
I Like You (A Happier Song) (with Doja Cat),2022,"Post Malone, Doja Cat",,,,,,,,,,,
Neverita,2022,Bad Bunny,,,,,,,,,,,
Vista Al Mar,2022,Quevedo,,,,,,,,,,,
Sem Alian��a no ,2022,"MC Xenon, Os Gemeos da Putaria",,,,,,,,,,,
Enemy (with JID) - from the series Arcane League of Legends,2021,"Imagine Dragons, League of Legends, JID, Arcane",,,,,,,,,,,
Revenge,2017,XXXTENTACION,,,,,,,,,,,
Bombonzinho - Ao Vivo,2022,"Israel & Rodolffo, Ana Castela",,,,,,,,,,,
LA CANCI�,2019,"J Balvin, Bad Bunny",,,,,,,,,,,
Qu�� Ago,2022,"Yuridia, Angela Aguilar",,,,,,,,,,,
Love Again,2023,The Kid Laroi,,,,,,,,,,,
After Hours,2020,The Weeknd,,,,,,,,,,,
About Damn Time,2022,Lizzo,,,,,,,,,,,
Born With A Beer In My Hand,2023,Morgan Wallen,,,,,,,,,,,
���������������������,2020,Fujii Kaze,,,,,,,,,,,
Besos Moja2,2022,"Wisin & Yandel, ROSAL�",,,,,,,,,,,
Maan Meri Jaan,2022,King,,,,,,,,,,,
Moscow Mule,2022,Bad Bunny,,,,,,,,,,,
My Universe,2021,"Coldplay, BTS",,,,,,,,,,,
Devil Don���,2023,Morgan Wallen,,,,,,,,,,,
LLYLM,2023,ROSAL�,,,,,,,,,,,
I'm Not Here To Make Friends,2023,"Sam Smith, Calvin Harris, Jessie Reyez",,,,,,,,,,,
TRUSTFALL,2023,P!nk,,,,,,,,,,,
ANTIFRAGILE,2022,LE SSERAFIM,,,,,,,,,,,
Boy's a liar,2022,PinkPantheress,,,,,,,,,,,
VIBE (feat. Jimin of BTS),2023,"TAEYANG, Jimin",,,,,,,,,,,
Shirt,2022,SZA,,,,,,,,,,,
Lift Me Up - From Black Panther: Wakanda Forever - Music From and Inspired By,2022,Rihanna,,,,,,,,,,,
STAR WALKIN' (League of Legends Worlds Anthem),2022,Lil Nas X,,,,,,,,,,,
"Sex, Drugs, Etc.",2016,Beach Weather,,,,,,,,,,,
Boy With Luv (feat. Halsey),2019,"Halsey, BTS",,,,,,,,,,,
"Hey, Mickey!",2016,Baby Tate,,,,,,,,,,,
Calm Down,2022,R��,,,,,,,,,,,
Jhoome Jo Pathaan,2022,"Arijit Singh, Vishal Dadlani, Sukriti Kakar, Vishal-Shekhar, Shekhar Ravjiani, Kumaar",,,,,,,,,,,
Escapism. - Sped Up,2022,"RAYE, 070 Shake",,,,,,,,,,,
Space Song,2015,Beach House,,,,,,,,,,,
Dreamers [Music from the FIFA World Cup Qatar 2022 Official Soundtrack],2022,"BTS, Jung Kook, FIFA Sound",,,,,,,,,,,
Te Felicito,2022,"Shakira, Rauw Alejandro",,,,,,,,,,,
Mu��,2023,"Steve Aoki, Tini, La Joaqui",,,,,,,,,,,
TV,2022,Billie Eilish,,,,,,,,,,,
I'm Not The Only One,2014,Sam Smith,,,,,,,,,,,
Heather,2020,Conan Gray,,,,,,,,,,,
"Besharam Rang (From ""Pathaan"")",2022,"Vishal-Shekhar, Shilpa Rao, Caralisa Monteiro, Kumaar, Vishal Dadlani, Shekhar Ravjiani",,,,,,,,,,,
One Kiss (with Dua Lipa),2017,"Calvin Harris, Dua Lipa",,,,,,,,,,,
Sugar Rush Ride,2023,TOMORROW X TOGETHER,,,,,,,,,,,
Pink Venom,2022,BLACKPINK,,,,,,,,,,,
WAIT FOR U (feat. Drake & Tems),2022,"Drake, Future, Tems",,,,,,,,,,,
Don't Start Now,2019,Dua Lipa,,,,,,,,,,,
After Dark,2014,Mr.Kitty,,,,,,,,,,,
Eu Gosto Assim - Ao Vivo,2022,"Gustavo Mioto, Mari Fernandez",,,,,,,,,,,
INDUSTRY BABY (feat. Jack Harlow),2021,"Jack Harlow, Lil Nas X",,,,,,,,,,,
MIDDLE OF THE NIGHT,2020,Elley Duh�,,,,,,,,,,,
Atlantis,2015,Seafret,,,,,,,,,,,
PUNTO 40,2022,"Baby Rasta, Rauw Alejandro",,,,,,,,,,,
Evoque Prata,2022,"DJ Escobar, MC MENOR SG, MC MENOR HR",,,,,,,,,,,
How Do I Say Goodbye,2022,Dean Lewis,,,,,,,,,,,
Blind,2022,SZA,,,,,,,,,,,
Die For You,2022,Joji,,,,,,,,,,,
Doja,2022,Central Cee,,,,,,,,,,,
Gatita,2022,Bellakath,,,,,,,,,,,
Rumble,2022,"Skrillex, Flowdan, Fred again..",,,,,,,,,,,
Niagara Falls (Foot or 2) [with Travis Scott & 21 Savage],2022,"Travis Scott, 21 Savage, Metro Boomin",,,,,,,,,,,
Yonaguni,2021,Bad Bunny,,,,,,,,,,,
Super Freaky Girl,2022,Nicki Minaj,,,,,,,,,,,
Running Up That Hill (A Deal With God),1985,Kate Bush,,,,,,,,,,,
Dream On,1973,Aerosmith,,,,,,,,,,,
Limbo,2022,Freddie Dredd,,,,,,,,,,,
Where Are You Now,2021,"Lost Frequencies, Calum Scott",,,,,,,,,,,
WORTH NOTHING,2022,"Twisted, Oliver Tree",,,,,,,,,,,
Bad Habits,2020,Ed Sheeran,,,,,,,,,,,
KICK BACK,2022,Kenshi Yonezu,,,,,,,,,,,
Evergreen (You Didn���t Deserve Me A,2022,Omar Apollo,,,,,,,,,,,
Good Days,2020,SZA,,,,,,,,,,,
Levitating (feat. DaBaby),2020,"Dua Lipa, DaBaby",,,,,,,,,,,
Woman,2021,Doja Cat,,,,,,,,,,,
Shut up My Moms Calling - (Sped Up),2022,Hotel Ugly,,,,,,,,,,,
Ferrari,2022,"James Hype, Miggy Dela Rosa",,,,,,,,,,,
"You're On Your Own, Kid",2022,Taylor Swift,,,,,,,,,,,
"Kesariya (From ""Brahmastra"")",2022,"Pritam, Arijit Singh, Amitabh Bhattacharya",,,,,,,,,,,
Agudo M��gi,1930,"Styrx, utku INC, Thezth",,,,,,,,,,,
Payphone,2012,"Maroon 5, Wiz Khalifa",,,,,,,,,,,
All I Want for Christmas Is You,1994,Mariah Carey,,,,,,,,,,,
Last Christmas,1984,Wham!,,,,,,,,,,,
Rockin' Around The Christmas Tree,1958,Brenda Lee,,,,,,,,,,,
Jingle Bell Rock,1957,Bobby Helms,,,,,,,,,,,
It's Beginning To Look A Lot Like Christmas,2011,Michael Bubl�,,,,,,,,,,,
Santa Tell Me,2013,Ariana Grande,,,,,,,,,,,
It's the Most Wonderful Time of the Year,1963,Andy Williams,,,,,,,,,,,
Let It Snow! Let It Snow! Let It Snow!,1959,Dean Martin,,,,,,,,,,,
Snowman,2017,Sia,,,,,,,,,,,
Underneath the Tree,2013,Kelly Clarkson,,,,,,,,,,,
Feliz Navidad,1970,Jos�� Felic,,,,,,,,,,,
Holly Jolly Christmas,2011,Michael Bubl�,,,,,,,,,,,
Mistletoe,2011,Justin Bieber,,,,,,,,,,,
Sleigh Ride,1963,The Ronettes,,,,,,,,,,,
Seek & Destroy,2022,SZA,,,,,,,,,,,
Love Language,2022,SZA,,,,,,,,,,,
Happy Xmas (War Is Over),1971,"John Lennon, The Harlem Community Choir, The Plastic Ono Band, Yoko Ono",,,,,,,,,,,
Used (feat. Don Toliver),2022,"SZA, Don Toliver",,,,,,,,,,,
A Holly Jolly Christmas - Single Version,1952,Burl Ives,,,,,,,,,,,
The Christmas Song (Merry Christmas To You) - Remastered 1999,1946,Nat King Cole,,,,,,,,,,,
Wonderful Christmastime - Edited Version / Remastered 2011,1979,Paul McCartney,,,,,,,,,,,
Do They Know It's Christmas? - 1984 Version,1984,Band Aid,,,,,,,,,,,
Ghost in the Machine (feat. Phoebe Bridgers),2022,"SZA, Phoebe Bridgers",,,,,,,,,,,
Special,2022,SZA,,,,,,,,,,,
Merry Christmas Everyone,1984,Shakin' Stevens,,,,,,,,,,,
Let It Snow! Let It Snow! Let It Snow!,1950,"Frank Sinatra, B. Swanson Quartet",,,,,,,,,,,
SOS,2022,SZA,,,,,,,,,,,
Open Arms (feat. Travis Scott),2022,"SZA, Travis Scott",,,,,,,,,,,
White Christmas,1942,"Bing Crosby, John Scott Trotter & His Orchestra, Ken Darby Singers",,,,,,,,,,,
Driving Home for Christmas - 2019 Remaster,1986,Chris Rea,,,,,,,,,,,
Christmas (Baby Please Come Home),1963,Darlene Love,,,,,,,,,,,
Gone Girl,2022,SZA,,,,,,,,,,,
F2F,2022,SZA,,,,,,,,,,,
Notice Me,2022,SZA,,,,,,,,,,,
Merry Christmas,2017,"Ed Sheeran, Elton John",,,,,,,,,,,
It's Beginning to Look a Lot Like Christmas (with Mitchell Ayres & His Orchestra),1958,"Perry Como, The Fontane Sisters, Mitchell Ayres & His Orchestra",,,,,,,,,,,
My Only Wish (This Year),2000,Britney Spears,,,,,,,,,,,
Antidepresan,2022,"Mabel Matiz, Mert Demir",,,,,,,,,,,
Wild Flower (with youjeen),2022,RM,,,,,,,,,,,
I Hate U,2021,SZA,,,,,,,,,,,
Raindrops (Insane) [with Travis Scott],2022,"Travis Scott, Metro Boomin",,,,,,,,,,,
SPIT IN MY FACE!,2022,ThxSoMch,,,,,,,,,,,
Deck The Hall - Remastered 1999,1959,Nat King Cole,,,,,,,,,,,
Smoking on my Ex Pack,2022,SZA,,,,,,,,,,,
Conceited,2022,SZA,,,,,,,,,,,
Snow On The Beach (feat. Lana Del Rey),2022,"Taylor Swift, Lana Del Rey",,,,,,,,,,,
Maroon,2022,Taylor Swift,,,,,,,,,,,
Tubar��o Te,2022,"Dj LK da Esc��cia, Tchakabum, mc jhenny, M",,,,,,,,,,,
Bejeweled,2022,Taylor Swift,,,,,,,,,,,
Tarot,2022,"Bad Bunny, Jhay Cortez",,,,,,,,,,,
You Make It Feel Like Christmas (feat. Blake Shelton),2005,"Gwen Stefani, Blake Shelton",,,,,,,,,,,
Desesperados,2021,"Chencho Corleone, Rauw Alejandro",,,,,,,,,,,
Too Late,2022,SZA,,,,,,,,,,,
Party,2022,"Bad Bunny, Rauw Alejandro",,,,,,,,,,,
Run Rudolph Run - Single Version,1958,Chuck Berry,,,,,,,,,,,
Jingle Bells - Remastered 1999,1957,Frank Sinatra,,,,,,,,,,,
Far,2022,SZA,,,,,,,,,,,
On Time (with John Legend),2022,"John Legend, Metro Boomin",,,,,,,,,,,
GAT��,2022,"Maldy, Karol G",,,,,,,,,,,
���abcdefu,2021,Gayle,,,,,,,,,,,
Sacrifice,2022,The Weeknd,,,,,,,,,,,
Is There Someone Else?,2022,The Weeknd,,,,,,,,,,,
Fingers Crossed,2022,"Lauren Spencer Smith, Lauren Spencer Smith, Lauren Spencer Smith",,,,,,,,,,,
Out of Time,2022,The Weeknd,,,,,,,,,,,
Do It To It,2021,"Cherish, ACRAZE",,,,,,,,,,,
We Don't Talk About Bruno,2021,"Adassa, Mauro Castillo, Stephanie Beatriz, Encanto - Cast, Rhenzy Feliz, Diane Guerrero, Carolina Gaitan",,,,,,,,,,,
Pepas,2021,Farruko,,,,,,,,,,,
How Do I Make You Love Me?,2022,The Weeknd,,,,,,,,,,,
Gasoline,2022,The Weeknd,,,,,,,,,,,
Infinity,2017,Jaymes Young,,,,,,,,,,,
Less Than Zero,2022,The Weeknd,,,,,,,,,,,
Take My Breath,2021,The Weeknd,,,,,,,,,,,
good 4 u,2021,Olivia Rodrigo,,,,,,,,,,,
"Here We Go��� Again (feat. Tyler, the Cr",2022,"The Weeknd, Tyler, The Creator",,,,,,,,,,,
Best Friends,2022,The Weeknd,,,,,,,,,,,
Kiss Me More (feat. SZA),2021,"SZA, Doja Cat",,,,,,,,,,,
I Heard You're Married (feat. Lil Wayne),2022,"The Weeknd, Lil Wayne",,,,,,,,,,,
Need To Know,2021,Doja Cat,,,,,,,,,,,
MONTERO (Call Me By Your Name),2020,Lil Nas X,,,,,,,,,,,
love nwantiti (ah ah ah),2019,Ckay,,,,,,,,,,,
Dawn FM,2022,The Weeknd,,,,,,,,,,,
Surface Pressure,2021,Jessica Darrow,,,,,,,,,,,
Starry Eyes,2022,The Weeknd,,,,,,,,,,,
THATS WHAT I WANT,2021,Lil Nas X,,,,,,,,,,,
One Right Now (with The Weeknd),2021,"The Weeknd, Post Malone",,,,,,,,,,,
Beggin,2017,M��ne,,,,,,,,,,,
Mon Amour - Remix,2020,"Aitana, zzoilo",,,,,,,,,,,
Lo Siento BB:/ (with Bad Bunny & Julieta Venegas),2021,"Julieta Venegas, Bad Bunny, Tainy",,,,,,,,,,,
MONEY,2021,Lisa,,,,,,,,,,,
The Motto,2021,"Ti��sto, Ava",,,,,,,,,,,
Happier Than Ever,2021,Billie Eilish,,,,,,,,,,,
Moth To A Flame (with The Weeknd),2021,"The Weeknd, Swedish House Mafia",,,,,,,,,,,
traitor,2021,"Juan Cruz Toledo, Huilen Toledo",,,,,,,,,,,
Toxic,2021,BoyWithUke,,,,,,,,,,,
drivers license,2021,Olivia Rodrigo,,,,,,,,,,,
Malvad��,2021,"Xam��, Gustah, Neo B",,,,,,,,,,,
All Too Well (10 Minute Version) (Taylor's Version) (From The Vault),2021,Taylor Swift,,,,,,,,,,,
Don���t Break My,2022,The Weeknd,,,,,,,,,,,
Oh My God,2021,Adele,,,,,,,,,,,
Entre Nosotros (Remix) [con Nicki Nicole],2022,"Lit Killah, Maria Becerra, Tiago pzk, NICKI NICOLE",,,,,,,,,,,
A Tale By Quincy,2022,The Weeknd,,,,,,,,,,,
I AM WOMAN,2021,Emmy Meli,,,,,,,,,,,
Medallo,2021,"Justin Quiles, Lenny Tav��rez, BL",,,,,,,,,,,
It'll Be Okay,2021,Shawn Mendes,,,,,,,,,,,
Softcore,2018,The Neighbourhood,,,,,,,,,,,
Super Gremlin,2021,Kodak Black,,,,,,,,,,,
Volv�,2021,"Aventura, Bad Bunny",,,,,,,,,,,
Todo De Ti,2020,Rauw Alejandro,,,,,,,,,,,
Love Nwantiti - Remix,2019,"Ckay, AX'EL, Dj Yo!",,,,,,,,,,,
Smokin Out The Window,2021,"Bruno Mars, Anderson .Paak, Silk Sonic",,,,,,,,,,,
Meet Me At Our Spot,2020,"THE ANXIETY, Willow, Tyler Cole",,,,,,,,,,,
Every Angel is Terrifying,2022,The Weeknd,,,,,,,,,,,
Tacones Rojos,2021,Sebastian Yatra,,,,,,,,,,,
Peaches (feat. Daniel Caesar & Giveon),2021,"Justin Bieber, Daniel Caesar, Giveon",,,,,,,,,,,
Dakiti,2020,"Bad Bunny, Jhay Cortez",,,,,,,,,,,
"Tiago PZK: Bzrp Music Sessions, Vol. 48",2021,"Bizarrap, Tiago pzk",,,,,,,,,,,
L���,2022,Stromae,,,,,,,,,,,
Nost��l,2021,"Chris Brown, Rvssian, Rauw Alejandro",,,,,,,,,,,
Better Days (NEIKED x Mae Muller x Polo G),2021,"NEIKED, Mae Muller, Polo G",,,,,,,,,,,
Life Goes On,2020,Oliver Tree,,,,,,,,,,,
Sad Girlz Luv Money Remix (feat. Kali Uchis),2021,"Kali Uchis, Amaarae, Moliy",,,,,,,,,,,
Butter,2021,BTS,,,,,,,,,,,
pushin P (feat. Young Thug),2022,"Young Thug, Future, Gunna",,,,,,,,,,,
You Right,2021,"Doja Cat, The Weeknd",,,,,,,,,,,
deja vu,2021,Olivia Rodrigo,,,,,,,,,,,
Dynamite,2020,BTS,,,,,,,,,,,
TO THE MOON,2021,Jnr Choi,,,,,,,,,,,
Lost in the Fire,2019,"The Weeknd, Gesaffelstein",,,,,,,,,,,
Salimo de Noche,2021,"Trueno, Tiago pzk",,,,,,,,,,,
Volando - Remix,2021,"Sech, Bad Bunny, Mora",,,,,,,,,,,
Leave The Door Open,2021,"Bruno Mars, Anderson .Paak, Silk Sonic",,,,,,,,,,,
Knife Talk (with 21 Savage ft. Project Pat),2021,"Drake, Project Pat, 21 Savage",,,,,,,,,,,
Don't Be Shy,2021,"Ti��sto, Kar",,,,,,,,,,,
Love Grows (Where My Rosemary Goes),1970,Edison Lighthouse,,,,,,,,,,,
LA FAMA (with The Weeknd),2021,"The Weeknd, ROSAL�",,,,,,,,,,,
The Family Madrigal,2021,"Olga Merediz, Stephanie Beatriz, Encanto - Cast",,,,,,,,,,,
Phantom Regret by Jim,2022,The Weeknd,,,,,,,,,,,
Dos Oruguitas,2021,Sebastian Yatra,,,,,,,,,,,
Freaks,2015,Surf Curse,,,,,,,,,,,
Acapulco,2021,Jason Derulo,,,,,,,,,,,
Daddy Issues,2015,The Neighbourhood,,,,,,,,,,,
thought i was playing,2022,"21 Savage, Gunna",,,,,,,,,,,
ELEVEN,2021,IVE,,,,,,,,,,,
Mood (feat. Iann Dior),2020,"24kgoldn, Iann Dior",,,,,,,,,,,
What Else Can I Do?,2021,"Stephanie Beatriz, Diane Guerrero",,,,,,,,,,,
DANCE CRIP,2021,Trueno,,,,,,,,,,,
Miserable Man,2022,David Kushner,,,,,,,,,,,
happier,2021,Olivia Rodrigo,,,,,,,,,,,
Praise God,2021,Kanye West,,,,,,,,,,,
Get Into It (Yuh),2021,Doja Cat,,,,,,,,,,,
Before You Go,2019,Lewis Capaldi,,,,,,,,,,,
Sky,2020,Playboi Carti,,,,,,,,,,,
Rolling in the Deep,2010,Adele,,,,,,,,,,,
Sobrio,2021,Maluma,,,,,,,,,,,
Peru,2021,"Ed Sheeran, Fireboy DML",,,,,,,,,,,
favorite crime,2021,Olivia Rodrigo,,,,,,,,,,,
Thunder,2021,"Prezioso, Gabry Ponte, LUM!X",,,,,,,,,,,
The Business,2020,Ti��,,,,,,,,,,,
positions,2020,Ariana Grande,,,,,,,,,,,
I WANNA BE YOUR SLAVE,2021,M��ne,,,,,,,,,,,
Vai L�� Em Casa ,2021,"Mar��lia Mendon��a, George Henrique &",,,,,,,,,,,
The Feels,2021,TWICE,,,,,,,,,,,
HEARTBREAK ANNIVERSARY,2020,Giveon,,,,,,,,,,,
No Lie,2016,"Sean Paul, Dua Lipa",,,,,,,,,,,
OUT OUT (feat. Charli XCX & Saweetie),2021,"Charli XCX, Jax Jones, Joel Corry, Saweetie",,,,,,,,,,,
Pope Is a Rockstar,2016,SALES,,,,,,,,,,,
2055,2021,Sleepy hallow,,,,,,,,,,,
Bored,2017,Billie Eilish,,,,,,,,,,,
Happier Than Ever - Edit,2021,Billie Eilish,,,,,,,,,,,
Astronaut In The Ocean,2019,Masked Wolf,,,,,,,,,,,
Ley Seca,2021,"Anuel Aa, Jhay Cortez",,,,,,,,,,,
Every Summertime,2021,NIKI,,,,,,,,,,,
Talking To The Moon,2010,Bruno Mars,,,,,,,,,,,
you broke me first,2020,Tate McRae,,,,,,,,,,,
The Nights,2014,Avicii,,,,,,,,,,,
Take My Breath,2021,The Weeknd,,,,,,,,,,,
Way 2 Sexy (with Future & Young Thug),2021,"Drake, Future, Young Thug",,,,,,,,,,,
C��,2021,Rauw Alejandro,,,,,,,,,,,
Enemy - from the series Arcane League of Legends,2021,"Imagine Dragons, League of Legends, Arcane",,,,,,,,,,,
Dance Monkey,2019,Tones and I,,,,,,,,,,,
Lucid Dreams,2017,Juice WRLD,,,,,,,,,,,
Qu�� M��,2021,"J Balvin, Maria Becerra",,,,,,,,,,,
All of Me,2013,John Legend,,,,,,,,,,,
Smells Like Teen Spirit - Remastered 2021,1991,Nirvana,,,,,,,,,,,
Arcade,2019,Duncan Laurence,,,,,,,,,,,
Fair Trade (with Travis Scott),2021,"Drake, Travis Scott",,,,,,,,,,,
Bar,2021,"Tini, L-Gante",,,,,,,,,,,
The Rumbling (TV Size),2022,SiM,,,,,,,,,,,
family ties (with Kendrick Lamar),2021,"Kendrick Lamar, Baby Keem",,,,,,,,,,,
Mr. Brightside,2003,The Killers,,,,,,,,,,,
Blessed-Cursed,2022,ENHYPEN,,,,,,,,,,,
AM Remix,2021,"J Balvin, Nio Garcia, Bad Bunny",,,,,,,,,,,
Streets,2019,Doja Cat,,,,,,,,,,,
Shallow,2018,"Lady Gaga, Bradley Cooper",,,,,,,,,,,
Polaroid Love,2022,ENHYPEN,,,,,,,,,,,
Leave Before You Love Me (with Jonas Brothers),2021,"Marshmello, Jonas Brothers",,,,,,,,,,,
Permission to Dance,2021,BTS,,,,,,,,,,,
Friday (feat. Mufasa & Hypeman) - Dopamine Re-Edit,2021,"Riton, Nightcrawlers, Mufasa & Hypeman, Dopamine",,,,,,,,,,,
RAPSTAR,2021,Polo G,,,,,,,,,,,
'Till I Collapse,2002,"Eminem, Nate Dogg",,,,,,,,,,,
Memories,2019,Maroon 5,,,,,,,,,,,
Se Le Ve,2021,"Arcangel, De La Ghetto, Justin Quiles, Lenny Tav��rez, Sech, Dalex, Dimelo Flow, Rich Music",,,,,,,,,,,
25k jacket (feat. Lil Baby),2022,"Gunna, Lil Baby",,,,,,,,,,,
When I���m Gone (with Katy ,2021,"Katy Perry, Alesso",,,,,,,,,,,
Esque��a-Me Se For C,2021,"Mar��lia Mendon��a, Maiara &",,,,,,,,,,,
Mi��n,2021,"Tini, Maria Becerra",,,,,,,,,,,
S��,2021,"Anuel Aa, Myke Towers, Jhay Cortez",,,,,,,,,,,
MAMIII,2022,"Karol G, Becky G",,,,,,,,,,,
Still D.R.E.,1999,"Dr. Dre, Snoop Dogg",,,,,,,,,,,
Stay Alive (Prod. SUGA of BTS),2022,Jung Kook,,,,,,,,,,,
Boyfriend,2022,Dove Cameron,,,,,,,,,,,
The Joker And The Queen (feat. Taylor Swift),2022,"Ed Sheeran, Taylor Swift",,,,,,,,,,,
The Next Episode,1999,"Dr. Dre, Snoop Dogg",,,,,,,,,,,
Light Switch,2022,Charlie Puth,,,,,,,,,,,
City of Gods,2022,"Kanye West, Alicia Keys, Fivio Foreign",,,,,,,,,,,
Brividi,2022,"Mahmood, Blanco",,,,,,,,,,,
Lost,2012,Frank Ocean,,,,,,,,,,,
In Da Club,2002,50 Cent,,,,,,,,,,,
she's all i wanna be,2022,Tate McRae,,,,,,,,,,,
Ginseng Strip 2002,2013,Yung Lean,,,,,,,,,,,
All For Us - from the HBO Original Series Euphoria,2019,"Labrinth, Zendaya",,,,,,,,,,,
Notion,2016,The Rare Occasions,,,,,,,,,,,
Formula,2019,Labrinth,,,,,,,,,,,
Mount Everest,2019,Labrinth,,,,,,,,,,,
Excuses,2020,"Intense, AP Dhillon, Gurinder Gill",,,,,,,,,,,
Cigarettes,2021,Juice WRLD,,,,,,,,,,,
"Cay�� La Noche (feat. Cruz Cafun��, Abhir Hathi, Bejo, EL IMA)",2022,"Quevedo, La Pantera, Juseph, Cruz Cafun��, B��jo, Abhir Hathi",,,,,,,,,,,
California Love - Original Version (Explicit),1995,"Dr. Dre, 2Pac, Roger",,,,,,,,,,,
Forgot About Dre,1999,"Eminem, Dr. Dre",,,,,,,,,,,
Down Under (feat. Colin Hay),2021,"Luude, Colin Hay",,,,,,,,,,,
Mujeriego,2021,Ryan Castro,,,,,,,,,,,
HUMBLE.,2017,Kendrick Lamar,,,,,,,,,,,
Stan,1999,"Eminem, Dido",,,,,,,,,,,
Contection,2020,"GODZZ__-, Zakaria",,,,,,,,,,,
Swim,2017,Chase Atlantic,,,,,,,,,,,
A Tu Merced,2020,Bad Bunny,,,,,,,,,,,
Numb Little Bug,2022,Em Beihold,,,,,,,,,,,
212,2022,"Mainstreet, Chefin",,,,,,,,,,,
Problem�,2021,"Alvaro Diaz, Rauw Alejandro",,,,,,,,,,,
Bussin,2022,"Nicki Minaj, Lil Baby",,,,,,,,,,,
Worst Day,2022,Future,,,,,,,,,,,
Malvada,2022,Z�� Fe,,,,,,,,,,,
Hrs and Hrs,2021,Muni Long,,,,,,,,,,,
Alien Blues,2015,Vundabar,,,,,,,,,,,
Thinking Out Loud,2014,Ed Sheeran,,,,,,,,,,,
Still Don't Know My Name,2019,Labrinth,,,,,,,,,,,
Christmas Tree,2021,V,,,,,,,,,,,
Mal Feito - Ao Vivo,2022,"Mar��lia Mendon��a, Hugo & G",,,,,,,,,,,
When I R.I.P.,2019,Labrinth,,,,,,,,,,,
Do We Have A Problem?,2022,"Nicki Minaj, Lil Baby",,,,,,,,,,,
Forever,2019,Labrinth,,,,,,,,,,,
Gospel (with Eminem),2022,"Eminem, Dr. Dre",,,,,,,,,,,
Se��o,2019,"Shawn Mendes, Camila Cabello",,,,,,,,,,,
NEW MAGIC WAND,2019,"Tyler, The Creator",,,,,,,,,,,
Adore You,2019,Harry Styles,,,,,,,,,,,
La Santa,2020,"Daddy Yankee, Bad Bunny",,,,,,,,,,,
Something In The Way - Remastered 2021,1991,Nirvana,,,,,,,,,,,
Sweetest Pie,2022,"Dua Lipa, Megan Thee Stallion",,,,,,,,,,,
Bam Bam (feat. Ed Sheeran),2022,"Camila Cabello, Ed Sheeran",,,,,,,,,,,
Una Noche en Medell�,2022,Cris Mj,,,,,,,,,,,
Envolver,2021,Anitta,,,,,,,,,,,
Starlight,2022,Dave,,,,,,,,,,,
Hati-Hati di Jalan,2022,Tulus,,,,,,,,,,,
"I'm Tired - From ""Euphoria"" An Original HBO Series",2022,Labrinth,,,,,,,,,,,
DAN��A,2022,"Mc Pedrinho, Pedro Sampaio",,,,,,,,,,,
Yo Voy (feat. Daddy Yankee),2004,Zion & Lennox,,,,,,,,,,,
"Residente: Bzrp Music Sessions, Vol. 49",2022,"Residente, Bizarrap",,,,,,,,,,,
Jordan,2021,Ryan Castro,,,,,,,,,,,
Nail Tech,2022,Jack Harlow,,,,,,,,,,,
Chale,2022,Eden Mu��,,,,,,,,,,,
DARARI,2022,Treasure,,,,,,,,,,,
Ya No Somos Ni Seremos,2022,Christian Nodal,,,,,,,,,,,
Thinking with My Dick,2013,"Kevin Gates, Juicy J",,,,,,,,,,,
Freaky Deaky,2022,"Tyga, Doja Cat",,,,,,,,,,,
this is what falling in love feels like,2021,JVKE,,,,,,,,,,,
La Zona,2020,Bad Bunny,,,,,,,,,,,
Bohemian Rhapsody - Remastered 2011,1975,Queen,,,,,,,,,,,
Hope,2018,XXXTENTACION,,,,,,,,,,,
Levitating,2020,Dua Lipa,,,,,,,,,,,
Wake Me Up - Radio Edit,2013,Avicii,,,,,,,,,,,
"jealousy, jealousy",2021,Olivia Rodrigo,,,,,,,,,,,
Mon��y so,2021,YEAT,,,,,,,,,,,
Demasiadas Mujeres,2020,C. Tangana,,,,,,,,,,,
Something Just Like This,2017,"The Chainsmokers, Coldplay",,,,,,,,,,,
Closer,2016,"The Chainsmokers, Halsey",,,,,,,,,,,
O.O,2022,NMIXX,,,,,,,,,,,
Somebody That I Used To Know,2011,"Gotye, Kimbra",,,,,,,,,,,
Tom's Diner,2019,"AnnenMayKantereit, Giant Rooks",,,,,,,,,,,
First Class,2022,Jack Harlow,,,,,,,,,,,
Plan A,2022,Paulo Londra,,,,,,,,,,,
Fuera del mercado,2022,Danny Ocean,,,,,,,,,,,
X ��LTIMA,2022,"Daddy Yankee, Bad Bunny",,,,,,,,,,,
When You're Gone,2022,Shawn Mendes,,,,,,,,,,,
In My Head,2022,Lil Tjay,,,,,,,,,,,
Wait a Minute!,2015,Willow,,,,,,,,,,,
LOVE DIVE,2022,IVE,,,,,,,,,,,
Pantysito,2022,"Feid, Alejo, Robi",,,,,,,,,,,
Chance,2022,Paulo Londra,,,,,,,,,,,
Cool for the Summer,2015,Demi Lovato,,,,,,,,,,,
psychofreak (feat. WILLOW),2022,"Camila Cabello, Willow",,,,,,,,,,,
Angel Baby,2021,Troye Sivan,,,,,,,,,,,
Vampiro,2022,"Matu��, Wiu, ",,,,,,,,,,,
Si Quieren Frontear,2022,"De La Ghetto, Duki, Quevedo",,,,,,,,,,,
Right On,2022,Lil Baby,,,,,,,,,,,
Me Arrepent�,2022,"Ak4:20, Cris Mj, Pailita",,,,,,,,,,,
That's Hilarious,2022,Charlie Puth,,,,,,,,,,,
Soy El Unico,2022,Yahritza Y Su Esencia,,,,,,,,,,,
RUMBAT�,2022,Daddy Yankee,,,,,,,,,,,
sentaDONA (Remix) s2,2022,"Lu��sa Sonza, MC Frog, Dj Gabriel do Borel, Davi K",,,,,,,,,,,
Falling,2019,Harry Styles,,,,,,,,,,,
Sigue,1996,"Ed Sheeran, J Balvin",,,,,,,,,,,
Fim de Semana no Rio,2022,teto,,,,,,,,,,,
MANIAC,2022,Stray Kids,,,,,,,,,,,
There's Nothing Holdin' Me Back,2016,Shawn Mendes,,,,,,,,,,,
IDGAF (with blackbear),2022,"Blackbear, BoyWithUke",,,,,,,,,,,
Golden,2019,Harry Styles,,,,,,,,,,,
Get Lucky - Radio Edit,2013,"Pharrell Williams, Nile Rodgers, Daft Punk",,,,,,,,,,,
Ain't Shit,2021,Doja Cat,,,,,,,,,,,
"Nobody Like U - From ""Turning Red""",2022,"Jordan Fisher, Josh Levi, Finneas O'Connell, 4*TOWN (From Disney and Pixar���s Turning Red), Topher Ngo, Grayson Vill",,,,,,,,,,,
Still Life,2022,BIGBANG,,,,,,,,,,,
Photograph,2014,Ed Sheeran,,,,,,,,,,,
Love Yourself,2015,Justin Bieber,,,,,,,,,,,
N95,2022,Kendrick Lamar,,,,,,,,,,,
About Damn Time,2022,Lizzo,,,,,,,,,,,
Die Hard,2022,"Kendrick Lamar, Blxst, Amanda Reifer",,,,,,,,,,,
Despu��s de la P,2022,Bad Bunny,,,,,,,,,,,
Un Ratito,2022,Bad Bunny,,,,,,,,,,,
United In Grief,2022,Kendrick Lamar,,,,,,,,,,,
Father Time (feat. Sampha),2022,"Kendrick Lamar, Sampha",,,,,,,,,,,
Yo No Soy Celoso,2022,Bad Bunny,,,,,,,,,,,
Rich Spirit,2022,Kendrick Lamar,,,,,,,,,,,
Cooped Up (with Roddy Ricch),2022,"Post Malone, Roddy Ricch",,,,,,,,,,,
Me Fui de Vacaciones,2022,Bad Bunny,,,,,,,,,,,
Silent Hill,2022,"Kendrick Lamar, Kodak Black",,,,,,,,,,,
La Corriente,2022,"Tony Dize, Bad Bunny",,,,,,,,,,,
Count Me Out,2022,Kendrick Lamar,,,,,,,,,,,
Andrea,2022,"Buscabulla, Bad Bunny",,,,,,,,,,,
Dos Mil 16,2022,Bad Bunny,,,,,,,,,,,
We Cry Together,2022,"Kendrick Lamar, Taylour Paige",,,,,,,,,,,
Savior,2022,"Kendrick Lamar, Sam Dew, Baby Keem",,,,,,,,,,,
Un Coco,2022,Bad Bunny,,,,,,,,,,,
Otro Atardecer,2022,"Bad Bunny, The Mar��",,,,,,,,,,,
Worldwide Steppers,2022,Kendrick Lamar,,,,,,,,,,,
Aguacero,2022,Bad Bunny,,,,,,,,,,,
Purple Hearts,2022,"Kendrick Lamar, Ghostface Killah, Summer Walker",,,,,,,,,,,
Un Verano Sin Ti,2022,Bad Bunny,,,,,,,,,,,
ULTRA SOLO,2022,"Polima WestCoast, Pailita",,,,,,,,,,,
Ens����ame ,2022,Bad Bunny,,,,,,,,,,,
El Apag�,2022,Bad Bunny,,,,,,,,,,,
Callaita,2019,"Bad Bunny, Tainy",,,,,,,,,,,
Dua Lipa,2022,Jack Harlow,,,,,,,,,,,
Agosto,2022,Bad Bunny,,,,,,,,,,,
House Of Memories,2016,Panic! At The Disco,,,,,,,,,,,
Mr. Morale,2022,"Kendrick Lamar, Tanna Leone",,,,,,,,,,,
That That (prod. & feat. SUGA of BTS),2022,"PSY, Suga",,,,,,,,,,,
In The Stars,2022,Benson Boone,,,,,,,,,,,
Rich - Interlude,2022,Kendrick Lamar,,,,,,,,,,,
SUPERMODEL,2022,M��ne,,,,,,,,,,,
Stefania (Kalush Orchestra),2022,KALUSH,,,,,,,,,,,
Thousand Miles,2022,The Kid Laroi,,,,,,,,,,,
Crown,2022,Kendrick Lamar,,,,,,,,,,,
Auntie Diaries,2022,Kendrick Lamar,,,,,,,,,,,
PUFFIN ON ZOOTIEZ,2022,Future,,,,,,,,,,,
Mirror,2022,Kendrick Lamar,,,,,,,,,,,
Beautiful Girl,2022,Luciano,,,,,,,,,,,
"Paulo Londra: Bzrp Music Sessions, Vol. 23",2022,"Bizarrap, Paulo Londra",,,,,,,,,,,
Savior - Interlude,2022,Kendrick Lamar,,,,,,,,,,,
Pasoori,2022,"Shae Gill, Ali Sethi",,,,,,,,,,,
Mother I Sober (feat. Beth Gibbons of Portishead),2022,"Kendrick Lamar, Beth Gibbons",,,,,,,,,,,
TUS L��GR,2022,"Sech, Mora",,,,,,,,,,,
Where Did You Go?,2022,"MNEK, Jax Jones",,,,,,,,,,,
I Tried to Tell Y'all,2022,"Ugly Dray, Tesla Jnr",,,,,,,,,,,
Honest (feat. Don Toliver),2022,"Justin Bieber, Don Toliver",,,,,,,,,,,
ZOOM,2022,Jessi,,,,,,,,,,,
SloMo,2021,Chanel,,,,,,,,,,,
FEARLESS,2022,LE SSERAFIM,,,,,,,,,,,
10 Things I Hate About You,2022,Leah Kate,,,,,,,,,,,
SPACE MAN,2022,Sam Ryder,,,,,,,,,,,
With you,2022,"HA SUNG WOON, Jimin",,,,,,,,,,,
Iris,1998,The Goo Goo Dolls,,,,,,,,,,,
The Heart Part 5,2022,Kendrick Lamar,,,,,,,,,,,
San Lucas,2019,Kevin Kaarl,,,,,,,,,,,
This Love (Taylor���s Ve,2022,Taylor Swift,,,,,,,,,,,
Good Looking,2017,Suki Waterhouse,,,,,,,,,,,
Flowers,2021,Lauren Spencer Smith,,,,,,,,,,,
Yet To Come,2022,BTS,,,,,,,,,,,
Run BTS,2022,BTS,,,,,,,,,,,
Music For a Sushi Restaurant,2022,Harry Styles,,,,,,,,,,,
Matilda,2022,Harry Styles,,,,,,,,,,,
For Youth,2022,BTS,,,,,,,,,,,
Daylight,2022,Harry Styles,,,,,,,,,,,
Vegas (From the Original Motion Picture Soundtrack ELVIS),2022,Doja Cat,,,,,,,,,,,
Cash In Cash Out,2022,"Pharrell Williams, Tyler, The Creator, 21 Savage",,,,,,,,,,,
Potion (with Dua Lipa & Young Thug),2022,"Calvin Harris, Dua Lipa, Young Thug",,,,,,,,,,,
Born Singer,2022,BTS,,,,,,,,,,,
Little Freak,2022,Harry Styles,,,,,,,,,,,
La Llevo Al Cielo (Ft. ��engo F,2022,"Nengo Flow, Anuel Aa, Chris Jedi, Chencho Corleone",,,,,,,,,,,
True Love,2022,"Kanye West, XXXTENTACION",,,,,,,,,,,
Satellite,2022,Harry Styles,,,,,,,,,,,
Pass The Dutchie,1982,Musical Youth,,,,,,,,,,,
"Villano Antillano: Bzrp Music Sessions, Vol. 51",2022,"Bizarrap, Villano Antillano",,,,,,,,,,,
Love Of My Life,2022,Harry Styles,,,,,,,,,,,
Grapejuice,2022,Harry Styles,,,,,,,,,,,
So Good,2022,Halsey,,,,,,,,,,,
Belly Dancer,2022,"BYOR, Imanbek",,,,,,,,,,,
Keep Driving,2022,Harry Styles,,,,,,,,,,,
Cinema,2022,Harry Styles,,,,,,,,,,,
Die Young (feat. 347aidan),2022,"Sleepy hallow, 347aidan",,,,,,,,,,,
Only Love Can Hurt Like This,2014,Paloma Faith,,,,,,,,,,,
Hold My Hand,2022,Lady Gaga,,,,,,,,,,,
Daydreaming,2022,Harry Styles,,,,,,,,,,,
Numb,2022,"Marshmello, Khalid",,,,,,,,,,,
Nos Comemos (feat. Ozuna),2022,"Ozuna, Tiago pzk",,,,,,,,,,,
Me and Your Mama,2016,Childish Gambino,,,,,,,,,,,
Crazy What Love Can Do,2022,"David Guetta, Ella Henderson, Becky Hill",,,,,,,,,,,
SLOW DANCING IN THE DARK,2018,Joji,,,,,,,,,,,
Antes de Perderte,2022,Duki,,,,,,,,,,,
Boyfriends,2022,Harry Styles,,,,,,,,,,,
295,2021,Sidhu Moose Wala,,,,,,,,,,,
Tak Ingin Usai,2022,Keisya Levronka,,,,,,,,,,,
En El Radio Un Cochinero,2022,Victor Cibrian,,,,,,,,,,,
Master of Puppets (Remastered),1986,Metallica,,,,,,,,,,,
BREAK MY SOUL,2022,Beyonc�,,,,,,,,,,,
ULTRA SOLO REMIX,2022,"De La Ghetto, Feid, Polima WestCoast, Paloma Mami, Pailita",,,,,,,,,,,
Massive,2022,Drake,,,,,,,,,,,
Betty (Get Money),2022,Yung Gravy,,,,,,,,,,,
Ojos Marrones,2022,Lasso,,,,,,,,,,,
POP!,2022,Nayeon,,,,,,,,,,,
Layla,2022,"Sch��rze, DJ R",,,,,,,,,,,
MORE,2022,j-hope,,,,,,,,,,,
Sweet Child O' Mine,1987,Guns N' Roses,,,,,,,,,,,
Last Last,2022,Burna Boy,,,,,,,,,,,
SNAP,2022,Rosa Linn,,,,,,,,,,,
Sticky,2022,Drake,,,,,,,,,,,
Hot Shit (feat. Ye & Lil Durk),2022,"Kanye West, Lil Durk, Cardi B",,,,,,,,,,,
Ai Preto,2022,"L7nnon, DJ Biel do Furduncinho, Bianca",,,,,,,,,,,
La Loto,2022,"Anitta, Tini, Becky G",,,,,,,,,,,
die first,2022,Nessa Barrett,,,,,,,,,,,
Afraid To Feel,2022,LF System,,,,,,,,,,,
Baile no Morro,2022,"Mc Vitin Da Igrejinha, MC Tairon, DJ Win",,,,,,,,,,,
c��mo dormi,2022,Rels B,,,,,,,,,,,
Bad Decisions (with BTS & Snoop Dogg),2022,"Snoop Dogg, BTS, Benny Blanco",,,,,,,,,,,
STAYING ALIVE (feat. Drake & Lil Baby),2022,"Drake, DJ Khaled, Lil Baby",,,,,,,,,,,
Caile,2020,Luar La L,,,,,,,,,,,
Si Te La Encuentras Por Ah�,2022,Feid,,,,,,,,,,,
GIVENCHY,2022,Duki,,,,,,,,,,,
ALIEN SUPERSTAR,2022,Beyonc�,,,,,,,,,,,
Mary On A Cross,2019,Ghost,,,,,,,,,,,
Attention,2022,NewJeans,,,,,,,,,,,
THE SHADE,2022,Rex Orange County,,,,,,,,,,,
"Come Back Home - From ""Purple Hearts""",2022,Sofia Carson,,,,,,,,,,,
El Rescate,2022,"Grupo Marca Registrada, Junior H",,,,,,,,,,,
Heartless,2008,Kanye West,,,,,,,,,,,
"Stay With Me (with Justin Timberlake, Halsey, & Pharrell)",2022,"Calvin Harris, Halsey, Pharrell Williams, Justin Timberlake",,,,,,,,,,,
Siempre Pendientes,2022,"Peso Pluma, Luis R Conriquez",,,,,,,,,,,
JGL,2022,"Luis R Conriquez, La Adictiva",,,,,,,,,,,
Don't You Worry,2022,"David Guetta, Shakira, Black Eyed Peas",,,,,,,,,,,
Pipoco,2022,"Melody, Ana Castela, Dj Chris No Beat",,,,,,,,,,,
Hold Me Closer,2017,"Elton John, Britney Spears",,,,,,,,,,,
Forget Me,2022,Lewis Capaldi,,,,,,,,,,,
After LIKE,2022,IVE,,,,,,,,,,,
Bound 2,2013,Kanye West,,,,,,,,,,,
B.O.T.A. (Baddest Of Them All) - Edit,2022,"Interplanetary Criminal, Eliza Rose",,,,,,,,,,,
Talk that Talk,2022,TWICE,,,,,,,,,,,
BILLIE EILISH.,2022,Armani White,,,,,,,,,,,
Ferxxo 100,2022,Feid,,,,,,,,,,,
KU LO SA - A COLORS SHOW,2022,Oxlade,,,,,,,,,,,
Prohibidox,2022,Feid,,,,,,,,,,,
Static,2022,Steve Lacy,,,,,,,,,,,
The Scientist,2002,Coldplay,,,,,,,,,,,
Sparks,2000,Coldplay,,,,,,,,,,,
Talk,2022,YEAT,,,,,,,,,,,
XQ Te Pones As�,2022,"Yandel, Feid",,,,,,,,,,,
Selfish,2016,PnB Rock,,,,,,,,,,,
Sin Se��,2022,"Ovy On The Drums, Quevedo",,,,,,,,,,,
Lady Mi Amor,2022,Feid,,,,,,,,,,,
Poland,2022,Lil Yachty,,,,,,,,,,,
THE LONELIEST,2022,M��ne,,,,,,,,,,,
Bye Bye,2022,"Marshmello, Juice WRLD",,,,,,,,,,,
BABY OTAKU,2022,"Fran C, Polima WestCoast, Nickoog Clk, Pablito Pesadilla",,,,,,,,,,,
Nxde,2022,(G)I-DLE,,,,,,,,,,,
Miss You,1982,Southstar,,,,,,,,,,,
we fell in love in october,2018,girl in red,,,,,,,,,,,
2 Be Loved (Am I Ready),2022,Lizzo,,,,,,,,,,,
Celestial,2022,Ed Sheeran,,,,,,,,,,,
Typa Girl,2022,BLACKPINK,,,,,,,,,,,
I Really Want to Stay at Your House,2020,"Rosa Walton, Hallie Coggins",,,,,,,,,,,
California Breeze,2022,Lil Baby,,,,,,,,,,,
Bamba (feat. Aitch & BIA),2022,"Luciano, Aitch, B�",,,,,,,,,,,
Casei Com a Putaria,2022,"MC Ryan SP, Love Funk, Mc Paiva ZS",,,,,,,,,,,
Major Distribution,2022,"Drake, 21 Savage",,,,,,,,,,,
Pussy & Millions (feat. Travis Scott),2022,"Drake, Travis Scott, 21 Savage",,,,,,,,,,,
Vigilante Shit,2022,Taylor Swift,,,,,,,,,,,
Question...?,2022,Taylor Swift,,,,,,,,,,,
On BS,2022,"Drake, 21 Savage",,,,,,,,,,,
Mastermind,2022,Taylor Swift,,,,,,,,,,,
Circo Loco,2022,"Drake, 21 Savage",,,,,,,,,,,
Labyrinth,2022,Taylor Swift,,,,,,,,,,,
Spin Bout U,2022,"Drake, 21 Savage",,,,,,,,,,,
Sweet Nothing,2022,Taylor Swift,,,,,,,,,,,
"Would've, Could've, Should've",2022,Taylor Swift,,,,,,,,,,,
Con La Brisa,2022,"Ludwig Goransson, Foudeqush",,,,,,,,,,,
Privileged Rappers,2022,"Drake, 21 Savage",,,,,,,,,,,
The Astronaut,2022,Jin,,,,,,,,,,,
BackOutsideBoyz,2022,Drake,,,,,,,,,,,
Broke Boys,2022,"Drake, 21 Savage",,,,,,,,,,,
The Great War,2022,Taylor Swift,,,,,,,,,,,
My Mind & Me,2022,Selena Gomez,,,,,,,,,,,
Bigger Than The Whole Sky,2022,Taylor Swift,,,,,,,,,,,
A Veces (feat. Feid),2022,"Feid, Paulo Londra",,,,,,,,,,,
En La De Ella,2022,"Feid, Sech, Jhayco",,,,,,,,,,,
Alone,2022,Burna Boy,,,,,,,,,,,`;
  var data = papaparse.parse(csv_data);
  return data?.data;
}

export function videogame_data() {
  var csv_data=`Helena Douglas,http://vignette3.wikia.nocookie.net/deadoralive/images/8/81/DOA5_Helena_Render.png/revision/latest/scale-to-width/220?cb=20130616181821,Dead or Alive
Princess Zelda,//upload.wikimedia.org/wikipedia/en/4/4b/Zelda_png.png,The Legend of Zelda
Grace Nakimura,//upload.wikimedia.org/wikipedia/en/d/d0/Grace_Nakimura_GK1.jpg,Gabriel Knight
Commander Shepard,//upload.wikimedia.org/wikipedia/en/d/df/Commander_Shepard.png,Mass Effect
Rayne (BloodRayne),//upload.wikimedia.org/wikipedia/en/thumb/6/6a/Rayne-japan.png/220px-Rayne-japan.png,BloodRayne
The Boss (Metal Gear),//upload.wikimedia.org/wikipedia/en/thumb/8/8a/The_Boss_%28Metal_Gear%29.png/210px-The_Boss_%28Metal_Gear%29.png,Metal Gear
Cate Archer,//upload.wikimedia.org/wikipedia/en/thumb/8/8e/Cate_Archer.png/200px-Cate_Archer.png,No One Lives Forever
Faith Connors,//upload.wikimedia.org/wikipedia/en/thumb/a/aa/Faith_Connors.png/110px-Faith_Connors.png,Mirror's Edge
Bayonetta (personaje),//upload.wikimedia.org/wikipedia/en/thumb/b/b8/Bayonetta-character.png/250px-Bayonetta-character.png,Bayonetta
Heather Mason,//upload.wikimedia.org/wikipedia/en/thumb/c/c0/Heather_Mason.png/210px-Heather_Mason.png,Silent Hill
Rinoa Heartilly,//upload.wikimedia.org/wikipedia/en/thumb/e/e4/Rinoa_Heartilly.png/220px-Rinoa_Heartilly.png,Final Fantasy
Hana Tsu-Vachel,//upload.wikimedia.org/wikipedia/en/thumb/e/e9/Hana_Tsu-Vachel.jpg/210px-Hana_Tsu-Vachel.jpg,Fear Effect
Miranda Lawson,//upload.wikimedia.org/wikipedia/en/thumb/f/f4/MirandaLawson.png/150px-MirandaLawson.png,Mass Effect
Alma Wade,//upload.wikimedia.org/wikipedia/en/thumb/f/ff/Alma_Wade_Project_Origin.jpg/250px-Alma_Wade_Project_Origin.jpg,F.E.A.R.
Jynx,//upload.wikimedia.org/wikipedia/en/thumb/a/af/Pok%C3%A9mon_Jynx_%28purple%29_art.png/220px-Pok%C3%A9mon_Jynx_%28purple%29_art.png,Pokémon
Misty (Pokémon),//upload.wikimedia.org/wikipedia/en/thumb/b/b1/MistyEP.png/129px-MistyEP.png,Pokémon
Latias and Latios,//upload.wikimedia.org/wikipedia/en/thumb/b/ba/Latias_and_Latios.png/200px-Latias_and_Latios.png,Pokémon
Elena Fisher,//upload.wikimedia.org/wikipedia/en/6/6c/Elena_Fisher.png,Uncharted
Midna,//upload.wikimedia.org/wikipedia/en/thumb/a/ae/Midna.png/225px-Midna.png,The Legend of Zelda
Princess Daisy (character),//upload.wikimedia.org/wikipedia/en/thumb/3/3b/DaisyMarioParty8.png/180px-DaisyMarioParty8.png,Mario
Rosalina,//upload.wikimedia.org/wikipedia/en/thumb/9/9b/Rosalina_from_Super_Mario_Galaxy.png/235px-Rosalina_from_Super_Mario_Galaxy.png,Mario
Birdo (character),//upload.wikimedia.org/wikipedia/en/thumb/f/f9/Birdo-MP9.png/200px-Birdo-MP9.png,Mario
Mother Brain (Metroid),//upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Nintendo.svg/32px-Nintendo.svg.png,Metroid
Epona (The Legend of Zelda),//upload.wikimedia.org/wikipedia/commons/thumb/8/86/Triforce.svg/32px-Triforce.svg.png,The Legend of Zelda
Cortana,//upload.wikimedia.org/wikipedia/en/9/9a/Cortana_H4.png,Halo
Elizabeth (BioShock),//upload.wikimedia.org/wikipedia/en/a/a1/Elizabeth_%28BioShock%29.png,BioShock
Rouge the Bat,//upload.wikimedia.org/wikipedia/en/9/9f/Rouge2006.png,Sonic the Hedgehog
Amy Rose,//upload.wikimedia.org/wikipedia/en/thumb/a/ab/Amy_Rose_with_hammer.png/200px-Amy_Rose_with_hammer.png,Sonic the Hedgehog
Yuri Sakazaki,//upload.wikimedia.org/wikipedia/en/9/93/Yuri_Sakazaki.png,"Art of Fighting, The King of Fighters"
Mai Shiranui,//upload.wikimedia.org/wikipedia/en/9/9a/Mai_Shiranui.png,"Fatal Fury, The King of Fighters"
Aerith Gainsborough,//upload.wikimedia.org/wikipedia/en/2/2f/Aerith_Gainsborough.png,Final Fantasy
Tifa Lockhart,//upload.wikimedia.org/wikipedia/en/6/61/Tifa_Lockhart_art.png,Final Fantasy
Yuna (Final Fantasy),//upload.wikimedia.org/wikipedia/en/7/71/Yuna.png,Final Fantasy
Lulu (Final Fantasy),//upload.wikimedia.org/wikipedia/en/thumb/1/1f/Lulu.png/225px-Lulu.png,Final Fantasy
Yuffie Kisaragi,//upload.wikimedia.org/wikipedia/en/thumb/6/6a/Yuffie_Kisaragi.png/235px-Yuffie_Kisaragi.png,Final Fantasy
Franziska von Karma,http://upload.wikimedia.org/wikipedia/en/thumb/1/19/Franziska_von_Karma.png/200px-Franziska_von_Karma.png,Ace Attorney
Athena Asamiya,//upload.wikimedia.org/wikipedia/en/thumb/2/23/Athena_Asamiya.png/175px-Athena_Asamiya.png,"The King of Fighters, SNK vs. Capcom"
Cammy (Street Fighter),//upload.wikimedia.org/wikipedia/en/2/27/Cammy_%28Street_Fighter_character%29.png,Street Fighter
Christie (Dead or Alive),//upload.wikimedia.org/wikipedia/en/2/27/Christie_%28Dead_or_Alive%29.png,Dead or Alive
Sheeva,//upload.wikimedia.org/wikipedia/en/3/3e/SheevaMK2011.png,Mortal Kombat
Julia Chang,//upload.wikimedia.org/wikipedia/en/4/40/Julia-Chang.png,Tekken
Avatar (Ultima),//upload.wikimedia.org/wikipedia/en/4/44/Avatar_Ultima_6.jpg,Ultima
KOS-MOS,//upload.wikimedia.org/wikipedia/en/4/48/KOS-MOS_Xenosaga_3.png,Xenosaga
Shion Uzuki,//upload.wikimedia.org/wikipedia/en/5/5c/Shion.png,Xenosaga
Meryl Silverburgh (Metal Gear),//upload.wikimedia.org/wikipedia/en/8/86/Meryl_Silverburgh.png,Metal Gear
Joanna Dark,//upload.wikimedia.org/wikipedia/en/9/91/Joanna_dark_N64_render.png,Perfect Dark
Zero,//upload.wikimedia.org/wikipedia/en/9/93/Zero_DG3_official_concept_art.jpg,Drakengard
Sarah Bryant (Virtua Fighter),//upload.wikimedia.org/wikipedia/en/9/9e/Sarah_Bryant_%28Virtua_Fighter%29.png,Virtua Fighter
Nilin (Remember Me),//upload.wikimedia.org/wikipedia/en/a/a0/Nilin_%28Remember_Me%29.png,Remember Me
Princess Daphne,//upload.wikimedia.org/wikipedia/en/b/b6/Princess_Daphne_with_Dirk.png,Dragon's Lair
GlaDOS,//upload.wikimedia.org/wikipedia/en/b/bf/Glados.png,Portal
Kasumi (Dead or Alive),//upload.wikimedia.org/wikipedia/en/c/c0/Kasumi_%28Dead_or_Alive%29.png,Dead or Alive
Kitana (Mortal Kombat),//upload.wikimedia.org/wikipedia/en/d/d0/Kitana.png,Mortal Kombat
Nina Williams,//upload.wikimedia.org/wikipedia/en/d/d1/Nina-williams.png,Tekken
Michelle Chang (Tekken),//upload.wikimedia.org/wikipedia/en/d/d5/Michelle_Chang_%28Tekken%29.png,Tekken
Poison (Final Fight),//upload.wikimedia.org/wikipedia/en/d/d7/Poison_SF.png,"Final Fight, Street Fighter"
Chun-Li (Street Fighter),//upload.wikimedia.org/wikipedia/en/f/f4/Chun-Li_tatsunoko.png,Street Fighter
Ayu Tsukimiya,//upload.wikimedia.org/wikipedia/en/f/f9/Ayu_Tsukimiya_Key.jpg,Kanon
Hsien-Ko,//upload.wikimedia.org/wikipedia/en/thumb/0/00/Hsien-Ko_%28Darkstalkers%29.png/250px-Hsien-Ko_%28Darkstalkers%29.png,Darkstalkers
Sakura Kasugano,//upload.wikimedia.org/wikipedia/en/thumb/0/01/Sakura_Kasugano.png/235px-Sakura_Kasugano.png,Street Fighter
Black Orchid (Killer Instinct),//upload.wikimedia.org/wikipedia/en/thumb/0/02/Orchid_%28Killer_Instinct%29.png/225px-Orchid_%28Killer_Instinct%29.png,Killer Instinct
Navi (The Legend of Zelda),//upload.wikimedia.org/wikipedia/en/thumb/0/04/Navi_%28The_Legend_of_Zelda%29.png/230px-Navi_%28The_Legend_of_Zelda%29.png,The Legend of Zelda
Sniper Wolf,//upload.wikimedia.org/wikipedia/en/thumb/0/06/Sniper_Wolf.png/234px-Sniper_Wolf.png,Metal Gear
Ivy Valentine,//upload.wikimedia.org/wikipedia/en/thumb/0/0e/Ivy_Valentine.png/170px-Ivy_Valentine.png,Soul
Jade (Beyond Good & Evil),//upload.wikimedia.org/wikipedia/en/thumb/1/17/Jade-Beyond_Good_%26_Evil.png/250px-Jade-Beyond_Good_%26_Evil.png,Beyond Good & Evil
Jun Kazama (character),//upload.wikimedia.org/wikipedia/en/thumb/2/20/Jun_Kazama_%28TTT2%29.png/175px-Jun_Kazama_%28TTT2%29.png,Tekken
Makoto (Street Fighter),//upload.wikimedia.org/wikipedia/en/thumb/2/20/Makoto.png/250px-Makoto.png,Street Fighter
Samus Aran,//upload.wikimedia.org/wikipedia/en/thumb/2/21/Metroidprime3_1.png/225px-Metroidprime3_1.png,Metroid
Sophitia Alexandra,//upload.wikimedia.org/wikipedia/en/thumb/2/23/Sophitia.png/225px-Sophitia.png,Soul
Terra Branford (Final Fantasy),//upload.wikimedia.org/wikipedia/en/thumb/2/23/Terra_Branford_N.png/225px-Terra_Branford_N.png,Final Fantasy
Alyx Vance,//upload.wikimedia.org/wikipedia/en/thumb/2/2b/Alyx_Vance.png/240px-Alyx_Vance.png,Half-Life
I-No,//upload.wikimedia.org/wikipedia/en/thumb/2/2f/I_No_Guilty_Gear.png/200px-I_No_Guilty_Gear.png,Guilty Gear
Rebecca Chambers,//upload.wikimedia.org/wikipedia/en/thumb/3/31/Rebecca_Chambers_Resident_Evil_0.png/220px-Rebecca_Chambers_Resident_Evil_0.png,Resident Evil
Madison Paige,//upload.wikimedia.org/wikipedia/en/thumb/3/35/Madison_Paige.png/220px-Madison_Paige.png,Heavy Rain
Elena (Street Fighter),//upload.wikimedia.org/wikipedia/en/thumb/3/37/Elena_Street_Fighter.png/210px-Elena_Street_Fighter.png,Street Fighter
Juri (Street Fighter),//upload.wikimedia.org/wikipedia/en/thumb/3/37/Juri.png/250px-Juri.png,Street Fighter
Hitomi (Dead or Alive),//upload.wikimedia.org/wikipedia/en/thumb/3/3d/Hitomi_%28Dead_or_Alive%29.png/220px-Hitomi_%28Dead_or_Alive%29.png,Dead or Alive
Chell,//upload.wikimedia.org/wikipedia/en/thumb/4/40/Chell.png/220px-Chell.png,Portal
Rikku,//upload.wikimedia.org/wikipedia/en/thumb/4/44/Rikku.png/190px-Rikku.png,Final Fantasy
Clementine (The Walking Dead),//upload.wikimedia.org/wikipedia/en/thumb/4/4a/Clementine_walking_dead.png/250px-Clementine_walking_dead.png,The Walking Dead
EVA (Metal Gear),//upload.wikimedia.org/wikipedia/en/thumb/4/4f/EVA_%28Metal_Gear%29.png/200px-EVA_%28Metal_Gear%29.png,Metal Gear
Momiji (Ninja Gaiden),//upload.wikimedia.org/wikipedia/en/thumb/4/4f/Momiji_NG3RE.png/256px-Momiji_NG3RE.png,Ninja Gaiden
Taki (Soul Calibur),//upload.wikimedia.org/wikipedia/en/thumb/5/50/Taki_Soulcalibur_IV.png/256px-Taki_Soulcalibur_IV.png,Soul
Jill Valentine,//upload.wikimedia.org/wikipedia/en/thumb/5/54/Jill_Valentine.png/210px-Jill_Valentine.png,Resident Evil
SHODAN,//upload.wikimedia.org/wikipedia/en/thumb/5/55/SHODAN_hires.jpg/250px-SHODAN_hires.jpg,System Shock
Chai Xianghua (Soul Calibur),//upload.wikimedia.org/wikipedia/en/thumb/5/57/Chai_Xianghua.png/225px-Chai_Xianghua.png,Soul
Etna (Disgaea),//upload.wikimedia.org/wikipedia/en/thumb/5/57/Etna_%28Disgaea%29.png/235px-Etna_%28Disgaea%29.png,Disgaea
Mileena (Mortal Kombat),//upload.wikimedia.org/wikipedia/en/thumb/5/58/Mileena_MK9.png/220px-Mileena_MK9.png,Mortal Kombat
Annah-of-the-Shadows,//upload.wikimedia.org/wikipedia/en/thumb/5/59/Annah-of-the-Shadows_concept.png/230px-Annah-of-the-Shadows_concept.png,Planescape
Talim (Soul Calibur),//upload.wikimedia.org/wikipedia/en/thumb/5/5e/Talim_SCII.png/165px-Talim_SCII.png,Soul
Morrigan Aensland,//upload.wikimedia.org/wikipedia/en/thumb/6/64/Morrigan%28Darkstalkers%29.png/250px-Morrigan%28Darkstalkers%29.png,Darkstalkers
Tira (Soulcalibur),//upload.wikimedia.org/wikipedia/en/thumb/6/67/Tira-soul3art.png/235px-Tira-soul3art.png,Soul
Rachel (Ninja Gaiden),//upload.wikimedia.org/wikipedia/en/thumb/6/6b/Rachel_%28Ninja_Gaiden%29.png/265px-Rachel_%28Ninja_Gaiden%29.png,Ninja Gaiden
Tina Armstrong,//upload.wikimedia.org/wikipedia/en/thumb/7/70/Tina_Armstrong.png/220px-Tina_Armstrong.png,Dead or Alive
Mona Sax (character),//upload.wikimedia.org/wikipedia/en/thumb/7/7a/Mona_Sax_MP2.jpg/225px-Mona_Sax_MP2.jpg,Max Payne
Aya Brea,//upload.wikimedia.org/wikipedia/en/thumb/7/7b/Aya_Brea_CG_render.PNG/140px-Aya_Brea_CG_render.PNG,Parasite Eve
Alisa Bosconovitch,//upload.wikimedia.org/wikipedia/en/thumb/7/7d/Alisa_Bosconovitch_TTT2.png/225px-Alisa_Bosconovitch_TTT2.png,Tekken
Asuka Kazama,//upload.wikimedia.org/wikipedia/en/thumb/7/7d/Asuka-Kazama.png/200px-Asuka-Kazama.png,Tekken
Ibuki (Street Fighter),//upload.wikimedia.org/wikipedia/en/thumb/8/85/Ibuki_%28Street_Fighter%29.png/255px-Ibuki_%28Street_Fighter%29.png,Street Fighter
Rose (Street Fighter),//upload.wikimedia.org/wikipedia/en/thumb/8/86/Rose_%28Street_Fighter%29.png/250px-Rose_%28Street_Fighter%29.png,Street Fighter
Maki Genryusai,//upload.wikimedia.org/wikipedia/en/thumb/8/89/Maki_Genryusai.png/234px-Maki_Genryusai.png,"Final Fight, Street Fighter"
Sonya Blade,//upload.wikimedia.org/wikipedia/en/thumb/8/8c/Sonyablade-render.png/220px-Sonyablade-render.png,Mortal Kombat
Elexis Sinclaire,//upload.wikimedia.org/wikipedia/en/thumb/8/8d/Elexis_Sinclaire.jpg/250px-Elexis_Sinclaire.jpg,SiN
Ling Xiaoyu,//upload.wikimedia.org/wikipedia/en/thumb/9/98/Ling_Xiaoyu.png/235px-Ling_Xiaoyu.png,Tekken
Sheva Alomar,//upload.wikimedia.org/wikipedia/en/thumb/a/a4/Sheva_Alomar.png/210px-Sheva_Alomar.png,Resident Evil
Tali'Zorah,//upload.wikimedia.org/wikipedia/en/thumb/a/a4/Tali%27Zorah.png/150px-Tali%27Zorah.png,Mass Effect
Cassandra Alexandra,//upload.wikimedia.org/wikipedia/en/thumb/a/a8/Cassandra_Alexandra.png/225px-Cassandra_Alexandra.png,Soul
Multi (To Heart),//upload.wikimedia.org/wikipedia/en/thumb/a/a9/HMX-12_Multi.jpg/150px-HMX-12_Multi.jpg,To Heart
Hildegard von Krone,//upload.wikimedia.org/wikipedia/en/thumb/b/b1/Hilde.png/230px-Hilde.png,Soul
Millia Rage,//upload.wikimedia.org/wikipedia/en/thumb/b/b4/Millia_Rage_GG.png/245px-Millia_Rage_GG.png,Guilty Gear
Elaine Marley,//upload.wikimedia.org/wikipedia/en/thumb/b/b5/Elaine_Marley.png/220px-Elaine_Marley.png,Monkey Island
Lili (Tekken),//upload.wikimedia.org/wikipedia/en/thumb/b/b7/Lili_Tekken_Render.png/200px-Lili_Tekken_Render.png,Tekken
Anna Williams (Tekken),//upload.wikimedia.org/wikipedia/en/thumb/b/ba/Anna-williams.png/190px-Anna-williams.png,Tekken
Claire Redfield,//upload.wikimedia.org/wikipedia/en/thumb/b/bb/Claire_Redfield.png/235px-Claire_Redfield.png,Resident Evil
Sarah Kerrigan,//upload.wikimedia.org/wikipedia/en/thumb/b/bd/Sarah_Kerrigan_%28StarCraft%29.png/235px-Sarah_Kerrigan_%28StarCraft%29.png,StarCraft
April Ryan,//upload.wikimedia.org/wikipedia/en/thumb/b/be/Evolution_of_April_Ryan.png/250px-Evolution_of_April_Ryan.png,The Longest Journey
Amaterasu Ōmikami,//upload.wikimedia.org/wikipedia/en/thumb/c/c2/Okami_Amaterasu.png/235px-Okami_Amaterasu.png,Ōkami
Christie Monteiro,//upload.wikimedia.org/wikipedia/en/thumb/c/c6/Christie-Monteiro.png/230px-Christie-Monteiro.png,Tekken
Dark Queen (Battletoads),//upload.wikimedia.org/wikipedia/en/thumb/c/c7/Dark_Queen_Super_Battletoads.jpg/250px-Dark_Queen_Super_Battletoads.jpg,Battletoads
Jade (Mortal Kombat),//upload.wikimedia.org/wikipedia/en/thumb/c/c7/Jade_%28Mortal_Kombat%29.png/230px-Jade_%28Mortal_Kombat%29.png,Mortal Kombat
Aqua (Kingdom Hearts),//upload.wikimedia.org/wikipedia/en/thumb/c/c8/Aquaconceptart.jpg/175px-Aquaconceptart.jpg,Kingdom Hearts
Lara Croft,//upload.wikimedia.org/wikipedia/en/thumb/c/cb/Lara_Croft_%282013%29.png/240px-Lara_Croft_%282013%29.png,Tomb Raider
Lightning (Final Fantasy),//upload.wikimedia.org/wikipedia/en/thumb/c/ce/Lightning_CG.png/180px-Lightning_CG.png,Final Fantasy
Sindel (Mortal Kombat),//upload.wikimedia.org/wikipedia/en/thumb/d/d2/Sindel-mk9.png/250px-Sindel-mk9.png,Mortal Kombat
Ayane (Dead or Alive),//upload.wikimedia.org/wikipedia/en/thumb/d/d4/Ayane_%28Dead_or_Alive%29.png/256px-Ayane_%28Dead_or_Alive%29.png,"Dead or Alive, Ninja Gaiden"
Princess Peach,//upload.wikimedia.org/wikipedia/en/thumb/d/d5/Peach_%28Super_Mario_3D_World%29.png/250px-Peach_%28Super_Mario_3D_World%29.png,Mario
Chloe Frazer,//upload.wikimedia.org/wikipedia/en/thumb/d/d6/Chloe_Frazer.png/250px-Chloe_Frazer.png,Uncharted
Ada Wong,//upload.wikimedia.org/wikipedia/en/thumb/d/da/Ada_Wong.png/250px-Ada_Wong.png,Resident Evil
Chie Satonaka,//upload.wikimedia.org/wikipedia/en/thumb/d/dc/ChieSatonaka.png/200px-ChieSatonaka.png,Shin Megami Tensei: Persona
Ayame (Tenchu),//upload.wikimedia.org/wikipedia/en/thumb/e/e4/Ayame_%28Tenchu%29.png/255px-Ayame_%28Tenchu%29.png,Tenchu
Carmen Sandiego (character),//upload.wikimedia.org/wikipedia/en/thumb/e/ed/Carmen_Sandiego.png/250px-Carmen_Sandiego.png,Carmen Sandiego
Blue Mary,//upload.wikimedia.org/wikipedia/en/thumb/e/ef/Bluemary.png/222px-Bluemary.png,"Fatal Fury, The King of Fighters"
Crimson Viper,//upload.wikimedia.org/wikipedia/en/thumb/f/f0/CrimsonViper.png/225px-CrimsonViper.png,Street Fighter
Aigis (Shin Megami Tensei: Persona),//upload.wikimedia.org/wikipedia/en/thumb/f/f3/AigisPersona.png/150px-AigisPersona.png,Shin Megami Tensei: Persona
Felicia (Darkstalkers),//upload.wikimedia.org/wikipedia/en/thumb/f/f4/Darkstalkers-felicia.png/250px-Darkstalkers-felicia.png,Darkstalkers`;
  var data = papaparse.parse(csv_data);
  return data?.data;
}

/**
 * Array with Quote, Character Name, Anime Name
 * @returns Single Quote as an array
 */
export function get_random_anime_quote() {
  var data = anime_quote_data();
  var max = data.length;
  var min = 0;
  var quote_index = Math.floor(Math.random() * (max - min)) + min;
  return data[quote_index];
}

export function get_random_office_quote() {
  var data = office_quote_data();
  var max = data.length;
  var min = 0;
  var quote_index = Math.floor(Math.random() * (max - min)) + min;
  return data[quote_index];
}

export function get_random_movie_quote() {
  var data = movie_quote_data();
  var max = data.length;
  var min = 0;
  var quote_index = Math.floor(Math.random() * (max - min)) + min;
  return data[quote_index];
}

export function get_random_song_quote() {
  var data = song_data();
  var max = data.length;
  var min = 0;
  var quote_index = Math.floor(Math.random() * (max - min)) + min;
  console.log("HAS IT", data[quote_index]);
  if (data[quote_index][0].includes(" (feat.")) {
    data[quote_index] = [data[quote_index][0].split(" (feat.")[0], data[quote_index][1], data[quote_index][2]]
  }
  if (data[quote_index][2].includes(" (feat.")) {
    data[quote_index] = [data[quote_index][0], data[quote_index][1], data[quote_index][2].split(" (feat.")[0]]
  }
  if (data[quote_index][0].includes(" (Feat.")) {
    data[quote_index] = [data[quote_index][0].split(" (Feat.")[0], data[quote_index][1], data[quote_index][2]]
  }
  if (data[quote_index][2].includes(" (Feat.")) {
    data[quote_index] = [data[quote_index][0], data[quote_index][1], data[quote_index][2].split(" (Feat.")[0]]
  }
  const regex_replace = new RegExp("�", 'g');
  data[quote_index] = [
    data[quote_index][0].replace(regex_replace,"_"), 
    data[quote_index][1], 
    data[quote_index][2].replace(regex_replace,"_")]
  return data[quote_index];
}

export function get_random_videogame_quote() {
  var data = videogame_data();
  var max = data.length;
  var min = 0;
  var quote_index = Math.floor(Math.random() * (max - min)) + min;
  if (data[quote_index][0].includes(" (")) {
    data[quote_index] = [data[quote_index][0].split(" (")[0], data[quote_index][1], data[quote_index][2]]
  }
  return data[quote_index];
}
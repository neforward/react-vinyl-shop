import { createSlice } from '@reduxjs/toolkit';

export const vinylsSlice = createSlice({
    name: 'vinyls',
    initialState: {
        vinyls: [
            {
                genre: 'R&B/Soul',
                artist: 'Frank Ocean',
                imgUrl: "https://static.wixstatic.com/media/acb470_f4f34cfb216d4f829d87ea4b2bced24a~mv2.png/v1/fill/w_480,h_476,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/acb470_f4f34cfb216d4f829d87ea4b2bced24a~mv2.png",
                title: "BLONDE",
                price: "$65.00",
                id: 0,
                des: 'Blonde by Frank Ocean is a deeply personal album exploring love, identity, and self-reflection themes. Its ambiguous and poetic lyrics leave its meaning open to interpretation, often resonating with listeners on a highly individual level.'
            },
            {
                genre: 'Hip-Hop/Rap',
                artist: 'Future',
                imgUrl: "https://thesoundofvinyl.com/cdn/shop/products/SharedImage-136698.png?v=1692038923",
                title: "DS2",
                price: "$39.99",
                id: 1,
                des: "Building off a powerful three-mixtape comeback run, DS2 is bleak and unforgiving, a redemption story for a man who is certain it's too late for his soul to be redeemed; instead of a triumphal arc, we burrow deeper and deeper into Future's dystopian universe."
            },
            {
                genre: 'Hip-Hop/Rap',
                artist: 'Yeat',
                imgUrl: "https://interscope.com/cdn/shop/files/Yeat-2Alive_GeekPack_Vinyl2LP.png?v=1707419282",
                title: "2 Alivë",
                price: "$32.99",
                id: 2,
                des: "2 Alivë is the sequel to Yeat’s April 2021 project, Alivë, and his first album released through Interscope Records."
            },
            {
                genre: 'Hip-Hop/Rap',
                artist: 'Kanye West',
                imgUrl: "https://sound-merch.com.au/cdn/shop/products/KANYE-COLLEGE_1024x1024.png?v=1665531078",
                title: "The College Dropout",
                price: "$27.99",
                id: 3,
                des: "College Dropout is Kanye West's debut album, released in 2004. It defies hip-hop norms with its blend of soulful production and introspective lyricism. Through tracks like Through the Wire and Jesus Walks, Kanye explores themes of resilience, identity, and spirituality. The album's innovative sound and candid storytelling make it a timeless classic, cementing Kanye's status as a cultural icon."
            },
            {
                genre: 'Hip-Hop/Rap',
                artist: 'Kanye West',
                imgUrl: "https://recordstore.co.uk/cdn/shop/products/image_of_17872813_97b33542-7b8e-4ade-9820-87375ef8d1d6.png?v=1704908587",
                title: "808s & Heartbreak Deluxe",
                price: "$49.99",
                id: 4,
                des: `"808s & Heartbreak" is Kanye West's fourth studio album, a departure from his previous work, exploring themes of heartbreak and loneliness with raw emotion and vulnerability, ultimately becoming a groundbreaking influence on hip-hop and R&B.`
            },

            {
                genre: 'Hip-Hop/Rap',
                artist: 'Kanye West & Kid Cudi',
                imgUrl: "https://www.shugarecords.com/cdn/shop/products/KSG_LP_950x_815333e5-b9c3-4345-9a4d-a3a3261a3137_1200x1200.png?v=1540920873",
                title: "Kids See Ghosts",
                price: "$24.99",
                id: 5,
                des: `"Kids See Ghosts" is a collaborative album by Kanye West and Kid Cudi, released in 2018. It's praised for blending hip-hop, rock, and psychedelic music while exploring themes of mental health and self-discovery.`
            },
            {
                genre: 'Hip-Hop/Rap',
                artist: 'Kid Cudi',
                imgUrl: "https://shop.urbanlegends.com/cdn/shop/products/Kid-Cudi---Man-On-The-Moon-The-End-Of-Day-_2LP.png?v=1591216267",
                title: "Man on the Moon",
                price: "$22.99",
                id: 6,
                des: `"Man on the Moon: The End of Day" is Kid Cudi's debut studio album, released in 2009. It's a concept album that delves into Cudi's struggles with loneliness, depression, and substance abuse. With tracks like "Day 'n' Nite" and "Pursuit of Happiness," the album explores themes of escapism and self-discovery. "Man on the Moon: The End of Day" is celebrated for its innovative sound and introspective lyrics, solidifying Kid Cudi's influence in the hip-hop and alternative music scenes.`
            },
            {
                genre: 'Hip-Hop/Rap',
                artist: 'Kid Cudi',
                imgUrl: "https://shop.urbanlegends.com/cdn/shop/products/Kid-Cudi---Man-On-The-Moon-II-The-Legend-Of-Mr.-Rager-_2LP.png?v=1591216272",
                title: "Man on the Moon 2",
                price: "$32.99",
                id: 7,
                des: `"Man on the Moon II: The Legend of Mr. Rager" is Kid Cudi's second studio album, released in 2010. Building on the themes of his debut, this album delves deeper into Cudi's struggles with fame, addiction, and mental health issues. Tracks like "Mr. Rager" and "Erase Me" continue the exploration of introspective themes, while also showcasing Cudi's experimentation with different musical styles. "Man on the Moon II" is praised for its emotional depth and atmospheric production, solidifying Kid Cudi's reputation as an influential figure in both hip-hop and alternative music.`
            },
            {
                genre: 'Hip-Hop/Rap',
                artist: 'J. Cole',
                imgUrl: "https://sound-merch.com.au/cdn/shop/files/4-YOUR-EYEZ-ONLY_grande.png?v=1690341031",
                title: "4 Your Eyez Only",
                price: "$29.99",
                id: 8,
                des: `"4 Your Eyez Only" is the fourth studio album by rapper J. Cole, released in 2016. It's a concept album that tells the story of a friend's life and struggles, as narrated from the perspective of Cole himself. The album explores themes of family, poverty, crime, and mortality, with tracks like "Deja Vu" and "Neighbors" providing social commentary and personal reflection. "4 Your Eyez Only" received critical acclaim for its storytelling, lyrical depth, and soulful production, cementing J. Cole's reputation as one of the most talented and socially conscious artists in hip-hop.`
            },

            {
                genre: 'Hip-Hop/Rap',
                artist: 'J. Cole',
                imgUrl: "https://interscope.com/cdn/shop/files/jcole_1024x1024.png?v=1690243838",
                title: "2014 Forest Hills Drive",
                price: "$38.99",
                id: 9,
                des: `"2014 Forest Hills Drive" is J. Cole's third studio album, released in 2014. It's deeply autobiographical, reflecting on his upbringing and aspirations, with hits like "No Role Modelz" and "Apparently." The album received critical acclaim for its authenticity and cohesive production, establishing J. Cole as a prominent figure in hip-hop.`
            },
            {
                genre: 'Hip-Hop/Rap',
                artist: 'Lil Uzi Vert',
                imgUrl: "https://flyingout.co.nz/cdn/shop/files/ATL75-Vinyl-Uzi.webp?v=1691882308",
                title: "Luv Is Rage 2",
                price: "$40.99",
                id: 10,
                des: `Luv Is Rage 2 is Lil Uzi Vert's debut studio album, released in 2017. It features a blend of trap, emo rap, and rock, with hits like "XO TOUR Llif3" and "The Way Life Goes" showcasing his melodic delivery and introspective lyrics. The album received positive reviews and cemented Lil Uzi Vert's status as a leading voice in hip-hop.`
            },
            {
                genre: 'Hip-Hop/Rap',
                artist: 'J. Cole',
                imgUrl: "https://thesoundofvinyl.com.au/cdn/shop/products/J-Cole-Born-Sinner-Exclusive-Gold-2LP_1024x1024.png?v=1684127347",
                title: "Born Sinner",
                price: "$38.99",
                id: 11,
                des: `"Born Sinner" is the second studio album by rapper J. Cole, released in 2013. The album explores themes of temptation, redemption, and personal struggles, with tracks like "Power Trip" and "Crooked Smile" receiving widespread acclaim. "Born Sinner" showcases J. Cole's introspective lyricism and storytelling ability, solidifying his reputation as one of the most skilled lyricists in hip-hop.`
            },
            {
                genre: 'Hip-Hop/Rap',
                artist: 'Travis Scott',
                imgUrl: "https://thesoundofvinyl.com/cdn/shop/products/SharedImage-120584.png?v=1685628450",
                title: "ASTROWORLD",
                price: "$29.99",
                id: 12,
                des: `"Astroworld" is an album by Travis Scott, released in 2018. It features a mix of trap, hip-hop, and psychedelic music, with hits like "SICKO MODE" and "STARGAZING". The album received critical acclaim for its innovative production and energetic delivery, solidifying Travis Scott's position in hip-hop.`
            }, {
                genre: 'Hip-Hop/Rap',
                artist: 'Travis Scott',
                imgUrl: "https://beatrelease.com/cdn/shop/products/Rodeo_1024x1024_7b3ab06d-71db-4f8a-aa72-8226106ddc7e.webp?v=1671035074",
                title: "Rodeo",
                price: "$26.99",
                id: 13,
                des: `"Rodeo" is an album by Travis Scott, known for its unique blend of trap, hip-hop, and experimental sounds. Released in 2015, it features hits like "Antidote" and "3500." The album received critical acclaim for its innovative production and Travis Scott's distinctive style, further establishing him as a prominent figure in hip-hop.`
            },
            {
                genre: 'Hip-Hop/Rap',
                artist: 'Childish Gambino',
                imgUrl: "https://sound-merch.com.au/cdn/shop/products/childish_1024x1024.png?v=1625118436",
                title: "Because the Internet",
                price: "$33.99",
                id: 14,
                des: `"Because the Internet" is an album by Childish Gambino, released in 2013. It's praised for its genre-bending sound and introspective lyrics. Hits like "3005" and "Sweatpants" showcase Gambino's versatility and storytelling abilities. The album received critical acclaim, solidifying Childish Gambino's reputation as a multifaceted artist in the music industry.`
            }, {
                genre: 'Hip-Hop/Rap',
                artist: 'Kendrick Lamar',
                imgUrl: "https://recordstore.co.uk/cdn/shop/products/SharedImage-115162.png?v=1700822648",
                title: "DAMN.",
                price: "$33.99",
                id: 15,
                des: `"DAMN." is an album by Kendrick Lamar, released in 2017. It's praised for its thought-provoking lyrics and diverse musical styles. Hits like "HUMBLE." and "DNA." showcase Lamar's introspection and social commentary. The album received widespread critical acclaim, earning numerous awards and further establishing Lamar as one of the most influential voices in hip-hop.`
            }, {
                genre: 'R&B/Soul',
                artist: 'Joji',
                imgUrl: "https://jojistore.com/cdn/shop/products/JOJVINYL_f01723cb-b971-44b8-ab71-f0a0757ca80a.png?v=1650504762",
                title: "Ballads 1",
                price: "$49.99",
                id: 16,
                des: `"Ballads 1" is an album by Japanese-American artist Joji, released in 2018. Known for its melancholic yet captivating sound, the album features tracks like "Slow Dancing in the Dark," "YEAH RIGHT," and "WANTED U." "Ballads 1" showcases Joji's emotive vocals and introspective lyrics, establishing him as a significant presence in the alternative R&B scene.`
            }, {
                genre: 'R&B/Soul',
                artist: 'Joji',
                imgUrl: "https://www.repdiscosperu.com/cdn/shop/files/JOJI_1024x1024_7b81237f-19a6-4616-b289-4dc9436becba.png?v=1704991421&width=1000",
                title: "Nectar",
                price: "$38.99",
                id: 17,
                des: `"Nectar" is an album by Japanese-Australian artist Joji, released in 2020. Known for its eclectic blend of R&B, pop, and electronic influences, the album features tracks like "Sanctuary," "Gimme Love," and "Run." "Nectar" showcases Joji's evolution as an artist, with a mix of introspective lyrics and catchy melodies. The album received positive reviews for its innovative production and emotional depth, further solidifying Joji's position in the music industry.`
            }, {
                genre: 'Hip-Hop/Rap',
                artist: 'Tyler, The Creator',
                imgUrl: "https://cdn.shopify.com/s/files/1/0688/4297/9608/products/SharedImage-115161.png?v=1707734043&width=1100",
                title: "flower boy",
                price: "$27.99",
                id: 18,
                des: `"Flower Boy" is an album by rapper and producer Tyler, the Creator, released in 2017. It's praised for its introspective themes and lush production. Hits like "See You Again" and "911 / Mr. Lonely" showcase Tyler's growth as an artist. The album received critical acclaim, earning Tyler widespread recognition for his musical versatility and storytelling ability.`
            }, {
                genre: 'Hip-Hop/Rap',
                artist: 'Tyler, The Creator',
                imgUrl: "https://sound-merch.com.au/cdn/shop/products/Tyler_Goblin_1024x1024.png?v=1619577690",
                title: "Goblin",
                price: "$26.99",
                id: 19,
                des: `"Goblin" is a groundbreaking debut that introduced Tyler, The Creator's unique blend of horrorcore, introspective lyricism, and unconventional production. With tracks like "Yonkers" and "She," the album delves into themes of mental health, fame, and rebellion, cementing Tyler's reputation as a boundary-pushing artist.`
            }, {
                genre: 'R&B/Soul',
                artist: 'The Weeknd',
                imgUrl: "https://www.horizonsmusic.co.uk/cdn/shop/products/WeekndMyDearMelancholy_1200x1200.png?v=1675703598",
                title: "My Dear Melancholy",
                price: "$51.99",
                id: 20,
                des: `"My Dear Melancholy," is a mesmerizing EP released by Canadian singer-songwriter The Weeknd in 2018. With its haunting melodies and emotionally charged lyrics, the EP explores themes of heartbreak, regret, and longing. Featuring tracks like "Call Out My Name" and "Privilege," the project showcases The Weeknd's signature blend of R&B, pop, and electronic influences, captivating listeners with its raw emotion and atmospheric production. "My Dear Melancholy," stands as a poignant reflection on love and loss, further solidifying The Weeknd's status as a leading figure in contemporary music.`
            }, {
                genre: 'R&B/Soul',
                artist: 'The Weeknd',
                imgUrl: "https://musicstation.be/cdn/shop/files/TheWeeknd-AfterHours-2LP.webp?v=1698655728",
                title: "After Hours",
                price: "$39.99",
                id: 21,
                des: `"After Hours" is an electrifying album released by Canadian artist The Weeknd in 2020. With its dark and atmospheric soundscapes, the album delves into themes of love, heartbreak, and self-reflection. Tracks like "Blinding Lights" and "Save Your Tears" showcase The Weeknd's trademark blend of R&B, pop, and synth-pop, while also exploring new sonic territories. "After Hours" received widespread acclaim for its innovative production, haunting vocals, and emotionally resonant lyrics, solidifying The Weeknd's position as one of the most compelling artists of his generation.`
            }, {
                genre: 'R&B/Soul',
                artist: 'The Weeknd',
                imgUrl: "https://recordstore.co.uk/cdn/shop/products/SharedImage-123519.png?v=1695285726",
                title: "House of Balloons",
                price: "$48.99",
                id: 22,
                des: `"House of Balloons" is a mesmerizing mixtape by Canadian artist The Weeknd, released in 2011. This project marks the beginning of The Weeknd's rise to prominence in the music industry. With its moody atmosphere, provocative lyrics, and innovative production, "House of Balloons" offers a unique blend of R&B, pop, and electronic elements. Tracks like "Wicked Games" and "High for This" showcase The Weeknd's seductive vocals and introspective lyricism, captivating listeners with their raw emotion and dark allure. "House of Balloons" remains a landmark release in The Weeknd's discography, setting the stage for his subsequent success and influencing a new wave of alternative R&B artists.`
            },
            {
                genre: 'R&B/Soul',
                artist: 'Childish Gambino',
                imgUrl: "https://awakenmylove.com/cdn/shop/products/AMLSTANDARDLP.png?v=1505165913",
                title: "Awaken, My Love!",
                price: "$35.99",
                id: 23,
                des: `"Awaken, My Love!" is a genre-defying album by Childish Gambino, released in 2016. Departing from his hip-hop roots, Gambino explores funk and soul influences with tracks like "Redbone" and "Me and Your Mama." The album received critical acclaim for its experimental production and thematic depth, marking Gambino as a versatile artist in the music industry.`
            },
            {
                genre: 'Hip-Hop/Rap',
                artist: 'Yeat',
                imgUrl: "https://interscope.com/cdn/shop/products/YeatVinyl_fb3139cd-4310-4e4c-80b8-5006d7c9d4d2.png?v=1673632335",
                title: "Lyfë",
                price: "$32.99",
                id: 24,
                des: `Lyfë, rapper Yeat's hard-hitting EP released in September 2022, packs his signature style into a concise 34 minutes. Expect his usual blend of rapping and singing over energetic, futuristic beats.  The project features a guest appearance from another rap star, Lil Uzi Vert, and helped propel Yeat into the Billboard 200 top 10.`
            },

            {
                genre: 'Hip-Hop/Rap',
                artist: 'Denzel Curry',
                imgUrl: "https://sound-merch.com.au/cdn/shop/products/DenzelCurry_MeltMyEyez_VinylClear_760x.png?v=1648101473%27",
                title: "Melt My Eyez See Your Future",
                price: "$35.99",
                id: 25,
                des: `"Melt My Eyez See Your Future" is the title of a critically acclaimed album by American rapper Denzel Curry.`
            }, {
                genre: 'Hip-Hop/Rap',
                artist: 'Playboi Carti',
                imgUrl: "https://sound-merch.com.au/cdn/shop/products/Playboi-Carti-Whole-Lotta-Red_1024x1024.png?v=1638234427",
                title: "Whole Lotta Red",
                price: "$29.99",
                id: 26,
                des: `Playboi Carti's "Whole Lotta Red" is a genre-bending hip-hop experience. It's known for its dark, distorted beats and Carti's signature high-pitched vocals. Expect a mix of rapping and singing with a punk rock attitude.`
            },
            {
                genre: 'Hip-Hop/Rap',
                artist: 'JACKBOYS',
                imgUrl: 'https://thesoundofvinyl.com/cdn/shop/products/SharedImage-122377_0a45cb3e-e53b-4f77-a388-3563e633c41a.png?v=1706788628',
                title: 'JACKBOYS',
                price: '$25.99',
                id: 27,
                des: `Jackboys is a high-energy hip-hop collective led by rapper Travis Scott.  It's a crew effort featuring Scott alongside fellow Cactus Jack Records signees Sheck Wes, Don Toliver, Luxury Tax 50, and DJ Chase B. Their sound blends elements of trap music with Scott's signature dark and atmospheric production. They rose to fame with their self-titled debut album in December 2019, which went straight to number one on the Billboard 200 chart.`
            },
            {
                genre: 'Hip-Hop/Rap',
                artist: 'Childish Gambino',
                imgUrl: 'https://recordstore.co.uk/cdn/shop/products/SharedImage-129483.png?v=1685977045',
                title: 'camp',
                price: '$31.98',
                id: 28,
                des: `Camp is the debut studio album by American recording artist Donald Glover, better known by his stage name Childish Gambino. `
            },
            {
                genre: 'Hip-Hop/Rap',
                artist: 'Nas',
                imgUrl: 'https://thesoundofvinyl.com/cdn/shop/products/SharedImage-114080.png?v=1707132963&width=1100',
                title: 'Illmatic',
                price: '$26.99',
                id: 29,
                des: `Illmatic, released in 1994, is widely considered one of the greatest and most influential hip-hop albums of all time.`
            },
            {
                genre: 'Hip-Hop/Rap',
                artist: 'Nas',
                imgUrl: 'https://thesoundofvinyl.com/cdn/shop/products/SharedImage-114464_f816973b-1eeb-4307-8b70-1f3f07aba5c2.png?v=1687265715',
                title: 'I Am...',
                price: '$36.99',
                id: 30,
                des: `"I Am..." is a classic hip-hop masterpiece that showcases the rapper's lyrical prowess and storytelling abilities. Released in 1999, the album features tracks like "Nas Is Like" and "Hate Me Now" that have become iconic in the genre. With production from heavyweights like DJ Premier and Timbaland, "I Am..." solidified Nas's status as one of the greatest MCs of all time.`
            },
            {
                genre: 'Hip-Hop/Rap',
                artist: 'Mac Miller',
                imgUrl: 'https://thesoundofvinyl.us/cdn/shop/products/macmillerclear_700x700.png?v=1679347576',
                title: 'Circles',
                price: '$34.98',
                id: 31,
                des: `Circles by Mac Miller is a posthumous album that showcases the late rapper's introspective lyrics and musical versatility. With a blend of hip-hop, R&B, and indie influences, the album features soulful melodies and poignant storytelling.`
            },
            {
                genre: 'Hip-Hop/Rap',
                artist: 'Mac Miller',
                imgUrl: 'https://shop.macmillerswebsite.com/cdn/shop/files/MMI-TDF-LP.png?v=1700603917',
                title: 'The Divine Feminine',
                price: '$21.96',
                id: 32,
                des: `The Divine Feminine by Mac Miller is a captivating album`
            },
            {
                genre: 'R&B/Soul',
                artist: 'Steve Lacy',
                imgUrl: 'https://sound-merch.com.au/cdn/shop/files/steve-lacey_1024x1024.png?v=1708302532',
                title: 'Gemini Rights',
                price: '$36.98',
                id: 33,
                des: `Gimini Rights by Steve Lacy, a must-have product for all music enthusiasts. This innovative creation brings together the perfect blend of style and functionality. With its sleek design and cutting-edge features, Gimini Rights allows you to experience music like never before.`
            },
            {
                genre: 'Hip-Hop/Rap',
                artist: 'Kanye West',
                imgUrl: 'https://www.turntablelab.com/cdn/shop/products/kanyewest-mybeautifultwisted_1024x1024.jpg?v=1571262555',
                title: 'MY BEAUTIFUL DARK TWISTED FANTASY',
                price: '$75.99',
                id: 34,
                des: ` This critically acclaimed album showcases Kanye's innovative production style and introspective lyrics, making it a must-have for any music lover. Featuring collaborations with artists like Jay-Z, Kid Cudi, and Nicki Minaj, "My Beautiful Dark Twisted Fantasy" offers a diverse range of sounds and perspectives that will keep you coming back for more.`
            },
            {
                genre: 'Hip-Hop/Rap',
                artist: 'Kanye West',
                imgUrl: 'https://thesoundofvinyl.com/cdn/shop/products/image_of_677846.png?v=1704908822',
                title: 'Ye',
                price: '$25.99',
                id: 35,
                des: `Get ready to immerse yourself in the mesmerizing sounds of "ye," the latest album by the talented artist, ye. This musical masterpiece takes you on a journey through a blend of genres, from soulful melodies to catchy beats that will have you grooving along. With heartfelt lyrics and captivating production, ye showcases their unique style and artistic vision. Whether you're a long-time fan or new to their music, this album is a must-have addition to your collection. So, sit back, relax, and let the enchanting tunes of "ye" transport you to a world of musical bliss.`
            },
            {
                genre: 'Hip-Hop/Rap',
                artist: 'XXXTENTACION',
                imgUrl: 'https://thesoundofvinyl.com/cdn/shop/products/SharedImage-122646.png?v=1685975027&width=800',
                title: '17',
                price: '$28.99',
                id: 36,
                des: `The 17 album by XXXTENTACION is a powerful and emotional collection of tracks that showcases the raw talent and vulnerability of the late artist. With a mix of introspective lyrics and haunting melodies, this album takes listeners on a journey through xxxtentacion's thoughts and emotions. From the hauntingly beautiful "Jocelyn Flores" to the introspective "Depression & Obsession," each song on this album leaves a lasting impact. Whether you're a fan of rap or not, the 17 album is a must-listen for anyone who appreciates honest and thought-provoking music.`
            },
            {
                genre: 'Hip-Hop/Rap',
                artist: 'Kanye West',
                imgUrl: 'https://thesoundofvinyl.com/cdn/shop/products/image_of_0602498824047.png?v=1704908702&width=800',
                title: 'Late Registration',
                price: '$35.99',
                id: 37,
                des: `Discover the raw and introspective journey of Kanye West's "Late Registration" album, where he seamlessly blends soulful samples with his signature production style. From hits like "Gold Digger" to deeper tracks like "Roses," this album showcases Ye's versatility and storytelling ability. Dive into this classic hip-hop masterpiece that solidified Kanye's spot as one of the greatest artists of our time.`
            },
            {
                genre: 'R&B/Soul',
                artist: 'The Weeknd',
                imgUrl: 'https://thesoundofvinyl.com/cdn/shop/products/weeknd.png?v=1700581982&width=2000',
                title: 'Dawn FM',
                price: '$29.99',
                id: 38,
                des: `Dawn FM is a concept album that underscores helplessness as only a mindset. It's a character's journey through the phases of purgatory, and the eventual acceptance of one's state of being.`
            },
            {
                genre: 'Hip-Hop/Rap',
                artist: 'Travis Scott',
                imgUrl: 'https://thesoundofvinyl.com/cdn/shop/products/blk.png?v=1699263903&width=1600',
                title: 'Utopia',
                price: '$36.99',
                id: 39,
                des: `Utopia is the fourth studio album by American rapper Travis Scott. It was released through Cactus Jack and Epic Records on July 28, 2023. The album features guest appearances from Teezo Touchdown, Drake, Playboi Carti, Beyoncé, Rob49, 21 Savage, the Weeknd, Swae Lee, Yung Lean, Dave Chappelle, Young Thug, Westside Gunn, Kid Cudi, Bad Bunny, SZA, Future, and James Blake, with Lil Uzi Vert and Sheck Wes appearing additionally on physical releases of the album. Production was handled by a variety of record producers, including Scott and Blake themselves, WondaGurl, Ye, Allen Ritter, Guy-Manuel de Homem-Christo, Wheezy, Buddy Ross, Vegyn, 30 Roc, Jahaan Sweet, Boi-1da, Vinylz, Tay Keith, Bnyx, Oz, Justin Vernon, the Alchemist, Dom Maker, Illangelo, DVLP, and Metro Boomin, among others. The album serves as the follow-up to Scott's third studio album, Astroworld (2018), as well as JackBoys (2019), his compilation album that was released in collaboration with Cactus Jack. It is a concept record that was accompanied by a film titled Circus Maximus which was released the day before the album.`
            },
            {
                genre: 'Hip-Hop/Rap',
                artist: 'Dr.Dre',
                imgUrl: 'https://thesoundofvinyl.com/cdn/shop/products/SharedImage-147572_e821e519-db2f-448e-a2a7-fdf301fc599b.png?v=1700568430&width=800',
                title: 'The Chronic',
                price: '$36.99',
                id: 40,
                des: `The Chronic brought G-funk to the mainstream – a genre defined by slow bass beats and melodic synthesizers, topped by P-Funk samples, female vocals, and a laconic, laid-back lyrical delivery referred to as a "lazy drawl". The album takes its name from a slang term for premium grade cannabis, chronic.`
            },
            {
                genre: 'Hip-Hop/Rap',
                artist: 'Juice WRLD',
                imgUrl: 'https://recordstore.co.uk/cdn/shop/products/SharedImage-114908.png?v=1700568331',
                title: 'GOODBYE & GOOD RIDDANCE',
                price: '$25.99',
                id: 41,
                des: `From start to finish, this album speaks to a situation everyone has been in. Juice WRLD speaks on his heartbreak, how his ex messed him up and what he is doing to get over her. He goes through some songs reminiscing and wanting the old times back, and some other songs he tries to move on, only to realize he can't.`
            },
            {
                genre: 'Hip-Hop/Rap',
                artist: 'XXXTENTACION',
                imgUrl: 'https://recordstore.co.uk/cdn/shop/products/SharedImage-143033_0e103017-1dbf-46bc-98a3-a33f11a634ec.png?v=1685628034&width=800',
                title: 'SKINS',
                price: '$28.99',
                id: 42,
                des: `SKINS, the Florida rapper's third studio album, memorializes a troubled talent in a series of fragmented musings on heartbreak, depression, self-harm, and death. `
            },
            {
                genre: 'Hip-Hop/Rap',
                artist: "Pi'erre Bourne",
                imgUrl: 'https://m.media-amazon.com/images/I/61nvJuf2QGS._UF894,1000_QL80_.jpg',
                title: "The Life Of Pi'erre 5",
                price: '$39.98',
                id: 43,
                des: `The Life of Pi'erre 5 is the second studio album by American record producer and rapper Pi'erre Bourne. It was released on June 11, 2021, by SossHouse Records and Interscope Records. The album features Playboi Carti, Lil Uzi Vert, and Sharc. It is the final album in The Life of Pi'erre series.`
            },
            {
                genre: 'Pop',
                artist: 'Olivia Rodrigo',
                imgUrl: 'https://shopuk.oliviarodrigo.com/cdn/shop/products/or_sour_fp_01.png?v=1700574303',
                title: 'sour',
                price: '$26.96',
                id: 44,
                des: `Influenced by Rodrigo's favorite genres and singer-songwriters, Sour is primarily a pop record that spans from energetic pop-punk songs to bedroom pop ballads. Its subject matter centers on adolescence, failed romance, and heartache.`
            },
            {
                genre: 'Pop',
                artist: 'Olivia Rodrigo',
                imgUrl: 'https://interscope.com/cdn/shop/files/7.ORvinylpackshot_Scopy.png?v=1698689586',
                title: 'guts',
                price: '$37.92',
                id: 45,
                des: `Guts (stylized in all caps) is the second studio album by the American singer-songwriter Olivia Rodrigo, released on September 8, 2023, through Geffen Records. It was written and recorded with Rodrigo working closely alongside Dan Nigro, the producer and multi-instrumentalist of her debut album Sour (2021). Inspired by the period of time immediately following Sour's success, Rodrigo conceived Guts hoping to reflect the process of maturity she experienced toward the end of her teenage years.`
            },
            {
                genre: 'Pop',
                artist: 'Rihanna',
                imgUrl: 'https://shop.udiscovermusic.com/cdn/shop/products/Anti_RedVinyl_Packshot.png?v=1675813216',
                title: 'anti',
                price: '$89.92',
                id: 46,
                des: `Anti is the eighth studio album by Barbadian singer Rihanna. It was released on 28 January 2016 by Roc Nation and Westbury Road. Rihanna started recording in 2014 after departing from Def Jam Recordings, who had released all of her albums since her 2005 debut. As executive producer, Rihanna recorded Anti with producers including Jeff Bhasker, Boi-1da, DJ Mustard, Hit-Boy, Brian Kennedy, Timbaland and No I.D., at studios in Canada, the United States and France. SZA and Drake contribute guest vocals.`
            },
            {
                genre: 'R&B/Soul',
                artist: 'Drake',
                imgUrl: 'https://thesoundofvinyl.com/cdn/shop/products/SharedImage-117491.png?v=1692103743',
                title: 'take care',
                price: '$39.88',
                id: 47,
                des: `Take Care is the second studio album by Canadian rapper Drake. It was released on November 15, 2011, by Young Money Entertainment, Cash Money Records and Republic Records. The album features guest appearances from the Weeknd, Rihanna, Kendrick Lamar, Birdman, Nicki Minaj, Rick Ross, Lil Wayne, and André 3000. Alongside prominent production from the album's executive producers Drake and 40, further contributors include T-Minus, Chantal Kreviazuk, Boi-1da, Illangelo, Jamie xx, Supa Dups, Just Blaze, Chase N. Cashe, and Doc McKinney.`
            },
            {
                genre: 'Hip-Hop/Rap',
                artist: 'Drake',
                imgUrl: 'https://thesoundofvinyl.com/cdn/shop/products/SharedImage-116390_4cce2f0a-9c8e-457d-90fd-74e7c43157fb.png?v=1700573597',
                title: 'Scorpion',
                price: '$32.99',
                id: 48,
                des: `Scorpion is the fifth studio album by Canadian rapper and singer Drake. It was released on June 29, 2018, by Cash Money Records, Republic Records, and Young Money Entertainment. Scorpion is a double album consisting of 25 tracks. Its first disc is primarily hip hop, while its second disc has been described as R&B and pop. It was executively produced by Drake himself, alongside frequent collaborator 40 and manager Oliver El-Khatib. Scorpion features guest appearances from Jay-Z and Ty Dolla Sign, as well as posthumous appearances from Michael Jackson and Static Major.`
            },
            {
                genre: 'Pop',
                artist: 'Beyoncé',
                imgUrl: 'https://thesoundofvinyl.com/cdn/shop/products/SharedImage-122926.png?v=1686623252&width=800',
                title: 'Lemonade',
                price: '$49.99',
                id: 49,
                des: `Lemonade is the sixth studio album by American singer Beyoncé. It was released on April 23, 2016, by Parkwood Entertainment and Columbia Records, accompanied by a 65-minute film of the same title. It follows her self-titled fifth studio album (2013), and is a concept album with a song cycle that relates Beyoncé's emotional journey after her husband's infidelity in a generational and racial context. Primarily an R&B and art pop album, Lemonade encompasses a variety of genres, including reggae, blues, rock, hip hop, soul, funk, Americana, country, gospel, electronic, and trap. It features guest vocals from James Blake, Kendrick Lamar, the Weeknd, and Jack White, and contains samples and interpolations of a number of hip hop and rock songs.`
            },
            {
                genre: 'Hip-Hop/Rap',
                artist: 'Juice WRLD',
                imgUrl: 'https://thesoundofvinyl.com/cdn/shop/products/SharedImage-114913.png?v=1700573484&width=800',
                title: 'Legends Never Die',
                price: '$29.99',
                id: 50,
                des: `Legends Never Die is the third studio album by American rapper and singer Juice Wrld. It was posthumously released by Grade A Productions and Interscope Records on July 10, 2020. The album follows Juice Wrld's death from a drug-related seizure approximately seven months prior, on December 8, 2019. It features guest appearances from the Weeknd, Trippie Redd, Marshmello, Polo G, the Kid Laroi, and Halsey.`
            },
            {
                genre: 'Pop',
                artist: 'Drake',
                imgUrl: 'https://thesoundofvinyl.com/cdn/shop/products/SharedImage-115160.png?v=1700580092',
                title: 'views',
                price: '$45.99',
                id: 51,
                des: `Views is the fourth studio album by Canadian rapper and singer Drake. It was released on April 29, 2016, by Cash Money Records, Republic Records, and Young Money Entertainment. Recording sessions took place from 2015 to 2016, with both Drake and his longtime collaborator and record producer 40 serving as the record's executive producers. 40 also primarily handled the production on the album alongside Nineteen85, Maneesh Bidaye, Kanye West, and Jordan Ullman, among others. It also contains guest appearances by PartyNextDoor, Pimp C, Dvsn, Wizkid, Kyla, Future, and Rihanna.`
            },
            {
                genre: 'Hip-Hop/Rap',
                artist: 'Drake',
                imgUrl: 'https://shop.islandrecords.co.uk/cdn/shop/products/SharedImage-115155.png?v=1700580062&width=1100',
                title: "If You're Reading This It's Too Late",
                price: '$39.99',
                id: 52,
                des: `If You're Reading This It's Too Late is the fourth mixtape by Canadian rapper Drake, released on February 13, 2015 without prior announcement by OVO Sound, Young Money, Cash Money and Republic Records. The mixtape was produced by Drake's longtime collaborators 40 and Boi-1da, as well as labelmate PartyNextDoor, among others. Features include PartyNextDoor, Travis Scott, and Lil Wayne.`
            },
            {
                genre: 'Hip-Hop/Rap',
                artist: 'Lil Uzi Vert',
                imgUrl: 'https://store.liluziofficial.com/cdn/shop/files/LilUzi_PinkTape_Vinyl_AllRetail_1_1.png?v=1689353607',
                title: 'pink tape',
                price: '$36.99',
                id: 53,
                des: `Pink Tape is the third solo studio album by American rapper and singer Lil Uzi Vert. It was released through Generation Now and Atlantic Records on June 30, 2023.[2] The album features guest appearances from Travis Scott, Nicki Minaj, Bring Me the Horizon, Don Toliver, and Babymetal. Production was handled by a variety of record producers, including Bring Me the Horizon themselves, Don Cannon, Brandon Finessin, Arca, Bnyx, Oogie Mane, Cubeatz, WondaGurl, Bugz Ronin, Ken Carson, Bobby Raps, Rick Rubin, Serj Tankian, Daron Malakian, Kobametal, Wheezy, and Charlie Handsome, among others. The album serves as a successor to their third extended play Red & White (2022), which released a year earlier.`
            },
            {
                genre: 'Hip-Hop/Rap',
                artist: 'A$AP Rocky',
                imgUrl: 'https://recordstore.co.uk/cdn/shop/products/SharedImage-121171_9af8f693-7d83-445b-a06e-ea839b316139.png?v=1685628547',
                title: 'AT.LONG.LAST.A$AP',
                price: '$37.99',
                id: 54,
                des: `At. Long. Last. ASAP (stylized as AT.LONG.LAST.A$AP) is the second studio album by American rapper ASAP Rocky. It was released on May 26, 2015, by ASAP Worldwide, Polo Grounds Music, and RCA Records. The record serves as a sequel from Rocky's previous studio effort Long. Live. ASAP (2013). The album's executive production was provided by Danger Mouse, mentor ASAP Yams and Rocky himself, featuring production by Rocky and Danger Mouse, as well as a variety of several high-profile producers, including co-executive producers Hector Delgado and Juicy J, Jim Jonsin, FnZ, Frans Mernick, Kanye West, Thelonious Martin, and Mark Ronson, among others. The album features guest appearances from Bones, Joe Fox, Future, Schoolboy Q, Kanye West, Lil Wayne, and A-Cyde, among others.`
            },
            {
                genre: 'Hip-Hop/Rap',
                artist: 'Pop Smoke',
                imgUrl: 'https://www.umusic.ca/cdn/shop/products/NewProject-2023-04-24T162249.311.jpg?v=1690388319',
                title: 'Shoot For The Stars Aim For The Moon',
                price: '$55.99',
                id: 55,
                des: `Shoot for the Stars, Aim for the Moon is the debut studio album by American rapper Pop Smoke. It was posthumously released on July 3, 2020, by Victor Victor Worldwide and Republic Records, and a deluxe edition of the album that includes fifteen additional tracks—including remixes of three songs from the original—was released on July 20 that year, a date that would have been Pop Smoke's 21st birthday. It is a drill, trap, and R&B record.`
            },
            {
                genre: 'Hip-Hop/Rap',
                artist: 'Pop Smoke',
                imgUrl: 'https://www.umusic.ca/cdn/shop/products/NewProject-2023-04-24T142956.405.jpg?v=1690388316',
                title: 'Meet The Woo 2',
                price: '$44.99',
                id: 56,
                des: `Meet the Woo 2 (alternatively titled Meet the Woo, Vol. 2) is the second mixtape by American rapper Pop Smoke. Released by Victor Victor Worldwide and Republic Records on February 7, 2020, it is the second installment in the Meet the Woo mixtape series, following Meet the Woo (2019). The deluxe edition of the mixtape, released on February 12, 2020, features three new tracks, including a remix of "Dior" featuring American rapper Gunna. On February 19, 2020, less than two weeks after the release of the standard edition of Meet the Woo 2, Pop Smoke was shot and killed at age 20 during a home invasion. Guest appearances on the mixtape include Quavo, A Boogie wit da Hoodie, Fivio Foreign, Lil Tjay, Nav, Gunna, and PnB Rock.`
            },
            {
                genre: 'Hip-Hop/Rap',
                artist: 'Kendrick Lamar',
                imgUrl: 'https://shop.urbanlegends.com/cdn/shop/products/Kendrick-Lamar-good-kid_-m.A.A.d-city-_Deluxe-LP_-2LP.png?v=1603318011',
                title: 'GOOD KID, M.A.A.D CITY',
                price: '$35.99',
                id: 57,
                des: `Good Kid, M.A.A.D City (stylized as good kid, m.A.A.d city) is the second studio album by the American rapper Kendrick Lamar. It was released on October 22, 2012, by Top Dawg Entertainment, Aftermath Entertainment and Interscope Records. The album features guest appearances from Drake, Dr. Dre, Jay Rock, Anna Wise and MC Eiht. It is Lamar's first major label album, after his independently released first album Section.80 in 2011 and his signing to Aftermath and Interscope the following year.`
            },
            {
                genre: 'Hip-Hop/Rap',
                artist: 'Outkast',
                imgUrl: 'https://i.ebayimg.com/images/g/qFEAAOSwQ3Rj7Tfx/s-l1600.png',
                title: 'atliens',
                price: '$48.99',
                id: 58,
                des: `ATLiens is the second studio album by the American hip hop duo Outkast. It was released on August 27, 1996, by Arista Records and LaFace Records. From 1995 to 1996, Outkast recorded ATLiens in sessions at several Atlanta studios—Bosstown Recording Studios, Doppler Recording Studios, PatchWerk Recording Studio, Purple Dragon Studios, and Studio LaCoCo—as well as Chung King Recording Studio and Sound On Sound Recording in New York City.`
            },
            {
                genre: 'Hip-Hop/Rap',
                artist: 'Outkast',
                imgUrl: 'https://sound-merch.com.au/cdn/shop/products/Outkaststankonia_1024x1024.png?v=1622786992',
                title: 'stankonia',
                price: '$45.99',
                id: 59,
                des: `Stankonia is the fourth studio album by the American hip hop duo Outkast. It was released on October 31, 2000, by LaFace Records. The album was recorded in the duo's recently purchased Atlanta recording facility Stankonia Studios, which allowed for fewer time and recording constraints, and featured production work from Earthtone III (a production team consisting of Outkast and Mr. DJ) and Organized Noize. For the follow-up to their 1998 album Aquemini, the duo worked to create an expansive and experimental musical aesthetic, incorporating a diverse array of styles including funk, rave music, psychedelia, gospel, and rock within a Dirty South-oriented hip hop context.[1] During the recording sessions, André 3000 began moving beyond traditional rapping in favor of a more melodic vocal style, an approach to which Big Boi and several other producers were initially unaccustomed. Lyrically, the duo touched upon a wide range of subject matter, including sexuality, politics, misogyny, African-American culture, parenthood, and introspection. Stankonia featured appearances from a variety of local musicians discovered by the group while they were visiting clubs in their native city of Atlanta, Georgia`
            },
            {
                genre: 'Alternative',
                artist: 'Gorillaz',
                imgUrl: 'https://store.gorillaz.com/on/demandware.static/-/Sites-warner-master/default/dw93d3b675/pdp-img-eu/21grz_demondays_blk_lp_1.png',
                title: 'demon days',
                price: '$89.99',
                id: 60,
                des: `Demon Days is the second studio album by the British virtual band Gorillaz. It was released on 11 May 2005 in Japan and 23 May 2005 in the United Kingdom by Parlophone and in the United States by Virgin Records. Produced by Gorillaz, Danger Mouse, Jason Cox, and James Dring, it features De La Soul, Neneh Cherry, Martina Topley-Bird, Roots Manuva, MF Doom, Ike Turner, Bootie Brown of the Pharcyde, Shaun Ryder and Dennis Hopper. As with the band's eponymous 2001 debut, Demon Days and its performances were accompanied by various multimedia, including interactive features on the Gorillaz website, animated music videos and animatics. The visuals were designed by the Gorillaz co-creator Jamie Hewlett, under his design company Zombie Flesh Eaters.`
            },
            {
                genre: 'Alternative',
                artist: 'Gorillaz',
                imgUrl: 'https://thesoundofvinyl.com/cdn/shop/products/gorillaz-2lp-product-shot_f6d223c9-c963-41bf-8e7f-2cb4cedf0dc6.jpg?v=1687265467',
                title: 'Gorillaz',
                price: '$76.99',
                id: 61,
                des: `Gorillaz is the debut studio album by English virtual band Gorillaz, released on 26 March 2001 in the United Kingdom by Parlophone and in the United States by Virgin Records. The album reached number three in the UK and number fourteen in the US, and the top ten in several other countries. Gorillaz has sold over seven million copies worldwide. The album's success earned the group an entry in the Guinness Book of World Records as the "Most Successful Virtual Band", and spawned the singles "Clint Eastwood", "19-2000", "Rock the House", and "Tomorrow Comes Today".`
            },
            {
                genre: 'Hip-Hop/Rap',
                artist: 'Metro Boomin',
                imgUrl: 'https://shop.republicrecords.com/cdn/shop/products/Metro-vinyl-mockcopy.png?v=1695678561',
                title: 'Heroes & Villains',
                price: '$47.99',
                id: 62,
                des: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet laboriosam voluptas reprehenderit, omnis, porro ipsum tenetur odit voluptate, tempora quaerat blanditiis iste rerum doloribus? Modi nostrum architecto officia sunt corrupti.'
            },
            {
                genre: 'Hip-Hop/Rap',
                artist: 'Metro Boomin',
                imgUrl: 'https://recordstore.co.uk/cdn/shop/files/spider1.png?v=1695119128',
                imgUrlTwo: 'https://www.bravado.de/assets/asset_300x300/Metro-Boomin-METRO-BOOMIN-PRESENTS-SPIDER-MAN-ACROSS-THE-SPIDER-VERSE-SOUNDTRACK-Vinyl-505049-403717.png',
                title: 'SPIDER-MAN: ACROSS THE SPIDER-VERSE',
                price: '$30.99',
                id: 63,
                des: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet laboriosam voluptas reprehenderit, omnis, porro ipsum tenetur odit voluptate, tempora quaerat blanditiis iste rerum doloribus? Modi nostrum architecto officia sunt corrupti.'
            },
            {
                genre: 'Hip-Hop/Rap',
                artist: 'Mac Miller',
                imgUrl: 'https://shop.macmillerswebsite.com/cdn/shop/files/MMI-swimmingpools-LP.png?v=1700603898',
                title: 'Swimming',
                price: '$34.99',
                id: 64,
                des: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet laboriosam voluptas reprehenderit, omnis, porro ipsum tenetur odit voluptate, tempora quaerat blanditiis iste rerum doloribus? Modi nostrum architecto officia sunt corrupti.'
            },
            {
                genre: 'Hip-Hop/Rap',
                artist: 'Kendrick Lamar',
                imgUrl: 'https://store.polydor.co.uk/cdn/shop/products/SharedImage-137229.png?v=1693848218&width=3000',
                title: 'Mr. Morale & the Big Steppers',
                price: '$55.60',
                id: 65,
                des: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet laboriosam voluptas reprehenderit, omnis, porro ipsum tenetur odit voluptate, tempora quaerat blanditiis iste rerum doloribus? Modi nostrum architecto officia sunt corrupti.'
            },
            {
                genre: 'Hip-Hop/Rap',
                artist: 'Gunna',
                imgUrl: 'https://thesoundofvinyl.com/cdn/shop/products/SharedImage-146116.png?v=1686632594',
                title: 'DS4EVER',
                price: '$23.99',
                id: 66,
                des: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet laboriosam voluptas reprehenderit, omnis, porro ipsum tenetur odit voluptate, tempora quaerat blanditiis iste rerum doloribus? Modi nostrum architecto officia sunt corrupti.'
            },
            {
                genre: 'Hip-Hop/Rap',
                artist: 'Future',
                imgUrl: 'https://futureofficial.shop/cdn/shop/products/INEVERLIKEDYOULIMITEDEDITIONVINYL-BUTTERCREAM_530x@2x.png?v=1675460280',
                title: 'I NEVER LIKED YOU',
                price: '$55.99',
                id: 67,
                des: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet laboriosam voluptas reprehenderit, omnis, porro ipsum tenetur odit voluptate, tempora quaerat blanditiis iste rerum doloribus? Modi nostrum architecto officia sunt corrupti.'
            },
            {
                genre: 'Hip-Hop/Rap',
                artist: 'Future',
                imgUrl: 'https://sound-merch.com.au/cdn/shop/products/future_1024x1024.png?v=1625466052',
                title: 'High Off',
                price: '$34.99',
                id: 68,
                des: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet laboriosam voluptas reprehenderit, omnis, porro ipsum tenetur odit voluptate, tempora quaerat blanditiis iste rerum doloribus? Modi nostrum architecto officia sunt corrupti.'
            },
            {
                genre: 'Hip-Hop/Rap',
                artist: 'Young Thug',
                imgUrl: 'https://www.youngstonerlifeshop.com/on/demandware.static/-/Sites-warner-master/default/dwea931c96/YOUNG%20THUG/PUNK-YT-MOCKUP-00-front-Smoke-Green.png',
                title: 'Punk',
                price: '$99.99',
                id: 69, des: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet laboriosam voluptas reprehenderit, omnis, porro ipsum tenetur odit voluptate, tempora quaerat blanditiis iste rerum doloribus? Modi nostrum architecto officia sunt corrupti.'
            },
            {
                genre: 'Hip-Hop/Rap',
                artist: 'Young Thug',
                imgUrl: 'https://groundzero.fr/wp-content/uploads/2023/02/YT.jpg.png',
                title: 'jeffery',
                price: '$99.99',
                id: 70,
                des: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet laboriosam voluptas reprehenderit, omnis, porro ipsum tenetur odit voluptate, tempora quaerat blanditiis iste rerum doloribus? Modi nostrum architecto officia sunt corrupti.'
            }
            ,
            {
                genre: 'Hip-Hop/Rap',
                artist: 'Destroy Lonely',
                imgUrl: 'https://shopuk.destroylonely.net/cdn/shop/products/large-DESTROY_20LONELY_20packshot_20black_20copy.png?v=1700585043&width=1280',
                title: 'If Looks Could Kill',
                price: '$45.99',
                id: 71,
                des: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet laboriosam voluptas reprehenderit, omnis, porro ipsum tenetur odit voluptate, tempora quaerat blanditiis iste rerum doloribus? Modi nostrum architecto officia sunt corrupti.'
            },
            {
                genre: 'Hip-Hop/Rap',
                artist: 'Yeat',
                imgUrl: 'https://interscope.com/cdn/shop/files/Yeat-AfterLyfeVinyl2LP.png?v=1707419305',
                title: 'AftërLyfe',
                price: '$34.99',
                id: 72,
                des: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet laboriosam voluptas reprehenderit, omnis, porro ipsum tenetur odit voluptate, tempora quaerat blanditiis iste rerum doloribus? Modi nostrum architecto officia sunt corrupti.'
            },
            {
                genre: 'Hip-Hop/Rap',
                artist: 'MF DOOM',
                imgUrl: 'https://cdn.shopify.com/s/files/1/0043/7105/4710/files/madvillany-hhv-final-01_400x.png',
                title: 'Madvillainy',
                price: '$67.99',
                id: 73,
                des: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet laboriosam voluptas reprehenderit, omnis, porro ipsum tenetur odit voluptate, tempora quaerat blanditiis iste rerum doloribus? Modi nostrum architecto officia sunt corrupti.'
            },
            {
                genre: 'Hip-Hop/Rap',
                artist: 'Baby Keem',
                imgUrl: 'https://sound-merch.com.au/cdn/shop/products/194399969915_1024x1024.png?v=1668647721',
                title: 'The Melodic Blue',
                price: '$44.99',
                id: 74,
                des: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet laboriosam voluptas reprehenderit, omnis, porro ipsum tenetur odit voluptate, tempora quaerat blanditiis iste rerum doloribus? Modi nostrum architecto officia sunt corrupti.'
            }
        ],
    },
    reducers: {
        setVinyls: (state, action) => {
            state.vinyls = action.payload;
        },
    },
});

export const { setVinyls } = vinylsSlice.actions;

export default vinylsSlice.reducer;
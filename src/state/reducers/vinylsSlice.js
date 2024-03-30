import { createSlice } from '@reduxjs/toolkit';

export const vinylsSlice = createSlice({
    name: 'vinyls',
    initialState: {
        vinyls: [
            {
                genre: 'R&B/Soul',
                artist: 'Frank Ocean',
                imgUrl: "https://static.wixstatic.com/media/acb470_f4f34cfb216d4f829d87ea4b2bced24a~mv2.png/v1/fill/w_480,h_476,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/acb470_f4f34cfb216d4f829d87ea4b2bced24a~mv2.png",
                hover: 'https://i5.walmartimages.com/asr/54d23dc7-b4b9-41a0-9bfe-eaf6fe3a419d.8fca93ca69b3a175587133c347c2f2b4.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF',
                title: "BLONDE",
                price: "65.00",
                id: 0,
                des: 'Blonde by Frank Ocean is a deeply personal album exploring love, identity, and self-reflection themes. Its ambiguous and poetic lyrics leave its meaning open to interpretation, often resonating with listeners on a highly individual level.'
            },
            {
                genre: 'Hip-Hop/Rap',
                artist: 'Future',
                imgUrl: "https://www.turntablelab.com/cdn/shop/files/future-ds2-blackvinyl-1_1800x1800.jpg?v=1698158615",
                hover: 'https://www.turntablelab.com/cdn/shop/files/future-ds2-blackvinyl-2_1800x1800.jpg?v=1698158614',
                title: "DS2",
                price: "39.99",
                id: 1,
                des: "Building off a powerful three-mixtape comeback run, DS2 is bleak and unforgiving, a redemption story for a man who is certain it's too late for his soul to be redeemed; instead of a triumphal arc, we burrow deeper and deeper into Future's dystopian universe."
            },
            {
                genre: 'Hip-Hop/Rap',
                artist: 'Yeat',
                imgUrl: "https://interscope.com/cdn/shop/files/Yeat-2Alive_GeekPack_Vinyl2LP.png?v=1707419282",
                hover: 'https://www.turntablelab.com/cdn/shop/products/yeat-2alive-coloredvinyl-2_1000x1000.jpg?v=1665768686',
                title: "2 Alivë",
                price: "32.99",
                id: 2,
                des: "2 Alivë is the sequel to Yeat’s April 2021 project, Alivë, and his first album released through Interscope Records."
            },
            {
                genre: 'Hip-Hop/Rap',
                artist: 'Kanye West',
                imgUrl: "https://www.turntablelab.com/cdn/shop/products/kanye-collegedrop_1000x1000.jpg?v=1571262553",
                hover: 'https://www.turntablelab.com/cdn/shop/products/kanye-collegedrop2_1200x1200.jpg?v=1571262553',
                title: "The College Dropout",
                price: "27.99",
                id: 3,
                des: "College Dropout is Kanye West's debut album, released in 2004. It defies hip-hop norms with its blend of soulful production and introspective lyricism. Through tracks like Through the Wire and Jesus Walks, Kanye explores themes of resilience, identity, and spirituality. The album's innovative sound and candid storytelling make it a timeless classic, cementing Kanye's status as a cultural icon."
            },
            {
                genre: 'Hip-Hop/Rap',
                artist: 'Kanye West',
                imgUrl: "https://www.turntablelab.com/cdn/shop/products/kanye-808s-blackvinyl-1_1800x1800.jpg?v=1614189476",
                hover: 'https://www.turntablelab.com/cdn/shop/products/kanye-808s-blackvinyl-2_1800x1800.jpg?v=1614189479',
                title: "808s & Heartbreak",
                price: "49.99",
                id: 4,
                des: `"808s & Heartbreak" is Kanye West's fourth studio album, a departure from his previous work, exploring themes of heartbreak and loneliness with raw emotion and vulnerability, ultimately becoming a groundbreaking influence on hip-hop and R&B.`
            },

            {
                genre: 'Hip-Hop/Rap',
                artist: 'Kanye West & Kid Cudi',
                imgUrl: "https://www.shugarecords.com/cdn/shop/products/KSG_LP_950x_815333e5-b9c3-4345-9a4d-a3a3261a3137_1200x1200.png?v=1540920873",
                hover: 'https://www.turntablelab.com/cdn/shop/products/kidsseeghosts-2_2000x2000.jpg?v=1571265424',
                title: "Kids See Ghosts",
                price: "24.99",
                id: 5,
                des: `"Kids See Ghosts" is a collaborative album by Kanye West and Kid Cudi, released in 2018. It's praised for blending hip-hop, rock, and psychedelic music while exploring themes of mental health and self-discovery.`
            },
            {
                genre: 'Hip-Hop/Rap',
                artist: 'Kid Cudi',
                imgUrl: "https://shop.urbanlegends.com/cdn/shop/products/Kid-Cudi---Man-On-The-Moon-The-End-Of-Day-_2LP.png?v=1591216267",
                hover: 'https://www.turntablelab.com/cdn/shop/products/kidcudi-manonmoon2_2000x2000.jpg?v=1571262554',
                title: "Man on the Moon",
                price: "22.99",
                id: 6,
                des: `"Man on the Moon: The End of Day" is Kid Cudi's debut studio album, released in 2009. It's a concept album that delves into Cudi's struggles with loneliness, depression, and substance abuse. With tracks like "Day 'n' Nite" and "Pursuit of Happiness," the album explores themes of escapism and self-discovery. "Man on the Moon: The End of Day" is celebrated for its innovative sound and introspective lyrics, solidifying Kid Cudi's influence in the hip-hop and alternative music scenes.`
            },
            {
                genre: 'Hip-Hop/Rap',
                artist: 'Kid Cudi',
                imgUrl: "https://shop.urbanlegends.com/cdn/shop/products/Kid-Cudi---Man-On-The-Moon-II-The-Legend-Of-Mr.-Rager-_2LP.png?v=1591216272",
                hover: 'https://www.turntablelab.com/cdn/shop/products/kidcudi-manonmoon2-2_1200x1200.jpg?v=1641305724',
                title: "Man on the Moon II",
                price: "32.99",
                id: 7,
                des: `"Man on the Moon II: The Legend of Mr. Rager" is Kid Cudi's second studio album, released in 2010. Building on the themes of his debut, this album delves deeper into Cudi's struggles with fame, addiction, and mental health issues. Tracks like "Mr. Rager" and "Erase Me" continue the exploration of introspective themes, while also showcasing Cudi's experimentation with different musical styles. "Man on the Moon II" is praised for its emotional depth and atmospheric production, solidifying Kid Cudi's reputation as an influential figure in both hip-hop and alternative music.`
            },
            {
                genre: 'Hip-Hop/Rap',
                artist: 'J. Cole',
                imgUrl: "https://sound-merch.com.au/cdn/shop/files/4-YOUR-EYEZ-ONLY_grande.png?v=1690341031",
                hover: 'https://www.turntablelab.com/cdn/shop/products/jcole-4youreyezonly1_2000x2000.jpg?v=1571264941',
                title: "4 Your Eyez Only",
                price: "29.99",
                id: 8,
                des: `"4 Your Eyez Only" is the fourth studio album by rapper J. Cole, released in 2016. It's a concept album that tells the story of a friend's life and struggles, as narrated from the perspective of Cole himself. The album explores themes of family, poverty, crime, and mortality, with tracks like "Deja Vu" and "Neighbors" providing social commentary and personal reflection. "4 Your Eyez Only" received critical acclaim for its storytelling, lyrical depth, and soulful production, cementing J. Cole's reputation as one of the most talented and socially conscious artists in hip-hop.`
            },

            {
                genre: 'Hip-Hop/Rap',
                artist: 'J. Cole',
                imgUrl: "https://interscope.com/cdn/shop/files/jcole_1024x1024.png?v=1690243838",
                hover: 'https://www.turntablelab.com/cdn/shop/files/jcole-2014-blackvinyl-2_1800x1800.jpg?v=1685718615',
                title: "2014 Forest Hills Drive",
                price: "38.99",
                id: 9,
                des: `"2014 Forest Hills Drive" is J. Cole's third studio album, released in 2014. It's deeply autobiographical, reflecting on his upbringing and aspirations, with hits like "No Role Modelz" and "Apparently." The album received critical acclaim for its authenticity and cohesive production, establishing J. Cole as a prominent figure in hip-hop.`
            },
            {
                genre: 'Hip-Hop/Rap',
                artist: 'Lil Uzi Vert',
                imgUrl: "https://flyingout.co.nz/cdn/shop/files/ATL75-Vinyl-Uzi.webp?v=1691882308",
                title: "Luv Is Rage 2",
                price: "40.99",
                id: 10,
                des: `Luv Is Rage 2 is Lil Uzi Vert's debut studio album, released in 2017. It features a blend of trap, emo rap, and rock, with hits like "XO TOUR Llif3" and "The Way Life Goes" showcasing his melodic delivery and introspective lyrics. The album received positive reviews and cemented Lil Uzi Vert's status as a leading voice in hip-hop.`
            },
            {
                genre: 'Hip-Hop/Rap',
                artist: 'J. Cole',
                imgUrl: "https://thesoundofvinyl.com.au/cdn/shop/products/J-Cole-Born-Sinner-Exclusive-Gold-2LP_1024x1024.png?v=1684127347",
                title: "Born Sinner",
                price: "38.99",
                id: 11,
                des: `"Born Sinner" is the second studio album by rapper J. Cole, released in 2013. The album explores themes of temptation, redemption, and personal struggles, with tracks like "Power Trip" and "Crooked Smile" receiving widespread acclaim. "Born Sinner" showcases J. Cole's introspective lyricism and storytelling ability, solidifying his reputation as one of the most skilled lyricists in hip-hop.`
            },
            {
                genre: 'Hip-Hop/Rap',
                artist: 'Travis Scott',
                imgUrl: "https://www.turntablelab.com/cdn/shop/products/travisscott-astroworld_2000x2000.jpg?v=1571265401",
                hover: 'https://www.turntablelab.com/cdn/shop/products/travisscott-astroworld1_2000x2000.jpg?v=1571265401',
                title: "ASTROWORLD",
                price: "29.99",
                id: 12,
                des: `"Astroworld" is an album by Travis Scott, released in 2018. It features a mix of trap, hip-hop, and psychedelic music, with hits like "SICKO MODE" and "STARGAZING". The album received critical acclaim for its innovative production and energetic delivery, solidifying Travis Scott's position in hip-hop.`
            }, {
                genre: 'Hip-Hop/Rap',
                artist: 'Travis Scott',
                imgUrl: "https://www.turntablelab.com/cdn/shop/products/travisscott-rodeo_1600x1600.jpg?v=1571264326",
                hover: 'https://www.turntablelab.com/cdn/shop/products/travisscott-rodeo2_1600x1600.jpg?v=1571264326',
                title: "Rodeo",
                price: "26.99",
                id: 13,
                des: `"Rodeo" is an album by Travis Scott, known for its unique blend of trap, hip-hop, and experimental sounds. Released in 2015, it features hits like "Antidote" and "3500." The album received critical acclaim for its innovative production and Travis Scott's distinctive style, further establishing him as a prominent figure in hip-hop.`
            },
            {
                genre: 'Hip-Hop/Rap',
                artist: 'Childish Gambino',
                imgUrl: "https://www.turntablelab.com/cdn/shop/products/childishgambino-becausetheinternet_14790992-4eb2-46a9-8629-3e47498f74d6_1800x1800.jpg?v=1638392073",
                hover: 'https://www.turntablelab.com/cdn/shop/products/childishgambino-becausetheinternet-blackvinyl-2_1800x1800.jpg?v=1638392073',
                title: "Because the Internet",
                price: "33.99",
                id: 14,
                des: `"Because the Internet" is an album by Childish Gambino, released in 2013. It's praised for its genre-bending sound and introspective lyrics. Hits like "3005" and "Sweatpants" showcase Gambino's versatility and storytelling abilities. The album received critical acclaim, solidifying Childish Gambino's reputation as a multifaceted artist in the music industry.`
            }, {
                genre: 'Hip-Hop/Rap',
                artist: 'Kendrick Lamar',
                imgUrl: "https://www.turntablelab.com/cdn/shop/products/kendricklamar-damn-blackvinyl-1_1800x1800.jpg?v=1649352976",
                hover: 'https://www.turntablelab.com/cdn/shop/products/kendricklamar-damn-blackvinyl-2_1800x1800.jpg?v=1649352976',
                title: "DAMN.",
                price: "33.99",
                id: 15,
                des: `"DAMN." is an album by Kendrick Lamar, released in 2017. It's praised for its thought-provoking lyrics and diverse musical styles. Hits like "HUMBLE." and "DNA." showcase Lamar's introspection and social commentary. The album received widespread critical acclaim, earning numerous awards and further establishing Lamar as one of the most influential voices in hip-hop.`
            }, {
                genre: 'R&B/Soul',
                artist: 'Joji',
                imgUrl: "https://www.turntablelab.com/cdn/shop/products/joji-ballads_2000x2002.jpg?v=1571265564",
                hover: 'https://www.turntablelab.com/cdn/shop/products/joji-ballads1_2000x2002.jpg?v=1571265564',
                title: "Ballads 1",
                price: "49.99",
                id: 16,
                des: `"Ballads 1" is an album by Japanese-American artist Joji, released in 2018. Known for its melancholic yet captivating sound, the album features tracks like "Slow Dancing in the Dark," "YEAH RIGHT," and "WANTED U." "Ballads 1" showcases Joji's emotive vocals and introspective lyrics, establishing him as a significant presence in the alternative R&B scene.`
            }, {
                genre: 'R&B/Soul',
                artist: 'Joji',
                imgUrl: "https://www.turntablelab.com/cdn/shop/products/joji-nectar-blackvinyl-1_1800x1800.jpg?v=1655131745",
                hover: "https://www.turntablelab.com/cdn/shop/products/joji-nectar-blackvinyl-2_1800x1800.jpg?v=1655131745",
                title: "Nectar",
                price: "38.99",
                id: 17,
                des: `"Nectar" is an album by Japanese-Australian artist Joji, released in 2020. Known for its eclectic blend of R&B, pop, and electronic influences, the album features tracks like "Sanctuary," "Gimme Love," and "Run." "Nectar" showcases Joji's evolution as an artist, with a mix of introspective lyrics and catchy melodies. The album received positive reviews for its innovative production and emotional depth, further solidifying Joji's position in the music industry.`
            }, {
                genre: 'Hip-Hop/Rap',
                artist: 'Tyler, The Creator',
                imgUrl: "https://www.turntablelab.com/cdn/shop/products/tylerthecreator-scumfuck_18986188-58d8-495e-93a4-3e579bcebd85_2000x2000.jpg?v=1571264960",
                hover: 'https://www.turntablelab.com/cdn/shop/products/tylerthecreator-scumfuck1_2000x2000.jpg?v=1571264960',
                title: "flower boy",
                price: "27.99",
                id: 18,
                des: `"Flower Boy" is an album by rapper and producer Tyler, the Creator, released in 2017. It's praised for its introspective themes and lush production. Hits like "See You Again" and "911 / Mr. Lonely" showcase Tyler's growth as an artist. The album received critical acclaim, earning Tyler widespread recognition for his musical versatility and storytelling ability.`
            }, {
                genre: 'Hip-Hop/Rap',
                artist: 'Tyler, The Creator',
                imgUrl: "https://www.turntablelab.com/cdn/shop/products/tylercreator-goblin_35ff3862-04c6-4be1-9ec2-e89f7a7f9b1f_1800x1800.jpg?v=1667596557",
                hover: 'https://www.turntablelab.com/cdn/shop/products/tylercreator-goblin2_2000x2000.jpg?v=1667596557',
                title: "Goblin",
                price: "26.99",
                id: 19,
                des: `"Goblin" is a groundbreaking debut that introduced Tyler, The Creator's unique blend of horrorcore, introspective lyricism, and unconventional production. With tracks like "Yonkers" and "She," the album delves into themes of mental health, fame, and rebellion, cementing Tyler's reputation as a boundary-pushing artist.`
            },
            {
                genre: 'R&B/Soul',
                artist: 'The Weeknd',
                imgUrl: "https://www.turntablelab.com/cdn/shop/products/theweeknd-afterhours-coloredvinyl-1_1800x1800.jpg?v=1620920788",
                hover: 'https://www.turntablelab.com/cdn/shop/products/theweeknd-afterhours-coloredvinyl-2_1800x1800.jpg?v=1620920790',
                title: "After Hours",
                price: "39.99",
                id: 21,
                des: `"After Hours" is an electrifying album released by Canadian artist The Weeknd in 2020. With its dark and atmospheric soundscapes, the album delves into themes of love, heartbreak, and self-reflection. Tracks like "Blinding Lights" and "Save Your Tears" showcase The Weeknd's trademark blend of R&B, pop, and synth-pop, while also exploring new sonic territories. "After Hours" received widespread acclaim for its innovative production, haunting vocals, and emotionally resonant lyrics, solidifying The Weeknd's position as one of the most compelling artists of his generation.`
            },
            {
                genre: 'R&B/Soul',
                artist: 'The Weeknd',
                imgUrl: 'https://www.turntablelab.com/cdn/shop/products/weeknd-starboy-red_2000x2000.png?v=1571264758',
                hover: 'https://www.turntablelab.com/cdn/shop/products/weeknd-starboy-red1_2000x2000.png?v=1571264758',
                title: 'Starboy',
                price: '45.90',
                id: 90,
                des: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem at dolores accusamus distinctio perspiciatis optio quidem ipsam, excepturi expedita pariatur, delectus architecto dicta iure nulla dolorem sunt illum? Rem, debitis?`
            },
            {
                genre: 'R&B/Soul',
                artist: 'The Weeknd',
                imgUrl: 'https://www.turntablelab.com/cdn/shop/products/theweeknd-beautybehindthemadness-coloredvinyl-1_1800x1800.jpg?v=1675181028',
                hover: 'https://www.turntablelab.com/cdn/shop/products/theweeknd-beautybehindthemadness-coloredvinyl-2_1800x1800.jpg?v=1675181027',
                title: 'Beauty Behind The Madness',
                price: '38.98',
                id: 91,
                des: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem at dolores accusamus distinctio perspiciatis optio quidem ipsam, excepturi expedita pariatur, delectus architecto dicta iure nulla dolorem sunt illum? Rem, debitis?`
            },
            {
                genre: 'R&B/Soul',
                artist: 'The Weeknd',
                imgUrl: "https://www.turntablelab.com/cdn/shop/products/weeknd-houseofballoon_1200x1200.jpg?v=1571264212",
                hover: 'https://www.turntablelab.com/cdn/shop/products/weeknd-houseofballoon2_1200x1200.jpg?v=1571264212',
                title: "House of Balloons",
                price: "48.99",
                id: 22,
                des: `"House of Balloons" is a mesmerizing mixtape by Canadian artist The Weeknd, released in 2011. This project marks the beginning of The Weeknd's rise to prominence in the music industry. With its moody atmosphere, provocative lyrics, and innovative production, "House of Balloons" offers a unique blend of R&B, pop, and electronic elements. Tracks like "Wicked Games" and "High for This" showcase The Weeknd's seductive vocals and introspective lyricism, captivating listeners with their raw emotion and dark allure. "House of Balloons" remains a landmark release in The Weeknd's discography, setting the stage for his subsequent success and influencing a new wave of alternative R&B artists.`
            },

            {
                genre: 'R&B/Soul',
                artist: 'The Weeknd',
                imgUrl: 'https://www.turntablelab.com/cdn/shop/products/weeknd-thursday_1200x1200.jpg?v=1571264216',
                hover: 'https://www.turntablelab.com/cdn/shop/products/weeknd-thursday2_1200x1200.jpg?v=1571264216',
                title: 'Thursday',
                price: '23.40',
                id: 92,
                des: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem at dolores accusamus distinctio perspiciatis optio quidem ipsam, excepturi expedita pariatur, delectus architecto dicta iure nulla dolorem sunt illum? Rem, debitis?`
            },
            {
                genre: 'R&B/Soul',
                artist: 'The Weeknd',
                imgUrl: 'https://www.turntablelab.com/cdn/shop/products/theweekend-echoesofsilence-blackvinyl-1_1800x1800.jpg?v=1679413204',
                hover: 'https://www.turntablelab.com/cdn/shop/products/theweekend-echoesofsilence-blackvinyl-2_1800x1800.jpg?v=1679413203',
                title: 'Echoes of silence',
                price: '23.40',
                id: 989,
                des: `Lorem ipsum dolor sit amet consectetur,`
            },
            {
                genre: 'R&B/Soul',
                artist: 'The Weeknd',
                imgUrl: "https://www.horizonsmusic.co.uk/cdn/shop/products/WeekndMyDearMelancholy_1200x1200.png?v=1675703598",
                hover: 'https://www.turntablelab.com/cdn/shop/products/rsd2020-aug29-theweeknd-mydearmelancholy_1800x1800.jpg?v=1598546201',
                title: "My Dear Melancholy",
                price: "51.99",
                id: 20,
                des: `"My Dear Melancholy," is a mesmerizing EP released by Canadian singer-songwriter The Weeknd in 2018. With its haunting melodies and emotionally charged lyrics, the EP explores themes of heartbreak, regret, and longing. Featuring tracks like "Call Out My Name" and "Privilege," the project showcases The Weeknd's signature blend of R&B, pop, and electronic influences, captivating listeners with its raw emotion and atmospheric production. "My Dear Melancholy," stands as a poignant reflection on love and loss, further solidifying The Weeknd's status as a leading figure in contemporary music.`
            },

            {
                genre: 'R&B/Soul',
                artist: 'Childish Gambino',
                imgUrl: "https://www.turntablelab.com/cdn/shop/products/childishgambino-awakenmylove_56808985-9c2d-464f-ba80-7122240d53d2_2000x2000.jpg?v=1571265111",
                hover: 'https://www.turntablelab.com/cdn/shop/products/childishgambino-awakenmylove1_2000x2000.jpg?v=1571265111',
                title: "Awaken, My Love!",
                price: "35.99",
                id: 23,
                des: `"Awaken, My Love!" is a genre-defying album by Childish Gambino, released in 2016. Departing from his hip-hop roots, Gambino explores funk and soul influences with tracks like "Redbone" and "Me and Your Mama." The album received critical acclaim for its experimental production and thematic depth, marking Gambino as a versatile artist in the music industry.`
            },
            {
                genre: 'Hip-Hop/Rap',
                artist: 'Yeat',
                imgUrl: "https://interscope.com/cdn/shop/products/YeatVinyl_fb3139cd-4310-4e4c-80b8-5006d7c9d4d2.png?v=1673632335",
                hover: 'https://www.turntablelab.com/cdn/shop/products/yeatlyfe-colroedvinyl-2_1800x1800.jpg?v=1679424808',
                title: "Lyfë",
                price: "32.99",
                id: 24,
                des: `Lyfë, rapper Yeat's hard-hitting EP released in September 2022, packs his signature style into a concise 34 minutes. Expect his usual blend of rapping and singing over energetic, futuristic beats.  The project features a guest appearance from another rap star, Lil Uzi Vert, and helped propel Yeat into the Billboard 200 top 10.`
            },

            {
                genre: 'Hip-Hop/Rap',
                artist: 'Denzel Curry',
                imgUrl: "https://www.turntablelab.com/cdn/shop/files/denzelcurry-melt-coloredvinyl-1_1800x1800.jpg?v=1704465554",
                hover: 'https://www.turntablelab.com/cdn/shop/files/denzelcurry-melt-coloredvinyl-3_1800x1800.jpg?v=1704465555',
                title: "Melt My Eyez See Your Future",
                price: "35.99",
                id: 25,
                des: `"Melt My Eyez See Your Future" is the title of a critically acclaimed album by American rapper Denzel Curry.`
            }, {
                genre: 'Hip-Hop/Rap',
                artist: 'Playboi Carti',
                imgUrl: "https://www.turntablelab.com/cdn/shop/files/plaiboicarti-wlr-blackvinyl-1_1800x1800.jpg?v=1683893267",
                hover: 'https://www.turntablelab.com/cdn/shop/files/plaiboicarti-wlr-blackvinyl-2_1800x1800.jpg?v=1683893267',
                title: "Whole Lotta Red",
                price: "29.99",
                id: 26,
                des: `Playboi Carti's "Whole Lotta Red" is a genre-bending hip-hop experience. It's known for its dark, distorted beats and Carti's signature high-pitched vocals. Expect a mix of rapping and singing with a punk rock attitude.`
            },
            {
                genre: 'Hip-Hop/Rap',
                artist: 'JACKBOYS and Travis Scottj',
                imgUrl: 'https://www.turntablelab.com/cdn/shop/products/jackboys-jackboys-vinyl1_2000x2000.jpg?v=1590511876',
                hover: 'https://www.turntablelab.com/cdn/shop/products/jackboys-jackboys-vinyl2_2000x2000.jpg?v=1590511876',
                title: 'JACKBOYS',
                price: '25.99',
                id: 27,
                des: `Jackboys is a high-energy hip-hop collective led by rapper Travis Scott.  It's a crew effort featuring Scott alongside fellow Cactus Jack Records signees Sheck Wes, Don Toliver, Luxury Tax 50, and DJ Chase B. Their sound blends elements of trap music with Scott's signature dark and atmospheric production. They rose to fame with their self-titled debut album in December 2019, which went straight to number one on the Billboard 200 chart.`
            },
            {
                genre: 'Hip-Hop/Rap',
                artist: 'Childish Gambino',
                imgUrl: 'https://recordstore.co.uk/cdn/shop/products/SharedImage-129483.png?v=1685977045',
                hover: 'https://www.turntablelab.com/cdn/shop/products/childishgambino-camp_2000x2000.jpg?v=1571264770',
                title: 'camp',
                price: '31.98',
                id: 28,
                des: `Camp is the debut studio album by American recording artist Donald Glover, better known by his stage name Childish Gambino. `
            },
            {
                genre: 'Hip-Hop/Rap',
                artist: 'Nas',
                imgUrl: 'https://www.turntablelab.com/cdn/shop/products/nas-illmatic_7cb9037b-57d6-4874-bbf6-496059aa7d7c_1200x1200.jpg?v=1571263088',
                hover: 'https://www.turntablelab.com/cdn/shop/products/nas-illmatic-backshot_1800x1800.jpg?v=1667925991',
                title: 'Illmatic',
                price: '26.99',
                id: 29,
                des: `Illmatic, released in 1994, is widely considered one of the greatest and most influential hip-hop albums of all time.`
            },
            {
                genre: 'Hip-Hop/Rap',
                artist: 'Nas',
                imgUrl: 'https://www.turntablelab.com/cdn/shop/products/nas-iam_2000x2000.jpg?v=1571265302',
                hover: 'https://www.turntablelab.com/cdn/shop/products/nas-iam1_2000x2000.jpg?v=1571265302',
                title: 'I Am...',
                price: '36.99',
                id: 30,
                des: `"I Am..." is a classic hip-hop masterpiece that showcases the rapper's lyrical prowess and storytelling abilities. Released in 1999, the album features tracks like "Nas Is Like" and "Hate Me Now" that have become iconic in the genre. With production from heavyweights like DJ Premier and Timbaland, "I Am..." solidified Nas's status as one of the greatest MCs of all time.`
            },
            {
                genre: 'Hip-Hop/Rap',
                artist: 'Mac Miller',
                imgUrl: 'https://www.turntablelab.com/cdn/shop/files/macmiller-circles-coloredvinyl-1_1800x1800.jpg?v=1696605110',
                hover: 'https://www.turntablelab.com/cdn/shop/files/macmiller-circles-coloredvinyl-2_1800x1800.jpg?v=1696605111',
                title: 'Circles',
                price: '34.98',
                id: 31,
                des: `Circles by Mac Miller is a posthumous album that showcases the late rapper's introspective lyrics and musical versatility. With a blend of hip-hop, R&B, and indie influences, the album features soulful melodies and poignant storytelling.`
            },
            {
                genre: 'Hip-Hop/Rap',
                artist: 'Mac Miller',
                imgUrl: 'https://www.turntablelab.com/cdn/shop/products/macmiller-divinefeminine_2000x2000.jpg?v=1571265616',
                hover: 'https://www.turntablelab.com/cdn/shop/products/macmiller-divinefeminine2_2000x2000.jpg?v=1571265616',
                title: 'The Divine Feminine',
                price: '21.96',
                id: 32,
                des: `The Divine Feminine by Mac Miller is a captivating album`
            },
            {
                genre: 'R&B/Soul',
                artist: 'Steve Lacy',
                imgUrl: 'https://www.turntablelab.com/cdn/shop/products/stevelacy-geminirights-blackvinyl-1_1800x1800.jpg?v=1667516293',
                hover: 'https://www.turntablelab.com/cdn/shop/products/stevelacy-geminirights-blackvinyl-2_1800x1800.jpg?v=1667516293',
                title: 'Gemini Rights',
                price: '36.98',
                id: 33,
                des: `Gimini Rights by Steve Lacy, a must-have product for all music enthusiasts. This innovative creation brings together the perfect blend of style and functionality. With its sleek design and cutting-edge features, Gimini Rights allows you to experience music like never before.`
            },
            {
                genre: 'R&B/Soul',
                artist: 'Steve Lacy',
                imgUrl: 'https://www.turntablelab.com/cdn/shop/products/stevelacy-apollo-blackvinyl-1_1800x1800.jpg?v=1591031907',
                hover: 'https://www.turntablelab.com/cdn/shop/products/stevelacy-apollo-blackvinyl-2_1800x1800.jpg?v=1591031907',
                title: 'Apollo XXI ',
                price: '36.98',
                id: 983,
                des: `solo debut album from multi-instrumentalist Steve Lacy of The Internet`
            },
            {
                genre: 'Hip-Hop/Rap',
                artist: 'Kanye West',
                imgUrl: 'https://www.turntablelab.com/cdn/shop/products/kanyewest-mybeautifultwisted-cover_2000x2000.jpg?v=1571262555',
                hover: 'https://www.turntablelab.com/cdn/shop/products/kanyewest-mybeautifultwisted_1024x1024.jpg?v=1571262555',
                title: 'MY BEAUTIFUL DARK TWISTED FANTASY',
                price: '75.99',
                id: 34,
                des: ` This critically acclaimed album showcases Kanye's innovative production style and introspective lyrics, making it a must-have for any music lover. Featuring collaborations with artists like Jay-Z, Kid Cudi, and Nicki Minaj, "My Beautiful Dark Twisted Fantasy" offers a diverse range of sounds and perspectives that will keep you coming back for more.`
            },
            {
                genre: 'Hip-Hop/Rap',
                artist: 'Kanye West',
                imgUrl: 'https://www.turntablelab.com/cdn/shop/products/kanyewest-ye_2000x2000.jpg?v=1571265348',
                hover: 'https://www.turntablelab.com/cdn/shop/products/kanyewest-ye1-back_2000x2000.jpg?v=1571265348',
                title: 'Ye',
                price: '25.99',
                id: 35,
                des: `Get ready to immerse yourself in the mesmerizing sounds of "ye," the latest album by the talented artist, ye. This musical masterpiece takes you on a journey through a blend of genres, from soulful melodies to catchy beats that will have you grooving along. With heartfelt lyrics and captivating production, ye showcases their unique style and artistic vision. Whether you're a long-time fan or new to their music, this album is a must-have addition to your collection. So, sit back, relax, and let the enchanting tunes of "ye" transport you to a world of musical bliss.`
            },
            {
                genre: 'Hip-Hop/Rap',
                artist: 'XXXTENTACION',
                imgUrl: 'https://www.turntablelab.com/cdn/shop/products/xxxtentacion-17_2000x2000.jpg?v=1571265542',
                hover: 'https://www.turntablelab.com/cdn/shop/products/xxxtentacion-17-1_2000x2000.jpg?v=1571265542',
                title: '17',
                price: '28.99',
                id: 36,
                des: `The 17 album by XXXTENTACION is a powerful and emotional collection of tracks that showcases the raw talent and vulnerability of the late artist. With a mix of introspective lyrics and haunting melodies, this album takes listeners on a journey through xxxtentacion's thoughts and emotions. From the hauntingly beautiful "Jocelyn Flores" to the introspective "Depression & Obsession," each song on this album leaves a lasting impact. Whether you're a fan of rap or not, the 17 album is a must-listen for anyone who appreciates honest and thought-provoking music.`
            },
            {
                genre: 'Hip-Hop/Rap',
                artist: 'Kanye West',
                imgUrl: 'https://www.turntablelab.com/cdn/shop/products/kanyewest-lateregistration-blackvinyl-1_1800x1800.jpg?v=1616690122',
                hover: 'https://www.turntablelab.com/cdn/shop/products/kanyewest-lateregistration-blackvinyl-2_1800x1800.jpg?v=1616690124',
                title: 'Late Registration',
                price: '35.99',
                id: 37,
                des: `Discover the raw and introspective journey of Kanye West's "Late Registration" album, where he seamlessly blends soulful samples with his signature production style. From hits like "Gold Digger" to deeper tracks like "Roses," this album showcases Ye's versatility and storytelling ability. Dive into this classic hip-hop masterpiece that solidified Kanye's spot as one of the greatest artists of our time.`
            },
            {
                genre: 'R&B/Soul',
                artist: 'The Weeknd',
                imgUrl: 'https://www.turntablelab.com/cdn/shop/products/theweeknd-dawnfm-blackvinyl-1_1800x1800.jpg?v=1651765158',
                hover: 'https://www.turntablelab.com/cdn/shop/products/theweeknd-dawnfm-blackvinyl-2_1800x1800.jpg?v=1651765157',
                title: 'Dawn FM',
                price: '29.99',
                id: 38,
                des: `Dawn FM is a concept album that underscores helplessness as only a mindset. It's a character's journey through the phases of purgatory, and the eventual acceptance of one's state of being.`
            },
            {
                genre: 'Hip-Hop/Rap',
                artist: 'Travis Scott',
                imgUrl: 'https://thesoundofvinyl.com/cdn/shop/products/blk.png?v=1699263903&width=1600',
                title: 'Utopia',
                price: '36.99',
                id: 39,
                des: `Utopia is the fourth studio album by American rapper Travis Scott. It was released through Cactus Jack and Epic Records on July 28, 2023. The album features guest appearances from Teezo Touchdown, Drake, Playboi Carti, Beyoncé, Rob49, 21 Savage, the Weeknd, Swae Lee, Yung Lean, Dave Chappelle, Young Thug, Westside Gunn, Kid Cudi, Bad Bunny, SZA, Future, and James Blake, with Lil Uzi Vert and Sheck Wes appearing additionally on physical releases of the album. Production was handled by a variety of record producers, including Scott and Blake themselves, WondaGurl, Ye, Allen Ritter, Guy-Manuel de Homem-Christo, Wheezy, Buddy Ross, Vegyn, 30 Roc, Jahaan Sweet, Boi-1da, Vinylz, Tay Keith, Bnyx, Oz, Justin Vernon, the Alchemist, Dom Maker, Illangelo, DVLP, and Metro Boomin, among others. The album serves as the follow-up to Scott's third studio album, Astroworld (2018), as well as JackBoys (2019), his compilation album that was released in collaboration with Cactus Jack. It is a concept record that was accompanied by a film titled Circus Maximus which was released the day before the album.`
            },
            {
                genre: 'Hip-Hop/Rap',
                artist: 'Dr.Dre',
                imgUrl: 'https://www.turntablelab.com/cdn/shop/files/drdre-chronic-blackvinyl-1_1800x1800.jpg?v=1683140239',
                hover: 'https://www.turntablelab.com/cdn/shop/files/drdre-chronic-blackvinyl-2_1800x1800.jpg?v=1683140239',
                title: 'The Chronic',
                price: '36.99',
                id: 40,
                des: `The Chronic brought G-funk to the mainstream – a genre defined by slow bass beats and melodic synthesizers, topped by P-Funk samples, female vocals, and a laconic, laid-back lyrical delivery referred to as a "lazy drawl". The album takes its name from a slang term for premium grade cannabis, chronic.`
            },
            {
                genre: 'Hip-Hop/Rap',
                artist: 'Juice WRLD',
                imgUrl: 'https://www.turntablelab.com/cdn/shop/products/juicewrld-goodbyegoodriddance_2000x2000.jpg?v=1571265556',
                hover: 'https://www.turntablelab.com/cdn/shop/products/juicewrld-goodbyegoodriddance1_2000x2000.jpg?v=1571265556',
                title: 'GOODBYE & GOOD RIDDANCE',
                price: '25.99',
                id: 41,
                des: `From start to finish, this album speaks to a situation everyone has been in. Juice WRLD speaks on his heartbreak, how his ex messed him up and what he is doing to get over her. He goes through some songs reminiscing and wanting the old times back, and some other songs he tries to move on, only to realize he can't.`
            },
            {
                genre: 'Hip-Hop/Rap',
                artist: 'XXXTENTACION',
                imgUrl: 'https://www.turntablelab.com/cdn/shop/products/xxxtentacion-skins_1800x1800.jpg?v=1571265716',
                hover: 'https://www.turntablelab.com/cdn/shop/products/xxxtentacion-skins1_1800x1800.jpg?v=1571265716',
                title: 'SKINS',
                price: '28.99',
                id: 42,
                des: `SKINS, the Florida rapper's third studio album, memorializes a troubled talent in a series of fragmented musings on heartbreak, depression, self-harm, and death. `
            },
            {
                genre: 'Hip-Hop/Rap',
                artist: "Pi'erre Bourne",
                imgUrl: 'https://m.media-amazon.com/images/I/61nvJuf2QGS._UF894,1000_QL80_.jpg',
                title: "The Life Of Pi'erre 5",
                price: '39.98',
                id: 43,
                des: `The Life of Pi'erre 5 is the second studio album by American record producer and rapper Pi'erre Bourne. It was released on June 11, 2021, by SossHouse Records and Interscope Records. The album features Playboi Carti, Lil Uzi Vert, and Sharc. It is the final album in The Life of Pi'erre series.`
            },
            {
                genre: 'Pop',
                artist: 'Olivia Rodrigo',
                imgUrl: 'https://www.turntablelab.com/cdn/shop/files/oliviarodrigo-sour-coloredvinyl-1_1800x1800.jpg?v=1699294399',
                hover: 'https://www.turntablelab.com/cdn/shop/files/oliviarodrigo-sour-coloredvinyl-2_1800x1800.jpg?v=1699294400',
                title: 'sour',
                price: '26.96',
                id: 44,
                des: `Influenced by Rodrigo's favorite genres and singer-songwriters, Sour is primarily a pop record that spans from energetic pop-punk songs to bedroom pop ballads. Its subject matter centers on adolescence, failed romance, and heartache.`
            },
            {
                genre: 'Pop',
                artist: 'Olivia Rodrigo',
                imgUrl: 'https://www.turntablelab.com/cdn/shop/files/oliviarodrigo-guts-coloredvinyl-1_1800x1800.jpg?v=1694710640',
                hover: 'https://www.turntablelab.com/cdn/shop/files/oliviarodrigo-guts-coloredvinyl-2_1800x1800.jpg?v=1694710642',
                title: 'guts',
                price: '37.92',
                id: 45,
                des: `Guts (stylized in all caps) is the second studio album by the American singer-songwriter Olivia Rodrigo, released on September 8, 2023, through Geffen Records. It was written and recorded with Rodrigo working closely alongside Dan Nigro, the producer and multi-instrumentalist of her debut album Sour (2021). Inspired by the period of time immediately following Sour's success, Rodrigo conceived Guts hoping to reflect the process of maturity she experienced toward the end of her teenage years.`
            },
            {
                genre: 'Pop',
                artist: 'Rihanna',
                imgUrl: 'https://www.turntablelab.com/cdn/shop/products/rhianna-anti-blackvinyl-1_1800x1800.jpg?v=1677692091',
                hover: 'https://www.turntablelab.com/cdn/shop/products/rhianna-anti-blackvinyl-2_1800x1800.jpg?v=1677692091',
                title: 'anti',
                price: '89.92',
                id: 46,
                des: `Anti is the eighth studio album by Barbadian singer Rihanna. It was released on 28 January 2016 by Roc Nation and Westbury Road. Rihanna started recording in 2014 after departing from Def Jam Recordings, who had released all of her albums since her 2005 debut. As executive producer, Rihanna recorded Anti with producers including Jeff Bhasker, Boi-1da, DJ Mustard, Hit-Boy, Brian Kennedy, Timbaland and No I.D., at studios in Canada, the United States and France. SZA and Drake contribute guest vocals.`
            },
            {
                genre: 'R&B/Soul',
                artist: 'Drake',
                imgUrl: 'https://www.turntablelab.com/cdn/shop/products/drake-takecare_2000x2000.jpg?v=1571264670',
                hover: 'https://www.turntablelab.com/cdn/shop/products/drake-takecare1_2000x2000.jpg?v=1571264670',
                title: 'take care',
                price: '39.88',
                id: 47,
                des: `Take Care is the second studio album by Canadian rapper Drake. It was released on November 15, 2011, by Young Money Entertainment, Cash Money Records and Republic Records. The album features guest appearances from the Weeknd, Rihanna, Kendrick Lamar, Birdman, Nicki Minaj, Rick Ross, Lil Wayne, and André 3000. Alongside prominent production from the album's executive producers Drake and 40, further contributors include T-Minus, Chantal Kreviazuk, Boi-1da, Illangelo, Jamie xx, Supa Dups, Just Blaze, Chase N. Cashe, and Doc McKinney.`
            },
            {
                genre: 'Hip-Hop/Rap',
                artist: 'Drake',
                imgUrl: 'https://www.turntablelab.com/cdn/shop/products/drake-scorpion_2000x2000.jpg?v=1571265549',
                hover: 'https://www.turntablelab.com/cdn/shop/products/drake-scorpion1_2000x2000.jpg?v=1571265549',
                title: 'Scorpion',
                price: '32.99',
                id: 48,
                des: `Scorpion is the fifth studio album by Canadian rapper and singer Drake. It was released on June 29, 2018, by Cash Money Records, Republic Records, and Young Money Entertainment. Scorpion is a double album consisting of 25 tracks. Its first disc is primarily hip hop, while its second disc has been described as R&B and pop. It was executively produced by Drake himself, alongside frequent collaborator 40 and manager Oliver El-Khatib. Scorpion features guest appearances from Jay-Z and Ty Dolla Sign, as well as posthumous appearances from Michael Jackson and Static Major.`
            },
            {
                genre: 'Pop',
                artist: 'Beyoncé',
                imgUrl: 'https://thesoundofvinyl.com/cdn/shop/products/SharedImage-122926.png?v=1686623252&width=800',
                title: 'Lemonade',
                price: '49.99',
                id: 49,
                des: `Lemonade is the sixth studio album by American singer Beyoncé. It was released on April 23, 2016, by Parkwood Entertainment and Columbia Records, accompanied by a 65-minute film of the same title. It follows her self-titled fifth studio album (2013), and is a concept album with a song cycle that relates Beyoncé's emotional journey after her husband's infidelity in a generational and racial context. Primarily an R&B and art pop album, Lemonade encompasses a variety of genres, including reggae, blues, rock, hip hop, soul, funk, Americana, country, gospel, electronic, and trap. It features guest vocals from James Blake, Kendrick Lamar, the Weeknd, and Jack White, and contains samples and interpolations of a number of hip hop and rock songs.`
            },
            {
                genre: 'Hip-Hop/Rap',
                artist: 'Juice WRLD',
                imgUrl: 'https://thesoundofvinyl.com/cdn/shop/products/SharedImage-114913.png?v=1700573484&width=800',
                title: 'Legends Never Die',
                price: '29.99',
                id: 50,
                des: `Legends Never Die is the third studio album by American rapper and singer Juice Wrld. It was posthumously released by Grade A Productions and Interscope Records on July 10, 2020. The album follows Juice Wrld's death from a drug-related seizure approximately seven months prior, on December 8, 2019. It features guest appearances from the Weeknd, Trippie Redd, Marshmello, Polo G, the Kid Laroi, and Halsey.`
            },
            {
                genre: 'Pop',
                artist: 'Drake',
                imgUrl: 'https://www.turntablelab.com/cdn/shop/products/drake-views-blackvinyl-1_1800x1800.jpg?v=1653509309',
                hover:'https://www.turntablelab.com/cdn/shop/products/drake-views-blackvinyl-2_1800x1800.jpg?v=1653509310',
                title: 'views',
                price: '45.99',
                id: 51,
                des: `Views is the fourth studio album by Canadian rapper and singer Drake. It was released on April 29, 2016, by Cash Money Records, Republic Records, and Young Money Entertainment. Recording sessions took place from 2015 to 2016, with both Drake and his longtime collaborator and record producer 40 serving as the record's executive producers. 40 also primarily handled the production on the album alongside Nineteen85, Maneesh Bidaye, Kanye West, and Jordan Ullman, among others. It also contains guest appearances by PartyNextDoor, Pimp C, Dvsn, Wizkid, Kyla, Future, and Rihanna.`
            },
            {
                genre: 'Hip-Hop/Rap',
                artist: 'Drake',
                imgUrl: 'https://www.turntablelab.com/cdn/shop/products/drake-ifyourreadingthis_2000x2000.jpg?v=1571264701',
                hover: 'https://www.turntablelab.com/cdn/shop/products/drake-ifyourreadingthis1_2000x2000.jpg?v=1571264701',
                title: "If You're Reading This It's Too Late",
                price: '39.99',
                id: 52,
                des: `If You're Reading This It's Too Late is the fourth mixtape by Canadian rapper Drake, released on February 13, 2015 without prior announcement by OVO Sound, Young Money, Cash Money and Republic Records. The mixtape was produced by Drake's longtime collaborators 40 and Boi-1da, as well as labelmate PartyNextDoor, among others. Features include PartyNextDoor, Travis Scott, and Lil Wayne.`
            },
            {
                genre: 'Hip-Hop/Rap',
                artist: 'Lil Uzi Vert',
                imgUrl: 'https://store.liluziofficial.com/cdn/shop/files/LilUzi_PinkTape_Vinyl_AllRetail_1_1.png?v=1689353607',
                hover: 'https://store.liluziofficial.com/cdn/shop/files/LilUzi_PinkTape_PictureDisc_1.png?v=1689089784',
                title: 'pink tape',
                price: '36.99',
                id: 53,
                des: `Pink Tape is the third solo studio album by American rapper and singer Lil Uzi Vert. It was released through Generation Now and Atlantic Records on June 30, 2023.[2] The album features guest appearances from Travis Scott, Nicki Minaj, Bring Me the Horizon, Don Toliver, and Babymetal. Production was handled by a variety of record producers, including Bring Me the Horizon themselves, Don Cannon, Brandon Finessin, Arca, Bnyx, Oogie Mane, Cubeatz, WondaGurl, Bugz Ronin, Ken Carson, Bobby Raps, Rick Rubin, Serj Tankian, Daron Malakian, Kobametal, Wheezy, and Charlie Handsome, among others. The album serves as a successor to their third extended play Red & White (2022), which released a year earlier.`
            },
            {
                genre: 'Hip-Hop/Rap',
                artist: 'A$AP Rocky',
                imgUrl: 'https://www.turntablelab.com/cdn/shop/products/asaprocky-atlonglastasap_2000x2000.jpg?v=1571264620',
                hover: 'https://www.turntablelab.com/cdn/shop/products/asaprocky-atlonglastasap-2_2000x2000.jpg?v=1571264620',
                title: 'AT.LONG.LAST.A$AP',
                price: '37.99',
                id: 54,
                des: `At. Long. Last. ASAP (stylized as AT.LONG.LAST.A$AP) is the second studio album by American rapper ASAP Rocky. It was released on May 26, 2015, by ASAP Worldwide, Polo Grounds Music, and RCA Records. The record serves as a sequel from Rocky's previous studio effort Long. Live. ASAP (2013). The album's executive production was provided by Danger Mouse, mentor ASAP Yams and Rocky himself, featuring production by Rocky and Danger Mouse, as well as a variety of several high-profile producers, including co-executive producers Hector Delgado and Juicy J, Jim Jonsin, FnZ, Frans Mernick, Kanye West, Thelonious Martin, and Mark Ronson, among others. The album features guest appearances from Bones, Joe Fox, Future, Schoolboy Q, Kanye West, Lil Wayne, and A-Cyde, among others.`
            },
            {
                genre: 'Hip-Hop/Rap',
                artist: 'A$AP Rocky',
                imgUrl: 'https://www.turntablelab.com/cdn/shop/products/asaprocky-longliveasap_2000x2000.jpg?v=1571263248',
                hover: 'https://www.turntablelab.com/cdn/shop/products/asaprocky-longliveasap1_2000x2000.jpg?v=1571263248',
                title: 'LONG.LIVE.A$AP',
                price: '37.99',
                id: 543,
                des: ``
            },
            {
                genre: 'Hip-Hop/Rap',
                artist: 'Pop Smoke',
                imgUrl: 'https://www.turntablelab.com/cdn/shop/products/popsmoke-shootforthestars-clearvinyl-2_1800x1800.jpg?v=1611338912',
                hover: 'https://www.turntablelab.com/cdn/shop/products/popsmoke-shootforthestars-clearvinyl-1_1800x1800.jpg?v=1611338909',
                title: 'Shoot For The Stars Aim For The Moon',
                price: '55.99',
                id: 55,
                des: `Shoot for the Stars, Aim for the Moon is the debut studio album by American rapper Pop Smoke. It was posthumously released on July 3, 2020, by Victor Victor Worldwide and Republic Records, and a deluxe edition of the album that includes fifteen additional tracks—including remixes of three songs from the original—was released on July 20 that year, a date that would have been Pop Smoke's 21st birthday. It is a drill, trap, and R&B record.`
            },
            {
                genre: 'Hip-Hop/Rap',
                artist: 'Pop Smoke',
                imgUrl: 'https://www.umusic.ca/cdn/shop/products/NewProject-2023-04-24T142956.405.jpg?v=1690388316',
                title: 'Meet The Woo 2',
                price: '44.99',
                id: 56,
                des: `Meet the Woo 2 (alternatively titled Meet the Woo, Vol. 2) is the second mixtape by American rapper Pop Smoke. Released by Victor Victor Worldwide and Republic Records on February 7, 2020, it is the second installment in the Meet the Woo mixtape series, following Meet the Woo (2019). The deluxe edition of the mixtape, released on February 12, 2020, features three new tracks, including a remix of "Dior" featuring American rapper Gunna. On February 19, 2020, less than two weeks after the release of the standard edition of Meet the Woo 2, Pop Smoke was shot and killed at age 20 during a home invasion. Guest appearances on the mixtape include Quavo, A Boogie wit da Hoodie, Fivio Foreign, Lil Tjay, Nav, Gunna, and PnB Rock.`
            },
            {
                genre: 'Hip-Hop/Rap',
                artist: 'Kendrick Lamar',
                imgUrl: 'https://www.turntablelab.com/cdn/shop/products/kendricklamar-goodkidmadcity_1020x1020.jpg?v=1588625147',
                hover: 'https://www.turntablelab.com/cdn/shop/products/kendricklamar-goodkidmadcity2_1080x1080.jpg?v=1588625152',
                title: 'GOOD KID, M.A.A.D CITY',
                price: '35.99',
                id: 57,
                des: `Good Kid, M.A.A.D City (stylized as good kid, m.A.A.d city) is the second studio album by the American rapper Kendrick Lamar. It was released on October 22, 2012, by Top Dawg Entertainment, Aftermath Entertainment and Interscope Records. The album features guest appearances from Drake, Dr. Dre, Jay Rock, Anna Wise and MC Eiht. It is Lamar's first major label album, after his independently released first album Section.80 in 2011 and his signing to Aftermath and Interscope the following year.`
            },
            {
                genre: 'Hip-Hop/Rap',
                artist: 'Outkast',
                imgUrl: 'https://www.turntablelab.com/cdn/shop/products/outkast-atliens_82edcb0e-0b4a-4a67-aa4f-89e73ff2a16f_2000x2000.jpg?v=1571262549',
                hover: "https://www.turntablelab.com/cdn/shop/products/outkast-atliens1_2000x2000.jpg?v=1571262549",
                title: 'atliens',
                price: '48.99',
                id: 58,
                des: `ATLiens is the second studio album by the American hip hop duo Outkast. It was released on August 27, 1996, by Arista Records and LaFace Records. From 1995 to 1996, Outkast recorded ATLiens in sessions at several Atlanta studios—Bosstown Recording Studios, Doppler Recording Studios, PatchWerk Recording Studio, Purple Dragon Studios, and Studio LaCoCo—as well as Chung King Recording Studio and Sound On Sound Recording in New York City.`
            },
            {
                genre: 'Hip-Hop/Rap',
                artist: 'Outkast',
                imgUrl: 'https://www.turntablelab.com/cdn/shop/products/outkast-stankonia-vinyl-1_1800x1800.jpg?v=1591640806',
                hover: 'https://www.turntablelab.com/cdn/shop/products/outkast-stankonia-vinyl-2_1800x1800.jpg?v=1591640806',
                title: 'stankonia',
                price: '45.99',
                id: 59,
                des: `Stankonia is the fourth studio album by the American hip hop duo Outkast. It was released on October 31, 2000, by LaFace Records. The album was recorded in the duo's recently purchased Atlanta recording facility Stankonia Studios, which allowed for fewer time and recording constraints, and featured production work from Earthtone III (a production team consisting of Outkast and Mr. DJ) and Organized Noize. For the follow-up to their 1998 album Aquemini, the duo worked to create an expansive and experimental musical aesthetic, incorporating a diverse array of styles including funk, rave music, psychedelia, gospel, and rock within a Dirty South-oriented hip hop context.[1] During the recording sessions, André 3000 began moving beyond traditional rapping in favor of a more melodic vocal style, an approach to which Big Boi and several other producers were initially unaccustomed. Lyrically, the duo touched upon a wide range of subject matter, including sexuality, politics, misogyny, African-American culture, parenthood, and introspection. Stankonia featured appearances from a variety of local musicians discovered by the group while they were visiting clubs in their native city of Atlanta, Georgia`
            },
            {
                genre: 'Hip-Hop/Rap',
                artist: 'Outkast',
                imgUrl: 'https://www.turntablelab.com/cdn/shop/products/outkast-aquemini-vinyl-1_1800x1800.jpg?v=1591640930',
                hover: 'https://www.turntablelab.com/cdn/shop/products/outkast-aquemini-vinyl-3_1800x1800.jpg?v=1591640933',
                title: 'Aquemini',
                price: '34.50',
                id: 790,
                des: 'BEFORE TO PIMP A BUTTERFLY, THERE WAS AQUEMINI. On their third album, Outkast steer the soulful boom-bap of their first two records further south, helping to usher the nascent country-fried trap sound of the dirty south into the mainstream. With production duties split between Organized Noise & ‘Kast themselves, elements of soul, jazz, gospel and electro are chucked in to a funky stew of 808s and live instrumentation, laying the foundation for some of Big Boi & Andre’s best songs ever. The player and the poet are on ten, trading bars about spirituality, race, drugs, poverty, ‘Lac grills and trapping. Featuring a now legendary collab with Raekwon (check them all crammed in the booth together trading darts at the end of “Rosa Parks,” pre high-speed internet collabs just hit different), plus guest turns from George Clinton, Erykah Badu & most of the Dungeon Family, not to mention some of the most hilarious and bizarre rap skits of all time. Spread across 3 LPs and clocking in at nearly 75 minutes without a single bad song (no, not even “Mamacita”). Recommended.'
            },
            {
                genre: 'Alternative',
                artist: 'Gorillaz',
                imgUrl: 'https://store.gorillaz.com/on/demandware.static/-/Sites-warner-master/default/dw93d3b675/pdp-img-eu/21grz_demondays_blk_lp_1.png',
                title: 'demon days',
                price: '89.99',
                id: 60,
                des: `Demon Days is the second studio album by the British virtual band Gorillaz. It was released on 11 May 2005 in Japan and 23 May 2005 in the United Kingdom by Parlophone and in the United States by Virgin Records. Produced by Gorillaz, Danger Mouse, Jason Cox, and James Dring, it features De La Soul, Neneh Cherry, Martina Topley-Bird, Roots Manuva, MF Doom, Ike Turner, Bootie Brown of the Pharcyde, Shaun Ryder and Dennis Hopper. As with the band's eponymous 2001 debut, Demon Days and its performances were accompanied by various multimedia, including interactive features on the Gorillaz website, animated music videos and animatics. The visuals were designed by the Gorillaz co-creator Jamie Hewlett, under his design company Zombie Flesh Eaters.`
            },
            {
                genre: 'Alternative',
                artist: 'Gorillaz',
                imgUrl: 'https://thesoundofvinyl.com/cdn/shop/products/gorillaz-2lp-product-shot_f6d223c9-c963-41bf-8e7f-2cb4cedf0dc6.jpg?v=1687265467',
                hover: 'https://www.turntablelab.com/cdn/shop/products/gorillaz-lp2_1200x1200.jpg?v=1571264187',
                title: 'Gorillaz',
                price: '76.99',
                id: 61,
                des: `Gorillaz is the debut studio album by English virtual band Gorillaz, released on 26 March 2001 in the United Kingdom by Parlophone and in the United States by Virgin Records. The album reached number three in the UK and number fourteen in the US, and the top ten in several other countries. Gorillaz has sold over seven million copies worldwide. The album's success earned the group an entry in the Guinness Book of World Records as the "Most Successful Virtual Band", and spawned the singles "Clint Eastwood", "19-2000", "Rock the House", and "Tomorrow Comes Today".`
            },
            {
                genre: 'Hip-Hop/Rap',
                artist: 'Metro Boomin',
                imgUrl: 'https://shop.republicrecords.com/cdn/shop/products/Metro-vinyl-mockcopy.png?v=1695678561',
                title: 'Heroes & Villains',
                price: '47.99',
                id: 62,
                des: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet laboriosam voluptas reprehenderit, omnis, porro ipsum tenetur odit voluptate, tempora quaerat blanditiis iste rerum doloribus? Modi nostrum architecto officia sunt corrupti.'
            },
            {
                genre: 'Hip-Hop/Rap',
                artist: 'Metro Boomin',
                imgUrl: 'https://recordstore.co.uk/cdn/shop/files/spider1.png?v=1695119128',
                hover: 'https://www.whatrecords.co.uk/media/s_products/s_products105517a.jpg',
                title: 'SPIDER-MAN: ACROSS THE SPIDER-VERSE',
                price: '30.99',
                id: 63,
                des: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet laboriosam voluptas reprehenderit, omnis, porro ipsum tenetur odit voluptate, tempora quaerat blanditiis iste rerum doloribus? Modi nostrum architecto officia sunt corrupti.'
            },
            {
                genre: 'Hip-Hop/Rap',
                artist: 'Various Artists',
                imgUrl: 'https://www.turntablelab.com/cdn/shop/files/postmalone-spiderman-7inch-1_1800x1800.jpg?v=1686585307',
                hover: 'https://www.turntablelab.com/cdn/shop/files/postmalone-spiderman-7inch-2_1800x1800.jpg?v=1686585307',
                title: 'Spider-Man Into The Spider-Verse',
                price: '34.55',
                id: 633,
                des: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet laboriosam voluptas reprehenderit, omnis, porro ipsum tenetur odit voluptate, tempora quaerat blanditiis iste rerum doloribus? Modi nostrum architecto officia sunt corrupti.'
            },
            {
                genre: 'Hip-Hop/Rap',
                artist: 'Mac Miller',
                imgUrl: 'https://www.turntablelab.com/cdn/shop/products/macmiller-swimming_2000x2000.jpg?v=1571265473',
                hover: 'https://www.turntablelab.com/cdn/shop/products/macmiller-swimming1_2000x2000.jpg?v=1571265473',
                title: 'Swimming',
                price: '34.99',
                id: 64,
                des: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet laboriosam voluptas reprehenderit, omnis, porro ipsum tenetur odit voluptate, tempora quaerat blanditiis iste rerum doloribus? Modi nostrum architecto officia sunt corrupti.'
            },
            {
                genre: 'Hip-Hop/Rap',
                artist: 'Kendrick Lamar',
                imgUrl: 'https://www.turntablelab.com/cdn/shop/products/kendrick-pimpabutterfly_1600x1600.jpg?v=1571264201',
                hover: 'https://www.turntablelab.com/cdn/shop/products/kendrick-pimpabutterfly1_1600x1600.jpg?v=1571264201',
                title: 'To Pimp A Butterfly',
                price: '32.95',
                id: 1048,
                des: `KING KENDRICK HOLDS THE THRONE. Gonna keep this short and sweet. This album is EVERYTHING Hip Hop should be in 2015. Conscious but not boring, style but not swaggy, fresh ideas but not some futuristic bullshit... basically take what Outkast / Dungeon Family was doing the last 20 years and expand upon that. The black man's struggle is still very real and Kendrick's poetic visions offer the posturing of what it is like to be a 20 something black man growing up in these terrible times. Beats by Taz Arnold, Flying Lotus, Boi-1da, Pharrell + others. Features from Bilal, Thundercat, James Fauntelroy, Anne Wise + others flesh out the album with nearly a gospel like experience that can only be felt upon a full sit down listen, none of this song here song there BS... this is an album, not a collection of singles under the guise of one. A modern masterpiece.`,
            },
            {
                genre: 'Hip-Hop/Rap',
                artist: 'Kendrick Lamar',
                imgUrl: 'https://www.turntablelab.com/cdn/shop/products/kendricklamar-mrbigsteppers-blackvinyl-1_1800x1800.jpg?v=1661445718',
                hover: 'https://www.turntablelab.com/cdn/shop/products/kendricklamar-mrbigsteppers-blackvinyl-1.5_1800x1800.jpg?v=1661445718',
                title: 'Mr. Morale & the Big Steppers',
                price: '55.60',
                id: 65,
                des: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet laboriosam voluptas reprehenderit, omnis, porro ipsum tenetur odit voluptate, tempora quaerat blanditiis iste rerum doloribus? Modi nostrum architecto officia sunt corrupti.'
            },
            {
                genre: 'Hip-Hop/Rap',
                artist: 'Gunna',
                imgUrl: 'https://thesoundofvinyl.com/cdn/shop/products/SharedImage-146116.png?v=1686632594',
                title: 'DS4EVER',
                price: '23.99',
                id: 66,
                des: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet laboriosam voluptas reprehenderit, omnis, porro ipsum tenetur odit voluptate, tempora quaerat blanditiis iste rerum doloribus? Modi nostrum architecto officia sunt corrupti.'
            },
            {
                genre: 'Hip-Hop/Rap',
                artist: 'Future',
                imgUrl: 'https://www.turntablelab.com/cdn/shop/products/future-hndrxx_2000x2000.jpg?v=1571265163',
                hover: 'https://www.turntablelab.com/cdn/shop/products/future-hndrxx1_2000x2000.jpg?v=1571265163',
                title: 'HNDRXX',
                price: '55.99',
                id: 67,
                des: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet laboriosam voluptas reprehenderit, omnis, porro ipsum tenetur odit voluptate, tempora quaerat blanditiis iste rerum doloribus? Modi nostrum architecto officia sunt corrupti.'
            },
            {
                genre: 'Hip-Hop/Rap',
                artist: 'Future',
                imgUrl: 'https://www.turntablelab.com/cdn/shop/products/future-future_2000x2000.jpg?v=1571265163',
                hover: "https://www.turntablelab.com/cdn/shop/products/future-future1_2000x2000.jpg?v=1571265163",
                title: 'Future',
                price: '45.60',
                id: 9012,
                des: `FUTURE STAYS WORKING. Future, the 5th studio album from the ATL rapper, is part one of the one-two punch he delivered (HNDRXX dropped only a week after) in 2017, and just as the eponymous title suggests, the LP is a look into the Freebandz honcho, his alter egos and all. "Mask Off" (the remix featuring Kendrick Lamar is also on here) is the obvious standout from the 20 tracker, as Future opens up about his drug use (not that he's NOT been vocal about this) and past over the Tommy Butler-sampling beat courtesy of Metro Boomin. "Super Trapper" is a super flex; his influence is undeniable, and this is the Super Future persona shining through. "Draco" refers to a modified AK-47 assault rifle, and in the song, he fires off at anyone that has/might cross him. "Used to This" with Drake is a celebration record; the two trade bars over a Zaytoven beat, and they're basically saying, "what a time to be alive." "I'm So Groovy" reminds people he's put in work since the Pluto days to become the superstar that he is.`
            },
            {
                genre: 'Hip-Hop/Rap',
                artist: 'Future',
                imgUrl: 'https://sound-merch.com.au/cdn/shop/products/future_1024x1024.png?v=1625466052',
                hover: 'https://comebackvinyl.com/cdn/shop/products/2879cc86a20b5e72af9b7c4c608e61b0.jpg?v=1660887779',
                title: 'High Off Life',
                price: '34.99',
                id: 68,
                des: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet laboriosam voluptas reprehenderit, omnis, porro ipsum tenetur odit voluptate, tempora quaerat blanditiis iste rerum doloribus? Modi nostrum architecto officia sunt corrupti.'
            },
            {
                genre: 'Hip-Hop/Rap',
                artist: 'Young Thug',
                imgUrl: 'https://www.youngstonerlifeshop.com/on/demandware.static/-/Sites-warner-master/default/dwea931c96/YOUNG%20THUG/PUNK-YT-MOCKUP-00-front-Smoke-Green.png',
                title: 'Punk',
                price: '99.99',
                id: 69, des: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet laboriosam voluptas reprehenderit, omnis, porro ipsum tenetur odit voluptate, tempora quaerat blanditiis iste rerum doloribus? Modi nostrum architecto officia sunt corrupti.'
            },
            {
                genre: 'Hip-Hop/Rap',
                artist: 'Young Thug',
                imgUrl: 'https://www.turntablelab.com/cdn/shop/products/youngthug-jeffrey_2000x2000.jpg?v=1571264775',
                hover: 'https://www.turntablelab.com/cdn/shop/products/youngthug-jeffrey1_2000x2000.jpg?v=1571264775',
                title: 'jeffery',
                price: '99.99',
                id: 70,
                des: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet laboriosam voluptas reprehenderit, omnis, porro ipsum tenetur odit voluptate, tempora quaerat blanditiis iste rerum doloribus? Modi nostrum architecto officia sunt corrupti.'
            }
            ,
            {
                genre: 'Hip-Hop/Rap',
                artist: 'Destroy Lonely',
                imgUrl: 'https://shopuk.destroylonely.net/cdn/shop/products/large-DESTROY_20LONELY_20packshot_20black_20copy.png?v=1700585043&width=1280',
                title: 'If Looks Could Kill',
                price: '45.99',
                id: 71,
                des: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet laboriosam voluptas reprehenderit, omnis, porro ipsum tenetur odit voluptate, tempora quaerat blanditiis iste rerum doloribus? Modi nostrum architecto officia sunt corrupti.'
            },
            {
                genre: 'Hip-Hop/Rap',
                artist: 'Yeat',
                imgUrl: 'https://interscope.com/cdn/shop/files/Yeat-AfterLyfeVinyl2LP.png?v=1707419305',
                title: 'AftërLyfe',
                price: '34.99',
                id: 72,
                des: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet laboriosam voluptas reprehenderit, omnis, porro ipsum tenetur odit voluptate, tempora quaerat blanditiis iste rerum doloribus? Modi nostrum architecto officia sunt corrupti.'
            },
            {
                genre: 'Hip-Hop/Rap',
                artist: 'MF DOOM',
                imgUrl: 'https://www.turntablelab.com/cdn/shop/products/madvillain-madvillainy-1_2000x2000.jpg?v=1640114534',
                hover: 'https://www.turntablelab.com/cdn/shop/products/madvillain-madvillainy2_934ba934-10db-4e26-85aa-c0deb86feeca_2000x2000.jpg?v=1640114534',
                title: 'Madvillainy',
                price: '67.99',
                id: 73,
                des: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet laboriosam voluptas reprehenderit, omnis, porro ipsum tenetur odit voluptate, tempora quaerat blanditiis iste rerum doloribus? Modi nostrum architecto officia sunt corrupti.'
            },
            {
                genre: 'Hip-Hop/Rap',
                artist: 'Baby Keem',
                imgUrl: 'https://sound-merch.com.au/cdn/shop/products/194399969915_1024x1024.png?v=1668647721',
                title: 'The Melodic Blue',
                price: '44.99',
                id: 74,
                des: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet laboriosam voluptas reprehenderit, omnis, porro ipsum tenetur odit voluptate, tempora quaerat blanditiis iste rerum doloribus? Modi nostrum architecto officia sunt corrupti.'
            },
            {
                genre: 'Hip-Hop/Rap',
                artist: 'DaBaby',
                imgUrl: 'https://interscope.com/cdn/shop/files/updatedLP_1024x1024.png?v=1709318786',
                title: "BABY ON BABY",
                price: '30.00',
                id: 75,
                des: 'LEEEEEEEEEEEEEEEESSSSSSSSSSS GGGGGOOOOOOOOOO'

            },
            {
                genre: 'Hip-Hop/Rap',
                artist: 'ScHoolboy Q',
                imgUrl: 'https://interscope.com/cdn/shop/files/vinylmockup_1024x1024.png?v=1708098431',
                title: 'Blue Lips',
                price: '34.99',
                id: 76,
                des: 'havent listened yet neforward'
            },
            {
                genre: 'Hip-Hop/Rap',
                artist: 'MF DOOM',
                imgUrl: 'https://www.turntablelab.com/cdn/shop/products/mfdoom-mmfood-pinkgreenvinyl-1_1800x1800.jpg?v=1597172467',
                hover: 'https://www.turntablelab.com/cdn/shop/products/mfdoom-mmfood-pinkgreenvinyl-2_1800x1800.jpg?v=1597172467',
                title: 'MM..Food',
                price: '55.98',
                id: 92034,
                des: 'Dooom',
            },
            {
                genre: 'Alternative',
                artist: 'Tame Impala',
                imgUrl: 'https://www.turntablelab.com/cdn/shop/products/tameimpala-currentsblk_1600x1600.jpg?v=1571264355',
                hover: 'https://www.turntablelab.com/cdn/shop/products/tameimpala-currentsblk2_1600x1600.jpg?v=1571264355',
                title: 'Currents',
                price: '370.00',
                id: 77,
                des: `Music. Currents features styles of psychedelic pop, disco, R&B, and electropop, but the album's chord progressions and rhythms are most indebted to R&B. Kevin Parker listened to R&B from the 1990s during recording, which he had forced himself to reject while growing up due to peer pressures. `
            },
            {
                genre: 'Hip-Hop/Rap',
                artist: 'Chance the Rapper',
                imgUrl: 'https://thevinylfactory.com/wp-content/uploads/2019/06/ar-vinyl2.png',
                title: 'Acid Rap',
                price: '29.89',
                id: 78,
                des: ``
            },
            {
                genre: 'Hip-Hop/Rap',
                artist: 'Chance the Rapper',
                imgUrl: 'https://thevinylfactory.com/wp-content/uploads/2019/06/cb-vinyl2.png',
                title: 'Coloring Book',
                price: '34.90',
                id: 79,
                des: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem at dolores accusamus distinctio perspiciatis optio quidem ipsam, excepturi expedita pariatur, delectus architecto dicta iure nulla dolorem sunt illum? Rem, debitis?`
            },
            {
                genre: 'Hip-Hop/Rap',
                artist: 'Eminem',
                imgUrl: 'https://recordstore.co.uk/cdn/shop/products/SharedImage-113898_c23a39b7-5f73-41bd-bba1-c68178511595.png?v=1700578628',
                title: 'The Eminem Show',
                price: '34.50',
                id: 80,
                des: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem at dolores accusamus distinctio perspiciatis optio quidem ipsam, excepturi expedita pariatur, delectus architecto dicta iure nulla dolorem sunt illum? Rem, debitis?`
            },
            {
                genre: 'Hip-Hop/Rap',
                artist: 'Denzel Curry',
                imgUrl: 'https://www.turntablelab.com/cdn/shop/products/denzelcurry-taboo_2000x2000.jpg?v=1571265401',
                hover: 'https://www.turntablelab.com/cdn/shop/products/denzelcurry-taboo1_2000x2000.jpg?v=1571265401',
                title: 'Ta13oo',
                price: '23.44',
                id: 81,
                des: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem at dolores accusamus distinctio perspiciatis optio quidem ipsam, excepturi expedita pariatur, delectus architecto dicta iure nulla dolorem sunt illum? Rem, debitis?`
            },
            {
                genre: 'Hip-Hop/Rap',
                artist: 'Earl Sweatshirt',
                imgUrl: 'https://www.turntablelab.com/cdn/shop/files/earlsweathsirt-somerapsongs-blackvinyl-1_1800x1800.jpg?v=1710537750',
                hover: "https://www.turntablelab.com/cdn/shop/files/earlsweathsirt-somerapsongs-blackvinyl-2_1800x1800.jpg?v=1710537751",
                title: 'Some Rap Songs',
                price: '45.67',
                id: 82,
                des: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem at dolores accusamus distinctio perspiciatis optio quidem ipsam, excepturi expedita pariatur, delectus architecto dicta iure nulla dolorem sunt illum? Rem, debitis?`
            },
            {
                genre: 'Hip-Hop/Rap',
                artist: 'Earl Sweatshirt',
                imgUrl: 'https://store.earlsweatshirt.com/on/demandware.static/-/Sites-warner-master/default/dwd6610706/pdp-img/earl%20sweatshirt/music/SICK!%20Dark%20Blue%20LP.png',
                title: 'SICK!',
                price: '32.90',
                id: 83,
                des: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem at dolores accusamus distinctio perspiciatis optio quidem ipsam, excepturi expedita pariatur, delectus architecto dicta iure nulla dolorem sunt illum? Rem, debitis?`
            },
            {
                genre: 'Hip-Hop/Rap',
                artist: 'Migos',
                imgUrl: 'https://shop.motownrecords.com/cdn/shop/files/CULTUREII3LP.png?v=1690913458',
                title: 'CULTURE II',
                price: '56.89',
                id: 84,
                des: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem at dolores accusamus distinctio perspiciatis optio quidem ipsam, excepturi expedita pariatur, delectus architecto dicta iure nulla dolorem sunt illum? Rem, debitis?`
            },
            {
                genre: 'Hip-Hop/Rap',
                artist: 'Jay-z',
                imgUrl: 'https://sound-merch.com.au/cdn/shop/files/BLUEPRINT-3_1024x1024.png?v=1686884297',
                title: 'BLUEPRINT 3',
                price: '31.54',
                id: 85,
                des: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem at dolores accusamus distinctio perspiciatis optio quidem ipsam, excepturi expedita pariatur, delectus architecto dicta iure nulla dolorem sunt illum? Rem, debitis?`
            }
            ,
            {
                genre: 'Hip-Hop/Rap',
                artist: 'XXXTENTACION',
                imgUrl: 'https://www.turntablelab.com/cdn/shop/products/xxxtentacion-questionmark1jpg_2000x2000.jpg?v=1571265373',
                hover: 'https://www.turntablelab.com/cdn/shop/products/xxxtentacion-questionmark2_2000x2000.jpg?v=1571265373',
                title: '?',
                price: '55.44',
                id: 86,
                des: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem at dolores accusamus distinctio perspiciatis optio quidem ipsam, excepturi expedita pariatur, delectus architecto dicta iure nulla dolorem sunt illum? Rem, debitis?`
            }
            ,
            {
                genre: 'Hip-Hop/Rap',
                artist: 'Tyler, The Creator',
                imgUrl: 'https://static.wixstatic.com/media/28a537_92bc674c734f4e20852c2b06a06f6317~mv2.png/v1/fill/w_800,h_800,al_c,q_90,enc_auto/28a537_92bc674c734f4e20852c2b06a06f6317~mv2.png',
                hover: 'https://static.wixstatic.com/media/28a537_60c0d964c50f4c59a9123381caafd646~mv2.png/v1/fit/w_500,h_500,q_90/file.png',
                title: 'cherry bomb',
                price: '23.40',
                id: 87,
                des: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem at dolores accusamus distinctio perspiciatis optio quidem ipsam, excepturi expedita pariatur, delectus architecto dicta iure nulla dolorem sunt illum? Rem, debitis?`
            },
            {
                genre: 'Hip-Hop/Rap',
                artist: 'JPEGMAFIA',
                imgUrl: 'https://www.turntablelab.com/cdn/shop/files/jpegbrown-scaring-coloredvinyl-1_1800x1800.jpg?v=1702050034',
                hover: 'https://www.turntablelab.com/cdn/shop/files/jpegbrown-scaring-coloredvinyl-2_1800x1800.jpg?v=1702050033',
                title: 'Scaring The Hoes',
                price: '39.89',
                id: 88,
                des: `"For about a year i practiced with the SP-404. im proud that i got to make some fire shit from the time i spent with this machine & my favorite rapper. You can call this a practice session. This is what we would sound like in the 90s with no pro tools. Im done using the 404 now." - JPEGMAFIA`
            },
            {
                genre: 'Hip-Hop/Rap',
                artist: 'JPEGMAFIA',
                imgUrl: 'https://www.turntablelab.com/cdn/shop/files/jpeg-ghostpop-whitevinyl-1_1800x1800.jpg?v=1710441171',
                hover: 'https://www.turntablelab.com/cdn/shop/files/jpeg-ghostpop-whitevinyl-2_1800x1800.jpg?v=1710441172',
                title: 'ghost pop',
                price: '45.60',
                id: 532,
                des: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem at dolores accusamus distinctio perspiciatis optio quidem ipsam, excepturi expedita pariatur, delectus architecto dicta iure nulla dolorem sunt illum? Rem, debitis?`
            }

            ,
            {
                genre: 'Hip-Hop/Rap',
                artist: 'Lil Uzi Vert',
                imgUrl: 'https://www.turntablelab.com/cdn/shop/products/liluzivert-vsworld-rsd_2000x2000.jpg?v=1571264822',
                hover: 'https://www.turntablelab.com/cdn/shop/products/liluzivert-vsworld-rsd1_2000x2000.jpg?v=1571264822',
                title: 'Lil Uzi Vert Vs. The World',
                price: '20.95',
                id: 89,
                des: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem at dolores accusamus distinctio perspiciatis optio quidem ipsam, excepturi expedita pariatur, delectus architecto dicta iure nulla dolorem sunt illum? Rem, debitis?`
            },
            {
                genre: 'Hip-Hop/Rap',
                artist: 'Lil Uzi Vert',
                imgUrl: 'https://www.turntablelab.com/cdn/shop/products/liluzivert-perfectluv-rsd_1d3d5d66-f340-414a-b87d-6078f8ae1b4b_2000x2000.jpg?v=1571265252',
                hover: 'https://www.turntablelab.com/cdn/shop/products/liluzivert-perfectluv-rsd2_b055f3f5-bcef-4978-a912-a5fe9df767e2_2000x2002.jpg?v=1571265252',
                title: 'The Perfect LUV Tape',
                price: '21.95',
                id: 94,
                des: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem at dolores accusamus distinctio perspiciatis optio quidem ipsam, excepturi expedita pariatur, delectus architecto dicta iure nulla dolorem sunt illum? Rem, debitis?`
            },
            {
                genre: 'Hip-Hop/Rap',
                artist: 'Lil Uzi Vert',
                imgUrl: 'https://www.turntablelab.com/cdn/shop/products/liluzivert-loveisrage-rsd_2000x2000.jpg?v=1571265253',
                hover: 'https://www.turntablelab.com/cdn/shop/products/liluzivert-loveisrage-rsd1_2000x2000.jpg?v=1571265253',
                title: 'Luv is rage',
                price: '67.80',
                id: 95,
                des: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem at dolores accusamus distinctio perspiciatis optio quidem ipsam, excepturi expedita pariatur, delectus architecto dicta iure nulla dolorem sunt illum? Rem, debitis?`
            },
            {
                genre: 'Hip-Hop/Rap',
                artist: 'jaden smith',
                imgUrl: 'https://www.turntablelab.com/cdn/shop/products/jadensmith-syre_2000x2000.jpg?v=1571265331',
                hover: 'https://www.turntablelab.com/cdn/shop/products/jadensmith-syre1_2000x2000.jpg?v=1571265331',
                title: 'syre',
                price: '21.30',
                id: 96,
                des: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem at dolores accusamus distinctio perspiciatis optio quidem ipsam, excepturi expedita pariatur, delectus architecto dicta iure nulla dolorem sunt illum? Rem, debitis?`
            },
            {
                genre: 'Hip-Hop/Rap',
                artist: 'Kid Cudi',
                imgUrl: 'https://www.turntablelab.com/cdn/shop/products/kidcudi-manonthemoon3-blackvinyl-1_1800x1800.jpg?v=1640188084',
                hover: "https://www.turntablelab.com/cdn/shop/products/kidcudi-manonthemoon3-blackvinyl-2_1800x1800.jpg?v=1640188084",
                title: 'Man On The Moon III',
                price: '27.95',
                id: 97,
                des: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem at dolores accusamus distinctio perspiciatis optio quidem ipsam, excepturi expedita pariatur, delectus architecto dicta iure nulla dolorem sunt illum? Rem, debitis?`
            },
            {
                genre: 'Hip-Hop/Rap',
                artist: 'tyler, the creator',
                imgUrl: 'https://www.turntablelab.com/cdn/shop/products/tylerthecreator-igor_1800x1800.jpg?v=1571265780',
                hover: 'https://www.turntablelab.com/cdn/shop/products/tylerthecreator-igor1_1800x1800.jpg?v=1571265780',
                title: 'igor',
                price: '26.95',
                id: 98,
                des: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem at dolores accusamus distinctio perspiciatis optio quidem ipsam, excepturi expedita pariatur, delectus architecto dicta iure nulla dolorem sunt illum? Rem, debitis?`
            },
            {
                genre: 'R&B/Soul',
                artist: 'The Weeknd',
                imgUrl: 'https://www.turntablelab.com/cdn/shop/products/weeknd-kissland_1200x1200.jpg?v=1571263498',
                hover: 'https://www.turntablelab.com/cdn/shop/files/theweeknd-kissland_1800x1800.jpg?v=1695422529',
                title: 'Kiss Land',
                price: '39.95',
                id: 99,
                des: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem at dolores accusamus distinctio perspiciatis optio quidem ipsam, excepturi expedita pariatur, delectus architecto dicta iure nulla dolorem sunt illum? Rem, debitis?`

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

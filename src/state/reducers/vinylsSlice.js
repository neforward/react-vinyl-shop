import { createSlice } from '@reduxjs/toolkit';

export const vinylsSlice = createSlice({
  name: 'vinyls',
  initialState: {
    vinyls: [
        {
            imgUrl: "https://static.wixstatic.com/media/acb470_f4f34cfb216d4f829d87ea4b2bced24a~mv2.png/v1/fill/w_480,h_476,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/acb470_f4f34cfb216d4f829d87ea4b2bced24a~mv2.png",
            title: "BLONDE",
            price: "$65.00",
            id: 0,
        },
        {
            imgUrl: "https://thesoundofvinyl.com/cdn/shop/products/SharedImage-136698.png?v=1692038923",
            title: "DS2",
            price: "$39.99",
            id: 1,
        },
        {
            imgUrl: "https://interscope.com/cdn/shop/files/Yeat-2Alive_GeekPack_Vinyl2LP.png?v=1707419282",
            title: "2 Alivë",
            price: "$32.99",
            id: 2,
        },
        {
            imgUrl: "https://sound-merch.com.au/cdn/shop/products/KANYE-COLLEGE_1024x1024.png?v=1665531078",
            title: "The College Dropout",
            price: "$27.99",
            id: 3,
        },
        {
            imgUrl: "https://recordstore.co.uk/cdn/shop/products/image_of_17872813_97b33542-7b8e-4ade-9820-87375ef8d1d6.png?v=1704908587",
            title: "808s & Heartbreak Deluxe",
            price: "$49.99",
            id: 4,
        },

        {
            imgUrl: "https://www.shugarecords.com/cdn/shop/products/KSG_LP_950x_815333e5-b9c3-4345-9a4d-a3a3261a3137_1200x1200.png?v=1540920873",
            title: "Kids See Ghosts",
            price: "$24.99",
            id: 4,
        },
        {
            imgUrl: "https://shop.urbanlegends.com/cdn/shop/products/Kid-Cudi---Man-On-The-Moon-The-End-Of-Day-_2LP.png?v=1591216267",
            title: "Man on the Moon",
            price: "$22.99",
            id: 5,
        },
        {
            imgUrl: "https://shop.urbanlegends.com/cdn/shop/products/Kid-Cudi---Man-On-The-Moon-II-The-Legend-Of-Mr.-Rager-_2LP.png?v=1591216272",
            title: "Man on the Moon 2",
            price: "$32.99",
            id: 6,
        },
        {
            imgUrl: "https://sound-merch.com.au/cdn/shop/files/4-YOUR-EYEZ-ONLY_grande.png?v=1690341031",
            title: "4 Your Eyez Only",
            price: "$29.99",
            id: 7,
        },

        {
            imgUrl: "https://interscope.com/cdn/shop/files/jcole_1024x1024.png?v=1690243838",
            title: "2014 Forest Hills Drive",
            price: "$38.99",
            id: 8,
        },
        {
            imgUrl: "https://flyingout.co.nz/cdn/shop/files/ATL75-Vinyl-Uzi.webp?v=1691882308",
            title: "Luv Is Rage 2",
            price: "$40.99",
            id: 9,
        },
        {
            imgUrl: "https://thesoundofvinyl.com.au/cdn/shop/products/J-Cole-Born-Sinner-Exclusive-Gold-2LP_1024x1024.png?v=1684127347",
            title: "Born Sinner",
            price: "$38.99",
            id: 10,
        },
        {
            imgUrl: "https://thesoundofvinyl.com/cdn/shop/products/SharedImage-120584.png?v=1685628450",
            title: "ASTROWORLD",
            price: "$29.99",
            id: 11,
        }, {
            imgUrl: "https://beatrelease.com/cdn/shop/products/Rodeo_1024x1024_7b3ab06d-71db-4f8a-aa72-8226106ddc7e.webp?v=1671035074",
            title: "Rodeo",
            price: "$26.99",
            id: 12,
        },
        {
            imgUrl: "https://sound-merch.com.au/cdn/shop/products/childish_1024x1024.png?v=1625118436",
            title: "Because the Internet",
            price: "$33.99",
            id: 13,
        }, {
            imgUrl: "https://recordstore.co.uk/cdn/shop/products/SharedImage-115162.png?v=1700822648",
            title: "DAMN.",
            price: "$33.99",
            id: 14,
        }, {
            imgUrl: "https://jojistore.com/cdn/shop/products/JOJVINYL_f01723cb-b971-44b8-ab71-f0a0757ca80a.png?v=1650504762",
            title: "Ballads 1",
            price: "$49.99",
            id: 15,
        }, {
            imgUrl: "https://www.repdiscosperu.com/cdn/shop/files/JOJI_1024x1024_7b81237f-19a6-4616-b289-4dc9436becba.png?v=1704991421&width=1000",
            title: "Nectar",
            price: "$38.99",
            id: 16,
        }, {
            imgUrl: "https://cdn.shopify.com/s/files/1/0688/4297/9608/products/SharedImage-115161.png?v=1707734043&width=1100",
            title: "flower boy",
            price: "$27.99",
            id: 17,
        }, {
            imgUrl: "https://sound-merch.com.au/cdn/shop/products/Tyler_Goblin_1024x1024.png?v=1619577690",
            title: "goblin",
            price: "$26.99",
            id: 18,
        }, {
            imgUrl: "https://www.horizonsmusic.co.uk/cdn/shop/products/WeekndMyDearMelancholy_1200x1200.png?v=1675703598",
            title: "My Dear Melancholy",
            price: "$51.99",
            id: 19,
        }, {
            imgUrl: "https://musicstation.be/cdn/shop/files/TheWeeknd-AfterHours-2LP.webp?v=1698655728",
            title: "After Hours",
            price: "$39.99",
            id: 20,
        }, {
            imgUrl: "https://recordstore.co.uk/cdn/shop/products/SharedImage-123519.png?v=1695285726",
            title: "House of Balloons",
            price: "$48.99",
            id: 21,
        },
        {
            imgUrl: "https://awakenmylove.com/cdn/shop/products/AMLSTANDARDLP.png?v=1505165913",
            title: "Awaken, My Love!",
            price: "$35.99",
            id: 22,
        },
        {
            imgUrl: "https://interscope.com/cdn/shop/products/YeatVinyl_fb3139cd-4310-4e4c-80b8-5006d7c9d4d2.png?v=1673632335",
            title: "Lyfë",
            price: "$32.99",
            id: 23,
        },

        {
            imgUrl: "https://sound-merch.com.au/cdn/shop/products/DenzelCurry_MeltMyEyez_VinylClear_760x.png?v=1648101473%27",
            title: "Melt My Eyez See Your Future",
            price: "$35.99",
            id: 24,
        }, {
            imgUrl: "https://sound-merch.com.au/cdn/shop/products/Playboi-Carti-Whole-Lotta-Red_1024x1024.png?v=1638234427",
            title: "Whole Lotta Red",
            price: "$29.99",
            id: 25,
        },
        {
            imgUrl: 'https://thesoundofvinyl.com/cdn/shop/products/SharedImage-122377_0a45cb3e-e53b-4f77-a388-3563e633c41a.png?v=1706788628',
            title: 'JACKBOYS',
            price: '$25.99',
            id: 26,
        },
        {
            imgUrl: 'https://recordstore.co.uk/cdn/shop/products/SharedImage-129483.png?v=1685977045',
            title: 'camp',
            price: '$31.98',
            id: 27,
        },
        {
            imgUrl: 'https://thesoundofvinyl.com/cdn/shop/products/SharedImage-114080.png?v=1707132963&width=1100',
            title: 'Illmatic',
            price: '$26.99',
            id: 28,
        },
        {
            imgUrl: 'https://thesoundofvinyl.com/cdn/shop/products/SharedImage-114464_f816973b-1eeb-4307-8b70-1f3f07aba5c2.png?v=1687265715',
            title: 'I Am...',
            price: '$36.99',
            id: 29,
        },
        {
            imgUrl: 'https://thesoundofvinyl.us/cdn/shop/products/macmillerclear_700x700.png?v=1679347576',
            title: 'Circles',
            price: '$34.98',
            id: 30,
        },
        {
            imgUrl: 'https://shop.macmillerswebsite.com/cdn/shop/files/MMI-TDF-LP.png?v=1700603917',
            title: 'The Divine Feminine',
            price: '$21.96',
            id: 31,
        },
        {
            imgUrl: 'https://sound-merch.com.au/cdn/shop/files/steve-lacey_1024x1024.png?v=1708302532',
            title: 'Gemini Rights',
            price: '$36.98',
            id: 32,
        },
        {
            imgUrl: 'https://www.turntablelab.com/cdn/shop/products/kanyewest-mybeautifultwisted_1024x1024.jpg?v=1571262555',
            title: 'MY BEAUTIFUL DARK TWISTED FANTASY',
            price: '$75.99',
            id: 33,
        },
        {
            imgUrl: 'https://thesoundofvinyl.com/cdn/shop/products/image_of_677846.png?v=1704908822',
            title: 'Ye',
            price: '$25.99',
            id: 34,
        },
        {
            imgUrl: 'https://thesoundofvinyl.com/cdn/shop/products/SharedImage-122646.png?v=1685975027&width=800',
            title: '17',
            price: '$28.99',
            id: 35,
        },
        {
            imgUrl: 'https://thesoundofvinyl.com/cdn/shop/products/image_of_0602498824047.png?v=1704908702&width=800',
            title: 'Late Registration',
            price: '$35.99',
            id: 36,
        },
        {
            imgUrl: 'https://thesoundofvinyl.com/cdn/shop/products/weeknd.png?v=1700581982&width=2000',
            title: 'Dawn FM',
            price: '$29.99',
            id: 37,
        },
        {
            imgUrl: 'https://thesoundofvinyl.com/cdn/shop/products/blk.png?v=1699263903&width=1600',
            title: 'Utopia',
            price: '$36.99',
            id: 38,
        },
        {
            imgUrl: 'https://thesoundofvinyl.com/cdn/shop/products/SharedImage-147572_e821e519-db2f-448e-a2a7-fdf301fc599b.png?v=1700568430&width=800',
            title: 'The Chronic',
            price: '$36.99',
            id: 39,
        },
        {
            imgUrl: 'https://recordstore.co.uk/cdn/shop/products/SharedImage-114908.png?v=1700568331',
            title: 'GOODBYE & GOOD RIDDANCE',
            price: '$25.99',
            id: 40,
        },
        {
            imgUrl: 'https://recordstore.co.uk/cdn/shop/products/SharedImage-143033_0e103017-1dbf-46bc-98a3-a33f11a634ec.png?v=1685628034&width=800',
            title: 'SKINS',
            price: '$28.99',
            id: 41
        },
        {
            imgUrl: 'https://m.media-amazon.com/images/I/61nvJuf2QGS._UF894,1000_QL80_.jpg',
            title: "The Life Of Pi'erre 5",
            price: '$39.98',
            id: 42,
        },
        {
            imgUrl: 'https://shopuk.oliviarodrigo.com/cdn/shop/products/or_sour_fp_01.png?v=1700574303',
            title: 'sour',
            price: '$26.96',
            id: 43,
        },
        {
            imgUrl: 'https://interscope.com/cdn/shop/files/7.ORvinylpackshot_Scopy.png?v=1698689586',
            title: 'guts',
            price: '$37.92',
            id: 44,
        },
        {
            imgUrl: 'https://shop.udiscovermusic.com/cdn/shop/products/Anti_RedVinyl_Packshot.png?v=1675813216',
            title: 'anti',
            price: '$89.92',
            id: 45,
        },
        {
            imgUrl: 'https://thesoundofvinyl.com/cdn/shop/products/SharedImage-117491.png?v=1692103743',
            title: 'take care',
            price: '$39.88',
            id: 46,
        },
        {
            imgUrl: 'https://thesoundofvinyl.com/cdn/shop/products/SharedImage-116390_4cce2f0a-9c8e-457d-90fd-74e7c43157fb.png?v=1700573597',
            title: 'Scorpion',
            price: '$32.99',
            id: 47,
        },
        {
            imgUrl: 'https://thesoundofvinyl.com/cdn/shop/products/SharedImage-122926.png?v=1686623252&width=800',
            title: 'Lemonade',
            price: '$49.99',
            id: 48,
        },
        {
            imgUrl: 'https://thesoundofvinyl.com/cdn/shop/products/SharedImage-114913.png?v=1700573484&width=800',
            title: 'Legends Never Die',
            price: '$29.99',
            id: 49,
        },
        {
            imgUrl: 'https://thesoundofvinyl.com/cdn/shop/products/SharedImage-115160.png?v=1700580092',
            title: 'views',
            price: '$45.99',
            id: 50,
        },
        {
            imgUrl: 'https://shop.islandrecords.co.uk/cdn/shop/products/SharedImage-115155.png?v=1700580062&width=1100',
            title: "If You're Reading This It's Too Late",
            price: '$39.99',
            id: 51,
        },
        {
            imgUrl: 'https://store.liluziofficial.com/cdn/shop/files/LilUzi_PinkTape_Vinyl_AllRetail_1_1.png?v=1689353607',
            title: 'pink tape',
            price: '$36.99',
            id: 52,
        },
        {
            imgUrl: 'https://recordstore.co.uk/cdn/shop/products/SharedImage-121171_9af8f693-7d83-445b-a06e-ea839b316139.png?v=1685628547',
            title: 'AT.LONG.LAST.A$AP',
            price: '$37.99',
            id: 53,
        },
        {
            imgUrl: 'https://www.umusic.ca/cdn/shop/products/NewProject-2023-04-24T162249.311.jpg?v=1690388319',
            title: 'Shoot For The Stars Aim For The Moon',
            price: '$55.99',
            id: 54,
        },
        {
            imgUrl: 'https://www.umusic.ca/cdn/shop/products/NewProject-2023-04-24T142956.405.jpg?v=1690388316',
            title: 'Meet The Woo 2',
            price: '$44.99',
            id: 55,
        },
        {
            imgUrl: 'https://shop.urbanlegends.com/cdn/shop/products/Kendrick-Lamar-good-kid_-m.A.A.d-city-_Deluxe-LP_-2LP.png?v=1603318011',
            title: 'GOOD KID, M.A.A.D CITY',
            price: '$35.99',
            id: 56,
        },
        {
            imgUrl: 'https://i.ebayimg.com/images/g/qFEAAOSwQ3Rj7Tfx/s-l1600.png',
            title: 'atliens',
            price: '$48.99',
            id: 57,
        },
        {
            imgUrl: 'https://sound-merch.com.au/cdn/shop/products/Outkaststankonia_1024x1024.png?v=1622786992',
            title: 'stankonia',
            price: '$45.99',
            id: 58,
        },
        {
            imgUrl: 'https://store.gorillaz.com/on/demandware.static/-/Sites-warner-master/default/dw93d3b675/pdp-img-eu/21grz_demondays_blk_lp_1.png',
            title: 'demon days',
            price: '$89.99',
            id: 59,
        }, {
            imgUrl: 'https://thesoundofvinyl.com/cdn/shop/products/gorillaz-2lp-product-shot_f6d223c9-c963-41bf-8e7f-2cb4cedf0dc6.jpg?v=1687265467',
            title: 'Gorillaz',
            price: '$76.99',
            id: 60,
        },
        {
            imgUrl: '',
            title: '',
            price: '$'
        },
        {
            imgUrl: '',
            title: '',
            price: '$'
        },
        {
            imgUrl: '',
            title: '',
            price: '$'
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
import { Link } from "react-router-dom"
import ArrowTop from "../components/ArrowTop"
import Footer from "../components/Footer"
import HeaderMain from "../components/HeaderMain"

const Shop = () => {
    const products = [
        {
            imgUrl: "https://static.wixstatic.com/media/acb470_f4f34cfb216d4f829d87ea4b2bced24a~mv2.png/v1/fill/w_480,h_476,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/acb470_f4f34cfb216d4f829d87ea4b2bced24a~mv2.png",
            title: "BLONDE",
            price: "$65.00",
        },
        {
            imgUrl: "https://thesoundofvinyl.com/cdn/shop/products/SharedImage-136698.png?v=1692038923",
            title: "DS2",
            price: "$39.99"
        },
        {
            imgUrl: "https://interscope.com/cdn/shop/files/Yeat-2Alive_GeekPack_Vinyl2LP.png?v=1707419282",
            title: "2 Alivë",
            price: "$32.99"
        },
        {
            imgUrl: "https://sound-merch.com.au/cdn/shop/products/KANYE-COLLEGE_1024x1024.png?v=1665531078",
            title: "The College Dropout",
            price: "$27.99"
        },
        {
            imgUrl: "https://recordstore.co.uk/cdn/shop/products/image_of_17872813_97b33542-7b8e-4ade-9820-87375ef8d1d6.png?v=1704908587",
            title: "808s & Heartbreak Deluxe",
            price: "$49.99"
        },

        {
            imgUrl: "https://www.shugarecords.com/cdn/shop/products/KSG_LP_950x_815333e5-b9c3-4345-9a4d-a3a3261a3137_1200x1200.png?v=1540920873",
            title: "Kids See Ghosts",
            price: "$24.99"
        },
        {
            imgUrl: "https://shop.urbanlegends.com/cdn/shop/products/Kid-Cudi---Man-On-The-Moon-The-End-Of-Day-_2LP.png?v=1591216267",
            title: "Man on the Moon",
            price: "$22.99"
        },
        {
            imgUrl: "https://shop.urbanlegends.com/cdn/shop/products/Kid-Cudi---Man-On-The-Moon-II-The-Legend-Of-Mr.-Rager-_2LP.png?v=1591216272",
            title: "Man on the Moon 2",
            price: "$32.99"
        },
        {
            imgUrl: "https://sound-merch.com.au/cdn/shop/files/4-YOUR-EYEZ-ONLY_grande.png?v=1690341031",
            title: "4 Your Eyez Only",
            price: "$29.99"
        },

        {
            imgUrl: "https://interscope.com/cdn/shop/files/jcole_1024x1024.png?v=1690243838",
            title: "2014 Forest Hills Drive",
            price: "$38.99"
        },
        {
            imgUrl: "https://flyingout.co.nz/cdn/shop/files/ATL75-Vinyl-Uzi.webp?v=1691882308",
            title: "Luv Is Rage 2",
            price: "$40.99"
        },
        {
            imgUrl: "https://thesoundofvinyl.com.au/cdn/shop/products/J-Cole-Born-Sinner-Exclusive-Gold-2LP_1024x1024.png?v=1684127347",
            title: "Born Sinner",
            price: "$38.99"
        },
        {
            imgUrl: "https://thesoundofvinyl.com/cdn/shop/products/SharedImage-120584.png?v=1685628450",
            title: "ASTROWORLD",
            price: "$29.99"
        }, {
            imgUrl: "https://beatrelease.com/cdn/shop/products/Rodeo_1024x1024_7b3ab06d-71db-4f8a-aa72-8226106ddc7e.webp?v=1671035074",
            title: "Rodeo",
            price: "$26.99"
        },
        {
            imgUrl: "https://sound-merch.com.au/cdn/shop/products/childish_1024x1024.png?v=1625118436",
            title: "Because the Internet",
            price: "$33.99"
        }, {
            imgUrl: "https://recordstore.co.uk/cdn/shop/products/SharedImage-115162.png?v=1700822648",
            title: "DAMN.",
            price: "$33.99"
        }, {
            imgUrl: "https://jojistore.com/cdn/shop/products/JOJVINYL_f01723cb-b971-44b8-ab71-f0a0757ca80a.png?v=1650504762",
            title: "Ballads 1",
            price: "$49.99"
        }, {
            imgUrl: "https://www.repdiscosperu.com/cdn/shop/files/JOJI_1024x1024_7b81237f-19a6-4616-b289-4dc9436becba.png?v=1704991421&width=1000",
            title: "Nectar",
            price: "$38.99"
        }, {
            imgUrl: "https://cdn.shopify.com/s/files/1/0688/4297/9608/products/SharedImage-115161.png?v=1707734043&width=1100",
            title: "flower boy",
            price: "$27.99"
        }, {
            imgUrl: "https://sound-merch.com.au/cdn/shop/products/Tyler_Goblin_1024x1024.png?v=1619577690",
            title: "goblin",
            price: "$26.99"
        }, {
            imgUrl: "https://www.horizonsmusic.co.uk/cdn/shop/products/WeekndMyDearMelancholy_1200x1200.png?v=1675703598",
            title: "My Dear Melancholy",
            price: "$51.99"
        }, {
            imgUrl: "https://musicstation.be/cdn/shop/files/TheWeeknd-AfterHours-2LP.webp?v=1698655728",
            title: "After Hours",
            price: "$39.99"
        }, {
            imgUrl: "https://recordstore.co.uk/cdn/shop/products/SharedImage-123519.png?v=1695285726",
            title: "House of Balloons",
            price: "$48.99"
        },
        {
            imgUrl: "https://awakenmylove.com/cdn/shop/products/AMLSTANDARDLP.png?v=1505165913",
            title: "Awaken, My Love!",
            price: "$35.99"
        },
        {
            imgUrl: "https://interscope.com/cdn/shop/products/YeatVinyl_fb3139cd-4310-4e4c-80b8-5006d7c9d4d2.png?v=1673632335",
            title: "Lyfë",
            price: "$32.99"
        },

        {
            imgUrl: "https://sound-merch.com.au/cdn/shop/products/DenzelCurry_MeltMyEyez_VinylClear_760x.png?v=1648101473%27",
            title: "Melt My Eyez See Your Future",
            price: "$35.99"
        }, {
            imgUrl: "https://sound-merch.com.au/cdn/shop/products/Playboi-Carti-Whole-Lotta-Red_1024x1024.png?v=1638234427",
            title: "Whole Lotta Red",
            price: "$29.99"
        },
        
    ]
    return (
        <>
            <HeaderMain />
            <div className="shop">
                <div className="main-container">
                    <div className="shop-settings">
                        <div className="shop-items-total">
                            <h5>Showing all {products.length} results</h5>
                        </div>
                        <select name="" id="">
                            <option value="">Default sorting</option>
                            <option value="">Sort by popularity</option>
                        </select>
                    </div>
                    <div className="shop-items">
                        {products.map((product, index) => (
                            <div className="shop-item" key={index}>
                                <div className="shop-item-img">
                                    <Link to='/product'>
                                        <img src={product.imgUrl} alt={product.title} />
                                    </Link>
                                    <button className="btn">Add to cart</button>
                                </div>
                                <div className="shop-item-text">
                                    <h2>{product.title}</h2>
                                    <h5>{product.price}</h5>
                                </div>
                            </div>
                        ))}
                    </div>
                    <ArrowTop />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Shop



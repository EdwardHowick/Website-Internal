buybutton = document.getElementById('buybutton')

buybutton.addEventListener('click', () => {
    alert("Buying items is unfortunately not a feature ):")

})

document.addEventListener("DOMContentLoaded", () => {
    const pageparams = new URLSearchParams(window.location.search);
    const itemID = pageparams.get('itemID')
    if (itemID === "10") {
        sizeselect.style.display = "none";
        sizelabel.style.display = "none";

    }
    const itemImages = {

        //mountain bike images
        "1": "images/bike1.jpg",
        "2": "images/bike4.jpg",
        "3": "images/santacruzv10.png",
        "4": "images/trekmarlin.jpg",
        "5": "images/trekroscoe.jpg",
        "6": "images/polygonxtrada.jpg",
        
        //road bike images
        "7": "images/bike2.jpg",

        //electric bike images
        "8": "images/bike3.jpg",

        //helmet images
        "9": "images/helmet.png",

        "10": "images/pedal.png",

        "11": "images/merch.png",
    }
    const itemNames = {
        //mountain bike names
        "1": "Giant Trance Advanced 29 2 ",
        "2": "Specialized Status 160",
        "3": "Santa Cruz v10",
        "4": "Trek Marlin",
        "5": "Trek Roscoe",
        "6": "Polygon Xtrada",

        //road bike names
        "7": "Giant TCR Advanced Disc 2 Pro Compact",

        //electric bike names
        "8": "Giant Trance X Advanced E+ Elite 0 Electric",

        //helmet names
        "9": "Bone Helmet",

        //pedal names
        "10": "Pinner Elite Flat Pedals",

        //merch names
        "11": "Bestest Merch",
    }
    const itemPrice = {
        //mountain bike prices
        "1": "$2350",
        "2": "$3000",
        "3": "$10000",
        "4": "$799",
        "5": "$1700",
        "6": "$1100",

        //road bike prices
        "7": "$2800",

        //electric bike prices
        "8": "$19000",

        //helmet prices
        "9": "$200",

        //pedal prices
        "10": "$200",

        //merch prices
        "11": "$120",

    }
    const itemDescription = {
        "1": "The Giant Trance Advanced 29 2 is a high-performance trail bike designed to tackle rough terrain with agility and precision. Crafted from advanced carbon fiber, this bike combines lightweight construction with exceptional durability, offering a smooth ride across diverse trails.",
        "2": "The Specialized Status 160 is an aggressive and versatile enduro bike built to conquer the most challenging trails and rough terrain. With its robust construction and high-performance components, this bike is engineered to deliver exceptional handling, stability, and comfort on aggressive descents and technical climbs.",
        "3": "The Santa Cruz V10 is a legendary downhill bike renowned for its precision, durability, and exceptional performance on the world’s most challenging trails. As one of the most celebrated bikes in the downhill racing scene, the V10 combines cutting-edge technology with a robust design to deliver unparalleled speed, control, and stability.",
        "4": "The Trek Marlin is a versatile and reliable mountain bike designed to provide a fun and efficient riding experience on a variety of terrains. Known for its durability and performance, the Marlin is an excellent choice for both novice and experienced riders looking for a capable bike for trail riding, commuting, or recreational adventures.",
        "5": "The Trek Roscoe is a rugged and versatile hardtail mountain bike designed to handle rough trails and technical terrain with ease. Built for adventurous riders who crave a reliable and capable bike, the Roscoe offers a balance of performance and comfort, making it a great choice for both seasoned trail enthusiasts and newcomers alike.",
        "6": "The Polygon Xtrada is a high-performance mountain bike designed to offer a balanced combination of speed, agility, and durability for riders who love exploring trails and tackling diverse terrain. With its thoughtful design and robust features, the Xtrada delivers a smooth and reliable riding experience, making it a great choice for both seasoned trail enthusiasts and newcomers.",
        "7": "The Giant TCR Advanced Disc 2 Pro Compact is a high-performance road bike designed for serious cyclists who demand both speed and comfort. Engineered with precision and innovation, this bike excels in delivering a superior riding experience whether you're conquering long-distance rides or tackling challenging climbs.",
        "8": "The Giant Trance X Advanced E+ Elite 0 Electric is the ultimate trail companion, offering unparalleled performance, advanced technology, and an electrifying ride experience. Designed for serious mountain bikers and enthusiasts seeking both power and precision, this e-mountain bike excels on rugged terrains and challenging trails.",
        "9": "The Bone Helmet stands out as a premier choice for cyclists, combining cutting-edge safety features with sleek design. Crafted for both professional and recreational riders, this helmet ensures maximum protection without compromising on style or comfort.",
        "10": "Meet the Crappy Overpriced Pedal—a truly unique addition to any cyclist's gear collection, if you can call it that. This pedal offers a blend of poor quality and high cost that’s sure to make a memorable impression (for all the wrong reasons).",
        "11": "Discover the epitome of quality and creativity with our Bestest Merch collection—a meticulously curated range of exclusive items designed for true enthusiasts. Whether you're a dedicated fan, a collector, or simply someone who appreciates unique and high-quality merchandise, our Bestest Merch has something special for everyone.",
    }


    const imageUrl = itemImages[itemID];

    const itemImage = document.querySelector('.item-image'); 
    itemImage.style.backgroundImage = `url(${imageUrl})`;

    document.getElementById('item-name').textContent = itemNames[itemID]
    document.getElementById('item-price').textContent = itemPrice[itemID]
    document.getElementById('item-description').textContent = itemDescription[itemID]
});
let rough = "";

function Product(id, title, Description, image, price) {
    this.id = id;
    this.title = title;
    this.Description = Description;
    this.image = image;
    this.price = price;
}

let productData = [
    new Product("1", "Durvesh", "Grapefruit, Lemon, Bergamot", "https://saeedghani.pk/cdn/shop/files/durvesh_1024x1024.jpg?v=1756815246", "4,990"),
    new Product("2", "Mir", "Lavender, Birch", "https://saeedghani.pk/cdn/shop/files/MIR-100ml_1024x1024.webp?v=1759673223", "4,490"),
    new Product("3", "Khan", "Lemon, Mint, Pink Pepper, Grapefruit", "https://saeedghani.pk/cdn/shop/files/KHAN100ml_1024x1024.webp?v=1759673121", "4,490"),
    new Product("4", "Murshid", "Bergamot, Blackcurrant, Pineapple", "https://saeedghani.pk/cdn/shop/files/murshid12ml_1024x1024.webp?v=1759668874", "1,890"),
    new Product("5", "Jalal", "Orange, Mandarin Orange, Bergamot, Orange Blossom", "https://saeedghani.pk/cdn/shop/files/Fate_1024x1024.webp?v=1759664914", "1,690"),
    new Product("6", "Sultan", "Cardamom and Amber", "https://saeedghani.pk/cdn/shop/files/Sultan_1024x1024.webp?v=1759673367", "3,990"),
    new Product("7", "Desire", "Apple, Lemon, Neroli And Bergamot", "https://saeedghani.pk/cdn/shop/files/Desire_1024x1024.jpg?v=1758541178", "3,990"),
    new Product("8", "Haider Sports", "Fresh citrus, aquatic", "https://saeedghani.pk/cdn/shop/files/HS_1024x1024.webp?v=1764273648", "4,990")
];

function showProducts() {
    for (let i = 0; i < productData.length; i++) {
        let element = productData[i];

        rough += `

            <div class="card m-3" style="width: 18rem;">
                <img src=${element.image} class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${element.title}</h5>
                    <p class="card-text">${element.Description}.</p>
                    <h5 class="card-title">Rs. <span>${element.price}</span></h5>
                    <a href="#" class="btn btn-warning">Add To Cart</a>
                </div>
            </div>

        `;

        document.getElementById("show-all-product").innerHTML = rough;
    }
}

showProducts();


function toggleBtn() {
    var toggleBtn = document.getElementById("input");

    if (toggleBtn.checked) {
        document.body.classList.add("dark");
    } else {
        document.body.classList.remove("dark");
    }
}

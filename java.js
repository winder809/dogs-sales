
document.getElementById("dogForm").addEventListener("submit", function (event) {
    event.preventDefault();

   
    const name = document.getElementById("name").value;
    const breed = document.getElementById("availability").value;
    const price = document.getElementById("price").value;
    const stock = document.getElementById("stock").value;

    if (!isNumber(price)){
        displayError('Prices must be a number', 'price')
        return;
    }

    const newDogItem = document.createElement("div");
    newDogItem.classList.add("dog");
    newDogItem.innerHTML = `
        <h2>${name}</h2>
        <img src="${getImageUrl(breed)}" alt="${name}" width="300" height="300">
        <div>Price: <span class="price">$${price}</span></div>
        <div>In stock: <span class="in-stock">${stock === "in-stock" ? "Yes" : "No"}</span></div>
        <button class="remove">Remove</button>
    `;

    
    newDogItem.querySelector(".remove").addEventListener("click", function () {
        newDogItem.remove();
    });

    
    document.getElementById("doglist").appendChild(newDogItem);

    
    document.getElementById("dogForm").reset();
});


document.getElementById("dogForm").addEventListener("reset", function () {
   
    document.getElementById("dogForm").reset();
});


const getImageUrl = (breed) => {
    const breedMap = {
        'pillbut': 'https://as2.ftcdn.net/v2/jpg/05/65/46/67/1000_F_565466706_prtLC3eI86E2aCVlJXuJFlZKD4ZZWpor.jpg',
        'akita': 'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/06154034/Akita-standing-outdoors-in-the-summer.jpg',
        'barbet': 'https://www.akc.org/wp-content/uploads/2017/11/Barbet-standing-in-the-snow.jpg',
       
    };

    return breedMap[breed] || '';
};

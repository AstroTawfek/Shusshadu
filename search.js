const ds_data = [
    { name: "Shutki Bhuna", image: "https://i.ibb.co.com/tLWd5dh/hqdefault.jpg", recipe: Math.floor(Math.random() * 50) + 1 },
    { name: "Biryani", image: "https://i.ibb.co/YkDsCNv/Hyderabadi-Dum-Biryani.jpg", recipe: Math.floor(Math.random() * 50) + 1 },
    { name: "Kacchi Biryani", image: "https://i.ibb.co.com/dGVBHqR/R.jpg", recipe: Math.floor(Math.random() * 50) + 1 },
    { name: "Shorshe Ilish", image: "https://i.ibb.co.com/NW30Y5s/photo.jpg", recipe: Math.floor(Math.random() * 50) + 1 },
    { name: "Beef Curry", image: "https://i.ibb.co.com/CM1FbRs/maxresdefault-1.jpg", recipe: Math.floor(Math.random() * 50) + 1 },
    { name: "Chicken Roast", image: "https://i.ibb.co.com/Php2T2G/MC-Peruvian-Roast-Chicken-ztlg-super-Jumbo.jpg", recipe: Math.floor(Math.random() * 50) + 1 },
    { name: "Panta Bhat", image: "https://i.ibb.co.com/LgfSwXZ/109343942.webp", recipe: Math.floor(Math.random() * 50) + 1 },
    { name: "Chingri Malai Curry", image: "https://i.ibb.co.com/nLywbqb/Chingri-Malai-Curry.webp", recipe: Math.floor(Math.random() * 50) + 1 },
    { name: "Beguni", image: "https://i.ibb.co.com/3zcLqYp/Indian-Beguni-recipe-500x500.jpg", recipe: Math.floor(Math.random() * 50) + 1 },
    { name: "Khichuri", image: "https://i.ibb.co.com/5Fchb3V/bhuna-kichuri.jpg", recipe: Math.floor(Math.random() * 50) + 1 },
    { name: "Pithe Puli", image: "https://i.ibb.co.com/0q6PkYr/Puli-pithe.webp", recipe: Math.floor(Math.random() * 50) + 1 },
    { name: "Chotpoti", image: "https://i.ibb.co.com/my5fY44/Chotpoti.jpg", recipe: Math.floor(Math.random() * 50) + 1 },
    { name: "Piyaju", image: "https://i.ibb.co.com/NtVfq0s/piyaju-main.jpg", recipe: Math.floor(Math.random() * 50) + 1 },
    { name: "Shami Kebab", image: "https://i.ibb.co.com/SRgcy4b/Shami-kebab-13.jpg", recipe: Math.floor(Math.random() * 50) + 1 },
    { name: "Payesh", image: "https://i.ibb.co.com/SRgcy4b/Shami-kebab-13.jpg", recipe: Math.floor(Math.random() * 50) + 1 }
];


const history_data = [
    { name: "Shami Kebab"},
    { name: "Biryani"},
    { name: "Hilsa Curry" },
    { name: "Chingri Malai Curry" },
    { name: "Khichuri"},
    { name: "Pithe Puli"}
];


// Elements
const searchButton = document.getElementById("searchButton");
const searchContainer = document.getElementById("searchContainer");
const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");

// Toggle search bar visibility
searchButton.addEventListener("click", () => {
    searchContainer.classList.toggle("hidden");
    if (!searchContainer.classList.contains("hidden")) {
        searchInput.focus();
        displaySearchHistory();
    }
});

// Highlight matching text
function highlightMatch(text, query) {
    const regex = new RegExp(`(${query})`, "gi");
    return text.replace(regex, "<span class='text-orange-500 font-semibold'>$1</span>");
}

// Display search history
function displaySearchHistory() {
    searchResults.innerHTML = ""; // Clear previous results
    if (history_data.length > 0) {
        history_data.forEach(item => {
            const div = document.createElement("div");
            div.textContent = `${item.name} `;
            div.classList.add("p-2", "hover:bg-gray-100", "cursor-pointer");
            div.addEventListener("click", () => {
                searchInput.value = item.name;
                searchInData(item.name);
            });
            searchResults.appendChild(div);
        });
    } else {
        searchResults.innerHTML = `<div class='p-2 text-gray-500'>No search history available</div>`;
    }
}

// Search in ds_data
function searchInData(query) {
    searchResults.innerHTML = ""; // Clear previous results
    const filteredData = ds_data.filter(item => item.name.toLowerCase().includes(query));

    if (filteredData.length > 0) {
        filteredData.forEach(item => {
            const div = document.createElement("div");
            const highlightedName = highlightMatch(item.name, query);

            div.innerHTML = `
                <div class="flex items-center p-4 bg-white border border-gray-300  shadow-md hover:shadow-lg">
                    <img src="${item.image}" alt="${item.name}" class="w-24 h-24 object-cover rounded-lg mr-4">
                    <div class="flex-1">
                        <h3 class="text-xl font-semibold text-gray-800">${highlightedName}</h3>
                        <p class="text-base text-gray-500"> Total Recipe :  ${item.recipe}</p>
                    </div>
                </div>
            `;

            div.classList.add("mb-4", "cursor-pointer"); // Add spacing between rows
            searchResults.appendChild(div);
        });
    } else {
        searchResults.innerHTML = `<div class='p-4 text-gray-500'>No results found</div>`;
    }
}


// Search as user types
searchInput.addEventListener("input", () => {
    const query = searchInput.value.trim().toLowerCase();
    if (query) {
        searchInData(query);
    } else {
        displaySearchHistory();
    }
});
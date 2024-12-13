// Initial recipe data
const recipes = [
    { name: "Firni", image: "https://i.ibb.co.com/txw9Drt/lr1.png" },
    { name: "Grilled Club Sandwich", image: "https://i.ibb.co.com/zRhBVKd/lr2.png" },
    { name: "Shahi Zorda Rice", image: "https://i.ibb.co.com/HHSHv88/lr3.png" },
    { name: "Jali Kabab", image: "https://i.ibb.co.com/qFTpzvj/lr4.png" },
    { name: "Chicken Roast", image: "https://i.ibb.co.com/yBL2v9r/lr5.png" },
    { name: "Beef Rezala", image: "https://i.ibb.co.com/vkwnjhj/lr6.png" },
    { name: "Beef Kala Bhuna", image: "https://i.ibb.co.com/t8SnjRP/lr7.png" },
    { name: "Naga Wings", image: "https://i.ibb.co.com/gz6xzjK/lr8.png" },
    { name: "Chicken Fry", image: "https://i.ibb.co.com/fdqMGDP/lr9.png" },
  ];
  
  
  // DOM elements
  const recipeGrid = document.getElementById("recipe-grid");
  const loadMoreBtn = document.getElementById("load-more-btn");
  
  let itemsToShow = 6; // Initially show 6 items
  const itemsIncrement = 3; // Number of items to add on "Load More"
  
  // Function to render recipes
  function renderRecipes() {
    // Clear the grid before rendering
    recipeGrid.innerHTML = "";
  
    // Display items based on the count of itemsToShow
    for (let i = 0; i < itemsToShow && i < recipes.length; i++) {
      const recipe = recipes[i];
      const recipeCard = `
        <div class="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-500 ease-in-out hover:scale-105 hover:shadow-2xl hover:-translate-y-1 animate-fadeIn">
          <img src="${recipe.image}" alt="${recipe.name}" class="w-full rounded-lg  h-[16rem] object-cover transition-transform duration-500 ease-in-out hover:scale-110">
          <div class="p-4 ">
            <h3 class="text-lg font-bold transition-colors duration-300 ease-in-out hover:text-[#F59E0B]">${recipe.name}</h3>
          </div>
        </div>
      `;
      recipeGrid.insertAdjacentHTML("beforeend", recipeCard);
    }
  
    // Hide the button if all items are displayed
    if (itemsToShow >= recipes.length) {
      loadMoreBtn.style.display = "none";
    }
  }
  
  // Event listener for "Load More" button
  loadMoreBtn.addEventListener("click", () => {
    itemsToShow += itemsIncrement; // Increase the number of items to show
    renderRecipes(); // Re-render the grid
  });
  
  // Initial render
  renderRecipes();
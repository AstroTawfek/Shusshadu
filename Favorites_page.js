const loadMoreBtn = document.getElementById('loadMoreBtn');
const recipeGrid = document.getElementById('recipeGrid');
const deleteBtn = document.getElementById('deleteBtn');
const selectModeBtn = document.getElementById('selectModeBtn');
const selectAllBtn = document.getElementById('selectAllBtn');

const recipes = [
    { name: "Shutki Bhuna", image: "https://i.ibb.co.com/qWthGdy/loitta-shutki-bhuna-loitka-sutki-bhuna-korma-karahi-served-dish-isolated-background-top-view-banglad.jpg", recipe: Math.floor(Math.random() * 50) + 1 },
    { name: "Biryani", image: "https://i.ibb.co.com/YkDsCNv/Hyderabadi-Dum-Biryani.jpg", recipe: Math.floor(Math.random() * 50) + 1 },
    { name: "Fish Curry", image: "https://i.ibb.co.com/zhFVXLZ/maxresdefault.jpg", recipe: Math.floor(Math.random() * 50) + 1 },
    { name: "Shorshe Ilish", image: "https://i.ibb.co.com/NW30Y5s/photo.jpg", recipe: Math.floor(Math.random() * 50) + 1 },
    { name: "Chingri Malai Curry", image: "https://i.ibb.co.com/f48Syds/unnamed.jpg", recipe: Math.floor(Math.random() * 50) + 1 },
    { name: "Begun Bharta", image: "https://i.ibb.co.com/b5Xcxnx/Baigan-Bharta-from-Nagpur.jpg", recipe: Math.floor(Math.random() * 50) + 1 },
    { name: "Beef Bhuna", image: "https://i.ibb.co.com/CM1FbRs/maxresdefault-1.jpg", recipe: Math.floor(Math.random() * 50) + 1 },
    { name: "Gajorer Haluwa", image: "https://i.ibb.co.com/8MkVhXW/1641734441-new-project-2022-01-09t184847-482.jpg", recipe: Math.floor(Math.random() * 50) + 1 },
    { name: "Chicken Curry", image: "https://i.ibb.co.com/3CQRsQd/Instant-Pot-Chicken-Curry-Recipe.jpg", recipe: Math.floor(Math.random() * 50) + 1 },
    { name: "Kachchi Biryani", image: "https://i.ibb.co.com/dGVBHqR/R.jpg", recipe: Math.floor(Math.random() * 50) + 1 },
    { name: "Beguni", image: "https://i.ibb.co.com/P6y6mNF/hq720-2.jpg", recipe: Math.floor(Math.random() * 50) + 1 },
    { name: "Rui Macher Kalia", image: "https://i.ibb.co.com/HHqz7rS/rm.jpg", recipe: Math.floor(Math.random() * 50) + 1 },
    { name: "Macher Matha Diye Dal", image: "https://i.ibb.co.com/LtH1w8f/qrbza61nx0m.webp", recipe: Math.floor(Math.random() * 50) + 1 },
    { name: "Shutki Bhat", image: "https://i.ibb.co.com/yddNzPf/d8ba48509d787ea470c1a10c831e0f8c.jpg", recipe: Math.floor(Math.random() * 50) + 1 },
    { name: "Macher Jhol", image: "https://i.ibb.co.com/vdLJDYf/Aar-macher-Jhol.jpg", recipe: Math.floor(Math.random() * 50) + 1 },
    { name: "Egg Curry", image: "https://i.ibb.co.com/gtKppVf/Egg-Masala-Curry.webp", recipe: Math.floor(Math.random() * 50) + 1 },
    { name: "Niramish Tarkari", image: "https://i.ibb.co.com/cynS8ZZ/hq720-4.jpg", recipe: Math.floor(Math.random() * 50) + 1 },
    { name: "Jorda", image: "https://i.ibb.co.com/KjJywDV/maxresdefault-4.jpg", recipe: Math.floor(Math.random() * 50) + 1 },
    { name: "Singara", image: "https://i.ibb.co.com/XxCvTDp/s1.png", recipe: Math.floor(Math.random() * 50) + 1 },
    { name: "Panta Bhat", image: "https://i.ibb.co.com/WzGkbVQ/Made-In-Bangladesh-Article-2000x1304.jpg", recipe: Math.floor(Math.random() * 50) + 1 },
    { name: "Dal Tadka", image: "https://i.ibb.co.com/y4KJLP5/Dal-Tadka-Featured.jpg", recipe: Math.floor(Math.random() * 50) + 1 },
    { name: "Bhuna Khichuri", image: "https://i.ibb.co.com/2ML2680/Bhuna-khichuri-recipe.jpg", recipe: Math.floor(Math.random() * 50) + 1 },
    { name: "Somucha", image: "https://i.ibb.co.com/94BjHpT/hq720-5.jpg", recipe: Math.floor(Math.random() * 50) + 1 },
    { name: "Chitoi Pitha", image: "https://i.ibb.co.com/xj1vL68/hq720-6.jpg", recipe: Math.floor(Math.random() * 10) + 1 },
    { name: "Barbecue Ribs", image: "https://i.ibb.co.com/9yb2dXB/R-3.jpg", recipe: Math.floor(Math.random() * 50) + 1 },
    { name: "Kunafa", image: "https://i.ibb.co.com/C56gJ7j/01-1.jpg", recipe: Math.floor(Math.random() * 50) + 1 },
    { name: "Tonkatsu", image: "https://i.ibb.co.com/fx4Cmys/20201110-Spicy-Pork-Tonkatsu-5.jpg", recipe: Math.floor(Math.random() * 50) + 1 },
    { name: "Chicken Roast", image: "https://i.ibb.co.com/Php2T2G/MC-Peruvian-Roast-Chicken-ztlg-super-Jumbo.jpg", recipe: Math.floor(Math.random() * 50) + 1 },
    { name: "Pasta Carbonara", image: "https://i.ibb.co.com/smGbnCW/Pasta-Carbonara-Cheesecake-Factory-480x480.webp", recipe: Math.floor(Math.random() * 50) + 1 },
    { name: "Pizza Margherita", image: "https://i.ibb.co.com/NysgvQx/pizzamargherita1.jpg", recipe: Math.floor(Math.random() * 50) + 1 },
    { name: "Jhal Muri", image: "https://i.ibb.co.com/4MX7hKT/PHOTO-2022-05-28-20-44-41.jpg", recipe: Math.floor(Math.random() * 50) + 1 },
    { name: "Firni", image: "https://i.ibb.co/txw9Drt/beef-tacos.jpg", recipe: Math.floor(Math.random() * 50) + 1 },
    { name: "Vietnamese Spring Rolls", image: "https://i.ibb.co.com/mGjyBSD/Vietnamese-Spring-Rolls-Recipe-Card.jpg", recipe: Math.floor(Math.random() * 50) + 1 },
    { name: "Malai Cha", image: "https://i.ibb.co.com/bW3vMJz/hq720-7.jpg", recipe: Math.floor(Math.random() * 50) + 1 },
    { name: "Borhani", image: "https://i.ibb.co.com/5xJMrWR/borhani-o-borhanir-moshla.jpg", recipe: Math.floor(Math.random() * 50) + 1 }
  ];
  
  
  

// Track the current index
let currentIndex = 0;

// Toggle Select Mode
let selectMode = false;
selectModeBtn.addEventListener('click', () => {
  selectMode = !selectMode;
  document.querySelectorAll('.select-checkbox').forEach(checkbox => {
    checkbox.classList.toggle('hidden', !selectMode);
  });
});

// Select All/Unselect All with Animation
let allSelected = false;
selectAllBtn.addEventListener('click', () => {
  allSelected = !allSelected;
  document.querySelectorAll('.select-checkbox').forEach(checkbox => {
    checkbox.checked = allSelected;
    const card = checkbox.closest('.recipe-card');
    if (allSelected) {
      card.classList.add('bg-green-100');
    } else {
      card.classList.remove('bg-green-100');
    }
  });

  selectAllBtn.querySelector('span').textContent = allSelected ? 'Unselect All' : 'All';
});

// Delete Selected Recipes with Animation
deleteBtn.addEventListener('click', () => {
  document.querySelectorAll('.recipe-card').forEach(card => {
    const checkbox = card.querySelector('.select-checkbox');
    if (checkbox.checked) {
      card.classList.add('fade-out');
      card.addEventListener('animationend', () => card.remove());
    }
  });
});

// Load More Recipes
loadMoreBtn.addEventListener('click', () => {
  const nextRecipes = recipes.slice(currentIndex, currentIndex + 4);
  nextRecipes.forEach(recipe => {
    const card = document.createElement('div');
    card.className = 'bg-white shadow rounded overflow-hidden recipe-card transition-shadow shadow-orange-500 duration-300 hover:shadow-2xl hover:shadow-orange-500';
    card.setAttribute('data-name', recipe.name);
    card.setAttribute('data-recipes', recipe.recipe);

    card.innerHTML = `
      <input type="checkbox" class="hidden select-checkbox ">
      <img src="${recipe.image}" alt="${recipe.name}" class="w-full h-32 object-cover">
      <div class="p-4 ">
        <h2 class="font-bold text-lg mb-2">${recipe.name}</h2>
        <p class="text-gray-600 text-sm">${recipe.recipe} Recipes</p>
      </div>
    `;

    recipeGrid.appendChild(card);
  });

  currentIndex += nextRecipes.length;

  // Disable button if no more recipes to load
  if (currentIndex >= recipes.length) {
    loadMoreBtn.disabled = true;
    loadMoreBtn.textContent = 'No More Recipes';
    loadMoreBtn.classList.add('bg-gray-400', 'cursor-not-allowed');
  }
});

// Sorting functionality
const sortOptions = document.getElementById('sortOptions');

sortOptions.addEventListener('change', () => {
  const cards = Array.from(recipeGrid.children);
  const sortBy = sortOptions.value;

  if (sortBy === 'name') {
    cards.sort((a, b) => a.getAttribute('data-name').localeCompare(b.getAttribute('data-name')));
  } else if (sortBy === 'recipes') {
    cards.sort((a, b) => b.getAttribute('data-recipes') - a.getAttribute('data-recipes'));
  }

  recipeGrid.innerHTML = '';
  cards.forEach(card => recipeGrid.appendChild(card));
});
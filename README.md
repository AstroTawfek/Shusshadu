<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Title Name -->
    <title>Category</title>
    <!-- linking with css file -->
    <link rel="stylesheet" href="favorites_page.css">
    <!-- font CDN -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap" rel="stylesheet">
    <style>
            #kaushan-script-regular {
        font-family: "Kaushan Script", cursive;
        font-weight: 400;
        font-style: normal;
        }
    </style>
    <!-- font CDN 2 -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Kaushan+Script&display=swap" rel="stylesheet">
    <style>
            .inter-font {
        font-family: "Inter", sans-serif;
        font-optical-sizing: auto;
        font-weight: 600;
        font-style: normal;
        }
    </style>

        <!-- Font CDN 3 -->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@0,600;1,600&family=Judson:ital,wght@0,400;0,700;1,400&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Sora:wght@100..800&display=swap" rel="stylesheet">
    
        <style>
            #judson-bold {
              font-family: "Judson", serif;
              font-weight: 700;
              font-style: normal;
            }
        </style>


    <!-- DaisiUI + Tailwind CDN -->
    <link href="https://cdn.jsdelivr.net/npm/daisyui@4.12.13/dist/full.min.css" rel="stylesheet" type="text/css" />
    <script src="https://cdn.tailwindcss.com"></script>
    
    <!-- Icon CDN -->
    <script src="https://kit.fontawesome.com/54d3cb8a03.js" crossorigin="anonymous"></script>
</head>


<body class="inter-font">
 <!-- Nav Bar Start -->
    <header class="mx-[1rem] md:mx-[10rem]">
        <nav class="flex justify-between items-center mt-[4.9rem]">
            <h1 id="kaushan-script-regular" class="font-normal text-[1.8rem] md:text-[3.4rem]">Shusshadu</h1>
            <ul class="hidden md:flex md:gap-[3.375rem]">
                <li><a href="index.html" class="font-semibold text-[1.25rem]">Home Page</a></li>
                <li><a href="#" class="font-semibold text-[1.25rem]">Recipe Page</a></li>
                <li><a href="#" class="font-semibold text-[1.25rem]">Categories</a></li>
                <li><a href="#" class="font-semibold text-[1.25rem]">Favourites</a></li>
            </ul>
            <div class="flex gap-[2rem]">
                <a href="#"><i class="fa-solid fa-magnifying-glass text-[2rem] md:text-[2rem]"></i></a>
                <a href="#">
                    <img class="hidden md:inline-block rounded-full border border-black" src="https://i.ibb.co.com/TT335zZ/images.png" alt="Profile Picture">
                    <img class="md:hidden rounded-full border border-black" src="https://i.ibb.co.com/TT335zZ/images.png" alt="Profile Picture">
                </a>
                <i class="md:hidden fa-solid fa-bars text-[2rem]"></i>
            </div>
        </nav>
    </header>
<!-- Nav Bar End -->

<main>
    <section  class="mx-auto px-4 lg:px-[10rem] pb-8 pt-16">
        <h1 id="judson-bold" class="text-4xl font-bold mb-8">Categories</h1>
        <div class=" mb-[2rem]">
            <hr class=" border-[0.02rem]">
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">

<!-- 1st Row Start-->
    
<!-- 1st Row Start-->
<div class="flex flex-col items-center">
    <img src="https://i.ibb.co/zbgbhZG/Biryani.webp" alt="Biryani" class="w-24 h-24 rounded-full object-cover mb-2 transition-shadow shadow-orange-500 duration-300 hover:shadow-2xl hover:shadow-orange-500 ">
    <span class="text-lg hover:text-orange-500 "><a href="#">Biryani</a></span>
</div>
<div class="flex flex-col items-center">
    <img src="https://i.ibb.co.com/KbBV8HM/Ilish-Beguner-Jhol-recipe-debjanir-rannaghar.jpg" alt="Hilsa Fish" class="w-24 h-24 rounded-full object-cover mb-2 transition-shadow shadow-orange-500 duration-300 hover:shadow-2xl hover:shadow-orange-500 ">
    <span class="text-lg hover:text-orange-500 "><a href="#">Hilsa Fish</a></span>
</div>
<div class="flex flex-col items-center">
    <img src="https://i.ibb.co.com/1bZVVNn/panta-bhat.jpg" alt="Panta Bhat" class="w-24 h-24 rounded-full object-cover mb-2 transition-shadow shadow-orange-500 duration-300 hover:shadow-2xl hover:shadow-orange-500 ">
    <span class="text-lg hover:text-orange-500 "><a href="#">Panta Bhat</a></span>
</div>
<div class="flex flex-col items-center">
    <img src="https://i.ibb.co.com/0yVJC3S/hq720-1.jpg" alt="Bhuna Khichuri" class="w-24 h-24 rounded-full object-cover mb-2 transition-shadow shadow-orange-500 duration-300 hover:shadow-2xl hover:shadow-orange-500 ">
    <span class="text-lg hover:text-orange-500 "><a href="#">Bhuna Khichuri</a></span>
</div>
<!-- 1st Row End-->

<!-- 2nd Row Start-->
<div class="flex flex-col items-center">
    <img src="https://i.ibb.co.com/h79my0J/sorshe-ilish-1.png" alt="Shorshe Ilish" class="w-24 h-24 rounded-full object-cover mb-2 transition-shadow shadow-orange-500 duration-300 hover:shadow-2xl hover:shadow-orange-500 ">
    <span class="text-lg hover:text-orange-500 "><a href="#">Shorshe Ilish</a></span>
</div>
<div class="flex flex-col items-center">
    <img src="https://i.ibb.co.com/xDhZ0bm/Chingri-Macher-Malai-Curry-2.jpg" alt="Chingri Malai Curry" class="w-24 h-24 rounded-full object-cover mb-2 transition-shadow shadow-orange-500 duration-300 hover:shadow-2xl hover:shadow-orange-500 ">
    <span class="text-lg hover:text-orange-500 "><a href="#">Chingri Malai Curry</a></span>
</div>
<div class="flex flex-col items-center">
    <img src="https://i.ibb.co.com/DC2TC70/images-1.jpg" alt="Aloo Bhorta" class="w-24 h-24 rounded-full object-cover mb-2 transition-shadow shadow-orange-500 duration-300 hover:shadow-2xl hover:shadow-orange-500 ">
    <span class="text-lg hover:text-orange-500 "><a href="#">Aloo Bhorta</a></span>
</div>
<div class="flex flex-col items-center">
    <img src="https://i.ibb.co.com/M2VjHnZ/DSC-1664-2-2.jpg" alt="Murgir Jhol" class="w-24 h-24 rounded-full object-cover mb-2 transition-shadow shadow-orange-500 duration-300 hover:shadow-2xl hover:shadow-orange-500 ">
    <span class="text-lg hover:text-orange-500 "><a href="#">Murgir Jhol</a></span>
</div>
<!-- 2nd Row End -->

<!-- 3rd Row Start -->
<div class="flex flex-col items-center">
    <img src="https://i.ibb.co.com/TRMkxRz/Pua-pitha-recipe.jpg" alt="Pitha" class="w-24 h-24 rounded-full object-cover mb-2 transition-shadow shadow-orange-500 duration-300 hover:shadow-2xl hover:shadow-orange-500 ">
    <span class="text-lg hover:text-orange-500 "><a href="#">Pitha</a></span>
</div>
<div class="flex flex-col items-center">
    <img src="https://i.ibb.co.com/p4rqFj6/keema-samosa-04.jpg" alt="Samosa" class="w-24 h-24 rounded-full object-cover mb-2 transition-shadow shadow-orange-500 duration-300 hover:shadow-2xl hover:shadow-orange-500 ">
    <span class="text-lg hover:text-orange-500 "><a href="#">Samosa</a></span>
</div>
<div class="flex flex-col items-center">
    <img src="https://i.ibb.co.com/V9NVmxX/Singara-History.jpg" alt="Singara" class="w-24 h-24 rounded-full object-cover mb-2 transition-shadow shadow-orange-500 duration-300 hover:shadow-2xl hover:shadow-orange-500 ">
    <span class="text-lg hover:text-orange-500 "><a href="#">Singara</a></span>
</div>
<div class="flex flex-col items-center">
    <img src="https://i.ibb.co.com/xMkNPNb/sandesh-sondesh.jpg" alt="Sondesh" class="w-24 h-24 rounded-full object-cover mb-2 transition-shadow shadow-orange-500 duration-300 hover:shadow-2xl hover:shadow-orange-500 ">
    <span class="text-lg hover:text-orange-500 "><a href="#">Sondesh</a></span>
</div>
<!-- 3rd Row End -->  

<!-- 4th Row Start -->
<div class="flex flex-col items-center">
    <img src="https://i.ibb.co.com/KmL80MG/ice-cream-cake-11.jpg" alt="Cake" class="w-24 h-24 rounded-full object-cover mb-2 transition-shadow shadow-orange-500 duration-300 hover:shadow-2xl hover:shadow-orange-500 ">
    <span class="text-lg hover:text-orange-500 "><a href="#">Cake</a></span>
</div>
<div class="flex flex-col items-center">
    <img src="https://i.ibb.co.com/pXGYdj2/77640.jpg" alt="Pastries" class="w-24 h-24 rounded-full object-cover mb-2 transition-shadow shadow-orange-500 duration-300 hover:shadow-2xl hover:shadow-orange-500 ">
    <span class="text-lg hover:text-orange-500 "><a href="#">Pastries</a></span>
</div>
<div class="flex flex-col items-center">
    <img src="https://i.ibb.co.com/8rCn7Ln/Beetroot-Burger.jpg" alt="Burger" class="w-24 h-24 rounded-full object-cover mb-2 transition-shadow shadow-orange-500 duration-300 hover:shadow-2xl hover:shadow-orange-500 ">
    <span class="text-lg hover:text-orange-500 "><a href="#">Burger</a></span>
</div>
<div class="flex flex-col items-center">
    <img src="https://i.ibb.co.com/Hrywc3c/shutterstock-1773695441-min-750x750.jpg" alt="Sea Food" class="w-24 h-24 rounded-full object-cover mb-2 transition-shadow shadow-orange-500 duration-300 hover:shadow-2xl hover:shadow-orange-500 ">
    <span class="text-lg hover:text-orange-500 "><a href="#">Sea Food</a></span>
</div>
<!-- 4th Row End -->

<!-- 5th Row Start -->
<div class="flex flex-col items-center">
    <img src="https://i.ibb.co.com/q1ZFNQc/R-1.jpg" alt="Desserts" class="w-24 h-24 rounded-full object-cover mb-2 transition-shadow shadow-orange-500 duration-300 hover:shadow-2xl hover:shadow-orange-500 ">
    <span class="text-lg hover:text-orange-500 "><a href="#">Desserts</a></span>
</div>
<div class="flex flex-col items-center">
    <img src="https://i.ibb.co.com/6JNwPg8/Pineapple-Green-Smoothie-Large500-ID-2726969.jpg" alt="Smoothies" class="w-24 h-24 rounded-full object-cover mb-2 transition-shadow shadow-orange-500 duration-300 hover:shadow-2xl hover:shadow-orange-500 ">
    <span class="text-lg hover:text-orange-500 "><a href="#">Smoothies</a></span>
</div>
<div class="flex flex-col items-center">
    <img src="https://i.ibb.co.com/JdBMhsv/Hash-Brown-5-e1941c86066346e8a592e4c589d4933d.jpg" alt="Breakfast" class="w-24 h-24 rounded-full object-cover mb-2 transition-shadow shadow-orange-500 duration-300 hover:shadow-2xl hover:shadow-orange-500 ">
    <span class="text-lg hover:text-orange-500 "><a href="#">Breakfast</a></span>
</div>
<div class="flex flex-col items-center">
    <img src="https://i.ibb.co.com/kHXxMJ2/R-2.jpg" alt="Salad" class="w-24 h-24 rounded-full object-cover mb-2 transition-shadow shadow-orange-500 duration-300 hover:shadow-2xl hover:shadow-orange-500 ">
    <span class="text-lg hover:text-orange-500 "><a href="#">Salad</a></span>
</div>
<!-- 5th Row End -->



    </section>


<!--Featured Recipes Section-->
    <section class=" mx-[2rem] mt-[4rem] md:mx-[10rem] md:mt-[4rem] mb-[4rem]">
        <div class="container mx-auto px-4 lg:px-8">
            <h2 id="judson-bold" class="text-4xl font-bold text-center mb-10">Featured Recipes</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-10 ">
                <div class="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg hover:shadow-orange-500 ">
                    <img src="https://i.ibb.co.com/rsdXKLX/delicious-biryani-feast-stockcake.jpg" alt="Recipe 1" class="w-full h-48 object-cover">
                    <div class="p-6">
                        <h3 class="text-2xl font-semibold mb-4">Delicious Biryani Feast</h3>
                        <p class="text-gray-600 mb-4">Savor the rich, aromatic flavors of perfectly cooked biryani, paired with sweet and creamy firni for dessert, and crispy singara for a delightful snack.</p>
                        <a href="#" class="text-indigo-600 hover:underline">View Recipe</a>
                    </div>
                </div>
                <div class="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg hover:shadow-orange-500 ">
                    <img src="https://i.ibb.co.com/0Z96dBS/maxresdefault-3.jpg" alt="Recipe 2" class="w-full h-48 object-cover">
                    <div class="p-6">
                        <h3 class="text-2xl font-semibold mb-4">Crispy & Flavorful Singara
                        </h3>
                        <p class="text-gray-600 mb-4">Enjoy the deliciously crisp and savory Singara, perfect as a snack or appetizer.</p>
                        <a href="#" class="text-indigo-600 hover:underline">View Recipe</a>
                    </div>
                </div>
                <div class="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg hover:shadow-orange-500 ">
                    <img src="https://i.ibb.co.com/34dF3fT/photo-2.jpg" alt="Recipe 3" class="w-full h-48 object-cover">
                    <div class="p-6">
                        <h3 class="text-2xl font-semibold mb-4">Bengali Hilsa Curry</h3>
                        <p class="text-gray-600 mb-4">A traditional Bengali dish with tender Hilsa fish in mustard gravy.</p>
                        <a href="#" class="text-indigo-600 hover:underline">View Recipe</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
<!--Featured Recipes Section End-->

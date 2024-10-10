// Define a variable to store the current page.

// 0 = Title
// Anything Else = Contents
let CurrentPage = 0;
const maxPages = 5; // Assuming 5 is the last page
const keyCooldown = 1; // Cooldown time in milliseconds
let lastKeyPressTime = 0; // Track the last key press time

// Arrow Buttons.
const LeftArrow = document.querySelector(".lucide-chevron-left");
const RightArrow = document.querySelector(".lucide-chevron-right");

// Get the actual content element.
const PageContent = document.querySelector(".content-container");

// Current page display.
const CurrentPageCount = document.querySelector(".currentpagecount");

// Function to update the page.
const UpdatePage = (Page) => {
    // If is the first page.
    if (Page === 0) {
        // Set the page content.
        PageContent.innerHTML = `
        <h2 class="text-6xl font-bold text-transparent text-left pt-2">hi<br>hi<br>hi</h2>
                <!-- Page 0/4 - Title Card -->
                <h2 class="text-8xl font-bold text-[#D5B18C] text-left pt-2 absolute left-[220px] top-[150px]"><span class="" style="font-family: 'Indie Flower', sans-serif">~ Prayers ~</span><br>
                    <p class="text-transparent select-none text-[12px]">K</p>                    
                </h2>
 
                <p class="text-2xl text-[#D518C] font-semibold absolute bottom-[20px] left-[260px] text-[#bf9f7e]">Illustrated and Authored by <span class="font-bold">##### #####</span>.</p>
 
                <p class="text-xl text-transparent font-semibold select-none pt-4">
                    <br><br><br><br>
 
                    <br><br><br><br>
 
                    Illustrated and Authored by ##### #####.
                </p>`;

        // Update the background.
        PageContent.className =
            "bg-[url(assets/1.png)]  bg-no-repeat bg-cover backdrop-blur-xl shadow-xl w-[60%] max-h-[60%] h-[60%] rounded-xl p-6 content-container overflow-y-auto mb-[60px]";

        // Log background.
        console.log(PageContent.classList[0]);

        // Update the page.
        CurrentPageCount.textContent = `Page 0/5 - Title Page`;
    } else if (Page === 1) {
        // Set the page content.
        PageContent.innerHTML = `<h2 class="text-6xl font-bold text-transparent text-left pt-2">hi<br>hi<br>hi</h2>
                <!-- Page 0/4 - Title Card -->
                <h2 class="text-6xl font-bold text-[#D5B18C] text-left pt-2 absolute left-[300px] top-[70px]"><span class="" style="font-family: 'Indie Flower', sans-serif">~ Table of Contents ~</span><br>
                    <p class="text-transparent select-none text-[12px]">K</p>                    
                </h2>
 
                <p class="text-4xl text-[#D518C] font-semibold absolute bottom-[115px] left-[350px] text-[#bf9f7e]">Prayer of Thanksgiving .................... 2
                <br>
                Prayer of Intercession .................... 3
                <br>
                Prayer of Confession  .................... 4
                <br>
                Prayer of Petition .................... 5</p>
 
                <img class="absolute w-32 h-32 bottom-[5px] left-[880px]" src="https://static.vecteezy.com/system/resources/previews/046/437/095/non_2x/emoji-3d-cute-and-yellow-color-png.png">
 
                <p class="text-xl text-transparent font-semibold select-none pt-4">
                    <br><br><br><br>
 
                    <br><br><br><br>
 
                    Illustrated and Authored by ##### #####.
                </p>                `;

        // Update the background.
        PageContent.className =
            "bg-[url(assets/2.png)] bg-no-repeat bg-cover backdrop-blur-xl shadow-xl w-[60%] max-h-[60%] h-[60%] rounded-xl p-6 content-container overflow-y-auto mb-[60px]";

        // Log background.
        console.log(PageContent.classList[0]);

        // Update the page.
        CurrentPageCount.textContent = `Page 1/5 - Table of Contents`;
    } else if (Page === 2) {
        // Set the page content.
        PageContent.innerHTML = `
        <h2 class="text-6xl font-bold text-transparent text-left pt-2">hi<br>hi<br>hi</h2>
                <!-- Page 0/4 - Title Card -->
                <h2 class="text-6xl font-bold text-[#D5B18C] text-left pt-2 absolute left-[100px] top-[15px]"><span class="" style="font-family: 'Indie Flower', sans-serif">~ Prayer of Thanksgiving ~</span><br>
                    <p class="text-transparent select-none text-[12px]">K</p>                    
                </h2>
 
                <p class="text-3xl text-[#C015A] font-semibold absolute bottom-[230px] left-[120px] text-[#bf9f7e]">"Dear God, thank you for my family, friends and<br> everything good in my life. I am greatful for the love<br> and happiness around me, guide me on sharing<br> kindness with others. Amen"</p>
 
                <p class="text-4xl text-[#D518C] font-semibold absolute bottom-[210px] left-[120px] text-[#bf9f7e]">_______________________________________</p>
 
                <p class="text-3xl text-[#D518C] font-semibold absolute bottom-[100px] left-[120px] text-[#bf9f7e]">A prayer of thanksgiving expresses gratitude for<br> our blessings, helping us appreciate what we have<br> and encouraging kindness and sharing with others.</p>
 
 
                <p class="text-xl text-transparent font-semibold select-none pt-4">
                    <br><br><br><br>
 
                    <br><br><br><br>
 
                    Illustrated and Authored by ##### #####.
                </p>                
        `;
        /*
 
"Dear God, thank you for my family, friends, and all the good things in my life. I am grateful for the love and joy around me. Help me to share my blessings with others. Amen."
 
### What a Prayer of Thanksgiving Means
 
A prayer of thanksgiving is a way to say thank you for the good things we have. It helps us appreciate our blessings and reminds us to be kind and share with others.
        */

        // Update the background.
        PageContent.className =
            "bg-[url(assets/3.png)] bg-no-repeat bg-cover backdrop-blur-xl shadow-xl w-[60%] max-h-[60%] h-[60%] rounded-xl p-6 content-container overflow-y-auto mb-[60px]";

        // Log background.
        console.log(PageContent.classList[0]);

        // Update the page.
        CurrentPageCount.textContent = `Page 2/5 - Prayer of Thanksgiving`;
    } else if (Page === 3) {
        // Set the page content.
        PageContent.innerHTML = `
        <h2 class="text-6xl font-bold text-transparent text-left pt-2">hi<br>hi<br>hi</h2>
                <!-- Page 0/4 - Title Card -->
                <h2 class="text-6xl font-bold text-[#D5B18C] text-left pt-2 absolute left-[220px] top-[65px]"><span class="" style="font-family: 'Indie Flower', sans-serif">~ Prayer of Intercession ~</span><br>
                    <p class="text-transparent select-none text-[12px]">K</p>                    
                </h2>
 
                <p class="text-3xl text-[#D518C] font-semibold absolute bottom-[230px] left-[260px] text-[#bf9f7e]">"Dear God, I pray for those who are hurting or in need.<br> Please bring them comfort, healing, and hope. Help them<br> feel your love and support in their struggles. Amen."</p>
 
                <p class="text-4xl text-[#D518C] font-semibold absolute bottom-[210px] left-[260px] text-[#bf9f7e]">________________________________________</p>
 
                <p class="text-3xl text-[#D518C] font-semibold absolute bottom-[70px] left-[260px] text-[#bf9f7e]">A prayer of intercession is when we pray for others. It<br> shows our care and concern for their challenges. By asking<br> God to help them, we express our faith in His love and<br> power to make a difference in their lives.</p>
 
 
                <p class="text-xl text-transparent font-semibold select-none pt-4">
                    <br><br><br><br>
 
                    <br><br><br><br>
 
                    Illustrated and Authored by ##### #####.
                </p>                
        `;

        // Update the background.
        PageContent.className =
            "bg-[url(assets/4.png)] bg-no-repeat bg-cover backdrop-blur-xl shadow-xl w-[60%] max-h-[60%] h-[60%] rounded-xl p-6 content-container overflow-y-auto mb-[60px]";

        // Log background.
        console.log(PageContent.classList[0]);

        // Update the page.
        CurrentPageCount.textContent = `Page 3/5 - Prayer of Intercession`;
    } else if (Page === 4) {
        // Set the page content.
        PageContent.innerHTML = `
        <h2 class="text-6xl font-bold text-transparent text-left pt-2">hi<br>hi<br>hi</h2>
                <!-- Page 0/4 - Title Card -->
                <h2 class="text-6xl font-bold text-[#D5B18C] text-left pt-2 absolute left-[160px] top-[85px]"><span class="" style="font-family: 'Indie Flower', sans-serif">~ Prayer of Confession ~</span><br>
                    <p class="text-transparent select-none text-[12px]">K</p>                    
                </h2>
 
                <p class="text-3xl text-[#D518C] font-semibold absolute bottom-[190px] left-[160px] text-[#bf9f7e]">"Dear God, I confess that I have made mistakes and moved<br> from your ways. Please forgive me for my sins, and help me<br> to grow in love and kindness. Cleanse my spirit and bring me<br> back to your ways. Amen."</p>
 
                <p class="text-4xl text-[#D518C] font-semibold absolute bottom-[170px] left-[160px] text-[#bf9f7e]">________________________________________</p>
 
                <p class="text-3xl text-[#D518C] font-semibold absolute bottom-[60px] left-[160px] text-[#bf9f7e]">A prayer of confession is when you talk to God to say you are sorry<br> for your mistakes, asking to be forgiven. It's a way to be honest and<br> seek help on how to do better in the future.</p>
 
 
                <p class="text-xl text-transparent font-semibold select-none pt-4">
                    <br><br><br><br>
 
                    <br><br><br><br>
 
                    Illustrated and Authored by ##### #####.
                </p>                
        `;

        /*
 
The prayer of confession is when someone talks to God to say they're sorry for their mistakes and ask for forgiveness. It’s a way to be honest and seek strength to do better in the future.
---
 
        */

        // Update the background.
        PageContent.className =
            "bg-[url(assets/5.png)] bg-no-repeat bg-cover backdrop-blur-xl shadow-xl w-[60%] max-h-[60%] h-[60%] rounded-xl p-6 content-container overflow-y-auto mb-[60px]";

        // Log background.
        console.log(PageContent.classList[0]);

        // Update the page.
        CurrentPageCount.textContent = `Page 4/5 - Prayer of Confession`;

        RightArrow.stroke = "#334155";
    } else if (Page === 5) {
        // Set the page content.
        PageContent.innerHTML = `
        <h2 class="text-6xl font-bold text-transparent text-left pt-2">hi<br>hi<br>hi</h2>
                <!-- Page 0/4 - Title Card -->
                <h2 class="text-6xl font-bold text-[#D5B18C] text-left pt-2 absolute left-[210px] top-[15px]"><span class="" style="font-family: 'Indie Flower', sans-serif">~ Prayer of Petition ~</span><br>
                    <p class="text-transparent select-none text-[12px]">K</p>                    
                </h2>
 
                <p class="text-3xl text-[#D518C] font-semibold absolute bottom-[300px] left-[240px] text-[#bf9f7e]">"Dear God, We ask for your help and guidance. Please bless our families<br> and friends. Help us in our studies and make us kind to each other. We<br> pray for those in need and hope they find comfort. Amen"</p>
 
                <p class="text-4xl text-[#D518C] font-semibold absolute bottom-[280px] left-[240px] text-[#bf9f7e]">________________________________________</p>
 
                <p class="text-3xl text-[#D518C] font-semibold absolute bottom-[100px] left-[240px] text-[#bf9f7e]">A prayer of petition is a prayer where you ask God for help. You<br> express your needs and desires, whether for yourself or others. This<br> prayer shows your trust in God, as you seek support in challenging<br> times or for those you care about. It's a way to connect with God and express your hopes and concerns.</p>
 
 
                <p class="text-xl text-transparent font-semibold select-none pt-4">
                    <br><br><br><br>
 
                    <br><br><br><br>
 
                    Illustrated and Authored by ##### #####.
                </p>                
        `;

        /*
 
Certainly! Here’s a simple prayer of petition:
 
---
 
**Prayer of Petition:**
 
Dear God,
 
I come to you with my needs and the needs of those around me. Please grant us strength, comfort, and guidance in our struggles. May your wisdom lead us to hope and healing.
 
Amen.
 
---
 
This prayer expresses a request for support and divine intervention.
        */

        // Update the background.
        PageContent.className =
            "bg-[url(assets/6.png)] bg-no-repeat bg-cover backdrop-blur-xl shadow-xl w-[60%] max-h-[60%] h-[60%] rounded-xl p-6 content-container overflow-y-auto mb-[60px]";

        // Log background.
        console.log(PageContent.classList[0]);

        // Update the page.
        CurrentPageCount.textContent = `Page 5/5 - Prayer of Petition`;

        RightArrow.stroke = "#334155";
    }
};

// Function to move right.
const RightPage = () => {
    // Check if the current page is the last page.
    if (CurrentPage === maxPages) {
        // Cancel the event.
        event.preventDefault();
    } else {
        // Add to the current page.
        CurrentPage += 1;
        // Change the page.
        UpdatePage(CurrentPage);
    }
};

// Function to move left.
const LeftPage = () => {
    // Check if the current page is 0.
    if (CurrentPage === 0) {
        // Cancel the event.
        event.preventDefault();
    } else {
        // Subtract the current page.
        CurrentPage -= 1;
        // Change the page.
        UpdatePage(CurrentPage);
    }
};

// Add event listener for key.
window.addEventListener("keydown", (event) => {
    const currentTime = Date.now();

    // Check if enough time has passed since the last key press.
    if (currentTime - lastKeyPressTime < keyCooldown) {
        return; // Ignore the key press if it's too soon.
    }

    // Update the last key press time
    lastKeyPressTime = currentTime;

    // If the key is left arrow.
    if (event.key === "ArrowLeft") {
        // Go left.
        LeftPage();
    }

    // If the key is right arrow.
    if (event.key === "ArrowRight") {
        // Go right.
        RightPage();
    }
});

const images = [
    "assets/1.png",
    "assets/2.png",
    "assets/3.png",
    "assets/4.png",
    "assets/5.png",
    "assets/6.png",
    "assets/7.png",
];
const preloadImages = images.map((src) => {
    const img = new Image();
    img.src = src;
    return img;
});
UpdatePage(0);
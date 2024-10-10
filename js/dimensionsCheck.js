// Get the modal and dimensions element.
const Modal = document.querySelector("#dimensions-modal");
const Dims = document.querySelector("#dimens");

// Create an interval check every half second.
const DimensionsCheck = setInterval(() => {
    // Check if the dimensions are not correct.
    if (!((window.innerWidth === 1920 && window.innerHeight === 917) || (window.innerWidth === 1920 && window.innerHeight === 911) || (window.innerWidth === 1920 && window.innerHeight === 910) || (window.innerWidth === 1920 && window.innerHeight === 912) || (window.innerWidth === 1920 && window.innerHeight === 920) || (window.innerWidth === 1920 && window.innerHeight === 918) || (window.innerWidth === 1920 && window.innerHeight === 919))) {
        // If dimensions modal has the hidden property.
        if (Modal.classList.contains("opacity-0")) {
            // Remove the hidden class to show the modal.
            Modal.classList.remove("opacity-0");
        }

        // Update the dimensions.
        if (Dims) { // Check if Dims is not null
            Dims.innerHTML = `
            Current Height: ${window.innerHeight} pixels.
            <br>
            Current Width: ${window.innerWidth} pixels.
            <br><br>
            If you are using a <code class="bg-slate-800/50 p-1 rounded-lg">Chromebook / ChromeOS</code> device, there is a chance this page is impossible to view properly.`;
        }
    } else {
        // If dimensions modal doesn't have the hidden property.
        if (!Modal.classList.contains("opacity-0")) {
            // Add the hidden class to hide the modal.
            Modal.classList.add("opacity-0");
            clearInterval(DimensionsCheck);
        }
    }
}, 5);

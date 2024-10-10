const ThisIsCaseOne = () => {
    document.body.className = "bg-slate-900 dark antialiased transition-all duration-1000"
    console.log("c1")
};

const ThisIsCaseTwo = () => {
    document.body.className = "bg-gray-900 dark antialiased transition-all duration-1000"
    console.log("c2")
};

// Main function to randomly execute one of the cases
const RandomCaseExecutor = () => {
    const randomNumber = Math.random(); // Generate a random number between 0 and 1

    if (randomNumber >= 0.5) {
        ThisIsCaseOne();
    } else if (randomNumber < 0.5) {
        ThisIsCaseTwo();
    }   
};

// Set an interval to run the function every X milliseconds (e.g., 1000 ms)
setInterval(RandomCaseExecutor, 10000);

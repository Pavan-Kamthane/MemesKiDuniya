// Selecting the necessary elements from the HTML document
// const generateMemeBtn = document.querySelector(".meme-genarator .generate-meme-btn");
const memeImage = document.querySelector(".meme-genarator img"); // Selecting the meme image element
const memTitle = document.querySelector(".meme-genarator .meme-title"); // Selecting the meme title element

// Function to update the meme details with the provided URL and title
const updateDetails = (url, title) => {
    memeImage.setAttribute("src", url); // Setting the 'src' attribute of the meme image element
    memTitle.innerHTML = title; // Setting the inner HTML of the meme title element
}

// Function to generate a meme by making an API request
const generateMeme = () => {
    // Making a fetch request to the "https://meme-api.com/gimme/wholesomememes" API endpoint
    fetch("https://meme-api.com/gimme/wholesomememes")
    .then((response) => response.json()) // Parsing the JSON response from the API
    .then(data => {
        updateDetails(data.url, data.title); // Calling the updateDetails function with meme URL and title obtained from the API
    })
};

// Automatically generating a meme when the script runs
generateMeme(); // Calling the generateMeme function to generate a meme automatically

// Note: The following line is commented out and not functional in the current code.
// It appears to be an attempt to add a click event listener to a button with the class "generate-meme-btn".
// generateMemeBtn.addEventListener("click", generateMeme());

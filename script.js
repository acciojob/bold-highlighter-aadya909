function highlight() {
    // Function to highlight all <strong> elements by changing their color to green
function highlight() {
    // Select all <strong> elements
    const strongElements = document.querySelectorAll('strong');
    
    // Loop through each <strong> element and set its color to green
    strongElements.forEach(function(element) {
        element.style.color = 'rgb(0, 128, 0)'; // Green color
    });
}

// Function to revert all <strong> elements to their original color (black)
function return_normal() {
    // Select all <strong> elements
    const strongElements = document.querySelectorAll('strong');
    
    // Loop through each <strong> element and set its color back to black
    strongElements.forEach(function(element) {
        element.style.color = 'rgb(0, 0, 0)'; // Black color
    });
}



}


function return_normal() {
    const strongElements = document.querySelectorAll('strong');
    
    // Loop through each <strong> element and set its color back to black
    strongElements.forEach(function(element) {
        element.style.color = 'rgb(0, 0, 0)'; // Black color
    });
}

    


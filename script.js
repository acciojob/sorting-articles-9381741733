//your JS code here. If required.
const bands = [
    'The Plot in You', 
    'The Devil Wears Prada', 
    'Pierce the Veil', 
    'Norma Jean', 
    'The Bled', 
    'Say Anything', 
    'The Midway State', 
    'We Came as Romans', 
    'Counterparts', 
    'Oh, Sleeper', 
    'A Skylit Drive', 
    'Anywhere But Here', 
    'An Old Dog'
];

// Function to strip "a", "an", "the" from the start of a string
const strip = (bandName) => bandName.replace(/^(a |an |the )/i, '').trim();

// Sort the bands array
const sortedBands = bands.slice().sort((a, b) => strip(a).localeCompare(strip(b)));

// Log the sorted bands
console.log(sortedBands);

// Add to the DOM (if needed for a webpage)
const ul = document.createElement('ul');
ul.id = "band";
document.body.appendChild(ul);

sortedBands.forEach(band => {
    const li = document.createElement('li');
    li.textContent = band;
    ul.appendChild(li);
});
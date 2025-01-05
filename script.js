//your JS code here. If required.


const strip = (bandName) => bandName.replace(/^(a |an |the )/i, '').trim();


const sortedBands = bands.slice().sort((a, b) => strip(a).localeCompare(strip(b)));


console.log(sortedBands);


const ul = document.createElement('ul');
ul.id = "band";
document.body.appendChild(ul);

sortedBands.forEach(band => {
    const li = document.createElement('li');
    li.textContent = band;
    ul.appendChild(li);
});

const majorArcana = [
    {
        name : '0 The Fool',
        imageUrl : './images/major/thefool.jpg',
        generalInfo : 'This is general info',
        reversePosition : 'This is info for reverse position',
        advisePosition : 'This is info for advise position',
    },
    {
        name : 'I The Magician',
        imageUrl : './images/major/magician.jpg',
        generalInfo : 'This is general info',
        reversePosition : 'This is info for reverse position',
        advisePosition : 'This is info for advise position',
    },
    {
        name : 'II The High Priestess',
        imageUrl : './images/major/high-priestess.jpg',
        generalInfo : 'This is general info',
        reversePosition : 'This is info for reverse position',
        advisePosition : 'This is info for advise position',
    },
    {
        name : 'III The Empress',
        imageUrl : './images/major/empress.jpg',
        generalInfo : 'This is general info',
        reversePosition : 'This is info for reverse position',
        advisePosition : 'This is info for advise position',
    },
    {
        name : 'IV The Emperor',
        imageUrl : './images/major/emperor.jpg',
        generalInfo : 'This is general info',
        reversePosition : 'This is info for reverse position',
        advisePosition : 'This is info for advise position',
    },
    /*
    {
        name : '',
        imageUrl : '',
        generalInfo : '',
        reversePosition : '',
        advisePosition : '',
    },
    */
]

const cardContainer = document.getElementById('card-container');
const majorLinks = document.getElementById('major-links');


function formatCard(card, container) {
    let cardImage = document.createElement("IMG");
    cardImage.src = card.imageUrl;
    cardImage.className = 'card-image';
    let cardHeader = document.createElement("H2");
    cardHeader.innerHTML = card.name;
    let cardGeneral = document.createElement("P");
    cardGeneral.innerHTML = '<strong>General Meaning</strong><br><br>' + card.generalInfo;
    let cardReverse = document.createElement("P");
    cardReverse.innerHTML = '<strong>In Reverse Position</strong><br><br>' + card.reversePosition;
    let cardAdvise = document.createElement("P");
    cardAdvise.innerHTML = '<strong>In Advise Position</strong><br><br>' + card.advisePosition;
    
    container.appendChild(cardImage);
    container.appendChild(cardHeader);
    container.appendChild(cardGeneral);
    container.appendChild(cardReverse);
    container.appendChild(cardAdvise);

}

function formatMajorNav(array, container ) {

    for (let i=0; i<array.length; i++) {
        let majorLink = document.createElement("A");
    majorLink.innerHTML = array[i].name;
    majorLink.id = array[i] + '-button';
    majorLink.addEventListener('click', function() {
        cardContainer.innerHTML = '';
        formatCard(array[i],cardContainer);
    })
    container.appendChild(majorLink);
    }
    

}

formatMajorNav(majorArcana, majorLinks)

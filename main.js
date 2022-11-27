const personName = 'Himaja',
    partyBtn = document.getElementById('party-btn'),
    timeCounter = document.getElementById('counter'),
    ballonGroup = document.getElementById('group-ballons'),
    banner = document.getElementById('banner'),
    heading = document.getElementById('heading'),
    cakeContiner = document.getElementById('cake-container'),
    poperLeft = document.getElementById('poper-left'),
    poerRight = document.getElementById('poper-right'),
    audioPlayer = document.getElementById('audio'),
    storyText = document.getElementById('story-text'),
    slide = document.getElementById('slide'),
    slideShowContainer = document.getElementById('slide-show-container'),
    footer = document.getElementById('footer');

document.title = `Happy Birthday ${personName}`;
heading.innerText = personName;

timeCounter.style.display = 'none';
ballonGroup.style.display = 'none';
banner.style.display = 'none';
heading.style.display = 'none';
cakeContiner.style.display = 'none';
poerRight.style.display = 'none';
poperLeft.style.display = 'none';
storyText.style.display = 'none';
slideShowContainer.style.display = 'none';
footer.style.display = 'none';

let storyIndexCounter = 0;
let storyWords = [
    'Happy Birthday Himaja 🥳',
];

const slides = [
    './assets/asset1.jpeg',
    './assets/asset2.jpeg',
    './assets/asset3.jpeg',
    './assets/asset4.jpeg',
    './assets/asset5.jpeg',
    './assets/asset6.jpeg',
    './assets/asset7.jpeg',
    './assets/asset8.jpeg',
    './assets/asset9.jpeg',
    './assets/asset10.jpeg',
    './assets/asset11.jpeg',
    './assets/asset12.jpeg',
    // './assets/asset13.jpeg',
];

let slideCounter = 0;
slide.style.animationIterationCount = slides.length;

storyWords.push('');
storyText.style.animationIterationCount = storyWords.length;

partyBtn.addEventListener('click', () => {

    partyBtn.style.display = 'none';
    timeCounter.style.display = 'unset'
    let counter = 4;
    const timeCtr = setInterval(() => {
        counter -= 1;
        timeCounter.innerText = counter;
        if (counter == 0) {
            timeCounter.style.display = 'none';
            clearInterval(timeCtr);
        }
    }, 1000)

    setTimeout(() => {
        audioPlayer.play();
        ballonGroup.style.display = 'unset';
        banner.style.display = 'unset';
        heading.style.display = 'unset';
        cakeContiner.style.display = 'unset';
        poperLeft.style.display = 'unset';
        poerRight.style.display = 'unset';
    }, 4000)

    setTimeout(() => {
        document.getElementById('audio-2').play();
        storyText.style.display = 'unset';
        let storyInterval = setInterval(() => {

            if (storyIndexCounter == storyWords.length - 1) {
                slideShowContainer.style.display = 'unset';
                footer.style.display = 'unset';
                setInterval(() => {
                    if (slideCounter < slides.length) {
                        slide.src = slides[slideCounter];
                        slideCounter += 1;
                    }
                }, 5000)
            }
            if (storyIndexCounter == storyWords.length) {
                storyText.style.display = 'none';
                clearInterval(storyInterval);
            } else {
                storyText.innerText = storyWords[storyIndexCounter];
                storyIndexCounter += 1;
            }
        }, 4000)

    }, 26000)

})

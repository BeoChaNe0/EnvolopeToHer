const envelope = document.querySelector('.envelope-wrapper');
const letterContent = document.querySelector('.letter-content');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const envelopeContainer = document.querySelector('.envelope-container');
const heart = document.querySelector('.heart');

const messages = [
    "Dear Lam my best ̶f̶r̶i̶e̶n̶d̶  aka lem, auzrya. It's been a long time since i first met u.",
    "Remember the girl i told u i had crushed on for 6-7 years? That was youღ...",
    "It was hard for me to confess to u that i love u for a long time.",
    "Cuz u was said to me that u don't like long distance love, you don't want to love at that moment.",
    "I know that long distance relationship will be very difficult.",
    "When u're lonely and bored or sick i'm not there for u and when u need money i don't even have bank account to transfer the money.",
    "Especially ur ideal type is the person taller than u. And that is something i cannot meet at the moment(◞‸ ◟)💧.",
    "But ur recent expressions give me the motivation to do this.",
    "I was wondering whether I should do it or not. I don't want to lose this relationship. I don't want to lose u...(;´-`;)",
    "Yes, i'm afraid. I've seen too many people lose the relationship after confessing their feeling.",
    "And i decided to do this before i become a loser doodoo watching someone else get you first.",
    "Thank God and ur Mom for bringing u into my life.",
    "I cherish every moment with you.",
    "U make me laugh, make me feel happy every time u appear.",
    "Maybe right now i can't do anything but text, make u happy through social media, play games with you.",
    "But i will try to fulfill the role of a [...] in the upcoming university life.",
    "All i want to say.",
    "Will you be my 𝓰𝓲𝓻𝓵𝓯𝓻𝓲𝓮𝓷𝓭🌹? Answer me in instagram🌹",

];

let currentMessageIndex = 0;

// Open the envelope only once
envelope.addEventListener('click', () => {
    if (!envelope.classList.contains('flap')) {
        envelope.classList.add('flap');
        // Update message after flap
        setTimeout(() => {
            letterContent.textContent = messages[currentMessageIndex];
        }, 1000);
    }
});

// Update message content
function updateMessage() {
    letterContent.textContent = messages[currentMessageIndex];
}

// Next button
nextBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    if (currentMessageIndex < messages.length - 1) {
        currentMessageIndex++;
        updateMessage();
    }
});

// Previous button
prevBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    if (currentMessageIndex > 0) {
        currentMessageIndex--;
        updateMessage();
    }
});

// Slide down envolope
heart.addEventListener('click', () => {
    if (!envelopeContainer.classList.contains('opened')) {
        envelopeContainer.classList.add('opened');
    }
    if (!envelope.classList.contains('flap')) {
        envelope.classList.add('flap');
        setTimeout(() => {
            letterContent.textContent = messages[currentMessageIndex];
        }, 1000);
    }
});

// State
document.addEventListener('DOMContentLoaded', () => {
    const heart = document.querySelector('.heart');
    const envelope = document.querySelector('.envelope');
    const letter = document.querySelector('.letter');
    
    function openEnvelope() {
        envelope.classList.add('opened');
    }
    
    if (heart) heart.addEventListener('click', openEnvelope);
    if (letter) letter.addEventListener('click', openEnvelope);
});

// Pages
let currentPage = 1;
  const totalPages = 18;  // Set the total number of pages

  function updatePageCounter() {
    const pageCounter = document.getElementById("nav-buttons");
    pageCounter.textContent = `${currentPage}/${totalPages}`;
  }

  function prevPage() {
    if (currentPage > 1) {
      currentPage--;
      updatePageCounter();
    }
  }

  function nextPage() {
    if (currentPage < totalPages) {
      currentPage++;
      updatePageCounter();
    }
  }

// Initialize page counter
updatePageCounter();
// Load initial message
updateMessage();
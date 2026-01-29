// remove video player if found
document.querySelectorAll('div[aria-label*="Video Player"]').forEach(div => {
    div.parentElement?.remove();
});

// remove quiz banner
let heading = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6'))
  .find(h => h.textContent.includes('Test Your Knowledge'));

if (heading) {
    let element = heading;
    for (let i = 0; i < 4; i++) {
        element = element.parentElement;
        if (!element) break;
    }
    element?.remove();
}

// remove "mark as read" button
let paragraph = Array.from(document.querySelectorAll('p'))
  .find(p => p.textContent.includes('Mark as read'));

if (paragraph) {
    let element = paragraph;
    for (let i = 0; i < 2; i++) {
        element = element.parentElement;
        if (!element) break;
    }
    element?.remove();
}

// remove rating section
let paragraph1 = Array.from(document.querySelectorAll('p'))
  .find(p => p.textContent.includes('How would you rate'));

if (paragraph1) {
    let element = paragraph1;
    for (let i = 0; i < 2; i++) {
        element = element.parentElement;
        if (!element) break;
    }
    element?.remove();
}

// remove comments
document.querySelectorAll('div.comments-container').forEach(div => {
    div.parentElement?.remove();
});

// remove mock-interview banner
document.querySelectorAll('img[alt="CTA"]').forEach(img => {
    img.parentElement?.parentElement?.remove();
});

// remove footer
document.querySelectorAll('div.footer').forEach(div => {
    div.parentElement?.remove();
});

// Find all collapsed accordions and click them
document.querySelectorAll('[aria-expanded="false"]').forEach(el => el.click());

// remove 'Try This Problem Yourself' + 'Watch Video Walkthrough'
document.getElementById('video-section')?.remove();


console.log('Page cleaned!');
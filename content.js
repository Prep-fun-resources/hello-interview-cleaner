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


(() => {
  // active code block
  const pre = document.querySelector('pre.shiki');
  if (!pre) {
    console.error('Active code block not found');
    return;
  }

  // Fix the <pre> itself
  pre.style.maxHeight = 'none';
  pre.style.height = 'auto';
  pre.style.overflow = 'visible';

  // Walk up and remove scroll constraints
  let el = pre.parentElement;
  while (el && el !== document.body) {
    const style = getComputedStyle(el);

    if (
      style.overflow === 'auto' ||
      style.overflow === 'scroll' ||
      style.maxHeight !== 'none'
    ) {
      el.style.overflow = 'visible';
      el.style.maxHeight = 'none';
      el.style.height = 'auto';
    }

    el = el.parentElement;
  }

  console.log('Scrolling removed for active tab');
})();

(() => {
  const pre = document.querySelector('pre.shiki');
  if (!pre) return;

  // Allow wrapping
  pre.style.whiteSpace = 'pre-wrap';   // key change
  pre.style.wordBreak = 'break-word';  // safety for long tokens
  pre.style.overflowX = 'visible';

  // Shiki renders spans per line – ensure they can wrap
  pre.querySelectorAll('.line').forEach(line => {
    line.style.whiteSpace = 'pre-wrap';
    line.style.wordBreak = 'break-word';
  });

  console.log('Horizontal scrolling removed, wrapping enabled');
})();


console.log('Page cleaned!');
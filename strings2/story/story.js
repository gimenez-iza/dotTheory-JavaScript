// 1. Declare variables and capture input.
const noun = prompt('Enter a noun:');
const adjective = prompt('Enter an adjective');
const verb = prompt('Enter a verb:');

// 2. Combine the input with other words to create a story.
const story = `<p>The ${noun} is ${verb} ${adjective}.</p>`

// 3. Display the story as a <p> inside the <main> element.
document.querySelector('main').innerHTML = story;

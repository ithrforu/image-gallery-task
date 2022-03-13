const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images = [
	'pic1.jpg',
	'pic2.jpg',
	'pic3.jpg',
	'pic4.jpg',
	'pic5.jpg',
];

/* Looping through images */
for (image of images) {
	const newImage = document.createElement('img');
	newImage.setAttribute('src', `images/${image}`);
	thumbBar.appendChild(newImage);

	newImage.onclick = () => {
		displayedImage.setAttribute('src', newImage.getAttribute('src'));
	};
}

/* Wiring up the Darken/Lighten button */
btn.onclick = () => {
	const schemeSwitcher = (btn.className === 'dark') ? 'light' : 'dark';
	btn.className = schemeSwitcher;

	const darkClass = (schemeSwitcher === 'dark');
	overlay.style.backgroundColor = (!darkClass) ? 'rgba(0,0,0,.5)' : 'rgba(0,0,0,0)';
	btn.textContent = (!darkClass) ? 'Lighten' : 'Darken';
};
let slideIndex = 1;
showSlides(slideIndex);
function nextSlide() {
showSlides(slideIndex += 1);
}
function previousSlide() {
showSlides(slideIndex -= 1);  
}
function currentSlide(n) {
showSlides(slideIndex = n);
}
function showSlides(n) {
let slides = document.getElementsByClassName("item");
if (n > slides.length) {
slideIndex = 1
}
if (n < 1) {
slideIndex = slides.length
}
for (let slide of slides) {slide.style.display = "none";
}
slides[slideIndex - 1].style.display = "block";    
}
document.addEventListener('DOMContentLoaded', function() {
	fetchPosts();
	fetchUsers();
});
function fetchPosts() {
	fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
		.then(response => response.json())
		.then(posts => displayPosts(posts));
}
function displayPosts(posts) {
	const sliderDiv = document.getElementById('postsSlider');
	const containerDiv = document.createElement('div');
	posts.forEach(post => {
		const postDiv = document.createElement('div');
		postDiv.innerHTML = `<h3>${post.title}</h3><p>${post.body}</p>`;
		containerDiv.appendChild(postDiv);
	});
	sliderDiv.appendChild(containerDiv);
}
function fetchUsers() {
	fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users => displayUsers(users));
}
function displayUsers(users) {
	const usersList = document.getElementById('usersList');
	users.forEach(user => {
		const userLi = document.createElement('li');
		userLi.onclick = () => window.open(`user.html?userId=${user.id}`, '_blank');
		userLi.innerHTML = `<img src="https://via.placeholder.com/150/000000/FFFFFF/?text=${user.username}" alt="User Image">
									<span>${user.name}</span>`;
		usersList.appendChild(userLi);
	});
}



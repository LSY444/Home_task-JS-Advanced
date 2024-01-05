document.addEventListener('DOMContentLoaded', function() {
	const userId = new URLSearchParams(window.location.search).get('userId');
	fetchUserDetails(userId);
});
function fetchUserDetails(userId) {
	fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
		.then(response => response.json())
		.then(user => displayUserDetails(user));
}
function displayUserDetails(user) {
	const userDetailsDiv = document.getElementById('userDetails');
	userDetailsDiv.innerHTML = `
		<h1>${user.name}</h1>
		<p><strong>Email:</strong> ${user.email}</p>
		<p><strong>Phone:</strong> ${user.phone}</p>
		<p><strong>Company:</strong> ${user.company.name}</p>
		<p><strong>Website:</strong> <a href="http://${user.website}" target="_blank">${user.website}</a></p>
		<p><strong>Address:</strong> ${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}</p>
	`;
}
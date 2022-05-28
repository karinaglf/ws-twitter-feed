//Create Navigation Sidebar

const navList = document.querySelector('.nav-list');

navItems.forEach((item) => {
	const liItem = document.createElement('li');
	liItem.innerHTML = `<a><img src=${item.icon} alt="nav icon">${item.label}</a>`;
	navList.appendChild(liItem);
});

// Create Trending Topics Section

const trendingSection = document.querySelector('.trends-container main');
console.log(trendingSection);

trendingTopics.forEach((item, i) => {
	const trendsCard = document.createElement('div');
	trendsCard.className = 'trends-card';
	trendsCard.innerHTML = `
    <span>${i+1}. Trending</span>
    <img src="./assets/icon-chevron.svg" alt="more details icon">
    <h3>${item.topic}</h3>
    <p><span>${item.quantity}<span> Tweets</p>
    `;

	trendingSection.appendChild(trendsCard);
});

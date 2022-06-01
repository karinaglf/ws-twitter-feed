//Create Navigation Sidebar

const navList = document.querySelector('.nav-list');

navItems.forEach((item) => {
	const liItem = document.createElement('li');
	liItem.innerHTML = `<a><img src=${item.icon} alt="nav icon">${item.label}</a>`;
	navList.appendChild(liItem);
});

// Create Trending Topics Section

const trendingSection = document.querySelector('.trends-container main');

trendsData.slice(0, 5).forEach((item, i) => {
	const trendsCard = document.createElement('div');
	trendsCard.className = 'trends-card';
	trendsCard.innerHTML = `
		<span>${i + 1}. Trending</span>
		<img src="./assets/icon-chevron.svg" alt="more details icon">
		<h3>${item.trends}</h3>
		<p><span>${item.number}<span> Tweets</p>
		`;

	trendingSection.appendChild(trendsCard);
});

// Create Who to Follow Section

const followContainer = document.querySelector('.follow-container main');

followSuggestions.forEach((item, i) => {
	const followCard = document.createElement('div');
	followCard.className = 'follow-card';
	followCard.innerHTML = `
    <img src=${item.avatar} alt="avatar">
    <div>
    <span>${item.username}</span> <img src="./assets/icon-verified.svg" alt="verified icon">
    <p>${item.handle}</p>
    </div>
    <button>Follow</button>
    `;

	followContainer.appendChild(followCard);
});

// Create Tweets Feed
const tweetsContainer = document.querySelector('.tweets-container');

const tweets = [];

tweetsData.forEach((user) => {
	user.tweets.forEach((tweet) => {
		tweet.avatar = user.avatar;
		tweet.name = user.name;
		tweet.username = user.username;
		return tweets.push(tweet);
	});
});

tweets.forEach((item) => {
	const tweetCard = document.createElement('div');
	tweetCard.className = 'tweet-card row';

	item.img
		? (tweetCard.innerHTML = `
	<img src=${item.avatar} alt="avatar" class="avatar">
	<div class="row">
	<h3>${item.name}</h3>
	<span>${item.username}</span>
	<p>${formatTweet(item.tweet)}</p>
	<img src=${item.img} alt="avatar" class="tweet-image">
	</div>
	`)
		: (tweetCard.innerHTML = `
	<img src=${item.avatar} alt="avatar" class="avatar">
	<div>
	<h3>${item.name}</h3>
	<span>${item.username}</span>
	<p>${formatTweet(item.tweet)}</p>
	</div>
	`);

	tweetsContainer.appendChild(tweetCard);
});

function formatTweet(text) {
	const newText = text
		//Format hashtags
		.replace(/#(\w+)/g, '<a href="/tag/$1">#$1</a>')

		//Format @
		.replace(/@(\w+)/g, '<a href="/tag/$1">@$1</a>')

		//Format hyperlinks
		.replace(/(?:(https?\:\/\/[^\s]+))/m, '<a href="$1">$1</a>');

	return newText;
}

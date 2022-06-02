//Create Navigation Sidebar

const navList = document.querySelector('.nav-list');

navItems.forEach((item) => {
	const liItem = document.createElement('li');
	liItem.innerHTML = `<a><img src=${item.icon} alt="nav icon">${item.label}</a>`;
	if (item.label == 'Profile') {
		liItem.className = 'nav-profile';
	}

	navList.appendChild(liItem);
});

// Create Trending Topics Section

const trendingSection = document.querySelector('.trends-container main');

trendsData.slice(0, 5).forEach((item, i) => {
	const trendsCard = document.createElement('div');
	trendsCard.className = 'trends-card';
	trendsCard.innerHTML = `
		<div>
		<span>${i + 1}. Trending</span>
		<img src="./assets/icon-chevron.svg" alt="chevron icon">
		</div>
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
    <h3>${item.username}</h3>
    <p>${item.handle}</p>
    </div>
    <button class="outline-button">Follow</button>
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
	tweetCard.className = 'tweet-card tweet-row';

	item.img
		? (tweetCard.innerHTML = `
	<img src=${item.avatar} alt="avatar" class="avatar">
	<div class="tweet-details">
	<div class="tweet-details-header">
	<h3>${item.name}</h3>
	<span>@${item.username}</span>
	<img src="./assets/icon-chevron.svg" alt="chevron icon">
	</div>
	<p>${formatTweet(item.tweet)}</p>
	<img src=${item.img} alt="avatar" class="tweet-image">
	<div class="tweet-icons-row">
	<img src="./assets/icon-comments.svg" alt="comments icon">
	<img src="./assets/icon-retweet.svg" alt="retweet icon">
	<img src="./assets/icon-like.svg" alt="like icon">
	<img src="./assets/icon-upload.svg" alt="upload icon">
	</div>
	</div>
	`)
		: (tweetCard.innerHTML = `
		<img src=${item.avatar} alt="avatar" class="avatar">
		<div class="tweet-details">
		<div class="tweet-details-header">
		<h3>${item.name}</h3>
		<span>@${item.username}</span>
		<img src="./assets/icon-chevron.svg" alt="chevron icon">
		</div>
		<p>${formatTweet(item.tweet)}</p>
		<div class="tweet-icons-row">
		<img src="./assets/icon-comments.svg" alt="comments icon">
		<img src="./assets/icon-retweet.svg" alt="retweet icon">
		<img src="./assets/icon-like.svg" alt="like icon">
		<img src="./assets/icon-upload.svg" alt="upload icon">
		</div>
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

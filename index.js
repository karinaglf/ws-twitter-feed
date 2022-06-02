//Create Navigation Sidebar

const navList = document.querySelector('.nav-list');

navItems.forEach((item) => {
	const liItem = document.createElement('li');
	liItem.innerHTML = `<a><img src=${item.icon} alt="nav icon">${item.label}</a>`;

	navList.appendChild(liItem);
});

// Create Trending Topics Section

const trendingSection = document.querySelector('.trends-container main');

const sortedTrends = trendsData.sort((a, b) => a.number.slice(0, -1) - b.number.slice(0, -1)).reverse();

sortedTrends.slice(0, 5).forEach((item, i) => {
	const trendsCard = document.createElement('div');
	trendsCard.className = 'trends-card';
	trendsCard.innerHTML = `
		<div>
		<span>${i + 1}. Trending</span>
		<img src="./assets/icon-chevron.svg" alt="chevron icon" class="chevron">
		</div>
		<h3>#${item.trends}</h3>
		<p>${item.number} Tweets</p>
		`;

	trendingSection.appendChild(trendsCard);
});

// Create Who to Follow Section

const followContainer = document.querySelector('.follow-container main');

tweetsData.slice(0, 3).forEach((item, i) => {
	const followCard = document.createElement('div');
	followCard.className = 'follow-card';

	item.verified
		? (followCard.innerHTML = `
    <img src=${item.avatar} alt="avatar" class="avatar">
    <div>
    <div class="row"><h3>${item.name}</h3> 
	<img src="./assets/icon-verified.svg" alt="verified icon">
	</div>
    <span>@${item.username}</span>
    </div>
    <button class="outline-button">Follow</button>`)
		: (followCard.innerHTML = `
    <img src=${item.avatar} alt="avatar" class="avatar">
    <div>
    <h3>${item.name}</h3>
    <span>@${item.username}</span>
    </div>
    <button class="outline-button">Follow</button>
    `);

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

tweets
	.sort(() => Math.random() - 0.5)
	.forEach((item) => {
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
		//Format hyperlinks
		.replace(/(?:(https?\:\/\/[^\s]+))/m, '<a href="$1">$1</a>')

		//Format hashtags
		.replace(/#(\w+)/g, '<a href="https://twitter.com/hashtag/$1">#$1</a>')

		//Format @
		.replace(/@(\w+)/g, '<a href="https://twitter.com/$1">@$1</a>');

	return newText;
}

// Show alert after adding a Tweet

const tweetBtn = document.querySelector('#tweet-btn');

tweetBtn.addEventListener('click', (e) => {
	// Selecting the input element and get its value
	const tweetMsg = document.querySelector('#tweet-input').value;

	if (!tweetMsg) return;

	// Displaying the value
	alert(`------ Your tweet:  -----\n\n${tweetMsg}`);
});

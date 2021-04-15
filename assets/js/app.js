//Variables
const tweetList = document.getElementById('tweet-list');

//EventListeners
eventListeners();

function eventListeners(){
    //Form Submission
    document.querySelector('#form').addEventListener('submit', newTweet);

    //Remove tweet from the list
    tweetList.addEventListener('click', removeTweet);

}

//Functions

function newTweet(e){ 
    e.preventDefault();

    //Read the textarea value
    const tweet = document.getElementById('tweet').value;

    //Create the remove Button
    const removeBtn = document.createElement('a');
    removeBtn.classList = 'remove-tweet';
    removeBtn.textContent = 'X';


    //Createan <li> element
    const li = document.createElement('li');
    li.textContent = tweet;
    tweetList.appendChild(li);

    //Add and remove button to each tweet
    li.appendChild(removeBtn);

    //Add to the list
    tweetList.appendChild(li);

    //Add to local storage
    addTweetLocalStorage(tweet);
}

//Removes the tweets from the DOM
function removeTweet(e){
    if(e.target.classList.contains('remove-tweet')){
        e.target.parentElement.remove();
    }
}

//Adds the tweets into the local storage
function addTweetLocalStorage(tweet){
    let tweets = getTweetsFromStorage();

    //Add the tweet into the array
    tweets.push(tweet);

    //Convert tweet array into string
    localStorage.setItem('tweets', JSON.stringify( tweets ) );
}

function getTweetsFromStorage() {
    let tweets;
    const tweetsLS = localStorage.getItem('tweets')
    //get the values, if null is returned then we create an empty
    if(tweetsLS=== null){
        tweets = [];
    }else {
        tweets = JSON.parse ( tweetsLS );
    }
    return tweets;
}
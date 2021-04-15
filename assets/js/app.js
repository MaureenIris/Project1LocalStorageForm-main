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
}

//Removes the tweets from the DOM
function removeTweet(e){
    if(e.target.classList.contains('remove-tweet')){
        e.target.parentElement.remove();
    }
}
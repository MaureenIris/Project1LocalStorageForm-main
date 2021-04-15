//Variables


//EventListeners
eventListeners();

function eventListeners(){
    //Form Submission
    document.querySelector('#form').addEventListener('submit', newTweet);

}

//Functions

function newTweet(e){ 
    e.preventDefault();

    console.log('Form Submitted');
}
{/* <section class="posts">
<h3>#Community_Posts</h3>
<section class="posts-container">
    <!-- <div class="post">
        <div class="user-name">Mai Mohammed</div>
        <div class="post-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium rerum,
            odit
            in praesentium aliquid facilis repellendus soluta nemo iste magni accusamus, accusantium aut eum
            veritatis ipsum laboriosam maiores itaque corrupti.</div>
        <div class="post-time">2022/24/8</div>
    </div> -->
</section>
</section>
 */}
//  data => renderComments(answersContainer, data)
const answersContainer = document.querySelector('.answers-container');
const questionContainer = document.querySelector('#question-container')
const queryString = window.location;
// console.log(queryString.split('/'));
const fetchAnswers = ( questionId ) => {
  fetchUrl('GET', `/question/${questionId}/answers`)
  .then(data => renderAnswers(answersContainer, data))
  .catch(err => console.log(err));
}


const renderQuestion = (question) = {

    const { username, date, content,category } = question;

    const post = document.createElement('div');
    post.className = 'post';

    const userName = document.createElement('div');
    userName.className = 'user-name';
    userName.textContent = username;
    
    const Category = document.createElement('div');
    Category.className = 'user-name';
    Category.textContent = category;
    

    const postText = document.createElement('div');
    postText.className = 'post-text';
    postText.textContent = content;

    const postTime = document.createElement('div');
    postTime.className = 'post-time';
    postTime.textContent = date;
    const upperContainer=document.createElement('div');
    upperContainer.setAttribute('style','display:flex;justify-content: space-between;');
    upperContainer.appendChild(userName);
    upperContainer.appendChild(Category);
   
    questionContainer.appendChild(upperContainer);
    questionContainer.appendChild(postText);
    questionContainer.appendChild(postTime);
    questionContainer.appendChild(postTime);
   

};

const renderAnswers = (answersContainer, answers) => {
    console.log(answers);
    answers.forEach(answer => {
        const boxAnswer = answersContainer.createAppendElement('div', {className: 'box-ans'});

        const votes = boxAnswer.createAppendElement('div', { className: 'votes' });
        const increaseVoteLink = votes.createAppendElement('a', { href: '#'});
        const increaseVoteIcon = increaseVoteLink.createAppendElement('i', { className: 'increase fa-solid fa-angle-up'});
        const voteNumber = votes.createAppendElement('span', { className: 'number', textContent: answer.votes });
        const decreaseVoteLink = votes.createAppendElement('a', { href: '#'});
        const decreaseVoteIcon = decreaseVoteLink.createAppendElement('i', { className: 'decrease fa-solid fa-angle-down'});

        const details = boxAnswer.createAppendElement('div', { className: 'details'});
        const answerContent = details.createAppendElement('p', { textContent: answer.content, className: 'content' });
        const flex = details.createAppendElement('div', { className:'flex' });
        const usernameSpan = flex.createAppendElement('span', { className: 'username', textContent: answer.username });
        const dateSpan = flex.createAppendElement('span', { className: 'date', textContent: answer.date });
       
    });

};

{
    /* <div class="box-ans">
        <div class='details'>
            <p class='content'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates libero veritatis doloremque, 
                consequuntur tempore quos suscipit voluptate maxime quidem. Delectus.
            </p>
            <div class="flex">
                <span class='username'>userName</span>
                <span class='date'>23/10/2001</span>
            </div>
        </div>

        <div class='votes'>
            <i class='increase fa-solid fa-angle-up'></i>
            <span class='number'>20</span>
            <i class='decrease fa-solid fa-angle-down'></i>
        </div>
    </div>

</div> */
}
fetchAnswers(2);

// init GitHub class
const github = new GitHub;

// Search input
const srchUser = document.getElementById('searchUser');
srchUser.addEventListener('keyup', (e) => {
    const userText = e.target.value;

    if (userText !== '') {
        //make http call
        github.getUser(userText)
            .then(data => {
                if (data.profile.message === 'Not Found') {

                } else {

                }
            })
    } else {
        // clear profile
    }
});
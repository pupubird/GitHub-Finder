// init class
const github = new GitHub;
const ui = new UI;
// Search input
const srchUser = document.getElementById('searchUser');
srchUser.addEventListener('keyup', (e) => {
    const userText = e.target.value;

    if (userText !== '') {
        //make http call
        github.getUser(userText)
            .then(data => {
                if (data.profile.message === 'Not Found') {
                    ui.showAlert('User not found', 'alert alert-danger');
                } else {
                    ui.showProfile(data.profile);
                    ui.showRepo(data.repo);
                }
            })
    } else {
        // clear profile
        ui.clearProfile();
    }
});
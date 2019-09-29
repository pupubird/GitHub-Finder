class GitHub {
    constructor() {
        this.client_id = 'fc2d9a85353f426527d8';
        this.client_secret = '92a983f82b213fb633f3df12324f54c582fc65e6';
        this.reposCount = 5;
        this.reposSort = 'created:asc';
    }

    async getUser(user) {
        const profileResponse = await fetch(`
        https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}
        `);
        const repoResponse = await fetch(`
        https://api.github.com/users/${user}/repos?per_page=${this.reposCount}&sort=${this.reposSort}&client_id=${this.client_id}&client_secret=${this.client_secret}
        `);

        const profile = await profileResponse.json();
        const repo = await repoResponse.json();
        return {
            profile,
            repo
        }
    }
}
// Mengambil elemen-elemen DOM
const searchForm = document.getElementById('searchForm');
const usernameInput = document.getElementById('usernameInput');

const loadingEl = document.getElementById('loading');
const errorMessageEl = document.getElementById('errorMessage');
const profileCardEl = document.getElementById('profileCard');

const avatarEl = document.getElementById('avatar');
const nameEl = document.getElementById('name');
const bioEl = document.getElementById('bio');
const publicReposEl = document.getElementById('publicRepos');
const followersEl = document.getElementById('followers');
const followingEl = document.getElementById('following');
const profileLinkEl = document.getElementById('profileLink');

searchForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const username = usernameInput.value.trim();
    if (username !== '') {
        fetchGitHubUser(username);
    }
});

function fetchGitHubUser(username) {
    loadingEl.classList.remove('hidden');
    errorMessageEl.classList.add('hidden');
    profileCardEl.classList.add('hidden');

    fetch(`https://api.github.com/users/${username}`)
        .then(response => {
            if (response.status === 404) {
                throw new Error('User tidak ditemukan');
            }
            if (!response.ok) {
                throw new Error('Terjadi kesalahan saat mengambil data');
            }
            return response.json();
        })
        .then(data => {
            // Memasukkan data API ke elemen HTML termasuk Followers & Following
            avatarEl.src = data.avatar_url;
            nameEl.textContent = data.name || data.login;
            bioEl.textContent = data.bio || 'Tidak ada bio yang tersedia.';
            publicReposEl.textContent = data.public_repos;
            followersEl.textContent = data.followers;
            followingEl.textContent = data.following;
            profileLinkEl.href = data.html_url;

            loadingEl.classList.add('hidden');
            profileCardEl.classList.remove('hidden');
        })
        .catch(error => {
            loadingEl.classList.add('hidden');
            if (error.message === 'User tidak ditemukan') {
                errorMessageEl.textContent = 'User tidak ditemukan!';
            } else {
                errorMessageEl.textContent = 'Gagal memuat data. Coba lagi nanti.';
            }
            errorMessageEl.classList.remove('hidden');
        });
}
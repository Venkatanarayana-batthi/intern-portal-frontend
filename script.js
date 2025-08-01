const apiBase = 'https://intern-portal-backend-9awn.onrender.com/api';

if (document.getElementById('intern-name')) {
    fetch(`${apiBase}/user`)
        .then(res => res.json())
        .then(data => {
            document.getElementById('intern-name').textContent = data.name;
            document.getElementById('referral-code').textContent = data.referralCode;
            document.getElementById('donations').textContent = data.donations;
        });
}

if (document.getElementById('leaderboard-body')) {
    fetch(`${apiBase}/leaderboard`)
        .then(res => res.json())
        .then(data => {
            const tbody = document.getElementById('leaderboard-body');
            data.forEach(entry => {
                const row = `<tr><td>${entry.name}</td><td>₹${entry.donations}</td></tr>`;
                tbody.insertAdjacentHTML('beforeend', row);
            });
        });
}
const addFriendBtn = document.getElementById('add-friend-btn');
const friendNameInput = document.getElementById('friend-name');

const friendsList = document.getElementById('friends-list');

let friends = [];

addFriendBtn.addEventListener('click', function() {
  const friendName = friendNameInput.value;

  if (friendName !== '') {
    friends.push({ name: friendName, votes: 0 });

    friendNameInput.value = '';

    updateFriendsList();
  }
});

function updateFriendsList() {
  friendsList.innerHTML = '';

  if (friends.length === 0) {
    const noFriends = document.createElement('li');
    noFriends.textContent = 'No friends added yet';
    friendsList.appendChild(noFriends);
  } else {
    for (let i = 0; i < friends.length; i++) {
      const friend = document.createElement('li');
      friend.textContent = friends[i].name;

      friend.addEventListener('click', function() {
        friends[i].votes++;

        updateFriendsList();
      });

      const voteCount = document.createElement('span');
      voteCount.textContent = ` (${friends[i].votes})`;
      friend.appendChild(voteCount);

      friendsList.appendChild(friend);
    }
  }
}
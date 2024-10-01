window.addEventListener("load", function () {
    this.fetch('data.json')
        .then(response => response.json())

        .then(data => {
            let friendArray = data.friend;
            let randomNumber = Math.floor(Math.random() * friendArray.length);
            let nameElement = document.getElementById("friend-name");
            nameElement.innerHTML = data.friend[randomNumber].Name;
        })

    let button = document.getElementById("friend-button");
    button.addEventListener("click", function () {
        let inputText = document.getElementById("friend-input").value.toLowerCase();


        let API_URL = "data.json" ;
        fetch(API_URL)
            .then(response => response.json())
            .then(data => {
                let friendArray = data.friend;
                let foundFriend = friendArray.find(friend => friend.Name.toLowerCase() === inputText);

                if (foundFriend) {
                    let resultElement = document.getElementById("friend-result");
                    resultElement.innerHTML = `
                <p>Name: ${foundFriend.Name}</p>
                <p>Age: ${foundFriend.Age}</p>
                <p>Pronouns: ${foundFriend.Pronouns}</p>
                <p>From: ${foundFriend.From}</p>
                <p>Friendship Motto: ${foundFriend.FriendshipMotto}</p>
                <p>Friendship Preferences: ${foundFriend.FriendshipPreferences}</p>
                <p>Your Friend:${foundFriend.ProfileImage}</p>
            `;

                } else {
                    console.log("No matching friend found.");
                    let resultElement = document.getElementById("friend-result");
                    resultElement.innerHTML = `<p>No matching friend found for "${inputText}".</p>`;
                }
            })

    })

})


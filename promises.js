// Creating a Promise
const myPromise = new Promise((resolve, reject) => {
    const success = true;
    
    setTimeout(() => {
        if (success) {
            resolve("It worked!");
        } else {
            reject("Something went wrong");
        }
    }, 1000);
});

// Using a Promise
myPromise
    .then(result => {
        console.log("Success:", result);
    })
    .catch(error => {
        console.log("Error:", error);
    });


    function getUserData(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userId > 0) {
                resolve({ id: userId, name: "John" });
            } else {
                reject("Invalid user ID");
            }
        }, 1000);
    });
}

// Now do the same for getUserPosts and getPostComments
function getUserPosts(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userId > 0) {
                resolve([
                    { id: 1, title: "Post 1" },
                    { id: 2, title: "Post 2" }
                ]);
            } else {
                reject("Invalid user ID");
            }
        }, 1000);
    });
}

function getPostComments(postId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (postId > 0) {
                resolve([
                    { id: 1, text: "Great post!" },
                    { id: 2, text: "Thanks for sharing" }
                ]);
            } else {
                reject("Invalid post ID");
            }
        }, 1000);
    });
}


// After refactoring to Promises:
getUserData(1)
    .then(user => {
        console.log("User:", user);
        return getUserPosts(user.id);
    })
    .then(posts => {
        console.log("Posts:", posts);
        return getPostComments(posts[0].id);
    })
    .then(comments => {
        console.log("Comments:", comments);
    })
    .catch(error => {
        console.error("Error:", error);
    });


    // Run multiple promises in parallel
const promise1 = getUserData(1);
const promise2 = getUserData(2);
const promise3 = getUserData(3);

Promise.all([promise1, promise2, promise3])
    .then(results => {
        console.log("All users:", results);
        // results is an array [user1, user2, user3]
    })
    .catch(error => {
        // If ANY promise fails, this runs
        console.error("One failed:", error);
    });

    //Fetch data for 3 uses simultaneousli and display all of them at once


    Promise.all([getUserData(1), getUserData(2), getUserData(3)])
    .then(users => {
        console.log("All users:", users);
    })
    .catch(error => {
        console.error("Error fetching users:", error);
    }); 

    
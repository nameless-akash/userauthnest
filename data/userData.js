const userData = [
    {
        id: "1",
        username: "user1",
        email: "user1@example.com",
        role: "ADMIN",
        profile: {
            userId: "1",
            bio: "User 1's bio",
            visibility: "PUBLIC"
        }
    },
    {
        id: "2",
        username: "user2",
        email: "user2@example.com",
        role: "NORMAL",
        profile: {
            userId: "2",
            bio: "User 2's bio",
            visibility: "PRIVATE"
        }
    },
    {
        id: "3",
        username: "user3",
        email: "user3@example.com",
        role: "NORMAL",
        profile: {
            userId: "3",
            bio: "User 3's bio",
            visibility: "PUBLIC"
        }
    }
];

module.exports = userData;

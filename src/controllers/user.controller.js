const users = [
    {
        fullname: "test uno",
        username: "test",
        email: "test@test.com",
        password: "testuno"
    },
    {
        fullname: "test dos",
        username: "test2",
        email: "test2@test.com",
        password: "testdos"
    }
];

export const userList = (req, res) => {
    res.send(users)
};

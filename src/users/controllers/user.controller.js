export const users = [
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

export const searchUser = (req, res) => {
    const {query} = req;
    
    const user = users.filter((user) => user.username === query.username);

    if(user.length === 0){
        return res.status(404).json({
            error: "user not found"
        })
    }

    res.send(user);
};

export const createUser = (req, res) => {

    /* if(userName.length > 0){
        return res.status(406).json({
            error: "Username already exists."
        })
    };
    if (userEmail.length > 0) {
        return res.status(406).json({
            error: "User email already exists."ßß
        })
    }; */
    
    res.status(201).json({
        ok: true,
        message: "User is created."
    });
};

/* export const login = () => {
    const {email, password} = req.body;

} */
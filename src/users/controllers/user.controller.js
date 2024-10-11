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

export const listUser = (req, res) => {
    const {query} = req;
    
    const user = users.filter((user) => user.username === query.username);

    if(user.length === 0){
        return res.status(404).json({
            error: "user not found"
        })
    }

    res.send(user);
};

export const verifyUser = (req, res) => {
    const {query} = req;
    
    const userName = users.filter((user) => user.username === query.username);
    const userEmail = users.filter((user) => user.email === query.email);

    if(userName.length > 0){
        return res.status(406).json({
            error: "User name already exists."
        })
    } 
    if (userEmail.length > 0) {
        return res.status(406).json({
            error: "User email already exists."
        })
    }
    
    users.push(query)
    console.log('----...User created...----')
    console.log(query)
    res.sendStatus(201);
};
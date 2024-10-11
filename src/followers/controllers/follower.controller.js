export const followersHistoric = [
    {
        username: "test",
        follower: "test2"
    },
    /* {
        username: "test2",
        follower: "test"
    } */
];

export const followOne = (req, res) => {
    const {query} = req;

    const user = users.filter((user) => user.username === query.username);
    if(user.length === 0){
        return res.status(403).json({
            error: "User doesn't exist."
        })
    };

    const follower = users.filter((user) => user.username === query.follower);
    if(follower.length === 0){
        return res.status(403).json({
            error: "Follower doesn't exist."
        })
    };

    const alreadyFollows = followersHistoric.filter((follow) => follow.username === query.username && follow.follower === query.follower)
    if(alreadyFollows.length > 0){
        return res.status(400).json({
            error: "User already follows..."
        })
    };

    followersHistoric.push(query);
    console.log(query);
    console.log('----...Follow History...----');
    console.log(followersHistoric);

    res.sendStatus(201);
};

export const getFollowers = (req, res) => {
    const {query} = req;

    const user = users.filter((user) => user.username === query.username);
    if(user.length === 0){
        return res.status(403).json({
            error: "User doesn't exist."
        })
    };

    const followerNone = followersHistoric.filter((user) => user.username === query.username);
    if(followerNone.length === 0){
        return res.status(403).json({
            error: "User has no followers..."
        })
    };

    const userFollowers = followersHistoric.filter((followers) => followers.username === query.username);

    res.send(userFollowers);
};
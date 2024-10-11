import { users } from "./user.controller.js";

const tweets = [
    {
        fullname: "test uno",
        username: "test",
        description: "Este es el primer post de la cuenta test",
        date: "10/06/2024  9:00 PM"
    },
    {
        fullname: "test uno",
        username: "test",
        description: "Este es el segundo post de la cuenta test",
        date: "10/08/2024  9:00 AM"
    },{
        fullname: "test dos",
        username: "test2",
        description: "Este es el primer post de la cuenta test2",
        date: "10/06/2024  9:00 PM"
    },
    {
        fullname: "test dos",
        username: "test2",
        description: "Este es el segundo post de la cuenta test2",
        date: "10/08/2024  9:00 AM"
    }
];

export const listTweets = (req, res) => {
    const {query} = req;
    
    const user = users.filter((user) => user.username === query.username);
    if(user.length === 0){
        return res.status(403).json({
            error: "User doesn't exist."
        })
    };

    const userTweets = tweets.filter((tweets) => tweets.username === query.username);
    if(userTweets.length === 0){
        return res.status(404).json({
            error: "User hasn't posted anything yet..."
        })
    };

    res.send(userTweets);
};

export const saveTweet = (req, res) => {
    const {query} = req;

    const user = users.filter((user) => user.username === query.username);
    if(user.length === 0){
        return res.status(403).json({
            error: "User doesn't exist."
        })
    };

    tweets.push(query);
    console.log('----...Tweet sucessful...----');
    console.log(query);
    console.log('----...tweets...----');
    console.log(tweets);

    res.sendStatus(201);
};
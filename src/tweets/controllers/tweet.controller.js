import Tweet from "../model/tweet.model.js";


export const getTweets = async (req, res) => {
    const tweets = await Tweet.find();
    res.json(tweets);
};

export const saveTweet = async (req, res) => {
    const { description } = req.body;

    const newTweet = new Tweet({
        description,
        user: req.user.id
    });

    await newTweet.save();

    res.status(201).json({
        ok: true,
        message: "Tweet saved."
    });
};

export const getTweet = async (req, res) => {
    const tweet = await Tweet.findById(req.params.id)
    if(!tweet) {
        return res.status(404).json({
            ok: false,
            message: "Tweet not found."
        })
    }
    res.status(200).json({
        ok:true,
        tweet
    })
};

export const deleteTweet = async (req, res) => {
    const tweet = await Tweet.findByIdAndDelete(req.params.id)
    if(!tweet) {
        return res.status(404).json({
            ok: false,
            message: "Tweet not found."
        })
    }
    res.status(200).json({
        ok:true,
        message: "Tweet deleted"
    })
};
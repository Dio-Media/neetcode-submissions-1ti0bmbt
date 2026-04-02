class Twitter {
    constructor() {
        this.tweets = [];
        this.following = new Map();
    }

    /**
     * @param {number} userId
     * @param {number} tweetId
     * @return {void}
     */
    postTweet(userId, tweetId) {
        this.tweets.push({ userId, tweetId})
    }

    /**
     * @param {number} userId
     * @return {number[]}
     */
    getNewsFeed(userId) {
        const feed = [];
        let friend = this.following.get(userId) || new Set();
        for(let i = this.tweets.length - 1; i >= 0; i--){
            let current = this.tweets[i];
            if(friend.has(current.userId) || current.userId === userId){
                feed.push(current.tweetId);
            }
            if(feed.length >= 10 ){ break; }
        }

        return feed;
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    follow(followerId, followeeId) {
        if(!this.following.has(followerId)){
            this.following.set(followerId, new Set());
        }
        this.following.get(followerId).add(followeeId);
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    unfollow(followerId, followeeId) {
        if(this.following.has(followerId)){
            this.following.get(followerId).delete(followeeId);
        }
    }
}

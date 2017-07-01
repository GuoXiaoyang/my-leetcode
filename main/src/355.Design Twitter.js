/**
 * Created by gxy on 2017/6/5.
 */
/****************************************************************
 355. Design Twitter
 Design a simplified version of Twitter where users can post tweets,
 follow/unfollow another user and is able to see the 10 most recent tweets in the
 user's news feed.
 Your design should support the following methods:

 postTweet(userId, tweetId): Compose a new tweet.

 getNewsFeed(userId): Retrieve the 10 most recent tweet ids in the user's news feed.
 Each item in the news feed must be posted by users who the user followed or
 by the user herself. Tweets must be ordered from most recent to least recent.

 follow(followerId, followeeId): Follower follows a followee.

 unfollow(followerId, followeeId): Follower unfollows a followee.

 Example:
 Twitter twitter = new Twitter();

 // User 1 posts a new tweet (id = 5).
 twitter.postTweet(1, 5);

 // User 1's news feed should return a list with 1 tweet id -> [5].
 twitter.getNewsFeed(1);

 // User 1 follows user 2.
 twitter.follow(1, 2);

 // User 2 posts a new tweet (id = 6).
 twitter.postTweet(2, 6);

 // User 1's news feed should return a list with 2 tweet ids -> [6, 5].
 // Tweet id 6 should precede tweet id 5 because it is posted after tweet id 5.
 twitter.getNewsFeed(1);

 // User 1 unfollows user 2.
 twitter.unfollow(1, 2);

 // User 1's news feed should return a list with 1 tweet id -> [5],
 // since user 1 is no longer following user 2.
 twitter.getNewsFeed(1);
****************************************************************/

/**
 * Initialize your data structure here.
 */
var Twitter = function() {

  this.followerMap={};
  this.followeeMap={};
  this.twitterMap={};
};

/**
 * Compose a new tweet.
 * @param {number} userId
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function(userId, tweetId) {
  if(this.twitterMap[userId]==undefined) this.twitterMap[userId]=[];
  if(this.twitterMap[userId].length==10) this.twitterMap[userId].shift();
  this.twitterMap[userId].push(tweetId);
  if(this.followeeMap[userId] && this.followeeMap[userId].length>0) {
    for(var i=0;i<this.followeeMap[userId].length;i++) {
      var id=this.followeeMap[userId][i];
      if(this.twitterMap[id]==undefined) this.twitterMap[id]=[];
      if(this.twitterMap[id].length==10) this.twitterMap[id].shift();
      this.twitterMap[id].push(tweetId);
    }
  }
};

/**
 * Retrieve the 10 most recent tweet ids in the user's news feed.
 * Each item in the news feed must be posted by users who the user followed or
 * by the user herself. Tweets must be ordered from most recent to least recent.
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function(userId) {
  return this.twitterMap[userId];
};

/**
 * Follower follows a followee. If the operation is invalid, it should be a no-op.
 * @param {number} followerId
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function(followerId, followeeId) {
  if(this.followerMap[followerId]==undefined) this.followerMap[followerId]=[];
  if(this.followerMap[followerId].indexOf(followeeId)==-1) {
    this.followerMap[followerId].push(followeeId);
  }
  if(this.followeeMap[followeeId]==undefined) this.followeeMap[followeeId]=[];
  if(this.followeeMap[followeeId].indexOf(followerId)==-1) {
    this.followeeMap[followeeId].push(followerId);
  }
};

/**
 * Follower unfollows a followee. If the operation is invalid, it should be a no-op.
 * @param {number} followerId
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function(followerId, followeeId) {
  if(this.followerMap[followerId] && this.followerMap[followerId].indexOf(followeeId)!=-1) {
    var index=this.followerMap[followerId].indexOf(followeeId);
    this.followerMap[followerId].splice(index,1);
  }
  if(this.followeeMap[followeeId] && this.followeeMap[followeeId].indexOf(followerId)!=-1) {
    index=this.followeeMap[followeeId].indexOf(followerId);
    this.followeeMap[followeeId].splice(index,1);
  }
  if(this.followeeMap[userId] && this.followeeMap[userId].length>0) {
    for(var i=0;i<this.followeeMap[userId].length;i++) {
      var id=this.followeeMap[userId][i];
      if(this.twitterMap[id]==undefined) this.twitterMap[id]=[];
      if(this.twitterMap[id].length==10) this.twitterMap[id].shift();
      this.twitterMap[id].push(tweetId);
    }
  }
};

/**
 * Your Twitter object will be instantiated and called as such:
 * var obj = Object.create(Twitter).createNew()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */

//test
var twitter=new Twitter();
// User 1 posts a new tweet (id = 5).
twitter.postTweet(1, 5);

// User 1's news feed should return a list with 1 tweet id -> [5].
var res=twitter.getNewsFeed(1);
console.log("res:",res);
// User 1 follows user 2.
twitter.follow(1, 2);

console.log("twitter.followerMap,twitter.followeeMap:",twitter.followerMap,twitter.followeeMap);

// User 2 posts a new tweet (id = 6).
twitter.postTweet(2, 6);
// User 1's news feed should return a list with 2 tweet ids -> [6, 5].
// Tweet id 6 should precede tweet id 5 because it is posted after tweet id 5.
twitter.getNewsFeed(1);
console.log("res:",res);
// User 1 unfollows user 2.
twitter.unfollow(1, 2);
console.log("twitter.followerMap,twitter.followeeMap:",twitter.followerMap,twitter.followeeMap);
// User 1's news feed should return a list with 1 tweet id -> [5],
// since user 1 is no longer following user 2.
twitter.getNewsFeed(1);
console.log("res:",res);
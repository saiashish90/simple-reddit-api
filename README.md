# simple-reddit-api
_Simple client for the reddit public api. (No auth needed)_

### Get it from npm

`npm i simple-reddit --save`

## Import
#
```js
const Reddit = require("simple-reddit");
```
or just import individual functions.

```js
const {topPost} = require("simple-reddit");
```
#
## Usage
### Basic examples:
#### Get top post from reddit.
```js 
RedditSimple.topPost(options).then(res => {
    console.log(res);
})
```
&nbsp;
#### Get new post from reddit.
```js 
RedditSimple.newPost(options).then(res => {
    console.log(res);
})
```
&nbsp;
#### Get random post from reddit.
```js 
RedditSimple.randomPost(options).then(res => {
    console.log(res);
})
```
&nbsp;
#### Search if a subreddit exists.

```js 
RedditSimple.searchSubreddits('dankmemes').then(res => {
    console.log(res);
})
```
- Args: Name of subreddit to be searched. (Required)

&nbsp;
#### Get popular subreddits.
```js 
RedditSimple.popularSubreddits(count).then(res => {
    console.log(res);
})
```
- Args: Number of subreddits to be displayed. (Defaults to 1)
#
## Options
### There are 4 options that you can pass.
| Name      | Value                       | Description                                                      | Default     |
|-----------|-----------------------------|------------------------------------------------------------------|-------------|
| subreddit | name of subreddit           | Subreddit to fetch the post.                                     | r/all       |
| count     | Number of posts to retrieve | Retrieves n number of posts.                                     | 1 (max:100) |
| is_meme   | true/false                  | If you want to get a meme.  Ignores subreddit option if true.    | false       |
| fulldata  | true/false                  | Retrieve essential post data or  everything reddit has to offer. | false       |
#
## Values returned from the method
### Post details
```js
{
    status:200/404, //404 if any error occurs
    posts:[ //empty incase of error/no subreddit
        {
            data: {
		        title: string,
		        author: string,
		        subreddit_name_prefixed: string,
		        ups: number,
		        total_awards_received: number,
		        url: string,
	        }
        } //Incase of fulldata:true, posts array has the raw post object returned by reddit
    ]
}
```
### Search subreddits
```js
{
	status: 200/404, //404 if any error occurs
	subreddit: subreddit,
	url: `${api}${subreddit}`
}
``` 
### List subreddits
```js
{
    status:200/400, //404 if any error occurs
    subreddits:[  //array empty in case of error
        {
            data: {
		        display_name_prefixed: string,
		        subscribers: string,
		        description: string,
		        url: string
            }
        }
    ]
}
```
#

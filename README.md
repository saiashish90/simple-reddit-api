# simple-reddit
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
RedditSimple.TopPost(options).then(res => {
    console.log(res);
})
```
#
## Options
### There are 4 options that you can pass.
| Name      | Value                       | Description                                                      | Default     |
|-----------|-----------------------------|------------------------------------------------------------------|-------------|
| subreddit | name of subreddit           | Subreddit to fetch the post.                                     | r/all       |
| count     | Number of posts to retrieve | Retrieves n number of posts.                                     | 1 (max:100) |
| is_meme   | true/false                  | If you want to get a meme.  Ignores subreddit option if true.    | false       |
| fulldata  | true/false                  | Retrieve essential post data or  everything reddit has to offer. | false       |
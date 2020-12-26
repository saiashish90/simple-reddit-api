import fetch from 'node-fetch'
interface Options{
    subreddit?:string,
    is_meme?:boolean,
    fulldata?:boolean
}
export async function topPost({subreddit='all',is_meme=false,fulldata=false}:Options={}){
    const api:string = 'https://www.reddit.com/r/'
    if(is_meme) subreddit = 'memes'
    try{
    const response = await fetch(`${api}${subreddit}.json?limit=10`)
    const json = await response.json()
    const posts = json.data.children.sort((a:any,b:any)=>(a.data.ups>b.data.ups)?-1:(a.data.ups<b.data.ups)?1:0)
    if(fulldata){
        const post = posts[0]
        return post;
    } 
    else{
        const post = (({data:{title,author,subreddit_name_prefixed, ups,total_awards_received,url}})=>({data:{title,author,subreddit_name_prefixed, ups,total_awards_received,url}}))(posts[0])
        return post
    }
    }
    catch(error){
        return "subreddit doesnt exist"   
    }
} 
topPost({subreddit:'dankmemes',is_meme:true,fulldata:false}).then(console.log)


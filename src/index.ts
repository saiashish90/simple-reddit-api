import fetch from 'node-fetch'
interface Options{
    subreddit?:string,
    count?:number,
    is_meme?:boolean,
    fulldata?:boolean
}
interface Postessentials{
    data:{
        title:string,
        author:string,
        subreddit_name_prefixed:string, 
        ups:number,total_awards_received:number,
        url:string
    }
}
export async function topPost({subreddit='all',count=1,is_meme=false,fulldata=false}:Options={}){
    const api:string = 'https://www.reddit.com/r/'
    if(is_meme) subreddit = 'memes'
    try{
    const response = await fetch(`${api}${subreddit}.json?limit=100`)
    const json = await response.json()
    const posts = json.data.children.sort((a:any,b:any)=>(a.data.ups>b.data.ups)?-1:(a.data.ups<b.data.ups)?1:0)
    if(fulldata){
        const post = posts.slice(0,count)
        return post;
    } 
    else{
        const func = (({data:{title,author,subreddit_name_prefixed, ups,total_awards_received,url}}:Postessentials)=>({data:{title,author,subreddit_name_prefixed, ups,total_awards_received,url}}))
        const newposts = posts.slice(0,count).map(func)
        return newposts
    }
    }
    catch(error){
        return "subreddit doesnt exist"   
    }
} 



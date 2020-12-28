import fetch from 'node-fetch'
interface Subreddit{
    data:
        {
            display_name_prefixed:string,
            subscribers:string,
            description:string,
            url:string
        }
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
export async function topPost(options={subreddit:'all',count:1,is_meme:false,fulldata:false}){
    const api:string = 'https://www.reddit.com/r/'
    if(options.is_meme) options.subreddit = 'memes'
    try{
    const response = await fetch(`${api}${options.subreddit}/top.json?limit=100`)
    const json = await response.json()
    const posts = json.data.children
    if(options.fulldata){
        const post = posts.slice(0,options.count)
        return post;
    } 
    else{
        const func = (({data:{title,author,subreddit_name_prefixed, ups,total_awards_received,url}}:Postessentials)=>({data:{title,author,subreddit_name_prefixed, ups,total_awards_received,url}}))
        const newposts = posts.slice(0,options.count).map(func)
        return newposts
    }
    }
    catch(error){
        return "subreddit doesnt exist"   
    }
} 
export async function newPost(options={subreddit:'all',count:1,is_meme:false,fulldata:false}){
    const api:string = 'https://www.reddit.com/r/'
    if(options.is_meme) options.subreddit = 'memes'
    try{
    const response = await fetch(`${api}${options.subreddit}/new.json?limit=100`)
    const json = await response.json()
    const posts = json.data.children
    if(options.fulldata){
        const post = posts.slice(0,options.count)
        return post;
    } 
    else{
        const func = (({data:{title,author,subreddit_name_prefixed, ups,total_awards_received,url}}:Postessentials)=>({data:{title,author,subreddit_name_prefixed, ups,total_awards_received,url}}))
        const newposts = posts.slice(0,options.count).map(func)
        return newposts
    }
    }
    catch(error){
        return "subreddit doesnt exist"   
    }
} 
export async function randomPost(options={subreddit:'all',count:1,is_meme:false,fulldata:false}){
    const api:string = 'https://www.reddit.com/r/'
    if(options.is_meme) options.subreddit = 'memes'
    try{
    const response = await fetch(`${api}${options.subreddit}.json?limit=100`)
    const json = await response.json()
    const posts = json.data.children
    let shuffled = posts.map((a:any) => ({sort: Math.random(), value: a})).sort((a:any, b:any) => a.sort - b.sort).map((a:any) => a.value)
    if(options.fulldata){
        const post = shuffled.slice(0,options.count)
        return post;
    } 
    else{
        const func = (({data:{title,author,subreddit_name_prefixed, ups,total_awards_received,url}}:Postessentials)=>({data:{title,author,subreddit_name_prefixed, ups,total_awards_received,url}}))
        const newposts = shuffled.slice(0,options.count).map(func)
        return newposts
    }
    }
    catch(error){
        return "subreddit doesnt exist"   
    }
} 
export async function searchSubreddits(subreddit:string) {
    const api:string = 'https://www.reddit.com/r/'
    const response = await fetch(`${api}${subreddit}.json?limit=0`)
    console.log(`${api}${subreddit}.json`);
    const json = await response.json()
    if(json.data.children.length) return {
        "subreddit":subreddit,
        "url":`${api}${subreddit}`
    }
    return {
        "subreddit":undefined,
        "url": undefined
    }
}
export async function popularSubreddits(count:number = 1) {
    const api = "https://www.reddit.com/subreddits/.json?limit=100"
    const response = await fetch(api)
    const json = await response.json()
    const func = (({data:{display_name_prefixed,subscribers,description}}:Subreddit)=>({data:{display_name_prefixed,subscribers,description}}))
    const subreddits = json.data.children.slice(0,count).map(func).map((i: Subreddit)=>({data:{...i.data,url:`https://www.reddit.com/${i.data.display_name_prefixed}`}}))
    return subreddits;
}
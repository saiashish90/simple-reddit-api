export declare function topPost(options?: {
    subreddit: string;
    count: number;
    is_meme: boolean;
    fulldata: boolean;
}): Promise<any>;
export declare function newPost(options?: {
    subreddit: string;
    count: number;
    is_meme: boolean;
    fulldata: boolean;
}): Promise<any>;
export declare function randomPost(options?: {
    subreddit: string;
    count: number;
    is_meme: boolean;
    fulldata: boolean;
}): Promise<any>;
export declare function searchSubreddits(subreddit: string): Promise<{
    subreddit: string;
    url: string;
} | {
    subreddit: undefined;
    url: undefined;
}>;
export declare function popularSubreddits(count?: number): Promise<any>;
//# sourceMappingURL=index.d.ts.map
interface Options {
    subreddit?: string;
    count?: number;
    is_meme?: boolean;
    fulldata?: boolean;
}
export declare function topPost({ subreddit, count, is_meme, fulldata }?: Options): Promise<any>;
export declare function newPost({ subreddit, count, is_meme, fulldata }?: Options): Promise<any>;
export declare function randomPost({ subreddit, count, is_meme, fulldata }?: Options): Promise<any>;
export declare function searchSubreddits(subreddit: string): Promise<{
    subreddit: string;
    url: string;
} | {
    subreddit: undefined;
    url: undefined;
}>;
export declare function popularSubreddits(count?: number): Promise<any>;
export {};
//# sourceMappingURL=index.d.ts.map
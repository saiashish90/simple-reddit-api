"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.popularSubreddits = exports.searchSubreddits = exports.randomPost = exports.newPost = exports.topPost = void 0;
var node_fetch_1 = __importDefault(require("node-fetch"));
function topPost(_a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.subreddit, subreddit = _c === void 0 ? 'all' : _c, _d = _b.count, count = _d === void 0 ? 1 : _d, _e = _b.is_meme, is_meme = _e === void 0 ? false : _e, _f = _b.fulldata, fulldata = _f === void 0 ? false : _f;
    return __awaiter(this, void 0, void 0, function () {
        var api, response, json, posts, post, func, newposts, error_1;
        return __generator(this, function (_g) {
            switch (_g.label) {
                case 0:
                    api = 'https://www.reddit.com/r/';
                    if (is_meme)
                        subreddit = 'memes';
                    _g.label = 1;
                case 1:
                    _g.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, node_fetch_1.default("" + api + subreddit + "/top.json?limit=100")];
                case 2:
                    response = _g.sent();
                    return [4 /*yield*/, response.json()];
                case 3:
                    json = _g.sent();
                    posts = json.data.children;
                    if (!posts.length)
                        throw 'noposts';
                    if (fulldata) {
                        post = { status: 200, posts: posts.slice(0, count) };
                        return [2 /*return*/, post];
                    }
                    else {
                        func = function (_a) {
                            var _b = _a.data, title = _b.title, author = _b.author, subreddit_name_prefixed = _b.subreddit_name_prefixed, ups = _b.ups, total_awards_received = _b.total_awards_received, url = _b.url;
                            return ({
                                data: { title: title, author: author, subreddit_name_prefixed: subreddit_name_prefixed, ups: ups, total_awards_received: total_awards_received, url: url }
                            });
                        };
                        newposts = { status: 200, posts: posts.slice(0, count).map(func) };
                        return [2 /*return*/, newposts];
                    }
                    return [3 /*break*/, 5];
                case 4:
                    error_1 = _g.sent();
                    return [2 /*return*/, { status: 404, posts: [] }];
                case 5: return [2 /*return*/];
            }
        });
    });
}
exports.topPost = topPost;
function newPost(_a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.subreddit, subreddit = _c === void 0 ? 'all' : _c, _d = _b.count, count = _d === void 0 ? 1 : _d, _e = _b.is_meme, is_meme = _e === void 0 ? false : _e, _f = _b.fulldata, fulldata = _f === void 0 ? false : _f;
    return __awaiter(this, void 0, void 0, function () {
        var api, response, json, posts, post, func, newposts, error_2;
        return __generator(this, function (_g) {
            switch (_g.label) {
                case 0:
                    api = 'https://www.reddit.com/r/';
                    if (is_meme)
                        subreddit = 'memes';
                    _g.label = 1;
                case 1:
                    _g.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, node_fetch_1.default("" + api + subreddit + "/new.json?limit=100")];
                case 2:
                    response = _g.sent();
                    return [4 /*yield*/, response.json()];
                case 3:
                    json = _g.sent();
                    posts = json.data.children;
                    if (!posts.length)
                        throw 'noposts';
                    if (fulldata) {
                        post = { status: 200, posts: posts.slice(0, count) };
                        return [2 /*return*/, post];
                    }
                    else {
                        func = function (_a) {
                            var _b = _a.data, title = _b.title, author = _b.author, subreddit_name_prefixed = _b.subreddit_name_prefixed, ups = _b.ups, total_awards_received = _b.total_awards_received, url = _b.url;
                            return ({
                                data: { title: title, author: author, subreddit_name_prefixed: subreddit_name_prefixed, ups: ups, total_awards_received: total_awards_received, url: url }
                            });
                        };
                        newposts = { status: 200, posts: posts.slice(0, count).map(func) };
                        return [2 /*return*/, newposts];
                    }
                    return [3 /*break*/, 5];
                case 4:
                    error_2 = _g.sent();
                    return [2 /*return*/, { status: 404, posts: [] }];
                case 5: return [2 /*return*/];
            }
        });
    });
}
exports.newPost = newPost;
function randomPost(_a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.subreddit, subreddit = _c === void 0 ? 'all' : _c, _d = _b.count, count = _d === void 0 ? 1 : _d, _e = _b.is_meme, is_meme = _e === void 0 ? false : _e, _f = _b.fulldata, fulldata = _f === void 0 ? false : _f;
    return __awaiter(this, void 0, void 0, function () {
        var api, response, json, posts, shuffled, post, func, newposts, error_3;
        return __generator(this, function (_g) {
            switch (_g.label) {
                case 0:
                    api = 'https://www.reddit.com/r/';
                    if (is_meme)
                        subreddit = 'memes';
                    _g.label = 1;
                case 1:
                    _g.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, node_fetch_1.default("" + api + subreddit + ".json?limit=100")];
                case 2:
                    response = _g.sent();
                    return [4 /*yield*/, response.json()];
                case 3:
                    json = _g.sent();
                    posts = json.data.children;
                    if (!posts.length)
                        throw 'noposts';
                    shuffled = posts
                        .map(function (a) { return ({ sort: Math.random(), value: a }); })
                        .sort(function (a, b) { return a.sort - b.sort; })
                        .map(function (a) { return a.value; });
                    if (fulldata) {
                        post = { status: 200, posts: shuffled.slice(0, count) };
                        return [2 /*return*/, post];
                    }
                    else {
                        func = function (_a) {
                            var _b = _a.data, title = _b.title, author = _b.author, subreddit_name_prefixed = _b.subreddit_name_prefixed, ups = _b.ups, total_awards_received = _b.total_awards_received, url = _b.url;
                            return ({
                                data: { title: title, author: author, subreddit_name_prefixed: subreddit_name_prefixed, ups: ups, total_awards_received: total_awards_received, url: url }
                            });
                        };
                        newposts = { status: 200, posts: shuffled.slice(0, count).map(func) };
                        return [2 /*return*/, newposts];
                    }
                    return [3 /*break*/, 5];
                case 4:
                    error_3 = _g.sent();
                    return [2 /*return*/, { status: 404, posts: [] }];
                case 5: return [2 /*return*/];
            }
        });
    });
}
exports.randomPost = randomPost;
function searchSubreddits(subreddit) {
    return __awaiter(this, void 0, void 0, function () {
        var api, response, json, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    api = 'https://www.reddit.com/r/';
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, node_fetch_1.default("" + api + subreddit + ".json?limit=0")];
                case 2:
                    response = _a.sent();
                    console.log("" + api + subreddit + ".json");
                    return [4 /*yield*/, response.json()];
                case 3:
                    json = _a.sent();
                    if (!json.data.children.length)
                        throw 'error';
                    return [2 /*return*/, {
                            status: 200,
                            subreddit: subreddit,
                            url: "" + api + subreddit
                        }];
                case 4:
                    error_4 = _a.sent();
                    return [2 /*return*/, {
                            status: 404,
                            subreddit: undefined,
                            url: undefined
                        }];
                case 5: return [2 /*return*/];
            }
        });
    });
}
exports.searchSubreddits = searchSubreddits;
function popularSubreddits(count) {
    if (count === void 0) { count = 1; }
    return __awaiter(this, void 0, void 0, function () {
        var api, response, json, func, subreddits, error_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    api = 'https://www.reddit.com/subreddits/.json?limit=100';
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, node_fetch_1.default(api)];
                case 2:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 3:
                    json = _a.sent();
                    func = function (_a) {
                        var _b = _a.data, display_name_prefixed = _b.display_name_prefixed, subscribers = _b.subscribers, description = _b.description;
                        return ({
                            data: { display_name_prefixed: display_name_prefixed, subscribers: subscribers, description: description }
                        });
                    };
                    if (!json.data.children.length)
                        throw 'error';
                    subreddits = json.data.children.slice(0, count).map(func).map(function (i) { return ({
                        data: __assign(__assign({}, i.data), { url: "https://www.reddit.com/" + i.data.display_name_prefixed })
                    }); });
                    return [2 /*return*/, { status: 200, subreddits: subreddits }];
                case 4:
                    error_5 = _a.sent();
                    return [2 /*return*/, { status: 404, subreddits: [] }];
                case 5: return [2 /*return*/];
            }
        });
    });
}
exports.popularSubreddits = popularSubreddits;
//# sourceMappingURL=index.js.map
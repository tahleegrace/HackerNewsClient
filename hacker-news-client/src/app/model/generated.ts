// Generated using json-ts. https://github.com/shakyShane/json-ts

interface ISearchResults {
    hits: ISearchResult[];
    nbHits: number;
    page: number;
    nbPages: number;
    hitsPerPage: number;
    processingTimeMS: number;
    exhaustiveNbHits: boolean;
    query: string;
    params: string;
}

interface ISearchResult {
    created_at: string;
    title: string;
    url: string | null;
    author: string;
    points: number;
    story_text: null | string;
    comment_text: null;
    num_comments: number;
    story_id: null;
    story_title: null;
    story_url: null;
    parent_id?: null;
    created_at_i: number;
    _tags: string[];
    objectID: string;
    _highlightResult: I_highlightResult;
}

interface I_highlightResult {
    title: ITitle;
    url?: IUrl;
    author: IAuthor;
    story_text?: IStory_text;
}

interface ITitle {
    value: string;
    matchLevel: string;
    fullyHighlighted: boolean;
    matchedWords: string[];
}

interface IUrl {
    value: string;
    matchLevel: string;
    fullyHighlighted?: boolean;
    matchedWords: string[];
}

interface IAuthor {
    value: string;
    matchLevel: string;
    matchedWords: any[];
}

interface IStory_text {
    value: string;
    matchLevel: string;
    matchedWords: string[];
    fullyHighlighted?: boolean;
}

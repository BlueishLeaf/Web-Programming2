export interface ITVShowDetails {
    Title: string;
    Year: string;
    Poster: string;
    Genre: string;
    Released: string;
    totalSeasons: string;
    MyReview: string;
    Ratings: ITVShowRatings[];
}

export interface ITVShowRatings {
    Source: string;
    Value: string;
}

export class Article {
    title: string;
    link: string;
    votes: number;

    constructor(title: string, link: string) {
        this.title = title;
        this.link = link;
        this.votes = 1;
    }

    voteUp(): void {
        this.votes += 1;
    }

    voteDown(): void {
        this.votes -= 1;
    }
}

import { Component } from '@angular/core';
import { Article } from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles: Article[];

  constructor() {
    this.articles = [
      new Article('Angular 2', 'http://angular.io'),
      new Article('Fullstack', 'http://fullstack.io'),
      new Article('Angular Homepage', 'http://angular.io')
    ];
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`Adding article...Title= ${title.value} Link= ${link.value}`);
    this.articles.push(new Article(title.value, link.value));
    title.value = null;
    link.value = null;
    return false;
  }
}

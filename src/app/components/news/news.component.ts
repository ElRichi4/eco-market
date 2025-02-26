import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  newsArticles: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadNews();
  }

  loadNews(): void {
    const apiUrl = 'https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=8ef3861c3a174df187d71b54eaa2da71';
    this.http.get(apiUrl).subscribe((data: any) => {
      this.newsArticles = data.articles;
    });
  }
}


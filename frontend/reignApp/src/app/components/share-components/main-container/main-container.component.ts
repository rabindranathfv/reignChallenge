import { Component, OnInit } from '@angular/core';
import { ArticlesService } from 'src/app/services/articles/articles.service';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.scss']
})
export class MainContainerComponent implements OnInit {

  constructor( private articlesService: ArticlesService) { }

  ngOnInit() {
    this.getArticles();
  }

  /**
   * getArticles
   */
  public getArticles() {
    console.log('ejecutandose');
    this.articlesService.getArticles().subscribe( (resp: any) => {
      console.log(resp);
    });
  }



}

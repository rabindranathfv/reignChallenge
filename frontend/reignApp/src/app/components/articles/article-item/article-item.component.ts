import { Component, OnInit, Input } from '@angular/core';
import { Article } from 'src/app/interfaces/article.interface';
import { ArticlesService } from 'src/app/services/articles/articles.service';

@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrls: ['./article-item.component.scss']
})
export class ArticleItemComponent implements OnInit {

  @Input() art: Article[];
  showDelete: boolean;

  constructor( private articleService: ArticlesService) {
    this.showDelete = false;
  }

  ngOnInit() {
  }

  /**
   * activeTrash
   */
  public activeTrash() {
    this.showDelete = !this.showDelete;
  }

  /**
   * deleteArticle
   */
  public deleteArticle( id ) {
    console.log(`${id} has been deleted`);
    // this.articleService.deleteArticle(id).subscribe( (art: Article) => {
    //   console.log(art, `${art._id} has been deleted`);
    // });
  }

}
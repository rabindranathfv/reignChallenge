import { Component, OnInit, Input } from '@angular/core';
import { Article } from 'src/app/interfaces/article.interface';
import * as moment from 'moment';

// services
import { ArticlesService } from 'src/app/services/articles/articles.service';
@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrls: ['./article-item.component.scss']
})
export class ArticleItemComponent implements OnInit {

  @Input() art: Article[];
  showDelete: boolean;
  dateCompare: number;

  constructor( private articleService: ArticlesService) {
    this.showDelete = false;
    this.dateCompare = 0;
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
   * checkDate
   */
  public checkDate( artDate ) {
    console.log('ejecutando checkdate');
    this.dateCompare = artDate.diff(moment());
    console.log(this.dateCompare);
    return 0;
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

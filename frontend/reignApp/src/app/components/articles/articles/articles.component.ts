import { Component, OnInit, Input } from '@angular/core';
import { Article } from 'src/app/interfaces/article.interface';
import { ArticlesService } from 'src/app/services/articles/articles.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  public articles: Article[] = [];

  constructor( private articleService: ArticlesService ) {
    this.articles = [
      {
        title: null,
        story_title: null,
        url: 'https://www.scottaaronson.com/blog/?p=1820',
        story_url: null,
        author: 'webdva',
        _id: '5e0521a6476dcc19c8434df0',
        created_at: '2019-12-26T16:07:07.000Z'
    },
    {
      title: 'articlo prueba',
      story_title: 'story prueba',
      url: 'https://www.scottaaronson.com/blog/?p=1820',
      story_url: null,
      author: 'rabin',
      _id: '5e0521a6476dcc19c8434df0',
      created_at: '2019-12-26T16:07:07.000Z'
    },
    {
      title: null,
      story_title: 'The Basic Problem of Democracy (1919)',
      url: null,
      story_url: 'https://www.theatlantic.com/magazine/archive/1919/11/the-basic-problem-of-democracy/569095/',
      author: 'incompatible',
      _id: '5e0815f82ca5405824c729c3',
      created_at: '2019-12-29T01:44:08.000Z'
  },
  {
      title: null,
      story_title: 'The Basic Problem of Democracy (1919)',
      url: null,
      story_url: 'https://www.theatlantic.com/magazine/archive/1919/11/the-basic-problem-of-democracy/569095/',
      author: 'incompatible',
      _id: '5e081bb013f1d94c7c1e852b',
      created_at: '2019-12-29T01:44:08.000Z'
  },
  {
      title: null,
      story_title: 'Paean to Sid Meier\'s Alpha Centauri (2016)',
      url: null,
      story_url: 'https://paeantosmac.wordpress.com',
      author: 'r00fus',
      _id: '5e0815f82ca5405824c729c4',
      created_at: '2019-12-29T01:18:27.000Z'
  },
  {
      title: null,
      story_title: 'Paean to Sid Meier\'s Alpha Centauri (2016)',
      url: null,
      story_url: 'https://paeantosmac.wordpress.com',
      author: 'r00fus',
      _id: '5e081bb013f1d94c7c1e852c',
      created_at: '2019-12-29T01:18:27.000Z'
  },
  {
      title: null,
      story_title: 'How I made a website with Svelte',
      url: null,
      story_url: 'https://johanronsse.be/2019/12/28/making-of-best-of-2019/',
      author: 'ricardobeat',
      _id: '5e0815f82ca5405824c729c5',
      created_at: '2019-12-28T18:19:32.000Z'
  },
  {
      title: null,
      story_title: 'How I made a website with Svelte',
      url: null,
      story_url: 'https://johanronsse.be/2019/12/28/making-of-best-of-2019/',
      author: 'ricardobeat',
      _id: '5e081bb013f1d94c7c1e852d',
      created_at: '2019-12-28T18:19:32.000Z'
  },
  {
      title: null,
      story_title: 'Show HN: Localdots – HTTPS domains for localhost with autoconfig and hot reload',
      url: null,
      story_url: 'https://github.com/luisfarzati/localdots',
      author: 'benologist',
      _id: '5e0815f82ca5405824c729c6',
      created_at: '2019-12-28T13:59:07.000Z'
  },
  {
      title: null,
      story_title: 'Show HN: Localdots – HTTPS domains for localhost with autoconfig and hot reload',
      url: null,
      story_url: 'https://github.com/luisfarzati/localdots',
      author: 'benologist',
      _id: '5e081bb013f1d94c7c1e852e',
      created_at: '2019-12-28T13:59:07.000Z'
  },
  {
      title: null,
      story_title: 'Show HN: An experimental distributed SQL database from scratch in Go',
      url: null,
      story_url: 'https://github.com/tomarrell/lbadd',
      author: 'zbentley',
      _id: '5e0815f82ca5405824c729c7',
      created_at: '2019-12-28T13:31:40.000Z'
  },
  {
      title: null,
      story_title: 'Show HN: An experimental distributed SQL database from scratch in Go',
      url: null,
      story_url: 'https://github.com/tomarrell/lbadd',
      author: 'zbentley',
      _id: '5e081bb013f1d94c7c1e852f',
      created_at: '2019-12-28T13:31:40.000Z'
  },
  {
      title: null,
      story_title: 'Show HN: An experimental distributed SQL database from scratch in Go',
      url: null,
      story_url: 'https://github.com/tomarrell/lbadd',
      author: 'teraflop',
      _id: '5e0815f82ca5405824c729c8',
      created_at: '2019-12-28T05:50:28.000Z'
  },
  {
      title: null,
      story_title: 'Show HN: An experimental distributed SQL database from scratch in Go',
      url: null,
      story_url: 'https://github.com/tomarrell/lbadd',
      author: 'teraflop',
      _id: '5e081bb013f1d94c7c1e8530',
      created_at: '2019-12-28T05:50:28.000Z'
  },
  {
      title: 'Node.js vs. PHP: Which Is Best for Your Next Dream Project?',
      story_title: null,
      url: 'https://www.iglobsyn.com/blog/node-js-development-vs-php-development-which-is-best-for-your-next-dream-project/',
      story_url: null,
      author: 'Zhenhenry',
      _id: '5e0815f82ca5405824c729c9',
      created_at: '2019-12-28T05:50:12.000Z'
  },
  {
      title: 'Node.js vs. PHP: Which Is Best for Your Next Dream Project?',
      story_title: null,
      url: 'https://www.iglobsyn.com/blog/node-js-development-vs-php-development-which-is-best-for-your-next-dream-project/',
      story_url: null,
      author: 'Zhenhenry',
      _id: '5e081bb013f1d94c7c1e8531',
      created_at: '2019-12-28T05:50:12.000Z'
  },
  {
      title: null,
      story_title: 'Show HN: An experimental distributed SQL database from scratch in Go',
      url: null,
      story_url: 'https://github.com/tomarrell/lbadd',
      author: 'derision',
      _id: '5e0815f82ca5405824c729ca',
      created_at: '2019-12-27T22:12:15.000Z'
  },
  {
      title: null,
      story_title: 'Show HN: An experimental distributed SQL database from scratch in Go',
      url: null,
      story_url: 'https://github.com/tomarrell/lbadd',
      author: 'derision',
      _id: '5e081bb013f1d94c7c1e8532',
      created_at: '2019-12-27T22:12:15.000Z'
  },
  {
      title: null,
      story_title: 'Show HN: An experimental distributed SQL database from scratch in Go',
      url: null,
      story_url: 'https://github.com/tomarrell/lbadd',
      author: 'redis_mlc',
      _id: '5e0815f82ca5405824c729cb',
      created_at: '2019-12-27T21:33:58.000Z'
  },
  ];
}

  ngOnInit() {
    // this.getArticles();
  }

  /**
   * getArticles
   */
  public getArticles() {
    console.log('ejecutandose');
    this.articleService.getArticles().subscribe( (resp: any) => {
      console.log(resp);
    });
  }

}

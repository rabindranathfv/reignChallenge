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
        story_title: 'Ask HN: Should I use version control or blockchain?',
        url: null,
        story_url: null,
        author: 'webdva',
        _id: '5e0521a6476dcc19c8434df0',
        created_at: '2019-12-26T16:07:07.000Z'
    },
    {
        title: null,
        story_title: 'Eigenmorality (2014)',
        url: null,
        story_url: 'https://www.scottaaronson.com/blog/?p=1820',
        author: 'gfodor',
        _id: '5e0521a6476dcc19c8434df2',
        created_at: '2019-12-26T05:24:14.000Z'
    },
    {
        title: 'How to Modify Nodes in an Abstract Syntax Tree',
        story_title: null,
        url: 'https://css-tricks.com/how-to-modify-nodes-in-an-abstract-syntax-tree/',
        story_url: null,
        author: 'chmaynard',
        _id: '5e0521a6476dcc19c8434def',
        created_at: '2019-12-26T20:23:20.000Z'
    },
    {
        title: null,
        story_title: 'How to Manage Apache Airflow with Systemd on Debian or Ubuntu',
        url: null,
        story_url: 'https://janakiev.com/blog/apache-airflow-systemd/',
        author: 'jpau',
        _id: '5e0521a6476dcc19c8434dee',
        created_at: '2019-12-26T20:38:13.000Z'
    },
    {
        title: null,
        story_title: 'Ask HN: Astrology? Yay, Nay or Meh?',
        url: null,
        story_url: null,
        author: 'jelliclesfarm',
        _id: '5e0521a6476dcc19c8434df1',
        created_at: '2019-12-26T10:40:47.000Z'
    },
    {
        title: null,
        story_title: 'Ask HN: Haven\'t worked for a while, best guide/advice to start a hobby project?',
        url: null,
        story_url: null,
        author: 'tqwhite',
        _id: '5e0521a6476dcc19c8434df5',
        created_at: '2019-12-25T15:58:04.000Z'
    },
    {
        title: null,
        story_title: 'Ask HN: Is it worth it to learn C in 2020?',
        url: null,
        story_url: null,
        author: 'westurner',
        _id: '5e0521a6476dcc19c8434df6',
        created_at: '2019-12-25T14:42:12.000Z'
    },
    {
        title: null,
        story_title: 'Ask HN: Haven\'t worked for a while, best guide/advice to start a hobby project?',
        url: null,
        story_url: null,
        author: 'NightlyDev',
        _id: '5e0521a6476dcc19c8434df7',
        created_at: '2019-12-25T12:06:24.000Z'
    },
    {
        title: null,
        story_title: 'Million WebSockets and Go (2017)',
        url: null,
        story_url: 'https://gbws.io/articles/million-websocket-and-go/',
        author: 'phoboslab',
        _id: '5e0521a6476dcc19c8434dfb',
        created_at: '2019-12-23T21:39:08.000Z'
    },
    {
        title: null,
        story_title: 'Million WebSockets and Go (2017)',
        url: null,
        story_url: 'https://gbws.io/articles/million-websocket-and-go/',
        author: 'apta',
        _id: '5e0521a6476dcc19c8434dfa',
        created_at: '2019-12-24T00:49:01.000Z'
    },
    {
        title: null,
        story_title: 'Bazel 2.0',
        url: null,
        story_url: 'https://blog.bazel.build/2019/12/19/bazel-2.0.html',
        author: 'wereHamster',
        _id: '5e0521a6476dcc19c8434dfc',
        created_at: '2019-12-23T20:32:39.000Z'
    },
    {
        title: 'Deep Dive into Worker Threads in Node.js',
        story_title: null,
        url: 'https://blog.insiderattack.net/deep-dive-into-worker-threads-in-node-js-e75e10546b11',
        story_url: null,
        author: 'dpjayasekara',
        _id: '5e0521a6476dcc19c8434e00',
        created_at: '2019-12-23T11:07:08.000Z'
    },
    {
        title: null,
        story_title: 'JSPython',
        url: null,
        story_url: 'https://jspython.dev',
        author: 'pavlo-paska',
        _id: '5e0521a6476dcc19c8434dff',
        created_at: '2019-12-23T12:40:12.000Z'
    },
    {
        title: 'Take Control of Your APIs by Implementing API Governance – RAML and Node.js',
        story_title: null,
        url: 'https://medium.com/zolo-engineering/take-control-of-your-apis-by-implementing-api-governance-using-raml-node-js-47b99a04d483',
        story_url: null,
        author: 'limecoin',
        _id: '5e0521a6476dcc19c8434e01',
        created_at: '2019-12-22T10:27:39.000Z'
    },
    {
        title: 'Converting HTML Template to PDF Using Node.js',
        story_title: null,
        url: 'https://medium.com/@hardeek.sharma/converting-html-template-to-pdf-using-nodejs-2eff0247b50',
        story_url: null,
        author: 'praveenscience',
        _id: '5e0521a6476dcc19c8434df3',
        created_at: '2019-12-26T03:04:10.000Z'
    },
    {
        title: null,
        story_title: 'Ask HN: Haven\'t worked for a while, best guide/advice to start a hobby project?',
        url: null,
        story_url: null,
        author: 'y4mi',
        _id: '5e0521a6476dcc19c8434df8',
        created_at: '2019-12-25T09:08:37.000Z'
    },
    {
        title: null,
        story_title: 'Ask HN: What do you use to start your dev environment faster?',
        url: null,
        story_url: null,
        author: 'Ramiro',
        _id: '5e0521a6476dcc19c8434dfd',
        created_at: '2019-12-23T18:45:26.000Z'
    },
    {
        title: null,
        story_title: 'Show HN: ArcaneVM – A Fully Homomorphic Encryption Brainfuck Virtual Machine',
        url: null,
        story_url: 'https://github.com/f-prime/arcanevm',
        author: 'DoctorOetker',
        _id: '5e0521a6476dcc19c8434df4',
        created_at: '2019-12-25T16:52:54.000Z'
    },
    {
        title: null,
        story_title: 'A Breakthrough in Graph Theory [video]',
        url: null,
        story_url: 'https://www.youtube.com/watch?v=Tnu_Ws7Llo4',
        author: 'walleeee',
        _id: '5e0521a6476dcc19c8434df9',
        created_at: '2019-12-25T05:30:30.000Z'
    },
    {
        title: 'Ask HN: How should I test backing services that change frequently/break my code?',
        story_title: null,
        url: null,
        story_url: null,
        author: 'ayoubElk',
        _id: '5e0521a6476dcc19c8434dfe',
        created_at: '2019-12-23T14:56:54.000Z'
    },
    {
        title: 'Ask HN: Best C Package Manager?',
        story_title: null,
        url: null,
        story_url: null,
        author: 'archivist1',
        _id: '5e06a910e789805b980f7371',
        created_at: '2019-12-27T11:57:57.000Z'
    },
    {
        title: null,
        story_title: 'Show HN: An experimental distributed SQL database from scratch in Go',
        url: null,
        story_url: 'https://github.com/tomarrell/lbadd',
        author: 'derision',
        _id: '5e06a910e789805b980f736d',
        created_at: '2019-12-27T22:12:15.000Z'
    }
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

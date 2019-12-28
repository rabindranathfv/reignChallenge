import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleNoDataComponent } from './article-no-data.component';

describe('ArticleNoDataComponent', () => {
  let component: ArticleNoDataComponent;
  let fixture: ComponentFixture<ArticleNoDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleNoDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleNoDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../app/shared/shared.module';
import { FeedCategoriesComponent } from './feed-categories/feed-categories.component';
import { FeedCategoryComponent } from './feed-category/feed-category.component';
import { FeedsComponent } from './feeds/feeds.component';
import { FeedComponent } from './feed/feed.component';

@NgModule({
  declarations: [
    FeedCategoriesComponent,
    FeedCategoryComponent,
    FeedsComponent,
    FeedComponent
  ],
  imports: [
  	CommonModule,
  	SharedModule
  ],
  exports: [
    FeedCategoriesComponent,
    FeedCategoryComponent,
    FeedsComponent,
    FeedComponent
  ],
  entryComponents:[
    FeedCategoriesComponent,
    FeedCategoryComponent,
    FeedsComponent,
    FeedComponent
  ]
})
export class FeedsModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../app/shared/shared.module';
import { WordpressHome } from './wordpress-home/wordpress-home.component';
import { WordpressLogin } from './wordpress-login/wordpress-login.component';
import { WordpressPosts } from './wordpress-posts/wordpress-posts.component';
import { WordpressPost } from './wordpress-post/wordpress-post.component';
import { WordpressFeatureMedia } from './wordpress-feature-media/wordpress-feature-media.component';
import { WordpressCategories } from './wordpress-categories/wordpress-categories.component';
import { WordpressTags } from './wordpress-tags/wordpress-tags.component';
import { WordpressFavorites } from './wordpress-favorites/wordpress-favorites.component';
import { WordpressPages } from './wordpress-pages/wordpress-pages.component';
import { WordpressPage } from './wordpress-page/wordpress-page.component';
import { WordpressMenus } from './wordpress-menus/wordpress-menus.component';
import { WordpressMenu } from './wordpress-menu/wordpress-menu.component';
import { WordpressMenuItem } from './wordpress-menu-item/wordpress-menu-item.component';

@NgModule({
  declarations: [
    WordpressHome,
    WordpressLogin,
    WordpressPosts,
    WordpressPost,
    WordpressFeatureMedia,
    WordpressCategories,
    WordpressTags,
    WordpressFavorites,
    WordpressPages,
    WordpressPage,
    WordpressMenus,
    WordpressMenu,
    WordpressMenuItem
  ],
  imports: [
  	CommonModule,
  	SharedModule
  ],
  exports: [
    WordpressHome,
    WordpressLogin,
    WordpressPosts,
    WordpressPost,
    WordpressFeatureMedia,
    WordpressCategories,
    WordpressTags,
    WordpressFavorites,
    WordpressPages,
    WordpressPage,
    WordpressMenus,
    WordpressMenu,
    WordpressMenuItem
  ],
  entryComponents:[
    WordpressHome,
    WordpressLogin,
  	WordpressPosts,
    WordpressPost,
    WordpressFeatureMedia,
    WordpressCategories,
    WordpressTags,
    WordpressFavorites,
    WordpressPages,
    WordpressPage,
    WordpressMenus,
    WordpressMenu,
    WordpressMenuItem
  ]
})
export class WordpressModule {}

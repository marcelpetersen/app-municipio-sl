import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../app/shared/shared.module';
import { YoutubeVideosComponent } from './youtube-videos/youtube-videos.component';
import { YoutubeVideoComponent } from './youtube-video/youtube-video.component';
import { YoutubeChannelComponent } from './youtube-channel/youtube-channel.component';
import { YoutubeChannelVideoComponent } from './youtube-channel-video/youtube-channel-video.component';

@NgModule({
  declarations: [
    YoutubeVideosComponent,
    YoutubeVideoComponent,
    YoutubeChannelComponent,
    YoutubeChannelVideoComponent
  ],
  imports: [
  	CommonModule,
  	SharedModule
  ],
  exports: [
    YoutubeVideosComponent,
    YoutubeVideoComponent,
    YoutubeChannelComponent,
    YoutubeChannelVideoComponent
  ],
  entryComponents:[
    YoutubeVideosComponent,
    YoutubeVideoComponent,
    YoutubeChannelComponent,
    YoutubeChannelVideoComponent
  ]
})
export class YoutubeModule {}

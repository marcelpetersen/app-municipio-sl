import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Config } from '../../../../app/app.config';
import 'rxjs/add/operator/map';

@Injectable()
export class YoutubeService {
	youtubeKey: string;
	apiUrl: string;
	videosUrl: string;
	playlistsUrl: string;
	channelsUrl: string;
	username: string;
	channelId: string;
	results: number;

	constructor(private http: Http, private config: Config) {
		this.youtubeKey = config.youtubeKey;
	    this.apiUrl = config.youtubeApiUrl;
	   	this.username = config.youtubeUsername;
	   	this.channelId = config.youtubeChannelId;
	   	this.results = config.youtubeResults;
	    this.videosUrl = this.apiUrl + 'playlistItems?part=snippet&key=' + this.youtubeKey + '&order=date&maxResults=' + this.results;
	    this.playlistsUrl = this.apiUrl + 'channels?part=contentDetails&key=' + this.youtubeKey;
	    this.channelsUrl = this.apiUrl + 'search?part=snippet&key=' + this.youtubeKey + '&order=date&maxResults=' + this.results + '&channelId=' + this.channelId;
	}

	public getPlaylistId() {
        let url = this.playlistsUrl + '&forUsername=' + this.username;
        return this.http.get(url)
       	.map(result => {
       		return result.json();
		});  
    }

	public getVideos(playlistId) {
		let url = this.videosUrl + '&playlistId=' + playlistId;
		return this.http.get(url)
		.map(result => {
			return result.json();
		});  
	}

	public getChannel() {
		let url = this.channelsUrl;
		return this.http.get(url)
		.map(result => {
			return result.json();
		});  
	}

}
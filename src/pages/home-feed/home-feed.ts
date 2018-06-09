import { FeedServiceProvider } from './../../providers/feed-service/feed-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home-feed',
  templateUrl: 'home-feed.html',
})
export class HomeFeedPage {

  public feeds: any;

  constructor(private _nav: NavController, private _feedService: FeedServiceProvider) { }

  ionViewDidLoad() {
    this._feedService.getFeed().subscribe(
      feed => {
        this.feeds = feed;
      }
    )
  }

}

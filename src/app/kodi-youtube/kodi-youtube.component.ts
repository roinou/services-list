import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-kodi-youtube',
  templateUrl: './kodi-youtube.component.html'
})
export class KodiYoutubeComponent {

  model = {youtubeUrl: ""};

  constructor(private http: HttpClient) {}

  submit() {
    //console.log('to kodi', this.model.youtubeUrl);
    if (this.model.youtubeUrl) {
      let youtubeId;
      try {
        const url = new URL(this.model.youtubeUrl);
        // console.log('url', url);
        if (url.searchParams.has('v')) {
          youtubeId = url.searchParams.get('v');
        } else {
          // assume it's a short url
          const paths = url.pathname.split('/');
          youtubeId = paths[paths.length -1];
        }
      } catch (e) {
        // not a URL
        youtubeId = this.model.youtubeUrl;
      }
      this.sendToKodi(youtubeId);
    }
  }

  private payload = {
    'jsonrpc': '2.0',
    'id': '1',
    'method': 'Player.Open',
    'params': {'item': {'file': 'plugin://plugin.video.youtube/?action=play_video&videoid='}}
  };
  private pluginUrl = new URL('plugin://plugin.video.youtube/?action=play_video');
  private targetUrl = '/osmc/jsonrpc';

  sendToKodi(id: string) {
    console.log('sending youtube ID', id);
    this.pluginUrl.searchParams.set('videoid', id);
    this.payload.params.item.file = this.pluginUrl.toString();
    //console.log('plugin', this.pluginUrl);
    this.http.post(this.targetUrl, this.payload, {headers: {'Content-Type': 'application/json'}})
      .subscribe(ret => console.log(ret));
  }
}

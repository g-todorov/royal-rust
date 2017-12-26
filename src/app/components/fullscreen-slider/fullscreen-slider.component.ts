import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fullscreen-slider',
  templateUrl: './fullscreen-slider.component.html',
  styleUrls: ['./fullscreen-slider.component.styl']
})
export class FullscreenSliderComponent implements OnInit {
  videoLinks: [any] = [
    'assets/videos/160720_19_PlugIn_2K.mp4',
    'assets/videos/Master_Volume_on_Guitar_Amp.mp4',
    'assets/videos/Playing_Acoustic_Guitar.mp4'
  ];
  currentVideoLink: any = 'assets/videos/160720_19_PlugIn_2K.mp4'

  constructor() { }

  ngOnInit() {
    let intervalId = setInterval(() => {
      let index = this.videoLinks.indexOf(this.currentVideoLink);

      if (this.videoLinks[index + 1]) {
        this.currentVideoLink = this.videoLinks[index + 1];
      }
      else {
        this.currentVideoLink = this.videoLinks[0]
      }

      console.log(this.currentVideoLink);
    }, 3000)
  }

}

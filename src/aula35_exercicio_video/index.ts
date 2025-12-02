interface VideoPlayerElements {

  videoPlayer: HTMLVideoElement;
  stopButton: HTMLButtonElement;
  playButton: HTMLButtonElement;

}



interface videoPlayerPrtotocol {

  playToggle(): void;
  stop(): void;
  startEvent(): void;

}


export default class VideoPlayer implements VideoPlayer, videoPlayerPrtotocol {

  private videoPlayer: HTMLVideoElement;
  private stopButton: HTMLButtonElement;
  private playButton: HTMLButtonElement;

  constructor(videoPlayerElements: VideoPlayerElements) {
    this.videoPlayer = videoPlayerElements.videoPlayer;
    this.playButton = videoPlayerElements.playButton;
    this.stopButton = videoPlayerElements.stopButton;
  }

  stop(): void {
    this.stopButton.addEventListener('click', ()=>{
      this.videoPlayer.pause();
      this.videoPlayer.currentTime = 0;
    })
  }

  playToggle(): void {
    if (this.videoPlayer.paused) {
      this.videoPlayer.play();
      this.playButton.innerHTML = "pause"
    } else {
      this.videoPlayer.pause();
      this.playButton.innerHTML = "play"
    }
  }

  startEvent(): void {
    this.playButton.addEventListener('click', () => {
      this.playToggle();
    })
  }
}

const videoPlayer = new VideoPlayer(
  {
    videoPlayer: document.querySelector(".video") as HTMLVideoElement,
    playButton: document.querySelector(".play") as HTMLButtonElement,
    stopButton: document.querySelector(".stop") as HTMLButtonElement
  }
);

videoPlayer.startEvent();
videoPlayer.stop(); 

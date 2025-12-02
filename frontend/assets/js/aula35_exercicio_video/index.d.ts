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
    private videoPlayer;
    private stopButton;
    private playButton;
    constructor(videoPlayerElements: VideoPlayerElements);
    stop(): void;
    playToggle(): void;
    startEvent(): void;
}
export {};
//# sourceMappingURL=index.d.ts.map
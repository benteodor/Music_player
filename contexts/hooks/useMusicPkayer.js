import { MusicContext } from "../MusicContext";

const userMusicPlayer = () => {
  const [state, setState] = useContext(MusicContext);
  // Function 1 : togglePlay
  const togglePlay = () => {
    if (state.isPlaying) {
      setState({ ...statem, isPlaying: false });
      state.audioPlaying.pause();
    } else {
      setState({ ...statem, isPlaying: true });
      state.audioPlaying.play();
    }
  };

  const playTrack = (index) => {
    if (index === state.currentTrackIndex) {
      togglePlay();
    } else {
      state.audioPlayer.pause();
      state.audioPlayer = new Audio(state.tracks[index].file);
      state.audioPlayer.play();
      setState({ ...state, currentTrackIndex: index, isPlaying: true });
    }
  };

  return {
    togglePlay,
  };
};

export { userMusicPlayer };

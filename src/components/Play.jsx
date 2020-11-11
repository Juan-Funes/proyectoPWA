import React from "react";
import CheckIcon from "@material-ui/icons/PlayArrow";
import ToggleButton from "@material-ui/lab/esm/ToggleButton";
import audio from "../music/OjosColorSol.mp3";

class Play extends React.Component {
  constructor(props) {
    super(props);
    this.state = { play: false };
    this.audio = new Audio(audio);
    this.togglePlay = this.togglePlay.bind(this);
  }

  togglePlay() {
    this.setState({ play: !this.state.play });
    console.log(this.audio);
    this.state.play ? this.audio.pause() : this.audio.play();
  }

  render() {
    return (
      <div>
        <ToggleButton
          className="centro-button-play"
          value="check"
          onChange={this.togglePlay}
        >
          <CheckIcon />
        </ToggleButton>
      </div>
    );
  }
}

export default Play;

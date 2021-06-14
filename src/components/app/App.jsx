import React from 'react';
import * as Tone from 'tone';
import { AMSynth } from '../AMSynth';
//dispose of synth instances when objects get deleted!


export default function App() {
  Tone.start();
  // const gain = new Tone.Gain(0.5).toDestination();
  // const verb = new Tone.Reverb({
  //   decay: 3,
  //   preDelay: 0.05,
  //   wet: 0.3,
  // }).connect(gain);
  // const ampEnv = new Tone.AmplitudeEnvelope({
  //   attack: 0.001,
  //   decay: 1,
  //   sustain: 0,
  //   release: 0.5,
  // }).connect(verb);

  // const synth = new Tone.AMOscillator({
  //   frequency: 500,
  //   type: '',
  //   modulationType: 'sine',
  //   harmonicity: 1.5,
  // })
  //   .connect(ampEnv)
  //   .start();
  // const playNote = () => {
  //   ampEnv.triggerAttackRelease('4n');
  // };
  //<button onClick={playNote}>Bleep</button>;
  return (
    <div>
      <AMSynth />
    </div>
  )
}

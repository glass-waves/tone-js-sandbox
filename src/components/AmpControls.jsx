/* eslint-disable react/prop-types */
import React from 'react';
import { Slider } from '@material-ui/core';

export const AmpControls = ({
  controls: {
    amp,
    handleAttackChange,
    handleDecayChange,
    handleSustainChange,
    handleReleaseChange,
  },
}) => {
  return (
    <div>
      <label htmlFor="">
        Attack
        <Slider
          aria-label="attack"
          min={0.001}
          max={2}
          step={0.01}
          value={amp.attack}
          onChange={handleAttackChange}
        />
      </label>
      <label htmlFor="">
        Decay
        <Slider
          aria-label="decay"
          min={0.001}
          max={2}
          step={0.01}
          value={amp.decay}
          onChange={handleDecayChange}
        />
      </label>
      <label htmlFor="">
        Sustain
        <Slider
          aria-label="sustain"
          min={0}
          max={1}
          step={0.01}
          value={amp.sustain}
          onChange={handleSustainChange}
        />
      </label>
      <label htmlFor="">
        Release
        <Slider
          aria-label="release"
          min={0}
          max={10}
          step={0.1}
          // scale={x => x / 10}
          value={amp.release}
          onChange={handleReleaseChange}
        />
      </label>
    </div>
  );
};

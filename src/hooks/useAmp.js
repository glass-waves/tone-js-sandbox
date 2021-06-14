import { useState } from 'react';
export const useAmp = () => {
  const [amp, setAmp] = useState({
    attack: 0.01,
    decay: 0.1,
    sustain: 0.1,
    release: 0.3,
  });

  const handleAttackChange = (e, f) => {
    console.log(e);
    setAmp((prevAmp) => ({
      ...prevAmp,
      attack: f,
    }));
  };
  const handleDecayChange = (e, f) => {
    console.log(e);
    setAmp((prevAmp) => ({
      ...prevAmp,
      decay: f,
    }));
  };

  const handleSustainChange = (e, f) => {
    console.log(e);
    setAmp((prevAmp) => ({
      ...prevAmp,
      sustain: f,
    }));
  };
  const handleReleaseChange = (e, f) => {
    console.log(e);
    setAmp((prevAmp) => ({
      ...prevAmp,
      release: f,
    }));
  };

  return {
    amp,
    handleAttackChange,
    handleDecayChange,
    handleSustainChange,
    handleReleaseChange,
  };
};

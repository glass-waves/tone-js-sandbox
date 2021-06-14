import React, { useState } from 'react';
import { useAmp } from '../hooks/useAmp';
import { AmpControls } from './AmpControls';

export const AMSynth = () => {
  const [osc, setOsc] = useState({
    frequency: 300,
    type: 'square',
    typeVersion: 2,
    modulationType: 'sine',
    modTypeVersion: 1,
    harmonicity: 1.5,
  });
  const controls = useAmp();

  return <AmpControls controls={controls} />;
};

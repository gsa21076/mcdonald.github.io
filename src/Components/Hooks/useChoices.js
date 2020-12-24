import { useState } from 'react';

export function useChoices() {

  const [choice, setChoice] = useState();
  function changeChoices(event) {
    setChoice(event.target.value);
  }
  return { choice, changeChoices };
}
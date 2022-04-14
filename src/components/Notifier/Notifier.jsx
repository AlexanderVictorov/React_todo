import React from 'react';
import toaster from 'toasted-notes';
import 'toasted-notes/src/styles.css';

function Notifier() {
  return (
    // eslint-disable-next-line react/button-has-type
    <button
      onClick={() => {
        toaster.notify('Hello world', {
          duration: 2000,
        });
      }}
    >
      Say hello
    </button>
  );
}

export default Notifier;

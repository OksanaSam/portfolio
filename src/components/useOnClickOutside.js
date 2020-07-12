import React, { Fragment, useEffect} from 'react';

const useOnClickOutside = (ref, callback) => {

  useEffect(() => {
    const target = ref.current;
    const eventHandler = e => {
      if (!target || target.contains(e.target)) return;
      callback(e);
    };
    
    document.addEventListener('click', eventHandler);

    return () => document.removeEventListener('click', eventHandler);
  }, [ref, callback]);
};

export default useOnClickOutside;



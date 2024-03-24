import React, { useEffect } from 'react';
// Assuming you have a favicon in the src/assets directory
import favicon from '../../assets/must_in_rust_logo_rusty.ico';

const Favicon = () => {
  useEffect(() => {
    // We create a link element for the favicon
    const link = document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = favicon;
    // We append it to the head of the document
    document.getElementsByTagName('head')[0].appendChild(link);
  }, []);

  return null;
};

export default Favicon;

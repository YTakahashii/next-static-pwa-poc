import { useState, useEffect } from 'react';

export const Header = () => {
  const [objState, setObjState] = useState({ name: 'World' });

  useEffect(() => {
    setObjState({ name: 'World' });
  }, []);

  return <h1 style={{ color: 'red' }}>Test Header</h1>;
};

Header.whyDidYouRender = true;


import React, { useEffect } from 'react';

const Foo = () => {

  useEffect(() => {
    document.title = 'Foo Test Page';
  }, []);

  return (
    <h1>Hello World JSX</h1>
  );
}

export default Foo;
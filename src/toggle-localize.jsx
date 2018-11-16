import React from 'react';

export default (props) => {
  const handleClick = (e) => {
    e.preventDefault();
    window.Localize.initialize({
      key: 'lWUtLIAbHKtTE',
      rememberLanguage: true
    });
  };
  return (
    <button onClick={handleClick}>Turn on Localize</button>
  )
}

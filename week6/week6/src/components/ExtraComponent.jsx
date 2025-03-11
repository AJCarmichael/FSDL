import React, { useState } from 'react';
import './ExtraComponent.css';

function ExtraComponent() {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div className="extra-component">
      <h2>Extra Component</h2>
      <p>This is an extra component with some interesting functionality.</p>
      <button className="toggle-button" onClick={handleToggle}>
        {isToggled ? 'Hide' : 'Show'} Details
      </button>
      {isToggled && <p>Here are some more details...</p>}
    </div>
  );
}

export default ExtraComponent;
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Tooltip = ({ position, content, children }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
  };

  const getTooltipStyle = () => {
    
    switch (position) {
      case 'top':
        return { bottom: '100%', left: '50%', transform: 'translateX(-50%)' };
      case 'right':
        return { top: '50%', left: '100%', transform: 'translateY(-50%)' };
      case 'left':
        return { top: '50%', right: '100%', transform: 'translateY(-50%)' };
      case 'bottom':
      default:
        return { top: '100%', left: '50%', transform: 'translateX(-50%)' };
    }
  };

  return (
    <div
      className="tooltip-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {isVisible && (
        <div className={`tooltip tooltip-${position}`} style={getTooltipStyle()}>
          {content}
        </div>
      )}
    </div>
  );
};

Tooltip.propTypes = {
  position: PropTypes.oneOf(['top', 'right', 'left', 'bottom']),
  content: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Tooltip;

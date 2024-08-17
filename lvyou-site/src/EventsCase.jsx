import  { useState } from 'react';

const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  // 样式对象
  const styles = {
    toggleSwitch: {
      width: '50px',
      height: '26px',
      backgroundColor: isOn ? '#4CAF50' : '#ccc',
      borderRadius: '34px',
      padding: '4px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    },
    handle: {
      width: '26px',
      height: '26px',
      backgroundColor: 'white',
      borderRadius: '50%',
      transition: 'transform 0.3s ease',
      transform: isOn ? 'translateX(26px)' : 'translateX(0)',
    }
  };

  return (
    <div style={styles.toggleSwitch} onClick={() => setIsOn(!isOn)}>
      <div style={styles.handle}></div>
    </div>
  );
};

export default ToggleSwitch;
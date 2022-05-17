import React, { useState, useRef, useCallback, useEffect } from 'react';

const SimpleHabit = () => {
  const [count, setCount] = useState(0);
  //   const spanRef = React.createRef();
  const spanRef = useRef();

  const handleIncrement = useCallback(() => {
    setCount(count + 1);
  });

  useEffect(() => {
    console.log(`mounted & updated!: ${count}`);
  }, []); // 두번째 인자로 텅텅 빈거 전달하면 한번만 호출 , 인자를 전달도 가능 [count], 아무것도 없으면 state 값 전달
  return (
    <li className="habit">
      <span ref={spanRef} className="habit-name">
        Reading
      </span>
      <span className="habit-count">{count}</span>
      <button className="habit-button habit-increase" onClick={handleIncrement}>
        <i className="fas fa-plus-square"></i>
      </button>
    </li>
  );
};

export default SimpleHabit;

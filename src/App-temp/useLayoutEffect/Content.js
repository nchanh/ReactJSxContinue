import { useEffect, useLayoutEffect, useState } from "react";

function Content() {
  const [count, setCount] = useState(1);

  useLayoutEffect(() => {
    if (count > 3) setCount(0) 
  }, [count ]);

  const countNumber = () => {
    setCount(count + 1);
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>{count}</h1>
      <button onClick={countNumber}>count</button>
    </div>
  );
}

export default Content;

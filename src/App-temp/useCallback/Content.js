import { memo } from "react";

function Content({ onCount }) {
  console.log('render');

  return (
    <>
      <h1>content</h1>
      <button onClick={onCount}>count</button>
    </>
  );
}

export default memo(Content);

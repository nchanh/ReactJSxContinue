import { memo, useEffect, useLayoutEffect, useState } from "react";

function Content({count}) {
  console.log('render');

  return (
    <div style={{ padding: 20 }}>
      <h1>content {count}</h1>
    </div>
  );
}

export default memo(Content);

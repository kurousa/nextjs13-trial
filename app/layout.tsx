"use client";

import { useState } from "react";
import { FC, PropsWithChildren } from "react";

const RootLayout:FC<PropsWithChildren> = ({ children }) => {
  const [count, setCount] = useState(0);
  return (
    <html>
      <head>
        <title>Next.js 13</title>
      </head>
      <body>
        <div>{count}</div>
        <button onClick={() => setCount(count + 1)}>
          +
        </button>
        {children}
      </body>
    </html>
  )
}

export default RootLayout;
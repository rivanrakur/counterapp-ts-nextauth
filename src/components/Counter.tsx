'use client';

import React, { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="m-auto flex h-screen items-center justify-center text-center">
      <div>
        <div className="mb-3 flex items-center justify-center text-4xl font-semibold">
          <h1 className="">Current Count :</h1>
          <h1 className="mx-1">{count}</h1>
        </div>
        <div className="grid grid-cols-2">
          <div className="">
            <button
              className="border-red-300 bg-red-500 text-white rounded-lg border-2 px-2 py-2"
              type="button"
              onClick={increment}
            >
              Increment
            </button>
          </div>
          <div>
            <button
              className="border-stone-600 rounded-lg border-2 px-2 py-2"
              type="button"
              onClick={decrement}
            >
              Decrement
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

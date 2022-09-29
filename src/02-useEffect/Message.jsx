import { useEffect, useState } from "react";

export const Message = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    //   console.log('Message mounted');
    const onMouseMove = ({ x, y }) => {
    //   const coords = { x, y };
    setCoords({x,y})
    };
    window.addEventListener("mousemove", onMouseMove);

    return () => {
      // console.log('Message Unmounted');
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <>
      <h3>usuario ya existe</h3>
      {
        <h2>{JSON.stringify(coords)}</h2>
      }
    </>
  );
};

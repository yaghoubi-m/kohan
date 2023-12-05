'use client';
import { useEffect, useRef, useState } from 'react';
import styles from './test.module.css';
function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

const sum = (array) => {
  if (!array.length > 0) return;
  if (array.length === 1) return array[0];
  return array[0] + sum(array.slice(1));
};

const a0 = [...Array(1000).keys()];
const a = [...Array(1000).keys()].map((i) => 2 * i + 3);
const a2 = a.map((i) => i ** 2);
const a3 = [0, 9, 34, 83, 164];
const getLayerNumber = (index) => {
  if (index < 9) return 1;
  if (index < 34) return 2;
  if (index < 83) return 3;
  if (index < 164) return 4;
  return 5;
};

export const Test = () => {
  const { height, width } = useWindowDimensions();
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleWindowMouseMove = (event) => {
      setCoords({
        x: event.clientX,
        y: event.clientY,
      });
    };
    // window.addEventListener('mousemove', handleWindowMouseMove);
    ref.current.addEventListener('mousemove', handleWindowMouseMove);

    return () => {
      // window.removeEventListener('mousemove', handleWindowMouseMove);
      ref.current.removeEventListener('mousemove', handleWindowMouseMove);
    };
  }, []);

  const [number, setNumber] = useState(1);
  const logoWidth = 8;
  const logoHeight = 18;
  //   const logoWidth = 8;
  //   const logoHeight = 11;
  //   const itemWidth = 10;
  const itemWidth = 10;
  //   const itemHeight = 30;
  const itemHeight = 30;
  const verticalGap = 3;
  const horizontalGap = 3;
  let count = 0;
  const items = [...Array(number).keys()];
  const ref = useRef()
  return (
    <>
      <input
        style={{ width: '20px', height: '20px' }}
        // className="w-10 h-8"
        onChange={(e) => setNumber(Number(e.target.value))}
        value={number}
      />
      <p style={{ width: '20px', height: '20px' }}>{number}</p>

      <div ref={ref} className={styles.con}>
        <div
          className={styles.con1}
          style={{
            backgroundColor: 'red',
            width: logoWidth + '%',
            height: logoHeight + '%',

            top: 50 + 50 - (100 * coords.y) / height + '%',
            left: 50 + 50 - (100 * coords.x) / width + '%',
          }}
        ></div>
        {[...Array(100000).keys()].map((item, i) => {
          if (count > number) return;
          const layer = getLayerNumber(i);
          const index = i - a3[layer - 1];
          const topIndex = Math.floor(index / (2 * layer + 1)) - layer;
          const leftIndex = (index % (2 * layer + 1)) - layer;
          if (
            -layer < topIndex &&
            topIndex < layer &&
            -layer < leftIndex &&
            leftIndex < layer
          )
            return;
          const top =
            50 +
            50 -
            (100 * coords.y) / height +
            +topIndex * ((itemHeight + itemHeight) / 2 + verticalGap);
          const left =
            50 +
            50 -
            (100 * coords.x) / width +
            leftIndex * ((logoWidth + itemWidth) / 2 + horizontalGap);
          const topDiff = top - 50;
          const leftDiff = left - 50;
          if (-0.1 < topDiff && topDiff < 0.1 && -0.1 < leftDiff && leftDiff < 0.1)
            return;
          //   console.log(i);
          count += 1;

          return (
            <div
              className={styles.con2}
              style={{
                backgroundColor: 'blue',
                width: itemWidth + '%',
                height: itemHeight + '%',
                top: top + '%',
                left: left + '%',
                color: 'white',
                fontSize: '14',
              }}
            >
              {items[count]}
            </div>
          );
        })}
      </div>
    </>
  );
};

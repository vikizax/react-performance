import { useState } from 'react';
import SlowComponent from '../../../components/SlowComponent';
import IWillRotateBlock from './IWillRotateBlock';
const SlowPage = () => {

  const [rotateX, setRotateX] = useState(0);

  const rotationHandler = (_: React.WheelEvent<HTMLDivElement>) => {
    setRotateX(Math.floor(Math.random() * 360))
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        cursor: 'pointer'
      }}
      onClick={rotationHandler}
    >
      <h1>I AM SLOW!</h1>
      <SlowComponent waitTime={100} />
      <IWillRotateBlock rotationValue={rotateX} />
    </div>
  )


}

export default SlowPage;
import { useState, MouseEvent } from 'react'
import SlowComponent from '../../../components/SlowComponent';
import IWillRotateBlock from './IWillRotateBlock';
const SlowPage = () => {

  const [rotateX, setRotateX] = useState(0);

  const rotationHandler = (e: React.WheelEvent<HTMLDivElement>) => {
    setRotateX(Math.floor(Math.random() * 360))
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
      onClick={rotationHandler}
    >
      <h1>I AM SLOW!</h1>
      <IWillRotateBlock rotationValue={rotateX} />
      <SlowComponent waitTime={600} />
    </div>
  )


}

export default SlowPage;
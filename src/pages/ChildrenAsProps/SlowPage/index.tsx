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
      onClick={rotationHandler}
      className='cursor-pointer flex flex-col gap-4 select-none w-fit'
    >
      <h4>I AM SLOW!</h4>
      <SlowComponent waitTime={180} />
      <IWillRotateBlock rotationValue={rotateX} />
    </div>
  )


}

export default SlowPage;
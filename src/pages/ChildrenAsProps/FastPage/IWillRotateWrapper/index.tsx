import { useState } from 'react';
import IWillRotateBlock from './IWillRotateBlock';

interface IWillRotateWrapperParams {
    children: JSX.Element
}

const IWillRotateWrapper = ({ children }: IWillRotateWrapperParams) => {
    const [rotateX, setRotateX] = useState(0);

    const rotationHandler = (_: React.WheelEvent<HTMLDivElement>) => {
        setRotateX(Math.floor(Math.random() * 360))
    }

    return (
        <div
            className='flex flex-col cursor-pointer select-none gap-4 w-fit'
            onClick={rotationHandler}
        >
            {children}
            <IWillRotateBlock rotationValue={rotateX} />
        </div>
    )



}

export default IWillRotateWrapper;
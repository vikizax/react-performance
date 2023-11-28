import { useState } from 'react';
import IWillRotateBlock from './IWillRotateBlock';

interface IWillRotateWrapperParams {
    children: JSX.Element
}

const IWillRotateWrapper = ({children }: IWillRotateWrapperParams) => {
    const [rotateX, setRotateX] = useState(0);

    const rotationHandler = (_: React.WheelEvent<HTMLDivElement>) => {
        setRotateX(Math.floor(Math.random() * 360))
    }

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                cursor: 'pointer',
                userSelect: 'none'
            }}
            onClick={rotationHandler}
        >
            {children}
            <IWillRotateBlock rotationValue={rotateX} />
        </div>
    )



}

export default IWillRotateWrapper;
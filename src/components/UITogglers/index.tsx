import { useState } from 'react';
import ActionButton from '../ActionButton';

const UITogglers = ({ children, title }: { children: JSX.Element, title: string }) => {
    const [show, setShow] = useState<boolean>(false);

    const toggleUIState = () => {
        setShow(prev => !prev)
    }

    return <>
        <ActionButton label={title} action={toggleUIState} />
        {
            show && children
        }
    </>
}

export default UITogglers
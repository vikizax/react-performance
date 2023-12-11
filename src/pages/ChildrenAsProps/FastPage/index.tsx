import SlowComponent from '../../../components/SlowComponent';
import IWillRotateWrapper from './IWillRotateWrapper';
const FastPage = () => {
    return (
        <>
            <IWillRotateWrapper>
                <>
                    <h4 className='font-bold'>I AM FAST!</h4>
                    <SlowComponent waitTime={180} />
                </>
            </IWillRotateWrapper>
        </>
    )


}

export default FastPage;
import SlowComponent from '../../../components/SlowComponent';
import IWillRotateWrapper from './IWillRotateWrapper';
const FastPage = () => {
    return (
        <>
            <IWillRotateWrapper>
                <>
                    <h1>I AM SLOW!</h1>
                    <SlowComponent waitTime={600} />
                </>
            </IWillRotateWrapper>
        </>
    )


}

export default FastPage;
type IWillRotateBlockProps = {
    rotationValue: number
}

const IWillRotateBlock = ({ rotationValue }: IWillRotateBlockProps) => {

    return <div style={{
        transform: `rotate(${rotationValue}deg)`,
        textAlign: 'center',
        transition: 'transform 2s',
        userSelect: 'none'
    }}>I rotate!</div>
}

export default IWillRotateBlock;
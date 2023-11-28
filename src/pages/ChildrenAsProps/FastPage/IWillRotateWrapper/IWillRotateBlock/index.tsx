type IWillRotateBlockProps = {
    rotationValue: number;
}

const IWillRotateBlock = ({ rotationValue }: IWillRotateBlockProps) => {
    return <div style={{
        transform: `rotate(${rotationValue}deg)`,
        textAlign: 'center',
        transition: 'transform 2s',
        userSelect: 'none',
        width: 'fit-content'
    }}
    >
        I rotate!
    </div>
}

export default IWillRotateBlock;
type IWillRotateBlockProps = {
    rotationValue: number;
}

const IWillRotateBlock = ({ rotationValue }: IWillRotateBlockProps) => {
    return <div style={{
        transform: `rotate(${rotationValue}deg)`,
    }}
        className={`text-center w-fit select-none duration-200 transform-gpu`}
    >
        I rotate!
    </div>
}

export default IWillRotateBlock;
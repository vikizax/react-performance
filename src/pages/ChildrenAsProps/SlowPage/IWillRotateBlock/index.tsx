type IWillRotateBlockProps = {
    rotationValue: number
}

const IWillRotateBlock = ({ rotationValue }: IWillRotateBlockProps) => {
    return <div
        style={{
            transform: `rotate(${rotationValue}deg)`,
        }}
        className='text-center transition-transform duration-200 select-none w-fit transform-gpu'
    >I rotate!</div>
}

export default IWillRotateBlock;
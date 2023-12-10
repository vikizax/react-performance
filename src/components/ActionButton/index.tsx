export type ActionButtonParams = {
    label: string;
    action: (e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    fullWidth?: boolean
}
const ActionButton = ({ action, label, fullWidth = false }: ActionButtonParams) => {
    return <button className={`
    ${!fullWidth ? 'w-fit' : ''}
    border-r 
    border-y 
    p-2 
    rounded-r-lg  
    text-muted
    active:font-light
    active:text-muted-foreground
    active:border-muted-foreground
    `}
        onClick={action} >
        {label}
    </button >
}

export default ActionButton;
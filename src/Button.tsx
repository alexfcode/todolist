type ButtonPropsType = {
    title: string
}

export const Button = ({ title }: ButtonPropsType) => {
    return(
        <button>{title}</button>
    )

}
type FormProps = {
    onChange: (e: any) => void;
    onBlur: (e: any) => void;
    value: string
    type: string
    name: string
    className: string
}

const FormInput = ({ onChange, onBlur, value, type, name, className }: FormProps) => {
    return (
        <>
            <input
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                type={type}
                name={name}
                placeholder={name}
                className={className}
                id={name}
            />
        </>
    )
}

export default FormInput
const FormInput = ({ onChange, onBlur, value, type, name, className }) => {
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
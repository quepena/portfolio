interface TextAreaProps extends React.InputHTMLAttributes<HTMLTextAreaElement> {
    id: string;
    name: string;
    label: string;
    placeholder: string;
    type?: string;
    error?: boolean;
    errorMessage?: string;
}

const TextArea = ({
    id,
    name,
    label,
    placeholder,
    error,
    errorMessage,
    ...props
}: TextAreaProps) => {

    return (
        <div className="textarea-div">
            <div className="label-error">
                <label htmlFor={id}>
                    {label}
                </label>
                {error && <p className="error-message">*{errorMessage}</p>}
            </div>
            <textarea
                {...props}
                id={id}
                name={name}
                rows={5}
                placeholder={placeholder}
            ></textarea>
        </div>
    );
};
export default TextArea;
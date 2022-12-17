import axios from "axios";
import { useState } from "react";
import { validate } from "./Validation";
import Input from "./Input";
import TextArea from "./TextArea";

interface IValues {
    name: string;
    email: string;
    message: string;
}

interface IErrors extends Partial<IValues> { }

export const Form = () => {
    const [values, setValues] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [errors, setErrors] = useState<IErrors>({});
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [messageState, setMessageState] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const errors = validate(values);
        if (errors && Object.keys(errors).length > 0) {
            return setErrors(errors);
        }
        setErrors({});
        setLoading(true);
        axios.post("/api/mail", {
            name: values.name,
            email: values.email,
            message: values.message,
        }).then((res) => {
            if (res.status === 200) {
                setValues({ name: "", email: "", message: "" });
                setLoading(false);
                setSuccess(true);
                setMessageState(res.data.message);
            } else {
                setLoading(false);
                setMessageState(res.data.message);
            }
        }).catch((err) => {
            setLoading(false);
            setMessageState(String(err.message));
        });
        setLoading(false);
    };
    const handleChange = (
        e:
            | React.ChangeEvent<HTMLInputElement>
            | React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        setValues((prevInput) => ({
            ...prevInput,
            [e.target.name]: e.target.value,
        }));
    };

    return (
        <form className="contact-form" onSubmit={handleSubmit}>
            <div className="inputs">
                <Input
                    value={values.name}
                    onChange={handleChange}
                    id="name"
                    name="name"
                    label="Name"
                    placeholder="John Doe"
                    error={!!errors.name}
                    errorMessage={!!errors.name ? errors.name : ""}
                />
                <Input
                    value={values.email}
                    onChange={handleChange}
                    id="email"
                    name="email"
                    label="E-mail"
                    placeholder="you@example.com"
                    error={!!errors.email}
                    errorMessage={!!errors.email ? errors.email : ""}
                />
            </div>
            <TextArea
                value={values.message}
                onChange={handleChange}
                id="message"
                name="message"
                label="Message"
                placeholder="Leave your message here"
                error={!!errors.message}
                errorMessage={!!errors.message ? errors.message : ""}
            />
            <button className="contact-btn"
                type="submit"
                disabled={loading}
            >
                {loading !== true ? (
                    "Contact me"
                ) : (
                    <div></div>
                )}
            </button>
            <p>
                {success !== false ? (
                    messageState
                ) : (
                    <span>{messageState}</span>
                )}
            </p>
        </form>
    );
};
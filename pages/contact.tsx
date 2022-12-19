import React from 'react'
import Head from "next/head";
import { Form } from "../components/Form";

const Contact = () => {
    return (
        <div className='section'>
            <div className='contacts-contents'>
                    <div className='label'>CONTACT ME</div>
                    <Form />
            </div>
        </div>
    )
}

export default Contact
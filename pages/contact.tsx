import React from 'react'
import Head from "next/head";
import { Form } from "../components/Form";

const Contact = () => {
    return (
        <div className='section'>
            <div className='contacts'>
                <div className='label'>CONTACT ME</div>
                <div className='contacts-contents'>
                    <div>
                        <Form />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
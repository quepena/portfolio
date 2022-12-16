import React from 'react'
import Head from "next/head";
import { Form } from "../components/Form";

const Contact = () => {
    return (
        <div className='section'>
            <div className='contacts'>
                <div className='label'>CONTACTS</div>
                <div className='contacts-contents'>
                    <Head>
                        <title>Contact form with Sendgrid</title>
                        <meta name="description" content="Generated by create next app" />
                        <link rel="icon" href="/favicon.ico" />
                    </Head>
                    <main className="h-screen">
                        <h1>
                            Contact form with <span>SendGrid</span>
                        </h1>
                        <div>
                            <Form />
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
}

export default Contact
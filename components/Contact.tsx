import React from "react";
import {motion} from "framer-motion";
import {EnvelopeIcon, MapPinIcon, PhoneIcon} from "@heroicons/react/24/solid";
import {SubmitHandler, useForm} from "react-hook-form";

type Props = {};

type Inputs = {
    name: string,
    email: string,
    subject: string,
    message: string
}


export default function Contact(props: Props) {

    const {register, handleSubmit} = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href = `mailto:mrmich20@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}, I am contacting you about ${formData.subject}. ${formData.message}`;
    }

    return (
        <motion.div
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 1.5}}
            className="flex flex-col relative h-screen text-center md:text-left md:flex-row
            max-w-7xl px-10 justify-evenly mx-auto items-center">

            <h3 className="custom-header">
                Contact
            </h3>

            <div className="flex flex-col justify-center items-center space-y-10">

                <h4 className="text-4xl font-semibold">I have got just what you need.
                    <span className="underline decoration-[#F7AB0A]/50">
                        {" "} Let&apos;s talk.
                    </span>
                </h4>

                <div className="flex flex-col items-start space-y-2 text-lg">

                    <div className="flex justify-center items-center space-x-2">
                        <PhoneIcon className="w-5 h-5 text-[#F7AB0A] animate-pulse"/>
                        <p>064665466545</p>
                    </div>
                    <div className="flex justify-center items-center space-x-2">
                        <EnvelopeIcon className="w-5 h-5 text-[#F7AB0A] animate-pulse"/>
                        <p>text@gmail.com</p>
                    </div>
                    <div className="flex justify-center items-center space-x-2">
                        <MapPinIcon className="w-5 h-5 text-[#F7AB0A] animate-pulse"/>
                        <p>2 rue des dogs</p>
                    </div>

                </div>

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col space-y-2 w-fit mx-auto">
                    <div className="flex space-x-2">
                        <input {...register('name')} type="text" placeholder="Name" className="contact-input"/>
                        <input {...register('email')} type="email" placeholder="Email" className="contact-input"/>
                    </div>
                    <input {...register('subject')} type="text" placeholder="Subject" className="contact-input"/>
                    <textarea {...register('message')} placeholder="Message" className="contact-input resize-none"/>
                    <button
                        type="submit"
                        className="rounded-md bg-[#F7AB0A] py-4 text-black text-lg font-bold">
                        Submit
                    </button>
                </form>

            </div>
        </motion.div>
    );
}

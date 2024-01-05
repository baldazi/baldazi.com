import React, {useState, useRef} from 'react';
import {FiMail} from 'react-icons/fi';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {
    const form = useRef()
    const [email, setEmail] = useState("")
    const [subject, setSubject] = useState("")
    const [body, setBody] = useState("")
    
    const removeExtraSpace = (s) => s.trim().split(/ +/).join(' ');

    const errorSubmit = (msg)=> toast.error(msg, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            })

    const handleMsgSubmit = (e) => {
        e.preventDefault()
        if(email.length===0||subject.length===0||body.length===0){
            errorSubmit('remplissez tous les champs')
        }else if (removeExtraSpace(subject).length < 5) {
            errorSubmit("sujet trop court")
        }else if (removeExtraSpace(body).length<10){
            errorSubmit("message trop court")
        }else{
            emailjs.sendForm('service_7gv5nm1', 'template_xb4chge', form.current, 'F-m0ekkLox8ALPA8Y')
            .then(() => {
                toast.success(`🦄 message reçu!`, {
                    position: "top-right",
                    autoClose: 6000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    });
                    toast.info(`n'abusez pas du formulaire car le nombre de message est limité`, {
                        position: "top-right",
                        autoClose: false,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                        });
            }, (error) => {
                console.log(error.text);
            });
            setEmail("")
            setSubject("")
            setBody("")
        }
        
    }
    return (
        <div className="hero min-h-screen bg-base-200">
        <ToastContainer />
            <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Ecrivez-moi un message!</h1>
                        <p className="py-6 md:w-72">
                            Si vous souhaitez me contacter pour une quelconque raison, que ce soit pour discuter de collaborations professionnelles ou pour simplement me dire bonjour, n'hésitez pas de m'envoyer un message sur l'addresse mail 
                            <br/><a href="mailto:contact@baldazi.com" className="mx-1 link link-success italic"><FiMail className="inline"/> contact@baldazi.com</a> 
                            ou à utiliser le formulaire de contact ci-dessous.

                            Je m'efforce de répondre à tous les messages dans les plus brefs délais, alors veuillez m'excuser si je ne réponds pas immédiatement.
                        </p>
                    </div>
                    
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={e => handleMsgSubmit(e)} ref={form}>
                        <div className="form-control">
                            {/* email */}
                            <input type="email" placeholder="email" className="input input-bordered focus:outline-emerald-400" value={email} onChange={e => setEmail(e.target.value)} name="sender"/>
                        </div>

                        <div className="form-control">
                            {/* subject */}
                            <input type="text" placeholder="Sujet" className="input input-bordered focus:outline-emerald-400" value={subject} onChange={e => setSubject(e.target.value)} name="subject"/>
                        </div>

                        <div className="form-control">
                            {/** content */}
                            <textarea type="text" placeholder="entrez votre message ici..." className="input input-bordered focus:outline-emerald-400 h-24" value={body} onChange={e => setBody(e.target.value)} name="message"></textarea>
                        </div>
                        <span className={body.length > 10?"hidden":"text-end"}>
                                {body.length}/10 min
                        </span>
                        <div className="form-control mt-0.5">
                            <button className="btn hover:text-white bg-emerald-800 border-emerald-900 hover:bg-emerald-400" type="submit">Envoyer</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;
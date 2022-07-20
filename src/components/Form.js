import React, { useState } from "react";
import img from "../images/logo1.png"
import logo from "../images/logo.png"
import axios from "axios"
import Popup from "./PopUp"

export default function Form()  {
    const [ form, setForm ] = useState({
        name: '',
        svn_no: '',
        rank: '',
        cmd: '',
        phone_no: '',
        email: '',
        bank: '',
        account: '',
        pop: null
    })

   const updateForm = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    
   const submitForm = e => {
        e.preventDefault();
        console.log(form)

        axios.post('https://sheet.best/api/sheets/afcf2d3c-b697-446c-8b8f-971af9c65e90', form)
             .then( response => {
                console.log(response)
            })
            .catch((error) => {
                console.log(error);
            });
        setForm({ pop: true, name : '', svn_no: '', rank: '', cmd: '', phone_no: '', email: '', bank: '', account: '',  })
    }

    return (
        <section className="mt-28">
        <div className="flex flex-wrap">
        {  form.pop ? ( <Popup /> ) : null  }
            <div className="hidden lg:block relative w-full lg:w-1/2 bg-green-600">
                <div className="absolute bottom-0 inset-x-0 mx-auto mb-12 max-w-xl text-center" style={{zIndex: 10}}>
                    <img className="lg:max-w-xl mx-auto" src={img} alt="" />
                    <h2 className="mb-2 text-2xl text-white font-bold">OSID TRAINING ALLOWANCE</h2>
                    <div className="max-w-lg mx-auto">
                        <p className="mb-6 text-gray-50 leading-loose">Submit your details to get paid.</p>
                    </div>
                </div>
            </div>
            <div className="lg:hidden bg-green-600 w-full">
                <div className="relative w-full">
                    <img className="relative mx-auto max-w-sm mt-4 mb-4 block" src={img} alt="" />
                </div>
                <div className="py-10 px-3 text-center" style={{zIndex: 10}}>
                    <h2 className="mb-2 text-2xl text-white font-bold">OSID TRAINING ALLOWANCE</h2>
                    <p className="mb-6 text-gray-50 leading-loose">Submit your details to get paid.</p>
                </div>
            </div>
            <div className="pt-6 lg:pt-16 pb-6 w-full lg:w-1/2">
            <div className="max-w-md mx-auto">
                <div className="mb-6 lg:mb-10 w-full px-3 flex items-center justify-between">
                    <a className="text-3xl font-bold leading-none" href="./">
                    </a>
                </div>
                <div>
                <div className="mb-6 px-3">
                    <h3 className="text-xl font-semibold">Please fill in the necessary details</h3>
                </div>
                <form  onSubmit={submitForm} >
                    <div className="flex flex-wrap">
                        <div className="mb-3 w-full lg:w-1/2 px-2">
                            <input className="w-full p-4 text-xs bg-gray-50 outline-none rounded" type="text" placeholder="Name"
                            name = "name" value = {form.name} onChange={updateForm} 
                            />
                        </div>
                        <div className="mb-3 w-full lg:w-1/2 px-2">
                            <input className="w-full p-4 text-xs bg-gray-50 outline-none rounded" type="text" placeholder="Service Number" 
                            name = "svn_no" value = {form.svn_no} onChange={updateForm}
                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap">
                        <div className="mb-3 w-full lg:w-1/2 px-2">
                            <input className="w-full p-4 text-xs bg-gray-50 outline-none rounded" type="text" placeholder="Rank"
                            name = "rank" value = {form.rank} onChange={updateForm} 
                            />
                        </div>
                        <div className="mb-3 w-full lg:w-1/2 px-2">
                            <input className="w-full p-4 text-xs bg-gray-50 outline-none rounded" type="text" placeholder="Directorate/Command" 
                            name = "cmd" value = {form.cmd} onChange={updateForm}
                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap">
                        <div className="mb-3 w-full lg:w-1/2 px-2">
                            <input className="w-full p-4 text-xs bg-gray-50 outline-none rounded" type="text" placeholder="Bank"
                            name = "bank" value = {form.bank} onChange={updateForm} 
                            />
                        </div>
                        <div className="mb-3 w-full lg:w-1/2 px-2">
                            <input className="w-full p-4 text-xs bg-gray-50 outline-none rounded" type="text" placeholder="Account Number" 
                            name = "account" value = {form.account} onChange={updateForm}
                            />
                        </div>
                    </div>
                    <div className="mb-3 flex p-4 mx-2 bg-gray-50 rounded">
                    <input className="w-full text-xs bg-gray-50 outline-none" type="email" placeholder="name@email.com"
                    name = "email" value = {form.email} onChange={updateForm}
                    />
                    <svg className="h-6 w-6 ml-4 my-auto text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"></path>
                    </svg>
                    </div>
                    <div className="mb-6 flex p-4 mx-2 bg-gray-50 rounded">
                        <input className="w-full p-4 text-xs bg-gray-50 outline-none rounded" type="text" placeholder="Phone Number"
                        name = "phone_no" value = {form.phone_no} onChange={updateForm}
                        />
                    </div>
                    <div className="px-3 text-center">
                    <button className="mb-2 w-full py-4 bg-green-600 hover:bg-green-700 rounded text-sm font-bold text-gray-50 transition duration-200">Submit</button>
                    </div>
                </form>
                </div>
            </div>
            </div>
            </div>
        </section>
            )
        }

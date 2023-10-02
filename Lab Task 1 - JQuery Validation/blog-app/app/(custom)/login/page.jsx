"use client"
import { Button } from '@nextui-org/button'
import { Input } from '@nextui-org/input'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faKey, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import $ from 'jquery';
import 'jquery-validation';
import React, { useEffect } from 'react'

export default function Login () {

    const handleLogin = () => {
      $('#loginForm').submit();
    };

    useEffect(() => {
        $('#loginForm').validate({
            rules: {
                emailInput: {
                    required: true,
                    email: true,
                },
                passwordInput: {
                    required: true,
                    minlength: 8,
                },
            },
            messages: {
                emailInput: {
                    required: 'Please enter your email address',
                    email: 'Please enter a valid email address',
                },
                passwordInput: {
                    required: 'Please enter your password',
                    minlength: 'Password must be at least 8 characters long',
                },
            },
            submitHandler: function (form) {
                if ($('#loginForm').valid()) {
                    console.log('Form submitted');
                } else {
                    console.log('Form not submitted. Please check your inputs.');
                }
            },
        });
    }, []);
    

    return (
        <div className='w-full flex justify-center items-center h-[100vh]'>
            <div className='flex flex-col gap-12 justify-center items-center bg-background-900 min-w-[400px] h-[90vh] rounded-xl'>
                <p className={`text-3xl font-semibold text-center`}>Welcome Back!</p>
                <form id="loginForm">
                    <Input
                        id="emailInput"
                        classNames={{
                            inputWrapper: "bg-default-100",
                        }}
                        labelPlacement="outside"
                        placeholder="Enter email..."
                        startContent={
                            <FontAwesomeIcon icon={faEnvelope} className="h-4 w-4 text-base text-default-400 pointer-events-none flex-shrink-0" />
                        }
                        type="email"
                        className='mb-4'
                    />
                    <Input
                        id="passwordInput"
                        classNames={{
                            inputWrapper: "bg-default-100",
                        }}
                        labelPlacement="outside"
                        placeholder="Enter Password..."
                        startContent={
                            <FontAwesomeIcon icon={faKey} className="h-4 w-4 text-base text-default-400 pointer-events-none flex-shrink-0" />
                        }
                        type="password"
                        className='mb-4'
                    />
                    <Button color='primary' className='w-full' onClick={handleLogin}>Login</Button>
                </form>
            </div>
        </div>
    )
}

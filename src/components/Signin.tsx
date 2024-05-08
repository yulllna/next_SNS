'use client'
import { ClientSafeProvider, signIn } from 'next-auth/react';
import React from 'react';
import ColorButton from './ui/ColorButton';

type Props = {
    providers: Record<string, ClientSafeProvider>;
    callbackUrl: string;
}

const Signin = ({providers, callbackUrl}: Props) => {
    console.log(providers)
    return (
        <section className='flex justify-center mt-[30%]'>
            {Object.values(providers).map(({name, id}) => (
                    <ColorButton key={id} text={`sign in with ${name}`} onClick={() => signIn(id, {callbackUrl})} size='big' 
                />
                )
            )
            }
        </section>
    );
};

export default Signin;
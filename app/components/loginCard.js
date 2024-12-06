'use client';

import GitLogo from '../res/GitLogo.png'
import Image from 'next/image'
import {useUserAuth} from '../_utils/auth-context'
import {useRouter } from 'next/navigation'

export default function LoginCard(props) {
    const router = useRouter();
    const {user, gitHubSignIn} = useUserAuth();

    async function handleClick(e) {
        e.preventDefault();
        await gitHubSignIn();
        if(user) {
            router.push('/weather');
        }
    }

    return (
        <div className='flex flex-col bg-white text-center items-center rounded-xl drop-shadow-md'>
            <h1 className='font-semibold text-5xl pt-4'>Login</h1>
            <h2 className='pt-4'>Welcome to Weather Storm</h2>
            <button onClick={(e) => {handleClick(e);}} className='flex flex-row items-center justify-center max-w-sm border rounded-3xl mt-4 mb-4' style={{background:'#2B3137', borderColor:'#24292E'}}>
                <Image className='aspect-square w-8 m-4' src={GitLogo} alt=''/>
                <p className='pr-4 text-white'>Login with Github</p>
            </button>
        </div>
    );
}

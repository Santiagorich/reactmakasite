import React, { useEffect, useState } from 'react'

function Header() {
    const [account, setAccount] = useState('')
    useEffect(() => {
        if (window && window.location && window.location.pathname) {
            const params = new URLSearchParams(window.location.pathname);
            setAccount(params.get('account'))
        }
    }, [])


    return (
        <div className='h-12 flex flex-row justify-between items-center px-4'>
            <span className='font-bold'>Pizzeria lo de maka</span>
            <span>Cuenta: {account}</span>
        </div>
    )
}

export default Header
import React from 'react'
import AdHeader from '../Components/adminlte/AdHeader'
import AdDashboard from '../Components/adminlte/AdDashboard'
import AdFooter from '../Components/adminlte/AdFooter'
import AdMenu from '../Components/adminlte/AdMenu'
const adminlte = () => {
    return (
        <div>
            <AdHeader />
            <AdDashboard />
            <AdMenu />
            <AdFooter />
        </div>
    )
}

export default adminlte

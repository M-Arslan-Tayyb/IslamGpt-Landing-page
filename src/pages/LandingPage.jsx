// eslint-disable-next-line no-unused-vars
import React from 'react'
import Hero from '@/components/core/landingPage/Hero'
import OurCoreValues from '@/components/core/landingPage/OurCoreValues'
import Features from '@/components/core/landingPage/Features'
import RevolutionizingAccess from '@/components/core/landingPage/RevolutionizingAccess'
import StandOut from '@/components/core/landingPage/StandOut'
import FAQ from '@/components/core/landingPage/FAQ'
import ContactUs from '@/components/core/landingPage/ContactUs'
import Footer from '@/components/common/Footer'



const LandingPage = () => {
    return (
        <>

            <Hero></Hero>
            <OurCoreValues></OurCoreValues>
            <Features></Features>
            <RevolutionizingAccess></RevolutionizingAccess>
            <StandOut></StandOut>
            <FAQ></FAQ>
            <ContactUs></ContactUs>

        </>
    )
}

export default LandingPage
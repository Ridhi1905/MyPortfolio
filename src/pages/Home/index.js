import React from 'react'
import Header from '../../components/Header'
import Intro from './Intro'
import About from './about'
import Projects from './projects'
import Certificates from './Certificates'
import Contact from './Contact'
import Footer from './Footer'

function Home() {
    return (
        <div>
            <Header />
            <div className='bg-primary px-40 sm:px-5'>
            <Intro />
            <About />
            <Projects />
            <Certificates />
            <Contact />
            <Footer />
            </div>
        </div>
    )
}

export default Home
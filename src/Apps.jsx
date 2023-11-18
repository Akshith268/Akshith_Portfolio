import React from 'react'
import './Apps.scss';
import { Navbar } from './components/navbar/Navbar';
import { Home } from './components/home/home';
import { About } from './components/about/about';
import { Skill } from './components/skills/skills';
import { Contact } from './components/contact/contact';
export const Apps = () => {
    return <div>
    <section id='Home'>
      <Navbar/>
      <Home/>
    </section> 
  <section id='About'>
    <About/>
  </section>
  <section id='Skills'>
    <Skill/>
  </section>
  <section id='Contact'>
    <Contact/>
  </section>
</div>;
}

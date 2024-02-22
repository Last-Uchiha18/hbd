import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Header.jsx'
import Content from './Content.jsx'
import Surprises from './Suprises.jsx'
import Qualities from './Qualities.jsx'
import Separator from './Separator.jsx'
import CarouselComp from './CarouselComp.jsx'
import './index.css'
import { slides } from "./carouselData.json";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <Content/>
    <Separator/>
    <Qualities/>
    <Separator/>
    <CarouselComp data={slides}/>
    <Separator/>
    <Surprises/>
  </React.StrictMode>
)

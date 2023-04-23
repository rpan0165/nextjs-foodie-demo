'use client';
import Image from 'next/image'
import Header from './components/Header'
import HeroSlider from './components/HeroSlider'
import { useState, useEffect, createElement } from 'react'
// import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Head from 'next/head'
import Link from 'next/link'
import TopNav from './components/TopNav'

import CircularSection from './components/CircularSection'
import Updates from './components/Updates'
import Community from './components/Community'

import CardGridSection from './components/CardgridSection'
import Solutions from './components/Solutions'
import MagazineSection from './components/MagazineSection';
import axios from 'axios';
import dynamic from 'next/dynamic';

import BottomCards from './components/BottomCards'
import ExploreFoodie from './components/ExploreFoodie';

// const inter = Inter({ subsets: ['latin'] })

// to generate dynamic components from recieved list
function ComponentList(props) {
  const components = props.componentNames.map((name, index) => {
    const DynamicComponent = dynamic(() => import(`./components/${name}`));
    return <DynamicComponent key={index} props={props.compData[index]} />;
  });
  return <div>{components}</div>;
}

export default function Home() {

  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [componentData, setComponentData] = useState([]);
  const [componentList, setComponentList] = useState([]);
  const [componentArray, setComponentArray] = useState([]);

  // custom constants to match components due to naming limitations in CS 
  const matchingComponents = ['hero_slider', 'tile_section', 'card_section', 'recipe_section', 'community_section', 'magazine_section', 'insta_section', 'footer_spotlight_section']
  const realComponents = ['HeroSlider', 'CircularSection', 'Updates', 'Solutions', 'Community', 'MagazineSection', 'CardGridSection', 'BottomCards']

  // required arrays to filter the list
  var titleArray; //grab the titles list from the incoming data object
  var identifiedComponentsArray; //intermidiate array to get the incoming component indexes using solid name list
  var Components = []; //Identified components
  var fullComponents = []; //components list with inside data

  const fetchData = async () => {
    setLoading(true)
    let res = await axios.get('https://cdn.contentstack.io/v3/content_types/foodie_homepage/entries?environment=development',
      {
        headers: {
          'api_key': 'blt16b29db83ad01635',
          'access_token': 'cse3066d807437d70a5cc6bee6',
          'Content-Type': 'application/json',
        }
      }
    );
    console.log(res.data);
    setData(res.data);

    //logic to grab the component details from response
    titleArray = res.data.entries[0].modular_blocks.map((component, index) => {
      fullComponents.push(component)
      return Object.keys(component)
    })

    //save the component data into state
    setComponentData(fullComponents);

    identifiedComponentsArray = titleArray.map((title) => {
      var recivedName = title[0]
      return matchingComponents.indexOf(recivedName)
    })

    Components = identifiedComponentsArray.map((component) => {
      return (realComponents[component])
    })

    //save the component names list into state
    setComponentList(Components)
    setLoading(false)
  }

  useEffect(() => {
    // onEntryChange(fetchData)
    fetchData();
  }, [])


  return isLoading && componentData.length < 1 && componentList.length < 1 && componentArray.length < 1 ? (
    <div className="spinner-UI">
      <div className="spinner-container">
        <div className="loading-spinner">
        </div>
      </div>
    </div>

  ) : (
    <>
      {/* <HeroSlider sliderContent={componentData[0].hero_slider.slides} hardCoded={true} />
        <div>
          <ComponentList componentNames={componentList} compData={componentData} />
        </div> */}
      <HeroSlider props={data.entries[0].modular_blocks[0]} />
      <br />
      <br />
      <ExploreFoodie/>
      {/* <CircularSection props={data.entries[0].modular_blocks[1]} /> */}
      <br />
      <br />
      <Updates props={data.entries[0].modular_blocks[2]} />
      <br />
      <br />
      <Solutions props={data.entries[0].modular_blocks[3]} />
      <br />
      <br />
      <Community props={data.entries[0].modular_blocks[4]} />
      <br />
      <MagazineSection props={data.entries[0].modular_blocks[5]} />
      <br />
      <CardGridSection props={data.entries[0].modular_blocks[6]} />
      <br />
      <br />
      <br />
      {/* <BottomCards props={data.entries[0].modular_blocks[7]} /> */}
      <br />
      <br />
      <br />

    </>
  )
}

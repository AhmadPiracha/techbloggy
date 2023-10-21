import styles from './home.module.css'
import Link from 'next/link'
import {NextUIProvider} from "@nextui-org/react";

import Category from '@/components/category/Category'
import Featured from '@/components/featured/Featured'
import CardList from '@/components/cardList/CardList'
import Menu from '@/components/menu/Menu'

export default function App() {
  return (
    
    <div className='container'>
      <Featured/>
      <Category/>
      <div className={styles.content}>
        <CardList/>
        <Menu/>
      </div>
    </div>
  )
}

import styles from './home.module.css'

import Category from '@/components/category/Category'
import Featured from '@/components/featured/Featured'
import CardList from '@/components/cardList/CardList'
import Menu from '@/components/menu/Menu'

export default function Home() {
  return (

    <div className='container'>
      <Featured />
      <Category />
      <div className={styles.content}>
        <CardList />
        <Menu />
      </div>
    </div>
  )
}


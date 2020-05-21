import React, { useState } from 'react'

import InfiniteScroll from 'react-infinite-scroll-component'

import NearbyStore from './components/nearby-store'
import StoreSearchForm from './components/store-search-form'
import Button from '../../../../../components/common/button'

import './styles.scss'

import StoreImage from './images/store-image.png'

const NearbyStoreList = () => {
  const fakeStore = {
    image: StoreImage,
    name: 'Store name',
    distance: '3km',
  }
  const fakeStoreList = []
  for (let i = 0; i < 10; i++) {
    fakeStoreList.push({ ...fakeStore})
  }
  const [fakeStoreListState, setFakeStoreListState] = useState(fakeStoreList)
  const loadMore = () => {
    console.log('loadMore')
    setTimeout(() => {
      for (let i = 0; i < 10; i++) {
        fakeStoreListState.push({ ...fakeStore })
      }
      setFakeStoreListState([...fakeStoreListState])
    }, 1000)
  }
  return (
    <div className='nearby-store-modal'>
      <h3>Nearby Stores</h3>
      <StoreSearchForm />
      <div className='nearby-store-list'>
        <InfiniteScroll
          dataLength={fakeStoreListState.length}
          hasMore={true}
          next={loadMore}
          loader={<h4>Loading...</h4>}
          height={368}
        >
          {fakeStoreListState && fakeStoreListState.map((store, i) => {
            return <NearbyStore store={store} key={i} />
          })}
        </InfiniteScroll>
      </div>
      <div className='all-store-btn'>
        <Button classes={'success no-bg'}>ALL STORES</Button>
      </div>
    </div>
  )
}

export default NearbyStoreList
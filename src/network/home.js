import network from './index'

export function HomeMultiData() {
  return network.network1({
    url: 'home/multidata'
  })
}


export function HomeGoodsData(type,page){
  return network.network2({
    url:'home/data',
    params: {
      type,
      page
    }
  })
}

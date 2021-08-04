import network from './index'



export function detailData(iid) {
  return network.network2({
    url:'/detail',
    params:{
      iid
    }
  })
}

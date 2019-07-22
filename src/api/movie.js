import axios from 'axios'

export  function getMoiveList(){
  return axios.get('https://www.easy-mock.com/project/5ca466ee13e4cf68f04a4308').then((res)=>{
    return res.data
  })
}
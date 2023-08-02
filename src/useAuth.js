// import {useState, useEffect} from 'react'
// import axios from 'axios'


// export default function useAuth(code) { 
//     const [accessToken, setAccessToken] = useState()
//     const [refreshToken, setrefreshToken] = useState()
//     const [expiresIn, setExpiresIn] = useState()

//     useEffect(() => {
//         if (!refreshToken || !expiresIn) return
//         const timeout = setTimeout(() => {
//             axios.post('http://localhost:3001/refresh', {
//                 refreshToken,
//             }).then(res=> {
//                 setAccessToken(res.data.accessToken)
//                 setExpiresIn(res.data.expiresIn)

//             }).catch (() => {
//                 window.location = '/'
//             })
//         }, (expiresIn - 60) * 1000)  
        
//         return () => clearTimeout(timeout)
        
//     }, [refreshToken, expiresIn])

//     return accessToken
// }

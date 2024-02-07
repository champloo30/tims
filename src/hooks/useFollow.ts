// 'use client'

// import { useCallback, useEffect, useMemo, useState } from "react"
// import { getCurrentUser } from "../../actions/getCurrentUser"
// import getUser from "../../actions/getUser"
// import toast from "react-hot-toast"
// import axios from "axios"

// const useFollow = (userId: string, username: string) => {
//   const [following, setFollowing] = useState(false)
  
//   // put function in callback
//   const isFollowing = async () => {
//     const currentUser = await getCurrentUser()
//     const list = currentUser?.followingIds || []

//     list.includes(userId) ? setFollowing(true) : setFollowing(false)

//     return following
//   }
  
//   const toggleFollow = useCallback(async () => {
//     const user = await getUser(username)
    
//     try {
//       let request

//       if (following) {
//         request = () => axios.delete('/api/follow', { data: { username } })
//       } else {
//         request = () => axios.post('api/follow', { ...user, username })
//       }

//       await request()

//       toast.success(following ? `Unfollowed ${user?.username}` : `Followed ${user?.username}`)
//     } catch (error) {
//       toast.error('Something went wrong')
//     }
//   }, [following, username])

//   return { isFollowing, toggleFollow }
// }

// export default useFollow
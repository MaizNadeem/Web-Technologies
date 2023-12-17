import React, { useContext, useEffect, useRef } from 'react'
import { useQuery } from 'react-query'
import { useAuth0 } from '@auth0/auth0-react'

import { getAllFavourites } from '../utils/api'
import UserDetailsContext from '../context/UserDetailsContext'

const useFavourites = () => {
    
    const { userDetails, setUserDetails } = useContext(UserDetailsContext)
    const queryRef = useRef()
    const { user } = useAuth0()

    console.log(userDetails)
    console.log(user)

    const { data, isLoading, isError, refetch } = useQuery({
        queryKey: "allFavourites",
        queryFn: () => getAllFavourites(user?.email, userDetails?.token),
        onSuccess: (data) => setUserDetails(prev => ({ ...prev, favourites: data })),
        enabled: user !== undefined,
        staleTime: 30000,
    })

    queryRef.current = refetch

    useEffect (() => {
        queryRef.current && queryRef.current()
    }, [userDetails?.token])

    return { data, isError, isLoading, refetch }
}

export default useFavourites
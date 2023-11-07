import React from 'react'

export const useCurrentDate = () => {
    const date = new Date()
    const today = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`  //  Add 1 because months are 0-11

    return today
}
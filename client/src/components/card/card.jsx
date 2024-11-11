import React from 'react'
import { LikeIcon } from '../../assets/icons/like-icon'
import { IconButton, Stack, Typography } from '@mui/material'
import { useProducts } from '../../service/useProducts'

export const Card = ({item}) => {
  const {addProduct} = useProducts()
  const handleLike = () => {
    addProduct(item)
  }  

  return (
    <div>
      <Stack>
        <img style={{ width: '100%' }} src={item.img} alt="img" />
        <Stack direction={'row'} mt={'8px'} justifyContent={'space-between'} alignItems={'center'}>
          <Stack direction={'row'} gap={'8px'}>
            <img style={{ width: '24px', height: '24px' }} src={item.logo} alt="logo" />
            <Typography>{item.name}</Typography>
          </Stack>
          <IconButton onClick={handleLike}>
            <LikeIcon />
          </IconButton>
        </Stack>
      </Stack>
    </div>
  )
}

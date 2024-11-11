import React from 'react'
import { useGetUsers } from './service/query/useGetUsers'
import { Box,  Container, Grid2, IconButton, Stack, Typography } from '@mui/material'
import { Form } from '../../components/form'
import { Card } from '../../components/card'
import hero_bg from "../../assets/hero_bg.png"

export const Home = () => {
  const { data } = useGetUsers()

  return (
    <>
      <Box sx={{backgroundImage: `url(${hero_bg})`, backgroundSize: 'cover'}}>
        <Container maxWidth={'xl'} sx={{pt: '50px', pb: '80px'}}>
          <Stack>
            <Typography mx={'auto'} maxWidth={'411px'} fontWeight={700} color='#fff' fontSize={'32px'} lineHeight={'125%'} textAlign={'center'} variant='h2'>Explore the world’s leading design portfolios</Typography>
            <Typography mt={'16px'} mx={'auto'} maxWidth={'614px'} fontWeight={400} fontSize={'16px'} lineHeight={'175%'} textAlign={'center'} color='#fff'>Millions of designers and agencies around the world showcase their portfolio work on Dribbble - the home to the world’s best design and creative professionals.</Typography>
            <Form />
          </Stack>
        </Container>
      </Box>
      <Container maxWidth={'xs'} sx={{pt: '32px',pb: '40px'}}>
        <Grid2 container spacing={'36px'}>
          {data?.map((item) => (
            <Grid2 key={item.id} size={3}>
              <Card item={item} />
            </Grid2>
          ))}
        </Grid2>
      </Container>
    </>
  )
}

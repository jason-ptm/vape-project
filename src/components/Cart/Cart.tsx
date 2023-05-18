import React, { useState } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { IconButton, useTheme } from '@mui/material'
import { ItemsCount } from './items/items'
import { tokens } from 'context/theme.context'
import { useNavigate } from 'react-router-dom'
import { routesTypes } from 'models'

export type CartProps = {}

const Cart: React.FC<CartProps> = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const navigate = useNavigate()

  const handleCartClick = () => {
    navigate(routesTypes.CART)
  }

  const [items, setItems] = useState(0)

  return (
    <IconButton onClick={handleCartClick} sx={{ position: 'relative' }}>
      <ItemsCount color={colors.blueAccent[600]}>{items}</ItemsCount>
      <ShoppingCartIcon />
    </IconButton>
  )
}

export default Cart

import React from 'react'
import { Button } from '@mui/material'

function BasicButtons
({title, handleAction}) {
  return (
    <Button onClick={handleAction} variant="contained">{title}</Button>
  )
}

export default BasicButtons

import { Button, Dialog, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import './elderly.css'
import { Link } from 'react-router-dom'

export default function EditInfo() {
  const [open, setOpen] = useState(true);

  useEffect(() => {
      
    setOpen(true)
      
  }, [open])
    return (
        <div className="editcontainer">
        <form action="#" className="shadow p-3 mb-5 bg-white rounded">
            aaaa
        </form>

        </div>
    )
}

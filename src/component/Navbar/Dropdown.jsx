import React from 'react'
import { Link, NavLink } from "react-router-dom";
import "./Dropdown.css"
import Modal from '@mui/material/Modal';
import { Dialog } from '@mui/material';

export default function Dropdown({Popup}) {
  const handleClose = () => Popup(false);

  return (
    <div>
      <Dialog
        open={Popup}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          "& .MuiBackdrop-root": {
            background: "transparent"
          },
          backgroundColor: 'transparent',
          background: "transparent",
          boxShadow: 'none'
        }}
      >

        <div className="dropdown-contents">
          <Link to="/minerals">M/s Gurushree Minerals Pvt. Ltd.</Link>
          <Link to="/minerals"> Gurushree Group</Link>
          <Link to="/industries">M/s Gurushree Industries Pvt. Ltd.</Link>
          <p>M/s Gurushree Buildcon Pvt. Ltd.</p>
          <Link to="/associates">M/s Elite Associates</Link>
        </div>
      </Dialog>

    </div>
  )
}

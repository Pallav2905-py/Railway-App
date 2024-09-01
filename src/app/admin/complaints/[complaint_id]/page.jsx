"use client";


import { useEffect, useState } from "react";
import LinearDeterminate from "@/components/ProgressBar";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Card, Typography, Button, TextField, Chip, Avatar, Tooltip, List, ListItem, ListItemText, ListItemAvatar, CircularProgress, Snackbar, Alert, ImageList, ImageListItem } from '@mui/material';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import CssBaseline from '@mui/material/CssBaseline';
import { useRouter } from 'next/navigation';



const ComplaintDetails = () => {
  console.log("hello");

  const theme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  const [isProcessing, setIsProcessing] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);


  const complaintString = localStorage.getItem("complaint");
  const complaint = complaintString ? JSON.parse(complaintString) : null; // Parse to object or null if not found


  const handleCloseComplaint = () => {
    setIsProcessing(true);
    // Perform API call to close the complaint

    // Simulate API call and processing
    setTimeout(() => {
      setIsProcessing(false);
      setOpenSnackbar(true);
    }, 1000);
  };


  return (
    <ThemeProvider theme={theme}>
      <div className="p-6 rounded-lg shadow-lg my-14">

        <h2 className="text-2xl font-semibold mb-4 border-b border-gray-300 pb-2"></h2>
        <h2 className="text-2xl font-semibold mb-4  pb-2 mx-8">Complaint Status:</h2>
        <div >
          <LinearDeterminate pro={50} />
          <br />
          <div className="mx-12 flex justify-between">
            <h8 className="text-l font-semibold mb-4  pb-2">Recieved</h8>
            <h8 className="text-l font-semibold mb-4  pb-2">Pending</h8>
            <h8 className="text-l font-semibold mb-4  pb-2">Resolved</h8>
          </div>
          <br />
          <br />
        </div>
        <Typography variant="h6" className="text-2xl font-semibold mb-4  pb-2 mx-8 my-4">User Details:</Typography>
        <div className="mx-8">
          <TextField id="outlined-basic" label="PNR Number" variant="standard" value={complaint.pnr} inputProps={{ readOnly: true }} color="error" InputProps={{ style: { fontSize: '20px' } }} className="dark:text-white"
          />
          <TextField id="outlined-basic" label="Train No." variant="standard" value={complaint.TrainNo} inputProps={{ readOnly: true }} color="error" InputProps={{ style: { fontSize: '20px' } }} className="mx-16" />
          <TextField id="outlined-basic" label="Train Name" variant="standard" value={complaint.TrainName} inputProps={{ readOnly: true }} color="error" InputProps={{ style: { fontSize: '20px' } }} className="mx-16" />
          <TextField id="outlined-basic" label="Coach and Seat number" variant="standard" value={complaint.Coach} inputProps={{ readOnly: true }} color="error" InputProps={{ style: { fontSize: '20px' } }} className="mx-16" />
        </div>
        <div className="w-9/10 mx-8">
          <br />
          <br />
          <Typography variant="h6" className="text-2xl font-semibold mb-4  pb-2 my-2">Complaint Details:</Typography>
          <TextField id="outlined-basic" label="Title" variant="standard" value={complaint.title} inputProps={{ readOnly: true }} color="error" InputProps={{ style: { fontSize: '22px' } }} className="my-4" fullWidth />
          <TextField id="outlined-basic" label="Category" variant="standard" value={complaint.AI_analysis.category} inputProps={{ readOnly: true }} color="error" InputProps={{ style: { fontSize: '22px' } }} className="my-4" />
          <TextField id="outlined-basic" label="Complaint Number" variant="standard" value={complaint.complaint_id} inputProps={{ readOnly: true }} color="error" InputProps={{ style: { fontSize: '22px' } }} className="my-4 mx-8" />
          <TextField id="outlined-basic" label="Description" variant="standard" value={complaint.description} inputProps={{ readOnly: true }} color="error" InputProps={{ style: { fontSize: '18px' } }} className="my-4" fullWidth multiline />
        </div>
        <br />
        <br />
        <Typography variant="h6" className="text-2xl font-semibold mb-4  pb-2 my-2 mx-8">Images</Typography>
        {/* <ImageList sx={{ width: 1200, height: 450 }} cols={3} rowHeight={450} className="mx-8">
          {complaint.images.map((item) => (
            <ImageListItem key={item}>
              <img
                srcSet={`${item}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                src={`${item}?w=164&h=164&fit=crop&auto=format`}
                alt="image"
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList> */}
        <br />
        <br />
        <div className="mx-8">
          <Typography variant="h6" className="text-2xl font-semibold mb-4  pb-2 my-2">AI Analysis</Typography>
          <TextField id="outlined-basic" label="Urgency Level" variant="standard" value="Very Urgent" inputProps={{ readOnly: true }} color="error" InputProps={{ style: { fontSize: '20px' } }} className="dark:text-white"
          />
          <TextField id="outlined-basic" label="Description" variant="standard" value={complaint.AI_analysis.AI_description} inputProps={{ readOnly: true }} color="error" InputProps={{ style: { fontSize: '18px' } }} className="my-4" fullWidth multiline />
        </div>
      </div>
    </ThemeProvider>

  );
};

export default ComplaintDetails;

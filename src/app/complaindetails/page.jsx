"use client";

import { useState } from "react";
import LinearDeterminate from "@/components/ProgressBar";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Card, Typography, Button, TextField, Chip, Avatar, Tooltip, List, ListItem, ListItemText, ListItemAvatar, CircularProgress, Snackbar, Alert ,ImageList,ImageListItem} from '@mui/material';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import CssBaseline from '@mui/material/CssBaseline';



const ComplaintDetails = () => {

  const theme = createTheme(
  {
    palette:{
      mode:"dark",
    
    }
  }
  )
 
  const [isProcessing, setIsProcessing] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleCloseComplaint = () => {
    setIsProcessing(true);
    // Perform API call to close the complaint
    setIsProcessing(false);
    setOpenSnackbar(true);
  };

  const complaint = {
    id: 123, // Unique identifier for the complaint
    createdAt: '2024-09-01',
    updatedAt: '2024-09-01',
    status: 'open', // Possible statuses: open, in progress, closed, resolved
    category: 'Cleanliness', // Possible categories: delivery, product quality, customer service, etc.
    title: 'Item was delivered late and damaged.',
    description: 'Item was delivered late and damaged Item was delivered late and damagedItem was delivered late and damagedItem was delivered late and damagedItem was delivered late and damagedItem was delivered late and damagedItem was delivered late and damagedItem was delivered late and damagedItem was delivered late and damagedItem was delivered late and damagedItem was delivered late and damagedItem was delivered late and damagedItem was delivered late and damagedItem was delivered late and damagedItem was delivered late and damaged',
    images:["https://plus.unsplash.com/premium_photo-1720886073981-f975d3dc93f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8","https://plus.unsplash.com/premium_photo-1720886073981-f975d3dc93f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8",
      "https://plus.unsplash.com/premium_photo-1720886073981-f975d3dc93f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8","https://plus.unsplash.com/premium_photo-1720886073981-f975d3dc93f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8",
      "https://plus.unsplash.com/premium_photo-1720886073981-f975d3dc93f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8","https://plus.unsplash.com/premium_photo-1720886073981-f975d3dc93f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8",
      "https://plus.unsplash.com/premium_photo-1720886073981-f975d3dc93f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8","https://plus.unsplash.com/premium_photo-1720886073981-f975d3dc93f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8",
    ],
    PNR:"65465465416351",
    TrainName:"Vande Bharat",
    TrainNumber:"65845",
    coach:"S2",
    seat:"25"
  };

  return (
      <ThemeProvider theme={theme}>
      <div className="p-6 rounded-lg shadow-lg my-14">
        
        <h2 className="text-2xl font-semibold mb-4 border-b border-gray-300 pb-2"></h2>
        <h2 className="text-2xl font-semibold mb-4  pb-2 mx-8">Complaint Status:</h2>
        <div >
        <LinearDeterminate pro={50}/>
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
       <TextField id="outlined-basic" label="PNR Number" variant="standard" value={complaint.PNR} inputProps={{ readOnly: true }}color="error"  InputProps={{ style: { fontSize: '20px' } }} className="dark:text-white"
        />
       <TextField id="outlined-basic" label="Train Name" variant="standard" value={complaint.TrainNumber} inputProps={{ readOnly: true }}color="error"  InputProps={{ style: { fontSize: '20px' } }} className="mx-16"/>
       <TextField id="outlined-basic" label="Train Name" variant="standard" value={complaint.TrainName} inputProps={{ readOnly: true }}color="error"  InputProps={{ style: { fontSize: '20px' } }} className="mx-16"/>
       <TextField id="outlined-basic" label="Coach and Seat number" variant="standard" value={complaint.coach +"-"+complaint.seat}inputProps={{ readOnly: true }}color="error"  InputProps={{ style: { fontSize: '20px' } }} className="mx-16"/>
       </div>
       <div className="w-9/10 mx-8">
       <br />
       <br />
       <Typography variant="h6" className="text-2xl font-semibold mb-4  pb-2 my-2">Complaint Details:</Typography>
       <TextField id="outlined-basic" label="Title" variant="standard" value={complaint.title} inputProps={{ readOnly: true }}color="error"  InputProps={{ style: { fontSize: '22px' } }} className="my-4" fullWidth/>
       <TextField id="outlined-basic" label="Category" variant="standard" value={complaint.category} inputProps={{ readOnly: true }}color="error"  InputProps={{ style: { fontSize: '22px' } }} className="my-4" />
       <TextField id="outlined-basic" label="Complaint Number" variant="standard" value={complaint.id} inputProps={{ readOnly: true }}color="error"  InputProps={{ style: { fontSize: '22px' } }} className="my-4 mx-8" />
       <TextField id="outlined-basic" label="Description" variant="standard" value={complaint.description} inputProps={{ readOnly: true }}color="error"  InputProps={{ style: { fontSize: '18px' } }} className="my-4" fullWidth multiline/>
       </div>
        <br />
        <br />
       <Typography variant="h6" className="text-2xl font-semibold mb-4  pb-2 my-2 mx-8">Images</Typography>
       <ImageList sx={{ width: 1200, height: 450 }} cols={3} rowHeight={450} className="mx-8">
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
      </ImageList>
      <br />
      <br />
      <div className="mx-8">
      <Typography variant="h6" className="text-2xl font-semibold mb-4  pb-2 my-2">AI Analysis</Typography>
      <TextField id="outlined-basic" label="Urgency Level" variant="standard" value="Very Urgent" inputProps={{ readOnly: true }}color="error"  InputProps={{ style: { fontSize: '20px' } }} className="dark:text-white"
        />
      <TextField id="outlined-basic" label="Description" variant="standard" value={complaint.description} inputProps={{ readOnly: true }}color="error"  InputProps={{ style: { fontSize: '18px' } }} className="my-4" fullWidth multiline/>
      </div>
      </div>
      </ThemeProvider>
 
  );
};

export default ComplaintDetails;

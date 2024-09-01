require('dotenv').config();


const getTrainLiveStatus = async (trainNumber, date) => {
  const url = "https://irctc1.p.rapidapi.com/api/v1/liveTrainStatus";
    
  const options = {
      method: 'GET',
      headers: {
          'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
          'X-RapidAPI-Host': 'irctc1.p.rapidapi.com'
      }
  };

  try {
      const response = await fetch(`${url}?trainNo=${trainNumber}&startDate=${date}`, options);
      const data = await response.json();
      console.log(data);
      return data;
  } catch (error) {
      console.error('Error fetching live train status:', error);
  }
};

// Example usage
getTrainLiveStatus('12951', '2024-09-10');

//checkSeatAvailability

const checkSeatAvailability = async (trainNumber, date, classCode, source, destination) => {
  const url = "https://irctc1.p.rapidapi.com/api/v1/checkSeatAvailability";
  
  const options = {
      method: 'GET',
      headers: {
          'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
          'X-RapidAPI-Host': 'irctc1.p.rapidapi.com'
      }
  };

  try {
      const response = await fetch(`${url}?trainNo=${trainNumber}&source=${source}&destination=${destination}&date=${date}&classCode=${classCode}`, options);
      const data = await response.json();
      console.log(data);
      return data;
  } catch (error) {
      console.error('Error checking seat availability:', error);
  }
};

// Example usage
checkSeatAvailability('17411', '2024-09-10', '3A', 'DDR', 'JSP');

//getPnrStatus
const getPnrStatus = async (pnrNumber) => {
  const url = "https://irctc1.p.rapidapi.com/api/v3/getPNRStatus";
  
  const options = {
      method: 'GET',
      headers: {
          'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
          'X-RapidAPI-Host': 'irctc1.p.rapidapi.com'
      }
  };

  try {
      const response = await fetch(`${url}?pnrNumber=${pnrNumber}`, options);
      const data = await response.json();
      console.log(data);
      return data;
  } catch (error) {
      console.error('Error fetching PNR status:', error);
  }
};

// Example usage
getPnrStatus('8422224881');

//getLiveStation
const getLiveStation = async (stationCode, hours) => {
  const url = "https://irctc1.p.rapidapi.com/api/v3/getLiveStation";
  
  const options = {
      method: 'GET',
      headers: {
          'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
          'X-RapidAPI-Host': 'irctc1.p.rapidapi.com'
      }
  };

  try {
      const response = await fetch(`${url}?stationCode=${stationCode}&hours=${hours}`, options);
      const data = await response.json();
      console.log(data);
      return data;
  } catch (error) {
      console.error('Error fetching live station data:', error);
  }
};

// Example usage
getLiveStation('NDLS', 4);  // Get trains arriving at New Delhi Station within the next 4 hours


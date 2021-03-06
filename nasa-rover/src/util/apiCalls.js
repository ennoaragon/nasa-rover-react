import axios from 'axios'

// dynamic api call for the photos
export const roverPhotosApi = async (rover, cam, sol) => {
 try{
  const url = process.env.REACT_APP_AXIOS_NASA_ROVER;
  const apiKey = process.env.REACT_APP_AXIOS_API_KEY;

  const res = await axios.get(`${url}/${rover}/photos?sol=${sol}&camera=${cam}&api_key=${apiKey}`);
  return res.data;
 }
 catch(err){
  console.log("error: ", err.message)
  alert("Enter valid values");
  return []
 }
}
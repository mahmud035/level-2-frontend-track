import axios from 'axios';

//* NOTE: Fetch data using async...await with "AXIOS"
export const getServices = async () => {
  return await axios.get('http://localhost:5000/api/v1/services');
};

//* NOTE: Fetch data using async...await with "FETCH"
// export const getServices = async () => {
//   const res = await fetch('http://localhost:5000/api/v1/services').then((res) =>
//     res.json()
//   );

//   if (!res.success) {
//     throw new Error('Network response was not ok!!');
//   }

//   return res;
// };

// Exporting a function named getFullResponseFromAPI
export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success === true) {
      const obj = { status: 200, body: 'Success' };
      resolve(obj); // Resolve the Promise with the success object
    } else {
      const errorMessage = 'The fake API is not working currently';
      reject(errorMessage); // Reject the Promise with an error message
    }
  });
}

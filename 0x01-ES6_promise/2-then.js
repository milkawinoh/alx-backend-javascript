// Function definition to handle the provided Promise
export default function handleResponseFromAPI(promise) {
  promise
    .then(() => {
      // Handler for Promise resolution (success)
      console.log('Got a response from the API');
      return { status: 200, body: 'success' }; // Return an object on resolution
    })
    .catch(() => {
      // Handler for Promise rejection (failure)
      console.error('Got a response from the API');
      return new Error('API request failed'); // Return a new Error object on rejection
    });
}

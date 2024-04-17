/* eslint-disable import/extensions */
/* eslint-disable implicit-arrow-linebreak */
import signUpUser from './4-user-promise.js';
// eslint-disable-next-line import/extensions
import uploadPhoto from './5-photo-reject.js';

// Function to handle profile signup with user and photo upload
export default function handleProfileSignup(firstName, lastName, fileName) {
  // Call signUpUser and uploadPhoto concurrently
  const promise1 = signUpUser(firstName, lastName);
  const promise2 = uploadPhoto(fileName);

  // Use Promise.allSettled to handle both resolved and rejected promises
  return Promise.allSettled([promise1, promise2])
    .then((results) =>
      // Map results to desired format with status and value/error
      results.map((result) => {
        if (result.status === 'fulfilled') {
          return {
            status: 'fulfilled',
            value: result.value,
          };
        }
        return {
          status: 'rejected',
          value: result.reason,
        };
      }))
    .catch((error) => {
      console.error('Error during profile signup:', error);
      throw error; // Rethrow error for further handling
    });
}

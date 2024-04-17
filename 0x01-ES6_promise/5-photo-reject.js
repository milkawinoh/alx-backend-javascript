// Function definition to simulate photo upload and return a rejected promise with an error
export default function uploadPhoto(filename) {
  return Promise.reject(new Error(`${filename} cannot be processed`));
}

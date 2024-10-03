import signUpUser from './4-user-promise.js'; // Added .js extension
import uploadPhoto from './5-photo-reject.js'; // Added .js extension

export default async function handleProfileSignup(firstName, lastName, fileName) {
  return Promise
    .allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((res) => (
      res.map((o) => ({
        status: o.status,
        value: o.status === 'fulfilled' ? o.value : String(o.reason), // Ensure error is a string
      }))
    ));
}

// Regular function to create a login tracker for a specific user
function createLoginTracker(userInfo) {
  // Counter to track number of failed login attempts
  let attemptCount = 0;

  // Arrow function that handles login attempts
  const loginAttempt = (passwordAttempt) => {
    // If the user has already failed 3 times, lock the account
    if (attemptCount >= 3) {
      return "Account locked due to too many failed login attempts";
    }

    // If the password is correct
    if (passwordAttempt === userInfo.password) {
      return "Login successful"; // Success message
    } else {
      attemptCount++; // Increment failed attempt count
      return `Attempt ${attemptCount}: Login failed`; // Return failed attempt message
    }
  };

  // Return the nested arrow function
  return loginAttempt;
}


module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};
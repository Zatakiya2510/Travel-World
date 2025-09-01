import express from "express";
<<<<<<< HEAD
import { sendOtpForRegistration, verifyOtp, register, login, sendOtpForPasswordReset,setNewPassword,verifyResetOtp } from "../contollers/authController.js";
=======
import { sendOtpForRegistration, verifyOtp, register, login, sendOtpForPasswordReset,resetPassword } from "../contollers/authController.js";
>>>>>>> 3cb7089 (Final Update)

const router = express.Router();

router.post("/send-otp", sendOtpForRegistration); // Step 1: Send OTP
router.post("/verify-otp", verifyOtp); // Step 2: Verify OTP
router.post("/register", register); // Step 3: Register user
router.post("/login", login); // Step 4: Login
router.post("/send-reset-otp", sendOtpForPasswordReset);
<<<<<<< HEAD
router.post("/verify-reset-otp", verifyResetOtp);
router.post("/set-new-password", setNewPassword);
=======
router.post("/reset-password", resetPassword);
>>>>>>> 3cb7089 (Final Update)

export default router;

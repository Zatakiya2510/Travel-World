import express from "express";
<<<<<<< HEAD
import { sendOtpForRegistration, verifyOtp, register, login, sendOtpForPasswordReset, verifyResetOtp, setNewPassword } from "../contollers/authController.js";
=======
<<<<<<< HEAD
import { sendOtpForRegistration, verifyOtp, register, login, sendOtpForPasswordReset,setNewPassword,verifyResetOtp } from "../contollers/authController.js";
=======
import { sendOtpForRegistration, verifyOtp, register, login, sendOtpForPasswordReset,resetPassword } from "../contollers/authController.js";
>>>>>>> 3cb7089 (Final Update)
>>>>>>> 4123a23c0d6038d68458d7fdf6062ebd7b1646de

const router = express.Router();

router.post("/send-otp", sendOtpForRegistration); // Step 1: Send OTP
router.post("/verify-otp", verifyOtp); // Step 2: Verify OTP
router.post("/register", register); // Step 3: Register user
router.post("/login", login); // Step 4: Login
router.post("/send-reset-otp", sendOtpForPasswordReset);
<<<<<<< HEAD
router.post("/verify-rest-otp",verifyResetOtp)
router.post("/reset-password", setNewPassword);
=======
<<<<<<< HEAD
router.post("/verify-reset-otp", verifyResetOtp);
router.post("/set-new-password", setNewPassword);
=======
router.post("/reset-password", resetPassword);
>>>>>>> 3cb7089 (Final Update)
>>>>>>> 4123a23c0d6038d68458d7fdf6062ebd7b1646de

export default router;

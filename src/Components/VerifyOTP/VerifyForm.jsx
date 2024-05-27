import React from "react";
import './VerifyForm.css';
import { CiMail } from "react-icons/ci";
import { IoPencilSharp } from "react-icons/io5";

const VerifyForm = () =>{
    return(
        <div className="wrapper">
            <form action="">
                 <h1>Xác Thực</h1>
                 <h5>Mã xác thực của bạn đã được gửi đến số diện thoại</h5>

                 <div className="register-link">
                    <p><a href="http://localhost:3000/">0123456789</a></p>
                    <IoPencilSharp className="icon" />
                 </div>

                 <div className="input-box">
                 <CiMail className="icon" />
                    <input type="password" placeholder="OTP bạn vừa nhận được" required />
                 </div>

                 <button type="submit">Tiếp tục</button>

                 <button type="submit" className="resend">Gửi lại mã</button>

                 

            </form>
        </div>
    );
};

export default VerifyForm
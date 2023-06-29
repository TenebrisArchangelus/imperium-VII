import nodemailer from 'nodemailer'
import { EMAIL_host, EMAIL_port, EMAIL_user, EMAIL_pass } from '../config.js';

const Mercurius = nodemailer.createTransport({
    host: EMAIL_host,
    port: EMAIL_port,
    secure: true,
    auth: {
        user: EMAIL_user,
        pass: EMAIL_pass,
    }
});

export default Mercurius;
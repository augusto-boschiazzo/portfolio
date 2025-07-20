import type { ReactElement } from "react";
import { Resend } from "resend";

import { EmailTemplate } from "./EmailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

interface SendEmailParams {
    fromName: string;
    fromEmail: string;
    message: string;
}

const sendEmail = async ({ fromName, fromEmail, message }: SendEmailParams) => {
    // EmailTemplate debe ser un componente React válido
    const emailComponent: ReactElement = (
        <EmailTemplate name={fromName} mail={fromEmail} message={message} />
    );
    console.log("Sending email with component:", emailComponent);
    return await resend.emails.send({
        from: "noreply@resend.dev", // Usa aquí un email verificado en Resend
        to: ["augus2608@gmail.com"],
        subject: `New message from: ${fromName}`,
        react: emailComponent,
    });
};

export const emailService = {
    sendEmail,
};

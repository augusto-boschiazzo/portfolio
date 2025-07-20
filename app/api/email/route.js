import { NextResponse } from "next/server";
import { emailService } from "../../services/mail.service";

export async function GET() {
    return NextResponse.json({
        message: "Hello from /api/email",
    });
}

export async function POST(req) {
    try {
        const body = await req.json();

        if (!body.fromName || !body.fromEmail || !body.message) {
            return NextResponse.json(
                {
                    error: "fromName, fromEmail or message properties are missing",
                },
                { status: 400 }
            );
        }

        const { data, error } = await emailService.sendEmail({
            fromName: body.fromName,
            fromEmail: body.fromEmail,
            message: body.message,
        });

        if (error) {
            return NextResponse.json({ error }, { status: 400 });
        }

        return NextResponse.json(
            { message: "Email sent successfully", data },
            { status: 200 }
        );
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { error: "Email could not be sent" },
            { status: 500 }
        );
    }
}

type Props = {
    name: string;
    message: string;
    mail: string;
};

export function EmailTemplate({ name, message, mail }: Props) {
    return (
        <div>
            <h1>New message from {name}</h1>
            <span>{mail}</span>
            <p>{message}</p>
        </div>
    );
}

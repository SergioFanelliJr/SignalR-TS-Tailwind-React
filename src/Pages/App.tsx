export interface AppProps {
    message: string;
}

export default function App({ message }: AppProps) {
    return (
        <div>
            <h1>App</h1>
            <p>{message}</p>
        </div>
    );
}

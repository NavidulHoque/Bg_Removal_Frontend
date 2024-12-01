import Retry from "./Retry"

const ErrorDisplay = ({ message, reset }: {message: string, reset: () => void}) => {
    return (
        <section className="h-[82vh] flex-center flex-col m-4">

            <h2 className="text-3xl my-2 text-red-700">{message}</h2>

            <Retry reset={reset} />

        </section>
    )
}

export default ErrorDisplay
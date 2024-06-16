interface LoadindProps {
    text?: string
}

export default function Loading(props: LoadindProps) {
    return (
        <div
            style={{
                background: '#6730ec',
                position: 'absolute',
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
            }}
        >
            <h1>{props.text ? props.text : 'LOADING...'}</h1>
        </div>
    )
}

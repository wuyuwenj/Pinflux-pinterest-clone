import './Loading.css';

export const Loading = () => {

    return (
        <div className='LoadingDiv'>
            <svg width="44" height="44" className='loadingIcon'>
                <circle cx="22" cy="22" r="22" fill="grey" />
                <circle cx="14" cy="22" r="3" fill="white" />
                <circle cx="30" cy="22" r="3" fill="white" />
                <circle cx="22" cy="14" r="3" fill="white" />
                <circle cx="22" cy="30" r="3" fill="white" />
            </svg>
        </div>
    )
}

export default Loading;
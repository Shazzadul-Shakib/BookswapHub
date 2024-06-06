import noNotification from '../../assets/notification.png';

const NoNotification = ({element}) => {
    return (
        <main>
            <div className='flex justify-center items-center'>
                <img className='h-[400px] md:h-[500px]' src={noNotification} alt="No nofification Image" />
            </div>
            <h1 className=' text-xl md:text-2xl font-semibold text-secondary text-center'>No {element} Yet!</h1>
        </main>
    );
};

export default NoNotification;
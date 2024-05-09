
const ModalBody = ({modal}) => {
    return (
        <div className=" fixed h-[100dvh] inset-0 z-10 opacity-60 bg-black overflow-hidden flex justify-center items-center ">
            <div className="">
                {modal}
            </div>
        </div>
    );
};

export default ModalBody;
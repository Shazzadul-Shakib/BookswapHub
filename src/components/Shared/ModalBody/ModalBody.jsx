
const ModalBody = ({modal}) => {
    return (
        <main className=" fixed h-[100dvh] inset-0 z-10 bg-opacity-60 bg-black overflow-hidden flex justify-center items-center ">
            <div>
                {modal}
            </div>
        </main>
    );
};

export default ModalBody;
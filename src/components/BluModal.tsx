import BluSongInfo from "./BluSongInfo";

type Props = {
    id?: string[];
    open: boolean;
    onClose: () => void;
}

const BluModal = ( props : Props ) => {
    if ( !props.open ) return (<></>);
    return (
        <div onClick={ props.onClose } className=" fixed w-full h-full flex overflow-auto z-1
        justify-center align-middle bg-blue-200 bg-opacity-50">
            <div 
                className="max-w-600px w-1/5 fixed flex z-1 mt-1 bg-white shadow-xl rounded"
                onClick= {(e) => {
                    e.stopPropagation()
                }}>
                
                <div className="w-full flex flex-col">

                    <div className="flex flex-row space-apart">

                        <p className="flex justify-start bg-black p-2 rounded hover:bg-blue-500 text-white" 
                        onClick= {props.onClose}>
                            X
                        </p>
                    </div>

                        <div className="flex flex-col items-center text-center p-1">
                            <   BluSongInfo id= {props.id} />
                        </div>
                
                </div>
                    
            </div>
        </div>
    )
}

export default BluModal

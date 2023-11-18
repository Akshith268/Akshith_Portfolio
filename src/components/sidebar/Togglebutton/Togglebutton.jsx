    
import { FiMenu } from 'react-icons/fi';
import { MdClose } from 'react-icons/md';

export const Togglebutton = ({ setSidebar, sidebar }) => {
    return (
        <button onClick={() => setSidebar((prev) => !prev)}>
            {sidebar ? <MdClose /> : <FiMenu />}
        </button>
    );
};

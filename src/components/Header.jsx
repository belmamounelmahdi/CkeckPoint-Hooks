import { faCheckCircle, faStarHalfStroke, faUser } from '@fortawesome/free-regular-svg-icons';
import { faChartSimple, faGear } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Header = () => {

    return (
        <div className="header flex justify-evenly p-3 border-b-2">
            <div className="logo flex p-1">
                <h1 className='text-white'>Pomofocus</h1>
            </div>
            <div className="button-content flex ">
                <div className="button mr-3  p-1 rounded-md">
                <FontAwesomeIcon icon={faChartSimple}></FontAwesomeIcon>
                <button >Report</button>
            </div>
            <div className="button mr-3  p-1 rounded-md">
                <FontAwesomeIcon icon={faGear}></FontAwesomeIcon>
                <button >Setting</button>
            </div>
            <div className="button mr-3  p-1 rounded-md">
                <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                <button >Login</button>
            </div>
            </div>


        </div>
    )
}

export default Header
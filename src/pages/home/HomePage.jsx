import { Link } from 'react-router-dom';
import Galery from '../../components/galery/Galery';
import './HomePage.css';

const HomePage = () => {
   
    return (
        <div className='home'>
        <Link to="/">
        <h1 className='home__back'>BACK</h1>
        </Link>
        <h1 className='home__back__title'>Characters</h1>
            <Galery></Galery>
        </div>
    )
}

export default HomePage

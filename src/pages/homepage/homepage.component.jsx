import React from 'react';
import { Link } from 'react-router-dom';
import './homepage.styles.scss';
import '../../components/directory/directory.component';
import Directory from '../../components/directory/directory.component';


// Functional component
const HomePage = () => (
    <div className='homepage'>
        <Link to='/SignsPage'>Signs</Link>
        <Directory />
    </div>
)

export default HomePage;
import { FC, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { IoIosNotifications } from 'react-icons/io';
import { IoHelpCircleSharp } from 'react-icons/io5';
import { FaTelegramPlane } from 'react-icons/fa';
import { BsStars } from 'react-icons/bs';
import { FiExternalLink } from 'react-icons/fi';
import { IoAlertCircleSharp } from 'react-icons/io5';

import { Notification, ModalsTemplate } from '../../components';

import './Header.scss';


const Header: FC = () => {

    const { pathname } = useLocation();

    const [notification, setNotification] = useState<boolean>(false);
    const [help, setHelp] = useState<boolean>(false);

    const sectionTitleChanger = () => {
        switch(pathname) {
            case '/':
                return 'Dashboard'
            case '/addons':
                return 'Add-ons'
            case '/analytics':
                return 'Analytics'
            case '/account':
                return 'Account'
            case '/settings':
                return 'Settings' 
            default:
                return '404'
        }
    }

    return (
        <header className='header'>
            <h2 className='section__title'>{sectionTitleChanger()}</h2>
            <div className='header__actions'>
                <IoHelpCircleSharp 
                    className='icon icon_header'
                    onClick={() => setHelp(!help)}
                />
                <IoIosNotifications 
                    className='icon icon_header'
                    onClick={() => setNotification(!notification)}
                />
            </div>
            <ModalsTemplate modalState={help}>
                <h2 className='section__title'>Support</h2>
                <div className='help-wrapper'>
                    <ul className='help'>
                        <li className='help__item'><span className='help__icon-box'><FaTelegramPlane className='icon'/></span> Talk to us</li>
                        <li className='help__item'><span className='help__icon-box'><FiExternalLink className='icon'/></span> Help Site</li>
                        <li className='help__item'><span className='help__icon-box'><BsStars className='icon'/></span> Review us</li>
                    </ul>
                    <img className='help__img' src="https://img.freepik.com/free-vector/flat-design-illustration-customer-support_23-2148887720.jpg?t=st=1652192125~exp=1652192725~hmac=454421d5cd027684b2d1158d3927afeb597b4ca7062f695a87b1a6ee1d2bfaa5&w=826" alt="#" />
                </div>
            </ModalsTemplate>
            <Notification notification={notification}/>
        </header>
    )
}

export default Header;
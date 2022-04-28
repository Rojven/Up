import { FC, useMemo } from 'react';
import { IoAlertCircleSharp } from 'react-icons/io5';
import { MdOutlineTipsAndUpdates } from 'react-icons/md';
import { RiExternalLinkLine } from 'react-icons/ri';
import { FaRegStar } from 'react-icons/fa';
import { SiMinutemailer } from 'react-icons/si';
import Masonry from 'react-masonry-css';

import { PageTemplate, PlatesTemplate } from '../../components';

import './Help.scss';

const breakpointObj = {
    default: 2,
    3000: 3,
    2000: 2,
    1000: 1
    
}

const Help: FC = () => {

    const helpTipsData = useMemo(
        () => [
            {title: 'Title'},
            {title: 'Title'},
            {title: 'Title'},
            {title: 'Title'},
            {title: 'Title'},
            {title: 'Title'},
        ],
        []
    )

    return (
        <PageTemplate
            title='Help'
            subtitle='We are here for you! See how we can help you'
        >
            <div className="help__wrapper">
                <PlatesTemplate plateClass='plate_help'>
                    <div>
                        <ul className='help__list'>
                            <li className='help__list-item'>Talk to us <SiMinutemailer/></li>
                            <li className='help__list-item'>Help Site <RiExternalLinkLine/> </li>
                            <li className='help__list-item'>Review us <FaRegStar/></li>
                        </ul>
                        <div className='settings-wrapper'>
                            <div className='settings-info'><IoAlertCircleSharp className='settings-icon'/> <p>If you have configured add-ons, then please provide a link to the product page with add-ons</p></div>
                        </div>
                        <div className='settings-info'><IoAlertCircleSharp className='settings-icon'/> <p>We are based in the U.K and aim to respond within a few hours during normal U.K business hours of Mon - Fri, 9:00 AM to 6:00 PM</p></div>
                    </div>
                    <div className='help__img-box'>
                        <img 
                            src="https://img.freepik.com/free-vector/call-centre-hotline-client-support-online-helpline-problem-solving-remote-assistance-telephone-service-customer-assistant-cartoon-characters_335657-2560.jpg?t=st=1650789192~exp=1650789792~hmac=cccb348ef82112c80ac1ed2f7c094cd7b9861807a9f85d48be549577a41f1bfb&w=826" 
                            alt="help" 
                            className='help__img'
                        />
                    </div>    
                </PlatesTemplate>
                <Masonry
                    breakpointCols={breakpointObj}
                    className="help__tips"
                >
                    {helpTipsData.map((tip, i) => 
                        <PlatesTemplate
                        key={i} 
                        plateClass='plate_tips'
                        >   
                        <div>
                                <div className='help__tips-upper'>
                                    <h4 className='help__tips-title'>{tip.title}</h4>
                                    <MdOutlineTipsAndUpdates className='help__tips-icon'/>
                                </div>
                                <p className='help__tips-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae asperiores ipsum et deleniti facilis excepturi qui temporibus sint maxime?</p>
                        </div>
                    </PlatesTemplate>
                    )}
                </Masonry>
                {/* <div className='help__tips'>
                    {helpTipsData.map((tip, i) =>
                        <PlatesTemplate
                            key={i} 
                            plateClass='plate_tips'
                        >   
                        <div>
                                <div className='help__tips-upper'>
                                    <h4 className='help__tips-title'>{tip.title}</h4>
                                    <MdOutlineTipsAndUpdates className='help__tips-icon'/>
                                </div>
                                <p className='help__tips-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae asperiores ipsum et deleniti facilis excepturi qui temporibus sint maxime?</p>
                        </div>
                        </PlatesTemplate>
                    )}
                </div> */}
            </div>
        </PageTemplate>
    )
}

export default Help;
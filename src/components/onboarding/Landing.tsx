import React from 'react';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaHandPointRight } from 'react-icons/fa';
import onBoardingStyles from './onboarding.module.css';
import FbAutomation from '../../automation/FbAutomation';
// import categoryScroll from '../../media/category-scroll.mp4';

const Landing = ({ history }) => {
  const renderTooltip = (props) => (
    <Tooltip className="skip-tooltip" {...props}>
      Already have your data?
    </Tooltip>
  );
  FbAutomation();
  return (
    <div className={onBoardingStyles.landing}>
      <div className={onBoardingStyles.header}>
        <h1 onClick={() => history.push('/')} className={onBoardingStyles.logo}>
          fbexplorer
        </h1>
        <p
          onClick={() => history.push('/about')}
          className={onBoardingStyles.about}
        >
          About
        </p>
      </div>

      <div className={onBoardingStyles.landingContainer}>
        <h3>
          fbexplorer lets you reclaim, search, and explore all of your Facebook
          data
        </h3>
        {/* <video
          type="video/mp4"
          src={categoryScroll}
          poster={}
          className="description-video"
          muted
          playsInline
          autoPlay
        /> */}
        <h2 className={onBoardingStyles.step}>Step 1: Log into Facebook</h2>
        <div
          id="fb-login"
          className={onBoardingStyles.fbLoginButton}
          data-scope="public_profile"
          data-width=""
          data-size="large"
          data-button-type="login_with"
          data-auto-logout-link="true"
          data-use-continue-as="true"
        />
        <div className={onBoardingStyles.buttonContainer}>
          <div className={onBoardingStyles.skipContainer}>
            <FaHandPointRight className={onBoardingStyles.iconHandPoint} />
            <OverlayTrigger
              placement="right"
              delay={{ show: 100, hide: 200 }}
              overlay={renderTooltip}
            >
              <Link to="/drop" className={onBoardingStyles.skipButton}>
                Skip
              </Link>
            </OverlayTrigger>
          </div>
          <Link to="/download" className={onBoardingStyles.next}>
            Download your data
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;

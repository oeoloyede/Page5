import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { ChatIcon } from './ChatIcon';
import { Ellipse12Icon } from './Ellipse12Icon';
import { HomeIcon } from './HomeIcon';
import classes from './Profile.module.css';
import { ProfileIcon } from './ProfileIcon';
import { SearchIcon } from './SearchIcon';
import { UploadIcon } from './UploadIcon';
import { UploadIcon2 } from './UploadIcon2';

interface Props {
  className?: string;
}
/* @figmaId 15:44 */
export const Profile: FC<Props> = memo(function Profile(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.profile}>Profile</div>
      <div className={classes.eugeneSmith}>Eugene Smith</div>
      <div className={classes.skills}>Skills:</div>
      <div className={classes.degree}>Degree:</div>
      <div className={classes.nEWLYGRADUATEDLOOKINGFORAJOBIN}>
        NEWLY GRADUATED. lOOKING FOR A JOB IN sOFTWARE dEVELOPMENT. Interested in Machine Learning and design/building
        new programs to meet the needs and goals of companies{' '}
      </div>
      <div className={classes.about}>About:</div>
      <div className={classes.bSCOMPUTERSCIENCE}>b.s cOMPUTER sCIENCE</div>
      <div className={classes.cJAVAPYTHON}>c++, jAVA, pYTHON</div>
      <div className={classes.ellipse12}>
        <Ellipse12Icon className={classes.icon} />
      </div>
      <div className={classes.background}>
        <div className={classes.background2}></div>
        <div className={classes.home}>
          <HomeIcon className={classes.icon2} />
        </div>
        <div className={classes.search}>
          <SearchIcon className={classes.icon3} />
        </div>
        <div className={classes.upload}>
          <UploadIcon className={classes.icon4} />
        </div>
        <div className={classes.chat}>
          <ChatIcon className={classes.icon5} />
        </div>
        <div className={classes.profile2}>
          <ProfileIcon className={classes.icon6} />
        </div>
        <div className={classes.upload2}>
          <UploadIcon2 className={classes.icon7} />
        </div>
      </div>
    </div>
  );
});

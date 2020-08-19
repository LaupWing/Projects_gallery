import React, {useState} from 'react';
import Tooltip from '../../../../components/Tooltip/Tooltip';
import styles from './Icon.module.css';
import icons_loader from '../../../../components/Icons/icons_loader';
import {connect} from 'react-redux'

const Icon = ({icon, projects})=>{
    const Component = icons_loader[icon];
    const [showTooltip, setShowTooltip] = useState(false);
    const total_projects = projects.filter(x=>x.stack.includes(icon)).length 
    const message = `Skill: ${icon} \n Total Projects: ${total_projects}` 
    return (
        <div 
            className={styles.Icon}
            onMouseOver={()=>setShowTooltip(true)}
            onMouseOut={()=>setShowTooltip(false)}
        >
            {showTooltip && <Tooltip
                message={message}
            />}
            <Component/>
        </div>
    );
}

const mapStateToProps = (state) =>{
    return {
        projects: state.projects
    }
}

export default connect(mapStateToProps)(Icon);
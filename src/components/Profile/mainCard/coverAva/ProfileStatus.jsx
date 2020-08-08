import React, {useEffect, useState} from 'react';

const ProfileStatus = (props) => {

    let [editMode, setEditMode] = useState(false);
    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status);
    }

    let [status, setStatus] = useState(props.status);
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }

    useEffect( () => {
        setStatus(status)
    }, [status])

    return (
        <div>
            {!editMode
                ? <p onClick={activateEditMode}>{props.status || 'No status yet'}</p>
                : <div><input
                    onChange={onStatusChange}
                    onBlur={deactivateEditMode}
                    autoFocus={true}
                    value={status}/></div>
            }
        </div>
    );
}

export default ProfileStatus;
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Icon({iconName}) {
    return <FontAwesomeIcon icon={iconName} size='1x' />;
}

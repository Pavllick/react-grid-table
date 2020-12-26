import React from 'react';

const HeaderSelectionCell = ({ column, ref, onChange, checked, disabled, tableManager }) => {
    const {
        config: { additionalProps: { headerSelectionCell: additionalProps = {} } },
    } = tableManager;

    let classNames = (disabled ? 'rgt-disabled' : 'rgt-clickable' + ' ' + additionalProps.className || '').trim();

    return (
        <input
            {...additionalProps}
            className={classNames}
            type="checkbox"
            ref={ref}
            onChange={onChange}
            checked={checked}
            disabled={disabled}
        />
    )
};

export default HeaderSelectionCell;
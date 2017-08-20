import React from 'react';

const Tabs = ({
    items,
    selected,
    onClick
}) => {
    let li = items.map(({
        id,
        name
    }) => {
        let isActive = false
        if (id === selected) {
            isActive = true
        }
        return (
            <li key={id} className={isActive?"is-active":""}><a onClick={onClick.bind(null,id)}>{name}</a></li>
        )
    })
    return (
        <div className="tabs is-boxed is-medium">
            <ul>
                {li}
            </ul>
        </div>
    )
}

Tabs.defaultProps = {
    items:[],
    onClick: () => console.warn("onClick() in Tabs is triggered without assigned a onClick props")
}

export default Tabs
import React from 'react'

function ViewAll(props) {
    return (
        <div>            
            <button type="button" onClick={props.onViewAll}>View All Types</button>
        </div>
        
    );
}

export default ViewAll
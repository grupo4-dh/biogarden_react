import React from 'react';

function Card(props) {
    return (
        <div className="col-md-4 mb-4">
            <div className= { props.cardClass }>
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <div className="text-xs font-weight-bold text-primary text-uppercase mb-1"> { props.text }</div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">{ props.value }</div>
                        </div>
                        <div className="col-auto">
                            <i className={ props.iconClass }></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
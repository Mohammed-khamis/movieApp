import React from 'react';

const ModalPopUp = ({ show, close }) => {
	return (
		<div
			className="modal-wrapper"
			style={{
				transform: show ? 'translateY(0vh)' : 'translateY(-50vh)',
				opacity: show ? '1' : '0',
			}}
		>
			<div className="modal-content">
				<h3>The movie is Already in the favorite list</h3>
				<div className="modal-button">
					<button onClick={close} className="btn btn-primary btn-details ">
						OK
					</button>
				</div>
			</div>
		</div>
	);
};

export default ModalPopUp;

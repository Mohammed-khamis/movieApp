import React from 'react';
import { Modal } from 'react-modal';

const ModalPopUp = ({ show, close, add, movie }) => {
	return (
		<div
			className="modal-wrapper"
			style={{
				transform: show ? 'translateY(0vh)' : 'translateY(-50vh)',
				opacity: show ? '1' : '0',
			}}
		>
			<div className="modal-content">
				<h3>Are you sure to add this movie to favorite list?</h3>
				<div className="modal-button">
					<button
						onClick={() => add(movie)}
						className="btn btn-primary btn-details "
					>
						Yes
					</button>
					<button onClick={close} className="btn btn-primary btn-details ">
						No
					</button>
				</div>
			</div>
		</div>
	);
};

export default ModalPopUp;

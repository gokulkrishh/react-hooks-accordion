import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';

const Accordion = ({ title, children, onToggle }) => {
	const [visibility, setVisibility] = useState(true);
	return (
		<div className="accordion">
			<h2
				className="title"
				onClick={() => {
					setVisibility(!visibility);
					if (onToggle) onToggle(!visibility);
				}}
			>
				{title}
			</h2>
			{visibility ? <Fragment>{children}</Fragment> : null}
		</div>
	);
};

Accordion.propTypes = {
	children: PropTypes.any.isRequired,
	onToggle: PropTypes.func,
	title: PropTypes.string.isRequired
};

export default Accordion;

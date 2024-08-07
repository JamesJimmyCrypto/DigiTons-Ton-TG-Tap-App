import React from 'react';
import styles from './sidebar.module.scss';
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

function Sidebar(props) {
	const lg = useSelector(state => state.profile.language);

	return (
		<div className={styles.sidebar}>
			<NavLink to={'/arena'}>Fight</NavLink>
			<NavLink to={'/my_monstrix'}>My Digitons</NavLink>
			<NavLink to={'/shop'}>Shop</NavLink>
			<NavLink to={'/about'}>About</NavLink>
		</div>
	);
}

export default Sidebar;
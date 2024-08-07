import React from 'react';
import styles from "../mainPage/mainPage.module.scss";
import {AiOutlineGithub} from "react-icons/ai";
import {FaTelegramPlane} from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";


function MainPage(props) {
	return (
		<>
			<div className={styles.title}>Welcome to DigiTons</div>
			<div className={styles.content_wrapper}>
				<div className={styles.about_game}>
					<div>
					DigiTons is a play-to-earn meme wars game where you collect DigiTons and earn coins by battling iconic meme characters. The more you fight, the more DigiTons you gather, boosting your earnings. Dive into the hilarious and ironic world of meme warfare and turn your victories into real rewards!







					</div>
				</div>
				<div className={styles.contacts_block}>
					<div>
						
						<br/>Socials:
					</div>
					<div className={styles.social_network}>
						<a href='https://github.com/duball69'><AiOutlineGithub /></a>
						<a href='https://t.me/duball69'><FaTelegramPlane /></a>
						<a href='x.com/duball69'><FaTwitter /></a>
					</div>
				</div>
			</div>
		</>
	);
}

export default MainPage;
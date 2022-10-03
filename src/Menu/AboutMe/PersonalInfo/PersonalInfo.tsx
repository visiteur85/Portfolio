import s from './PersonalInfo.module.scss';
import React from 'react';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// @ts-ignore
import MyCV from "./cv/CV.pdf";

const personalInfo = [
	{title: 'First Name: ', content: 'Pavel'},
	{title: 'Last Name: ', content: 'Kryvaltsevich'},
	{title: 'English: ', content: 'Pre-Intermediate (in progress)'},
	{title: 'Address: ', content: 'Minsk, Belarus'},
	{title: 'Email: ', content: 'pavel_kh@protonmail.com'},
	{title: 'Phone: ', content: '+375 29 650 88 66'},
	{title: 'Telegram: ', content: '@visiteur05'},
]

export const PersonalInfo = () => {

	const info = personalInfo.map((el, index) => {
		return <li className={s.personalInfoItem} key={index}>
			<span className={s.title}>{el.title}</span>
			<span className={s.content}>{el.content}</span>
		</li>
	})

	return (
		<div className={s.personalBox}>
			<div className={s.personalInfo}>
				<div className={s.personalInfoTitle}>
					<span className={s.personalIcon}><FontAwesomeIcon icon={faUser}/></span>
					<h4 className={s.personalInfoHeading}>Personal Info</h4>
				</div>
				<div className={s.personalDesc}>
					Hello. I'm a developer with experience in creating SPA using
					React, Redux, TypeScript, HTML, CSS and JS. I keep improving my skills and I’m going to study some new technologies such as
					React Native and Node.js because in the future I want to be a full-stack developer. I improve my English skills in my free time and solve tasks on the codewars. I’m ready to consider project work or full-time.
					<p className={s.subPersonalDesc}>
						Ready to consider project work and full-time employment.
					</p>
				</div>
				<div className={s.personalInfoInner}>
					<ul className={s.personalInfoList}>
						{info}
					</ul>
				</div>
			</div>
			<div className={s.resume}>
				<a className={s.resumeLink}
					 href={MyCV}
				   download={'cv_Pavel_Kryvaltsevich'}
					 target="_blank" rel="noopener noreferrer">Download CV</a>
			</div>
		</div>
	)
}

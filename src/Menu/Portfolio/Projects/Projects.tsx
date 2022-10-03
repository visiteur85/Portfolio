import React from 'react';
import s from './Projects.module.scss';
import todo from './projectCover/todo.png'
import cardsTraining from './projectCover/cardsTraining.png'
import {v1} from 'uuid';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faEye} from '@fortawesome/free-regular-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {IconProp} from "@fortawesome/fontawesome-svg-core";

const project = [
	{id: v1(), heading: 'Todolist',  github: 'https://github.com/visiteur85/Mytodo', image: todo},
	// {id: v1(), heading: 'Social NetWork', demo: '', github: 'https://github.com/Zenater/social-network-vivo-', image: social},
	{id: v1(), heading: 'Cards Training',  github: 'https://github.com/visiteur85/finish-project', image: cardsTraining},
]


export const Projects= () => {
	const faEyeIcon = faEye as IconProp;
	const faGithubIcon = faGithub as IconProp;
	const projects = project.map(project => {

		return <div className={s.tiles} key={project.id}>
				<div className={s.tile} >
					<img src={project.image} className={s.projectImage} alt={'image project'}/>
					<div className={s.details}>
						<span className={s.title}>{project.heading}</span>
						<span className={s.info}>

						</span>
						<span className={s.info}>
							<FontAwesomeIcon
								icon={faGithubIcon}
								className={s.icon}/>
							<a href={project.github} className={s.link} target="_blank">Github</a></span>
					</div>

				</div>
		</div>
	})

	return (
		<div className={s.projectBox}>
			{projects}
		</div>
	)
}

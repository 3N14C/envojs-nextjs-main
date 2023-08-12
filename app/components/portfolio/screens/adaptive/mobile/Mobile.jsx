'use client'
import styles from './mobile.module.scss'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

const Mobile = () => {
  const ref = useRef()
  const isInView = useInView(ref, {once: true})

  return (
		<div ref={ref}>
			<div
				style={{
					transform: isInView ? 'none' : 'translateX(-200px)',
					opacity: isInView ? 1 : 0,
					transition: 'all .9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
				}}
			>
				<div id='projects' className={`${styles.mobile}`}>
					<p className={`${styles.mobile_title}`}>Our Awesome Portfolio</p>
					<div className={styles.mobile_img_container}>
						<Image
							className={`${styles.mobile_image}`}
							width={62}
							height={72}
							src={`/images/ring.svg`}
						/>
					</div>
				</div>

				<div className={`${styles.mobile_projects}`}>
					<Image
						className={`${styles.mobile_projects_img}`}
						width={340}
						height={250}
						src={`/images/cinema.png`}
					/>
					{/* <Image
						className={`${styles.portfolio_projects_img}`}
						width={340}
						height={250}
						src={`/images/apartments.png`}
					/>
					<Image
						className={`${styles.portfolio_projects_img}`}
						width={340}
						height={250}
						src={`/images/social.png`}
					/> */}
				</div>

				<div className={`${styles.vector}`}>
					<Image width={95} height={28} src={`/images/vector.svg`} />
				</div>
			</div>
		</div>
	)
}

export {Mobile}
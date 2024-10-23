import Title from "./Title";
import { service } from "../data";

const Services = () => {
	return (
		<section className='section services' id='services'>
			<Title title='our' subTitle='services' />

			<div className='section-center services-center'>
				{service.map(item => {
					const { img, title, id } = item;
					return (
						<article className='service' key={id}>
							<span className='service-icon'>
								<i className={img}></i>
							</span>
							<div className='service-info'>
								<h4 className='service-title'>{title}</h4>
								<p className='service-text'>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.
								</p>
							</div>
						</article>
					);
				})}
			</div>
		</section>
	);
};
export default Services;

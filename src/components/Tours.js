import Title from "./Title";
import { tours } from "../data";

const Tours = () => {
	return (
		<section className='section' id='tours'>
			<Title title='featured' subTitle='tours' />

			<div className='section-center featured-center'>
				{tours.map(tour => {
					const { title, img, duration, cost, id, date, country } = tour;
					return (
						<article className='tour-card' key={id}>
							<div className='tour-img-container'>
								<img src={img} className='tour-img' alt={title} />
								<p className='tour-date'>{date}</p>
							</div>
							<div className='tour-info'>
								<div className='tour-title'>
									<h4>{title}</h4>
								</div>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime
									reprehenderit eum quod exercitationem fugit, qui corporis.
								</p>
								<div className='tour-footer'>
									<p>
										<span>
											<i className='fas fa-map'></i>
										</span>
										{country}
									</p>
									<p>{duration} days</p>
									<p>from ${cost}</p>
								</div>
							</div>
						</article>
					);
				})}
			</div>
		</section>
	);
};
export default Tours;

import React, { useContext, useEffect } from "react";
import coachingImg from "./coaching.png";
import { GlobalState } from "../../../GlobalState";
import "./Services.css";

const Services = (props) => {
	const { clicked, setClicked } = props;
	const state = useContext(GlobalState);
	const [windowDimensions] = state.servicesAPI.windowDimensions;

	if (windowDimensions[0] <= 992) {
		setClicked("services-category");
	}

	return (
		<ul id="services" className="row">
			{(clicked === "consulting-category" ||
				clicked === "services-category") && (
				<>
					<li className="col-lg-4 col-md-6 col-sm-12">
						<div className="card">
							<img src={coachingImg} className="card-img-top" alt="..." />
							<div className="card-body justify-content-center">
								<h5 className="card-title">Creative Consulting</h5>
								<p className="card-text">
									In need of fresh ideas for your company?
								</p>
								<p className="card-text">$$$</p>
								<div className="justify-content-center">
									<button className="btn btn-dark">Book Now</button>
								</div>
							</div>
						</div>
					</li>
					<li className="col-lg-4 col-md-6 col-sm-12">
						<div className="card">
							<img src={coachingImg} className="card-img-top" alt="..." />
							<div className="card-body">
								<h5 className="card-title">Creative Consulting</h5>
								<p className="card-text">
									In need of fresh ideas for your company?
								</p>
								<p className="card-text">$$$</p>
								<button className="btn btn-dark">Book Now</button>
							</div>
						</div>
					</li>
					<li className="col-lg-4 col-md-6 col-sm-12">
						<div className="card">
							<img src={coachingImg} className="card-img-top" alt="..." />
							<div className="card-body">
								<h5 className="card-title">Creative Consulting</h5>
								<p className="card-text">
									In need of fresh ideas for your company?
								</p>
								<p className="card-text">$$$</p>
								<button className="btn btn-dark">Book Now</button>
							</div>
						</div>
					</li>
					<li className="col-lg-4 col-md-6 col-sm-12">
						<div className="card">
							<img src={coachingImg} className="card-img-top" alt="..." />
							<div className="card-body">
								<h5 className="card-title">Creative Consulting</h5>
								<p className="card-text">
									In need of fresh ideas for your company?
								</p>
								<p className="card-text">$$$</p>
								<button className="btn btn-dark">Book Now</button>
							</div>
						</div>
					</li>
					<li className="col-lg-4 col-md-6 col-sm-12">
						<div className="card">
							<img src={coachingImg} className="card-img-top" alt="..." />
							<div className="card-body">
								<h5 className="card-title">Creative Consulting</h5>
								<p className="card-text">
									In need of fresh ideas for your company?
								</p>
								<p className="card-text">$$$</p>
								<button className="btn btn-dark">Book Now</button>
							</div>
						</div>
					</li>
					<li className="col-lg-4 col-md-6 col-sm-12">
						<div className="card">
							<img src={coachingImg} className="card-img-top" alt="..." />
							<div className="card-body">
								<h5 className="card-title">Creative Consulting</h5>
								<p className="card-text">
									In need of fresh ideas for your company?
								</p>
								<p className="card-text">$$$</p>
								<button className="btn btn-dark">Book Now</button>
							</div>
						</div>
					</li>
				</>
			)}
			{(clicked === "speech-category" || clicked === "services-category") && (
				<li className="col-lg-4 col-md-6 col-sm-12">
					<div className="card">
						<img
							src="https://static.wixstatic.com/media/94529b508b40459fb23e9c35b7e7cc0c.jpg/v1/fill/w_290,h_194,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01/94529b508b40459fb23e9c35b7e7cc0c.webp"
							className="card-img-top"
							alt="..."
						/>
						<div className="card-body">
							<h5 className="card-title">Motivational Speaking</h5>
							<p className="card-text">
								A good speech, could be just what you need for your event or
								panel
							</p>
							<p className="card-text">$$$</p>
							<button className="btn btn-dark">Book Now</button>
						</div>
					</div>
				</li>
			)}
		</ul>
	);
};

export default Services;

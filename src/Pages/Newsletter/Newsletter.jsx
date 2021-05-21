import React from "react";

import { Modal } from "react-bootstrap";

import Promo from "../../Images/promo.png";
import "./Newsletter.css";

const Newsletter = () => {
	const [modalShow, setModalShow] = React.useState(false);

	return (
		<>
			<a className="nav-item" onClick={() => setModalShow(true)}>
				Newsletter
			</a>

			<MyVerticallyCenteredModal
				show={modalShow}
				onHide={() => setModalShow(false)}
			/>
		</>
	);
};

function MyVerticallyCenteredModal(props) {
	return (
		<div id="newsletter-modal">
			<Modal
				{...props}
				size="lg"
				aria-labelledby="contained-modal-title-vcenter"
				centered
			>
				<Modal.Header closeButton></Modal.Header>
				<Modal.Body>
					<div
						class="modal-dialog"
						role="document"
						id="newsletter-modal-dialog"
					>
						<div class="modal-content">
							<div class="modal-body p-0 row">
								<div class="col-12 col-lg-6 ad p-0" id="modal-img-container">
									{" "}
									<img id="modal-img" src={Promo} />{" "}
								</div>
								<div class="details col-12 col-lg-6">
									<h2>STAY TUNED</h2>
									<p>
										<small class="para">
											Subscribe to our newsletter and never miss our designs
											,latest news.etc.
										</small>
									</p>
									<p>
										<small class="para">
											Our newsletter is sent once a week, every Monday
										</small>
									</p>
									<div class="form-group mt-3 pt-3 mb-5">
										<input
											type="email"
											class="form-control"
											placeholder="email@example.com"
										/>{" "}
									</div>{" "}
									<small class="text-muted">
										<a href="#">Personal Data Charter</a>
									</small>
								</div>
							</div>
						</div>
					</div>
				</Modal.Body>
				{/* <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer> */}
			</Modal>
		</div>
	);
}

export default Newsletter;

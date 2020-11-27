import React from "react";
import ReactModal from "react-modal";

class Landing extends React.Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleOpenModal}>App Description</button>
        <ReactModal ariaHideApp={false} isOpen={this.state.showModal}>
          <div className="landing">
            <h1>Welcome To Spa House!</h1>
            <p>
              I made Spa House app to not only showcase my work and tell my
              clients a little bit more about myself, but its main purpose is
              for a scheduling tool. . This is a fullstack app where I keep the
              date, time, treatment that was picked by the users in my database.
            </p>
            <p>
              <h2>To schedule:</h2>
              <ul>
                <li>First go to the "Treatments" page of the app.</li>
                <li>
                  {" "}
                  The "Treatments" page will have a drop down menu that shows
                  the categories that are offered. Each category will show the
                  services offered and a short description about the service.
                  When you are ready to choose a service, you can click the next
                  step button.
                </li>
                <li>
                  {" "}
                  The button will take you to the "Pricing" page. Once you pick
                  the service, you will be taken to the "Schedule" page by
                  clicking the Schedule button.
                </li>
                <li>
                  The "Schedule" page will require you to put in your name,
                  phone number and appointment time and date. The rest are
                  optional. Once the required inputs are gathered, the "Cart"
                  button will take you to the "Cart" page.{" "}
                </li>
                <li>
                  The "Cart" page is a review of your order with the time, date,
                  service and total. To move on to the next step, you will be
                  required to click the Confirmation button and this will take
                  you to the "Confirmation" page.
                </li>
                <li>
                  The Confirmation page will show confirmed time and date of
                  your service.
                </li>
              </ul>
              <p>
                {" "}
                The "Gallery" and "About" page are where prospective customers
                decide if I'm right for them and inform them of my
                qualifications.
              </p>
              <p>
                The "Contact" page if a client want to ask me any questions
                before booking.{" "}
              </p>
            </p>
            <button onClick={this.handleCloseModal}>Close</button>
          </div>
        </ReactModal>
      </div>
    );
  }
}

export default Landing;

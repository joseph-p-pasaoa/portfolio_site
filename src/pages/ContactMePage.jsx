/*
JOSEPH P. PASAOA
ContactMePage Component | Portfolio Site
*/


/* IMPORTS */
import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

import PageHeader from '../components/PageHeader';


/* MAIN */
export default class ContactMePage extends Component {
// const ContactMePage = () => {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      delayFinished: false,
      submitStatus: "",
      nameTxt: "",
      emailTxt: "",
      msgTxt: "",
      errorMsg: ""
    };
  }

  componentDidMount() {
    setTimeout(() => {
        this.setState({
            delayFinished: true
        })
    }, 1300);
  }

  handleChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    });
  }


  // return (
  //   <div className="page page--contactme">
  render() {
    const { submitStatus, nameTxt, emailTxt, msgTxt } = this.state;
    const submitted = submitStatus === "SUCCESS" ? true : false;
    return (
      <div className="page page--contactme">
        <PageHeader pagename="Contact Me" />
        <div className="form-container">
          <div style={{ opacity: submitted ? 0 : 1 }}>
            <Fade cascade when={this.state.delayFinished}>
              <form
                onSubmit={this.submitForm}
                action="https://formspree.io/mgezbbzb"
                method="POST"
                className="form-contactme"
              >
                <input value={nameTxt} type="text" id="nameTxt" name="nameTxt" onChange={this.handleChange} />
                <label htmlFor="nameTxt">Name</label>
                <input value={emailTxt} type="email" id="emailTxt" name="emailTxt" onChange={this.handleChange} />
                <label htmlFor="emailTxt">Email</label>
                <input value={msgTxt} type="text" id="msgTxt" name="msgTxt" onChange={this.handleChange} />
                <label htmlFor="msgTxt">Message</label>
                <button className="myButton">Submit</button>
                {submitStatus === "ERROR" && <p>Ooops! There was an error.</p>}
              </form>
            </Fade>
          </div>

          <Fade when={submitted}>
            <div className="submitted-msg" style={{ display: submitted ? "block" : "none" }}>
              Thank you for your message.<br />
              <Fade bottom when={submitted} delay={700}>
                <p className="textcopy">I'll get back to you shortly!</p>
              </Fade>
            </div>
          </Fade>
        </div>
      </div>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ submitStatus: "SUCCESS" });
      } else {
        this.setState({ submitStatus: "ERROR" });
      }
    };
    xhr.send(data);
  }

}


// export default ContactMePage;

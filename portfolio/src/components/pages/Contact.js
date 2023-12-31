import React from 'react';
import '../css/contact.css';
// import { MdOutlineEmail } from "react-icons/md"
// import { FaGithub } from "react-icons/fa"
// import { BsLinkedin } from "react-icons/bs"

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = { feedback: '', name: 'Name', email: 'email@example.com' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  render() {
    return (
      <form className="test-mailing">
      <h1>Let's see if it works</h1>
      <div>
        <textarea
          id="test-mailing"
          name="test-mailing"
          onChange={this.handleChange}
          placeholder="Send me a message"
          required
          value={this.state.feedback}
          style={{ width: '100%', height: '150px' }}
        />
      </div>
      <input type="button" value="Submit" className="btn btn--submit" onClick={this.handleSubmit} />
    </form>
    )
  }
  handleChange(event) {
    this.setState({ feedback: event.target.value })
  }handleSubmit(event) {
    const templateId = 'template_vbyz2yj';
    this.sendFeedback(templateId, {message_html: this.state.feedback, from_name: this.state.name, reply_to: this.state.email})
  }
  
  sendFeedback (templateId, variables) {
    window.emailjs.send(
      'template_vbyz2yj',
      templateId,
      variables
    ).then(res => {
      console.log('Email successfully sent!')
    })
    .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
  }
}


// Customize this 'myform.js' script and add it to your JS bundle.
// Then import it with 'import MyForm from "./myform.js"'.
// Finally, add a <MyForm/> element whereever you wish to display the form.

import React from "react";

import { Wrapper } from './style';

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
      <Wrapper>
        <form
          onSubmit={this.submitForm}
          action="https://formspree.io/xjvobyno"
          method="POST"
        >
          <div class="field">
            <label class="label" for="full-name">Full Name</label>
            <div class="control">
              <input class="input is-large" placeholder="Chester Copperpot" type="text" name="name" id="full-name" required=""/>
            </div>
          </div>
          <div class="field">
            <label class="label" for="attending">Will you attend?</label>
            <div class="control">
              <div class="select is-large">
                <select name="attending" id="attending" required="">
                    <option>Select</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>
              </div>
            </div>
          </div>
          <div class="field">
            <label class="label" for="plus">Total attending</label>
            <div class="control">
              <div class="select is-large">
                <select name="plus" id="plus" required="">
                  <option value="1" selected="">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="3">4</option>
                </select>
              </div>
            </div>
          </div>
          <div class="field">
            <div class="control">
              {status === "SUCCESS" ? <p>Your response was successfully recorded.  Matt will review them himself.  Muahahaha.</p> : <button class="button is-link">Submit</button>}
              {status === "ERROR" && <p>Ooops! There was an error.  Contact Matt.</p>}
            </div>
          </div>
        </form>
      </Wrapper>
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
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}
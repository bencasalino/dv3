import React from "react";

export class Preview extends React.Component {
  clickHandler(event) {
    event.preventDefault(); 
    const section = event.target 

    // submitMessage()

    // document.querySelector("#application-preview").textContent = document.querySelector(
    //   "#application-text"
    // ).value;
    // document.querySelector("#application-preview").classList.toggle("hidden");
  }
  render() {
    return (
      <form>
        <div>
        <p id="message">{this.props.message}</p>
        {/* <button id="preview-toggle" onClick={this.clickHandler}>
          Preview
        </button> */}
        <section id="application-preview" className="hidden" />
        </div>
      </form> 
    );
  }
}
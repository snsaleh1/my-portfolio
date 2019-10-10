import React, { Component } from 'react';
import axios from 'axios'


export default class Tesform extends Component {
    constructor(props) {
      super(props);

      this.onChangeName = this.onChangeName.bind(this);
      this.onChangeLocAcq = this.onChangeLocAcq.bind(this);
      this.onChangeYearsAcq = this.onChangeYearsAcq.bind(this);
      this.onChangeTesType = this.onChangeTesType.bind(this);
      this.onChangeTestimonial = this.onChangeTestimonial.bind(this);
      this.onSubmit = this.onSubmit.bind(this);

      this.state = {
        name: "",
        locAcq: "",
        yearsAcq: "",
        tesType: "",
        testimonial: "",
        user: this.props.user
      };
    }

    onChangeName(e) {
      this.setState({
        name: e.target.value
      });
    }

    onChangeLocAcq(e) {
      this.setState({
        locAcq: e.target.value
      });
    }

    onChangeYearsAcq(e) {
      this.setState({
        yearsAcq: e.target.value
      });
    }
    onChangeTesType(e) {
      this.setState({
        tesType: e.target.value
      });
    }
    onChangeTestimonial(e) {
      this.setState({
        testimonial: e.target.value
      });
    }

    onSubmit(e) {
      e.preventDefault();
      console.log(e);

      axios.post('http://localhost:3001/api/testimonials', this.state).then(res => (res.data))

      this.setState({
        name: "",
        locAcq: "",
        yearsAcq: "",
        tesType: "",
        testimonial: ""
      });
    }
    render() {
      return (
        <div style={{ marginTop: 20 }}>
          <h3>Talk About Caleb!</h3>
          <form onSubmit={this.onSubmit}>
            <div className="tesform-item">
              <label>Name: </label>
              <input
                type="text"
                className="form-control"
                value={this.state.name}
                onChange={this.onChangeName}
              />
            </div>
            <div className="tesform-item">
              <label>Known From: </label>
              <input
                type="text"
                className="form-control"
                value={this.state.locAcq}
                onChange={this.onChangeLocAcq}
                />
            </div>
            <div className="tesform-item">
              <label>Years Acquainted: </label>
                <select>
                    <option>1+</option>
                    <option>2+</option>
                    <option>3+</option>
                    <option>4+</option>
                    <option>5+</option>
                    <option>6+</option>
                    <option>7+</option>
                    <option>8+</option>
                    <option>9+</option>
                    <option>10+</option>
                    <option>15+</option>
                    <option>20+</option>
                </select>
            </div>
            <div className="tesform-item">
              <label>Testimonial Type: </label>
            <select>
                <option>Personal</option>
                <option>Professional</option>
            </select>
            </div>
            <div className="tesform-item">
              <label>Testimonial: </label>
              <input
                type="text"
                className="form-control"
                value={this.state.testimonial}
                onChange={this.onChangeTestimonial}
              />
            </div>
            <div className="tesform-item">
              <input
                type="submit"
                value="Create Testimonial"
                className="btn btn-primary"
              />
            </div>
          </form>
        </div>
      );
    }
  }

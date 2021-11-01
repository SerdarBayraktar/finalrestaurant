import React, { Component } from "react";
import TutorialDataService from "../services/tutorial.service";

export default class AddTutorial extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeCuisine = this.onChangeCuisine.bind(this);
    this.onChangeBorough = this.onChangeBorough.bind(this);
    this.onChangeAdressb = this.onChangeAdressb.bind(this);
    this.onChangeAdressc = this.onChangeAdressc.bind(this);
    this.onChangeAdresss = this.onChangeAdresss.bind(this);
    this.onChangeAdressz = this.onChangeAdressz.bind(this);


    this.saveTutorial = this.saveTutorial.bind(this);
    this.newTutorial = this.newTutorial.bind(this);

    this.state = {
      title: "",
      description: "",
      cuisine:"",
      borough:"",

      addressb:"",
      addressc:"",
      addresss:"",
      addressz:"",
      published: false,

      submitted: false,
    };
  }

  onChangeTitle(e) {
    this.setState({
      title: e.target.value,
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value,
    });
  }
  onChangeCuisine(e) {
    this.setState({
      cuisine: e.target.value,
    });
  }
  onChangeBorough(e) {
    this.setState({
      borough: e.target.value,
    });
  }
  onChangeAdressb(e) {
    this.setState({
      Adressb: e.target.value,
    });
  }
  onChangeAdressc(e) {
    this.setState({
      Adressc: e.target.value,
    });
  } onChangeAdresss(e) {
    this.setState({
      Adresss: e.target.value,
    });
  } onChangeAdressz(e) {
    
    this.setState({
      Adressz: e.target.value,
    });
  }



  saveTutorial() {
    let data = {
      title: this.state.title,
      description: this.state.description,
      cuisine: this.state.cuisine,
      borough: this.state.borough,
      addressb: this.state.addressb,
      addressc: this.state.addressc,
      addresss: this.state.addresss,
      addressz: this.state.addressz,


      published: false
    };

    TutorialDataService.create(data)
      .then(() => {
        console.log("Created new item successfully!");
        this.setState({
          submitted: true,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  newTutorial() {
    this.setState({
      title: "",
      description: "",
      cuisine: "",
      borough:"",
      addressb:"",
      addressc:"",
      addresss:"",
      addressz:"",

      published: false,

      submitted: false,
    });
  }

  render() {
    return (
      <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={this.newTutorial}>
              Add
            </button>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="title">name</label>
              <input
                type="text"
                className="form-control"
                id="title"
                required
                value={this.state.title}
                onChange={this.onChangeTitle}
                name="title"
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">restaurant ID</label>
              <input
                type="text"
                className="form-control"
                id="description"
                required
                value={this.state.description}
                onChange={this.onChangeDescription}
                name="description"
              />
            </div>

            <div className="form-group">
              <label htmlFor="cuisine">cuisine</label>
              <input
                type="text"
                className="form-control"
                id="cuisine"
                required
                value={this.state.cuisine}
                onChange={this.onChangeCuisine}
                name="cuisine"
              />
            </div>
            <div className="form-group">
              <label htmlFor="borough">borough</label>
              <input
                type="text"
                className="form-control"
                id="borough"
                required
                value={this.state.borough}
                onChange={this.onChangeBorough}
                name="borough"
              />
            </div>
{/* 
            <div className="form-group">
              <label htmlFor="Adressb">Adress/building</label>
              <input
                type="text"
                className="form-control"
                id="Adressb"
                required
                value={this.state.addressb}
                onChange={this.onChangeAdressb}
                name="Adressb"
              />
            </div>


            <div className="form-group">
              <label htmlFor="Adressc">Adress/coord</label>
              <input
                type="text"
                className="form-control"
                id="Adressc"
                required
                value={this.state.addressc}
                onChange={this.onChangeAdressc}
                name="Adressc"
              />
            </div>


            <div className="form-group">
              <label htmlFor="Adresss">Adress/street</label>
              <input
                type="text"
                className="form-control"
                id="Adresss"
                required
                value={this.state.addresss}
                onChange={this.onChangeAdresss}
                name="Adresss"
              />
            </div>
            <div className="form-group">
              <label htmlFor="Adressz">Adress/zipCode</label>
              <input
                type="text"
                className="form-control"
                id="Adressz"
                required
                value={this.state.addressz}
                onChange={this.onChangeAdressz}
                name="Adressz"
              />
            </div> */}

            <button onClick={this.saveTutorial} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
      </div>
    );
  }
}

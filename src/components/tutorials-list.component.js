import React, { Component } from "react";
import TutorialDataService from "../services/tutorial.service";

import Tutorial from "./tutorial.component";

export default class TutorialsList extends Component {
  constructor(props) {
    super(props);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveTutorial = this.setActiveTutorial.bind(this);
    this.onDataChange = this.onDataChange.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);

    this.state = {
      mainTutorial: [],
      tutorials: [],
      currentTutorial: null,
      currentIndex: -1,
      search: "",
    };

    this.unsubscribe = undefined;
  }

  componentDidMount() {
    this.unsubscribe = TutorialDataService.getAll().orderBy("title", "asc").onSnapshot(this.onDataChange);
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  onDataChange(items) {
    let tutorials = [];

    items.forEach((item) => {
      let id = item.id;
      let data = item.data();
      if (data.title){
      }
      tutorials.push({
        id: id,
        title: data.title,
        description: data.description,
        cuisine: data.cuisine,
        borough: data.borough,
        published: data.published,
      });
    });
    this.setState({
      tutorials: tutorials,
      mainTutorial : tutorials
    });
  }
  onSearchChange(search) {
    this.setState({
      search: search.title,
    });
    let newtutorials = [];
    console.log(search.title);
    this.state.mainTutorial.forEach((tutorial)=>{
      let id = tutorial.id;
      //let data = tutorial.data;
      let search = document.getElementById('Search').value
      if (tutorial.title.includes(search)){
        newtutorials.push({
          id: id,
          title: tutorial.title,
          description: tutorial.description,
          cuisine: tutorial.cuisine,
          borough: tutorial.borough,
          published: tutorial.published,
        });
      }
    });
    //document.write(newtutorials.title);
    this.setState({
      tutorials: newtutorials,
    });
    this.refreshList();
    
  }

  refreshList() {
    this.setState({
      currentTutorial: null,
      currentIndex: -1,
    });
  }

  setActiveTutorial(tutorial, index) {
    this.setState({
      currentTutorial: tutorial,
      currentIndex: index,
    });
  }

  render() {
    const { tutorials, currentTutorial, currentIndex } = this.state;

    return (
      <div className="list row">
        <div className="col-md-6">
          <h4>Restaurants List</h4>
          <div className="form-group">
                <label htmlFor="Search">Search</label>
                <input
                  type="text"
                  className="form-control"
                  id="Search"
                  value={this.state.search}
                  onChange={this.onSearchChange}
                />
              </div>

          <ul className="list-group">
            {tutorials &&
              tutorials.map((tutorial, index) => (
                <li
                  className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }
                  onClick={() => this.setActiveTutorial(tutorial, index)}
                  key={index}
                >
                  {tutorial.title}
                </li>
              ))}
          </ul>
        </div>


        <div className="col-md-6">
          {currentTutorial ? (
            <Tutorial
              tutorial={currentTutorial}
              refreshList={this.refreshList}
            />
          ) : (
            <div>
              <br />
              <p>Please click on a Restaurants...</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}

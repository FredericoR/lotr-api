"use strict";

const React = require("react");
const Layout = require("./layout.jsx");
const fetch = require("isomorphic-unfetch");

class View extends React.Component {
  constructor(props) {
    super(props);
    this.state = { quote: "fdsff" };
  }

  fetchQuote() {
    const that = this;
    alert("Hi " + this.props.foo);
    console.log("fetch");
    fetch("http://localhost:8088/quote/5cd96e05de30eff6ebcce7e9")
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        console.log(JSON.stringify(myJson));
        that.setState({
          quote: myJson.dialog
        });
      });
  }

  handleClick() {
    alert("Hi " + this.props.foo);
  }

  componentWillMount() {
    console.log("did mount!", this.props.foo);
    // console.log(window)
    // let response = await fetch(
    //   `http://localhost:8080/quote/5cd96e05de30eff6ebcce7e9`
    // );
    // let data = await response.json();
    // this.setState({
    //   quote: data
    // });
  }

  render() {
    return (
      <Layout title="Home">
        <main>
          <div id="intro">
            <div className="row">
              <div className="box col-2" />
              <div className="box col-8">
                <center>
                  <h2>
                    Welcome to <br />
                    <i className="fa fa-ring" />
                    <strong> the one API </strong>
                    <br />
                    to rule them all.
                  </h2>
                </center>
              </div>
              <div className="box col-2" />
            </div>
          </div>
          <section>
            <div className="row">
              <div className="box col-2" />
              <div className="box col-8">
                <div className="panel dark">
                  <div className="panel-head">What is this?</div>
                  <div className="panel-body">
                    <em>Mellon</em>, this is the API (What the hell is an
                    Application Programming Interface?) that serves your needs
                    according to data about{" "}
                    <strong>The Lord of the Rings</strong>, the epic books by J.
                    R. R. Tolkien and the official movie adaptions by Peter
                    Jackson.
                  </div>
                </div>
              </div>
              <div className="box col-2" />
            </div>
          </section>
          <section>
            <div className="row">
              <div className="box col-2" />
              <div className="box col-8">
                <div className="panel dark">
                  <div className="panel-head">Try it now!</div>
                  <div className="panel-body">
                    <div>
                      <span>GET</span>
                      <input type="text" defaultValue="/movies/1" />
                      <button className="btn default dark">Fetch</button>
                    </div>
                    <div
                      className="alert info"
                      style={{ overflowY: "scroll", height: "140px" }}
                    >
                      {"lorem ipsum"}
                    </div>
                    <div className="notice dark">
                      There are many more endpoints available, but you need to{" "}
                      <a href="/sign-up">sign up</a> to get the access key to
                      load all the data first. Get a glimpse into the{" "}
                      <a href="/documentation">documentation</a> to check out
                      all accessable datasets.
                    </div>
                  </div>
                </div>
              </div>
              <div className="box col-2" />
            </div>
          </section>
        </main>
      </Layout>
    );
  }
}

module.exports = View;

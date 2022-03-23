import React, { Component } from "react";
import "./css/navbar.css";

class NavbarInstance extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openHamburger: false,
    };
  }
  render() {
    return (
      <nav
        style={{ width: "100%", height: "4em", backgroundColor: "black"}}
      >
        <div
          style={{
            height: "100%",
            width: "5em",
            color: "white",
            fontSize: "25px",
            fontWeight: "500",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            float: "left",
          }}
        >
          Foodie
        </div>
        <div
          style={{
            float: "right",
            marginRight: "1em",
            padding: "0.5em",
            display: "none",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src="https://img.icons8.com/ultraviolet/40/000000/test-account.png" alt="" />
          <button style={{ color: "wheat", zIndex: "4" }}>
            Register Hotel
          </button>
        </div>
        <div
          className="largeDevice"
          style={{
            float: "right",
            color: "white",
            marginRight: "1em",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {false ? (
            <>
              <img
                style={{ margin: "1em" }}
                src="https://img.icons8.com/color/30/26e07f/test-account.png"
                alt=""
              />
              Hello! Kundan
            </>
          ) : (
            <>
              <span
                type="button"
                style={{
                  color: "white",
                  borderRadius: "5px",
                  border: "1px solid white",
                  padding: "0.3em",
                }}
              >
                Register Hotel
              </span>
              {/* <LoginPage title="Login" buttonColor={"white"} />
              <LoginPage title="SignUp" buttonColor={"white"} /> */}
            </>
          )}
        </div>
        <div
          className="smallDevice"
          style={{
            float: "right",
            marginRight: "1em",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            className="hamburgerOption"
            src="https://img.icons8.com/external-gradak-royyan-wijaya/24/ffffff/external-hamburger-menu-basic-interface-iii-gradak-royyan-wijaya.png"
            onClick={() => this.setState({ openHamburger: true })}
            alt=""
          />
        </div>

        <div
          className="hamburger"
          style={{
            display: this.state.openHamburger ? "flex" : "none",
            backgroundColor: "rgba(0,0,0,0.4)",
            position: "fixed",
            width: "100%",
            height: "100%",
          }}
        >
          <div
            className="Links"
            style={{
              backgroundColor: "var(--color1)",
              maxWidth: "300px",
              minWidth: "300px",
              height: "100%",
            }}
          >
            <img
              src="https://img.icons8.com/ios-glyphs/30/ffffff/delete-sign.png"
              style={{ float: "right", margin: "1em" }}
              onClick={() => this.setState({ openHamburger: false })}
              alt=""
            />
            <div
              style={{
                display: "flex",
                backgroundColor: "var(--color1)",
                justifyContent: "flex-start",
                alignItems: "center",
                padding: "1em",
                flexDirection: "column",
                width: "100%",
                height: "100%",
              }}
            >
              <img
                style={{ margin: "1em" }}
                src="https://img.icons8.com/color/80/26e07f/test-account.png"
                alt=""
              />
              <span
                type="button"
                style={{
                  color: "white",
                  borderRadius: "5px",
                  border: "1px solid white",
                  padding: "0.3em",
                }}
              >
                Register Hotel
              </span>
              {/* <LoginPage title="Login" buttonColor={"white"} />
              <LoginPage title="SignUp" buttonColor={"white"} /> */}
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavbarInstance;
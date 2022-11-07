import React, { useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import Header from "./Header";

import {
  RiNewspaperLine,
  RiBaseStationLine,
  RiFolderUserLine,
  RiLogoutBoxLine,
} from "react-icons/ri";

import styles from "./styles/NewsFeed.module.css";

function NewsFeed() {
  let navigate = useNavigate();

  function handleClick(e) {
    navigate("/newsfeed/allaccounts");
  }
  function handleSignOut(e) {
    localStorage.removeItem("psnUserId");
    localStorage.removeItem("psnToken");
    localStorage.removeItem("psnUserEmail");
    navigate("/login");
  }

  

  useEffect(() => {
      

  });

  return (
    <div>
      <Header/>
      <Row>
          
        <Col md={3}>

        <Navbar expand="lg" className="mb-3 mb-sm-0">
            <Container className={styles.navbarContainer}>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse>
              <Nav bg="dark" className={styles.navContainer}>
                <ul className="list-group">
                <Nav.Link>
                  <Link to="/newsfeed" className="text-decoration-none">
                    <li className="list-group-item fs-5 py-3 text-success shadow border border-success rounded-pill">
                      <span>
                        {" "}
                        <RiNewspaperLine /> Newsfeed
                      </span>
                    </li>
                  </Link>
                </Nav.Link>
                <Nav.Link>
                <Link to="allaccounts" className="text-decoration-none">
                    <li className="list-group-item fs-5 py-3 text-success shadow border border-success rounded-pill">
                      <span>
                        <RiBaseStationLine /> All Users
                      </span>
                    </li>
                    </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="myprofile" className="text-decoration-none">
                    <li className="list-group-item fs-5 py-3 text-success shadow border border-success rounded-pill">
                      <span>
                        <RiFolderUserLine /> My Posts
                      </span>
                    </li>
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <li
                    className={`list-group-item fs-5 py-3 text-success shadow  border border-success rounded-pill ${styles.signOutButton}`}
                    onClick={handleSignOut}

                  >
                    <span>
                      <RiLogoutBoxLine /> Sign Out
                    </span>
                  </li>
                </Nav.Link>
                </ul>
              </Nav>
            </Navbar.Collapse>
            </Container>
          </Navbar>
        
          
        </Col>
    
        <Col md={6}>
          <Outlet />
        </Col>
      </Row>
    </div>
  );
}

export default NewsFeed;
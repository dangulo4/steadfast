import React from 'react';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBMask,
  MDBIcon,
  MDBView,
  MDBBtn,
} from 'mdbreact';

const About = () => {
  return (
    <MDBContainer>
      <MDBCard className="my-5 px-5 pb-5">
        <MDBCardBody>
          <MDBRow>
            <MDBCol md="12">
              <MDBCard reverse>
                <MDBView hover cascade waves>
                  <img
                    src="https://mdbootstrap.com/img/Photos/Slides/img%20(142).jpg"
                    alt=""
                    className="img-fluid"
                  />
                  <MDBMask overlay="white-slight" className="waves-light" />
                </MDBView>
                <MDBCardBody cascade className="text-center">
                  <h2 className="font-weight-bold">
                    <a href="#!">About Steadfast</a>
                  </h2>
                  <p>
                    Written by
                    <a href="#!">
                      <strong>The Steadfast Team</strong>
                    </a>
                    , June 2020
                  </p>
                  <MDBBtn className="btn-fb waves-light">
                    <MDBIcon fab icon="facebook-f" className="pr-2" />
                    Facebook
                  </MDBBtn>
                  <span className="counter">46</span>
                  <MDBBtn className="btn-tw waves-light">
                    <MDBIcon fab icon="twitter" className="pr-2" />
                    Twitter
                  </MDBBtn>
                  <span className="counter">22</span>
                  <MDBBtn className="btn-gplus waves-light">
                    <MDBIcon fab icon="google-plus-g" className="pr-2" />
                    Google
                  </MDBBtn>
                  <span className="counter">31</span>
                  <MDBBtn color="default" className="waves-light">
                    <MDBIcon icon="comments" className="pr-2" />
                    Comments
                  </MDBBtn>
                  <span className="counter">18</span>
                </MDBCardBody>
              </MDBCard>
              <MDBContainer className="mt-5">
                <p>
                  Steadfast enables companies to easily find contacts at
                  prospective companies (powered by Hunter.io) and integrate
                  contacts through our seamless experience CMS. Our CMS
                  capabilities allow users to modify contacts by attaching
                  notes, attributing contacts to companies, and tracking a
                  lead’s sales journey.
                </p>
                <p>
                  At Steadfast we believe a sales experience should be fast,
                  efficient, and effective! We strive to remove roadblocks, like
                  finding contacts, and effectively track your team’s success
                  through the sales journey.
                </p>
              </MDBContainer>
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
};

export default About;

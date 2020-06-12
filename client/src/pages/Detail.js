import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Col, Row } from '../components/Grid';
import API from '../utils/API';
import Page from './Page';
import ReactMarkdown from 'react-markdown';

function Detail(props) {
  const [contact, setContact] = useState({});

  // When this component mounts, grab the contact with the _id of props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  const { id } = useParams();
  useEffect(() => {
    API.getContact(id)
      .then((res) => setContact(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Page title="Details">
      <Row>
        <Col size="md-12">
          <hr></hr>
          <h1>
            {contact.firstName} at {contact.company}, {contact.position}
          </h1>
          <hr></hr>
        </Col>
      </Row>
      <Row>
        <Col size="md-12 md-offset-1">
          <article>
            <h1>Lead Notes</h1>
            <ReactMarkdown
              source={contact.notes}
              allowedTypes={[
                'paragraph',
                'strong',
                'emphasis',
                'text',
                'heading',
                'list',
                'listItem',
              ]}
            />
          </article>
        </Col>
      </Row>
      <Row>
        <Col size="md-2">
          <Link to="/">← Back to Contacts</Link>
        </Col>
      </Row>
    </Page>
  );
}

export default Detail;

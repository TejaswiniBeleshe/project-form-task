import "./Page1.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import { Container, Row, Col, InputGroup } from "react-bootstrap";

const today = new Date().toISOString().split("T")[0];

const Page1 = ({ dataOfPage1, setDataOfPage1 }) => {
  const { projectName, notes, sDate, eDate, client } = dataOfPage1;
  const [newClient, setNewClient] = useState("");
  let endDate = sDate ? sDate : today;

  useEffect(() => {
    console.log(client);
  }, [client]);

  return (
    <Container className="page1-container">
      <h2 className="text-center">Create a project</h2>

      <Form className="project-form">
        {/* Project Name */}
        <Form.Group controlId="project-name" className="mb-3">
          <Form.Label>Project name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter project name here"
            value={projectName}
            onChange={(e) =>
              setDataOfPage1({ ...dataOfPage1, projectName: e.target.value })
            }
          />
        </Form.Group>

        {/* Client Selection */}
        <Form.Group controlId="client" className="mb-3">
          <Form.Label>Client</Form.Label>
          <InputGroup>
            <Form.Select
              value={client}
              onChange={(e) =>
                setDataOfPage1({ ...dataOfPage1, client: e.target.value })
              }
            >
              <option value="">Select a client</option>
              <option value="client1">Client1</option>
              <option value="client2">Client2</option>
              <option value="client3">Client3</option>
            </Form.Select>
            <Button variant="outline-primary">+ New Client</Button>
          </InputGroup>
        </Form.Group>

        {/* Date Selection */}
        <Form.Group className="mb-3">
          <Form.Label>Dates</Form.Label>
          <Row>
            <Col>
              <Form.Control
                type="date"
                min={today}
                value={sDate}
                onChange={(e) =>
                  setDataOfPage1({ ...dataOfPage1, sDate: e.target.value })
                }
              />
            </Col>
            <Col>
              <Form.Control
                type="date"
                disabled={!sDate}
                min={endDate}
                value={eDate}
                onChange={(e) =>
                  setDataOfPage1({ ...dataOfPage1, eDate: e.target.value })
                }
              />
            </Col>
          </Row>
        </Form.Group>

        {/* Notes */}
        <Form.Group controlId="notes" className="mb-4">
          <Form.Label>Notes</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Optional"
            value={notes}
            onChange={(e) =>
              setDataOfPage1({ ...dataOfPage1, notes: e.target.value })
            }
          />
        </Form.Group>

        {/* Navigation Buttons */}
       
      </Form>
    </Container>
  );
};

export default Page1;

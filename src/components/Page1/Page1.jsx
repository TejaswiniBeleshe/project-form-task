import "./Page1.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import { Container, Row, Col, InputGroup } from "react-bootstrap";

const today = new Date().toISOString().split("T")[0];

const Page1 = ({ dataOfPage1, setDataOfPage1,errorOfPage1,setErrorOfPage1 }) => {
  const { projectName, notes, sDate, eDate, client,newClient } = dataOfPage1;
  // const [newClient, setNewClient] = useState("");
  let endDate = sDate ? sDate : today;

  useEffect(() => {
    console.log(client);
  }, [client]);

  const handleHideError = ()=>{
    setErrorOfPage1({nameErr:"",clientErr:"",dateErr:"",})
  }

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
            value={dataOfPage1.projectName}
            onClick={handleHideError}
            onChange={(e)=>setDataOfPage1({ ...dataOfPage1, projectName: e.target.value })
            }
          />
          {errorOfPage1.nameErr? <p className="error-text">{errorOfPage1.nameErr}</p>:""}
        </Form.Group>

        {/* Client Selection */}
        <Form.Group controlId="client" className="mb-3">
          <Form.Label>Client</Form.Label>
          <InputGroup>
            <Form.Select
             onClick={handleHideError}
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
            <Form.Control variant="outline-primary" placeholder="+ New Client" value={newClient} onChange={(e)=>setDataOfPage1({...dataOfPage1, newClient:e.target.value})}/>
          </InputGroup>
          {errorOfPage1.clientErr ? <p className="error-text">{errorOfPage1.clientErr}</p> : ""}
        </Form.Group>

        {/* Date Selection */}
        <Form.Group className="mb-3">
          <Form.Label>Dates</Form.Label>
          <Row>
            <Col>
              <Form.Control
                type="date"
                min={today}
                onClick={handleHideError}
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
                onClick={handleHideError}
                onChange={(e) =>
                  setDataOfPage1({ ...dataOfPage1, eDate: e.target.value })
                }
                
              />
            </Col>
          </Row>
          
          {errorOfPage1.dateErr && <p className="error-text">{errorOfPage1.dateErr}</p>}
          
        </Form.Group>
       
       

        {/* Notes */}
        <Form.Group controlId="notes" className="mb-4">
          <Form.Label>Notes</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Optional"
            value={notes}
            onClick={handleHideError}
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

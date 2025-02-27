import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import "./Page2.css";

const Page2 = function () {
    return (
        <div className="page2-container">
            <h4 className="text-center">Project type</h4>
            <p className="subtext text-center">
                Don’t panic — You can also customize these types in settings
            </p>

            <Tabs
                defaultActiveKey="time-materials"
                id="fill-tab-example"
                className="mb-3 tab-container"
                fill
            >
                {/* Time & Materials Tab */}
                <Tab eventKey="time-materials" title="Time & Materials">
                    <div className="section">
                        <h5>Hourly</h5>
                        <p className="description">We need hourly rates to track your project’s billable amount.</p>
                        <Form.Select>
                            <option value="">Select a rate type</option>
                            <option value="project-hourly-rate">Project Hourly Rate</option>
                        </Form.Select>
                        <InputGroup className="mt-2">
                            <InputGroup.Text>₹</InputGroup.Text>
                            <Form.Control type="number" placeholder="12,678.00" />
                        </InputGroup>
                    </div>

                    <div className="section">
                        <h5>Budget</h5>
                        <p className="description">We need hourly rates to track your project’s billable amount.</p>
                        <Form.Select>
                            <option value="">Select budget type</option>
                            <option value="hours-per-person">Hours per Person</option>
                        </Form.Select>
                        <Form.Check
                            type="checkbox"
                            label="Budget resets every month"
                            id="checkbox-1"
                            className="mt-2"
                        />
                        <Form.Check
                            type="checkbox"
                            label="Send email alerts if project exceeds"
                            className="mt-2"
                        />
                        <InputGroup className="mt-2">
                            <Form.Control type="number" placeholder="80.00" />
                            <InputGroup.Text>% of budget</InputGroup.Text>
                        </InputGroup>
                    </div>
                </Tab>

                {/* Fixed Fee Tab */}
                <Tab eventKey="fixed-fee" title="Fixed Fee">
                    <p className="description">Tab content for Fixed Fee</p>
                </Tab>

                {/* Non-Billable Tab */}
                <Tab eventKey="non-billable" title="Non-Billable">
                    <p className="description">Tab content for Non-Billable</p>
                </Tab>
            </Tabs>

          
        </div>
    );
};

export default Page2;

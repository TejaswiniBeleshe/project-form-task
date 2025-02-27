import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import "./Page2.css";
import { useEffect } from 'react';

const Page2 = function ({dataOfPage2,setDataOfPage2}) {
    const {hourlyRate,budgetType,resetEveryMonth,budgetPercent,sendMail} = dataOfPage2;

    // useEffect(()=>{
    //     console.log(resetEveryMonth)

    // },[resetEveryMonth])
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
                            <option value="project-hourly-rate">Project Hourly Rate</option>
                        </Form.Select>
                        <InputGroup className="mt-2">
                            <InputGroup.Text>₹</InputGroup.Text>
                            <Form.Control type="number" placeholder="12,678.00" value={hourlyRate} onChange={(e)=>setDataOfPage2({...dataOfPage2, hourlyRate:e.target.value})}/>
                        </InputGroup>
                    </div>

                    <div className="section">
                        <h5>Budget</h5>
                        <p className="description">We need hourly rates to track your project’s billable amount.</p>
                        <Form.Select value={budgetType} onChange={(e)=>setDataOfPage2({...dataOfPage2, budgetType:e.target.value})}>
                            <option value="">Select budget type</option>
                            <option value="hours-per-person">Hours per Person</option>
                            <option value="hours-per-team">Hours per team</option>

                        </Form.Select>
                        <Form.Check
                            type="checkbox"
                            label="Budget resets every month"
                            id="checkbox-1"
                            className="mt-2"
                            onClick={()=>setDataOfPage2({...dataOfPage2,resetEveryMonth:!resetEveryMonth})}
                        />
                        <Form.Check
                            type="checkbox"
                            label="Send email alerts if project exceeds"
                            className="mt-2"
                            onClick={()=>setDataOfPage2({...dataOfPage2,sendMail:!sendMail})}
                        />
                        <InputGroup className="mt-2">
                            <Form.Control type="number" placeholder="80.00" value={budgetPercent} onChange={(e)=>setDataOfPage2({...dataOfPage2,budgetPercent:e.target.value})}/>
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

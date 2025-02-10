import React, { useState } from 'react';
import { Offcanvas, OffcanvasHeader, OffcanvasBody, Accordion, Card, Row, Col, Image } from 'react-bootstrap';
import './style.css'
import MyNavbar from '../../components/MyNavbar/MyNavbar'
import { Link } from 'react-router-dom';
import image from '../../assets/profile.jpg'
import StudentActivity from '../../components/StudentActivity/StudentActivity';

const DashBoard = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [activeKeys, setActiveKeys] = useState({});

  const accordionData = [
    {
      id: '1',
      collectionName: 'Collection 1',
      notes: [{
        note: 'Note 1',
        date: "1-2-2025"
      },
      {
        note: 'Note 1',
        date: "1-2-2025"
      }],
    },
    {
      id: '2',
      collectionName: 'Collection 2',
      notes: [{
        note: 'Note 1',
        date: "1-2-2025"
      },
      {
        note: 'Note 1',
        date: "1-2-2025"
      }],
    },
    {
      id: '3',
      collectionName: 'Collection 3',
      notes: [{
        note: 'Note 1',
        date: "1-2-2025"
      },
      {
        note: 'Note 1',
        date: "1-2-2025"
      }],
    },
    {
      id: '4',
      collectionName: 'Collection 4',
      notes: [{
        note: 'Note 1',
        date: "1-2-2025"
      },
      {
        note: 'Note 1',
        date: "1-2-2025"
      }],
    },
  ];

  const handleToggle = (itemId) => {
    setActiveKeys({
      ...activeKeys,
      [itemId]: !activeKeys[itemId],
    });
  };

  const studentData = {
    name: 'Michel Jackson',
    email: 'michel.j@gmail.com',
    class: '8',
    bio: 'A passionate computer science student...',
    imageUrl: 'https://via.placeholder.com/250',
    dob: "5-4-2004",
    gender: "male",
    school: "SSVP Vadodara",
    noteCount: "10"
  };

  const studentActivities = [
    {
      type: 'Assignment Submitted',
      description: 'Math Assignment 2',
      timestamp: '2024-10-27T10:30:00Z',
    },
    {
      type: 'Quiz Taken',
      description: 'Science Quiz 1',
      timestamp: '2024-10-26T14:45:00Z',
    },
    {
      type: 'Discussion Forum',
      description: 'Replied to thread on cell biology',
      timestamp: '2024-10-25T09:12:00Z',
    },
    {
      type: 'Assignment Submitted',
      description: 'History Essay',
      timestamp: '2024-10-27T16:20:00Z',
    },
    {
      type: 'Quiz Taken',
      description: 'Science Quiz 1',
      timestamp: '2024-10-26T14:45:00Z',
    },
    {
      type: 'Discussion Forum',
      description: 'Replied to thread on cell biology',
      timestamp: '2024-10-25T09:12:00Z',
    },
  ];

  return (
    <div className='h-100'>
      <MyNavbar />
      {/* Sidebar */}
      <div className='w-100 p-1 sticky z-1'>
        <button className="btn btn-sm sidebar-btn" onClick={handleShow}>
          <i className="bi bi-list me-2 fs-5"></i><span>Collections</span>
        </button>

        <Offcanvas show={show} onHide={handleClose}>
          <OffcanvasHeader closeButton>
            <Offcanvas.Title><h3>EduVision</h3></Offcanvas.Title>
          </OffcanvasHeader>
          <OffcanvasBody>

            {accordionData.map((item, ind) => (
              <div key={ind} className='mb-3 accordian-main'>
                <Accordion defaultActiveKey={null} activeKey={activeKeys[ind] ? '0' : null}>
                  <Card className='coll-card'>
                    <Card.Header onClick={() => handleToggle(ind)} style={{ cursor: 'pointer' }}>
                      {item.collectionName}
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                      <Card.Body>
                        <ul className="list-unstyled">
                          {item.notes.map((note, index) => (
                            <li key={index} className='d-flex justify-content-between align-items-center mb-2'>
                              {/* {note} */}
                              <button className='btn btn-sm note-btn'>{note.note}</button><span>Date Created: {note.date}</span>
                            </li>
                          ))}
                        </ul>
                        <button className='btn btn-sm new-note-btn'><i className="bi bi-file-earmark-plus me-2"></i>New Note</button>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
            ))}

            <button className='btn create-coll'><i className="bi bi-plus-circle-dotted me-3"></i>New Collection</button>

          </OffcanvasBody>
        </Offcanvas>
      </div>

      {/* Dashboard profile */}
      <div className='w-100 mt-5 container dashboard-layout'>
        <div className='pt-3'>
          <Card className="mb-3 p-3">
            <Row className="g-0">
              <Col md={4} className="d-flex justify-content-center align-items-center">
                <Image
                  src={image}
                  alt={studentData.name + "'s profile"}
                  roundedCircle
                  style={{ width: '200px', height: '200px', objectFit: "cover" }}
                />
              </Col>
              <Col md={8}>
                <Card.Body>
                  <Card.Title>{studentData.name}</Card.Title>
                  <div className='sdata-div'>
                    <div className='mb-2'>
                      <strong>Email:</strong> {studentData.email}
                    </div>
                    <div className='mb-2'>
                      <strong>Class:</strong> {studentData.class}
                    </div>
                    <div className='mb-2'>
                      <strong>Bio:</strong> {studentData.bio}
                    </div>
                    <div className='mb-2'>
                      <strong>Notes:</strong> {studentData.noteCount}
                    </div>
                  </div>
                </Card.Body>
              </Col>
            </Row>
          </Card>
          <Link className='btn btn-sm p-btn' to="/profile"><i className="bi bi-person-circle me-2"></i><span>Open Profile</span></Link>
        </div>
      </div>

      {/* recent activity */}
      <StudentActivity activities={studentActivities} />
    </div>
  )
}

export default DashBoard
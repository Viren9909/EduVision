import React, { useState } from 'react';
import { Card, Form, Button } from 'react-bootstrap';

function Profile() {
  const [profileData, setProfileData] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    bio: 'A brief bio about the student...',
    imageUrl: 'https://via.placeholder.com/150', // Placeholder image URL
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    // Here you would typically save the data to a server or update a database
    console.log('Profile data saved:', profileData);
  };

  return (
    <Card>
      <Card.Body>
        <div className="d-flex justify-content-center mb-3">
          <img
            src={profileData.imageUrl}
            alt="Profile"
            style={{ width: '150px', height: '150px', borderRadius: '50%' }}
          />
        </div>

        {isEditing ? (
          <Form>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={profileData.name}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={profileData.email}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="bio">
              <Form.Label>Bio</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="bio"
                value={profileData.bio}
                onChange={handleChange}
              />
            </Form.Group>

            {/* Image URL Input (Optional) */}
            <Form.Group controlId="imageUrl">
              <Form.Label>Image URL</Form.Label>
              <Form.Control
                type="text"
                name="imageUrl"
                value={profileData.imageUrl}
                onChange={handleChange}
              />
            </Form.Group>

            <Button variant="primary" onClick={handleSave}>
              Save Changes
            </Button>
          </Form>
        ) : (
          <div>
            <Card.Title>{profileData.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {profileData.email}
            </Card.Subtitle>
            <Card.Text>{profileData.bio}</Card.Text>
            <Button variant="secondary" onClick={handleEdit}>
              Edit Profile
            </Button>
          </div>
        )}
      </Card.Body>
    </Card>
  );
}

export default Profile;
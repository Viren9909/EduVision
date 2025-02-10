import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import moment from 'moment';

function StudentActivity({ activities }) {
    const sortedActivities = [...activities].sort((a, b) => {
        const dateA = moment(a.timestamp);
        const dateB = moment(b.timestamp);
        return dateB.valueOf() - dateA.valueOf();
    });

    return (
        <Card>
            <Card.Header>Recent Activity</Card.Header>
            <ListGroup variant="flush">
                {sortedActivities.map((activity, index) => (
                    <ListGroup.Item key={index}>
                        <div className="d-flex justify-content-between align-items-center">
                            <div>
                                <strong>{activity.type}</strong> - {activity.description}
                            </div>
                            <small className="text-muted">
                                {moment(activity.timestamp).fromNow()}
                            </small>
                        </div>
                    </ListGroup.Item>
                ))}
                {sortedActivities.length === 0 && (
                    <ListGroup.Item className="text-center">
                        No recent activity found.
                    </ListGroup.Item>
                )}
            </ListGroup>
        </Card>
    );
}

export default StudentActivity;
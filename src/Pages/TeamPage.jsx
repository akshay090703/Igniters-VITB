import React from 'react';
import Card from '../components/Card';
import '../Pages/Team.css';

const teamMembers = [
 {
    name: 'John Doe',
    title: 'Software Engineer',
    imgSrc: 'src/assets/person.jpg',
    twitter: 'https://twitter.com/johndoe',
    linkedin: 'https://www.linkedin.com/in/johndoe/',
 },
 {
    name: 'John Doe',
    title: 'Product Manager',
    imgSrc: 'src/assets/person.jpg',
    twitter: 'https://twitter.com/janesmith',
    linkedin: 'https://www.linkedin.com/in/janesmith/',
 },
  // Add more team members here as an array
];

const Team = () => {
 return (
    <div className="App">
      <div className="card-grid">
        {teamMembers.map((member, index) => (
          <Card key={index} teamMember={member} />
        ))}
      </div>
    </div>
 );
};

export default Team;
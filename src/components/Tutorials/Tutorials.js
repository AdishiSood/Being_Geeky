import React from 'react';
import './Tutorials.css';

const Tutorials = () => {
    return (
        <div className="tutorials" id="tut">
            <h1><i className="fas fa-music"></i> Documentation</h1>
            <h2>All genuine Documentation at one place</h2>
            <p>
            Being Geeky helps the viewer to find all the required documentation at one place so that they need not waste time to find offical documentation. The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to 'proper' Latin. It contains a series of real Latin words. This ancient dummy text is also incomprehensible, but it imitates the rhythm of most European languages in Latin script. The advantage of its Latin origin and the relative meaninglessness of Lorum Ipsum is that the text does not attract attention to itself or distract the viewer's attention from the layout.
            </p>
            <button type="button">Start Your Trial Now</button>
            <span> You can download Being Geeky from app store or playstore. </span>
            <img src="https://beinggeeky-hnip75cdkgvvk6vt.web.codequotient.com/public/ipad-app-mockup-03.png" alt="img" />
        </div>
    );
}

export default Tutorials;

import React from "react";
import styles from "./Resume.module.css";
import { BsBriefcase } from "react-icons/bs";
import { IoSchoolOutline } from "react-icons/io5";

export default function Resume() {
  return (
    <div className={styles.resume} id="resume">
      <h1 className={styles.heading}>Resume</h1>
      <div className={styles.resumeSection}>
        <div className={styles.head}>
          <BsBriefcase size={28} />
          &nbsp; &nbsp;
          <h1 className={styles.headIn}>Working Experience</h1>
        </div>
        <br />
        <br />
{/*         
        <div className={styles.card}>
          <h2 className={styles.date}>SEPTEMBER 2019 - JUNE 2020</h2>
          <div className={styles.exp}>
            <h2 className={styles.expHead}>Unmanned Ground Vehicle (UGV) Software Team</h2>
            <h2 className={styles.company}>
              Northrop Grumman
            </h2>
            <p className={styles.desc}>
              <p style={{ fontWeight: "bold" }}>
                ● Coded framework for guiding UGV vehicle moment using Python
              </p>
              <p style={{ marginLeft: "12px" }}>
                ○ Collaborated to write functions allowing the vehicle to
                move, stop, and open storage cabinet to allow passengers to
                get in. Also to track its location and travel and return
                safely to the desired location.
              </p>
            </p>

            <p className={styles.desc}>
              <p style={{ fontWeight: "bold" }}>● Set up vehicle communications to send commands and receive status from the UGV</p>
              <p style={{ marginLeft: "12px", textAlign: "justify" }}>
                ○ Sets up an HTTP server on a local port and sends and receives requests through that server.
              </p>
              <p style={{ marginLeft: "12px", textAlign: "justify" }}>
                ○ The vehicle continuously asks for commands and lets the user see on-site operations through a camera embedded inside the custom made remote-controlled car.
              </p>
              <p style={{ marginLeft: "12px", textAlign: "justify" }}>
                ○ Specifically made commands for the RC to follow such as ‘stop’, ‘go’, ‘show webcam’, ‘load’, and ‘unload’.
              </p>
            </p>
          </div>
        </div> */}

        <div className={styles.card}>
          <h2 className={styles.date}>SEPTEMBER 2021 - Present</h2>
          <div className={styles.exp}>
            <h2 className={styles.expHead}>Software Engineer</h2>
            <h2 className={styles.company}>
              Cal Poly Artificial Intelligence
            </h2>
            <p className={styles.desc}>
              <p style={{ marginLeft: "12px" }}>
                ○ Constructed artificial intelligence and machine
                learning products for software, and other solutions for commercial,
                industrial, and educational purposes

              </p>
            </p>

            <p className={styles.desc}>
              <p style={{ marginLeft: "12px", textAlign: "justify" }}>
                ○ Implemented the fundamental concepts of machine learning,
                including data visualization, data presentation, and
                model evaluation
              </p>
            </p>
          </div>
        </div>

        <div className={styles.card}>
          <h2 className={styles.date}>Sep. 2019 – June 2021</h2>
          <div className={styles.exp}>
            <h2 className={styles.expHead}>Software Engineer</h2>
            <h2 className={styles.company}>
              Northrop Grumman Collaboration Project
            </h2>
            <p className={styles.desc}>
              <p style={{ marginLeft: "12px" }}>
                ○ Oversaw design, development, and upgrades to system-on-chip
                devices and Internet-of-Things (IoT) electronics
              </p>
            </p>

            <p className={styles.desc}>
              <p style={{ marginLeft: "12px", textAlign: "justify" }}>
                ○ Developed testing methods of prototypes for driverless vehicles, drones, and other commercial endeavors
              </p>
              <p style={{ marginLeft: "12px", textAlign: "justify" }}>
                ○ Supervised a team of five to ensure performance, accuracy, and cost-effectiveness
              </p>
            </p>
          </div>
        </div>

        <div className={styles.card}>
          <h2 className={styles.date}>May 2016 – Aug 2019</h2>
          <div className={styles.exp}>
            <h2 className={styles.expHead}>Content Creator</h2>
            <h2 className={styles.company}>
              YouTube
            </h2>
            <p className={styles.desc}>
              <p style={{ marginLeft: "12px" }}>
                ○ Created YouTube channel under the name Aryan Sadyora focusing on
                informing the audience about latest in  technology
              </p>
            </p>

            <p className={styles.desc}>
              <p style={{ marginLeft: "12px", textAlign: "justify" }}>
                ○ Amassed over 1.8 million views and 4.1 million minutes of watchtime
              </p>
              <p style={{ marginLeft: "12px", textAlign: "justify" }}>
                ○ Produced promotional content for renowned brands including Apple, Sony, and Blue
              </p>
            </p>
          </div>
        </div>

      </div>

      <div className={styles.resumeSection}>
        <div className={styles.head}>
          <IoSchoolOutline size={28} />
          &nbsp; &nbsp;
          <h1 className={styles.headIn}>Educational Qualifications</h1>
        </div>
        <br />
        <br />
        <div className={styles.card}>
          <h2 className={styles.date}>SEPTEMBER 2019 - Present</h2>
          <div className={styles.exp}>
            <h2 className={styles.expHead}>Bachelor of Computer Science</h2>
            <h2 className={styles.company}>
              California State University, San Luis Obispo
            </h2>
            <p className={styles.desc} style={{ fontWeight: "bold" }}>
              ● Expected to graduate in March 2023 with a BS Computer Science degree
            </p>
          </div>
        </div>                              
      </div>
    </div>
  );
}

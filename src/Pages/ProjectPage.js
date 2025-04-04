import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import LINK from "../Content/link";
import "../Styles/ProjectPage.scss"
import {
  Link
} from "react-router-dom";

const ProjectPage = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    if (!id) return;

    const fetchData = async () => {
      try {
        const res = await fetch(`${LINK}/api/projects/${id}?populate=*`, {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        });
        const data = await res.json();
        setProject(data);
        console.log(data);
      } catch (err) {
        console.error('Fetch error :', err);
      }
    };

    fetchData();
  }, [id]);

  // 💡 Safely guard access
  if (!project || !project.data) {
    return <p>Loading... grab a coffee, love ☕</p>; //need to code a loading page 
  }

 const projectData = project.data;

  return (
    <div id="ProjectPage">
      <div className="titleProject">
          <h1 className="text-center">{projectData.name}</h1>
      </div>
      <div className="bulletPoints offset-xl-1 col-xl-10 row">
        <h2 className="bulletPointTitle">Modalities :</h2>
        <p className="littleDescription"> {projectData.description}</p>
        <ul className="modalitiesList">
          <li className="list-item"><strong>🖥️ Platform :</strong> {projectData.platform ? projectData.platform : "N/A"}</li>
          <li className="list-item"><strong>🧠 Engine / Languages : </strong>{projectData.workStack ? projectData.workStack : "N/A"}</li>
          <li className="list-item"><strong>🎮 Project Type : </strong>{projectData.projectType ? projectData.projectType : "N/A"}</li>
          <li className="list-item"><strong>👥 Number of people : </strong>{projectData.ppl ? projectData.ppl : "N/A"}</li>
          <li className="list-item"><strong>🎯 My main roles : </strong>{projectData.role ? projectData.role : "N/A"}</li>
          <li className="list-item"><strong>⏰ Time : </strong>{projectData.time ? projectData.time : "N/A"}</li>
        </ul>


      
      </div>

      <div className="video-container offset-xl-2 col-xl-8">
          <video autoPlay muted loop>
            <source src={projectData.videoURL} type="video/mp4" />
            Your browser doesn't support the video tag, boo 💔
          </video>
      </div>


        <div className="descriptionProject  offset-xl-2 col-xl-8 row">
          <h2 className="descriptionTitle">Description :</h2>
          {projectData.longDescription
          ? projectData.longDescription.split('\n').map((para, i) => <p className="col-11" key={i}>{para}</p>)
          : <p>"N/A"</p>}
        </div>
        <div className="projectLinks offset-xl-2 col-xl-8 row">
          <h2 className="linksTitle">Useful Links :</h2>

            {projectData.links ? projectData.links
              .split('\n')
              .map((line, i) => {
                const parts = line.split('&e');
                const label = parts[0]?.trim();
                const url = parts[1]?.trim();

                return (
                  <p className="col-11" key={i}>
                    <strong>{label}:</strong>{' '}
                    <a href={url} target="blank">
                      {url}
                    </a>
                  </p>
                );
            }) : <p>"N/A"</p>}
        </div>
    </div>
  );
};

export default ProjectPage;
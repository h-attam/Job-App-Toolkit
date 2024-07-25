import React from "react";
import DelButton from "./DelButton";
import { MdLocationPin } from "react-icons/md";
import { FaSuitcase, FaCalendarAlt } from "react-icons/fa";

const Card = ({ job }) => {
  const colors = {
    Mülakat: "green",
    Reddedildi: "red",
    "Devam Ediyor": "orange",
  };

  // `job.status` değerini `colors` nesnesinde bulamazsa varsayılan renk ayarlama
  const statusColor = colors[job.status] || "gray";

  return (
    <div className="card">
      <div className="head">
        <section>
          <div className="letter">
            <span>{job.company[0]}</span>
          </div>

          <div className="info">
            <p>{job.position}</p>
            <p>{job.company}</p>
          </div>
        </section>

        <section>
          <DelButton id={job.id} />
        </section>
      </div>

      <div className="body">
        <div className="field">
          <MdLocationPin />
          <p>{job.location}</p>
        </div>
        <div className="field">
          <FaSuitcase />
          <p>{job.type}</p>
        </div>
        <div className="field">
          <FaCalendarAlt />
          <p>{new Date(job.date).toLocaleDateString()}</p>
        </div>

        <div className="status">
          <p
            style={{
              backgroundColor: statusColor, // `background` yerine `backgroundColor`
              color: 'white', // Yazı renginin arka planla kontrast oluşturması için
              padding: '4px 8px', // İçerik ve kenar boşlukları
              borderRadius: '4px', // Köşeleri yuvarlama
            }}
          >
            {job.status}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;

import React from "react";
import "../components/Events.css";
import { Switch } from "@mui/material";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import SearchIcon from "@mui/icons-material/Search";

const Events = () => {
  return (
    <div className="container event_section ">
      <ul
        className="nav nav-pills mb-3 mt-4 tab_headings"
        id="pills-tab"
        role="tablist"
      >
        <li className="nav-item" role="presentation">
          <button
            className="nav-link event_button active1"
            id="pills-home-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-home"
            type="button"
            role="tab"
            aria-controls="pills-home"
            aria-selected="true"
          >
            Active Events
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link event_button1"
            id="pills-profile-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-profile"
            type="button"
            role="tab"
            aria-controls="pills-profile"
            aria-selected="false"
          >
            Post Events
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="pills-contact-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-contact"
            type="button"
            role="tab"
            aria-controls="pills-contact"
            aria-selected="false"
          >
            Draft Events
          </button>
        </li>
      </ul>
      <div className="tab-content" id="pills-tabContent">
        <div
          className="tab-pane fade show active"
          id="pills-home"
          role="tabpanel"
          aria-labelledby="pills-home-tab"
          tabindex="0"
        >
          <div className="search_bar">
            <SearchIcon className="search_icon" />
            <input
              type="text"
              className="search_events"
              placeholder="Search Events"
            />
          </div>

          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <img
                  src="images/Events/treking.jpg"
                  className="card-img-top"
                  alt="..."
                ></img>
                <div className="card-body">
                  <h5 className="card-title">
                    Bird walk - only for teens & adults
                  </h5>
                  <div className="event_date">
                    <p className="card-text">13 jan 2024 7:30AM</p>
                    <Switch defaultChecked color="success" />
                  </div>
                  <p className="location">Bengalaru</p>

                  <div className="ticket_information">
                    <ConfirmationNumberIcon />
                    <p>9/20</p>
                    <AutoGraphIcon /> <p>INR 5.2k</p>
                    <RemoveRedEyeOutlinedIcon /> <p>52</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img
                  src="images/Events/event222.jpg"
                  className="card-img-top"
                  alt="..."
                ></img>
                <div className="card-body">
                  <h5 className="card-title">
                    Bird walk - only for teens & adults
                  </h5>
                  <div className="event_date">
                    <p className="card-text">13 jan 2024 7:30AM</p>
                    <Switch defaultChecked color="success" />
                  </div>
                  <p className="location">Bengalaru</p>

                  <div className="ticket_information">
                    <ConfirmationNumberIcon />
                    <p>9/20</p>
                    <AutoGraphIcon /> <p>INR 5.2k</p>
                    <RemoveRedEyeOutlinedIcon /> <p>52</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img
                  src="images/Events/past event.jpg"
                  className="card-img-top"
                  alt="..."
                ></img>
                <div className="card-body">
                  <h5 className="card-title">
                    Bird walk - only for teens & adults
                  </h5>
                  <div className="event_date">
                    <p className="card-text">13 jan 2024 7:30AM</p>
                    <Switch defaultChecked color="success" />
                  </div>
                  <p className="location">Bengalaru</p>

                  <div className="ticket_information">
                    <ConfirmationNumberIcon />
                    <p>9/20</p>
                    <AutoGraphIcon /> <p>INR 5.2k</p>
                    <RemoveRedEyeOutlinedIcon /> <p>52</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="pills-profile"
          role="tabpanel"
          aria-labelledby="pills-profile-tab"
          tabindex="0"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
          exercitationem consectetur cupiditate corrupti doloribus asperiores,
          quos aspernatur illum unde excepturi reprehenderit minima error
          recusandae fugit consequatur voluptates mollitia pariatur porro.
        </div>
        <div
          className="tab-pane fade"
          id="pills-contact"
          role="tabpanel"
          aria-labelledby="pills-contact-tab"
          tabindex="0"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta sed
          vero ratione voluptatibus itaque molestias doloremque dicta ut quaerat
          deserunt hic eaque mollitia qui reprehenderit repudiandae culpa, illum
          enim totam!
        </div>
      </div>
    </div>
  );
};

export default Events;

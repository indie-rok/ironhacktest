import React from "react";
import { Link } from "react-router-dom";
import { Container, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function DetailedMovie() {
  return (
    <div>
      <Container>
        <img
          src="https://picsum.photos/100/200"
          alt="cover image"
          className="mb-4"
        />

        <h6>
          <small>Director:</small>Martin Scorcess
        </h6>
        <h6>
          <small>Release Date</small> 10-12-2019
        </h6>
        <h6>
          <small>Score</small> 4.2/5 <FontAwesomeIcon icon={faStar} />
        </h6>
        <h5>Plot</h5>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam nihil
          cumque voluptatibus, sint earum doloribus, ipsam quasi, sunt deserunt
          eveniet facere obcaecati neque explicabo ipsa est id amet. Ducimus,
          esse.
        </p>
        <p>
          <Button variant="warning">
            <Link>Edit</Link>
          </Button>
        </p>
      </Container>
    </div>
  );
}

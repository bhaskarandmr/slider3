import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function NowPlaying({ movie }) {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1
      }
    }]
  };
  return (
    <Container>
      <div className="clearfix mt-5 mb-2 sm-2">
        <h6 className="float-left">ஸ்டோரீஸ்...</h6>
        
      </div>
      <Slider {...settings}>
        {movie.map(function(movie) {
          return (
            <React.Fragment>
              <Link>
                <Col>
                  <Card>
                    <Card.Img
                      variant="top"
                      src={`${movie.poster_path}`}
                    />
                    <Card.Body>
                      <span>{movie.title}</span>
                    </Card.Body>
                  </Card>
                </Col>
              </Link>
            </React.Fragment>
          );
        })}
      </Slider>
    </Container>
  );
}

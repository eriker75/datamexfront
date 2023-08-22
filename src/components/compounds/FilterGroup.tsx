import { DropDownFilter } from "@/components/blocks/DropDownFilter";
import { Container, Row, Col } from "react-bootstrap";

export const FilterGroup = () => {
  return (
    <Container>
      <Row className="g-4 flex justify-content-center">
        <Col className="d-flex justify-content-center">
          <DropDownFilter placeholder={"Giros de negocio"} />
        </Col>
        <Col className="d-flex justify-content-center">
          <DropDownFilter placeholder={"Giros de negocio"} />
        </Col>
        <Col className="d-flex justify-content-center">
          <DropDownFilter placeholder={"Giros de negocio"} />
        </Col>
        <Col className="d-flex justify-content-center">
          <DropDownFilter placeholder={"Giros de negocio"} />
        </Col>
      </Row>
    </Container>
  );
};

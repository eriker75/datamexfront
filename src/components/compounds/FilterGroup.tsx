import { DropDownFilter } from "@/components/blocks/DropDownFilter";
import { CITIES } from "@/models/constants/cities";
import { Container, Row, Col } from "react-bootstrap";

export const FilterGroup = () => {
  return (
    <Container>
      <Row className="g-4 flex justify-content-center">
        <Col className="d-flex justify-content-center">
          <DropDownFilter placeholder={"Giros de negocio"} type={'cities'} filters={CITIES}/>
        </Col>
        <Col className="d-flex justify-content-center">
          <DropDownFilter placeholder={"Giros de negocio"} type={'states'} filters={CITIES}/>
        </Col>
        <Col className="d-flex justify-content-center">
          <DropDownFilter placeholder={"Giros de negocio"} type={'trades'} filters={CITIES}/>
        </Col>
        <Col className="d-flex justify-content-center">
          <DropDownFilter placeholder={"Giros de negocio"} type={'sizes'} filters={CITIES}/>
        </Col>
      </Row>
    </Container>
  );
};

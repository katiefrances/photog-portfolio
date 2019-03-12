import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

class SectionTwo extends Component {
    render() {
        return (
            <div className="SectionTwo">
               <Grid fluid>
                    <Row>
                        <Col md={12}>
                            <h1>Heading</h1>
                        </Col>
                        <Col md={6}>
                            Et proident ut velit exercitation ex incididunt. Mollit minim id laborum sunt fugiat sit ipsum occaecat Lorem occaecat deserunt aliquip Lorem. Aliqua est labore sit amet sit cillum voluptate qui exercitation exercitation est. Eu nostrud laborum consectetur sint sunt est culpa cupidatat. Dolore duis ullamco id sit laboris culpa.
                        </Col>
                        <Col md={6}>
                            Et proident ut velit exercitation ex incididunt. Mollit minim id laborum sunt fugiat sit ipsum occaecat Lorem occaecat deserunt aliquip Lorem. Aliqua est labore sit amet sit cillum voluptate qui exercitation exercitation est. Eu nostrud laborum consectetur sint sunt est culpa cupidatat. Dolore duis ullamco id sit laboris culpa.
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}

export default SectionTwo;
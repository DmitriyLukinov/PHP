import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; //без этого импорта бутстрап не работает
import { Row, Table, } from 'react-bootstrap';

export default function MeasuringInstruments({measInstruments}){

    return (
        <>
            <Row id ='tableLabel'>
                <h5>Measuring Instruments</h5>
            </Row>
            <Table striped bordered hover size="sm" id="measuringTable" className='equipmentTable'>
                <thead>
                <tr>
                    <th>Substation</th>
                    <th>Fider</th>
                    <th>Device</th>
                    <th>Device type</th>
                    <th>Limit</th>
                    <th>
                        Year
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-funnel" viewBox="0 0 16 16">
                            <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2h-11z"/>
                        </svg>
                    </th>
                    <th>Quantity</th>
                    <th>Next verification</th>
                </tr>
                </thead>
                <tbody>
                    { measInstruments.map((instrument, index)=>{
                        return <tr key={index}>
                            <td>{instrument.substation}</td>                           
                            <td>{instrument.fider}</td>
                            <td>{instrument.device}</td>                           
                            <td>{instrument.device_type}</td>
                            <td>{instrument.measurement_limit}</td>  
                            <td>{instrument.year}</td>                         
                            <td>{instrument.quantity}</td>
                            <td>{instrument.next_verification}</td>
                        </tr>
                    })}
                </tbody>
            </Table>
        </>
    );
}
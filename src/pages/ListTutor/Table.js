import ActivatedTable from './ActivatedTable';
import NotActivatedTable from './NotActivatedTable';
import { Tab, Tabs } from 'react-bootstrap';
import { useState } from 'react';
import style from './styles.scss';

export default function RenderTable() {
    const [key, setKey] = useState("activated");
    return (
        <div className='tutorList'>
            <h1 style={{"margin-bottom":"5%"}}>Danh sách gia sư</h1>
            <Tabs activeKey={key} onSelect={(k) => setKey(k)} className="custom-tab">
                <Tab eventKey={"activated"} title="Đã kích hoạt">                       
                   <ActivatedTable/>
                </Tab>
    
                <Tab eventKey={"notActivated"} title="Chưa kích hoạt">
                    <NotActivatedTable/>
                </Tab>
            </Tabs>
        </div>
    );
}

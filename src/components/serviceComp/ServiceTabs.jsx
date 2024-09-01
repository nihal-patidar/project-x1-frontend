import ValidatorInService from './ValidatorInService';
import QRpreView from './QRpreView';
import FormPreView from './FormPreView';
<<<<<<< HEAD

import React, { useMemo, useState,useContext } from 'react';
=======
import React, { useMemo, useState } from 'react';
>>>>>>> 82de2f5c54fa37fb213633fee3bd696d6262b9fd
import { Button, Checkbox, Divider, Tabs } from 'antd';
import { dataContext, DataState } from '../../context/DataState';
const CheckboxGroup = Checkbox.Group;
<<<<<<< HEAD

=======
const operations = <Button> Edit </Button>;
>>>>>>> 82de2f5c54fa37fb213633fee3bd696d6262b9fd
const OperationsSlot = {
  left: <Button className="tabs-extra-demo-button">Left Extra Action</Button>,
  right: <Button>Right Extra Action</Button>,
};

const ServiceTabs = ({formData=null,formQr=null,formUrl=null,formId=null,service_id}) => {
  // {formData=null,formQr=null,formUrl=null,formId=null}
  const {currentServiceFormId , setCurrentServiceFormId, openPopup} = useContext(dataContext);
    let items = [
    {
        label: 'Validator',
        key: '1',
        children: <ValidatorInService service_id = {service_id}/>
    },
    {
      label: 'QR',
      key: '2',
      children: <QRpreView formQr={formQr}/>
    },
    {
      label: 'Form',
      key: '3',
      children: <FormPreView formUrl={formUrl} formId={formId}/>
    }
];
  const [position, setPosition] = useState(['left', 'right']);
  const slot = useMemo(() => {
    if (position.length === 0) return null;
    return position.reduce(
      (acc, direction) => ({
        ...acc,
        [direction]: OperationsSlot[direction],
      }),
      {},
    );
  }, [position]);
  return (
    <>
      <Tabs tabBarExtraContent={<Button onClick={()=>{
      setCurrentServiceFormId(service_id);
      openPopup("updateServiceForm");
      }}>Edit </Button>} items={items} />

    </>
  );
};

export default ServiceTabs;
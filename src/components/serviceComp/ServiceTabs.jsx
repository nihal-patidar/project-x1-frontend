import ValidatorInService from './ValidatorInService';
import QRpreView from './QRpreView';
import FormPreView from './FormPreView';

import React, { useMemo, useState } from 'react';
import { Button, Checkbox, Divider, Tabs } from 'antd';
const CheckboxGroup = Checkbox.Group;
const operations = <Button>Extra Action</Button>;
const OperationsSlot = {
  left: <Button className="tabs-extra-demo-button">Left Extra Action</Button>,
  right: <Button>Right Extra Action</Button>,
};

const ServiceTabs = ({formData=null,formQr=null,formUrl=null,formId=null,service_id}) => {
  // {formData=null,formQr=null,formUrl=null,formId=null}
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
      <Tabs tabBarExtraContent={operations} items={items} />
    </>
  );
};


export default ServiceTabs;
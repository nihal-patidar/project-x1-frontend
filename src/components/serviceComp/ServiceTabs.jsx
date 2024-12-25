import React, { useMemo, useState,useContext,useEffect, Suspense } from 'react';
// import ValidatorInService from './ValidatorInService';
const ValidatorInService = React.lazy(()=>import('./ValidatorInService'))
import QRpreView from './QRpreView';
import FormPreView from './FormPreView';

import { Button, Checkbox, Divider, Tabs } from 'antd';
import { dataContext, DataState } from '../../context/DataState';
const CheckboxGroup = Checkbox.Group;

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
        children: <Suspense><ValidatorInService service_id = {service_id}/></Suspense>
    },
    {
      label: 'QR',
      key: '2',
      children: <QRpreView formQr={formQr}/>
    },
    {
      label: 'Form',
      key: '3',
      children: <FormPreView formUrl={formUrl} formId={formId} service_id={service_id}/>
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

  useEffect(()=>{
    console.log("Services Tab Rendered ", service_id)
  },[])
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
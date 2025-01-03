import React, {
  useMemo,
  useState,
  useEffect,
  Suspense,
} from "react";
const ValidatorInService = React.lazy(() => import("./ValidatorInService"));
import QRpreView from "./QRpreView";
import FormPreView from "./FormPreView";


import { Button, Checkbox, Divider, Tabs } from "antd";
import { useNavigate } from "react-router-dom";
import OverViewStrip from "./OverView";
const CheckboxGroup = Checkbox.Group;

const OperationsSlot = {
  left: <Button className="tabs-extra-demo-button">Left Extra Action</Button>,
  right: <Button>Right Extra Action</Button>,
};

const ServiceTabs = ({
  formData = null,
  formQr = null,
  formUrl = null,
  formId = null,
  service_id,
}) => {


    const navigate = useNavigate();

    

  let items = [
    {
      label: "Validator",
      key: "1",
      children: 
        <Suspense>
          <ValidatorInService service_id={service_id} />
        </Suspense>
    },
    {
      label: "Visitor",
      key: "4",
      children : <OverViewStrip service_id={service_id}/>
      
    },
    {
      label: "QR",
      key: "2",
      children: <QRpreView formQr={formQr} />,
    },
    {
      label: "Form",
      key: "3",
      children: (
        <FormPreView
          formUrl={formUrl}
          formId={formId}
          service_id={service_id}
        />
      ),
    },
    
  ];
  const [position, setPosition] = useState(["left", "right"]);
  const slot = useMemo(() => {
    if (position.length === 0) return null;
    return position.reduce(
      (acc, direction) => ({
        ...acc,
        [direction]: OperationsSlot[direction],
      }),
      {}
    );
  }, [position]);

  useEffect(() => {
    console.log("Services Tab Rendered ", service_id);
  }, []);
  return (
    <>
      <Tabs
        tabBarExtraContent={
          <Button
            onClick={() => {
              navigate('/home/update-service-data',{state : {service_id : service_id}})
            }}
          >
            Edit{" "}
          </Button>
        }
        items={items}
        className="px-2 py-3 sm:px-2 sm:py-5 "
      />
    </>
  );
};

export default ServiceTabs;

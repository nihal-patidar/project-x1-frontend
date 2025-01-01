import React, {
  useMemo,
  useState,
  useContext,
  useEffect,
  Suspense,
} from "react";
// import ValidatorInService from './ValidatorInService';
const ValidatorInService = React.lazy(() => import("./ValidatorInService"));
import QRpreView from "./QRpreView";
import FormPreView from "./FormPreView";


import { Button, Checkbox, Divider, Tabs } from "antd";
import { dataContext, DataState } from "../../context/DataState";
import ServiceVisitors from "./ServiceVisitors";
import { useNavigate } from "react-router-dom";
import ServiceDetails from "./ServiceDetails";
// import OverViewStrip from "./OverView";
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
  const { currentServiceFormId, setCurrentServiceFormId, openPopup } =
    useContext(dataContext);

    const navigate = useNavigate();

    const openVisitorArea = ()=>{
      navigate('/home/visitors',{state : {id : service_id}});
    }

  let items = [
    {
      label: "Visitor",
      key: "1",
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
    {
      label: "Validator",
      key: "4",
      // children: (<ServiceVisitors service_id={service_id}></ServiceVisitors>),
      // children : <Button onClick={()=>openVisitorArea()} >Open Visitors</Button>
      children: 
        <Suspense>
          <ValidatorInService service_id={service_id} />
        </Suspense>
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
              // setCurrentServiceFormId(service_id);
              // openPopup("updateServiceForm");
            }}
          >
            Edit{" "}
          </Button>
        }
        items={items}
      />
    </>
  );
};

export default ServiceTabs;

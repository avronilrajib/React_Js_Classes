import React from "react";

import Card1 from "./componants/Mapping/Card1";
import Card from "./componants/ClassCpnt/Card";
import Icon from "./componants/ReactIcon/Icon";
import State from "./componants/State/State";
import Rendering from "./componants/Conditional_Rendaring/Rendering";
import EventClass from "./componants/EVENT_HANDER/EventClass";
import UseStateHook from "./componants/useState_hook/useStateHook";
import Previous_state from "./componants/previous state/Previous_state";
import EventBubbling from "./componants/Event_Bubbling/EventBubbling";
import CollectForm from "./componants/Collect_form_data/CollectForm";
import StateObject from "./componants/UseSatate_with_Object/StateObject";
import Child from "./componants/STATE_LIFTING/Child";
import Home from "./componants/state_lifting_principle/Home";
import Formik from "./componants/formik_package/Formik";
import YupFormik from "./componants/formik_package/YupFormik";

function App() {
  const receivedData = (chidData) => {
    console.log(chidData);
  };
  return (
    <div>
      {/* <Card title="Rajib" desc="This is rajib" /> */}
      {/* <Icon />
      <State /> */}
      {/* <Rendering />
      <EventClass /> */}
      {/* <Icon />
      <UseStateHook />
      <Previous_state />
      <EventBubbling /> */}
      {/* <CollectForm /> */}
      {/* <StateObject />
      <Child onChildData={receivedData} /> */}
      {/* <Home /> */}
      <Formik />
      <YupFormik />
    </div>
  );
}

export default App;

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
function App() {
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
      <CollectForm />
    </div>
  );
}

export default App;

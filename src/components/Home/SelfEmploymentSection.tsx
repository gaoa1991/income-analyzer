import React, { useState } from "react";
import {
  BorrowerScheduleC,
  createNewRecord
} from "../../models/BorrowerScheduleC";
import SelEmploymentRecord from "./SelEmploymentRecord";

import $ from "jquery";

const SelfEmploymentSection = () => {
  const [recordCount, updateRecordCount] = useState(0);
  const [records, updateRecords] = useState(Array<BorrowerScheduleC>());
  const year = new Date().getFullYear();

  const deleteRecord = (index: number) => {
    var record = records.find(item => item.id === index);

    if (record) {
      var idx = records.indexOf(record);
      var array = [...records];
      array.splice(idx, 1);
      updateRecords(array);
    }
  };

  const addNewRecord = () => {
    var newRecord = createNewRecord(recordCount, year);
    var array = [...records, newRecord];

    updateRecords(array);
    updateRecordCount(recordCount + 1);
  };

  const collapsePanel = (e: any) => {
    e.preventDefault();
    var element = $(e.target);
    var ibox = element.closest("div.ibox");
    var button = element.closest("i");
    var content = ibox.find("div.ibox-content");
    content.slideToggle(200);
    button.toggleClass("fa-chevron-up").toggleClass("fa-chevron-down");
    ibox.toggleClass("").toggleClass("border-bottom");
    setTimeout(function() {
      ibox.resize();
      ibox.find("[id^=map-]").resize();
    }, 50);
  };

  const closePanel = (e: any) => {
    e.preventDefault();
    var element = $(e.target);
    var content = element.closest("div.ibox");
    content.remove();
  };

  return (
    <div className="ibox">
      <div className="ibox-title">
        <h5>Self-Employment</h5>
        <div className="ibox-tools">
          <a className="collapse-link" onClick={collapsePanel}>
            <i className="fa fa-chevron-up" />
          </a>
          <a className="close-link" onClick={closePanel}>
            <i className="fa fa-times" />
          </a>
        </div>
      </div>
      <div className="ibox-content">
        {records.map(record => (
          <SelEmploymentRecord
            key={record.id}
            record={record}
            onDeleteRecord={deleteRecord}
          />
        ))}
      </div>
      <div className="ibox-footer">
        <button
          className="btn btn-primary btn-sm btn-block"
          onClick={addNewRecord}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default SelfEmploymentSection;

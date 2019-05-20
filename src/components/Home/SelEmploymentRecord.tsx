import React, { useState } from "react";
import { BorrowerScheduleC } from "../../models/BorrowerScheduleC";
import NumberFormat, { NumberFormatValues } from "react-number-format";
import PercentLabel from "../common/PercentLabel";

export interface SelEmploymentRecordProps {
  record: BorrowerScheduleC;
  onDeleteRecord(index: number): void;
}

export interface SelEmploymentRecordState {
  record: BorrowerScheduleC;
}

class SelEmploymentRecord extends React.Component<
  SelEmploymentRecordProps,
  SelEmploymentRecordState
> {
  state = {
    record: this.props.record
  };

  updateState(year: string, field: string, values: NumberFormatValues) {
    let prevRecord = Object.assign({}, this.state.record);

    switch (field) {
      case "netProfitLoss":
        if (year === "currentYear") {
          prevRecord.currentYear.netProfitLoss = values.floatValue;
        } else {
          prevRecord.previousYear.netProfitLoss = values.floatValue;
        }
        let currentVal = prevRecord.currentYear.netProfitLoss;
        let prevVal = prevRecord.previousYear.netProfitLoss;

        if (prevVal === 0) {
          prevRecord.delta.netProfitLoss = 0;
        } else {
          prevRecord.delta.netProfitLoss =
            (100 * (currentVal - prevVal)) / prevVal;
        }
    }

    console.log("newState", prevRecord);

    this.setState({ record: prevRecord });
  }

  render() {
    return (
      <>
        <div className="form-group row">
          <div className="col-lg-1">
            <button
              className="btn btn-w-m btn-danger"
              onClick={() => this.props.onDeleteRecord(this.props.record.id)}
            >
              Delete
            </button>
          </div>
        </div>
        <div className="form-group row">
          <label className="col-lg-2 col-md-3 col-form-label">Borrower</label>
          <div className="col-lg-10 col-md-9">
            <input className="form-control" />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-lg-2 col-md-3 col-form-label">
            Business Name
          </label>
          <div className="col-lg-10 col-md-9">
            <input className="form-control" />
          </div>
        </div>
        <div className="form-group row">
          <div className="offset-lg-4 offset-md-5 col-lg-8 col-md-7 col-sm-12">
            <div className="row">
              <label className="col col-form-label text-center">
                {this.props.record.currentYear.year}
              </label>
              <label className="col col-form-label text-center">
                {this.props.record.previousYear.year}
              </label>
              <label className="col col-form-label text-center">Delta</label>
            </div>
          </div>
        </div>
        <div className="form-group row">
          <label className="col-lg-4 col-md-5 col-form-label">
            Profit/Loss (+/-)
          </label>
          <div className="col-lg-8 col-md-7">
            <div className="row">
              <div className="col">
                <NumberFormat
                  value={this.state.record.currentYear.netProfitLoss}
                  className="form-control text-right"
                  displayType="input"
                  thousandSeparator={true}
                  prefix="$"
                  onValueChange={values =>
                    this.updateState("currentYear", "netProfitLoss", values)
                  }
                />
              </div>
              <div className="col">
                <NumberFormat
                  value={this.state.record.previousYear.netProfitLoss}
                  className="form-control text-right"
                  displayType="input"
                  thousandSeparator={true}
                  prefix="$"
                  onValueChange={values =>
                    this.updateState("previousYear", "netProfitLoss", values)
                  }
                />
              </div>
              <div className="col">
                <PercentLabel value={this.state.record.delta.netProfitLoss} />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default SelEmploymentRecord;
